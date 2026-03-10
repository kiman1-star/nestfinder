<template>
  <div class="Contact">
    <h2>Contact Us</h2>
    <p>We’d love to hear from you! Fill out the form below and we’ll get back to you soon.</p>

    <form class="Contact-form" @submit.prevent="submitForm">
      <label>
        Name:
        <input type="text" v-model="form.name" required />
      </label>

      <label>
        Email:
        <input type="email" v-model="form.email" required />
      </label>

      <label>
        Message:
        <textarea v-model="form.message" required></textarea>
      </label>

      <button type="submit">Send Message</button>
    </form>

    <div class="Contact-info">
      <h3>Other ways to reach us</h3>
      <p><i class="fas fa-phone"></i> +254 700 123 456</p>
      <p><i class="fas fa-envelope"></i> info@nestfinder.com</p>
      <p><i class="fas fa-map-marker-alt"></i> Nairobi, Kenya</p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  alert(`Thank you, ${form.name}! Your message has been sent.`)
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
.Contact {
  max-width: 600px;
  margin: auto;
  padding: 30px;
}

h2 {
  color: #2563eb;
  margin-bottom: 20px;
}

.Contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
}

.Contact-form input,
.Contact-form textarea {
  width: 100%;
  padding: 10px;
  border: 2px solid #2563eb;
  border-radius: 6px;
}

button {
  background: #2563eb;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #1e3a8a;
}

.Contact-info {
  background: #f9fafb;
  padding: 20px;
  border-radius: 8px;
}
.Contact-info i {
  margin-right: 8px;
  color: #2563eb;
}
</style>