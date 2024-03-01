<template>
    <div class="change-company">
        <div class="change-info">
            <h3 class="change-info__title">
                Данные компании
            </h3>
            <form class="change-info__form"
                @submit.prevent="submitHandler">
                <div class="change-info__form-inputs">
                    <VeeField name="company.company_name"
                        v-slot="{ errorMessage }"
                        class="change-info__input-block">
                        <label for="">Название компании</label>
                        <BaseInput :error-message="errorMessage"
                            v-model="company.company_name"
                            placeholder="Введите название компании" />
                    </VeeField>
                    <VeeField name="company.phone_number"
                        v-slot="{ errorMessage }"
                        class="change-info__input-block">
                        <label for="">Телефон компании</label>
                        <PhoneInput :error-message="errorMessage"
                            v-model="company.phone_number"
                            placeholder="Введите номер телефона компании" />
                    </VeeField>
                    <VeeField name="company.bin_iin"
                        v-slot="{ errorMessage }"
                        class="change-info__input-block">
                        <label for="">БИН/ИИН</label>
                        <BaseInput :error-message="errorMessage"
                            v-model="company.bin_iin"
                            placeholder="Введите БИН/ИИН компании" />
                    </VeeField>
                    <VeeField name="company.iik" v-slot="{ errorMessage }"
                        class="change-info__input-block">
                        <label for="">ИИК</label>
                        <BaseInput :error-message="errorMessage"
                            v-model="company.iik"
                            placeholder="Введите ИИК компании" />
                    </VeeField>
                    <VeeField name="company.bank"
                        v-slot="{ errorMessage }"
                        class="change-info__input-block">
                        <label for="">Банк</label>
                        <BaseInput :error-message="errorMessage"
                            v-model="company.bank"
                            placeholder="Банк обслуживания" />
                    </VeeField>
                    <VeeField name="company.bik" v-slot="{ errorMessage }"
                        class="change-info__input-block">
                        <label for="">БИК</label>
                        <BaseInput :error-message="errorMessage"
                            v-model="company.bik"
                            placeholder="Введите БИК компании" />
                    </VeeField>
                </div>
                <VBtn>Сохранить</VBtn>
            </form>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { object, string } from 'yup';
import type { UserCompany } from '~/dto/user';

const props = defineProps<{
    data: UserCompany
}>()
const schema = object({
    company: object({
        company_name: string().required('Обязательное поле'),
        phone_number: string().required('Обязательное поле'),
        bin_iin: string()
            .required('Обязательное поле')
            .matches(/^\d{12}$/, 'Поле должно содержать 12 цифр'),
        iik: string().required('Обязательное поле'),
        bank: string()
            .required('Обязательное поле')
            .matches(/^KZ/, 'IBAN должен начинаться с "KZ"'),
        bik: string()
            .required('Обязательное поле')
            .matches(/^\d{8,9}$/, 'Поле должно содержать 8 или 9 символов'),
    })
});
const { handleSubmit, setErrors } = useForm({
    validationSchema: schema,
    initialValues: {
        company: {
            company_name: props.data.company_name,
            phone_number: props.data.phone_number,
            bin_iin: props.data.bin_iin,
            iik: props.data.iik,
            bank: props.data.bank,
            bik: props.data.bik

        } as UserCompany
    }
})
const { value: company } = useField<UserCompany>('company')

const submitHandler = handleSubmit(async () => {

    const { error, status, execute } = await useAuthFetch('/api/profile-change', {
        body: company.value,
        method: 'PATCH'
    })
    execute()

    if (status.value === 'success') {
        return
    } else {
        setErrors(formatErrors(error, 'company'))
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