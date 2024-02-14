<template>
    <div class="category-card">
        <img v-if="data.image" :src="data.image" :alt="data.name"
            class="category-card__image" loading="lazy">
        <div class="category-card__info">
            <p class="category-card__name">
                {{ data.name }}
            </p>
            <NuxtLink :to="`/catalog/categories/${data.id}`"
                aria-label="Read more" class="category-card__btn">
                <SliderArrowSvg />
            </NuxtLink>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { Category } from '~/types/api-schema';

const props = defineProps<{
    data: Category
}>()
</script>
<style lang="scss" scoped>
.category-card {
    &__image {
        height: 320px;
        width: 100%;
        border-radius: 24px;
        object-fit: cover;
    }

    &__info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 24px;
    }

    &__name {
        font-size: 20px;
        font-weight: 700;
        color: $neutral;
    }

    &__btn {
        width: 50px;
        height: 50px;
        background: $additional;
        border-radius: 50px;
        transform: rotate(130deg);
        display: flex;
        align-items: center;
        justify-content: center;

        :deep(svg) {
            path {
                stroke: white;
            }
        }
    }
}
</style>