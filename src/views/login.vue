<template>
  <div>
    <h1>Login</h1>
    <img
      id="game_picture"
      src="https://static.vecteezy.com/system/resources/previews/000/693/105/original/cartoon-rock-paper-scissors-vector-characters.jpg"
      alt="game welcome"
    />
    <form action="javascript:void(0)">
      <input
        id="username"
        type="text"
        placeholder="Username"
        v-model="username"
      />
      <br />
      <input
        id="password"
        type="password"
        placeholder="password"
        v-model="password"
      />
      <br />
      <button @click="login" type="submit">Login</button>
    </form>

    <h3 v-if="err">the information you just entered is not valid</h3>
    <h4>Username : eve.holt@reqres.in</h4>
    <h4>password : cityslicka</h4>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "login-page",
  data: function() {
    return {
      username: "",
      password: "",
      err: false,
    };
  },
  mounted() {
    if (cookies.get("token") != undefined) this.$router.push("/game");
  },
  methods: {
    login: function() {
      axios
        .request({
          url: "https://reqres.in/api/login",
          method: "POST",
          data: {
            username: this.username,
            password: this.password,
          },
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          cookies.set("token", response.data.token);
          this.err = false;
          this.$router.push("/game");
        })
        .catch(() => {
          this.err = true;
        });
    },
  },
};
</script>

<style scoped>
#game_picture {
  width: 50%;
  height: 20%;
  object-fit: cover;
}
</style>
