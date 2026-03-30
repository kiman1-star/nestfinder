<template>
  <div class="contact-page">
    <!-- 🔙 Back button -->
    <button class="back-btn" @click="goBack">
      <i class="fas fa-arrow-left"></i> Back
    </button>

    <h1>Contact Us</h1>
    <p>We’d love to hear from you! Fill out the form below and our team will get back to you.</p>

    <form class="contact-form">
      <label>Name:</label>
      <input type="text" />

      <label>Email:</label>
      <input type="email" />

      <label>Message:</label>
      <textarea></textarea>

      <button type="submit" class="submit-btn">Send</button>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// 🔙 Back button logic (same as PropertyDetails.vue)
const goBack = () => {
  router.push('/')   // sends user back to homepage
}
</script>

<style scoped>
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

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
}

.contact-form input,
.contact-form textarea {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.submit-btn {
  padding: 12px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.submit-btn:hover {
  background: #1e40af;
}
</style>