<script>
import NavBar from '@/components/nav-bar'

export default {
    components: { NavBar },
    created: function() { console.log(document.getElementById('sidenav-pull')) }
}
</script>

<template>
    <div id="container">
        <NavBar />
	<slot />
    </div>
</template>

<style lang="scss" scoped>
#container {
    width: 100%;
    height: 100%;
    display: flex;
}
</style>
