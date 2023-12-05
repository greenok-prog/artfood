<template>
    <div class="category-list">
        <div class="category-list__item" v-for="category in categories"
            :key="category.id">
            <CategoryCard :data="category" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { Category } from '~/types/api-schema';

const props = defineProps<{
    categories: Category[]
}>()
</script>
<style lang="scss" scoped>
.category-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
    row-gap: 40px;

    @include atXl {
        grid-template-columns: repeat(4, 1fr);
    }

    @include atLg {
        gap: 20px;
        grid-template-columns: repeat(3, 1fr);
    }

    @include atMd {
        gap: 16px;
        row-gap: 30px;
        grid-template-columns: repeat(2, 1fr);
    }

}
</style>