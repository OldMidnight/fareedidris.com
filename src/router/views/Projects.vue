<script>
import ViewCard from '@/components/view-card.vue'
export default {
    page: {
        title: 'Projects'
    },
    name: 'projects',
    components: { ViewCard },
    data() {
        return {
            projects: [
                {
                    id: 1,
                    name: 'MidnightCore',
                    description: "Easily customize and modify your Android device to make it yours. Using the Magisk Root tool, systemlessly change your device font, bootanimation or audio files to one of the 60+ provided, or easily apply your own with ease! Contains a neat toolkit to aid with debugging, log-collecting and fstrimming' your device for optimizations!",
                    btn_text: 'Learn More...',
                    card_body: "MidnightCore takes advantage of the Magisk Systemless Root Tool, to hook into the system partition of the device and modify files, all without breaking the integrity of the partition. You can find out more about Magisk Here! MidnightCore is made up multiple module packages I made individually, that I packaged together to make maintenance easier and reduce users needing to flash multiple zips. These Pakages Include: MidnightFonts: Systemlessly and easily change your device font from one of over 60+ available! MidnightMedia: Easily and systemlessly change devicde media files such as Bootanimations and audio files(Ringtones, Alarms, UI, Notifications)! Choose from over 40+ available files! MidnightMisc: A small toolset to aid in debugging and testing. Easily take term-specific logs, dumpsys' or gather the entire device log over a specified timelength. Also take advantage of Android's built in Fstrimming tool, to optimize your device. MidnightCustom: None of the available files in MidnightFonts and MidnightMedia up to your taste? Not to worry! Easily apply your own custom files using the easy to follow and simple steps provided! MidnightCore is targetted at all devices as long as they are running the latest Magisk Version. Issues: MidnightMedia bootanimation files will not work on newer Samsung devices that use the '.qmg' file format. Currently with 88k+ Views on XDA! Follow or Contribute to the project on Github or follow the progress on XDA Developers.",
                    btn_body_text: 'Check The Forums!',
                    route: {name: 'xda'},
                    link: 'https://forum.xda-developers.com/apps/magisk/module-midnightcore-one-midnight-modules-t3762758'
                },
                {
                    id: 2,
                    name: 'DCU EC2 Class Rep Tool',
                    description: "A small tool to help me as class rep, get recommendations, advice and messages for lecturers. Students can send messgaes anonymously or with their student number bound to their message. Messgaes will be accrued over the week and at the end of the week a batch email will be automatically sent to the specified lecturers.",
                    btn_text: 'Learn More...',
                    card_body: "This is a small tool that helps and automates my job as Class Rep by making it easier both for me and other students to send messages to lecturers. Some students may feel uncomfortable bringing issues and problems to the attention of their class reps or a lecturer, and this tool aims to solve this. The tool allows students to send messages either anonymously or via their student number. Anonymous messages will be hand checked by myself to ensure they comply with college email sending regulations, and messages sent via a student number will only go through server-side syntax checking and will be flagged if potential profanity or otherwise is found. Messages will be accrued over a weeks period and will be sent to the specified lecturers at the end of the week. Messages can be tagged as 'urgent' and can be sent immediately. Folllow this project over on Github! Are you an EC2 Student? Click the button below to send your message!",
                    btn_body_text: 'Send a Message...',
                    route: {
                        name: 'ec2',
                        title: 'EC2'
                    },
                },
                {
                    id: 3,
                    name: 'This Website!',
                    description: "Personal website used for hosting some of my projects.",
                    btn_text: 'Learn More...',
                    card_body: "The site is built using a Flask Backend with a VueJS Frontend. Any Database needs is done using Postgres with a Redis Cache. Everything is hosted on heroku.",
                    btn_body_text: 'Close',
                    route: {name: '#'},
                },
                {
                    id: 4,
                    name: 'Terminal Based Tetris',
                    description: 'A terminal based version of the classic game Tetris.',
                    btn_text: 'Learn More...',
                    card_body: 'Programmed in python, this is a rudimentary terminal based version of tetris. Players will move left and right using dedicated keyboard buttons as blocks of varying length descend. Done as part of a University project with 3 other members.',
                    btn_body_text: 'View Source Code',
                    route: {name: 'tetris'},
                    link: 'https://github.com/OldMidnight/Terminal_Tetris'
                }
            ]
        }
    },
    computed: {
        isMobileContainer: function() {
            return this.$mq === 'phone' ? 'm-projects-view-container' : 'projects-view-container'
        },
        isMobileHeader: function() {
            return this.$mq === 'phone' ? 'm-view-header' : 'view-header'
        },
        isMobileCards: function() {
            return this.$mq === 'phone' ? 'm-view-cards' : 'view-cards'
        },
        isMobileWrapper: function() {
            return this.$mq === 'phone' ? 'm-view-wrapper' : 'view-wrapper'
        }
    }
}
</script>

<template>
    <div v-bind:class="isMobileContainer">
        <div v-bind:class="isMobileWrapper">
            <div v-bind:class="isMobileHeader">
                <p id="view-header-text">My Projects</p>
                <p id="view-header-desc">Below are a couple of projects I have worked on in my free time.</p>
            </div>
            <div v-bind:class="isMobileCards">
                <ViewCard v-for="project in projects" :key="project.id" :cardName="project.name" :cardDescription="project.description" :buttonText="project.btn_text" :cardBody="project.card_body" :buttonBodyText="project.btn_body_text" :route="project.route" :link="project.link ? project.link : ''"></ViewCard>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.projects-view-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    margin-top: 2%;
}

.m-projects-view-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.view-wrapper{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}

.m-view-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

.view-cards {
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    justify-content: center;
    flex-wrap: wrap;
}

.m-view-cards {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
}

.view-header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 75%;
    text-align: center;
    //border: 1px solid #b3b3b3;
    border-radius: 25px;
    padding-bottom: 30px;
    #view-header-text {
        font-size: 30px;
        margin-bottom: 10px;
        font-weight: bold;
    }
    #view-header-desc {
        font-size: 15px;
        margin-top: 10px;
    }
}

.m-view-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    #view-header-text {
        font-size: 20px;
        margin-bottom: 10px;
        font-weight: bold;
    }
    #view-header-desc {
        font-size: 15px;
        text-align: center;
        padding-left: 15px;
        padding-right: 15px;
    }
}
</style>
