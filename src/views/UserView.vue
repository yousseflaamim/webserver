<template>
  <div>
   <header class="header-container">
      <div class="title-container">
     <h1 class="title">Bookstore</h1>  
    </div>
      <div class="logout-button">
        <button class="btn" @click="logout">Logout</button>
      </div>
    </header>
    <h2 class="search-title">Search:</h2>
    <input type="text" v-model="searchQuery" class="search-input" placeholder="Enter search query">
    <table class="books-table">
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Book Author</th>
          <th>Availability</th>
          <th>Order</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through books data and display rows -->
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.availability }}</td>
          <td>{{ book.order }}</td>
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
          availability: 'Available',
          order: 'Order Now'
        },
        {
          id: 2,
          title: 'Book Title 2',
          author: 'Author 2',
          availability: 'Unavailable',
          order: 'Out of Stock'
        },
        
      ]
    };
  },
  methods: {
    logout() {
     
    }
  }
}
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background-color: #4CAF50;
  color: white;
  padding: 0 20px;
}

.title-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.title {
  font-size: 24px;
}

.logout-button {
  display: flex;
  align-items: center;
}

.btn {
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
