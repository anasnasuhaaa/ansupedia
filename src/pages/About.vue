<template>
  <!-- <Title></Title> -->
  <div>
    <About></About>
  </div>
</template>
<script setup>
import { provide } from "vue";
import Title from "../components/Title.vue";
import About from "../components/CardAbout.vue";
provide("name", "About Me");
</script>
