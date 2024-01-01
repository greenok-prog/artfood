<template>
    <div class="change-info">
        <h3 class="change-info__title">
            Мои данные
        </h3>
        <form @submit.prevent="submitHandler" class="change-info__form">
            <div class="change-info__form-inputs">
                <VeeField name="user.username" v-slot="{ errorMessage }"
                    class="change-info__input-block">
                    <label for="">Имя</label>
                    <BaseInput v-model="user.username"
                        :error-message="errorMessage" />
                </VeeField>
                <VeeField name="user.last_name" v-slot="{ errorMessage }"
                    class="change-info__input-block">
                    <label for="">Фамилия</label>
                    <BaseInput :error-message="errorMessage"
                        v-model="user.last_name" />
                </VeeField>
                <!-- <VeeField name="user.email" class="change-info__input-block">
                    <label for="">Почта</label>
                    <BaseInput v-model="user.email" />
                </VeeField> -->
                <VeeField name="user.phone_number"
                    v-slot="{ errorMessage }"
                    class="change-info__input-block">
                    <label for="">Телефон</label>
                    <PhoneInput v-model="user.phone_number"
                        :error-message="errorMessage" />
                </VeeField>
            </div>

            <VBtn>Сохранить</VBtn>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { object, string } from 'yup'
interface UserData {
    username: string,
    second_name: string,
    last_name: string,
    email: string,
    phone_number: string
}
const schema = object({
    user: object({
        phone_number: string().required("Обязательное поле"),
        last_name: string().required("Обязательное поле"),
        username: string().required("Обязательное поле"),
    })
})
const { data } = await useAuthFetch<UserData>('/api/profile', {
    method: 'get'
})

const { handleSubmit, setErrors } = useForm({
    validationSchema: schema,
    initialValues: {
        user: {
            username: data.value?.username,
            phone_number: data.value?.phone_number,
            last_name: data.value?.last_name,
            second_name: data.value?.second_name,
            email: data.value?.email
        } as UserData
    }
})
const { value: user } = useField<UserData>('user')

const submitHandler = handleSubmit(async () => {
    const { error, status, execute } = await useFetch(`/api/profile-change`, {
        method: 'patch',

        body: {
            username: user.value.username,
            last_name: user.value.last_name,
            phone_number: user.value.phone_number,
        },
    })

    if (status.value === 'success') {
        useRouter().push('/user')
    } else {
        execute()
        setErrors(formatErrors(error, 'user'))
    }
})

</script>
<style lang="scss" scoped>
.change-info {
    padding: 30px;
    border-radius: 24px;
    background: #FFF;
    width: 100%;

    @include atLg {
        padding: 16px;
    }

    // .change-info__title

    &__title {
        color: #2C2C2C;
        font-size: 30px;
        font-weight: 700;

        @include atLg {
            font-size: 24px;
        }
    }

    // .change-info__form

    &__form {
        margin-top: 24px;

        button {
            margin-top: 24px;
            width: 220px;
        }

    }

    // .change-info__form-inputs

    &__form-inputs {
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    // .change-info__input-block

    &__input-block {
        display: flex;
        flex-direction: column;
        gap: 5px;

        label {
            color: #2C2C2C;
        }
    }


}
</style>