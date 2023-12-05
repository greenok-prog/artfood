<template>
    <div class="delivery-add">
        <div class="delivery-add__header">
            <span class="delivery-add__back" @click="emit('onBack')">
                <ProfileNavbarIconSvg />Назад
            </span>
            <h4 class="delivery-add__title">Адрес доставки</h4>
        </div>
        <form @submit.prevent="submitHandler" class="delivery-add__form">
            <VeeField name="address.city" v-slot="{ errorMessage }">
                <BaseDropdown class="delivery-add__form-city"
                    placeholder="Город" :options="cities"
                    v-model="address.city" />
            </VeeField>
            <VeeField name="address.street" v-slot="{ errorMessage }">
                <BaseInput v-model="address.street"
                    :error-message="errorMessage"
                    placeholder="Например: улица Абая 149/1 *" />
            </VeeField>
            <div class="delivery-add__check">
                <VCheckbox>
                    <span class="delivery-add__check-text">Частный
                        дом</span>
                </VCheckbox>
            </div>
            <div class="delivery-add__input-group">
                <VeeField name="address.house_number"
                    v-slot="{ errorMessage }">
                    <BaseInput v-model="address.house_number"
                        :error-message="errorMessage"
                        placeholder="Дом *" />
                </VeeField>
                <VeeField name="address.apartment_number"
                    v-slot="{ errorMessage }">
                    <BaseInput v-model="address.apartment_number"
                        :error-message="errorMessage"
                        placeholder="Квартира" />
                </VeeField>

            </div>
            <div class="delivery-add__button">
                <VBtn>
                    Сохранить
                </VBtn>
            </div>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { object, string } from 'yup';
import { useAddress } from '~/store/address';

interface Address {
    city: {},
    street: string,
    house_number: string,
    apartment_number: string
}
const validationSchema = object({
    address: object({
        street: string().required('Обязательное поле'),
        house_number: string().required('Обязательное поле')
    })
})
const { cities } = storeToRefs(useAddress())
const emit = defineEmits(['onBack'])
const { handleSubmit } = useForm({
    validationSchema: validationSchema,
    initialValues: {
        address: {
            city: {},
            street: "",
            apartment_number: "",
            house_number: ""

        }
    }
})
const { value: address } = useField<Address>('address')

const submitHandler = handleSubmit(async () => {
    const fetchBody = {
        city: address.value.city.id,
        street: address.value.street
    }
    const { status } = await useAuthFetch('/api/address-add', {
        method: 'post',
        body: fetchBody
    })
    if (status.value === 'success') {
        emit('onBack')
    }

})
</script>
<style lang="scss" scoped>
.delivery-add {

    // .delivery-add__header

    &__header {
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;

        @include atSm {
            grid-template-columns: 1fr 3fr;
        }
    }

    // .delivery-add__back

    &__back {
        color: $additional;
        display: flex;
        align-items: center;
        gap: 6px;

        svg {
            margin-bottom: -4px;
            transform: rotate(180deg);
        }
    }

    // .delivery-add__title

    &__title {
        text-align: left;
        color: $text;
        font-size: 24px;
        font-weight: 700;

        @include atMd {
            font-size: 22px;
        }
    }

    // .delivery-add__form

    &__form {
        display: flex;
        flex-direction: column;
        margin-top: 24px;

        &-city {
            margin-bottom: 14px;
        }



    }

    &__button {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 24px;

        button {

            width: 220px;

            @include atSm {
                width: 100%;
            }
        }
    }

    // .delivery-add__check

    &__check {
        margin-top: 10px;

        &-text {
            color: $additional;
        }
    }

    // .delivery-add__input-group

    &__input-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 14px;
        margin-bottom: 10px;

    }
}
</style>