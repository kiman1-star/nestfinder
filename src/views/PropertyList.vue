<template>
  <div class="container">
    <!-- 😢 Empty state -->
    <p v-if="filteredProperties.length === 0" class="empty">
      No properties found 😢
    </p>

    <!-- 🏡 Property grid -->
    <div class="grid">
      <div
        v-for="property in filteredProperties"
        :key="property.id"
        class="card"
      >
        <!-- ❤️ Favorite icon -->
        <div class="favorite">❤️</div>

        <!-- 🖼️ Image -->
        <img :src="property.image?.[0]" class="image" />

        <!-- 📄 Info -->
        <h2>{{ property.title }}</h2>
        <p class="location">📍 {{ property.city }}</p>

        <p class="price">Ksh {{ property.price.toLocaleString() }}</p>

        <div class="details">
          <span>🛏️ {{ property.bedrooms }}</span>
          <span>🛁 {{ property.bathrooms }}</span>
          <span>📐 {{ property.sqft }} sqft</span>
        </div>

        <!-- 🔘 Button -->
        <router-link :to="`/details/${property.id}`">
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
/* 📦 Container */
.container {
  padding: 20px;
}

/* 🔍 Search */
.search {
  padding: 14px;
  width: 100%;
  font-size: 16px;
  margin-bottom: 25px;

  border: none;
  border-radius: 12px;

  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  outline: none;
}

/* 😢 Empty message */
.empty {
  text-align: center;
  color: #777;
  font-size: 16px;
}

/* 🏡 Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap:20px;
  width:100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* 🃏 Card */
.card {
  position: relative;
  border-radius: 16px;
  padding: 15px;
  background: white;

  box-shadow: 0 6px 20px rgba(0,0,0,0.08);

  text-align: left;

  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.12);
}

/* ❤️ Favorite */
.favorite {
  position: absolute;
  top: 12px;
  right: 12px;

  background: white;
  padding: 6px;
  border-radius: 50%;

  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

/* 🖼️ Image */
.image {
  width: 100%;
  height: 180px;
  object-fit: cover;

  border-radius: 12px;
  margin-bottom: 12px;
}

/* 🧾 Title */
h2 {
  font-size: 18px;
  color: #111;
  margin-bottom: 5px;
}

/* 📍 Location */
.location {
  color: #666;
  font-size: 14px;
}

/* 💰 Price */
.price {
  font-size: 18px;
  font-weight: bold;
  color: #2563eb;
  margin: 8px 0;
}

/* 📊 Details row */
.details {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #555;
  margin-bottom: 10px;
}

/* 🔘 Button */
.btn {
  width: 100%;
  padding: 10px;

  background: #2563eb;
  color: white;

  border: none;
  border-radius: 8px;

  cursor: pointer;
  font-size: 14px;

  transition: background 0.2s ease;
}

.btn:hover {
  background: #1e40af;
}

/* 📱 Mobile tweaks */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>