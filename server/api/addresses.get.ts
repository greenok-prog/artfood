import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const authToken = getCookie(event, "access");

  return await useApi(`${ENDPOINTS.USER}address`, {
    method: "get",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
});
