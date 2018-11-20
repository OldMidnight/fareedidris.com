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
    <div id="app">
        <Layout>
            <router-view :key="$route.fullPath" />
	</Layout>
    </div>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
    color: black;
    outline: none;
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
    height: 100%;
    widthe: 100%;
}

a {
    text-decoration: none;
}
</style>
