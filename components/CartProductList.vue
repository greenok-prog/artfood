<template>
    <div class="cart-products">
        <div class="cart-products__list">
            <div class="cart-products__item"
                v-for="(product, index) in products"
                :key="product.product.id">
                <CartProductItem :index="index" :product="product" />
            </div>

        </div>
    </div>
</template>
<script lang="ts" setup>
import type { IcartProduct } from '~/store/cart';

defineProps<{
    products: IcartProduct[]
}>()

</script>
<style lang="scss" scoped>
.cart-products {
    &__list {
        display: flex;
        flex-direction: column;
        gap: 4px;

        @include atXl {
            gap: 10px;
        }
    }

    &__item {
        background: white;
        padding: 24px;

        @include atMd {
            padding: 0;
            box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.15);
            border-radius: 10px;

        }

        &:first-child {
            border-radius: 24px 24px 0 0;

            @include atXl {
                border-radius: 10px;
            }
        }

        &:last-child {
            border-radius: 0 0 24px 24px;

            @include atXl {
                border-radius: 10px;
            }
        }

        // border-bottom: ;
    }
}
</style>