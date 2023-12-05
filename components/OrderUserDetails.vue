<template>
    <OrderBlockWrapper>
        <template #title>
            3. Мои данные
        </template>
        <template #icon>
            <NuxtLink to="/user/change-info">
                <EditSvg />
            </NuxtLink>
        </template>
        <div class="order-user">
            <div class="order-user__item">
                ФИ: <span>{{ user.last_name }} {{ user.username }}</span>
            </div>
            <div class="order-user__item">
                Почта: <span>{{ user.email }}</span>
            </div>
            <div class="order-user__item">
                Телефон: <span>{{ user.phone_number }}</span>
            </div>
        </div>
    </OrderBlockWrapper>
</template>
<script lang="ts" setup>
import type { UserCompany } from '~/dto/user';

const props = defineProps<{
    user: UserCompany
}>()

</script>
<style lang="scss" scoped>
.order-user {
    display: flex;
    flex-direction: column;
    gap: 14px;

    @include atMd {
        gap: 10px;
    }

    // .order-user__item

    &__item {
        color: $text-40;
        display: flex;
        align-items: center;
        gap: 10px;

        span {
            color: $text;
        }
    }
}
</style>