<template>
    <form @submit.prevent="submitHandler" class="change-password">
        <h1>Изменение пароля</h1>
        <div class="change-password__inputs">
            <VeeField name="password" v-slot="{ errorMessage }">
                <PasswordInput v-model="password"
                    placeholder="Новый пароль"
                    :error-message="errorMessage" />
            </VeeField>
            <VeeField name="passwordRepeat" v-slot="{ errorMessage }">
                <PasswordInput v-model="passwordRepeat"
                    :error-message="errorMessage"
                    placeholder="Повторите пароль" />
            </VeeField>
        </div>
        <VBtn @click.prevent="submitHandler">Изменить</VBtn>
    </form>
</template>
<script lang="ts" setup>
import { object, string, ref } from 'yup';
const route = useRoute()


const schema = object({
    password: string().min(8, "Пароль должен состоять из 8 символов").required('Обязательное поле'),
    passwordRepeat: string().required('Обязательное поле').oneOf([ref('password')], "Пароли не совпадают")
})
const { handleSubmit } = useForm({
    initialValues: {
        password: '',
        passwordRepeat: ''
    },
    validationSchema: schema
})
const { value: password } = useField<string>('password')
const { value: passwordRepeat } = useField<string>('passwordRepeat')

const submitHandler = handleSubmit(async () => {
    const { data, status } = await useFetch('/api/update-password', {
        method: 'post',
        query: {
            token: route.query.token
        },
        body: {
            new_password: password.value,
            repeat_password: passwordRepeat.value,
        }
    })
    if (status.value === 'success') {
        await navigateTo('/auth/login')

    }

})
onMounted(async () => {
    if (!route.query.token) {
        return navigateTo('/')
    }
})

</script>
<style lang="scss" scoped>
.change-password {
    display: flex;
    flex-direction: column;
    gap: 24px;

    h1 {
        font-size: 24px;
        font-weight: 700;
        color: $text;
        text-align: center;
    }

    // .change-password__inputs

    &__inputs {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
}
</style>