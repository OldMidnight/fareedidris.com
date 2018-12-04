<script>
import { api } from '@/api'
import { required, requiredIf, minLength, between, numeric, email } from 'vuelidate/lib/validators'
export default {
    name: 'ec2',
    data() {
        return {
            creds: {
                is_anon: false,
                student_num: '',
                student_email: '',
                lecturer_id: '',
                message_subject: '',
                message: '',
                urgent: false
            },
            message_added: 'initial',
            lecturer_options: [
                { text: "Rob Brennan: CA222 - Enterprise Information Systems", value: 1 },
                { text: "Stephen Blott: CA277 - Programming Fundamentals II", value: 2 },
                { text: "Alistair Sutherland: CA200 - Quantitative Analysis For Business Decisions", value: 3 },
                { text: "Jane Kernan: CA227 - Business Databases Management I", value: 4 },
                { text: "Renaat Verbruggen: CA228 - Systems Analysis/Business Systems Analysis", value: 5 }
            ],
            api_errors: {
                student_num: '',
                student_email: '',
                lecturer_id: '',
                message_subject: '',
                message: '',
            }
        }
    },
    computed: {
        returnAnon: function() {
            return this.creds.is_anon
        },
        isMobileView: function() {
            return this.$mq === 'phone' ? 'm-view-container' : 'view-container'
        },
        isMobileToolWrapper: function() {
            return this.$mq === 'phone' ? 'm-tool-wrapper' : 'tool-wrapper'
        },
        isMobileToolHeader: function() {
            return this.$mq === 'phone' ? 'm-tool-header' : 'tool-header'
        },
        isMobileToolBody: function() {
            return this.$mq === 'phone' ? 'm-tool-body' : 'tool-body'
        },
        isMobileToolFooter: function() {
            return this.$mq === 'phone' ? 'm-tool-footer' : 'tool-footer'
        },
        isMobileRadio: function() {
            return this.$mq === 'phone' ? 'm-radio-input' : 'radio-input'
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
                console.log(this.creds.student_num, this.creds.student_email)
            } else {
                this.creds.student_num = ''
                this.creds.student_email = ''
            }
        }
    },
    methods: {
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
            console.log('sending to api')
            console.log(this.creds.student_num, this.creds.student_email)
            this.message_added = 'processing'

            this.$v.$touch()

            if (this.$v.$invalid) {
                this.message_added = 'failed'
                console.log('send failed')
                console.log(this.$v)
            } else {
                if (this.message_added === 'processing') {
                api.post('validate', this.creds)
                    .then((response) => {
                        console.log(response)
                        if (response.data.added) {
                            this.message_added = 'added'
                        } else {
                            this.message_added = 'failed'
                        }
                    })
                    .catch((error) => {
                        var errors = error.response.data
                        console.log(errors.length)
                        if (Object.keys(errors).length > 0) {
                            console.log('sdgsdfgasdfgasd')
                            for (var key in errors) {
                                if (errors.hasOwnProperty(key)) {
                                    console.log(errors[key])
                                    console.log(this.api_errors)
                                    this.api_errors[key] = errors[key]
                                    console.log(this.api_errors)
                                }
                            }
                        }
                        this.message_added = 'failed'
                    })
                }
            }
        }
    }
}
</script>

<template>
    <div v-bind:class="isMobileView">
        <div v-bind:class="isMobileToolWrapper">
            <div v-bind:class="isMobileToolHeader">
                <h3>Unnamed EC2 Lecturer Communication Tool</h3>
                <p>Fill in the form below to send a message to a lecturer</p>
            </div>
            <div v-bind:class="isMobileToolBody">
                <transition name="tool-body-anim" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight slow" mode="out-in">
                    <div class="tool-body-container" key="added_initial" v-if="this.message_added !== 'added'" :class="{ blur: message_added === 'processing'}">
                        <div class="radio-input-container">
                            <div v-bind:class="isMobileRadio">
                                <label for="is_anon">Send Anonymously*</label>
                                <input type="checkbox" name="is_anon" v-model="creds.is_anon">
                            </div>
                        </div>
                        <input type="number" name="student_num" v-if="creds.is_anon === false" v-model.number="creds.student_num" placeholder="Student Number..." maxlength=8 required>
                        <input type="email" name="student_email" v-if="creds.is_anon === false" v-model="creds.student_email" placeholder="Student Email..." required>
                        <select v-model.number="creds.lecturer_id">
                            <option disabled value="">Please select one</option>
                            <option v-for="option in lecturer_options" :value="option.value" :key="option.value">
                                {{ option.text }}
                            </option>
                        </select>
                        <input type="text" name="message_subject" placeholder="Message Subject..." v-model="creds.message_subject" required>
                        <textarea name="message" v-model="creds.message" placeholder="Your Message..." required></textarea>
                        <div class="radio-input-container">
                            <div v-bind:class="isMobileRadio">
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
                        <BaseButton @click="resetMessage()">Send New Message</BaseButton>
                    </div>
                </transition>
            </div>
            <div v-bind:class="isMobileToolFooter">
                <p>* - Message that are sent anonymously will be viewed by myself to ensure it complies with DCU's email guidelines. Messages not sent anonymously will not be viewed by me but will go through validation for syntax and punctuation errors.</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
@import '~@/design/index.scss';
@import '~animate.css/animate.min.css';

.tool-body {
    width: 100%;
    height: 100%;
}

.m-tool-body {
    width: 100%;
    height: 75%;
}

.radio-input-container {
    margin: 5px;
}

.m-radio-input {
    label {
        font-size: 12px;
    }
}

input[type=number], input[type=text], input[type=email], select {
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
}

.view-container {
    margin-left: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 90%;
}

.m-view-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 93%;
    overflow-y: auto;
}

.tool-wrapper {
    height: 90%;
    width: 45%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-radius: %border-rounded-large;
    @extend %shadow-large;
}

.m-tool-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    height: 15%;
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
    height: 100%;
}


.tool-footer {
    display: flex;
    margin-top: 10px;
    padding-left: 20%;
    padding-right: 20%;
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
    height: 10%;
    p {
        font-size: 8px;
        color: #767676;
    }
}
.blur {
    opacity: 0.5;
}

.error {
    border: 1px solid red;
}
</style>

