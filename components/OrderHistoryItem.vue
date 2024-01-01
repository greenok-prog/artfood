<template>
    <div class="history-item">
        <div class="history-item__header">
            <div class="history-item__header-left">
                <p>Общая сумма заказа: {{ totalPrice }} ₸</p>
                <!-- <VLink to="#">Повторить заказ</VLink> -->
            </div>
            <div class="history-item__header-right">
                <div class="history-item__header-info">
                    <div class="history-item__info">
                        <span>Заказ №: {{ order.id }}</span>
                        <span>{{ orderDate }}</span>
                    </div>
                    <span class="history-item__return"
                        @click="open">Оформить возврат
                        заказа</span>
                </div>
                <button :class="{ 'active': opened }"
                    @click="openHandler">
                    <OrderArrowSvg />
                </button>
            </div>
        </div>
        <div v-if="!opened" class="history-item__images">
            <div v-for="image in orderImages" class="history-item__image">
                <img :src="image.image" alt="">

            </div>

        </div>
        <div v-else class="history-item__list">
            <div class="history-item__list-item"
                v-for="item in order.order_items" :key="item.id">
                <OrderHistoryProduct :product="item" />
            </div>

        </div>
        <!-- <VBtn @click="navigateToReviewsPage"
            class="history-item__review-btn">Оставить отзыв</VBtn> -->
    </div>
    <CancellationOrderModal />
</template>
<script lang="ts" setup>
import { useModal } from 'vue-final-modal'
import CancellationOrderModal from '~/components/CancellationOrderModal.vue'
import type { GetOrder } from '~/types/api-schema';
const props = defineProps<{
    order: GetOrder
}>()

const orderImages = computed(() => {
    return props.order.order_items.map(el => el.product.images)[0]
})


const totalPrice = computed(() => {
    return Number(props.order.total_price).toLocaleString()
})
const orderDate = computed(() => {
    return formatDate(props.order.date_created)
})


const { open, close } = useModal({
    component: CancellationOrderModal,
    attrs: {
        onConfirm() {
            close()
        },
    }
})
const navigateToReviewsPage = () => {
    return navigateTo('/user/reviews/other')
}


const opened = ref(false)

const openHandler = () => {
    opened.value = !opened.value
}
</script>
<style lang="scss" scoped>
.history-item {
    border-radius: 16px;
    background: #FFF;
    padding: 24px;
    position: relative;

    @include atLg {
        padding: 16px;
    }

    // .history-item__header

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @include atLg {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
        }
    }

    // .history-item__header-left

    &__header-left {
        display: flex;

        flex-direction: column;
        gap: 7px;

        p {
            color: #444;
            font-weight: 700;
        }
    }

    // .history-item__header-right

    &__header-right {
        display: flex;
        align-items: center;
        gap: 24px;

        button {
            width: 44px;
            height: 44px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100px;
            background: $light-gray;
            transition: transform .5s ease;
            cursor: pointer;

            @include atLg {
                position: absolute;
                right: 16px;
                top: 16px;
            }

            &.active {
                background-color: $additional;
                transform: rotate(180deg);

                :deep(svg) {
                    path {
                        stroke: white;
                    }
                }
            }
        }
    }

    // .history-item__header-info

    &__header-info {
        display: flex;
        flex-direction: column;
        gap: 7px;
        align-items: flex-end;

        @include atLg {
            align-items: flex-start;
        }
    }

    // .history-item__info

    &__info {
        display: flex;
        gap: 24px;
        align-items: center;
        color: rgba(68, 68, 68, 0.50);
        font-size: 14px;
    }

    // .history-item__return

    &__return {
        color: $main;
        cursor: pointer;
    }

    // .history-item__images

    &__images {
        margin-top: 30px;
        display: flex;
        gap: 14px;
        flex-wrap: wrap;

    }

    // .history-item__image

    &__image {
        width: 91.6px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        background: #F5F5F5;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 24px;
    }

    &__review-btn {
        width: 160px;
        height: 43px;
        padding: 0;
        margin-top: 24px;

    }
}
</style>