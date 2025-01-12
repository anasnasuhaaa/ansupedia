<template>
  <h1 class="md:text-3xl text-xl underline font-medium mb-6">{{ name }}</h1>
</template>
<script setup>
import { inject } from "vue";

const name = inject("name");
</script>
