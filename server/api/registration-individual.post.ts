import { useApi } from "~/composables/useApi";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return await useApi(`/signup_individual`, {
    method: "POST",
    body: body,
  });
});
