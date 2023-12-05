import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return await useApi(`${ENDPOINTS.PRODUCTS}similar`, {
    method: "post",
    body: body,
  });
});
