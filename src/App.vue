<template>

  <div>
    
    <LoginView /> 
    <UserView/>

    <GusetView/>

  </div>
</template>

<script>

import LoginView from './views/LoginView.vue'; 
import UserView from './views/UserView.vue';
import GuestView from './views/GuestView.vue'
//import RegisterView from './views/RegisterView.vue'; 

export default {
  components: {
    LoginView, 
    UserView,
    GuestView
  },
}
</script>

<style>

</style>

