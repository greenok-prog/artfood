import { useCookie } from "nuxt/app";
import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "access");
  const body = await readBody(event);
  const id = getRouterParam(event, "id");

  const res = await useApi(`${ENDPOINTS.USER}address/${id}/`, {
    method: "PUT",
    body: body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
});
