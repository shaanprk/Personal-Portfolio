import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomePage.vue';
import About from '../components/AboutPage.vue';
import Projects from '../components/ProjectsPage.vue';
import Contact from '../components/ContactPage.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
