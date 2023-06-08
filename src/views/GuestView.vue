<template>
  <div class="guest-view">
    <h1 class="page-title">Booksters Website</h1>
    <div class="login-button">
      <button @click="login">Login</button>
    </div>
    <h2 class="search-title">Search:</h2>
    <input type="text" v-model="searchQuery" class="search-input" placeholder="Enter search query">
    <table class="books-table">
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Book Author</th>
          <th>Availability</th>
        </tr>
      </thead>
      <tbody>
       
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.availability }}</td>
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
      books: [
      
        {
          id: 1,
          title: 'Book Title 1',
          author: 'Author 1',
          availability: 'Available'
        },
        {
          id: 2,
          title: 'Book Title 2',
          author: 'Author 2',
          availability: 'Unavailable'
        },
      
      ]
    };
  },
  methods: {
    login() {
      
    }
  }
}
</script>

<style scoped>
.guest-view {
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
