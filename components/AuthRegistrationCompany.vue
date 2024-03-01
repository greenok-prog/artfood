<template>
    <form class="form" @submit.prevent="emit('goToNext')">
        <p class="form__subtitle">3. данные компании</p>
        <div class="form__inputs">
            <VeeField name="company.company_name"
                v-slot="{ errorMessage }">
                <BaseInput v-model="company.company_name"
                    :error-message="errorMessage"
                    placeholder="Название компании *" />
            </VeeField>
            <VeeField name="company.city" v-slot="{ errorMessage }">
                <label for="">Юридический адрес</label>
                <BaseDropdown placeholder="Город *" :options="cities"
                    v-model="company.city"
                    :error-message="errorMessage" />

            </VeeField>
            <VeeField name="company.street" v-slot="{ errorMessage }">
                <BaseInput placeholder="Улица *" v-model="company.street"
                    :error-message="errorMessage" />
            </VeeField>
            <div class="form__inputs-group">
                <VeeField name="company.house_number"
                    v-slot="{ errorMessage }">

                    <BaseInput placeholder="Номер дома"
                        v-model="company.house_number"
                        :error-message="errorMessage" />
                </VeeField>
                <VeeField name="company.office_number"
                    v-slot="{ errorMessage }">

                    <BaseInput placeholder="Номер офиса *"
                        v-model="company.office_number"
                        :error-message="errorMessage" />
                </VeeField>
            </div>


            <VeeField name="company.bin_iin" v-slot="{ errorMessage }">
                <BaseInput v-model="company.bin_iin"
                    :error-message="errorMessage"
                    placeholder="БИН/ИИН *" />
            </VeeField>
            <VeeField name="company.bank" v-slot="{ errorMessage }">
                <BaseInput v-model="company.bank"
                    :error-message="errorMessage" placeholder="IBAN *" />
            </VeeField>
            <!-- <VeeField name="company.bank" v-slot="{ errorMessage }">
                <BaseInput v-model="company.bank"
                    :error-message="errorMessage" placeholder="Банк *" />
                <p>Банк, по которому будет производиться оплата компании
                </p>
            </VeeField> -->
            <VeeField name="company.bik" v-slot="{ errorMessage }">

                <BaseInput v-model="company.bik"
                    :error-message="errorMessage" placeholder="БИК *" />
            </VeeField>
        </div>
        <div class="form__actions">
            <VBtn variant="outlined" @click="emit('goBack')"
                class="form__actions-back">
                Назад</VBtn>
            <VBtn @click="submitHandler" class="form__actions-next">
                Далее</VBtn>
        </div>
    </form>
</template>
<script lang="ts" setup>
import { object, string } from 'yup';
import { useAddress } from '~/store/address';
import { useAuthStore } from '~/store/auth';
import { formatFetchErrors } from '~/utils/validation';
const { cities } = storeToRefs(useAddress())
const { setRegistration, setRegistrationErrors } = useAuthStore()

interface CompanyInfo {
    bik: string,
    bank: string,
    iik: string,
    bin_iin: string,
    company_name: string,
    house_number: string,
    office_number: string,
    street: string,
    city: {
        name: string,
        id: number
    }

}
const schema = object({
    company: object({
        bank: string()
            .required('Обязательное поле')
            .matches(/^KZ/, 'IBAN должен начинаться с "KZ"')
            .matches(/^.{20}$/, 'Поле bank должно содержать 20 символов'),
        bin_iin: string()
            .required('Обязательное поле')
            .matches(/^\d{12}$/, 'Поле должно содержать 12 цифр'),
        bik: string()
            .required('Обязательное поле')
            .matches(/^.{8,9}$/, 'Поле должно содержать от 8 до 9 символов'),
        company_name: string().required('Обязательное поле'),
        office_number: string().required('Обязательное поле'),
        street: string().required('Обязательное поле'),
        city: object({
            name: string().required('Обязательное поле')
        }),
    })
});

const emit = defineEmits(['goToNext', 'goBack'])
const { registrationErrors } = storeToRefs(useAuthStore())
const { handleSubmit, setErrors, errors } = useForm({
    validationSchema: schema,
    initialValues: {
        company: {
            company_name: '',
            bank: "",
            iik: "",
            bik: "",
            bin_iin: "",
            house_number: "",
            street: "",
            city: {}

        } as CompanyInfo
    }
})
const { value: company } = useField<CompanyInfo>('company')
const submitHandler = handleSubmit(() => {
    setRegistration({
        bik: company.value.bik,
        bank: company.value.bank,
        iik: company.value.bank,
        bin_iin: company.value.bin_iin,
        company_name: company.value.company_name,
        company_address: {
            street: company.value.street,
            house_number: company.value.house_number,
            office_number: company.value.office_number,
            city: company.value.city?.id,

        }

    })
    setRegistrationErrors(null)
    emit('goToNext')

})

const navigateToRegistration = () => {
    return navigateTo('/auth/registration')
}
watchEffect(() => {
    if (registrationErrors.value) {
        setErrors(formatFetchErrors(registrationErrors.value, 'company'));
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

        &-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            align-items: flex-start;
        }

        p {
            color: $text-60;
            font-size: 14px;
        }

    }

    &__actions {
        display: flex;
        justify-content: space-between;
        gap: 10px;

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

    // .form__bottom

    &__bottom {
        margin-top: 24px;
        color: rgba(44, 44, 44, 0.80);
        ;
    }
}
</style>