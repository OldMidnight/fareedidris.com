<script>
const BaseLink = 'BaseLink'

export default {
    functional: true,
    props: {
        routes: {
            type: Array,
            required: true
        }
    },
    render(h, { props = {} }) {
        function getRouteTitle(route) {
        return typeof route.title === 'function' ? route.title() : route.title
    }
    return props.routes.map(route => (
        <router-link class="link-div" v-bind="$attrs" key={route.name} to={route}>
            <p class="link-p">{getRouteTitle(route)}</p>
        </router-link>
    ))
    }
}
</script>

<style lang="scss">
@import '~@/design/index.scss';

.link-div {
    width: 100%;
    text-align: center;
    height: 70px;
    line-height: 45px;
}

.link-div:hover {
    @extend %shadow-normal;
}

.link-p {
    width: 100%;
    height: 100%;
}
</style>
