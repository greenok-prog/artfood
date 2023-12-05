import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "access");
  const body = await readBody(event);
  const param = getRouterParam(event, "id");
  const res = await useApi(`${ENDPOINTS.ADDRESS_COMPANY}${param}/`, {
    method: "put",
    body: body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
});
