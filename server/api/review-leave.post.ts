import { useCookie } from "nuxt/app";
import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "access");
  const body = await readBody(event);

  const res = await useApi(`${ENDPOINTS.REVIEW}`, {
    method: "post",
    body: body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
});
