<template>
    <ContentBlockWrap v-if="data" class="new-products" title="Новинки"
        moreText="Все новинки"
        :moreLink="`/catalog?ordering=-date_create`">
        <ProductSlider :products="data.results" />
    </ContentBlockWrap>
</template>
<script lang="ts" setup>
import type { ProductListResult } from '~/types/api-schema'

const { data } = await useFetch<ProductListResult>('/api/products-new')

</script>
<style lang="scss" scoped>
.new-products {
    margin-top: 60px;
}
</style>