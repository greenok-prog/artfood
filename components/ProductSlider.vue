<template>
    <Slider :items="products" :breakpoints="productSliderBreakpoints">
        <template #default="{ item }">
            <ProductCard :data="item" :include-url="includeUrl"/>
        </template>
    </Slider>
</template>
<script lang="ts" setup>
import { productSliderBreakpoints } from '~/constants/responsiveBreakpoints'
import type { ListProduct } from '~/types/api-schema';
const props = defineProps<{
    products?: ListProduct[]
    includeUrl?: boolean,
}>()


</script>