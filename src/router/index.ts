import { createWebHistory, createRouter } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory("/votre-site/"),
  routes,
});

export default router;
