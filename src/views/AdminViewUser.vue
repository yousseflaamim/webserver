<template>
  <div class="user-view">
    <h1 class="page-title">Booksters Website</h1>
    <div class="login-button">
      <button @click="login">Login</button>
    </div>
    <h2 class="search-title">Search:</h2>
    <input type="text" v-model="searchQuery" class="search-input" placeholder="Enter search query">
    <table class="books-table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Role</th>
          <th>Purchases</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.username }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.purchases }}</td>
          <td>
            <button @click="viewUser(user)">User</button>
            <button @click="viewBooks(user)">Books</button>
            <button @click="promoteUser(user)">Promote</button>
            <button @click="deleteUser(user)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      users: [
        
        {
          id: 1,
          username: 'User 1',
          role: 'Role 1',
          purchases: 3
        },
        {
          id: 2,
          username: 'User 2',
          role: 'Role 2',
          purchases: 5
        },
       
      ]
    };
  },
  methods: {
    login() {
      
    },
    viewUser(user) {
      
    },
    viewBooks(user) {
      
    },
    promoteUser(user) {
     
    },
    deleteUser(user) {
      
    }
  }
}
</script>

<style scoped>
.user-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.page-title {
  text-align: center;
}

.login-button {
  margin-top: 10px;
  text-align: right;
}

.search-title {
  margin-top: 20px;
}

.search-input {
  width: 300px;
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.books-table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

.books-table th,
.books-table td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
}

</style>
