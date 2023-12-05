import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  //   console.log(getCookie(event, "csrftoken"));

  //   const userAuth = setCookie(event, "csrftoken");
  //   const isAuth = userAuth.value
  //     ? { Authorization: `Bearer ${userAuth.value}` }
  //     : undefined;
  //   console.log(userAuth);

  const res = await useApi(`${ENDPOINTS.USER}logout/`, {
    method: "post",
    // headers: { Authorization: `Bearer ${userAuth}` },
  });

  return res;
});
