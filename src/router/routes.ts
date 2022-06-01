import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("./../components/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./../components/About.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("./../components/Contact.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("./../components/Home.vue"),
  },
];

export default routes;
