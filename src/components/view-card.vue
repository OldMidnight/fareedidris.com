<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
    mixins: [ clickaway ],
    data() {
        return {
            dialog: false
        }
    },
    props: {
        cardName: {
            type: String,
            default: 'Card View'
        },
        cardDescription: {
            type: String,
            default: 'Mini Description'
        },
        buttonText: {
            type: String,
            default: 'Click Here...'
        },
        cardBody: {
            type: String,
            default: ''
        },
        buttonBodyText: {
            type: String,
            default: 'Click Here...'
        },
        route: {
            type: Object,
            required: false
        },
        aHref: {
            type: String,
            required: false
        }
    },
    methods: {
        closeCard: function() {
            if (this.viewSelected) {
                var c;
                if (this.$mq === 'phone') {
                    c = document.querySelector('.m-card-selected')
                    c.classList.remove('m-card-selected')
                } else {
                    c = document.querySelector('.card-selected')
                    c.classList.remove('card-selected')
                }
                document.body.style.backgroundColor = "white"
                this.viewSelected = false
            }
            var btns = document.getElementsByClassName('learn-more-btn')
            for (var i = 0; i < btns.length; i++) {
                btns[i].style.opacity = '1';
            }
        },
        select: function(e) {
            var parentEl = e.target.parentElement.parentElement
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
            if (this.$mq === 'phone') {
                parentEl.classList.add('m-card-selected')
            } else {
                parentEl.classList.add('card-selected')
            }
            this.viewSelected = true
            var btns = document.getElementsByClassName('learn-more-btn')
            for (var i = 0; i < btns.length; i++) {
                if (btns[i] !== e.target) {
                    btns[i].style.opacity = '0.5';
                }
            }
        },
        deselect: function(e) {
            var el = e.target.parentElement.parentElement
            document.body.style.backgroundColor = "white"
            if (this.$mq === 'phone') {
                el.classList.remove('m-card-selected')
            } else {
                el.classList.remove('card-selected')
            }
            this.viewSelected = false
        }
    },
    data() {
        return {
            viewSelected: false,
        }
    },
    computed: {
        isMobileCard: function() {
            return this.$mq === 'phone' ? 'm-view-card' : 'view-card'
        },
        isMobileCardBody: function() {
            return this.$mq === 'phone' ? 'm-view-card-body' : 'view-card-body'
        }
    }
}
</script>

<template>
    <div v-bind:class="isMobileCard">
        <div class="view-card-header">
            <h3 class="card-name">{{ cardName }}</h3>
        </div>
        <div v-bind:class="isMobileCardBody">
            <p class="card-desc">{{ cardDescription }}</p>
            <div class="text-xs-center">
                <v-dialog v-model="dialog" width="500">
                    <v-btn slot="activator" color="info" dark>Click Me</v-btn>
                    <v-card>
                        <v-card-title class="headline grey lighten-2" primary-title>{{ cardName }}</v-card-title>
                        <v-card-text>
                            {{ cardBody }}
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <BaseLink :to="this.route" :href="this.aHref" :key="this.route.name">
                                <v-btn color="primary" flat @click="dialog = false">{{ buttonBodyText }}</v-btn>
                            </BaseLink>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '~@/design/index.scss';
.view-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 35%;
    margin: 30px;
    padding: 2%;
    @extend %shadow-normal;
    text-align: center;
    transition: 0.5s;
}

.m-view-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 30px;
    padding: 2%;
    text-align: center;
    transition: 0.5s;
    border-top: 1px solid #e6e6e6;
}

.view-card-close {
    display: flex;
    justify-content: right;
    width: 100%;
    padding: 5px;
    svg {
        cursor: pointer;
    }
}

.view-card-header {
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.view-card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    button {
        background-color: $color-button-bg;
        height: 50px;
        color: $color-button-text;
        border-radius: $border-rounded-large;
        width: 40%;
        margin-top: 10px;
        border: 1px solid blue;
        padding: 0;
        cursor: pointer;
        transition: 0.5s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
            color: white;
        }
    }
    button:hover {
        @extend %shadow-small;
    }
    a {
        background-color: $color-button-bg;
        height: 50px;
        color: $color-button-text;
        border-radius: $border-rounded-large;
        width: 40%;
        margin-top: 10px;
        border: 1px solid blue;
        padding: 0;
        cursor: pointer;
        transition: 0.5s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
            color: white;
        }
    }
    a:hover {
        @extend %shadow-small;
    }
}

.m-view-card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    button {
        background-color: $color-button-bg;
        color: $color-button-text;
        border-radius: $border-rounded-large;
        height: 40px;
        width: 70%;
        margin-top: 10px;
        border: 1px solid blue;
        padding: 0;
        cursor: pointer;
        transition: 0.5s;
        margin-bottom: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
            color: white;
        }
    }
    button:hover {
        @extend %shadow-small;
    }
    a {
        background-color: $color-button-bg;
        color: $color-button-text;
        border-radius: $border-rounded-large;
        height: 40px;
        width: 70%;
        margin-top: 10px;
        border: 1px solid blue;
        padding: 0;
        cursor: pointer;
        transition: 0.5s;
        margin-bottom: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
            color: white;
        }
    }
    a:hover {
        @extend %shadow-small;
    }
}

.card-selected {
    height: auto;
    position: fixed;
    background-color: white;
    border-radius: 20px;
    @extend %shadow-large;
    top: 5%;
    z-index: 10;
}

.m-card-selected {
    height: 75%;
    position: fixed;
    background-color: white;
    border-radius: 5px;
    @extend %shadow-large;
    font-size: 15px;
    justify-content: initial;
    z-index: 10;
    overflow-y: auto;
    padding-left: 5%;
    padding-right: 5%;
}
</style>
