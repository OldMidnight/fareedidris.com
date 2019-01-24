export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@/router/views/Home')
    },
    {
        path: '/Blog',
        name: 'blog',
        component: () => import('@/router/views/Blog')
    },
    {
        path: '/Projects',
        name: 'projects',
        component: () => import('@/router/views/Projects')
    },
    {
        path: '/Projects/EC2',
	    name: 'ec2',
	    component: () => import('@/router/views/EC2-tool')
    },
    //{
    //    path: '/MidnightCore',
	//    name: 'minightcore',
	//    component: () => import('@/router/views/MidnightCore-tool')
    //},
    {
        path: '/404',
        name: '404',
        component: () => require('@/router/views/_404').default,
        props: true
    },
    {
        path: '*',
        redirect: '404'
    }
]
