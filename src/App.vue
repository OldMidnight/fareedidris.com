<script>
import appConfig from '@/app.config'
import Layout from '@/router/layouts/main'
export default {
    page: {
        titleTemplate(title) {
            title = typeof title === 'function' ? title(this.$store) : title
            return title ? '${title} | ${appConfig.title}' : appConfig.title
        }
    },
    components: { Layout },
}
</script>

<template>
    <v-app>
        <div id="app">
            <Layout>
                <router-view :key="$route.fullPath" />
	        </Layout>
            <v-footer class="pa-3">
                <v-spacer></v-spacer>
                <div>&copy; {{ new Date().getFullYear() }}</div>
            </v-footer>
        </div>
    </v-app>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
    outline: none;
    font-family: 'Open Sans', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Quicksand', sans-serif;
}

html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

body {
    transition: background-color .5s;
}

#app {
    min-height: 100%;
    width: 100%;
}

a {
    text-decoration: none;
    color: black;
}
</style>
