<script>
import { api } from '@/api'
export default {
    page: {
        title: 'Admin - Message Verification'
    },
    data() {
        return {
            verify: {
                password: null
            },
            password_verified: false,
            messages: [],
            message_data: {
                password_verified: false,
                type: null
            },
            lecturers: {
                1: 'Jane Kernan <jane.kernan@dcu.ie>',
                2: 'John McKenna <john.mckenna@dcu.ie>',
                3: 'Brian Stone <brian.stone@dcu.ie>',
                4: 'Jennifer Foster <jennifer.foster@dcu.ie>',
                5: 'Rory O Connor <Rory,OConnor@dcu.ie>'
            },
            validated_messages: [],
            message_type_options: [
                {text: 'Anonymous Messages', value: 'anonymous'},
                {text: 'Identified Messages', value: 'identified'}
            ]
        }
    },
    name: 'Admin',
    methods: {
        getMessages: function() {
            this.message_data.password_verified = this.password_verified == true ? true : false
            api.post('ec2/admin/messages', this.message_data)
                .then((response) => {
                    this.messages = response.data.messages
                    this.messages.forEach(message => {
                        this.validated_messages.push({validated: false, m_id: message.m_id})
                    });
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        checkPassword: function() {
            api.post('ec2/admin/validate', this.verify)
                .then((response) => {
                    if (response.data.validated) {
                        this.password_verified = true
                        this.getMessages()
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        sortValidation: function(m_id) {
            console.log(m_id)
            var message = this.validated_messages.find(element => {
                return element.m_id = m_id
            })
            message.validated = ! message.validated
        },
        sendValidated: function() {
            api.post('ec2/admin/set_validated', this.validated_messages)
                .then((response) => {
                    if(response.data.updated) {
                        location.reload()
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    
}
</script>

<template>
    <v-content>
        <v-container fluid fill-height v-if="!password_verified">
            <v-layout column align-center justify-center>
                <v-flex :xs12="this.$mq !== 'phone'" :xs1="this.$mq === 'phone'" sm1 d-flex>
                    <v-select :items="message_type_options" label="Select Option..." outline v-model="message_data.type"></v-select>
                </v-flex>
                <v-flex :xs12="this.$mq !== 'phone'" :xs1="this.$mq === 'phone'" sm1>
                    <v-text-field label="Password" placeholder="Password..." outline type="password" v-model="verify.password"></v-text-field>
                </v-flex>
                <v-btn color="success" @click="checkPassword()">Submit</v-btn>
            </v-layout>
        </v-container>
        <v-container fluid fill-height v-else>
            <v-layout column align-center justify-center>
                <v-flex xs12 sm2 v-for="message in messages" class="message_box" :key="message.m_id">
                    <h4>Subject: {{ message.subject }}</h4>
                    <h5>To: {{ lecturers[message.lecturer_id] }}</h5>
                    <p>Message: {{ message.body }}</p>
                    <v-checkbox label="Validate" @change="sortValidation(message.m_id)"></v-checkbox>
                </v-flex>
                <v-btn @click="sendValidated()" color="success">Submit</v-btn>
            </v-layout>
        </v-container>
    </v-content>
</template>

<style lang="scss">
@import '~@/design/index.scss';

.message_box {
    width: 75%;
    border: 2px solid;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
}

.message-view-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.password-input {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 50%;
    width: 50%;
    border: 1px solid;
}
</style>
