<script>
export default {
    props: {
        value: {
	    type: [String, Number],
	    default: ''
   	}
    },
    data() {
	return {
  	    isSelected: false
	}
    },
    methods: {
	select: function() {
	    this.isSelected = true;
	},
	deselect: function() {
		this.isSelected = false;
	}
    },
    computed: {
	listeners() {
	    return {
		...this.$listeners,
		input: event => this.$emit('input', event.target.value)
	    }
	}
    }
}
</script>

<template>
    <input v-bind:class="{ selected: isSelected }" :value="value" class="reg-input" v-on="listeners" v-on:focus="select" v-on:blur="deselect" />
</template>

<style lang="scss" scoped>
@import '~@/design/index.scss';

.reg-input{
    padding: 10px 20px 15px 20px;
    margin: 15px 10px 0 10px;
    border: 1px solid;
    border-radius: $border-rounded-large;
    @extend %shadow-small;
    color: #767676;
}

.selected {
    @extend %shadow-normal;
    border: 1px solid $kreoh-main-color;
}

</style>
