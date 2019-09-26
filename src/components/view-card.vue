<script>
export default {
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
            type: String
        },
        buttonBodyText: {
            type: String,
            required: false
        },
        route: {
            type: Object,
            required: false
        },
        link: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            dialog: false,
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
        <div class="view-card-header mb-2">
            <h3 class="card-name">{{ cardName }}</h3>
        </div>
        <div v-bind:class="isMobileCardBody">
            <p class="card-desc">{{ cardDescription }}</p>
            <div class="text-xs-center pb-5">
                <v-btn color="info" @click="dialog = true" dark>{{ buttonText }}</v-btn>
            </div>
        </div>
        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>Project Description</v-card-title>
                <v-divider></v-divider>
                <v-card-text>{{ cardBody }}</v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-flex>
                        <BaseLink :to="this.route" :href="this.link" :key="this.route.name" class="mr-3">
                            <v-btn color="success" class="pa-4">{{ buttonBodyText }}</v-btn>
                        </BaseLink>
                        <v-btn @click="dialog = false" color="error" class="pa-4">Close</v-btn>
                    </v-flex>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<style lang="scss">
@import '~@/design/index.scss';
.view-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 350px;
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
    padding-top: 5%;
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
    // button {
    //     background-color: $color-button-bg;
    //     height: 50px;
    //     color: $color-button-text;
    //     border-radius: $border-rounded-large;
    //     width: 40%;
    //     margin-top: 10px;
    //     border: 1px solid blue;
    //     padding: 0;
    //     cursor: pointer;
    //     transition: 0.5s;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     align-items: center;
    //     span {
    //         color: white;
    //     }
    // }
    // button:hover {
    //     @extend %shadow-small;
    // }
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
    // button {
    //     background-color: $color-button-bg;
    //     color: $color-button-text;
    //     border-radius: $border-rounded-large;
    //     height: 40px;
    //     width: 70%;
    //     margin-top: 10px;
    //     border: 1px solid blue;
    //     padding: 0;
    //     cursor: pointer;
    //     transition: 0.5s;
    //     margin-bottom: 25px;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     align-items: center;
    //     span {
    //         color: white;
    //     }
    // }
    // button:hover {
    //     @extend %shadow-small;
    // }
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
