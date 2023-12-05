import { useCookie } from "nuxt/app";
import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  //   const body = await readBody(event);
  const res = await useApi(`${ENDPOINTS.USER}forgot-password/`, {
    method: "post",
    body: body,
  });
  return res;
});
