<template>
    <div class="product-price">
        <h3 class="product-price__title">Ваша стоимость</h3>
        <!-- <div class="product-price__discount"
            v-if="product.discount_price">
            <span class="product-price__discount-title">Применена
                скидка:</span>
            <span class="product-price__discount-value">-{{
                discountPercent }}%</span>
        </div> -->
        <div class="product-price__price">
            <div class="product-price__price-value">
                {{ productCount >= Number(product.opt_quantity) ? "Опт"
                    : 'Розница' }} <span>{{ totalPrice }}₸</span>
            </div>
            <ProductCounter v-model="productCount"
                :max="product.quantity_stock" @increase="increaseQuantity"
                @decrease="decreaseQuantity" />
        </div>
        <div class="product-price__cart">
            <button @click="addProductToCart"
                class="product-price__cart-add">
                <span>Добавить в корзину</span>
                <CartSvg />
            </button>
            <button
                @click="isInFavorite ? removeFromFavorite(product) : addToFavorite(product)"
                class="product-price__cart-favorite"
                :class="{ 'product-price__cart-favorite_active': isInFavorite }">
                <ProductDetailsFavoriteSvg />
            </button>
        </div>
        <!-- <button class="product-price__buy">Купить сейчас</button> -->
        <div class="product-price__loc product-price__info">
            <LocationSvg />
            <div>
                Самовывоз:
                <!-- <span>17 октября</span> -->
            </div>
        </div>
        <NuxtLink to="/contacts" class="product-price__check">Посмотреть
            адрес</NuxtLink>
        <div class="product-price__delivery product-price__info">
            <DeliverySvg />
            <div>
                Доставка: <span>Уточните у менеджера</span>
            </div>
        </div>
        <div class="product-price__actions">
            <button v-if="!useCompareStore().productIsCompare(product.id)"
                @click="addToCompare(product)">
                <CompareSvg /> Сравнить
            </button>
            <!-- <button>
                <ShareSvg />Поделиться
            </button> -->
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useCartStore } from '~/store/cart';
import { useCompareStore } from '~/store/compare';
import { useFavoriteStore } from '~/store/favorite';
import type { ListProduct } from '~/types/api-schema';

const props = defineProps<{
    product: ListProduct
}>()
const { removeFromFavorite, addToFavorite } = useFavoriteStore()
const { favorite } = storeToRefs(useFavoriteStore())
const { addTocart } = useCartStore()
const { addToCompare } = useCompareStore()
const productCount = ref(1)
const currentPrice = computed(() => {
    if (productCount.value >= Number(props.product.opt_quantity)) {
        return props.product.opt_price
    } else {
        return props.product.discount_price ? props.product.discount_price : props.product.price
    }

})
const discountPercent = computed(() => {
    const discount = Number(props.product.discount_price)
    const price = props.product.price
    return getDiscountPercent(price, discount)
})

const totalPrice = computed(() => {
    return new Intl.NumberFormat('ru').format(Number(currentPrice.value) * productCount.value)
})
const isInFavorite = computed(() => {
    return favorite.value.find(el => el.id === props.product.id)
})
const increaseQuantity = () => {
    productCount.value++
}
const decreaseQuantity = () => {
    productCount.value--
}
const addProductToCart = async () => {
    await addTocart(props.product, productCount.value)
}
</script>
<style lang="scss" scoped>
.product-price {
    padding: 24px;
    border-radius: 16px;
    background: var(--white, #FFF);

    @include atMd {
        padding: 0;
    }

    // .product-price__title

    &__title {
        color: #444;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
    }

    // .product-price__discount

    &__discount {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
    }

    // .product-price__discount-title

    &__discount-title {
        color: $text-40;
    }

    // .product-price__discount-value

    &__discount-value {
        color: #444;
    }

    // .product-price__price

    &__price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
    }

    // .product-price__price-value

    &__price-value {
        color: $text-60;

        span {
            font-size: 24px;
            color: #444;
        }
    }


    // .product-price__cart

    &__cart {
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: space-between;
        margin-top: 21px;
    }

    // .product-price__cart-add

    &__cart-add {
        display: flex;
        padding: 20px 20px 20px 18px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex: 1 0 0;
        align-self: stretch;
        border-radius: 10px;
        background: $main;
        color: white;
        border: none;
        cursor: pointer;

        @include atXXl {
            font-size: 14px;
        }


        svg {
            width: 16px;
            height: 16px;
        }
    }

    // .product-price__cart-favorite

    &__cart-favorite {
        display: flex;
        width: 60px;
        height: 60px;
        border-radius: 60px;
        background: #F4EBEE;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &_active {
            :deep(svg) {
                fill: $main;
            }
        }


    }

    // .product-price__buy

    &__buy {
        height: 60px;
        width: 100%;
        border: 2px solid $main;
        cursor: pointer;
        color: #444;
        margin-top: 10px;
        border-radius: 50px;
        background: white;
    }

    // .product-price__info

    &__info {
        padding: 16px;
        display: flex;
        gap: 10px;
        border-radius: 10px;
        background: $light-gray;
        color: rgba(68, 68, 68, 0.50);

        span {
            color: #444;
        }
    }

    &__loc {
        margin-top: 55px;
        margin-bottom: 10px;

        @include atMd {
            margin-top: 24px;
        }
    }

    &__delivery {
        margin-top: 24px;
    }

    // .product-price__check

    &__check {
        color: $additional;
        margin-top: 10px;
        cursor: pointer;
    }

    &__actions {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-top: 21px;

        button {
            cursor: pointer;
            border-radius: 10px;
            border: 1px solid rgba(0, 0, 0, 0.20);
            display: flex;
            padding: 14px 10px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            flex: 1 0 0;
        }
    }
}
</style>