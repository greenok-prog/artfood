import type { ListProduct } from "~/types/api-schema";
const viewedLocalName = "viewedProducts";
export const useProducts = defineStore("products", {
  state: () => {
    return {
      viewedProducts: [] as ListProduct[],
    };
  },
  actions: {
    viewedAdd(item: ListProduct) {
      const product = this.viewedProducts.find((el) => el.id === item.id);
      if (product) {
        return;
      }
      this.viewedProducts.push(item);
      if (process.client) {
        localStorage.setItem(
          viewedLocalName,
          JSON.stringify(this.viewedProducts)
        );
      }
    },
    getLocalViewed() {
      if (process.client) {
        const localState = JSON.parse(localStorage.getItem(viewedLocalName));
        if (!localState) {
          return;
        }
        this.viewedProducts = localState;
      }
    },
  },
  getters: {
    getViewed(state) {
      const route = useRoute();
      return state.viewedProducts.filter(
        (el) => el.id !== Number(route.params.id)
      );
    },
  },
});
