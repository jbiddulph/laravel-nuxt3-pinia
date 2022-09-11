<script setup>
import { useAuth } from "@/store";
const auth = useAuth();
auth.getUser();
</script>

<template>
  <div
    class="main-content relative min-h-screen"
    :style="{
      'background-size': 'cover',
      'backdrop-filter': 'blur(5px)',
      //filter: 'blur(8px)',
    }"
  >
    <NavbarVue />
    <div class="container mx-auto max-w-2xl">
      <div class="bg-pink-400 p-5 my-16 rounded-xl">
        <h1 class="text-xl text-white text-center">hi {{ auth.user.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarVue from "../components/Navbar.vue";
export default {
  name: "IndexPage",
  components: {
    NavbarVue,
  },
};
</script>

<style>
.main-content {
  z-index: 1;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/Worthing.jpeg");
  min-width: "100vw";
  min-height: "100vh";
}
</style>
