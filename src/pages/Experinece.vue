<template>
  <Title></Title>
  <div class="mb-10">
    <Timeline :experience="experiences"></Timeline>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import Title from "../components/Title.vue";
import Timeline from "../components/Timeline.vue";

provide("name", "Experiences");

const experiences = ref([
  {
    id: 1,
    company: "Superbootcamp by Paradaya Movement",
    year: "Dec 2024 - Now",
    timelinePossition: "timeline-start md:text-end ",
    description:
      "Became one of the Superbootcamp Junior Web Developer Scholarship recipients who learned web development, especially using Laravel & Vue Js.",
  },
  {
    id: 2,
    company: "PT. Sanbersy",
    year: "Aug 2024 - Nov 2024",
    timelinePossition: "timeline-end",
    description:
      "Internship as a Web Developer with Laravel and contribute to 6 real company projects.",
  },
  {
    id: 3,
    company: "Bootcamp Laravel batch 55 Sanbercode",
    year: "Apr 2024",
    timelinePossition: "timeline-start md:text-end ",
    description:
      "Became a student at the 55th batch of Sanbercode Laravel Bootcamp and was awarded the best final project.",
  },
  {
    id: 4,
    company: "Bootcamp React JS batch 54 Sanbercode",
    year: "Mar 2024",
    timelinePossition: "timeline-end ",
    description:
      "became a student at the 54th batch of Sanbercode React Js Bootcamp who learned about Web Frontend Development with React Js.",
  },
]);
</script>
