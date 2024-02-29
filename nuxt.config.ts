// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@pinia/nuxt",
    "nuxt-swiper",
    "@vee-validate/nuxt",
    "nuxt-rating",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    [
      "nuxt-viewport",
      {
        breakpoints: {
          desktopMini: 1200,
          desktop: 1450,
          desktopWide: 1903,
          desktopBigWide: 2590,
          mobileMini: 320,
          mobileMedium: 360,
          mobile: 425,
          mobileWide: 578,
          tablet: 768,
          tabletWide: 992,
        },

        defaultBreakpoints: {
          desktop: "desktop",
          mobile: "mobile",
          tablet: "tablet",
        },
      },
    ],
  ],
  site: {
    url: "https://artfood-shop.kz",
  },
  robots: {
    UserAgent: "*",
    Disallow: "",
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        {
          content: "V18U93ldQUYUAstFtux-x9fLbGZTSYVUhqjdkdkYvok",
          name: "google-site-verification",
        },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/logo.png", sizes: "180x180" },
      ],
    },
  },
  swiper: {
    prefix: "Swiper",
    styleLang: "scss",
    modules: ["navigation", "pagination", "autoplay", "thumbs"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                  @import "@/assets/scss/variables/index.scss";
                  @import "@/assets/scss/mixins/index.scss";
              `,
        },
      },
    },
  },

  css: ["@/assets/scss/style.scss", "vue-final-modal/style.css"],
  imports: {
    dirs: ["./stores"],
  },
  components: {
    path: "~/components",
    pathPrefix: false,
  },

  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      tokenBase: process.env.TOKEN_API,
    },
  },

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
});