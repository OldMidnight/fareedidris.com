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
        <div id="sidenav-header">
	    <p>Fareed Idris</p>
	</div>
        <NavBarRoutes :routes="persistentNavRoutes" />
    </div>
</template>

<style lang="scss">
#sidenav-container {
    position: fixed;
    display: flex;
    width: 15%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    background-color: #e6e6e6;
    overflow-x: hidden;
    transition: 0.5s;
}

#sidenav-header {
    text-align: center;
    p {
        font-size: 30px;
    }
}
</style>
