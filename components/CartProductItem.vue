<template>
    <div class="cart-product">
        <div class="cart-product__info">
            <div class="cart-product__image">
                <img v-if="productInfo.images[0]"
                    :src="productInfo.images[0].image" alt="">
                <!-- <VCheckbox class="cart-product__check" /> -->
            </div>
            <div class="cart-product__value">
                <div class="cart-product__value-top">
                    <div class="cart-product__rating">
                        <StartSvg /> {{ productInfo.rating }}
                    </div>
                    <div class="cart-product__code">
                        Артикул: {{ productInfo.article }}
                    </div>
                    <ExistanceStatus :existance="productInfo.existence"
                        class="cart-product__existence" />


                </div>
                <h4 class="cart-product__name">
                    {{ productInfo.name }}
                </h4>
                <div class="cart-product__price">
                    <div class="cart-product__price-block"
                        v-if="productInfo.opt_price">
                        Оптом: {{ productInfo.opt_price }}₸ <span
                            class="cart-product__price_old">
                            {{
                                productInfo.discount_price ?
                                productInfo.discount_price :
                                productInfo.price
                            }}

                            ₸</span>
                    </div>
                    <div class="cart-product__price-block">
                        Розница: <span class="cart-product__price_lg">
                            {{
                                productInfo.discount_price ?
                                productInfo.discount_price :
                                productInfo.price

                            }}
                            ₸
                        </span> <span class="cart-product__price_old"
                            v-if="productInfo.discount_price">{{
                                productInfo.price }}₸</span>
                    </div>
                </div>
                <span class="cart-product__favorite"
                    @click="isInFavorite ? removeFromFavorite(productInfo) : addToFavorite(productInfo)">
                    {{ isInFavorite ?
                        'Удалить из избранного' :
                        'Перенести в избранное'
                    }}
                </span>
            </div>
        </div>
        <div class="cart-product__actions">
            <div class="cart-product__count">
                <span>

                    {{

                        product.quantity_product >=
                        Number(productInfo.opt_quantity)
                        ? 'Опт'
                        : 'Розница'
                    }}
                </span>
                <ProductCounter v-model="props.product.quantity_product"
                    :max="productInfo.quantity_stock" @increase="increase"
                    @decrease="decrease" />
                <p class="cart-product__count-price">
                    {{ product.sum_products }}₸
                </p>
            </div>
            <RemoveSvg @click="removeFromcart(productInfo)" />
        </div>
    </div>
    <CartProductItemMini :index="props.index" :product="product"
        class="cart-product-mini" />
</template>
<script lang="ts" setup>
import { useCartStore, type IcartProduct } from '~/store/cart';
import { useFavoriteStore } from '~/store/favorite';

const { removeFromcart, increaseQuantity, decreaseQuantity } = useCartStore()
const { addToFavorite, removeFromFavorite } = useFavoriteStore()

const props = defineProps<{
    product: IcartProduct,
    index: number,
}>()

const isInFavorite = computed(() => {
    return useFavoriteStore().favorite.find(el => el.id === productInfo.value.id)
})

const productInfo = computed(() => {
    return props.product.product
})

const increase = () => {
    increaseQuantity(props.index)
}
const decrease = () => {
    decreaseQuantity(props.index)
}


</script>
<style lang="scss" scoped>
.cart-product {

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @include atXl {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }

    @include atLg {
        flex-direction: row;
        align-items: center;
    }

    @include atMd {
        display: none;
    }

    // .cart-product__info
    &-mini {
        display: none;

        @include atMd {
            display: block;
        }
    }

    &__info {
        display: flex;
        align-items: flex-start;
        gap: 18px;
    }

    // .cart-product__image

    &__image {
        width: 110px;
        height: 140px;
        border-radius: 10px;
        background: #F5F5F5;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            height: 80%;
            width: auto;
        }
    }

    &__check {
        position: absolute;
        left: 6px;
        top: 6px;
    }

    // .cart-product__value

    &__value {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    // .cart-product__value-top

    &__value-top {
        display: flex;
        gap: 16px;
        align-items: center;
    }

    // .cart-product__rating

    &__rating {
        display: flex;
        align-items: center;
        gap: 9px;
        color: $neutral;
        font-size: 14px;
    }

    // .cart-product__code

    &__code {
        font-size: 14px;
        color: rgba(68, 68, 68, 0.50);

    }

    // .cart-product__existence

    &__existence {
        color: $green;
        font-size: 14px;
    }

    // .cart-product__name

    &__name {
        color: $neutral;
        font-size: 18px;
        font-weight: 700;
        margin-top: 5px;
    }

    // .cart-product__price

    &__price {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        gap: 5px;

        // .cart-product__price_old

        &_old {
            color: $additional;
            text-decoration: line-through;
        }

        // .cart-product__price_lg

        &_lg {
            color: $text;
            font-size: 18px;
            font-weight: 700;
        }
    }

    // .cart-product__price-block

    &__price-block {
        color: $text-60;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    // .cart-product__favorite

    &__favorite {
        color: $additional;
        cursor: pointer;
        margin-top: 10px;
    }

    // .cart-product__actions

    &__actions {
        display: flex;
        align-items: center;
        gap: 85px;

        @include atXXl {
            gap: 20px;
        }

        svg {
            cursor: pointer;

            @include atXl {
                position: absolute;
                top: 0;
                right: 0;
            }
        }
    }

    // .cart-product__count

    &__count {
        display: flex;
        gap: 16px;
        align-items: center;

        &-price {
            color: $neutral;
        }

        span {
            color: rgba(68, 68, 68, 0.50);

        }
    }
}
</style>