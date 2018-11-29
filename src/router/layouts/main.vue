<script>
import NavBar from '@/components/nav-bar'

export default {
    components: { NavBar },
    created: function() { console.log(document.getElementById('sidenav-pull')) }
}
</script>

<template>
    <div id="container">
        <NavBar />
	<transition name="layout-main" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight slow" mode="out-in">
	    <slot />
	</transition>
    </div>
</template>

<style lang="scss" scoped>
@import '~animate.css/animate.min.css';
#container {
    width: 100%;
    height: 100%;
    display: flex;
}
</style>
