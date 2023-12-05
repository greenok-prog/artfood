import { useAddress } from "~/store/address";
import { useAuthStore } from "~/store/auth";
import { useCartStore } from "~/store/cart";
import { useFavoriteStore } from "~/store/favorite";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:beforeMount", () => {
    const favoriteStore = useFavoriteStore();
    const cartStore = useCartStore();
    const addressStore = useAddress();
    const userStore = useAuthStore();
    addressStore.setCities();
    cartStore.setCart();
    userStore.getUser();
    favoriteStore.setFavorite();
  });
});
