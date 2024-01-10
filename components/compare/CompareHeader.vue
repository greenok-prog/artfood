<template>
	<div class="compare-header">
		<h3 class="compare-header__title">Сравнение ({{ count }})</h3>
		<div class="compare-header__options">
			<span class="compare-header__clean" v-if="count > 0"
				@click="emit('clear')">Удалить список</span>
		</div>
	</div>
</template>
<script lang="ts" setup>
const props = defineProps<{
	count: number
}>()
const emit = defineEmits(['clear'])

</script>
<style lang="scss" scoped>
.compare-header {
	margin-top: 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	// .compare-header__title

	&__title {
		font-size: 24px;
		color: #20221E;
		font-weight: 700;
	}

	// .compare-header__options

	&__options {
		display: flex;
		align-items: center;
	}

	// .compare-header__clean

	&__clean {
		color: $additional;
		cursor: pointer;
	}
}
</style>