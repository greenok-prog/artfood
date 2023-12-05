<template>
    <form @submit.prevent="submitHandler" class="form">
        <h3>Восстановление пароля</h3>
        <VeeField name="login" v-slot="{ errorMessage }">
            <BaseInput v-model="login" :error-message="errorMessage"
                placeholder="E-mail или телефон" />
        </VeeField>
        <VBtn>Восстановить пароль</VBtn>
    </form>
</template>
<script lang="ts" setup>
import { object, string } from 'yup';


const schema = object({
    login: string().email('Неверный формат email').required('Обязательное поле')
})
const { handleSubmit, setErrors } = useForm({
    validationSchema: schema,
    initialValues: {
        login: ''
    }
})
const { value: login } = useField('login')
const submitHandler = handleSubmit(async () => {
    const { status, data, execute, error } = await useFetch('/api/forgot-password', {
        method: 'post',
        body: {
            email: login.value
        }
    })

    if (status.value === 'success') {
        await navigateTo(`/auth/password-recovery/submit?email=${login.value}`)
    } else {
        const errorMessage = error?.value?.data?.data?.message
        setErrors({
            login: errorMessage
        })

    }
    execute()

})
</script>

<style lang="scss" scoped>
.form {
    h3 {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 24px;
    }

    input {}

    button {

        margin-top: 10px;
    }
}
</style>