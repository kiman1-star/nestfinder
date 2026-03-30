import { createRouter, createWebHistory } from 'vue-router'
import PropertyList from '../views/PropertyList.vue'
import Contact from '../views/Contact.vue'
import PropertyDetails from '../views/PropertyDetails.vue'   // ✅ import added

const routes = [
  { path: '/', name: 'Home', component: PropertyList },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/details/:id', name: 'PropertyDetails', component: PropertyDetails }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router