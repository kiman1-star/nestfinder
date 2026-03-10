import { createRouter, createWebHistory } from 'vue-router'
import PropertyList from '../views/PropertyList.vue'
import PropertyDetails from '../views/PropertyDetails.vue'
import About from '../views/about.vue'
import Contact from '../views/contact.vue'

const routes = [
  { path: '/', name: 'PropertyList', component: PropertyList },
  { path: '/property/:id', name: 'PropertyDetails', component: PropertyDetails, props: true },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router