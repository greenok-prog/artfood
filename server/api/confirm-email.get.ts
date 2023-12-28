import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  return await useApi(`${ENDPOINTS.USER}confirm-email/`, {
    query,
    method: "get",
  });
});
