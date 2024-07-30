<template>
  <div class="p-6 bg-white rounded shadow-md w-full max-w-3xl mx-auto">
    <h1 class="text-2xl mb-4">Protected Page</h1>
    <p>You are viewing a protected page!</p>
    <button
      @click="logout"
      class="mt-4 py-2 px-4 bg-red-500 text-white rounded"
    >
      Logout
    </button>
  </div>
</template>
  
<script setup>
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();

const logout = () => {
  authStore.logout();
  router.push("/login");
};
</script>
  