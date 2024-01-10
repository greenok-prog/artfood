<template>
	<div class="compare-sidebar">
		<div class="compare-sidebar__list">
			<span v-for="product in productsNames" :key="product">{{
				product }}</span>
		</div>
		<div class="compare-sidebar__themes">
			<CompareInfoItem>
				Страна производитель
			</CompareInfoItem>
			<CompareInfoItem>
				Бренд
			</CompareInfoItem>
			<CompareInfoItem>
				Объем
			</CompareInfoItem>
		</div>
	</div>
</template>
<script lang="ts" setup>
import type { ListProduct } from '~/types/api-schema';

const props = defineProps<{
	products: ListProduct[]
}>()
const productsNames = computed(() => {
	return props.products.map(el => el.name)
})

</script>
<style lang="scss" scoped>
.compare-sidebar {
	min-width: 230px;

	&__list {
		height: 352px;
		border-radius: 6px;
		width: 100%;
		background: #FFF;
		padding: 8px;
		/* shadow-10 */
		box-shadow: 0px 2px 10px 0px #E4E4E4;
		display: flex;
		flex-direction: column;
		gap: 6px;
		overflow: auto;





	}

	&__themes {
		width: 100%;
		margin-top: 34px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
}
</style>