<script>
import NavBarRoutes from './nav-bar-routes'

export default {
    components: { NavBarRoutes },
    data() {
        return {
            persistentNavRoutes: [
                {
                    name: 'home',
                    title: 'Home'
                },
                {
                    name: 'blog',
                    title: 'Blog'
                },
                {
                    name: 'projects',
                    title: 'Projects'
                }
            ],
	    hovered: {
	        'github': false,
		'telegram': false,
		'twitter': false,
		'linkedin': false
	    }
        }
    },
}

</script>

<template>
    <div id="sidenav-container">
        <router-link class="sidenav-header-a" to="/">
            <div id="sidenav-header">
	        <p>Fareed Idris</p>
	    </div>
	</router-link>
        <NavBarRoutes :routes="persistentNavRoutes" />
	<div id="social-bar">
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

#sidenav-container {
    z-index: 10;
    position: fixed;
    display: flex;
    width: 10%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    transition: 0.5s;
    border-right: 2px solid #e6e6e6;
    background-color: white;
}

.sidenav-header-a {
    padding: 0;
    margin: 0;
    width: 100%;
    @extend %center-column-div;
}

#sidenav-header {
    text-align: center;
    border: 1px solid;
    border-radius: 25px;
    background-color: $color-button-bg;
    margin: 10px;
    width: 80%;
    padding: 0 20px 0 20px;
    p {
        font-size: 16px;
	color: $color-button-text;
    }
}

#sidenav-header {
    @extend %shadow-small;
    cursor: pointer;
}

#social-bar {
    display: flex;
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
	svg {
	    z-index: 0;
	}
    }
    .icon:hover {
        @extend %shadow-small;
	cursor: pointer;
    }
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
