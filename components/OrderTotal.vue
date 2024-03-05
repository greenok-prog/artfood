<template>
    <div class="order-total">
        <div class="order-total__title">Сумма к оплате</div>
        <div class="order-total__list">
            <div class="order-total__list-item">
                {{ cartStore.cartLength }} товара на сумму:
                <span>{{ cartStore.getTotalCartPrice.toLocaleString()
                }}₸</span>
            </div>
            <div class="order-total__list-item">
                Сумма со скидкой: <span>{{
                    cartStore.totalPrice.toLocaleString() }}₸</span>
            </div>
            <div class="order-total__list-item">
                Применена скидка:
                <span>-{{ cartStore.totalDiscount }}%</span>
            </div>
            <div class="order-total__list-item">
                Доставка: <span>{{ deliveryPrice.toLocaleString()
                }}₸</span>
            </div>
        </div>
        <div class="order-total__price">
            <span>Итого</span>
            <span>{{ (cartStore.totalPrice +
                deliveryPrice).toLocaleString() }} ₸</span>
        </div>
        <FormError class="order-total__error" v-if="addressError"
            error-message="Необходимо добавить адрес" />
        <div class="order-total__actions">
            <VBtn v-if="user.user_type === 'individual'"
                class="order-total__actions-online"
                @click="emit('order', 'card')">Оплатить заказ
                онлайн</VBtn>
            <VBtn @click="emit('order', 'cash')" variant="outlined"
                class="order-total__actions-pick">
                {{ user.user_type === 'individual' ?
                    'Оплатить заказ при получении' :
                    'Запросить счет на оплату' }}
            </VBtn>
        </div>
        <p class="order-total__message">Нажимая на кнопку, вы соглашаетесь
            с <VLink :to="'/privacy-policy'" type="underline">
                Условиями обработки персональных данных
            </VLink>,
            а также с <VLink :to="'/return-policy'" type="underline">
                Условиями продажи
            </VLink>
        </p>
    </div>
</template>
<script lang="ts" setup>
import { useAuthStore } from '~/store/auth';
import { useCartStore } from '~/store/cart';
const deliveryPrice = 0

const userStore = useAuthStore()
const { user } = storeToRefs(userStore)
const cartStore = useCartStore()

const emit = defineEmits(['order'])
const props = defineProps<{
    addressError: boolean
}>();
</script>
<style lang="scss" scoped>
.order-total {
    border-radius: 16px;
    background: white;
    padding: 24px;

    &__error {
        margin-top: 12px;
    }

    // .order-total__title

    &__title {
        color: $neutral;
        text-transform: uppercase;
        font-weight: 700;
    }

    // .order-total__list

    &__list {
        margin-top: 6px;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    // .order-total__list-item

    &__list-item {
        color: $text-40;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @include atMd {
            font-size: 14px;
        }

        span {
            color: $text;
        }
    }

    // .order-total__price

    &__price {
        margin-top: 6px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            color: $neutral;
            font-weight: 700;
            font-size: 24px;
        }
    }

    // .order-total__actions

    &__actions {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        @include atLg {
            flex-direction: row;
            align-items: center;
            gap: 30px;
        }

        @include atMd {
            flex-direction: column;
            gap: 10px;
        }
    }

    // .order-total__actions-online

    &__actions-online {
        background: $main;
        height: 65px;
    }

    // .order-total__actions-pick

    &__actions-pick {
        border-color: $main;
        color: $main;
        padding: 0 10px;

    }

    // .order-total__message

    &__message {
        margin-top: 24px;
        color: $text-60;

        @include atMd {
            font-size: 14px;
        }
    }
}
</style>