<template>
   <div>
     <header class="header-container">
       <h1 class="title">Bookstore</h1>
     </header>
     <main class="content-container">
       <div class="form-container">
         <h2 class="form-title">Register a new account</h2>
         <form class="signup-form">
           <div class="form-group">
             <label for="username">Username:</label>
             <input type="text" id="username" v-model="username" required>
           </div>
           <div class="form-group">
             <label for="password">Password:</label>
             <input type="password" id="password" v-model="password" required>
           </div>
           <div class="form-group">
             <label for="confirm-password">Retype password:</label>
             <input type="password" id="confirm-password" v-model="confirmPassword" required>
           </div>
           <div class="form-group">
             <label for="terms">I have read and agree to the Terms and Conditions</label>
              <input type="checkbox" id="terms" v-model="agreeTerms">
           </div>
           <button class="signup-button" :disabled="!agreeTerms" @click="signup">Signup</button>
         </form>
       </div>
     </main>
   </div>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: #4CAF50;
  color: white;
}

.title {
  font-size: 24px;
}

.content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.form-container {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-title {
   display: flex;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.signup-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false
    };
  },
  methods: {
    signup() {
      // طريقة التسجيل هنا
    }
  }
}
</script>
