export const useFooter = defineStore("footer", {
  state: () => {
    return {
      social: null,
      address: null,
      categories: null,
    };
  },
  actions: {
    async getFooter() {
      const social = await $fetch("/api/store-social", {
        method: "get",
      });
      const addresses = await $fetch("/api/store-addresses", {
        method: "get",
      });
      const categories = await $fetch("/api/popular-categories");
      this.categories = categories.results;
      this.address = addresses.results[0];

      if (social) {
        this.social = social.results;
      }
    },
  },
});
