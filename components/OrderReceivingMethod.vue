<template>
    <OrderBlockWrapper>
        <template #title>
            1. Способ получения
        </template>
        <template #icon>
            <div class="order-receiving__city">
                <NavigationSvg />
                в г.Алматы
            </div>
        </template>
        <div class="order-receiving">
            <div class="order-receiving__pickup">
                <MultiCheckbox value="pickup" v-model="method">
                    <span class="order-receiving__check">Самовывоз</span>
                </MultiCheckbox>
                <VLink to="/order/address" class="order-receiving__link">
                    Посмотреть
                    адрес</VLink>
            </div>
            <div class="order-receiving__delivery">
                <MultiCheckbox value="delivery" v-model="method">
                    <span class="order-receiving__check">Доставка</span>
                </MultiCheckbox>
                <span class="order-receiving__text">Доставка бесплатная от
                    суммы 100 000тг
                    по Алмате</span>
            </div>
        </div>
    </OrderBlockWrapper>
</template>
<script lang="ts" setup>
const emit = defineEmits(['selectMethod'])
const method = ref("pickup")
watch(method, () => {
    emit('selectMethod', method.value)

})

</script>
<style lang="scss" scoped>
.order-receiving {
    display: flex;
    flex-direction: column;
    gap: 24px;
    // .order-receiving__pickup

    &__pickup,
    &__delivery {
        display: flex;
        flex-direction: column;
        gap: 6px;
        max-width: 340px;
    }

    &__city {
        display: flex;
        color: $additional;
        align-items: flex-end;
        gap: 10px;
    }

    // .order-receiving__link

    &__link {
        cursor: pointer;
        color: $additional;
    }

    // .order-receiving__delivery



    // .order-receiving__text

    &__text {
        color: $text-60;

    }

    &__check {
        display: flex;
        align-items: center;
        gap: 2px;
        color: $neutral;
        font-weight: 700;

        p {
            color: $main;
        }
    }
}
</style>