<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HttpRequest from "./core/requests/HttpRequest";
import LuhnaService from "./core/service/LuhnaService";
import NNService from "./core/service/NNService";

export const httpRequest = new HttpRequest("http://localhost:8080");
export const luhnaService = new LuhnaService(httpRequest);
export const nnService = new NNService(httpRequest);



export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
