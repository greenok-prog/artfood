<template>
    <div class="product-info">
        <h2 class="product-info__title">{{ product.name }}
        </h2>
        <div class="product-info__info">
            <div class="product-info__rating">
                <StartSvg /> {{ product.rating }}
            </div>
            <span class="product-info__reviews">
                {{ rating }} отзывов
            </span>
            <div class="product-info__code">
                <p>Артикул: {{ product.article }}</p>
                <CopySvg @click="copyArticle" />
            </div>
            <ExistanceStatus v-if="product.existence"
                :existance="product.existence"
                class="product-info__existance" />
        </div>
        <div class="product-info__main">
            <ProductDetailsImage :discount="discountPercent"
                :images="product.images" />
            <div class="product-info__list">
                <li>Цена:<span class="product-info__list-price-by">за
                        штуку</span></li>
                <div class="product-info__list-price">
                    <li v-if="product.opt_price">Оптом: <div><span>{{
                        product.opt_price }}₸</span>
                            <p class="product-info__list-price_old">{{
                                product.discount_price ?
                                product.discount_price : product.price }}₸
                            </p>
                        </div>
                    </li>
                    <li>Розница: <div>
                            <span class="product-info__list-price_lg">
                                {{ product.discount_price ?
                                    product.discount_price : product.price }}₸
                            </span>
                            <p v-if="product.discount_price && product.price"
                                class="product-info__list-price_old">
                                {{ product.price }}₸
                            </p>
                        </div>
                    </li>
                </div>
                <li>Страна производитель: <span>{{
                    product.product_data?.made_in.name }}</span></li>
                <li>Бренд: <span>{{
                    product.product_data?.manufacturer.name }}</span>
                </li>
                <li v-if="product.product_data.description"
                    class="product-info__list-description ">
                    Описание: <p :class="{ 'opened': fullText === true }">
                        {{ product.product_data.description }}
                    </p>
                    <div v-if="product.product_data.description.length > 180"
                        @click="openTextHandler"
                        class="product-info__list-description_more">
                        {{ fullText ? 'Скрыть текст' : `Показать весь
                        текст` }}
                    </div>

                </li>

            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { ListProduct } from '~/types/api-schema';

const props = defineProps<{
    product: ListProduct,
    rating: number
}>()
const copyArticle = () => {
    if (props.product.article) {
        window.navigator.clipboard.writeText(props.product.article)
    }
}
const fullText = ref(false)
const openTextHandler = () => {
    fullText.value = !fullText.value
}
const discountPercent = computed(() => {
    const discount = Number(props.product.discount_price)
    const price = props.product.price
    if (discount === 0) {
        return null
    }
    return getDiscountPercent(price, discount)
})

</script>

<style lang="scss" scoped>
.product-info {
    padding: 30px 30px 27px 25px;
    border-radius: 24px;
    background: #FFF;

    @include atMd {
        padding: 0;
    }

    // .product-info__title

    &__title {
        color: $neutral;
        font-size: 30px;
        font-weight: 700;
    }

    // .product-info__info

    &__info {
        display: flex;
        align-items: center;
        gap: 30px;
        margin-top: 8px;
        flex-wrap: wrap;
        row-gap: 4px;

        @include atMd {
            gap: 20px;
            row-gap: 4px;

        }
    }

    // .product-info__rating

    &__rating {
        display: flex;
        align-items: center;
        gap: 9px;
        color: #444;
        font-size: 14px;
    }

    // .product-info__reviews

    &__reviews {
        color: rgba(68, 68, 68, 0.50);
        font-size: 14px;
    }

    // .product-info__code

    &__code {
        color: rgba(68, 68, 68, 0.50);
        font-size: 14px;
        display: flex;
        align-items: flex-start;
        gap: 9px;

        svg {
            cursor: pointer;
        }

    }

    // .product-info__existance

    &__existance {
        font-size: 14px;
    }

    // .product-info__main

    &__main {
        display: flex;
        gap: 30px;
        margin-top: 16px;

        @include atXl {
            flex-direction: column;
        }
    }

    // .product-info__image
    // .product-info__list

    &__list {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 10px;

        li {
            color: $text-40;
            display: flex;
            gap: 4px;
            align-items: center;

            span {
                color: $text;
            }
        }

    }



    // .product-info__list-price

    &__list-price {
        display: flex;
        flex-direction: column;
        gap: 4px;

        li {
            div {
                display: flex;
                gap: 10px;
                align-items: flex-end;
                color: $text-40;
            }
        }

        // .product-info__list-price_old

        &_old {
            color: $additional;
            text-decoration: line-through;
        }

        // .product-info__list-price_lg

        &_lg {
            font-size: 24px;
            font-weight: 700;
            color: $text;
        }
    }

    // .product-info__list-description

    &__list-description {
        display: flex;
        flex-direction: column;
        align-items: flex-start !important;
        justify-content: flex-start;


        p {
            color: #444;
            font-weight: 400;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 10;
            /* number of lines to show */
            line-clamp: 10;
            -webkit-box-orient: vertical;
            line-height: 145%;

            &.opened {
                display: block;
                overflow: visible;
                -webkit-line-clamp: none;
                line-clamp: none;
            }
        }

        &_more {
            color: $additional;
            margin-top: 9px;
            cursor: pointer;
        }
    }
}
</style>