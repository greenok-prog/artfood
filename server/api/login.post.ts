import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const res = await useApi(`${ENDPOINTS.USER}login/`, {
    body: body,
    method: "post",
    // headers: { Authorization: `Bearer ${userAuth}` },
  });

  return res;
});
