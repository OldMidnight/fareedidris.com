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
        isMobileSocial: function() {
            return this.$mq === 'phone' ? 'm-social-bar' : 'social-bar'
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
        <div v-bind:class="isMobileSocial">
            <h3>Find Me On:</h3>
            <div id="github" class="icon" @mouseover="hovered['github'] = true" @mouseout="hovered['github'] = false">
                <transition name="icon-animation" enter-active-class="animated fadeInRight faster" leave-active-class="animated fadeOutLeft faster" mode="out-in">
                    <font-awesome-icon :icon="['fab', 'github']" size="4x" v-if="hovered['github'] === false"></font-awesome-icon>
                    <a href="https://github.com/OldMidnight" target="_blank" class="social-link" v-else>
                        <p>git:OldMidnight</p>
                    </a>
                </transition>
            </div>
            <div id="telegram" class="icon" @mouseover="hovered['telegram'] = true" @mouseout="hovered['telegram'] = false">
                <transition name="icon-animation" enter-active-class="animated fadeInRight faster" leave-active-class="animated fadeOutLeft faster" mode="out-in">
                    <font-awesome-icon :icon="['fab', 'telegram']" size="4x" v-if="hovered['telegram'] === false"></font-awesome-icon>
                    <a href="https://t.me/OldMidnight" target="_blank" class="social-link" v-else>
                        <p>Telegram - OldMidnight</p>
                    </a>
                </transition>
            </div>
            <div id="twitter" class="icon" @mouseover="hovered['twitter'] = true" @mouseout="hovered['twitter'] = false">
                <transition name="icon-animation" enter-active-class="animated fadeInRight faster" leave-active-class="animated fadeOutLeft faster" mode="out-in">
                    <font-awesome-icon :icon="['fab', 'twitter']" size="4x" v-if="hovered['twitter'] === false"></font-awesome-icon>
                    <a href="https://twitter.com/fareed_idris" target="_blank" class="social-link" v-else>
                        <p>Twitter - Fareed_Idris</p>
                    </a>
                </transition>
            </div>
            <div id="linkedin" class="icon" @mouseover="hovered['linkedin'] = true" @mouseout="hovered['linkedin'] = false">
                <transition name="icon-animation" enter-active-class="animated fadeInRight faster" leave-active-class="animated fadeOutLeft faster" mode="out-in">
                    <font-awesome-icon :icon="['fab', 'linkedin']" size="4x" v-if="hovered['linkedin'] === false"></font-awesome-icon>
                    <a href="#" target="_blank" class="social-link" v-else>
                        <p>LinkedIn - Fareed Idris</p>
                    </a>
                </transition>
            </div>
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

.social-bar {
    display: none;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 100%;
    border-top: 1px solid #e6e6e6;
    .icon {
        padding: 0;
        width: 80%;
        height: 80%;;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;
        margin-bottom: 5px;
        border-radius: 10px;
        transition: 0.5s;
    }
    .icon:hover {
        @extend %shadow-small;
        cursor: pointer;
    }
}

.m-social-bar {
    display: none;
}

#github {
    border: 2px solid #6cc644;
}

#telegram {
    border: 2px solid #0088cc;
}

#twitter {
    border: 2px solid #1da1f2;
}

#linkedin {
    border: 2px solid #e68523;
}

.social-link {
    text-align: center;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    p {
        font-size: 14px;
    }
}
</style>
