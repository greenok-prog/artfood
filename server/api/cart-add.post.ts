import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const id = getCookie(event, "cartId");
  const body = await readBody(event);
  const authToken = getCookie(event, "access");

  return await useApi(`${ENDPOINTS.CART}add/${id}`, {
    method: "post",
    body: body,
    headers: authToken
      ? {
          Authorization: `Bearer ${authToken}`,
        }
      : {},
  });
});