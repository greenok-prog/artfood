<template>
	<div class="product-card">
		<div class="product-card__image">
			<img v-if="data?.images[0]" :src="data.images[0].image"
				alt="">
			<ProductBadge type="new" class="product-card__discount">

			</ProductBadge>
			<FavoriteSvg v-if="!productIsFavorite(data.id)"
				@click.prevent="addToFavorite(data)"
				class="product-card__fav" />

			<FavoriteSvg v-if="productIsFavorite(data.id)"
				@click.prevent="removeFromFavorite(data)"
				class="product-card__fav product-card__fav_active" />
		</div>
		<div class="product-card__info">

			<NuxtLink :to="`/catalog/${data.id}`"
				class="product-card__name">
				{{ data.name }}
			</NuxtLink>
			<div class="product-card__actions">
				<div class="product-card__price">
					<div class="product-card__price-block">
						<div>
							<span class="product-card__price_new">{{
								data.discount_price ? data.discount_price
								: data.price }}
								₸</span>
							<span class="product-card__price_old"
								v-if="data.discount_price && data.price > 0">{{
									data.price
								}}
								₸</span>
						</div>
					</div>
				</div>


			</div>
			<div class="product-card__buttons">
				<div class="product-card__cart_mini">
					<button v-if="!productInCart(props.data.id)"
						class="product-card__cart_mini-add"
						@click="addTocart(props.data)">В
						корзину</button>
					<button v-else class="product-card__cart_mini-remove"
						@click="removeFromcart(props.data)">Удалить из
						корзины</button>
				</div>
				<button class="product-card__remove"
					@click="removeFromcompare(data)">
					<RemoveCompareSvg />
				</button>
			</div>

		</div>
	</div>
</template>
<script lang="ts" setup>
import { useCartStore } from '~/store/cart';
import { useCompareStore } from '~/store/compare';
import { useFavoriteStore } from '~/store/favorite';
import type { ListProduct } from '~/types/api-schema';

const props = defineProps<{
	data: ListProduct
}>()

const { addToFavorite, removeFromFavorite } = useFavoriteStore()
const { addTocart, removeFromcart } = useCartStore()
const { productInCart } = storeToRefs(useCartStore())
const { productIsFavorite } = storeToRefs(useFavoriteStore())
const { removeFromcompare } = useCompareStore()





</script>
<style lang="scss" scoped>
.product-card {
	width: 100%;
	border: 1px solid #C4C6C2;
	border-radius: 14px;
	padding: 0 13px;
	padding-bottom: 14px;
	position: relative;
	background: white;
	max-height: 352px;
	height: 352px;
	// max-width: 252px;

	@include atMd {
		padding: 0 10px;
		padding-bottom: 10px;
		height: auto;
	}



	&__existance {
		color: $green;
		margin-top: 15px;
		font-size: 14px;

		@include atMd {
			font-size: 12px;
		}
	}

	&__name {
		margin-top: 4px;
		color: $neutral;
		font-weight: 700;
		display: block;
		height: 60px;
		overflow: hidden;


		@include atMd {
			height: 32px;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			/* number of lines to show */
			line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			font-size: 13px;
		}
	}

	&__cart {
		width: 50px;
		height: 50px;
		border: none;
		cursor: pointer;
		border-radius: 50px;
		background: $main;
		display: flex;
		align-items: center;
		justify-content: center;

		&_active {
			background: white;
			border: 2px solid $main;

			:deep(svg) {
				path {
					stroke: $main;
					fill: $main;
				}
			}
		}

		@include atMd {
			display: none;
		}

		&_mini {
			width: 100%;

			justify-content: space-between;
			align-items: center;
			gap: 10px;

			@include atMd {
				display: flex;
			}



			button {

				font-size: 14px;
				cursor: pointer;
				width: 100%;
				border-radius: 6px;

				height: 40px;
			}

			&-add {
				background: $main;
				color: white;
			}

			&-remove {
				background: white;
				border: 2px solid $main;
				color: $text;
			}

			svg {
				width: 25px;
				height: 24px;
			}
		}

		&-svg {
			stroke: black;
			stroke-width: 1.5;
			width: 22px;
			height: 22px;
			stroke-opacity: 0.6;
		}
	}

	&__image {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 180px;
		width: 100%;

		@include atMd {
			height: 200px;
		}

		@include atSm {
			height: 150px;
		}

		img {
			max-height: 120px;
			object-fit: cover;
		}
	}

	&__fav {
		position: absolute;
		right: 19px;
		top: 21px;
		stroke: black;
		stroke-width: 1.5;
		width: 26px;
		height: 26px;
		stroke-opacity: 0.6;

		&_active {
			fill: $main;
		}

		@include atMd {
			display: none;
		}
	}

	&__buttons {
		display: flex;
		gap: 10px;
		margin-top: 10px;

		@include atMd {
			gap: 6px;
		}
	}

	&__remove {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		width: 40px;
		border-radius: 6px;
		border: 1.5px solid #78899A;
		min-width: 40px;
		cursor: pointer;

		@include atMd {
			min-width: 32px;
		}
	}

	&__discount {
		position: absolute;

		left: 17px;
		top: 17px;
		padding: 8px 12px 6px 12px;
		background-color: $sale;
		color: white;
		border-radius: 50px;

		@include atMd {
			display: none;
		}
	}

	&__actions {
		display: flex;
		justify-content: space-between;
		gap: 10px;
		margin-top: 14px;

		@include atMd {
			flex-direction: column;
		}
	}

	&__price {
		display: flex;
		flex-direction: column;

		&_new {
			color: #20221E;
			font-size: 18px;
			font-weight: 700;
			margin-right: 4px;
		}

		&-block {
			display: flex;


			div {
				display: flex;
				gap: 6px;
				align-items: flex-end;
			}
		}

		&_old {
			position: relative;
			color: $additional;
			font-size: 14px;
			text-decoration: line-through;

		}
	}

}
</style>