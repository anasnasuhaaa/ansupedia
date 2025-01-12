<script setup>
import Header from "./components/Header.vue";
import Button from "./components/Button.vue";
import Faq from "./components/Faq.vue";
import Portfolio from "./pages/Project.vue";
import Experinece from "./pages/Experinece.vue";
import Home from "./pages/Home.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <Header></Header>
    <main class="max-w-7xl mx-auto ">
      <!-- <Home></Home> -->

      <!-- <Portfolio></Portfolio>
      <Experinece></Experinece> -->
      <!-- <Button></Button>
      <Faq></Faq> -->
      <RouterView></RouterView>
    </main>
  </div>
</template>
