
import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Post from './components/Post.vue';
import PostsList from './components/PostsList.vue';
import Home from './components/Body.vue';
import Page from './views/Page.vue';

Vue.use(Router);
                              // path url in application
export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/home',
    //   component: Home
    // },
    {
      path: '/login',
      component: Login
    },
    {
    path: '/page/:id',
    name:'page',
    component: Page
  },
    {
      path: '/register',
      component: Register
    },
    {
    path: '/post/:id',
    name: 'post',
    component: Post
  },
  {
    path: '/posts',
    name: 'posts-list',
    component: PostsList
  },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/BoardAdmin.vue')
    },
    {
      path: '/mod',
      name: 'moderator',
      component: () => import('./views/BoardModerator.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/BoardUser.vue')
    },
    

    {
      path: "/posts/:id",
      name: "post-details",
      component: () => import("./components/Post.vue")
    },

    {
      path: "/posts",
      name: "posts",
      component: () => import("./components/PostsList.vue")
    },

    {
      path: "/comments/:id",
      name: "comment",
      component: () => import("./components/Comment.vue")
    },

    {
      path: "/profile/:id",
      name: "ProfileOtherUser",
      component: () => import("./components/ProfileOtherUser.vue")
    },
                 
  ]
});
