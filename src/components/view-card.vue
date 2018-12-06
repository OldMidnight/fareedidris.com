<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
    mixins: [ clickaway ],
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
                btns[i].style.opacity = '0.5';
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
    <div v-bind:class="isMobileCard" v-if="viewSelected === false">
        <div class="view-card-header">
            <h3 class="card-name">{{ cardName }}</h3>
        </div>
        <div v-bind:class="isMobileCardBody">
            <p class="card-desc">{{ cardDescription }}</p>
            <button class="learn-more-btn" @click="select($event)" type="button">{{ buttonText }}</button>
        </div>
    </div>
    <div v-bind:class="isMobileCard" v-on-clickaway="closeCard" v-else>
        <div class="view-card-close">
            <font-awesome-icon icon="times" @click="closeCard" />
        </div>
        <div class="view-card-header">
            <h3 class="card-name">{{ cardName }}</h3>
        </div>
        <div v-bind:class="isMobileCardBody">
            <p class="card-desc">{{ cardBody }}</p>
            <BaseLink @click="deselect($event)" tag="button" :key="this.route.name" :to="this.route">
                {{ buttonBodyText }}
            </BaseLink>
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
    height: 450px;
    width: 45%;
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
    }
    button:hover {
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
    }
    button:hover {
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
}

.m-card-selected {
    height: auto;
    position: fixed;
    background-color: white;
    border-radius: 20px;
    @extend %shadow-large;
    top: 5%;
    font-size: 13px;

}
</style>
