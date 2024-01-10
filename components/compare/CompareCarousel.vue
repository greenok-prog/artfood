<template>
	<div class="compare-list">

		<Swiper :space-between="10" :slides-per-view="2"
			:modules="[SwiperNavigation]"
			:navigation="{ nextEl: '.compare-list__next', prevEl: '.compare-list__prev' }"
			:breakpoints="compareBreakpoints"
			class="compare-list__slider">
			<SwiperSlide v-if="items[0]">
				<div class="compare-list__block">
					<CompareCard class="compare-list__item"
						:data="items[0]" />
					<div class="compare-info">
						<div class="compare-info__block">
							<span class="compare-info__block-title">Страна
								производитель</span>
							<CompareInfoItem>
								{{ items[0].product_data.made_in.name }}
							</CompareInfoItem>
						</div>
						<div class="compare-info__block">
							<span
								class="compare-info__block-title">Бренд</span>
							<CompareInfoItem>
								{{ items[0].product_data.manufacturer.name
								}}
							</CompareInfoItem>
						</div>
						<div class="compare-info__block">
							<span
								class="compare-info__block-title">Объем</span>
							<CompareInfoItem>
								{{ items[0].product_data.package.name }}
							</CompareInfoItem>
						</div>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide v-for="item in items.slice(1)" :key="item.id">
				<div class="compare-list__block">
					<CompareCard class="compare-list__item"
						:data="item" />
					<div class="compare-info compare-info__margin">

						<CompareInfoItem>
							{{ item.product_data.made_in.name }}
						</CompareInfoItem>
						<CompareInfoItem>
							{{ item.product_data.manufacturer.name }}
						</CompareInfoItem>
						<CompareInfoItem>
							{{ item.product_data.package.name }}
						</CompareInfoItem>
					</div>
				</div>
			</SwiperSlide>

		</Swiper>
		<button v-if="items.length > 3" class="compare-list__prev">
			<SliderArrowSvg />
		</button>
		<button v-if="items.length > 3" class="compare-list__next">
			<SliderArrowSvg />
		</button>

	</div>
</template>

<script lang="ts" setup>
import type { ListProduct } from '~/types/api-schema';
import { compareBreakpoints } from '~/constants/responsiveBreakpoints'

const props = defineProps<{
	items: ListProduct[]
}>()



</script>
<style lang="scss" scoped>
.compare-list {
	position: relative;
	width: 100%;


	&__block {
		width: 100%;
	}

	&__slider {
		max-width: 976px;


		@include atXXl {
			max-width: 706px;
		}

		@include atXl {
			max-width: 546px;
		}

		@include atLg {
			max-width: 100%
		}


		@include atMd {}
	}

	&__next {
		border-radius: 100px;
		background: #E6E6E6;
		width: 44px;
		height: 44px;
		cursor: pointer;
		position: absolute;
		right: 0px;
		top: 25%;
		z-index: 999;
		transform: rotate(180deg);
		display: flex;
		align-items: center;
		justify-content: center;

		@include atLg {
			display: none;
		}
	}

	&__prev {
		border-radius: 100px;
		background: #E6E6E6;
		width: 44px;
		height: 44px;
		cursor: pointer;
		position: absolute;
		left: 0px;
		top: 25%;
		display: flex;
		align-items: center;
		justify-content: center;

		@include atLg {
			display: none;
		}
	}
}

.compare-info {
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 34px;

	&__margin {
		@include atLg {
			margin-top: 50px;
			gap: 28px;
		}

	}

	&__block {
		gap: 5px;

		&-title {
			display: none;
			font-size: 13px;

			@include atLg {
				display: block;
			}
		}
	}



	&__text {}
}
</style>