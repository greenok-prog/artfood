<template>
    <div class="registration-loc">

        <FormError v-if="errors.addresses" class="registration-loc__error"
            :error-message="errors.addresses" />
        <div class="registration-loc__top">
            <p>{{ Number(route.query.step) + 1 }}. Адрес</p>
            <span>Указать на карте</span>
        </div>
        <div v-for="(address, index) in addresses" :key="index"
            class="registration-loc__form">
            <VeeField class="registration-loc__form-city"
                v-slot="{ errorMessage }" name="address.city">
                <BaseDropdown :options="cities" v-model="address.city" />
                <p>{{ errorMessage }}</p>
            </VeeField>
            <VeeField name="address.street">
                <BaseInput v-model="address.street"
                    placeholder="Например: улица Абая 149/1 *" />
            </VeeField>
            <div class="registration-loc__group">
                <VeeField name="address.apartment_number">
                    <BaseInput v-model="address.apartment_number"
                        placeholder="Квартира *" />
                </VeeField>
                <VeeField name="address.floor">
                    <BaseInput v-model="address.floor"
                        placeholder="Этаж" />
                </VeeField>
            </div>
        </div>
        <span class="registration-loc__add" @click="addAddress">
            <AddSvg /> Добавить еще адрес
        </span>
        <VeeField name="agree">
            <VCheckbox v-model="agree" class="registration-loc__agree">
                Я прочитал (а) <VLink to="#" type="underline">условия
                    оплаты и
                    доставки</VLink>
                и даю согласие на обработку персональных данных
            </VCheckbox>
        </VeeField>
        <div class="registration-loc__actions">
            <VBtn variant="outlined"
                class="registration-loc__actions-back"
                @click="navigateToBack">
                Назад</VBtn>
            <VBtn @click="submit">Регистрация</VBtn>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { array, object, string } from 'yup';
import { useAddress } from '~/store/address';
import { useAuthStore } from '~/store/auth';
import type { Address } from '~/types/api-schema';
const store = useAuthStore()
const { cities } = storeToRefs(useAddress())
const emit = defineEmits(['goBack'])
const schema = object({
    addresses: array().of(object({
        city: object({
            name: string().required("Заполните необходимые данные")
        })
    }))
})
const route = useRoute()
const { handleSubmit, errors } = useForm({
    validationSchema: schema,
    initialValues: {
        addresses: [
            {
                city: {},

            }
        ],
        agree: false
    }
})


const { value: addresses } = useField<Address[]>('addresses')
const { value: agree } = useField<boolean>('agree')
const id = ref(1)
const addAddress = () => {
    const newAddress: Address = {
        city: '',
        floor: null,
        street: '',
        district: 1,
        house_number: '',
        apartment_number: null,


    }
    addresses.value.push(newAddress)

}
const navigateToBack = () => {
    return navigateTo('/auth/registration/individual?step=1')
}
const submit = handleSubmit(async () => {
    const fetchData = {
        ...store.registrationUser,
        addresses: addresses.value.map(el => {
            return { ...el, city: el.city.id }
        }),

    }
    const { status, error, execute } = await useFetch('/api/registration-individual', {
        method: 'post',
        body: fetchData
    })
    execute()
    if (status.value === 'success') {
        store.$reset()
        return navigateTo('/')
    } else {
        store.setRegistrationErrors(error)

    }
})
</script>

<style lang="scss" scoped>
.registration-loc {

    // .registration-loc__top
    &__error {
        margin-top: 10px;
        text-align: center;
    }

    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;

        p {
            text-transform: uppercase;
            color: $text;
        }

        span {
            color: $additional;
            cursor: pointer;
        }
    }

    // .registration-loc__form
    &__add {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 20px;
        color: $additional;
    }

    &__form {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;

    }

    // .registration-loc__group

    &__group {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &__agree {
        padding-top: 200px;

        @include atMd {
            padding-top: 30px;
        }
    }

    // .registration-loc__actions

    &__actions {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-top: 20px;

        &-back {
            background-color: transparent;
            border: 2px solid $additional;
            color: $additional;
        }

        button {
            width: 220px;
            height: 50px;
            padding: 0;
        }
    }
}
</style>