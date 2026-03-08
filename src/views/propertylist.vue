<template>
  <div class="container">
    <!-- Search bar -->
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search by city or title..."
      class="search"
    />

    <!-- Grid of property cards -->
    <div class="grid">
      <div
        v-for="property in filteredProperties"
        :key="property.id"
        class="card"
      >
        <!-- Show the first image from the array -->
        <img :src="property.image[0]" class="image" />

        <h2>{{ property.title }}</h2>
        <p>{{ property.city }}</p>
        <p class="price">Ksh {{ property.price.toLocaleString() }}</p>
        <p>{{ property.bedrooms }} Bedrooms</p>
        <p>{{ property.bathrooms }} Bathrooms</p>
        <p>{{ property.sqft }} Sq. Ft.</p>

        <!-- Link to details page -->
        <router-link :to="`/property/${property.id}`">
          <button class="btn">View Details</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { properties } from '../data/properties.js'

export default {
  data() {
    return {
      searchQuery: "",
      properties
    }
  },
  computed: {
    filteredProperties() {
      return this.properties.filter(p =>
        p.city.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        p.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  }
}
</script>

<style scoped>
.container {
  padding: 30px;
}

.search {
  padding: 12px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  background: #f9fbff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

h2 {
  font-size: 22px;
  color: #007bff;
}

.price {
  font-size: 20px;
  font-weight: bold;
  color: #2563eb;
  margin: 8px 0;
}

.btn {
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  background: #2563eb;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 6px;
}

.btn:hover {
  background: #1e40af;
}
</style>