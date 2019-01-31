<script>

export default {
}
</script>

<template>
    <v-toolbar>
        <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
        <v-toolbar-title><router-link to="/" style="color: black;">Fareed Idris</router-link></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <router-link to="Projects" class="nav-link"><v-btn flat>Projects</v-btn></router-link>
            <router-link to="/404" class="nav-link"><v-btn flat>Blog</v-btn></router-link>
        </v-toolbar-items>
    </v-toolbar>
</template>

<style lang="scss">
@import '~@/design/index.scss';
@import '~animate.css/animate.min.css';

.nav-link {
    height: 100%;
}
</style>
