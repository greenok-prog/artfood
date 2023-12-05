import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const queryParams = getQuery(event);
  return await useApi(`${ENDPOINTS.PRODUCTS}`, {
    query: queryParams,
  });
});