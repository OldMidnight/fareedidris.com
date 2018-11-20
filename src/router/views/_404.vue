<script>

export default {
    page: {
        title: '404',
    meta: [{ name: 'description', content: '404' }]
    },
    props: {
        resource: {
        type: String,
        default: ''
    }
    }
}
</script>

<template>
    <Layout>
        <h1>
        404
        <template v-if="resource">
            {{ resource }}
        </template>
        Not Found
    </h1>
    </Layout>
</template>
