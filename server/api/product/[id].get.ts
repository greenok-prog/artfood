import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const idParam = getRouterParam(event, "id");
  // const token = getCookie(event, "access");

  return await useApi(`${ENDPOINTS.PRODUCTS + idParam}/retrieve`, {});
});
