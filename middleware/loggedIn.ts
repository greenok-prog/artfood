import { useAuthStore } from "~/store/auth";
import { useFavoriteStore } from "~/store/favorite";

export default defineNuxtRouteMiddleware(() => {
  const access = useCookie("access");
  if (!access.value) {
    return navigateTo("/auth/login");
  }
});
