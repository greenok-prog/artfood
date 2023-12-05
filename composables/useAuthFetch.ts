import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export async function useAuthFetch<
  T,
  U = Record<string, any>,
  V = Record<string, any>,
>(url: string, options: UseApiOptions<T, U, V> = {}) {
  const access = useCookie("access");
  const refreshToken = useCookie("refresh");
  const defaults: UseFetchOptions<T> = {
    headers: { "Content-Type": "application/json" },
    onResponse(_ctx) {},
    async onResponseError({ response }) {
      if (response.status === 401) {
        const res: { access: string } = await $fetch(
          "https://artfood.dev.thefactory.kz/api/token/refresh/",
          {
            method: "post",
            body: {
              refresh: refreshToken.value,
            },
          }
        );
        if (res.access) {
          access.value = res.access;
        }
      }
    },
  };

  const params = defu(options, defaults);
  const fetch = await useFetch<T>(url, params as any);
  if (fetch.error.value) {
    fetch.refresh();
  }

  return fetch;
}

type UseApiOptions<T, U = Record<string, any>, V = Record<string, any>> = Omit<
  UseFetchOptions<T>,
  "body" | "params"
> & {
  body?: U;
  params?: V;
};
