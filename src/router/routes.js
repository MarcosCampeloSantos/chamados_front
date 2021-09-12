export default[
    {
        path: '/',
        name: 'Login',
        component: () => import('../views/Login/Login.vue')
    },
    {
        path: '/Home',
        name: 'Home',
        component: () => import('../views/Home/Home.vue')
    },
    {
        path: '/Criar_User',
        name: 'CriarUser',
        component: () => import('../views/Usuario/CriarUser.vue')
    },
    {
        path: '/Painel_Adm',
        name: 'PainelAdm',
        component: () => import('../views/Adm/PainelAdm.vue')
    }
]