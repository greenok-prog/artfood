<template>
    <div class="cart-disabled">
        <h3 class="cart-disabled__title">Не доступно к заказу</h3>
        <div class="cart-disabled__list">
            <CartNotAvailableItem :product="product"
                v-for="product in products" :key="product.product.id" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { IcartProduct } from '~/store/cart';

const props = defineProps<{
    products: IcartProduct[]
}>()



</script>
<style lang="scss" scoped>
.cart-disabled {

    // .cart-disabled__title

    &__title {
        font-size: 24px;
        color: $neutral;
        font-weight: 700;
    }

    // .cart-disabled__list

    &__list {
        margin-top: 20px;
    }
}
</style>