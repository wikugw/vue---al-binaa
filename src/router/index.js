import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Alumni from "@/views/Alumni.vue";
import Cerita from "@/views/Cerita.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cerita",
    name: "Cerita",
    component: Cerita,
  },
  {
    path: "/alumni",
    name: "Alumni",
    component: Alumni,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;