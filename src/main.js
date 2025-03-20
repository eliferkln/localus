import { createApp } from "vue";
import "./style.css";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import App from "./App.vue";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: "light",
      cssLayer: false,
    },
  },
});

app.mount("#app");
