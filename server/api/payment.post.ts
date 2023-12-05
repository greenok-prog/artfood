import { useApi } from "~/composables/useApi";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "access");
  const body = await readBody(event);
  const res = await useApi(`/payment/`, {
    method: "post",
    body: body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
});
