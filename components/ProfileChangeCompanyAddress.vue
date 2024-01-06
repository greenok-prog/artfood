<template>
    <div class="change-company">
        <div class="change-info">
            <h3 class="change-info__title">
                Адрес компании
            </h3>
            <form class="change-info__form"
                @submit.prevent="submitHandler">
                <div class="change-info__form-inputs">
                    <VeeField name="address.city"
                        v-slot="{ errorMessage }"
                        class="change-info__input-block">
                        <label for="">Город</label>
                        <BaseDropdown :options="cities"
                            placeholder="Выберите город из списка"
                            :error-message="errorMessage"
                            v-model="companyAddress.city" />
                    </VeeField>
                    <VeeField name="address.street"
                        v-slot="{ errorMessage }"
                        class="change-info__input-block">
                        <label for="">Улица</label>
                        <BaseInput placeholder="Название улицы"
                            :error-message="errorMessage"
                            v-model="companyAddress.street" />
                    </VeeField>
                    <VeeField name="address.houst_number"
                        v-slot="{ errorMessage }"
                        class="change-info__input-block">
                        <label for="">Дом</label>
                        <BaseInput placeholder="Номер дома"
                            :error-message="errorMessage"
                            v-model="companyAddress.house_number" />
                    </VeeField>
                    <VeeField name="address.office_number"
                        v-slot="{ errorMessage }"
                        class="change-info__input-block">
                        <label for="">Офис</label>
                        <BaseInput placeholder="Номер офиса"
                            :error-message="errorMessage"
                            v-model="companyAddress.office_number" />
                    </VeeField>
                </div>
                <VBtn>Сохранить</VBtn>
            </form>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { object, string } from 'yup';
import ENDPOINTS from '~/constants/endpoints';
import type { UserCompany } from '~/dto/user';
import { useAddress } from '~/store/address';


interface AddressBody {
    city: { name: string, id: number },
    street: string,
    district: number,
    house_number: string,
    office_number: number
}
const { cities } = storeToRefs(useAddress())
const props = defineProps<{
    user: UserCompany
}>()
const schema = object({
    address: object({
        street: string().required('Обязательное поле'),
        house_number: string().required('Обязательное поле'),
        city: object({
            name: string(),
        }).required('Обязательное поле'),
        office_number: string().required('Обязательное поле'),
        district: string().required('Обязательное поле'),

    })
})

const { handleSubmit, setErrors } = useForm({
    validationSchema: schema,
    initialValues: {
        address: {
            street: props.user.company_address.street,
            district: props.user.company_address.district.name,
            house_number: props.user.company_address.house_number,
            city: props.user.company_address.city,
            office_number: props.user.company_address.office_number
        }
    }
})
const router = useRouter()
const { value: companyAddress } = useField<AddressBody>('address')
const submitHandler = handleSubmit(async () => {
    const { status, error, execute } = await useFetch(`/api/company-address/${props.user.company_address.id}`, {
        body: {
            street: companyAddress.value.street,
            city: companyAddress.value.city.id,
            house_number: companyAddress.value.house_number,
            office_number: companyAddress.value.office_number,

        },
        method: 'put'
    })

    if (status.value === 'success') {
        router.push('/user')
    } else {
        setErrors(formatErrors(error, 'address'))
        execute()

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