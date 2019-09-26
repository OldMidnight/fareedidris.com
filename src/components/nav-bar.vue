<script>

export default {
    props: {
        isMobile: {
            type: Boolean,
            default: false
        }
    },
}
</script>

<template>
    <!-- <v-toolbar>
        <v-toolbar-side-icon v-if="isMobile" @click.stop="$emit('toggleDrawer')"></v-toolbar-side-icon>
        <v-toolbar-title><router-link to="/" style="color: black;">Fareed Idris</router-link></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <router-link to="/Projects" class="nav-link"><v-btn flat>Projects</v-btn></router-link>
            <router-link to="/404" class="nav-link"><v-btn flat>Blog</v-btn></router-link>
        </v-toolbar-items>
    </v-toolbar> -->
    <v-layout>
        <v-flex class="d-flex justify-center">
            <router-link to="/" class="nav-link headline mr-8 elevation">Home</router-link>
            <router-link to="/Projects" class="nav-link headline ml-8">Projects</router-link>
        </v-flex>
    </v-layout>
</template>

<style lang="scss" scoped>
@import '~animate.css/animate.min.css';

.nav-link {
    color: black !important;
    transition: 0.3s;
}

.nav-link:hover {
    font-size: 30px !important;
}

</style>
