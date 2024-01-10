import type { ListProduct } from "~/types/api-schema";
const localCompareName = "compare";
export const useCompareStore = defineStore("compare", {
  state: () => {
    return {
      compare: [] as ListProduct[],
    };
  },
  actions: {
    async addToCompare(item: ListProduct) {
      this.compare.push(item);
      localStorage.setItem(localCompareName, JSON.stringify(this.compare));
    },
    async removeFromcompare(item: ListProduct) {
      this.compare = this.compare.filter((el) => el.id !== item.id);
      localStorage.setItem(localCompareName, JSON.stringify(this.compare));
    },
    setcompare() {
      if (process.client) {
        const localValue = JSON.parse(localStorage.getItem(localCompareName));
        this.compare = localValue ? localValue : [];
      }
    },
    clearCompare() {
      this.compare = [];
      localStorage.setItem(localCompareName, JSON.stringify([]));
    },
  },
  getters: {
    compareCount(state) {
      if (state.compare) {
        return state.compare.length;
      }
    },
    productIsCompare: (state) => {
      return (productId: number) =>
        !!state.compare.find((el) => el.id === productId);
    },
  },
});
