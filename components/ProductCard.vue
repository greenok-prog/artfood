<template>
    <div class="product-card">
        <div class="product-card__image">
            <NuxtLink v-if="data?.images[0]" :to="`/catalog/${data.id}`">
                <img :src="data.images[0].image" alt="">
            </NuxtLink>
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
            <ExistanceStatus :existance="data.existence" />
            <NuxtLink :to="`/catalog/${data.id}`"
                class="product-card__name">
                {{ data.name }}
            </NuxtLink>
            <div class="product-card__actions">
                <div class="product-card__price">
                    <div class="product-card__price-block"
                        v-if="data.opt_price">
                        <p>Опт.</p>
                        <div>
                            <span class="product-card__price_new">{{
                                data.opt_price }}
                                ₸</span>
                            <span class="product-card__price_old">{{
                                data.discount_price ?
                                data.discount_price :
                                data.price

                            }}
                                ₸</span>
                        </div>
                    </div>
                    <div class="product-card__price-block">
                        <p>Роз.</p>
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
                <button v-if="!productInCart(data.id)"
                    class="product-card__cart"
                    @click="addTocart(props.data)">
                    <CartSvg />
                </button>
                <button v-if="productInCart(data.id)"
                    class="product-card__cart product-card__cart_active"
                    @click="removeFromcart(props.data)">
                    <CartSvg />
                </button>
                <div class="product-card__cart_mini">
                    <button @click="addTocart(props.data)">В
                        корзину</button>
                    <FavoriteSvg v-if="!productIsFavorite(data.id)"
                        @click="addToFavorite(data)"
                        class="product-card__cart-svg" />
                    <FavoriteSvg v-if="productIsFavorite(data.id)"
                        @click="removeFromFavorite(data)"
                        class="product-card__cart-svg product-card__fav_active" />

                </div>
            </div>

        </div>
    </div>
</template>
<script lang="ts" setup>
import { useCartStore } from '~/store/cart';
import { useFavoriteStore } from '~/store/favorite';
import type { ListProduct } from '~/types/api-schema';

const props = defineProps<{
    data: ListProduct
}>()

const { addToFavorite, removeFromFavorite } = useFavoriteStore()
const { addTocart, removeFromcart } = useCartStore()
const { productInCart } = storeToRefs(useCartStore())
const { productIsFavorite } = storeToRefs(useFavoriteStore())





</script>
<style lang="scss" scoped>
.product-card {
    width: 100%;
    border: 1px solid #C4C6C2;
    border-radius: 14px;
    padding: 0 16px;
    padding-bottom: 14px;
    cursor: pointer;
    position: relative;
    background: white;

    @include atMd {
        padding: 0 10px;
        padding-bottom: 10px;
    }



    &:hover {
        box-shadow: 0px 16px 40px 0px #D3D3D3;
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
        height: 40px;

        @include atMd {
            font-size: 14px;
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
            display: none;
            margin-top: 10px;
            justify-content: space-between;
            align-items: center;
            gap: 10px;

            @include atMd {
                display: flex;
            }

            button {
                color: white;
                font-size: 14px;
                width: 110px;
                height: 36px;
                border-radius: 50px;
                background: $main;
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
        height: 250px;
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

    &__discount {
        position: absolute;
        left: 17px;
        top: 17px;
        padding: 8px 12px 6px 12px;
        background-color: $sale;
        color: white;
        border-radius: 50px;
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

        &-block {
            display: flex;

            p {
                color: rgba(68, 68, 68, 0.60);
                font-size: 15px;
                font-weight: 400;
                margin-right: 4px;
            }

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