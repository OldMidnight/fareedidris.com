<script>
import { api } from '@/api'
import { required, requiredIf, minLength, between, numeric, email } from 'vuelidate/lib/validators'
export default {
    name: 'ec2',
    data() {
        return {
            creds: {
                is_anon: false,
                student_num: null,
                student_email: null,
                lecturer_id: null,
                message_subject: null,
                message: null,
                urgent: false
            },
            message_added: 'initial',
            password_valid: 'initial',
            password_data: {
                password: null,
            },
            password_accepted: false,
            lecturer_options: [
                { text: "Jane Kernan: CA227B - Business Database Management II", value: 1 },
                { text: "John McKenna: CA229 - Developing Internet Applications", value: 2 },
                { text: "Brian Stone: CA249 - Enterprise Computer Systems Configuration", value: 3 },
                { text: "Jennifer Foster: CA278 - Programming Fundamentals III", value: 4 },
                { text: "Rory O'Connor: CA279 - Professional Practice for Enterprise Computing", value: 5 }
            ],
            api_errors: {
                student_num: null,
                student_email: null,
                lecturer_id: null,
                message_subject: null,
                message: null,
            }
        }
    },
    computed: {
        returnAnon: function() {
            return this.creds.is_anon
        }
    },
    validations: {
        creds: {
            student_num: {
                required: requiredIf("returnAnon"),
                numeric,
                minLength: minLength(8),
            },
            student_email: {
                required: requiredIf("returnAnon"),
                email
            },
            lecturer_id: {
                required,
                numeric,
                between: between(1, 5)
            },
            message_subject: {
                required,
                minLength: minLength(12),
            },
            message: {
                required
            }
        }
    },
    watch: {
        "creds.is_anon": function() {
            if (this.creds.is_anon) {
                this.creds.student_num = 11111111
                this.creds.student_email = 'anonymous@mail.dcu.ie'
            } else {
                this.creds.student_num = ''
                this.creds.student_email = ''
            }
        }
    },
    methods: {
        isMobileElement: function(class_name) {
            return this.$mq === 'phone' ? 'm-' + class_name : class_name
        },
        resetMessage: function() {
            this.creds.is_anon = false
            this.creds.student_num = ''
            this.creds.student_email = ''
            this.creds.lecturer_id = ''
            this.creds.message_subject = ''
            this.creds.message = ''
            this.creds.urgent = ''
            this.api_errors.student_num = ''
            this.api_errors.student_email = ''
            this.api_errors.message_subject = ''
            this.api_errors.message = ''
            this.message_added = 'initial'
        },
        sendMessage: function() {
            this.message_added = 'processing'

            this.$v.$touch()

            if (this.$v.$invalid) {
                this.message_added = 'failed'
            } else {
                if (this.message_added === 'processing') {
                api.post('ec2/validate', this.creds)
                    .then((response) => {
                        if (response.data.added) {
                            this.message_added = 'added'
                        } else {
                            this.message_added = 'failed'
                        }
                    })
                    .catch((error) => {
                        var errors = error.response.data
                        if (Object.keys(errors).length > 0) {
                            for (var key in errors) {
                                if (errors.hasOwnProperty(key)) {
                                    this.api_errors[key] = errors[key]
                                }
                            }
                        }
                        this.message_added = 'failed'
			this.resetMessage()
                    })
                }
            }
        },
        inFocus: function(e) {
            var ele = e.target
            ele.classList.add('selected')
        },
        outFocus: function() {
            var ele = document.querySelector('.selected')
            ele.classList.remove('selected')
        },
        validatePassword: function() {
            this.password_valid = 'validating'
            api.post('ec2/validatePassword', this.password_data)
                .then((response) => {
                    if (response.data.valid) {
                        this.password_valid = 'valid'
                        this.password_accepted = true
                    } else {
                        this.password_valid = 'failed'
                    }
                })
                .catch((error) => {
                    this.password_valid = 'failed'
                })
        }
    }
}
</script>

<template>
    <div v-bind:class="isMobileElement('view-container')">
        <transition name="tool-password-anim" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight slow" mode="out-in">
            <div v-bind:class="isMobileElement('tool-password')" v-if="password_valid === 'initial' && password_accepted === false || password_valid === 'failed' && password_accepted === false">
                <h4>Enter Today's Password:</h4>
                <input type="password" placeholder="Password..." v-model="password_data.password">
                <BaseButton @click="validatePassword()" v-if="password_valid === 'initial' || password_valid === 'failed'">Check Password</BaseButton>
                <BaseButton v-else-if="password_valid === 'validating'" class="blur">
                    <font-awesome-icon icon="spinner" size="lg" pulse></font-awesome-icon>
                </BaseButton>
            </div>
            <div v-bind:class="isMobileElement('tool-wrapper')" v-if="password_accepted === true">
                <div v-bind:class="isMobileElement('tool-header')">
                    <h3>Unnamed EC2 Lecturer Communication Tool</h3>
                    <p>Fill in the form below to send a message to a lecturer</p>
                </div>
                <div v-bind:class="isMobileElement('tool-body')">
                    <transition name="tool-body-anim" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight slow" mode="out-in">
                        <div class="tool-body-container" key="added_initial" v-if="this.message_added !== 'added'" :class="{ blur: message_added === 'processing'}">
                            <div class="radio-input-container">
                                <div v-bind:class="isMobileElement('radio-input')">
                                    <label for="is_anon">Send Anonymously*</label>
                                    <input type="checkbox" name="is_anon" v-model="creds.is_anon">
                                </div>
                            </div>
                            <input type="number" name="student_num" @focus="inFocus($event)" @blur="outFocus()" v-if="creds.is_anon === false" v-model.number="creds.student_num" placeholder="Student Number..." maxlength=8 required>
                            <input type="email" name="student_email" v-if="creds.is_anon === false" @focus="inFocus($event)" @blur="outFocus()" v-model="creds.student_email" placeholder="Student Email..." required>
                            <select v-model.number="creds.lecturer_id">
                                <option disabled value="">Please select one</option>
                                <option v-for="option in lecturer_options" :value="option.value" :key="option.value">
                                    {{ option.text }}
                                </option>
                            </select>
                            <input type="text" name="message_subject" placeholder="Message Subject..." @focus="inFocus($event)" @blur="outFocus()" v-model="creds.message_subject" required>
                            <textarea name="message" v-model="creds.message" placeholder="Your Message..." @focus="inFocus($event)" @blur="outFocus()" required></textarea>
                            <div class="radio-input-container">
                                <div v-bind:class="isMobileElement('radio-element')">
                                    <label for="urgent">Urgent Message</label>
                                    <input type="checkbox" name="urgent" v-model="creds.urgent">
                                </div>
                            </div>
                            <BaseButton @click="sendMessage()" v-if="message_added === 'initial' || message_added === 'failed'">Send Message</BaseButton>
                            <BaseButton v-else-if="message_added === 'processing'" class="blur">
                                <font-awesome-icon icon="spinner" size="lg" pulse></font-awesome-icon>
                            </BaseButton>
                        </div>
                        <div class="tool-body-container" key="added" v-else>
                            <h3>Message Added</h3>
                            <BaseButton @click="resetMessage()">New Message</BaseButton>
                        </div>
                    </transition>
                </div>
                <div v-bind:class="isMobileElement('tool-footer')">
                    <p>* - Message that are sent anonymously will be viewed by myself to ensure it complies with DCU's email guidelines. Messages not sent anonymously will not be viewed by me but will go through validation for syntax and punctuation errors.</p>
                </div>
            </div>
        </transition>
    </div>
</template>


<style lang="scss">
@import '~@/design/index.scss';
@import '~animate.css/animate.min.css';

.tool-password {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.m-tool-password {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    button {
        width: 100%;
    }
    input {
        text-align: center;
    }
}

.tool-body {
    width: 100%;
}

.m-tool-body {
    width: 100%;
}

.radio-input-container {
    margin: 5px;
}

.m-radio-input {
    label {
        font-size: 12px;
    }
}

input[type=number], input[type=text], input[type=email], input[type=password], select {
    height: 50px;
    width: 75%;
    margin: 5px;
    padding-left: 10px;
}

textarea {
    width: 75%;
    height: 200px;
    margin: 5px;
    padding-left: 10px;
    padding-top: 10px;
}

.view-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.m-view-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 93%;
}

.tool-wrapper {
    width: 40%;
    padding: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: $border-rounded-normal;
    @extend %shadow-large;
}

.m-tool-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    padding-right: 5px;
    padding-left: 5px;
}

.tool-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
}

.m-tool-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    padding-top: 20px;
    h3 {
        margin: 0;
    }
    p {
        font-size: 14px;
    }
}

.tool-body-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}


.tool-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    p {
        font-size: 12px;
        color: #767676;
    }
}

.m-tool-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    p {
        font-size: 8px;
        color: #767676;
    }
}
.blur {
    opacity: 0.5;
}

.selected {
    border: 2px solid #0099ff;
    box-shadow: 0 1px 3px rgba(0,128,255,0.12), 0 1px 2px rgba(0,64,255,0.24);
}
</style>

