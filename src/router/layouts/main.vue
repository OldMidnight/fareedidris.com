<script>
import NavBar from '@/components/nav-bar'

export default {
    components: { NavBar },
    data() {
        return {
	    is_mobile: false
	}
    },
    created: function() {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width
	if (width <= 600) {
	    this.is_mobile = true
	}
    }
}
</script>

<template>
    <div id="container">
        <NavBar v-if="is_mobile === false" />
	<transition name="layout-main" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight slow" mode="out-in">
	    <slot />
	</transition>
	<NavBar v-if="is_mobile === true" />
    </div>
</template>

<style lang="scss" scoped>
@import '~animate.css/animate.min.css';
#container {
    width: 100%;
    height: 100%;
    display: flex;
}

@media only screen and (max-width: 600px) {
    #container {
        width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
    }
}
</style>
