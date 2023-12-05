<template>
    <div class="order-history">
        <h2 class="order-history__title">История заказов</h2>
        <div class="order-history__list">
            <div class="order-history__item" v-for="item in orderList">
                <OrderHistoryItem :order="item" />
            </div>
        </div>
    </div>
    <ModalsContainer />
</template>
<script lang="ts" setup>
import { ModalsContainer } from 'vue-final-modal';
import type { GetOrder } from '~/types/api-schema';
const props = defineProps<{
    orderList: GetOrder[]
}>()

</script>
<style lang="scss" scoped>
.order-history {

    // .order-history__title

    &__title {
        font-size: 24px;
        color: #2C2C2C;

        @include atMd {
            display: none;
        }
    }

    // .order-history__list

    &__list {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-top: 24px;
    }
}
</style>