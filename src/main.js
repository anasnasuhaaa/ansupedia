import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./style.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";

import * as FaIcons from "oh-vue-icons/icons/fa";
import * as CoIcons from "oh-vue-icons/icons/co";
import * as SiIcons from "oh-vue-icons/icons/si";
import { useThemeStore } from "./stores/ThemeStore";

const pinia = createPinia();

const Fa = Object.values({ ...FaIcons });
const Co = Object.values({ ...CoIcons });
const Si = Object.values({ ...SiIcons });
addIcons(...Fa, ...Co, ...Si);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(pinia);
app.mount("#app");

const themeStore = useThemeStore();
document.documentElement.setAttribute('data-theme', themeStore.theme)