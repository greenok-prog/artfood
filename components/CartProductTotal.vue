

<template>
    <div class="cart-total">
        <!-- <div class="cart-total__types">
            <div class="cart-total__types-item">
                <li>Самовывоз: <span>17 октября</span></li>
                <span>Посмотреть адрес</span>
            </div>
            <div class="cart-total__types-item">
                <li>Доставка: <span>18 октября</span></li>
                <p>Доставка бесплатная от суммы 100 000тг
                    по Алмате</p>
            </div>
        </div> -->
        <div class="cart-total__price">
            <p class="cart-total__price-title"></p>
            <div class="cart-total__price-item">
                {{ cart.cartLength }} товара на сумму:
                <span>{{ cart.getTotalCartPrice }}₸</span>
            </div>
            <div class="cart-total__price-item"
                v-if="Math.abs(Number(cart.totalDiscount)) > 0">
                Применена скидка: <span>-{{ cart.totalDiscount }}%</span>
            </div>
            <div class="cart-total__price-total">
                <h4>Итого</h4>
                <h4>{{ cart.totalPrice }}₸</h4>
            </div>
        </div>
        <div class="cart-total__bottom">
            <VBtn @click="navigateToOrder">Оформить заказ</VBtn>
            <p>Доступные способы и время доставки можно выбрать при
                оформлении заказа</p>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { useModal } from 'vue-final-modal';
import CartLoginModal from './CartLoginModal.vue';
import { useCartStore } from '~/store/cart';
import { useAuthStore } from '~/store/auth';
const cart = useCartStore()
const { isLoggedIn } = storeToRefs(useAuthStore())

const { open, close } = useModal({
    component: CartLoginModal,
    attrs: {
        onClose() {
            close()
        },
    }
})
const navigateToOrder = () => {
    if (!isLoggedIn.value) {
        open()
    } else {
        return navigateTo('/order')
    }

}
</script>
<style lang="scss" scoped>
.cart-total {
    padding: 24px;
    border-radius: 16px;
    background: white; // .cart-total__types
    display: flex;
    flex-direction: column;
    gap: 24px;

    @include atMd {
        gap: 20px;
        padding: 10px;
    }

    &__types {
        display: flex;
        flex-direction: column;
        gap: 24px;

        @include atMd {
            gap: 14px;
        }
    }

    // .cart-total__types-item

    &__types-item {
        span {
            color: $additional;

            @include atXl {
                font-size: 14px;
            }
        }

        li {
            color: $neutral;
            font-weight: 700;
            list-style-type: none;
            margin-bottom: 6px;

            @include atXl {
                font-size: 14px;
            }

            span {


                color: $main;
                font-weight: 500;

            }
        }

        p {
            color: $text-60;

            @include atXl {
                font-size: 14px;
            }


        }

    }

    // .cart-total__price

    &__price {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    // .cart-total__price-title

    &__price-title {
        color: $neutral;
        font-weight: 700;
        // font-size: 16px;
    }

    // .cart-total__price-item

    &__price-item {
        color: $text-40;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
            color: $neutral;
        }
    }

    // .cart-total__price-total

    &__price-total {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h4 {
            color: $neutral;
            font-size: 24px;
            font-weight: 700;
        }
    }

    // .cart-total__bottom

    &__bottom {
        display: flex;
        flex-direction: column;
        gap: 14px;

        button {
            height: 65px;
            padding: 0;
            background: $main;

            @include atLg {
                width: 220px;
            }

            @include atMd {
                width: 100%;
            }
        }

        p {
            color: $text-60;

            @include atMd {
                font-size: 14px;
            }

        }
    }
}
</style>