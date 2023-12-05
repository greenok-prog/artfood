<template>
    <div class="cart-product">
        <div class="cart-product__info">
            <div class="cart-product__image">
                <img v-if="product.product.images.length"
                    :src="product.product.images[0].image"
                    :alt="productInfo.name">
            </div>
            <div class="cart-product__value">
                <div>
                    <div class="cart-product__value-top">
                        <div class="cart-product__rating">
                            <StartSvg /> {{ productInfo.rating }}
                        </div>
                        <div class="cart-product__code">
                            Артикул: {{ productInfo.article }}
                        </div>
                        <ExistanceStatus class="cart-product__existence"
                            :existance="productInfo.existence" />
                    </div>
                    <h4 class="cart-product__name">
                        {{ productInfo.name }}
                    </h4>
                </div>
                <span class="cart-product__favorite">Смотреть
                    похожее</span>
            </div>
        </div>
        <div class="cart-product__actions">

            <RemoveSvg @click="removeFromcart(productInfo)" />
        </div>
    </div>
    <CartNotAvailableItemMini :product="productInfo"
        class="cart-product__mini" />
</template>
<script lang="ts" setup>
import { useCartStore, type IcartProduct } from '~/store/cart';

const props = defineProps<{
    product: IcartProduct
}>()
const { removeFromcart } = useCartStore()
const productInfo = computed(() => {
    return props.product.product
})


</script>
<style lang="scss" scoped>
.cart-product {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    padding: 24px;
    border-radius: 24px;

    @include atMd {
        display: none;
    }

    &__mini {
        display: none;

        @include atMd {
            display: block;
        }
    }

    // .cart-product__info

    &__info {
        display: flex;

        gap: 18px;
        align-items: stretch
    }

    // .cart-product__image

    &__image {
        width: 110px;
        height: 140px;
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
        font-size: 14px;
    }

    // .cart-product__code

    &__code {
        font-size: 14px;
        color: $text-40;

    }

    // .cart-product__existence

    &__existence {
        font-size: 14px;
    }

    // .cart-product__name

    &__name {
        color: $text-40;
        font-size: 18px;
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