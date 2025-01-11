<template>
  <h1 class="text-9xl text-red-800">Anas Nasuha</h1>
  <v-icon name="fa-linkedin" class="text-white" scale="3"></v-icon>
  <div class="card" v-for="item in skills">
    <div class="grid grid-cols-3">
      <h2>{{ item.name }}</h2>
      <v-icon :name="item.icon" class="text-primary" scale="3"></v-icon>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const skills = ref([
  {
    id: 1,
    name: "HTML",
    icon: "fa-linkedin",
  },
  {
    id: 2,
    name: "CSS",
    icon: "fa-youtube",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: "fa-linkedin",
  },
]);
</script>
