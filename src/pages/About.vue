<template>
  <!-- <Title></Title> -->
  <div>
    <CardAbout></CardAbout>
  </div>
</template>
<script setup>
import { provide } from "vue";
import CardAbout from "../components/CardAbout.vue";
import Title from "../components/Title.vue";
provide("name", "About Me");
</script>
