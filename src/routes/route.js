import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../pages/Home.vue";
import AboutView from "../pages/About.vue";
import ExperineceView from "../pages/Experinece.vue";
import ProjectView from "../pages/Project.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView, name: "about" },
  { path: "/experience", component: ExperineceView, name: "experience" },
  { path: "/project", component: ProjectView, name: "project" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
