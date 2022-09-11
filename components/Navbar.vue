<script setup>
import { useAuth } from "@/store";
import { useRouter } from "@nuxtjs/composition-api";
const auth = useAuth();
const router = useRouter();
const logout = () => {
  auth.userLogout();
  router.push("/");
};
</script>

<template >
  <div>
    <div class="bg-purple-500">
      <div class="container mx-auto p-3">
        <div class="flex justify-between items-center">
          <div>
            <nuxt-link to="/"
              ><h3 class="text-white text-3xl hover:text-purple-800">
                Nuxt(pinia)
              </h3></nuxt-link
            >
          </div>
          <div>
            <div v-if="auth.token">
              <nuxt-link to="/admin/todos"> TODO </nuxt-link>
              <button
                type="submit"
                class="rounded-md px-10 py-2"
                @click="logout"
              >
                Logout
              </button>
            </div>
            <div v-else>
              <nuxt-link
                to="/signup"
                class="text-xl text-white hover:text-purple-800"
                >Signup</nuxt-link
              >
              <nuxt-link
                to="/login"
                class="text-xl text-white ml-3 hover:text-purple-800"
                >Login</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavbarComp",
};
</script>
<style>
</style>
