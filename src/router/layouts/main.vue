<script>
import NavBar from '@/components/nav-bar'

export default {
    components: { NavBar },
    data() {
        return {
            drawer: null,
            items: [
                { title: 'Home', icon: 'dashboard', route: '/' },
                { title: 'Projects', icon: 'question_answer', route: 'Projects' }
            ]
        }
    },
    created: function() {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width
        if (width <= 600) {
            this.is_mobile = true
        }
    },
    methods: {
        navigatePage: function(route) {
            this.$router.push(route)
        }
    }
}
</script>

<template>
    <v-container fill-height>
        <v-layout class="d-flex flex-column">
            <NavBar :isMobile="this.$mq === 'phone' ? true : false" v-on:toggleDrawer="drawer = !drawer" />
            <transition name="layout-main" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight fast" mode="out-in">
                <slot />
            </transition>
            
        </v-layout>
    </v-container>
</template>

<style lang="scss" scoped>
@import '~animate.css/animate.min.css';
#container {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
