import { createRouter, createWebHistory } from 'vue-router';

// Importe os componentes que deseja usar nas rotas a partir do diretório "pages"
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Posts from './pages/Posts.vue';
import PostPage from './pages/PostPage.vue';


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
  //Pagina individual de cada post
  {
    path: '/post/:url',
    name: 'PostPage',
    component: () => import('@/pages/PostPage.vue'), // Use `import` aqui
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

export default router;
