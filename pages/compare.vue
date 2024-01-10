<template>
	<div class="container">
		<div class="compare">
			<PathHistory :path="['Личный кабинет', 'Сравнение']" />
			<CompareHeader :count="compareCount" @clear="clearCompare" />
			<article v-if="compareCount > 0" class="compare__main">
				<CompareSidebar :products="compare"
					class="compare__main-sidebar" />
				<CompareCarousel :items="compare"
					class="compare__main-list" />
			</article>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { useCompareStore } from '~/store/compare';
const { clearCompare, setcompare } = useCompareStore()
const { compare, compareCount } = storeToRefs(useCompareStore())

setcompare()
</script>
<style lang="scss" scoped>
.container {
	@include atSm {}
}

.compare {
	margin-top: 20px;
	margin-bottom: 120px;

	@include atMd {
		margin-bottom: 80px;
	}

	&__main {
		display: flex;
		align-items: flex-start;
		margin-top: 30px;

		gap: 76px;

		&__list {
			width: 100%;
		}

		&-sidebar {
			width: 230px;

			@include atLg {
				display: none;
			}
		}

		@include atXl {
			gap: 56px;
		}


	}
}
</style>