<template>
  <div class="hero max-h-screen">
    <div class="hero-content text-center">
      <div
        class="mockup-window border-base-300 border px-2 flex flex-col gap-4 justify-center align-center pb-4"
      >
        <div class="avatar flex justify-center">
          <div
            class="ring-neutral ring-offset-base-100 w-56 rounded-full ring ring-offset-2"
          >
            <img :src="aboutImg" />
          </div>
        </div>
        <h1 v-if="themeStore.theme =='cupcake'" class="text-2xl md:text-5xl font-bold">I'm <span class="text-primary">Anas Nasuha</span></h1>
        <h1 v-else class="text-2xl md:text-5xl font-bold">I'm Anas Nasuha</h1>
        <p class="font-medium">
          A passionate IT enthusiast with hands-on experience as a web
          developer, driven by a vision to shape the future of technology and
          become a leading IT innovator in Indonesia’s digital landscape.
        </p>
        <div>
          <h1
            class="mt-4 lg:mb-4 mb-2 font-medium text-xl md:text-2xl underline"
          >
            Skills
          </h1>
          <div
            class="grid gap-2 grid-cols-2 md:grid-cols-6 lg:grid-cols-8 px-2"
          >
            <button class="btn btn-outline" v-for="skill in skills">
              <v-icon :name="skill.icon" :scale="skill.scale"></v-icon>
              {{ skill.name }}
            </button>
          </div>
        </div>
        <div>
          <h1
            class="mt-4 lg:mb-4 mb-2 font-medium text-xl md:text-2xl underline"
          >
            Social Media
          </h1>
          <div
            class="grid gap-2 grid-cols-2 md:grid-cols-6 lg:grid-cols-8 px-2"
          >
            <button class="btn btn-outline" v-for="social in socials">
              <a :href="social.link" target="_blank">
                <v-icon :name="social.icon" :scale="social.scale"></v-icon>
                {{ social.name }}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useThemeStore } from "../stores/ThemeStore";
const themeStore = useThemeStore();
const socials = [
  {
    name: "LlinkedIn",
    icon: "fa-linkedin",
    scale: 1,
    link: "https://www.linkedin.com/in/anas-nasuha-026186327?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiJxvTQAOTFyADBiN1bbgLQ%3D%3D",
  },
  {
    name: "Instagram",
    icon: "fa-instagram",
    scale: 1,
    link: "https://instagram.com/anass.nsh",
  },
  {
    name: "YouTube",
    icon: "fa-youtube",
    scale: 1,
    link: "https://youtube.com/@anasnasuhaa",
  },
];
const skills = [
  {
    name: "HTML",
    icon: "co-html5",
    scale: "1",
  },
  {
    name: "CSS",
    icon: "co-css3",
    scale: "1",
  },
  {
    name: "JavaScript",
    icon: "co-javascript",
    scale: "1",
  },
  {
    name: "TypeScript",
    icon: "co-typescript",
    scale: "1",
  },
  {
    name: "PHP",
    icon: "co-php",
    scale: "1",
  },
  {
    name: "Python",
    icon: "co-python",
    scale: "1",
  },
  {
    name: "Bootstrap",
    icon: "co-bootstrap",
    scale: "1",
  },
  {
    name: "Tailwind CSS",
    icon: "si-tailwindcss",
    scale: "1",
  },
  {
    name: "React Js",
    icon: "co-react",
    scale: "1",
  },
  {
    name: "Vue Js",
    icon: "co-vue-js",
    scale: "1",
  },
  {
    name: "Laravel",
    icon: "co-laravel",
    scale: "1",
  },
  {
    name: "MySql",
    icon: "co-mysql",
    scale: "2",
  },
  {
    name: "Figma",
    icon: "co-figma",
    scale: "1",
  },
  {
    name: "GitHub",
    icon: "co-github",
    scale: "1",
  },
  {
    name: "GitLab",
    icon: "co-gitlab",
    scale: "1",
  },
  {
    name: "Vercel",
    icon: "si-vercel",
    scale: "1",
  },
];
import aboutimg from "../assets/img/aboutimg3.png";
const aboutImg = aboutimg;
</script>
