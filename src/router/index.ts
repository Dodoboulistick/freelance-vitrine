import { createWebHistory, createRouter } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory("/freelance/"),
  routes,
});

export default router;
