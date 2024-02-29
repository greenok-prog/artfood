<template>
	<div class="change-info">
		<h3 class="change-info__title">
			Мои адреса
		</h3>
		<form class="change-info__form" @submit="submitHandler">
			<div class="change-info__form-inputs">
				<VeeField name="city" v-slot="{ errorMessage }"
					class="change-info__input-block">
					<label for="">Город</label>
					<BaseDropdown v-model="city" :options="cities"
						:error-message="errorMessage" />
				</VeeField>
				<VeeField name="street" v-slot="{ errorMessage }"
					class="change-info__input-block">
					<label for="">Улица</label>
					<BaseInput v-model="street"
						:error-message="errorMessage" />
				</VeeField>
				<div class="change-info__input-group">
					<div class="change-info__input-block">
						<VeeField name="house_number"
							v-slot="{ errorMessage }">
							<label for="">Номер дома</label>
							<BaseInput v-model="house_number"
								:error-message="errorMessage" />
						</VeeField>
					</div>
					<div class="change-info__input-block">
						<VeeField name="apartment_number"
							v-slot="{ errorMessage }">
							<label for="">Квартира</label>
							<BaseInput v-model="apartment_number"
								:error-message="errorMessage" />
						</VeeField>
					</div>

				</div>
			</div>
			<VBtn>Добавить</VBtn>
		</form>
	</div>
</template>
<script lang="ts" setup>
import { array, number, object, string } from 'yup'
import { useAddress } from '~/store/address';
const { cities } = storeToRefs(useAddress())
const schema = object({
	city: object({

	}).required(),
	street: string().required('Обязательное поле'),
	house_number: string().required('Обязательное поле'),
	apartment_number: string().required('Обязательное поле'),
})

const { handleSubmit, setErrors, errors } = useForm({
	validationSchema: schema,
	initialValues: {
		city: {},
		street: '',
		house_number: '',
		apartment_number: ''
	}
})
const { value: city } = useField('city')
const { value: house_number } = useField<string>('house_number')
const { value: street } = useField<string>('street')
const { value: apartment_number } = useField<string>('apartment_number')
const submitHandler = handleSubmit(async () => {

	const fetchBody = {
		city: city.value.id,
		house_number: house_number.value,
		street: street.value,
		apartment_number: apartment_number.value
	}

	const data = await $fetch(`/api/address-add`, {
		method: 'POST',
		body: fetchBody
	})

	if (data) {
		useRouter().push('/user')
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

	&__input-group {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 30px;


	}


}
</style>