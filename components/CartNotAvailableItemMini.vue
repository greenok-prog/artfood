<template>
    <div class="cart-product">
        <div class="cart-product__top">
            <div class="cart-product__top-left">
                <div class="cart-product__rating">
                    <StartSvg /> {{ product.rating }}
                </div>
                <ExistanceStatus :existance="product.existence"
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

            </div>
            <div class="cart-product__value">
                <div>
                    <div class="cart-product__value-top">
                        <div class="cart-product__code">
                            Артикул: {{ product.article }}
                        </div>

                    </div>
                    <h4 class="cart-product__name">
                        {{ product.name }}
                    </h4>
                </div>
                <span class="cart-product__favorite">Смотреть
                    похожее</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useModal } from 'vue-final-modal';
import CartItemActionsModal from './CartItemActionsModal.vue';
import { useCartStore } from '~/store/cart';
import type { ListProduct } from '~/types/api-schema';
const props = defineProps<{
    product: ListProduct
}>()
const { removeFromcart } = useCartStore()

const { open, close } = useModal({
    component: CartItemActionsModal,
    attrs: {
        hasFavorite: false,
        onClose() {
            close()
        },
        onRemove() {
            removeFromcart(props.product)
            close()
        }
    }
})
</script>
<style lang="scss" scoped>
.cart-product {

    background: white;
    padding: 10px;
    border-radius: 24px;
    // .cart-product__info

    &__info {
        display: flex;
        margin-top: 10px;
        gap: 10px;
        align-items: stretch
    }

    // .cart-product__image
    &__top {
        display: flex;

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

    &__image {
        min-width: 86px;
        width: 86px;
        height: 110px;
        border-radius: 10px;
        background: #F5F5F5;
        position: relative;
    }



    // .cart-product__value

    &__value {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

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
        color: $text-40;
        font-size: 12px;
    }

    // .cart-product__code

    &__code {
        font-size: 12px;
        color: $text-40;

    }

    // .cart-product__existence

    &__existence {
        color: $warning;
        font-size: 14px;
        margin-left: 50px;
    }

    // .cart-product__name

    &__name {
        color: $text-40;
        font-size: 14px;
        font-weight: 700;
        margin-top: 9px;

    }

    // .cart-product__price


    // .cart-product__price-block



    // .cart-product__favorite

    &__favorite {
        color: $additional;
        cursor: pointer;
        margin-top: 10px;
        display: flex;
        align-items: flex-end;
    }




}
</style>