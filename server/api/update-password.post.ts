import { useCookie } from "nuxt/app";
import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const query = await getQuery(event);
  const res = await useApi(`${ENDPOINTS.USER}update-password/`, {
    method: "post",
    body: body,
    query: query,
  });
  return res;
});
