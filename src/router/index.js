import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Alumni from "@/views/Alumni.vue";
import Cerita from "@/views/Cerita.vue";
import BioAlumni from "@/views/BioAlumni.vue";

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
  {
    path: "/alumni/:id", // <-- notice the colon
    name: "BioAlumni",
    component: BioAlumni,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;