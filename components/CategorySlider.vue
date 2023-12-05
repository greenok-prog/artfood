<template>
    <div class="product-slider">
        <Slider :items="categories"
            :breakpoints="categorySliderBreakpoints">
            <template #default="{ item }">
                <CategoryCard :data="item" />
            </template>
        </Slider>
    </div>
</template>

<script lang="ts" setup>
import { categorySliderBreakpoints } from '~/constants/responsiveBreakpoints'
import type { Category } from '~/types/api-schema';
const props = defineProps<{
    categories: Category[]
}>()
</script>