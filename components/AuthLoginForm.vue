<template>
    <form class="login-form" @submit.prevent>
        <h4 class="login-form__title">Вход в личный кабинет</h4>
        <FormError class="login-form__error"
            :errorMessage="serverError" />
        <VeeField name="user.email" v-slot="{ errorMessage }">
            <BaseInput v-model="user.email" class="login-form__login"
                placeholder="E-mail или телефон"
                :error-message="errorMessage" />

        </VeeField>
        <VeeField name="user.password" v-slot="{ errorMessage }">
            <PasswordInput v-model="user.password"
                class="login-form__password" placeholder="Пароль"
                type="password" :error-message="errorMessage" />
        </VeeField>
        <!-- <div v-if="serverError">{{ serverError }}</div> -->
        <div class="login-form__row">
            <VeeField name="user.remember">
                <VCheckbox v-model="user.remember">Запомнить меня
                </VCheckbox>
            </VeeField>
            <VLink to="/auth/password-recovery">Не помню пароль</VLink>
        </div>

        <VBtn class="login-form__button" @click="submitHandler">Войти
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
    user: object({
        email: string().required("Обязательное поле"),
        password: string().required("Обязательное поле"),
    }),
});

const { handleSubmit } = useForm({
    validationSchema: schema,
    initialValues: {
        user: {
            email: "",
            password: "",
            remember: false,
        } as User,
    },
});

const { value: user } = useField<User>("user");
const serverError = ref<string>('')
const config = useRuntimeConfig()
const submitHandler = handleSubmit(async () => {

    const { data, error, status, execute } = await useFetch<Login>(
        `${config.public.tokenBase}`,
        {
            method: 'POST',

            body: {
                email: user.value.email,
                password: user.value.password,
                remember: user.value.remember,
            },
        }
    );


    if (status.value === 'success') {
        const auth = useCookie('access')
        const refresh = useCookie('refresh')
        refresh.value = data.value.refresh
        auth.value = data.value.access
        const id = useCookie('userId')
        id.value = VueJwtDecode.decode(data.value.access).user_id
        localStorage.setItem('userId', VueJwtDecode.decode(data.value.access).user_id)
        await getUser()
        await navigateTo('/user')
    }
    else {

        serverError.value = getErrors(error)[0]
        execute()

    }

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
