import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  const res = await useApi(`${ENDPOINTS.LIBRARY}list_social_network`);
  return res;
});
