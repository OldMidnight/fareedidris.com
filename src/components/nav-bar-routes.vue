<script>
export default {
    functional: true,
    props: {
        routes: {
            type: Array,
            required: true
        },
        mq: {
            type: String,
            required: true
        }
    },
    computed: {
        isMobile: function() {
            return this.$mq === 'phone' ? true : false
        },
        isMobileDiv: function() {
            return this.$mq === 'phone' ? 'm-link-div' : 'link-div'
        }
    },
    render(h, { props = {} }) {
        function getRouteTitle(route) {
            return typeof route.title === 'function' ? route.title() : route.title
        }
    if (props.mq === 'phone') {
            return props.routes.map(route => (
                <router-link v-bind="$attrs" class="m-link-div" key={route.name} to={route}>
                <font-awesome-icon icon={route.icon}></font-awesome-icon>
                    <p>{getRouteTitle(route)}</p>
                </router-link>
            ))
    } else {
            return props.routes.map(route => (
                <router-link v-bind="$attrs" class="link-div" key={route.name} to={route}>
                    <p class="link-p">{getRouteTitle(route)}</p>
                </router-link>
            ))
        }
    }
}
</script>

<style lang="scss">
@import '~@/design/index.scss';

.link-div {
    width: 33%;
    text-align: center;
    height: 70px;
}

.m-link-div {
    height: 100%;
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        font-size: 10px;
        margin: 0;
    }
}

.m-link-div:hover {
    @extend %shadow-normal;
}

.link-div:hover {
    @extend %shadow-normal;
}

.link-p {
    color: black;
}
</style>
