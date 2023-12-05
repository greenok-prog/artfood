import { useCookie } from "nuxt/app";
import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "access");

  const res = await useApi(`${ENDPOINTS.PRODUCTS}not_review`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
});
