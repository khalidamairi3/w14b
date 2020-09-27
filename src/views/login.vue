<template>
  <div>
    <h1>Login</h1>
    <form action="javascript:void(0)">
      <input
        id="username"
        type="text"
        placeholder="Username"
        v-model="username"
      />
      <br />
      <input id="password" type="password" placeholder="password" v-model="password"/>
      <br />
      <button @click="login" type="submit">Login</button>
    </form>
    
    <h3 v-if="err"> the information you just entered is not valid</h3>
  </div>
</template>

<script>
import axios from "axios";
import cookies from 'vue-cookies';

export default {
  name: "login-page",
  data: function() {
    return {
      username:"",
      password:"",
      err: false,
    };
  },
  mounted () {
      if (cookies.get("token")!=undefined)
      this.$router.push("/game");

  },
  methods: {
    login: function() {
       
        axios.request({
        url: "https://reqres.in/api/login",
        method:"POST",
        data:{
            username : this.username,
            password : this.password
        },
        headers:{
            "Content-Type":"application/json"
        }
      }).then((response)=>{
        cookies.set("token",response.data.token);
        this.err=false;
        this.$router.push("/game");
        
      }).catch(()=>{
        this.err = true;
        
      })
    }
  }
};
</script>

<style scoped>
</style>