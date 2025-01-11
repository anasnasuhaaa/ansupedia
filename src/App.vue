<script setup>
import Header from "./components/Header.vue";
import Button from "./components/Button.vue";
import Faq from "./components/Faq.vue";
import Portfolio from "./pages/Portfolio.vue";
import Experinece from "./pages/Experinece.vue";
import About from "./pages/About.vue";
</script>

<template>
  <div>
    <Header></Header>
    <main class="max-w-7xl mx-auto p-4 md:p-6">
      <About></About>
      <Portfolio></Portfolio>
      <Experinece></Experinece>
      <!-- <Button></Button>
      <Faq></Faq> -->
    </main>
  </div>
</template>
