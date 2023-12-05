import { useApi } from "~/composables/useApi";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "access");
  const res = await useApi(`/order`, {
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
});
