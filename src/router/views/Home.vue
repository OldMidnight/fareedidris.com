<script>
export default {
  name: 'home',
  computed: {
        isMobileContainer: function() {
            return this.$mq === 'phone' ? 'm-home-view-container' : 'home-view-container'
        },
        isMobileHeader: function() {
            return this.$mq === 'phone' ? 'm-home-header' : 'home-header'
        }
    }
}
</script>

<template>
    <div v-bind:class="isMobileContainer">
        <div v-bind:class="isMobileHeader">
            <p class="name">Fareed Idris</p>
            <p class="header-quote">Hi! Welcome to my website! Might not seem like much now, but not to worry, it's all still under construction. My projects page however is up and running so use the navbar on your left to get started!</p>
        </div>
        <div class="m-tmp-div" v-if="this.$mq === 'phone'">
            <p>EC2 Students! Submit Your Messages Here!</p>
            <router-link to="Projects/EC2">
                <BaseButton>Submit!</BaseButton>
            </router-link>
        </div>
    </div>
</template>

<style lang="scss">
@import '~@/design/index.scss';
.home-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20%;
    .name {
        font-size: 40px;
        font-weight: bold;
    }
    .header-quote {
        text-align: center;
    }
}

.m-home-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    .name {
        font-size: 40px;
        font-weight: bold;
    }
    .header-quote {
        text-align: center;
    }
}

.home-view-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 90%;
    margin-left: 10%;
    padding-left: 10%;
    padding-right: 10%;
}

.m-home-view-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 93%;
    width: 100%;
    margin-left: 0;
    padding-left: 5%;
    padding-right: 5%;
}

.m-tmp-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 10px;
    text-align: center;
    p {
        font-weight: bold;
        font-size: 20px;
    }
    a {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        button {
            width: 50%;
        }
    }
}
</style>
