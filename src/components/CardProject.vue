<template>
  <div
    v-if="themeStore.theme == 'cupcake'"
    class="card bg-base-100 rounded-md shadow-md transition-all duration-100 hover:scale-105 hover:shadow-xl"
    v-for="item in project"
  >
    <figure>
      <img :src="item.imgPath" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ item.name }}</h2>
      <div class="flex gap-2">
        <v-icon
          v-for="tech in item.techStack"
          :name="tech.icon"
          :class="tech.color"
          scale="2"
          >{{ tech.name }}</v-icon
        >
      </div>
      <p>{{ item.description }}</p>
      <div class="card-actions justify-between">
        <a href="" class="btn btn-sm"
          ><v-icon name="fa-github"></v-icon> Github</a
        >
        <a :href="item.deployLink" class="btn btn-sm"
          ><v-icon name="fa-globe"></v-icon> Visit Site</a
        >
      </div>
    </div>
  </div>
  <div
    v-else
    class="card border border-yellow-500 rounded-md shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-xl"
    v-for="item in project"
  >
    <figure>
      <img :src="item.imgPath" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ item.name }}</h2>
      <div class="flex gap-2">
        <v-icon
          v-for="tech in item.techStack"
          :name="tech.icon"
          :class="tech.color"
          scale="2"
          >{{ tech.name }}</v-icon
        >
      </div>
      <p>{{ item.description }}</p>
      <div class="card-actions justify-between">
        <a :href="item.repoLink" class="btn btn-sm"
          ><v-icon name="fa-github"></v-icon> Github</a
        >
        <a :href="item.deployLink" class="btn btn-sm"
          ><v-icon name="fa-globe"></v-icon> Visit Site</a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { useThemeStore } from "../stores/ThemeStore";
const themeStore = useThemeStore();

defineProps({
  project: {
    type: Array,
    required: true,
  },
});
</script>
