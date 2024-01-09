import { useApi } from "~/composables/useApi";
import ENDPOINTS from "~/constants/endpoints";

export default defineEventHandler(async (event) => {
  return await useApi(`${ENDPOINTS.LIBRARY}payment_delivery_policy`);
});
