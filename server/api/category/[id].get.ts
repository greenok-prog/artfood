import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const categoryId = getRouterParam(event, "id");
  return await useApi(
    `${ENDPOINTS.PRODUCTS}category/retrieve/${categoryId}`,
    {}
  );
});
