<template>
    <form @submit.prevent class="form">
        <p class="form__subtitle">2. Личные данные</p>
        <div class="form__inputs">
            <VeeField name="user.last_name" v-slot="{ errorMessage }">
                <BaseInput v-model="user.last_name"
                    :errorMessage="errorMessage" placeholder="Фамилия" />
            </VeeField>
            <VeeField name="user.username" v-slot="{ errorMessage }">
                <BaseInput v-model="user.username" placeholder="Имя"
                    :errorMessage="errorMessage" />
            </VeeField>
            <VeeField name="user.second_name" v-slot="{ errorMessage }">
                <BaseInput v-model="user.second_name"
                    placeholder="Отчество" :errorMessage="errorMessage" />
            </VeeField>
            <VeeField name="user.email" v-slot="{ errorMessage }">
                <BaseInput type="email" placeholder="E-mail"
                    v-model="user.email" :error-message="errorMessage" />
            </VeeField>
            <VeeField name="user.phone_number" v-slot="{ errorMessage }">
                <PhoneInput placeholder="Телефон"
                    v-model="user.phone_number"
                    :errorMessage="errorMessage" />

            </VeeField>
            <VeeField name="user.different_whatsapp"
                v-slot="{ errorMessage }">
                <VCheckbox v-model="user.different_whatsapp">Номер
                    телефона
                    отличается от номера whatsapp
                </VCheckbox>
            </VeeField>
            <VeeField name="user.password" v-slot="{ errorMessage }">
                <PasswordInput v-model="user.password"
                    :errorMessage="errorMessage" placeholder="Пароль" />
            </VeeField>
        </div>
        <div class="form__actions">
            <VBtn @click="backHandler" variant="outlined"
                class="form__actions-back">
                Назад</VBtn>
            <VBtn @click="submitHandler" class="form__actions-next">
                Далее</VBtn>
        </div>
    </form>
</template>
<script lang="ts" setup>
import { object, string } from 'yup';
import { useAuthStore } from '~/store/auth';
import { formatFetchErrors } from '~/utils/validation';
const { setRegistration } = useAuthStore()
const { registrationErrors } = storeToRefs(useAuthStore())
const emit = defineEmits(['goToNext'])
const schema = object({
    user: object({
        phone_number: string().required("Обязательное поле"),
        email: string().required("Обязательное поле").email("Неверный формат email"),
        password: string().required("Обязательное поле").min(8, "Длина пароля должна быть больше 8 символов"),
        username: string().required("Обязательное поле"),
        last_name: string(),
        second_name: string().required("Обязательное поле"),
    })

})
interface User {
    username: string,
    last_name: string,
    second_name: string,
    different_whatsapp: boolean,
    email: string,
    phone_number: string,
    password: string

}
const { handleSubmit, setErrors } = useForm({
    validationSchema: schema,
    initialValues: {
        user: {
            username: "",
            last_name: "",
            second_name: "",
            different_whatsapp: false,
            email: "",
            password: "",
            phone_number: "",

        } as User,
    },
});

const { value: user } = useField<User>("user");

const submitHandler = handleSubmit(() => {
    setRegistration({ ...user.value, password_repeat: user.value.password })
    emit('goToNext')
})
const backHandler = () => {
    return navigateTo('/auth/registration')
}
watchEffect(() => {
    if (registrationErrors.value) {



        setErrors(formatFetchErrors(registrationErrors.value, 'user'));
    }
})
</script>
<style lang="scss" scoped>
.form {

    // .form__button

    &__button {
        margin-top: 24px;
    }

    &__subtitle {
        color: $text;
        text-transform: uppercase;
        margin-top: 20px;
    }

    // .form__inputs

    &__inputs {
        margin: 16px 0;
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 10px;

    }

    &__actions {
        display: flex;
        justify-content: space-between;
        gap: 10px;

        &-back {
            background-color: transparent;

        }

        button {
            width: 220px;
            height: 50px;
            padding: 0;
        }
    }

    // .form__bottom

    &__bottom {
        margin-top: 24px;
        color: rgba(44, 44, 44, 0.80);
        ;
    }
}
</style>