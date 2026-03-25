<template>
  <div id="app">
    <Navbar />

    <main class="main-content">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Navbar, Footer }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#app {                 /* ✅ use #app instead of .app */
  display: flex;
  flex-direction: column;
  min-height: 100vh;  /* full viewport height */
}

.main-content {
  flex: 1;            /* pushes footer down */
  padding: 20px;
  padding-top: 70px;
  padding-bottom: 60px;
  background: linear-gradient(to bottom, #f5f7fb, #eef2f7);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.2s ease;
}

@media (max-width: 768px) {
  .main-content {
    padding: 12px;
  }
}

footer {
  width: 100%;
  background-color: #2563eb;
  color: white;
  text-align: center;
  padding: 20px 0;
  margin: 0;          /* removes gaps */
}
</style>