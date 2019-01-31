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
    <div id="container">
        <NavBar :isMobile="this.$mq === 'phone' ? true : false" v-on:toggleDrawer="drawer = !drawer" />
        <transition name="layout-main" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight fast" mode="out-in">
            <slot />
        </transition>
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list class="pa-1">
                <v-list-tile avatar>
                    <v-list-tile-avatar @click="navigatePage('/')">
                        <img src="#" @click="navigatePage('/')">
                    </v-list-tile-avatar>
                    <v-list-tile-content @click="navigatePage('/')">
                        <v-list-tile-title @click="navigatePage('/')">Fareed Idris</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-list class="pt-0" dense>
                <v-divider></v-divider>
                <v-list-tile v-for="item in items" :key="item.title" @click='navigatePage(item.route)'>
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </div>
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
