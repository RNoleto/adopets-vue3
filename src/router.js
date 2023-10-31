
import { createRouter, createWebHistory } from 'vue-router';

// Importe os componentes que deseja usar nas rotas a partir do diretório "pages"
import Home from './pages/Home.vue';
import About from './pages/About.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  }
];

import { createRouter, createWebHistory } from 'vue-router'

// Importe os componentes de suas páginas
import Home from './pages/Home.vue'
import About from './pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]


const router = createRouter({
  history: createWebHistory(),
  routes,

});

export default router;

})

export default router

