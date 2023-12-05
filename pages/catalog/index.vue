<template>
    <div class="container">
        <div class="catalog">
            <CatalogFilter class="catalog-filter" />
            <CatalogList v-if="products" :products="products"
                class="catalog-list" />

        </div>
    </div>
    <div class="catalog__bottom">
        <!-- <ContentBlockWrap title="Вы недавно смотрели" :title-size="28">
            <ProductSlider :products="viewedProducts" />
        </ContentBlockWrap> -->
        <!-- <ContentBlockWrap title="Рекомендуем вам" :title-size="28">
            <ProductSlider :products="news?.results" />
        </ContentBlockWrap> -->
    </div>

    <ModalsContainer />
</template>
<script lang="ts" setup>
import { ModalsContainer } from 'vue-final-modal';
import { useFilter } from '~/store/filter';
import { useProducts } from '~/store/products';
import type { ProductListResult } from '~/types/api-schema';
const { page } = storeToRefs(useFilter())
const { getLocalViewed } = useProducts()
const { viewedProducts, getViewed } = storeToRefs(useProducts())


const route = useRoute()

const products = ref<any>([])

const pageSize = 20
const queryParams = computed(() => {
    return { ...route.query, page_size: pageSize, page: page.value }
})
watch(queryParams, async () => {
    const { data } = await useFetch<ProductListResult>('/api/products', {
        query: queryParams.value,

    })
    products.value = data.value
}, { immediate: true })

getLocalViewed()
</script>
<style lang="scss" scoped>
.catalog {
    display: flex;
    align-items: flex-start;
    gap: 30px;
    margin-top: 38px;



    @include atMd {
        margin-top: 25px;

    }

    &-list {
        width: 100%;
    }

    &-filter {
        @include atMd {
            display: none;
        }
    }

    &__bottom {
        margin-top: 120px;
        display: flex;
        flex-direction: column;
        gap: 120px;
        padding-bottom: 120px;

        @include atMd {
            margin-top: 100px;
            padding-bottom: 80px;

        }
    }
}
</style>