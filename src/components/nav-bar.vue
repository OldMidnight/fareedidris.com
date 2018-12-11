<script>
import NavBarRoutes from './nav-bar-routes'

export default {
    components: { NavBarRoutes },
    data() {
        return {
            persistentNavRoutes: [
                {
                    name: 'home',
                    title: 'Home',
                    icon: 'home'
                },
                {
                    name: 'blog',
                    title: 'Blog',
                    icon: 'book-open'
                },
                {
                    name: 'projects',
                    title: 'Projects',
                    icon: ['far', 'folder-open']
                }
            ],
            hovered: {
                'github': false,
                'telegram': false,
                'twitter': false,
                'linkedin': false
            },
        }
    },
    computed: {
        isMobileContainer: function() {
            return this.$mq === 'phone' ? 'm-sidenav-container' : 'sidenav-container'
        },
        isMobileHeader: function() {
            return this.$mq === 'phone' ? 'm-sidenav-header-a' : 'sidenav-header-a'
        },
        isMobileRoutes: function() {
            return this.$mq === 'phone' ? 'm-nav-routes' : 'nav-routes'
        }
    }
}
</script>

<template>
    <div v-bind:class="isMobileContainer">
        <router-link v-bind:class="isMobileHeader" to="/">
            <div id="sidenav-header">
                <p>Fareed Idris</p>
            </div>
        </router-link>
        <div v-bind:class="isMobileRoutes">
            <NavBarRoutes :routes="persistentNavRoutes" :mq="this.$mq" />
        </div>
    </div>
</template>

<style lang="scss">
@import '~@/design/index.scss';
@import '~animate.css/animate.min.css';

.sidenav-container {
    z-index: 10;
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    transition: 0.5s;
    justify-content: space-evenly;
    border-bottom: 1px solid #e6e6e6;
}

.m-sidenav-container {
    z-index: 10;
    position: fixed;
    top: 93%;
    display: flex;
    width: 100%;
    height: 7%;
    align-items: center;
    overflow-x: hidden;
    overflow-y: hidden;
    transition: 0.5s;
    border-top: 2px solid #e6e6e6;
    background-color: white;
    justify-content: space-evenly
}

.sidenav-header-a {
    padding: 0;
    margin: 0;
    margin-left: 10%;
    width: 50%;
    display: flex;
}

.m-sidenav-header-a {
    display: none;
}

#sidenav-header {
    text-align: center;
    p {
        font-size: 16px;
    }
}

.nav-routes {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
}

.m-nav-routes {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
}
</style>
