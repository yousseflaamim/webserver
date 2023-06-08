import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import UserView from '../views/UserView.vue';
import GusetView from '../views/GuestView.vue';



Vue.use(VueRouter)

const routes = [
  
  
  {
    path:'/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView
    
  },
  {
    path: '/userview',
    name: 'UserView',
    component: UserView
    
  },
  {
    path: '/gusetview',
    name: 'GusetView',
    component: GusetView
    
  }
]

const router = new VueRouter({
  routes
})

export default router
