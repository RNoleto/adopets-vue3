import { createRouter, createWebHistory } from 'vue-router';

// Importe os componentes que deseja usar nas rotas a partir do diretório "pages"
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Posts from './pages/Posts.vue';
import PostPage from './pages/PostPage.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import Adoption from './pages/Adoption.vue'


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
    path: '/posts',
    component: Posts,
  },
  {
    path: '/adoption',
    component: Adoption,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/post/:url',
    name: 'PostPage',
    component: () => import('@/pages/PostPage.vue'),
    props: true,
  },

  {
    path: '/:catchAll(.*)',
    redirect: '/',
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    nex('/login');
  } else {
    next();
  }
})

export default router;
