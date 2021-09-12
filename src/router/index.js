import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/Login.vue'
import CriarUser from '../views/Usuario/CriarUser.vue'
import PainelAdm from '../views/Adm/PainelAdm.vue'
import Home from '../views/Home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Criar_User',
    name: 'CriarUser',
    component: CriarUser
  },
  {
    path: '/Painel_Adm',
    name: 'PainelAdm',
    component: PainelAdm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
