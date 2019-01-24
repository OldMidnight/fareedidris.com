<script>
import NavBar from '@/components/nav-bar'

export default {
    components: { NavBar },
    created: function() {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width
        if (width <= 600) {
            this.is_mobile = true
        }
    },
}
</script>

<template>
    <div id="container">
        <NavBar v-if="this.$mq !== 'phone'"/>
        <transition name="layout-main" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight fast" mode="out-in">
            <slot />
        </transition>
        <NavBar v-if="this.$mq === 'phone'" />
    </div>
</template>

<style lang="scss" scoped>
@import '~animate.css/animate.min.css';
#container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
