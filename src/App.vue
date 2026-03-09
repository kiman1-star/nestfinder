<template>
    <div class="app">
        <Navbar />
       <main class="page">
        <router-view />
        </main>
        <Footer />
        </div>
</template>
        

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
    components: {Navbar, Footer}
}
</script>

<style>
.app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.page {
    flex: 1;
    padding: 30px;
    background-color: #f9f9f9;
}
/* Global styles for the app */
@media (max-width: 768px) {
    .page {
        padding: 10px;
    }
}
</style>