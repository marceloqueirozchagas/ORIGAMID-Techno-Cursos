import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContatoView from '../views/ContatoView.vue'
import CursosView from '../views/CursosView.vue'
import CursoView from '../views/CursoView.vue'
import AulaView from '../views/AulaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contato',
      name: 'contato',
      component: ContatoView
    },
    {
      path: '/cursos',
      name: 'cursos',
      component: CursosView
    },
    {
      path: "/cursos/:curso",
      name: "curso",
      component: CursoView,
      props: true,
      children: [
        {
          path: ":aula",
          name: "aula",
          component: AulaView,
          props: true,
        }
      ]
    },
  ]
})

export default router
