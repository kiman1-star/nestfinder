<template>
  <div class="About">
    <h2>About NestFinder</h2>
    <p>
      NestFinder is your trusted property listing app. We help you find homes,
      apartments, and rentals across Kenya with ease. Our mission is to make
      property search simple, transparent, and enjoyable.
    </p>

    <h3>Our Vision</h3>
    <p>
      To connect people with their dream homes by combining modern technology
      with local expertise.
    </p>

    <h3>Our Values</h3>
    <ul>
      <li>🏡 Customer-first service</li>
      <li>🔍 Transparent listings</li>
      <li>📱 Mobile-friendly experience</li>
    </ul>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <h2>What Our Clients Say</h2>
      <!-- Testimonials Carousel -->
      <h2>What Our Clients Say</h2>
      <Carousel :items-to-show="1" :wrap-around="true" :autoplay="true">
        <Slide v-for="(t, i) in testimonials" :key="i">
          <div class="testimonial">
            <p>"{{ t.quote }}"</p>
            <h4>- {{ t.author }}</h4>
          </div>
        </Slide>
      </Carousel>
    </section>
  </div>
</template>

<script setup>
const testimonials = [
  { quote: "NestFinder helped me find my dream home!", author: "Jane Doe" },
  { quote: "Smooth process and great support.", author: "John Mwangi" },
  { quote: "I loved how easy it was to browse listings on my phone.", author: "Amina Hassan" }
]
</script>

<style scoped>
.About {
  max-width: 800px;
  margin: auto;
  padding: 30px;
  line-height: 1.6;
}

h2 {
  color: #2563eb;
  margin-bottom: 20px;
}

h3 {
  margin-top: 20px;
  color: #1e3a8a;
}

.Testimonials {
  background: #f9fafb;
  padding: 30px;
  margin-top: 40px;
  border-radius: 8px;
  text-align: center;
}

.Testimonial p {
  margin-bottom: 20px;
  font-style: italic;
}

.Testimonial h4 {
  margin-top: 10px;
  color: #2563eb;
}
</style>