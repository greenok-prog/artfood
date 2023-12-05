<template>
    <OrderBlockWrapper>
        <template #title>
            4. Данные о компании
        </template>
        <template #icon>
            <NuxtLink to="/user/change-company">
                <EditSvg />
            </NuxtLink>
        </template>
        <div class="order-company">
            <div class="order-company__item">
                Название компании: <span>{{ user.company_name }}</span>
            </div>
            <div class="order-company__item">
                Телефон компании: <span>{{ user.phone_number }}</span>
            </div>

            <div class="order-company__item">
                БИН/ИИН: <span>{{ user.bin_iin }}</span>
            </div>
            <div class="order-company__item">
                ИИК: <span>{{ user.iik }}</span>
            </div>
            <div class="order-company__item">
                Банк: <span>{{ user.bank }}</span>
            </div>
            <div class="order-company__item">
                БИК: <span>{{ user.bik }}</span>
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
.order-company {
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

        @include atMd {
            display: grid;
            grid-template-columns: 2fr 3fr;
            align-items: flex-start;
        }

        span {
            color: $text;
        }
    }
}
</style>