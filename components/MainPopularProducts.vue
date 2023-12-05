<template>
    <ContentBlockWrap title="Популярные товары"
        :more-link="`/catalog?ordering=-rating`"
        moreText="Все популярные товары">
        <ProductSlider :products="data?.results" />
    </ContentBlockWrap>
</template>
<script lang="ts" setup>
import type { ProductListResult } from '~/types/api-schema'
const { data } = await useFetch<ProductListResult>('/api/products-popular')
</script>

<style lang="scss" scoped>
.popular-products {
    margin-top: 160px;

    @include atMd {
        margin-top: 80px;
    }
}
</style>