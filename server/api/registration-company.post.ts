import { useApi } from "~/composables/useApi";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return await useApi(`/signup_company`, {
    method: "POST",
    body: body,
  });
});
