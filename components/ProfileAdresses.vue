<template>
    <div class="change-info">
        <h3 class="change-info__title">
            Мои адреса
        </h3>
        <form class="change-info__form" v-for="item in addresses"
            @submit.prevent="submitHandler(item)">
            <div class="change-info__form-inputs">
                <VeeField name="item.city" v-slot="{ errorMessage }"
                    class="change-info__input-block">
                    <label for="">Город</label>
                    <BaseDropdown v-model="item.city" :options="cities"
                        :error-message="errorMessage" />
                </VeeField>
                <VeeField name="item.street" v-slot="{ errorMessage }"
                    class="change-info__input-block">
                    <label for="">Улица</label>
                    <BaseInput v-model="item.street"
                        :error-message="errorMessage" />
                </VeeField>
                <div class="change-info__input-group">
                    <div class="change-info__input-block">
                        <VeeField name="item.house_number"
                            v-slot="{ errorMessage }">
                            <label for="">Номер дома</label>
                            <BaseInput v-model="item.house_number"
                                :error-message="errorMessage" />
                        </VeeField>
                    </div>
                    <div class="change-info__input-block">
                        <VeeField name="item.apartment_number"
                            v-slot="{ errorMessage }">
                            <label for="">Квартира</label>
                            <BaseInput v-model="item.apartment_number"
                                :error-message="errorMessage" />
                        </VeeField>
                    </div>

                </div>
            </div>
            <VBtn>Сохранить</VBtn>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { array, number, object, string } from 'yup'
import { useAddress } from '~/store/address';
const { cities } = storeToRefs(useAddress())
const schema = object({
    addresses: array().of(object().shape({
        address: object({
            city: object({

            }).required("city обязательно"),
            street: string(),
            house_number: string(),
            apartment_number: string()
        })
    }))
})
const { data } = await useAuthFetch('/api/addresses', {
    method: 'get'
})

const { handleSubmit, setErrors, errors } = useForm({

    initialValues: {
        addresses: data.value.results
    }
})
const { value: addresses } = useField('addresses')
const submitHandler = async (item) => {
    const fetchBody = { ...item, city: item.city.id, }
    console.log(item);


    const { status } = await useFetch(`/api/change-address/${item.id}`, {
        method: 'PUT',
        body: fetchBody
    })

    if (status.value === 'success') {
        useRouter().push('/user')
    }

}
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

    &__input-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;


    }


}
</style>