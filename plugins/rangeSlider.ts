import Slider from "multi-range-slider-vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("MultiSlider", Slider);
});
