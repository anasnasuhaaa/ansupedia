<template>
  <div class="hero min-h-screen">
    <div class="hero-content min-h-screen flex-col lg:flex-row-reverse px-0">
      <img
        v-if="themeStore.theme == 'cupcake'"
        :src="aboutImg"
        class="min-w-52 rounded-[40%] md:rounded-lg shadow-md"
      />
      <img
        v-else
        :src="aboutImg"
        class="min-w-52 shadow-primary rounded-[40%]"
      />
      <div>
        <h1 class="md:text-7xl text-5xl font-bold text-center md:text-start">
          Anas Nasuha
        </h1>
        <div class="py-6 text-center md:text-start">
          As a <span class="font-bold">Fullstack Web Developer</span>, I
          specialize in creating web applications that seamlessly integrate
          client-side and server-side functionality. Let’s collaborate to bring
          your ideas to life!
        </div>

        <div class="flex gap-2 md:justify-start justify-between">
          <a
            href="https://www.linkedin.com/in/anas-nasuha-026186327?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiJxvTQAOTFyADBiN1bbgLQ%3D%3D"
            ><v-icon
              name="fa-linkedin"
              scale="3"
              class="hover:-translate-y-2 hover:scale-110 hover:shadow-md transition-all"
            ></v-icon
          ></a>
          <a href="https://instagram.com/anass.nsh">
            <v-icon
              name="fa-instagram"
              scale="3"
              class="hover:-translate-y-2 hover:scale-110 hover:shadow-md transition-all"
            ></v-icon
          ></a>
          <a href="https://gitlab.com/anasnasuhaaa">
            <v-icon
              name="fa-gitlab"
              scale="3"
              class="hover:-translate-y-2 hover:scale-110 hover:shadow-md transition-all"
            ></v-icon>
          </a>
          <a href="https://github.com/anasnasuhaaa">
            <v-icon
              name="fa-github"
              scale="3"
              class="hover:-translate-y-2 hover:scale-110 hover:shadow-md transition-all"
            ></v-icon>
          </a>
          <a href="https://youtube.com/@anasnasuhaa"></a>
          <v-icon
            name="fa-youtube"
            scale="3"
            class="hover:-translate-y-2 hover:scale-110 hover:shadow-md transition-all"
          ></v-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// defineProps({
//   aboutContent: {
//     type: String | Element | Image,
//     required: true,
//   },
// });
import VueWriter from "vue-writer";
import { useThemeStore } from "../stores/ThemeStore";
const themeStore = useThemeStore();
import aboutimg from "../assets/img/aboutimg.png";
const aboutImg = aboutimg;
</script>
