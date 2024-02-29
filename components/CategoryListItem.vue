<template>
    <div class="category-card">
        <img 
          v-if="category.image" 
          :src="category.image" 
          alt=""
          class="category-card__image"
          @click="$router.push({path:`/catalog?subcategory=${category.id}` })"
        >
        <div class="category-card__info">
            <h4 class="category-card__name">{{ category.name }}
            </h4>
            <NuxtLink :to="`/catalog?subcategory=${category.id}`"
                class="category-card__btn">
                <SliderArrowSvg />
            </NuxtLink>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { Category } from '~/types/api-schema';

const props = defineProps<{
    category: Category
}>()

</script>
<style lang="scss" scoped>
.category-card {
    &__image {
        height: 250px;
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
        font-size: 16px;
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