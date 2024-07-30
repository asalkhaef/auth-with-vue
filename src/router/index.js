import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";
import ProtectedPage from "../views/ProtectedPage.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: LoginView },
  {
    path: "/protected",
    component: ProtectedPage,
    meta: { requiresAuth: true }, //It means that the route requires authentication!
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  /* Will be called for each navigation and if to.meta.requiresAuth was true it means that we
  should check auth status.*/
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.token) {
    next("/login");
  } else {
    next();
  }
});

export default router;
