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
        closeCard: function(e) {
	    if (this.viewSelected) {
	        console.log(e)
	        var c = document.querySelector('.selected')
	        c.classList.remove('selected')
	        document.body.style.backgroundColor = "white"
	        this.viewSelected = false
	    }
	},
        select: function(e) {
	    var parentEl = e.target.parentElement.parentElement
	    document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
	    parentEl.classList.add('selected')
	    this.viewSelected = true
	},
	deselect: function(e) {
	    var el = e.target.parentElement.parentElement
	    document.body.style.backgroundColor = "white"
	    el.classList.remove('selected')
	    this.viewSelected = false
	}
    },
    data() {
        return {
	    viewSelected: false,
	}
    }
}
</script>

<template>
    <div class="view-card" v-if="viewSelected === false">
        <div class="view-card-header">
            <p class="card-name">{{ cardName }}</p>
	</div>
	<div class="view-card-body">
	    <p class="card-desc">{{ cardDescription }}</p>
	    <BaseButton @click="select($event)" type="button">{{ buttonText }}</BaseButton>
	</div>
    </div>
    <div class="view-card" v-on-clickaway="closeCard" v-else>
        <div class="view-card-close">
            <span @click="deselect($event)">close</span>
	</div>
        <div class="view-card-header">
            <p class="card-name">{{ cardName }}</p>
	</div>
	<div class="view-card-body">
	    <p class="card-desc">{{ cardBody }}</p>
	    <BaseLink @click="deselect($event)" tag="BaseButton" :key="this.route.name" :to="this.route">
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
    padding: 5%;
    @extend %shadow-normal;
    text-align: center;
    transition: 0.5s;
}

.view-card-close {
    display: flex;
    justify-content: right;
    width: 100%;
    span {
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
}

.selected {
    height: auto;
    position: fixed;
    background-color: white;
    border-radius: 20px;
    @extend %shadow-large;
    top: 5%;
}
</style>
