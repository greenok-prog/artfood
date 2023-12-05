import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";
import { ReturnPolicy } from "~/types/api-schema";

export default defineEventHandler(async (event) => {
  return await useApi<ReturnPolicy>(`${ENDPOINTS.LIBRARY}return_policy`);
});
