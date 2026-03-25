import { createRouter, createWebHistory } from 'vue-router'
import PropertyList from '../views/propertylist.vue'
import PropertyDetails from '../views/PropertyDetails.vue'

const routes = [
  { path: '/', name: 'PropertyList', component: PropertyList },
  { path: '/property/:id', name: 'PropertyDetails', component: PropertyDetails, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router