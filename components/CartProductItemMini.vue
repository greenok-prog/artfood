<template>
    <div class="cart-product">
        <div class="cart-product__top">
            <div class="cart-product__top-left">
                <!-- <VCheckbox class="cart-product__check" /> -->
                <div class="cart-product__rating">
                    <StartSvg /> {{ productInfo.rating }}
                </div>
                <ExistanceStatus :existance="productInfo.existence"
                    class="cart-product__existence" />
            </div>
            <div class="cart-product__top-right" @click="open">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="cart-product__info">
            <div class="cart-product__image">
                <img v-if="productInfo.images[0]"
                    :src="productInfo.images[0].image" alt="">
            </div>
            <div class="cart-product__value">
                <div class="cart-product__value-top">

                </div>
                <div class="cart-product__code">
                    Артикул: <span>{{ productInfo.article }}</span>
                </div>
                <h4 class="cart-product__name">
                    {{ productInfo.name }}
                </h4>
                <div class="cart-product__price">
                    <div class="cart-product__price-block"
                        v-if="productInfo.opt_price">
                        Оптом: {{ productInfo.opt_price }}₸
                        <span class="cart-product__price_old">
                            {{
                                productInfo.discount_price ?
                                productInfo.discount_price :
                                productInfo.price
                            }}₸
                        </span>
                    </div>
                    <div class="cart-product__price-block">
                        Розница: <span class="cart-product__price_lg">
                            {{
                                productInfo.discount_price ?
                                productInfo.discount_price :
                                productInfo.price
                            }}
                            ₸
                        </span> <span v-if="productInfo.discount_price"
                            class="cart-product__price_old">
                            {{ productInfo.price }}₸
                        </span>
                    </div>
                </div>

            </div>
        </div>
        <div class="cart-product__border"></div>
        <div class="cart-product__actions">
            <div class="cart-product__count">
                <span>Розница</span>
                <ProductCounter v-model="props.product.quantity_product"
                    :max="productInfo.quantity_stock" @increase="increase"
                    @decrease="decrease" />
                <p class="cart-product__count-price">
                    {{ product.sum_products }}₸
                </p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useModal } from 'vue-final-modal';
import CartItemActionsModal from './CartItemActionsModal.vue';
import { useCartStore, type IcartProduct } from '~/store/cart';
import { useFavoriteStore } from '~/store/favorite';

const { removeFromcart, increaseQuantity, decreaseQuantity } = useCartStore()
const { favorite } = storeToRefs(useFavoriteStore())

const props = defineProps<{
    product: IcartProduct,
    index: number
}>()
const isInFavorite = computed(() => {
    return favorite.value.find(el => el.id === productInfo.value.id)
})
const productInfo = computed(() => {
    return props.product.product
})

const { open, close } = useModal({
    component: CartItemActionsModal,
    attrs: {
        isFavorite: isInFavorite,
        product: props.product.product,
        onClose() {
            close()
        }
    }
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
    // .cart-product__info

    &__info {
        display: flex;
        align-items: flex-start;
        gap: 18px;

        @include atXl {
            gap: 10px;
            padding: 0 10px;
            margin-top: 6px;
        }
    }

    // .cart-product__image

    &__image {
        width: 86px;
        height: 110px;
        border-radius: 10px;
        background: #F5F5F5;
        position: relative;
    }

    &__top {
        display: flex;
        padding: 6px 10px 0 6px;
        align-items: center;
        justify-content: space-between;

        &-right {
            display: flex;
            gap: 2px;
            align-items: center;

            span {
                width: 4px;
                height: 4px;
                border-radius: 100px;
                background: $additional;
            }
        }

        &-left {
            display: flex;
            align-items: center;

            label {
                gap: 0;
            }
        }
    }

    &__border {
        height: 1px;
        width: 100%;
        background: rgba(0, 0, 0, 0.14);
        margin-top: 13px;
    }

    // .cart-product__value

    &__value {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    // .cart-product__value-top



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
        font-size: 12px;
        color: rgba(68, 68, 68, 0.50);

        span {
            color: $text;
        }

    }

    // .cart-product__existence

    &__existence {
        color: $green;
        font-size: 12px;
        margin-left: 11px;
    }

    // .cart-product__name

    &__name {
        color: $neutral;
        font-size: 14px;
        font-weight: 700;
        margin-top: 5px;
    }

    // .cart-product__price

    &__price {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        gap: 3px;
        font-size: 12px;

        // .cart-product__price_old

        &_old {
            color: $additional;
            text-decoration: line-through;
        }

        // .cart-product__price_lg

        &_lg {
            color: $text;
            font-size: 16px;
            font-weight: 700;
        }
    }

    // .cart-product__price-block

    &__price-block {
        color: $text-60;
        font-size: 12px;
        display: flex;
        align-items: center;
        gap: 8px;
    }


    // .cart-product__actions

    &__actions {
        display: flex;
        align-items: center;
        gap: 85px;
        padding: 19.5px 10px 11px 25px;

        @include atXXl {
            gap: 20px;
        }

        svg {
            cursor: pointer;
        }
    }

    // .cart-product__count

    &__count {
        display: flex;
        gap: 16px;
        align-items: center;
        font-size: 16px;

        &-price {
            color: $neutral;
        }

        span {
            font-size: 14px;
            color: rgba(68, 68, 68, 0.50);

        }
    }
}
</style>