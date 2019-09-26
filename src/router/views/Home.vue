<script>
export default {
    name: 'home',
    data() {
        return {
            img_src: require('@/assets/avatar.jpg')
        }
    },
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
        },
        isMobileAvatarContainer: function() {
            return this.$mq === 'phone' ? 'm-avatar-container' : 'avatar-container'
        },
    }
}
</script>

<template>
    <v-layout column align-center v-bind:class="isMobileContainer" class="pt-9 mt-8">
        <div class="elevation-2" :class="isMobileAvatarContainer">
            <v-img class="avatar" :src="img_src"></v-img>
        </div>
        <div v-bind:class="isMobileHeader">
            <p class="name">Fareed Idris</p>
            <p class="header-quote">Hi! Welcome to my website! Here you can find some projects I've been working on, my resume and get in touch with me!</p>
        </div>
    <div v-bind:class="isMobileSocialContainer">
        <h3 style="margin-bottom: 1%;">Find Me On:</h3>
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
    </v-layout>
</template>

<style lang="scss" scoped>
@import '~@/design/index.scss';

.avatar-container {
    height: 250px;
    width: 250px;
    border-radius: 50%;
}

.m-avatar-container {
    height: 150px;
    width: 150px;
    border-radius: 50%;
}

.avatar {
    height: 100%;
    width: 100%;
    border-radius: 50%;
}

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
    // justify-content: center;
    height: 100%;
    padding-left: 15%;
    padding-right: 15%;
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
    /*a {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }*/
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
    color: black;
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
    transition: 0.5s;
    border-radius: 20px;
    margin: 5px;
    color: black;
    p {
        margin: 0;
        margin-top: 10px;
    }
}

.social-div:hover, .m-social-div:hover {
    @extend %shadow-normal;
}

</style>
