import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const token = getCookie(event, "access");
  return useApi(`${ENDPOINTS.USER}address/`, {
    method: "POST",
    body: body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
});
