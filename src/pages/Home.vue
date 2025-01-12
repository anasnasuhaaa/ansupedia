<template>
  <!-- <Title></Title> -->
  <div class="p-4 md:p-6">
    <div>
      <CardHome></CardHome>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import CardHome from "../components/CardHome.vue";
import Title from "../components/Title.vue";
provide("name", "About Me");
</script>
