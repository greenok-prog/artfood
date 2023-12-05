export const useFilter = defineStore("filter", {
  state: () => {
    return {
      orderBy: "" as string,
      brand: undefined as undefined | { id: number; name: string },
      minPrice: "",
      maxPrice: "",
      activeCategory: "",
      country: undefined as undefined | { id: number; name: string },
      page: 1,
    };
  },
  actions: {
    setBrand(brand: { id: number; name: string }) {
      this.brand = brand;
    },
    setPrice(maxPrice: string, minPrice: string) {
      this.minPrice = minPrice;
      this.maxPrice = maxPrice;
    },
    setActiveCategory(category: string) {
      this.activeCategory = category;
    },
    setCountry(country: { id: number; name: string }) {
      this.country = country;
    },
    resetFilter() {
      this.brand = undefined;
      this.maxPrice = "";
      this.minPrice = "";
      this.orderBy = "";
    },
    setPage(page: number) {
      this.page = page;
    },
  },
});
