<template>
    <nav class="navbar">
        <h1> 🏡 Nestfinder</h1>

        <!-- Hamburger button (mobile only) -->
        <button class="hamburger" @click="toggleMenu">☰</button>

        <!-- Navigation links -->
         <ul :class="['nav-links', {open: isOpen}]">
           <li><router-link to="/">Home</router-link></li>
           <li><router-link to="/properties">Properties</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
         </ul>
    </nav>
    </template>

    <script setup>
import { ref } from 'vue';
    const isOpen = ref(false)
    const toggleMenu = () => {
        isOpen .value = !isOpen .value
    }
    </script>

    <style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: #2563eb;
    color: white;
    font-size: 22px;
}
h1 {
    font-size: 22px;
    margin:0;
}
.nav-links {
    display: flex;
    gap: 20px;
    list-style: none;
}
.nav-links li a{
    color: white;
    text-decoration: none;
    font-size: 18px;
}
/*Hamburger hidden on desktop */
.hamburger {
    display:  none;
    font-size: 1.8rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
}
/*Mobile styles */
@media (max-width:768px){
    .hamburger {
        display: block;
    }
    .nav-links {
        position: absolute;
        top: 60px;
        right: 0;
        background: #2563eb;
        flex-direction: column;
        width: 200px;
        display: none;
    }
    .nav-links.open {
        display: flex;
    }
}
</style>
    

