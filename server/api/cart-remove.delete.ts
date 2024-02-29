import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const id = getCookie(event, "cartId");
  const body = await readBody(event);

  const res = await useApi(`${ENDPOINTS.CART}delete/${id}`, {
    method: "delete",
    body: body,
  });

  return res;
});
