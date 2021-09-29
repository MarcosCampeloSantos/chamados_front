import Guard from '../services/Middleware/middleware'

export default[
    {
        path: '/',
        name: 'Login',
        component: () => import('../views/Login/Login.vue')
    },
    {
        path: '/Home',
        name: 'Home',
        component: () => import('../views/Home/Home.vue'),
        beforeEnter: Guard.auth
    },
    {
        path: '/Criar_User',
        name: 'CriarUser',
        component: () => import('../views/Usuario/CriarUser.vue'),
        beforeEnter: Guard.auth
    },
    {
        path: '/Painel_Adm',
        name: 'PainelAdm',
        component: () => import('../views/Adm/PainelAdm.vue'),
        beforeEnter: Guard.authAdm
    },
    {
        path: '/Chamado',
        name: 'Chamado',
        component: () => import('../views/Chamados/CriarChamado.vue'),
        beforeEnter: Guard.authAdm
    }

]