import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'
import ScoreboardView from '../views/ScoreboardView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/game',
    name: 'game',
    component: GameView
  },
  {
    path: '/scoreboard',
    name: 'scoreboard',
    component: ScoreboardView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const names = routes.map(route => route.name)

router.beforeEach((to, from, next) => {
  if(to.name === 'game' && !to.params.player) next({ name: 'home' })
  else if(names.includes(to.name)) next()
  else next({ name: 'home' })
})

export default router
