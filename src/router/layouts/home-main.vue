<script>
import NavBar from '@/components/nav-bar'

export default {
    components: { NavBar }
}
</script>

<template>
    <div class="container">
        <NavBar />
	<slot />
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
