import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const authToken = getCookie(event, "access");

  return await useApi(`${ENDPOINTS.CART}add`, {
    method: "post",
    body: body,
    headers: authToken
      ? {
          Authorization: `Bearer ${authToken}`,
        }
      : {},
  });
});
