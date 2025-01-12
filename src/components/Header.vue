<template>
  <div v-if="themeStore.theme == 'luxury'" class="border-b border-neutral">
    <div class="navbar mx-auto max-w-7xl">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li v-for="nav in linkNav">
              <a
                ><RouterLink :to="{ name: nav.urlName }">{{
                  nav.pathName
                }}</RouterLink></a
              >
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost text-xl"><RouterLink to="/">Ansupedia</RouterLink></a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li v-for="nav in linkNav">
            <a
              ><RouterLink :to="{ name: nav.urlName }">{{
                nav.pathName
              }}</RouterLink></a
            >
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <!-- <a
          class="btn btn-neutral text-white"
          href="https://github.com/anasnasuhaaa"
          target="_blank"
          >My GitHub <v-icon name="fa-github" class="text-white"></v-icon
        ></a> -->
        <v-icon
          v-if="themeStore.theme === 'cupcake'"
          name="co-sun"
          class="text-back"
          scale="1.5"
        ></v-icon>
        <v-icon v-else name="co-moon" class="text-back" scale="1.5"></v-icon>
        <input
          type="checkbox"
          class="toggle ml-1"
          :checked="themeStore.theme === 'luxury'"
          @change="toggleTheme"
        />
      </div>
    </div>
  </div>
  <div v-else class="shadow-sm">
    <div class="navbar mx-auto max-w-7xl">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li v-for="nav in linkNav">
              <a
                ><RouterLink :to="{ name: nav.urlName }">{{
                  nav.pathName
                }}</RouterLink></a
              >
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost text-xl"><RouterLink to="/">Ansupedia</RouterLink></a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li v-for="nav in linkNav">
            <a
              ><RouterLink :to="{ name: nav.urlName }">{{
                nav.pathName
              }}</RouterLink></a
            >
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <v-icon
          v-if="themeStore.theme === 'cupcake'"
          name="co-sun"
          class="text-back"
          scale="1.5"
        ></v-icon>
        <v-icon v-else name="co-moon" class="text-back" scale="1.5"></v-icon>
        <input
          type="checkbox"
          class="toggle ml-1"
          :checked="themeStore.theme === 'luxury'"
          @change="toggleTheme"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { useThemeStore } from "../stores/ThemeStore";
const themeStore = useThemeStore();

const linkNav = [
  {
    pathName: "About",
    urlName: "about",
  },
  {
    pathName: "Project",
    urlName: "project",
  },
  {
    pathName: "Experience",
    urlName: "experience",
  }
];
const toggleTheme = () => {
  const newTheme = themeStore.theme === "cupcake" ? "luxury" : "cupcake";
  themeStore.setTheme(newTheme);
};
</script>
