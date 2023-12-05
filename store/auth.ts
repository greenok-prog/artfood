export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      user: {},
      registrationUser: {},
      isLoggedIn: false,
      registrationErrors: null,
    };
  },
  actions: {
    setUser(user) {
      this.user = user;
    },

    async getUser() {
      const refreshToken = useCookie("refresh");
      const access = useCookie("access");
      let user = {};
      let isLoggedIn = false;
      const { data, status } = await useFetch("/api/profile", {
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
              user = data.value;
              isLoggedIn = true;
            }
          }
        },
      });
      if (status.value === "success") {
        this.user = data.value;
        this.isLoggedIn = true;
      }
    },
    setRegistration(info: object) {
      this.registrationUser = { ...this.registrationUser, ...info };
    },
    setRegistrationErrors(error: any) {
      this.registrationErrors = error;
    },
    logout() {
      const accessToken = useCookie("access");
      const refreshToken = useCookie("refresh");
      accessToken.value = null;
      refreshToken.value = null;
      this.isLoggedIn = false;
      this.user = {};
      const router = useRouter();
      router.push("/");
    },
  },
});
