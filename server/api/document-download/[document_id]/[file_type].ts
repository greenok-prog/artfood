import { useCookie } from "nuxt/app";
import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "access");
  const id = getRouterParam(event, "document_id");
  const fileType = getRouterParam(event, "file_type");
  console.log(fileType);

  const res = await useApi(`${ENDPOINTS.DOCUMENTS + id}/${fileType}/download`, {
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
});
