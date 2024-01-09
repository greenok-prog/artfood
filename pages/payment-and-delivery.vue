<template>
	<div class="container">
		<div class="delivery-and-pickup-policy">
			<PathHistory
				:path="['Главная', 'Условия оплаты и доставки']" />
			<h2 class="delivery-and-pickup-policy__title">Условия оплаты и
				доставки</h2>
			<div v-if="data.results"
				class="delivery-and-pickup-policy__text"
				v-html="data.results[0].text"></div>


		</div>
	</div>
</template>

<script lang="ts" setup>
import ENDPOINTS from '~/constants/endpoints';

const { data } = await useFetch('/api/payment-and-delivery')



</script>

<style lang="scss" scoped>
.container {}

.delivery-and-pickup-policy {
	margin-top: 50px;
	padding-bottom: 120px;

	@include atMd {
		padding-bottom: 70px;
	}

	// .delivery-and-pickup-policy__title

	&__title {
		margin-top: 38px;
		font-weight: 700;
		font-size: 30px;
		color: $neutral;

		@include atMd {
			font-size: 24px;
		}
	}

	// .delivery-and-pickup-policy__text

	&__text {
		margin-top: 24px;

		@include atMd {
			font-size: 14px;
		}
	}
}
</style>