<!-- <template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="p-6 bg-white rounded shadow-md w-full max-w-sm">
      <h1 class="text-2xl mb-4">Signup</h1>
      <form @submit.prevent="signup">
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2">Password</label>
          <inputs
            v-model="password"
            type="password"
            class="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full py-2 bg-blue-500 text-white rounded"
        >
          Signup
        </button>
      </form>
    </div>
  </div>
</template>
    
<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const email = ref("");
const password = ref("");
const authStore = useAuthStore();

const signup = () => {
  authStore.signup(email.value, password.value);
};
</script>
     -->