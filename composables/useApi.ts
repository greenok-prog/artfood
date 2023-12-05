import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export function useApi<T, U = Record<string, any>, V = Record<string, any>>(
  url: string,
  options: UseApiOptions<T, U, V> = {}
) {
  const config = useRuntimeConfig();

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.apiBase,
    key: `${url}`,
    headers: { "Content-Type": "application/json" },
    onResponse(_ctx) {},
    onResponseError({ response, request }) {},
  };

  const params = defu(options, defaults);

  return $fetch(url, params as any);
}

type UseApiOptions<T, U = Record<string, any>, V = Record<string, any>> = Omit<
  UseFetchOptions<T>,
  "body" | "params"
> & {
  body?: U;
  params?: V;
};
