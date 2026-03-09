import { createRouter, createWebHistory } from 'vue-router'
import propertylist from '../views/propertylist.vue'
import propertyDetails from '../views/propertyDetails.vue'

const routes = [
  { path: '/', name: 'propertylist', component: propertylist },
  { path: '/property/:id', name: 'propertyDetails', component: propertyDetails, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router