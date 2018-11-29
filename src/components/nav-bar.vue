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
	currentPath: ''
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
    </div>
</template>

<style lang="scss">
@import '~@/design/index.scss';
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
</style>
