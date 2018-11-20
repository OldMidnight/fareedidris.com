<template>
    <button class="button" v-on="$listeners">
	<slot />
    </button>
</template>

<style lang="scss" scoped>
@import '~@/design/index.scss';

.button {
    background-color: $color-button-bg;
    height: 50px;
    color: $color-button-text;
    border-radius: $border-rounded-large;
    width: 35%;
    margin: auto;
    margin-top: 15px;
    border: 1px solid black;;
    padding: 0;
    cursor: pointer;
    transition: 0.5s;
}

.button:hover {
    @extend %shadow-normal;
}
</style>
