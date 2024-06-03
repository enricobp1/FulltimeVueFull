import { createRouter, createWebHistory } from 'vue-router'
import DespachoView from '../views/VeiculosView.vue'
import GerenciamentoView from '../views/GerenciamentoView.vue'
import RegistroView from '../views/CadastroView.vue'
import VeiculosView from '../views/VeiculosView.vue'
import CadastroView from '../views/CadastroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/veiculo',
      name: 'Veículos',
      component: VeiculosView
    },
    {
      path: '/',
      name: 'Gerenciamento',
      component: GerenciamentoView
    },
    {
      path: '/cadastro',
      name: 'Cadastros',
      component: CadastroView
    }
  ]
})

export default router
