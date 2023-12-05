<template>
    <ContentBlockWrap title="Акционные товары"
        moreText="Все акционные товары"
        :more-link="`/catalog?ordering=-discount_price`">
        <ProductSlider :products="news.results" />
    </ContentBlockWrap>
</template>
<script lang="ts" setup>
import { productSliderBreakpoints } from '~/constants/responsiveBreakpoints'
import type { ProductListResult } from '~/types/api-schema';
const { data: news } = await useFetch<ProductListResult>('/api/products-new')
</script>
<style lang="scss" scoped>
.disount-products {
    margin-top: 120px;

    @include atMd {
        margin-top: 40px;
    }
}
</style>