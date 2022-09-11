import { defineStore } from "pinia";
import axios from "@nuxtjs/axios";

export const useAuth = defineStore({
  id: "auth",
  state: () => ({
    token: localStorage.getItem("token") || "",
    user: {},
    isloading: false,
  }),
  actions: {
    // signup user
    async userSignup(data) {
      // to use fetch api
      this.isloading = true;

      const res = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const output = await res.json();
      if (output.success) {
        this.isloading = false;
        alert(output.message);
        data.name = "";
        data.email = "";
        data.password = "";
      } else {
        this.isloading = false;
        alert(output.message);
      }
    },
    async userLogin(data) {
      this.isloading = true;

      const res = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const output = await res.json();
      console.log("Output: ", output.authorisation.token);
      if (output.status === "success") {
        localStorage.setItem("token", output.authorisation.token);
        this.token = output.authorisation.token;
        alert(output.status);
        this.isloading = false;
        this.$route.push("/");
      } else {
        this.isloading = false;

        alert(output.message);
      }
    },

    async getUser() {
      this.isloading = true;
      console.log("Local storage: ", localStorage.getItem("token"));
      const res = await fetch("http://localhost:8000/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const output = await res.json();
      console.log("Name: ", output.name);
      this.isloading = false;
      this.user = output;
    },
    userLogout() {
      this.token = "";
      this.user = "";
      localStorage.removeItem("token");
    },
  },
});
