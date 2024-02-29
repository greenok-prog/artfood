import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const id = getCookie(event, "cartId");
  const authToken = getCookie(event, "access");

  const res = await useApi(`${ENDPOINTS.CART}list/${id}`, {
    headers: authToken
      ? {
          Authorization: `Bearer ${authToken}`,
        }
      : {},
  });

  return res;
});