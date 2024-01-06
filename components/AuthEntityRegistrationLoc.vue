<template>
    <div class="registration-loc">

        <div class="registration-loc__top">
            <p>{{ Number(route.query.step) + 1 }}. Адрес</p>

        </div>
        <FormError v-if="serverError" class="registration-loc__error"
            :error-message="serverError" />
        <VeeFieldArray name="addresses" v-slot="{ fields, push, remove }">
            <div v-for="(address, index) in fields" :key="address.key"
                class="registration-loc__form">
                <ModalCloseSvg @click="remove(index)"
                    class="registration-loc__remove" />
                <VeeField class="registration-loc__form-city"
                    :name="`addresses[${index}].city`"
                    v-slot="{ errorMessage }">
                    <BaseDropdown placeholder="Город *" :options="cities"
                        v-model="address.value.city"
                        :error-message="errorMessage" />


                </VeeField>
                <VeeField :name="`addresses[${index}].street`"
                    v-slot="{ errorMessage }">
                    <BaseInput :error-message="errorMessage"
                        v-model="address.value.street"
                        placeholder="Например: улица Абая 149/1 *" />
                </VeeField>
                <div class="registration-loc__group">
                    <VeeField
                        :name="`addresses[${index}].apartment_number`"
                        v-slot="{ errorMessage }">
                        <BaseInput :error-message="errorMessage"
                            v-model="address.value.apartment_number"
                            placeholder="Квартира *" />
                    </VeeField>
                    <VeeField name="address.floor">
                        <BaseInput v-model="address.floor"
                            placeholder="Этаж" />
                    </VeeField>
                </div>
            </div>
            <span class="registration-loc__add" @click="push(newAddress)">
                <AddSvg /> Добавить еще адрес
            </span>
        </VeeFieldArray>

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
const route = useRoute()
const schema = object({
    addresses: array().of(object({
        city: object({
            name: string().required("Обязательное поле")
        }),
        apartment_number: string().required("Обязательное поле"),
        street: string().required("Обязательное поле")
    }))
})
const { handleSubmit, errors } = useForm({
    validationSchema: schema,
    initialValues: {
        addresses: [
            {
                city: {},
                floor: null,
                street: '',
                house_number: '',
                apartment_number: null,

            }
        ],
        agree: false
    }
})
const newAddress: Address = {
    city: {},
    floor: null,
    street: '',
    house_number: '',
    apartment_number: null,

}
const serverError = ref('')
const { value: addresses } = useField<Address[]>('addresses')
const { value: agree } = useField<boolean>('agree')

const navigateToBack = () => {
    return navigateTo('/auth/registration/entity?step=2')
}
const submit = handleSubmit(async () => {

    const fetchData = {
        ...store.registrationUser,
        addresses: addresses.value.map(el => {
            return { ...el, city: el.city.id }
        }),
        contact_person: {
            surname: store.registrationUser.username,
            first_name: store.registrationUser.second_name,
            second_name: store.registrationUser.second_name
        }
    }
    store.setRegistrationErrors(null)
    try {
        const res = await $fetch('/api/registration-company', {
            method: 'post',
            body: fetchData
        })


        await useRouter().push('/auth/registration/message')
    } catch (e) {
        serverError.value = 'Ошибка при регистрации'
        console.log(e.data.data);

        store.setRegistrationErrors(e.data.data)
    }

})
</script>

<style lang="scss" scoped>
.registration-loc {
    &__error {
        margin-top: 10px;
        text-align: center;
    }

    &__city_error {
        color: $warning;
        font-size: 13px;
    }

    &__remove {
        float: right;
        cursor: pointer;
        position: absolute;
        right: 14px;
        top: -25px;

        :deep(path) {
            fill: rgba(0, 0, 0, 0.471) !important;
        }
    }

    // .registration-loc__top

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
        cursor: pointer;
    }

    &__form {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: relative;



    }

    // .registration-loc__group

    &__group {
        display: flex;
        align-items: flex-start;
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