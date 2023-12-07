import { useCookie } from "nuxt/app";
import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const res = await useApi(`${ENDPOINTS.LIBRARY}list_address_store`);
  return res;
});
