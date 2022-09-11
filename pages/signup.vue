<script setup>
import { ssrRef, useRouter } from "@nuxtjs/composition-api";
import { useAuth } from "@/store";
const router = useRouter();

const auth = useAuth();
const name = ssrRef("");
const email = ssrRef("");
const password = ssrRef("");

const signup = () => {
  if (!name.value || !email.value || !password.value) {
    alert("Please fill all the field");
  } else {
    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    auth.userSignup(data);
    router.push("/login");
  }
};
</script>

<template >
  <div
    class="main-content relative min-h-screen"
    :style="{
      'background-size': 'cover',
      'backdrop-filter': 'blur(5px)',
      //filter: 'blur(8px)',
    }"
  >
    <NavbarVue />
    <div class="container my-10 mx-auto max-w-xl bg-purple-400 rounded-xl">
      <form action="" class="p-5" @submit.prevent="signup">
        <h1 class="text-white text-center text-3xl">Signup Form</h1>
        <div class="my-3">
          <label for="" class="text-md font-semibold"> Enter your name </label>
          <input
            type="text"
            v-model="name"
            class="
              outline-none
              w-full
              p-2
              rounded
              bg-purple-700
              text-white text-lg
              placeholder-purple-500
            "
            placeholder="Enter Your Name"
          />
        </div>
        <div class="my-3">
          <label for="" class="text-md font-semibold"> Enter your Email </label>
          <input
            type="email"
            v-model="email"
            class="
              outline-none
              w-full
              p-2
              rounded
              bg-purple-700
              text-white text-lg
              placeholder-purple-500
            "
            placeholder="Enter Your Email"
          />
        </div>
        <div class="my-3">
          <label for="" class="text-md font-semibold">
            Enter your Password
          </label>
          <input
            type="password"
            v-model="password"
            class="
              outline-none
              w-full
              p-2
              rounded
              bg-purple-700
              text-white text-lg
              placeholder-purple-500
            "
            placeholder="Enter Your Password"
          />
        </div>
        <button
          class="
            rounded-full
            px-10
            py-2
            mt-6
            bg-purple-800
            text-white text-xl text-semibold
            hover:bg-purple-900
            align-center
            mx-auto
            flex
          "
          type="submit"
        >
          {{ auth.isloading ? "Signup..." : "Signup" }}
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import NavbarVue from "../components/Navbar.vue";

export default {
  name: "SignupPage",
  middleware: ["guest"],
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
