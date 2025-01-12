<template>
  <div class="p-4 md:p-6">
    <Title></Title>
    <div
      class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-10"
    >
      <CardProject :project="project"></CardProject>
    </div>
  </div>
</template>
<script setup>
import CardProject from "../components/CardProject.vue";
import Title from "../components/Title.vue";

import { provide, ref } from "vue";
import smartchainImg from "../assets/img/portfolio/smartchain.png";
import k12toprakImg from "../assets/img/portfolio/k12toprak.png";
import apiprojectImg from "../assets/img/portfolio/apiproject.png";
import ansumovieImg from "../assets/img/portfolio/ansumovie.png";
import ansjobImg from "../assets/img/portfolio/ansjob.png";
import webRs from "../assets/img/portfolio/webrs.png";
import anstoreImg from "../assets/img/portfolio/anstore.png";
import portfoliowebImg from "../assets/img/portfolio/portfolioweb.png";

provide("name", "My Project");
const project = ref([
  {
    id: 1,
    name: "Smartchain",
    description: "Monitoring & Tracking System PT. GSM",
    imgPath: smartchainImg,
    repoLink: "#",
    deployLink: "#",
    techStack: [
      {
        id: 1,
        name: "laravel",
        icon: "co-laravel",
        color: "text-laravel",
      },
      {
        id: 2,
        name: "My SQL",
        icon: "co-mysql",
        color: "text-jquery",
      },
      {
        id: 3,
        name: "Bootstrap",
        icon: "co-bootstrap",
        color: "text-bootstrap",
      },
      {
        id: 4,
        name: "JQuery",
        icon: "si-jquery",
        color: "text-jquery",
      },
    ],
  },

  {
    id: 2,
    name: "AnsuMovie",
    description: "Fetch API from IMDB with Axios.",
    repoLink: "#",
    imgPath: ansumovieImg,
    deployLink: "https://ansu-movie.vercel.app/",
    techStack: [
      {
        id: 1,
        name: "React",
        icon: "co-react",
        color: "text-react",
      },
      {
        id: 2,
        name: "Tailwind",
        icon: "si-tailwindcss",
        color: "text-react",
      },
    ],
  },
  {
    id: 3,
    name: "Anstore",
    description: "Simple E-Commerce Web with generate qr code feature.",
    imgPath: anstoreImg,
    repoLink: "#",
    deployLink: "#",
    techStack: [
      {
        id: 1,
        name: "laravel",
        icon: "co-laravel",
        color: "text-laravel",
      },
      {
        id: 2,
        name: "My SQL",
        icon: "co-mysql",
        color: "text-jquery",
      },
      {
        id: 3,
        name: "Tailwind",
        icon: "si-tailwindcss",
        color: "text-react",
      },
    ],
  },
  {
    id: 4,
    name: "Ansupedia",
    description: "My Protfolio Website",
    repoLink: "#",
    imgPath: portfoliowebImg,
    deployLink: "/",
    techStack: [
      {
        id: 1,
        name: "Vue Js",
        icon: "co-vue-js",
        color: "text-green-500",
      },
      {
        id: 2,
        name: "Tailwind",
        icon: "si-tailwindcss",
        color: "text-react",
      },
    ],
  },
  {
    id: 5,
    name: "AnsJob",
    description: "Final Project React Js Sanbercode Bootcamp.",
    repoLink: "#",
    imgPath: ansjobImg,
    deployLink: "https://ansjob-react-liard.vercel.app/",
    techStack: [
      {
        id: 1,
        name: "React",
        icon: "co-react",
        color: "text-react",
      },
      {
        id: 2,
        name: "Tailwind",
        icon: "si-tailwindcss",
        color: "text-react",
      },
    ],
  },
  {
    id: 6,
    name: "K12Toprak",
    description:
      "Class 12 website, Learning Camp batch 2025 Perintis Scholarships.",
    repoLink: "#",
    imgPath: k12toprakImg,
    deployLink: "https://k12toprak.vercel.app",
    techStack: [
      {
        id: 1,
        name: "Html",
        icon: "co-html5",
        color: "text-html",
      },
      {
        id: 2,
        name: "Css",
        icon: "co-bootstrap",
        color: "text-bootstrap",
      },
      {
        id: 2,
        name: "JavaScript",
        icon: "co-javascript",
        color: "text-javascript",
      },
    ],
  },
  {
    id: 7,
    name: "Hospital Website",
    description: "My 1st native HTML, CSS & JS Project",
    repoLink: "#",
    imgPath: webRs,
    deployLink: "https://anas-rsud-indramayu.vercel.app/",
    techStack: [
      {
        id: 1,
        name: "Html",
        icon: "co-html5",
        color: "text-html",
      },
      {
        id: 2,
        name: "Css",
        icon: "co-css3",
        color: "text-css",
      },
      {
        id: 2,
        name: "JavaScript",
        icon: "co-javascript",
        color: "text-javascript",
      },
    ],
  },
  {
    id: 8,
    name: "API Movie Review",
    description: "Laravel Rest API with Json Web Token (JWT).",
    repoLink: "#",
    imgPath: apiprojectImg,
    deployLink: "https://documenter.getpostman.com/view/32020683/2sAYJ6CfTF",
    techStack: [
      {
        id: 1,
        name: "laravel",
        icon: "co-laravel",
        color: "text-laravel",
      },
      {
        id: 2,
        name: "My SQL",
        icon: "co-mysql",
        color: "text-jquery",
      },
      {
        id: 2,
        name: "Railway",
        icon: "si-railway",
        color: "",
      },
    ],
  },
]);
</script>
