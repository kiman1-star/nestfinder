<template>
  <div v-if="property" class="details">

    <!-- 🔙 Back button -->
    <button class="back-btn" @click="goBack">
      <i class="fas fa-arrow-left"></i> Back
    </button>

    <!-- 🧾 Header -->
    <div class="header">
      <h1>{{ property.title }}</h1>
      <p class="price">Ksh {{ property.price.toLocaleString() }}</p>
    </div>

    <!-- 🖼️ Image Carousel -->
    <Carousel :items-to-show="1" :wrap-around="true" class="carousel">
      <Slide v-for="(img, index) in property.image" :key="index">
        <img :src="img" alt="Property image" class="slider-img" />
      </Slide>
    </Carousel>

    <!-- 📊 Info Cards -->
    <div class="info-grid">
      <div class="info-card">📍 {{ property.city }}</div>
      <div class="info-card">🛏️ {{ property.bedrooms }} Bedrooms</div>
      <div class="info-card">🛁 {{ property.bathrooms }} Bathrooms</div>
      <div class="info-card">📐 {{ property.sqft }} sqft</div>
    </div>

    <!-- 📄 Description -->
    <div class="section">
      <h3>Description</h3>
      <p class="description">{{ property.description }}</p>
    </div>

    <!-- ✅ Amenities -->
    <div class="section">
      <h3>Amenities</h3>
      <ul class="amenities">
        <li v-for="(amenity, index) in property.amenities" :key="index">
          <i :class="getAmenityIcon(amenity)"></i>
          {{ amenity }}
        </li>
      </ul>
    </div>

    <!-- 🔘 CTA Button -->
    <button class="contact-btn">Contact Agent</button>
  </div>

  <!-- 😢 Fallback -->
  <p v-else class="not-found">Property not found 😢</p>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { properties } from '../data/properties.js'

// Carousel
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const route = useRoute()
const router = useRouter()

// 🛡️ Safe property lookup
const property = properties.find(
  p => p.id === Number(route.params.id)
)

// 🎯 Icon helper
const getAmenityIcon = (amenity) => {
  switch (amenity.toLowerCase()) {
    case 'wifi': return 'fas fa-wifi'
    case 'parking': return 'fas fa-car'
    case 'kitchen': return 'fas fa-utensils'
    case 'air conditioning': return 'fas fa-fan'
    case 'laundry': return 'fas fa-tshirt'
    default: return 'fas fa-check-circle'
  }
}

// 🔙 Back button logic (safer UX)
const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
/* 🌍 Page background feel */
body {
  background: #f1f5f9;
}

/* 📦 Container */
.details {
  background: linear-gradient(135deg, #f5f7fb, #eef2f7);
  border-radius: 20px;
  padding: 25px;
  max-width: 900px;
  margin: 20px auto;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

/* 🔙 Back button */
.back-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: #2563eb;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 15px;
  transition: color 0.2s ease;
}

.back-btn i {
  font-size: 18px;
}

.back-btn:hover {
  color: #1e40af;
}

/* 🧾 Header */
.header {
  margin-bottom: 10px;
}

h1 {
  font-size: 26px;
  font-weight: 700;
  color: #111;
  margin-bottom: 5px;
}

.price {
  font-size: 22px;
  font-weight: bold;
  color: #2563eb;
}

/* 🖼️ Carousel */
.carousel {
  margin: 20px 0;
  border-radius: 16px;
  overflow: hidden;
}

.slider-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

/* 📊 Info grid */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
  margin: 20px 0;
}

.info-card {
  background: white;
  padding: 12px;
  border-radius: 12px;
  font-weight: 500;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

/* 📄 Sections */
.section {
  margin-top: 25px;
}

.section h3 {
  margin-bottom: 10px;
  font-size: 18px;
  color: #111;
}

.description {
  color: #555;
  line-height: 1.6;
}

/* ✅ Amenities */
.amenities {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  padding: 0;
  list-style: none;
}

.amenities li {
  background: white;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.05);
}

/* 🔘 CTA Button */
.contact-btn {
  width: 100%;
  margin-top: 25px;
  padding: 14px;
  background: linear-gradient(135deg, #2563eb, #1e40af);
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
}

/* 😢 Fallback */
.not-found {
  text-align: center;
  margin-top: 50px;
  color: #777;
  font-size: 18px;
}
</style>