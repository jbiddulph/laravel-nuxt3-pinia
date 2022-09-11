
<script setup>
import { ssrRef, useRouter } from "@nuxtjs/composition-api";
import { useTodo } from "@/store/todos";
const router = useRouter();
const todo = useTodo();
const title = ssrRef("");
const description = ssrRef("");
todo.getTodos();
const addTodo = () => {
  if (!title.value || !description.value) {
    alert("Please fill all the field");
  } else {
    const data = {
      title: title.value,
      description: description.value,
    };
    todo.addTodo(data);
    router.push("/");
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
      <form action="" class="p-5" @submit.prevent="addTodo">
        <h1 class="text-white text-center text-3xl">Add Todo</h1>
        <div class="my-3">
          <label for="" class="text-md font-semibold"> Enter your title </label>
          <input
            type="text"
            v-model="title"
            class="
              outline-none
              w-full
              py-2
              rounded
              bg-transparent
              border-b-2
              text-white text-lg
              placeholder-white
            "
            placeholder="Enter Your Title"
          />
        </div>
        <div class="my-3">
          <label for="" class="text-md font-semibold">
            Enter your description
          </label>
          <input
            type="text"
            v-model="description"
            class="
              outline-none
              w-full
              py-2
              rounded
              bg-transparent
              border-b-2
              text-white text-lg
              placeholder-white
            "
            placeholder="Enter Your Description"
          />
        </div>
        <button
          type="submit"
          class="
            rounded-md
            border
            px-10
            py-2
            bg-purple-600
            text-white text-xl text-semibold
            hover:bg-purple-700
          "
        >
          {{ useTodo.isloading ? "Todo...." : "Todo" }}
        </button>
      </form>
    </div>
    <h3>TODOS</h3>
    <div v-for="todo in todo.todos" :key="todo.id" class="text-white">
      <div v-for="todo in todo.todos" :key="todo.id" class="text-white">
        {{ todo }}
      </div>
    </div>
  </div>
</template>
<script>
import NavbarVue from "../../components/Navbar.vue";

export default {
  name: "TodosPage",
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
