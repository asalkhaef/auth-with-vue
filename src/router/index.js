import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";
import ProtectedPage from "../views/ProtectedPage.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  { path: "/login", component: LoginView },
  {
    path: "/protected",
    component: ProtectedPage,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.token) {
    next("/login");
  } else {
    next();
  }
});

export default router;
