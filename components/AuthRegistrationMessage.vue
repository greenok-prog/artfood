<template>
	<div class="recovery">
		<div class="recovery__inner">
			<p>На ваш электронный адрес было
				отправлено
				письмо подтвеждения </p>
			<VBtn @click="submitHandler">На главную</VBtn>
		</div>
	</div>
</template>

<script lang="ts" setup>
const route = useRoute()
const submitHandler = () => {
	return navigateTo('/')
}

</script>

<style lang="scss" scoped>
.recovery {
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	&__inner {
		max-width: 344px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	p {
		text-align: center;
		color: black;
		width: 100%;
	}

	button {
		max-width: 220px;
		margin-top: 24px;

		@include atMd {
			max-width: 100%;
		}
	}


}
</style>