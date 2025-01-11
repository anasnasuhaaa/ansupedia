<template>
  <h1 class="text-3xl font-medium mb-4">{{ name }}</h1>
</template>
<script setup>
import { inject } from "vue";

const name = inject("name");
</script>
