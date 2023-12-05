<template>
    <div class="order-product">
        <div class="order-product__image">
            <img src="/order-image.png" alt="">
        </div>
        <div class="order-product__info">
            <div class="order-product__top">
                <span class="order-product__top-rating">
                    <StartSvg /> {{ product.product.rating }}
                </span>
                <span class="order-product__top-art">Артикул:
                    {{ product.product.article }}</span>
                <span class="order-product__top-existence">В
                    наличии</span>
            </div>
            <div class="order-product__info_mini">
                <div class="order-product__info-image"
                    v-if="product.product.images[0]">
                    <img :src="product.product.images[0].image" alt="">
                </div>
                <div class="order-product__info-text">
                    <h4 class="order-product__title">{{
                        product.product.name }}</h4>
                    <div class="order-product__price">
                        <p class="order-product__price-item">
                            Опт:
                            <span class="order-product__price-item_new">{{
                                product.product.opt_price }}₸</span>
                        </p>
                        <p class="order-product__price-item">
                            Розница:
                            <span class="order-product__price-item_new">
                                {{
                                    product.product.discount_price ?
                                    product.product.discount_price :
                                    product.product.price
                                }}

                                ₸</span>
                            <span class="order-product__price-item_old"
                                v-if="product.product.discount_price">{{ product.product.price }}₸</span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
interface OrderProduct {
    id: number,
    order: number,
    price: number,
    quantity: number,
    product: {
        name: string,
        price: number,
        article: string,
        discount_price: number
    }
}
const props = defineProps<{
    product: OrderProduct
}>()
</script>
<style lang="scss" scoped>
.order-product {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-top: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.20);




    // .order-product__image

    &__image {
        width: 91.6px;
        height: 120px;
        flex-shrink: 0;
        border-radius: 15px;
        background: #F5F5F5;
        display: flex;
        justify-content: center;
        align-items: center;

        @include atMd {
            display: none;
        }
    }

    // .order-product__info

    &__info {
        display: flex;
        flex-direction: column;

        &-image {
            display: none;

            @include atMd {
                display: block;
            }
        }

        &_mini {
            display: flex;
            gap: 13px;
            margin-top: 8px;
        }
    }

    // .order-product__top

    &__top {
        display: flex;
        gap: 16px;
    }

    // .order-product__top-rating

    &__top-rating {
        display: flex;
        align-items: center;
        gap: 9px;
        font-size: 14px;
        color: #444;

        @include atMd {
            font-size: 12px;
        }
    }

    // .order-product__top-art

    &__top-art {
        font-size: 14px;
        color: rgba(68, 68, 68, 0.50);

        @include atMd {
            font-size: 12px;
        }
    }

    // .order-product__top-existence

    &__top-existence {
        font-size: 14px;
        color: $green;

        @include atMd {
            font-size: 12px;
        }
    }

    // .order-product__title

    &__title {
        font-size: 18px;
        font-weight: 700;
        color: #444;
        margin-top: 9px;

        @include atMd {
            font-size: 14px;
        }
    }

    // .order-product__price

    &__price {
        margin-top: 12px;

        display: flex;
        flex-direction: column;
        gap: 3px;

    }

    // .order-product__price-item

    &__price-item {
        font-size: 15px;
        color: rgba(68, 68, 68, 0.50);
        display: flex;
        gap: 8px;

        @include atMd {
            font-size: 14px;
        }

        &_new {
            color: #444;
        }

        &_old {
            color: rgba(68, 68, 68, 0.40);
            text-decoration: line-through;
        }
    }
}
</style>