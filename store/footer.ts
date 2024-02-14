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
      const { data: social } = await useFetch("/api/store-social", {
        method: "get",
      });
      const { data: addresses } = await useFetch("/api/store-addresses", {
        method: "get",
      });
      const { data: categories } = await useFetch("/api/popular-categories");
      this.categories = categories.value.results;
      this.address = addresses.value.results[0];
      this.social = social.value.results;
    },
  },
});
