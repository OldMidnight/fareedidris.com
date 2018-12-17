<script>
export default {
  name: 'home',
  computed: {
        isMobileContainer: function() {
            return this.$mq === 'phone' ? 'm-home-view-container' : 'home-view-container'
        },
        isMobileHeader: function() {
            return this.$mq === 'phone' ? 'm-home-header' : 'home-header'
        },
        isMobileSocialContainer: function() {
            return this.$mq === 'phone' ? 'm-social-container' : 'social-container'
        },
        isMobileSocialWrapper: function() {
            return this.$mq === 'phone' ? 'm-social-wrapper' : 'social-wrapper'
        },
        isMobileSocialDiv: function() {
            return this.$mq === 'phone' ? 'm-social-div' : 'social-div'
        }
    }
}
</script>

<template>
    <div v-bind:class="isMobileContainer">
        <div v-bind:class="isMobileHeader">
            <p class="name">Fareed Idris</p>
            <p class="header-quote">Hi! Welcome to my website! Might not seem like much now, but not to worry, it's all still under construction. My projects page however is up and running so use the navbar to get started!</p>
            <div class="tmp-div" v-if="this.$mq !== 'phone'">
                <h3>EC2 Students! Submit your messages Here!</h3>
                <router-link to="Projects/EC2">
                    <BaseButton>Submit!</BaseButton>
                </router-link>
            </div>
        </div>
        <div class="m-tmp-div" v-if="this.$mq === 'phone'">
            <p>EC2 Students! Submit Your Messages Here!</p>
            <router-link to="Projects/EC2">
                <BaseButton>Submit!</BaseButton>
            </router-link>
        </div>
    <div v-bind:class="isMobileSocialContainer">
        <h3>Find Me On:</h3>
        <div v-bind:class="isMobileSocialWrapper">
                <a href="https://github.com/OldMidnight" target="_blank" v-bind:class="isMobileSocialDiv" id="github">
                <font-awesome-icon :icon="['fab', 'github']" size="2x"></font-awesome-icon>
            <p>Github</p>
        </a>
            <a href="https://www.linkedin.com/in/fareed-idris-96a710162" target="_blank" v-bind:class="isMobileSocialDiv" id="linkedin">
            <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"></font-awesome-icon>
            <p>LinkedIn</p>
                </a>
            <a href="https://t.me/OldMid" target="_blank" v-bind:class="isMobileSocialDiv" id="telegram">
            <font-awesome-icon :icon="['fab', 'telegram']" size="2x"></font-awesome-icon>
            <p>Telegram</p>
        </a>
            <a href="https://twitter.com/fareed_idris?s=09" target="_blank" v-bind:class="isMobileSocialDiv" id="twitter">
            <font-awesome-icon :icon="['fab', 'twitter']" size="2x"></font-awesome-icon>
            <p>Twitter</p>
        </a>
        </div>
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
    height: 50%;
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
    overflow-y: auto;
}

.tmp-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-top: 5%;
    text-align: center;
    a {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

.m-tmp-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 10%;
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

.social-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin-top: 5%;
}

.m-social-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.social-wrapper {
    display: flex;
    width: 100%;
}

.m-social-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.social-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    cursor: pointer;
    transition: 0.5s;
    p {
        margin: 0;
        margin-top: 10px;
    }
}

#github {
    border: 2px solid #6cc644;
    background-color: #6cc644;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
}

#telegram {
    border: 2px solid #0088cc;
    background-color: #0088cc;
}

#twitter {
    border: 2px solid #1da1f2;
    background-color: #1da1f2;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
}

#linkedin {
    border: 2px solid #e68523;
    background-color: #e68523;
}

.m-social-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    cursor: pointer;
    tarnsition: 0.5s;
    border-radius: 20px;
    margin: 5px;
    p {
        margin: 0;
        margin-top: 10px;
    }
}

.social-div:hover, .m-social-div:hover {
    @extend %shadow-normal;
}

</style>
