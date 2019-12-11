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
            },
            dialog: false
        }
    },
    watch: {
        dialog (val) {
            if (!val) return
                setTimeout(() => (this.dialog = false), 4000)
        },
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
                                if (errors.key) {
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
                .catch(() => {
                    this.password_valid = 'failed'
                })
        },
        refreshPage: function() {
            location.reload()
        }
    }
}
</script>

<template>
    <v-content>
        <transition name="tool-password-anim" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight slow" mode="out-in">
            <v-container fluid fill-height v-if="password_valid === 'initial' && password_accepted === false || password_valid === 'failed' && password_accepted === false">
                <v-layout column align-center justify-center>
                    <h3 style="margin-bottom: 1%;">Enter Today's Password:</h3>
                    <v-flex :xs1="this.$mq === 'phone'" :xs8="this.$mq !== 'phone'" sm1>
                        <v-text-field type="password" label="Password" outline v-model="password_data.password"></v-text-field>
                    </v-flex>
                    <v-btn color="info" @click="validatePassword()" v-if="password_valid === 'initial' || password_valid === 'failed'">Check Password</v-btn>
                </v-layout>
            </v-container>
            <v-container fluid fill-heigt v-if="password_accepted === true">
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md5>
                        <v-card class="elevation-6">
                            <v-layout column align-center style="padding-top: 10px;">
                                <v-toolbar-title>EC2 Automated Messenger</v-toolbar-title>
                                <p>Fill in the form below to send a message to a lecturer</p>
                            </v-layout>
                            <v-layout column align-center>
                                <!-- IS ANON CHECK -->
                                <v-checkbox :label="`Anonymous: ${creds.is_anon.toString()}`" v-model="creds.is_anon"></v-checkbox>
                                <!-- STUDENT NUMBER -->
                                <v-flex :class="{ form_input: this.$mq !== 'phone', m_form_input: this.$mq === 'phone' }" xs12 sm12 d-flex>
                                    <v-text-field label="Student Number" outline type="text" v-if="creds.is_anon === false" v-model.number="creds.student_num" required></v-text-field>
                                </v-flex>
                                <!-- STUDENT EMAIL -->
                                <v-flex :class="{ form_input: this.$mq !== 'phone', m_form_input: this.$mq === 'phone' }" xs12 sm12 d-flex>
                                    <v-text-field label="Student Email" outline type="email" v-if="creds.is_anon === false" v-model.number="creds.student_email" required></v-text-field>
                                </v-flex>
                                <!-- LECTURER SELECT -->
                                <v-flex :class="{ form_input: this.$mq !== 'phone', m_form_input: this.$mq === 'phone' }" xs12 sm12 d-flex>
                                    <v-select :items="lecturer_options" label="Lecturers" outline v-model="creds.lecturer_id"></v-select>
                                </v-flex>
                                <!-- MESSAGE SUBJECT -->
                                <v-flex :class="{ form_input: this.$mq !== 'phone', m_form_input: this.$mq === 'phone' }" xs12 sm12 d-flex>
                                    <v-text-field label="Message Subject" outline type="text" v-model="creds.message_subject" required></v-text-field>
                                </v-flex>
                                <!-- MESSAGE -->
                                <v-flex :class="{ form_input: this.$mq !== 'phone', m_form_input: this.$mq === 'phone' }" xs12 sm12 d-flex>
                                    <v-textarea outline name="message" label="Your Message..." required v-model="creds.message"></v-textarea>
                                </v-flex>
                                <v-checkbox :label="`Urgent Message: ${creds.urgent.toString()}`" v-model="creds.urgent"></v-checkbox>
                            </v-layout>
                            <v-layout column justify-center align-center>
                                <v-btn color="info" @click="sendMessage(); dialog = true" :disabled="dialog" :loading="dialog" v-if="message_added === 'initial' || message_added === 'failed'">Send Message</v-btn>
                                <v-btn color="info" v-else-if="message_added === 'processing'" class="blur">
                                    <font-awesome-icon icon="spinner" size="lg" pulse></font-awesome-icon>
                                </v-btn>
                                <v-dialog v-model="dialog" hide-overlay persistent width="300">
                                    <v-card color="primary" dark>
                                        <v-card-text v-if="message_added === 'processing'">
                                            Submitting message...
                                            <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                                        </v-card-text>
                                        <v-card-text v-else>
                                            Message Submitted!
                                            <v-icon>check_circle</v-icon>
                                            <v-btn color="info" @click="refreshPage()">Return</v-btn>
                                        </v-card-text>
                                    </v-card>
                                </v-dialog>
                                <v-flex>
                                    <p style="padding: 10px; text-align: center; font-size: 12px; color: #767676;">* - Message that are sent anonymously will be viewed by myself to ensure it complies with DCU's email guidelines. Messages not sent anonymously will not be viewed by me but will go through validation for syntax and punctuation errors.</p>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </transition>
    </v-content>
</template>


<style lang="scss">
@import '~animate.css/animate.min.css';

.form_input {
    width: 65%;
}

.m_form_input {
    width: 75%;
}
</style>

