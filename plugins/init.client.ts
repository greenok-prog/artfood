import { useAddress } from "~/store/address";
import { useAuthStore } from "~/store/auth";
import { useCartStore } from "~/store/cart";
import { useFavoriteStore } from "~/store/favorite";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:beforeMount", () => {
    const accessToken = useCookie("access");
    const cartId = useCookie("cartId");
    const favoriteStore = useFavoriteStore();
    const cartStore = useCartStore();
    const addressStore = useAddress();
    const userStore = useAuthStore();
    addressStore.setCities();

    if (cartId.value) {
      cartStore.setCart();
    }
    if (accessToken.value) {
      userStore.getUser();
    }

    favoriteStore.setFavorite();
  });
});
