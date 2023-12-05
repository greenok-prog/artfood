import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const res = await $fetch(
    `https://artfood.dev.thefactory.kz/api/token/refresh/`,
    {
      method: "POST",
      body: body,
    }
  );
  // console.log(getCookie(event, "access"));

  // return res;
});
