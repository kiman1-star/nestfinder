import { createRouter, createWebHistory } from 'vue-router'
import propertylist from '../views/propertylist.vue'
import propertydetails from '../views/PropertyDetails.vue'

const routes = [
  { path: '/', name: 'propertylist', component: propertylist },
  { path: '/property/:id', name: 'propertydetails', component: propertydetails, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router