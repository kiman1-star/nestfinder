<template>
  <div class="details">
    <!-- Title and price -->
    <h1>{{ property.title }}</h1>
    <p class="price">Ksh {{ property.price.toLocaleString() }}</p>

    <!-- Image gallery -->
    <div class="gallery">
      <img
        v-for="(img, index) in property.image"
        :key="index"
        :src="img"
        class="gallery-img"
      />
    </div>

    <!-- Info grid -->
    <div class="info-grid">
      <p><strong>City:</strong> {{ property.city }}</p>
      <p><strong>Bedrooms:</strong> {{ property.bedrooms }}</p>
      <p><strong>Bathrooms:</strong> {{ property.bathrooms }}</p>
      <p><strong>Sq. Ft.:</strong> {{ property.sqft }}</p>
    </div>

    <!-- Description -->
    <p class="description">{{ property.description }}</p>

    <!-- Amenities -->
    <h3>Amenities</h3>
<ul>
  <li v-for="amenity in property.amenities" :key="amenity">
    <i class="fas fa-check"></i> {{ amenity }}
  </li>
</ul>
    <ul class="amenities">
      <li v-for="(amenity, index) in property.amenities" :key="index">
        <i :class="getAmenityIcon(amenity)"></i> {{ amenity }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { properties } from '../data/properties.js'

const route = useRoute()
const property = properties.find(p => p.id === Number(route.params.id))

// Helper function for icons
const getAmenityIcon = (amenity) => {
  switch (amenity.toLowerCase()) {
    case 'wifi':
      return 'fas fa-wifi'
    case 'parking':
      return 'fas fa-car'
    case 'kitchen':
      return 'fas fa-utensils'
    case 'air conditioning':
      return 'fas fa-fan'
    case 'laundry':
      return 'fas fa-tshirt'
    default:
      return 'fas fa-check-circle'
  }
}
</script>

<style scoped>
h1 {
  font-size: 3rem;       /* very large */
  font-weight: 900;      /* extra bold */
  color: #1e3a8a;        /* deep blue */
  margin-bottom: 10px;
  text-transform: uppercase; /* optional: makes it stand out */
  letter-spacing: 1px;   /* adds spacing for dramatic effect */
}
.details {
 background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}

.price {
  font-size: 22px;
  font-weight: bold;
  color: #2563eb;
  margin-bottom: 20px;
}

.gallery {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.gallery-img {
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
   border: 3px solid #2563eb;
  transition: transform 0.2s ease;
}
.gallery-img:hover {
  transform: scale(1.05);
}
.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.description {
  margin-bottom: 20px;
  line-height: 1.6;
}

.amenities {
  list-style: none;
  padding: 0;
}

.amenities li {
  margin-bottom: 8px;
}

.amenities i {
  margin-right: 8px;
  color: #2563eb;
}
</style>