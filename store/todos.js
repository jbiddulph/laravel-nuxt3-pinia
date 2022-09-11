import { defineStore } from "pinia";
import axios from "@nuxtjs/axios";

export const useTodo = defineStore({
  id: "todo",
  state: () => ({
    token: localStorage.getItem("token") || "",
    todos: [],
    todo: {},
    isloading: false,
  }),
  actions: {
    // signup user
    async addTodo(data) {
      // to use fetch api
      this.isloading = true;

      const res = await fetch("http://127.0.0.1:8000/api/todo", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const output = await res.json();
      if (output.success) {
        this.isloading = false;
        alert(output.message);
        data.title = "";
        data.description = "";
      } else {
        this.isloading = false;
        alert(output.message);
      }
    },
    async getTodos() {
      this.isloading = true;
      console.log("Local storage: ", localStorage.getItem("token"));
      const res = await fetch("http://localhost:8000/api/todos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const output = await res.json();
      this.isloading = false;
      // this.todo = output;
      this.todos.push(output);
    },
  },
});
