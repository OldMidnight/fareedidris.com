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
            <router-view v-if="$route.path === '/Projects/DCU/CA357/ui_project'" :key="$route.fullPath"></router-view>
            <Layout v-else>
                <router-view :key="$route.fullPath" />
            </Layout>
            <v-footer v-if="$route.path !== '/Projects/DCU/CA357/ui_project'" class="pa-3">
                <div>Fareed Idris</div>
                <v-spacer></v-spacer>
                <div>&copy; {{ new Date().getFullYear() }}</div>
            </v-footer>
        </div>
    </v-app>
</template>                                                                                                                        m

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

.dcu-text-color {
  color: rgb(79, 134, 142)
}
</style>
