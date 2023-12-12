import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import ProjectDetail from '../pages/ProjectDetail.vue'
import About from '../pages/About.vue'
import Contacts from '../pages/Contacts.vue'
import TestPage from '../pages/TestPage.vue'

import Error404 from '../pages/Error404.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/progetti',
      name: 'projects',
      component: Projects
    },
    {
      path: '/progetti/:slug',
      name: 'project-detail',
      component: ProjectDetail
    },
    {
      path: '/chi-sono',
      name: 'about',
      component: About
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/test-tailwind',
      name: 'testPage',
      component: TestPage
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: Error404
    }
    
  ]
})

export default router
