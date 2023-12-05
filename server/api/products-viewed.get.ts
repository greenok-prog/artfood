import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "access");
  return await useApi(`${ENDPOINTS.PRODUCTS}viewed`, {
    method: "get",
  });
});
