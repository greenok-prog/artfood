import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const idParam = getRouterParam(event, "id");
  return await useApi(`${ENDPOINTS.BLOG + idParam}`);
});
