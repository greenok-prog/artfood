<template>
    <div class="catalog-filter">
        <div class="catalog-filter__top">
            <div class="catalog-filter__top-selectors" v-if="catalogs">
                <CatalogCategoryDropdown :category="category"
                    :key="category.id" v-for="category in categories" />

            </div>
        </div>
        <CatalogFilterBlock class="catalog-filter__bottom" />
    </div>
</template>
<script lang="ts" setup>
import type { ListCatalog } from '~/types/api-schema';
interface CatalogResult {
    results: ListCatalog[]
}
const { data: catalogs } = await useFetch<CatalogResult>('/api/catalogs')
const categories = computed(() => {
    let categoryList = []
    categoryList = catalogs.value?.results.map(el => el.categories)[0]
    return categoryList
})



</script>
<style lang="scss" scoped>
.catalog-filter {
    min-width: 250px;
    max-width: 250px;

    &__bottom {
        margin-top: 10px;
    }

    &__top {
        width: 100%;
        border-radius: 14px;
        background: #F9F9F9;
        padding: 22px 6px;

        &-selectors {
            display: flex;
            flex-direction: column;

        }
    }
}
</style>