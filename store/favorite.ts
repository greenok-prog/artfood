import ENDPOINTS from "~/constants/endpoints";
import type { ListProduct } from "~/types/api-schema";
const localFavoriteName = "favorite";
export const useFavoriteStore = defineStore("favorite", {
  state: () => {
    return {
      favorite: [] as ListProduct[],
    };
  },
  actions: {
    async addToFavorite(item: ListProduct) {
      this.favorite.push(item);
      localStorage.setItem(localFavoriteName, JSON.stringify(this.favorite));
    },
    async removeFromFavorite(item: ListProduct) {
      this.favorite = this.favorite.filter((el) => el.id !== item.id);
      localStorage.setItem(localFavoriteName, JSON.stringify(this.favorite));
    },
    setFavorite() {
      if (process.client) {
        const localValue = JSON.parse(localStorage.getItem(localFavoriteName));
        this.favorite = localValue ? localValue : [];
      }
    },
  },
  getters: {
    favoriteCount(state) {
      if (state.favorite) {
        return state.favorite.length;
      }
    },
    productIsFavorite: (state) => {
      return (productId: number) =>
        !!state.favorite.find((el) => el.id === productId);
    },
  },
});
