<template>
    <NuxtLink to="/user" class="change-password__link">
        Назад
    </NuxtLink>
    <div class="change-password">
        <h3 class="change-password__title">
            Смена пароля
        </h3>
        <FormError :error-message="serverError" />
        <form @submit.prevent="submitHandler" action="">
            <VeeField name="password" v-slot="{ errorMessage }">
                <label class="change-password__label">
                    Новый пароль
                </label>
                <PasswordInput 
                  v-model="password"
                  :error-message="errorMessage"
                  class="change-password__input" 
                />
            </VeeField>
            <VBtn @click="submitHandler" class="change-password__button">Сохранить</VBtn>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { object, string } from 'yup';

const router = useRouter()

const { handleSubmit } = useForm({
    validationSchema: object({
        password: string().required('Обязательное поле')
    }),
    initialValues: {
        password: ''
    }
})
const serverError = ref('')
const { value: password } = useField<string>('password')
const submitHandler = handleSubmit(async () => {
    const { error, status } = await useAuthFetch('/api/change-password', {
        method: 'post',
        body: {
            new_password: password.value,
            repeat_password: password.value
        }
    })
    if (status.value === 'success') {
        router.push('/user')
    }
    else {
        console.log(error.value?.data.data);

        // serverError.value = getErrors(error.value)[0]
    }

})

</script>
<style lang="scss" scoped>
.change-password {
    padding: 30px;
    border-radius: 24px;
    background: #FFF;
    width: 530px;
    margin-top: 18px;

    @include atLg {
        width: 100%;
    }

    // .change-password__link

    &__link {
        color: $additional;
    }

    // .change-password__title

    &__title {
        color: #2C2C2C;
        font-size: 30px;
        font-weight: 700;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 24px;
    }

    // .change-password__label

    &__label {
        color: #2C2C2C;
    }

    // .change-password__input

    &__input {
        margin-top: 5px;
    }

    // .change-password__button

    &__button {
        margin-top: 14px;
    }
}
</style>