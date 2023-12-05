import type { City } from "~/dto/addresses";

export const useAddress = defineStore("address", {
  state: () => {
    return {
      cities: [] as City[],
    };
  },
  actions: {
    async setCities() {
      const { data } = await useFetch<City[]>("/api/cities");
      if (data.value) {
        this.cities = data.value.results;
      }
    },
  },
});
