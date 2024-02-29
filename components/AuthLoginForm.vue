<template>
    <form class="login-form" @submit="login">
        <h4 class="login-form__title">Вход в личный кабинет</h4>
        <FormError class="login-form__error"
            :errorMessage="serverError" />
        <VeeField name="email" v-slot="{ errorMessage }">
            <BaseInput v-model="email" type="email"
                class="login-form__login" placeholder="E-mail"
                :error-message="errorMessage" />

        </VeeField>
        <VeeField name="password" v-slot="{ errorMessage }">
            <PasswordInput v-model="password" class="login-form__password"
                placeholder="Пароль" type="password"
                :error-message="errorMessage" />
        </VeeField>
        <div class="login-form__row">
            <VeeField name="remember">
                <VCheckbox v-model="remember">Запомнить меня
                </VCheckbox>
            </VeeField>
            <VLink to="/auth/password-recovery">Не помню пароль</VLink>
        </div>

        <VBtn class="login-form__button">Войти
        </VBtn>
        <p class="login-form__bottom">
            У меня нет учетной записи.
            <VLink type="underline" to="/auth/registration">
                Зарегистрироваться</VLink>
        </p>
    </form>
</template>

<script lang="ts" setup>
import { object, string } from "yup";
import ENDPOINTS from "~/constants/endpoints";
import type { Login } from "~/types/api-schema";
import { getErrors } from "~/utils/validation";
import VueJwtDecode from 'vue-jwt-decode';
import { useAuthStore } from "~/store/auth";
const { getUser } = useAuthStore()
interface User {
    email: string;
    password: string;
    remember?: boolean;
}
const schema = object({
    email: string().required("Обязательное поле"),
    password: string().required("Обязательное поле"),
});

const { handleSubmit } = useForm({
    validationSchema: schema,
    initialValues: {
        email: "",
        password: "",
        remember: false,

    },

});
const { value: email } = useField<string>('email')
const { value: password } = useField<string>('password')
const { value: remember } = useField<string>('remember')

const serverError = ref<string>('')
const config = useRuntimeConfig()

const login = handleSubmit(async () => {
    try {
        const res = await $fetch(`${config.public.tokenBase}`, {
            method: 'post',

            body: {
                email: email.value,
                password: password.value,
                remember: remember.value,
            },
        })
        const auth = useCookie('access')
        const refresh = useCookie('refresh')
        refresh.value = res.refresh
        auth.value = res.access
        const id = useCookie('userId')
        id.value = VueJwtDecode.decode(res.access).user_id
        localStorage.setItem('userId', VueJwtDecode.decode(res.access).user_id)


        const cartId = useCookie("cartId");
        
        return useRouter().push('/user')
    } catch (e) {

        serverError.value = e.data.detail
    }


    // const { data, error, status, execute } = await useFetch<Login>(
    //     `${config.public.tokenBase}`,
    //     {
    //         method: 'post',

    //         body: {
    //             email: email.value,
    //             password: password.value,
    //             remember: remember.value,
    //         },

    //     }
    // );
    // serverError.value = ''
    // console.log(status.value);


    // if (status.value === 'success') {
    //     const auth = useCookie('access')
    //     const refresh = useCookie('refresh')
    //     refresh.value = data.value.refresh
    //     auth.value = data.value.access
    //     const id = useCookie('userId')
    //     id.value = VueJwtDecode.decode(data.value.access).user_id
    //     localStorage.setItem('userId', VueJwtDecode.decode(data?.value?.access).user_id)

    //     return useRouter().push('/user')
    // }
    // else {

    //     serverError.value = getErrors(error)[0]
    //     execute()



    // }

    // return data.value

});

</script>

<style lang="scss" scoped>
.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    // .login-form__title

    &__title {
        font-size: 24px;
        color: #2c2c2c;
        font-weight: 700;
    }

    &__error {
        margin-top: 8px;
    }

    // .login-form__login

    &__login {
        margin-top: 24px;
    }

    // .login-form__password

    &__password {
        margin-top: 10px;
    }

    // .login-form__row

    &__row {
        margin-top: 16px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
            color: $additional;
            text-decoration: none;
        }
    }

    // .login-form__button

    &__button {
        margin-top: 24px;
    }

    &__bottom {
        width: 100%;
        text-align: start;
        margin-top: 24px;
        color: rgba(44, 44, 44, 0.8);
    }
}
</style>
