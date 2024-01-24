<template>
    <div class="catalog-list">
        <div class="catalog-list__header">
            <div class="catalog-list__header-left">
                <h2 class="catalog-list__title">
                    <ProfileNavbarIconSvg class="catalog-list__back" />
                    {{ activeCategory ? activeCategory : 'Каталог' }}
                </h2>
                <span class="catalog-list__total">Найдено {{
                    products.count }}
                    товара</span>
            </div>
            <a href="/catalog.pdf" download>
                <VBtn class="catalog-list__download">Скачать каталог
                </VBtn>
            </a>
        </div>
        <div class="catalog-list__filter-mini">
            <div class="catalog-list__filter-mini-sort"
                @click="sortChangeHandler">
                <CatalogSortSvg />
                {{ sortValue.name }}
            </div>
            <div class="catalog-list__filter-mini-options">
                <DownloadSvg @click="openDowloadModal" />
                <CatalogOptionsSvg @click="openFilterModal" />
            </div>
        </div>
        <div class="catalog-list__filter">
            <div class="catalog-list__filter-info">
                <div v-if="brand || maxPrice"
                    class="catalog-list__filter-badges">
                    <CatalogFilterBadge v-if="brand">
                        {{ brand.name }}
                    </CatalogFilterBadge>
                    <CatalogFilterBadge v-if="maxPrice">
                        От {{ minPrice }}тг - до {{ maxPrice }}тг
                    </CatalogFilterBadge>
                </div>
                <span v-if="isResetFilter" @click="resetCurrentFilters"
                    class="catalog-list__filter-reset">
                    Сбросить фильтры
                </span>
            </div>
            <div class="catalog-list__filter-sort">
                Сортировать
                <CatalogFilterSort v-model="sortValue" :options="SORT" />
            </div>

        </div>
        <div class="catalog-list__products">
            <div class="catalog-list__products-item"
                v-for="product in products.results" :key="product.id">
                <ProductCard :data="product" />
            </div>
        </div>
        <CatalogListPagination v-if="products.count > 20"
            :product-count="products.count"
            class="catalog-list__pagination" />
    </div>
</template>
<script lang="ts" setup>
import { useModal } from 'vue-final-modal';
import CatalogFilterModal from './CatalogFilterModal.vue';
import CatalogDownloadModal from './CatalogDownloadModal.vue';
import type { ProductListResult } from '~/types/api-schema';
import { useFilter } from '~/store/filter';
import { SORT } from '~/constants/filter'


const props = defineProps<{
    products: ProductListResult
}>()
const { resetFilter } = useFilter()
const { brand, maxPrice, minPrice, activeCategory } = storeToRefs(useFilter())
const route = useRoute()
const router = useRouter()
const sortValue = ref(SORT[0])

const sortChangeHandler = () => {
    if (SORT[sortValue.value.id + 1]) {
        sortValue.value = SORT[sortValue.value.id + 1]
    } else {
        sortValue.value = SORT[0]
    }
    router.push({
        path: '/catalog',
        query: {
            ...route.query,
            ordering: sortValue.value.value
        }
    })
}

const resetCurrentFilters = () => {
    resetFilter()
    router.push({
        path: '/catalog',
        query: {
            ...route.query,
            product_data__manufacturer: undefined,
            price_max: undefined,
            price_min: undefined,
            product_data__made_in: undefined,

        }
    })
}
const isResetFilter = computed(() => {
    return route.query.product_data__manufacturer || route.query.price_max || route.query.price_min

})
const { open: openFilterModal, close: closeFilterModal } = useModal({
    component: CatalogFilterModal,
    attrs: {
        onClose() {
            closeFilterModal()
        }
    }
})

const { open: openDowloadModal, close: closeDownloadModal } = useModal({
    component: CatalogDownloadModal,
    attrs: {
        onClose() {
            closeDownloadModal()
        }
    }
})
onMounted(() => {
    if (route.query.ordering) {
        const currentOrdering = SORT.find(el => el.value === route.query.ordering)
        if (currentOrdering) {
            sortValue.value = currentOrdering
        }
    }
})
</script>
<style lang="scss" scoped>
.catalog-list {

    // .catalog-list__header

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__back {
        display: none;
        transform: rotate(180deg);

        @include atMd {
            display: block;
        }
    }

    &__pagination {
        margin-top: 40px;
    }

    // .catalog-list__header-left

    &__header-left {
        display: flex;
        align-items: flex-end;
        gap: 16px;

        @include atMd {
            align-items: center;
        }
    }

    // .catalog-list__title

    &__title {
        color: $text;
        font-size: 30px;
        font-weight: 700;

        display: flex;
        align-items: center;
        gap: 6px;

        @include atMd {
            font-size: 16px;
        }
    }

    // .catalog-list__total

    &__total {
        color: rgba(44, 44, 44, 0.50);
        margin-bottom: 2px;

        @include atMd {
            font-size: 12px;
            margin-bottom: -2px;
        }
    }

    // .catalog-list__download

    &__download {
        width: 157px;
        height: 40px;
        padding: 0;

        @include atXl {
            display: none;
        }
    }

    // .catalog-list__filter

    &__filter {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &-badges {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        @include atMd {
            display: none;
        }


        &-mini {
            display: none;
            margin-top: 15px;

            @include atMd {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            &-sort {
                display: flex;
                align-items: center;
                gap: 10px;
                color: $additional;
                cursor: pointer;
            }

            &-options {
                display: flex;
                align-items: center;
                gap: 16px;

                :deep(svg) {
                    cursor: pointer;

                    path {
                        fill: #2C2C2C;
                        fill-opacity: 0.6;
                    }
                }
            }
        }
    }

    // .catalog-list__filter-info

    &__filter-info {
        display: flex;
        align-items: center;
        gap: 16px;

        @include atXl {
            display: none;
        }
    }

    // .catalog-list__filter-reset

    &__filter-reset {
        color: $additional;
        cursor: pointer;
    }

    // .catalog-list__filter-sort

    &__filter-sort {
        display: flex;
        align-items: center;
        gap: 16px;
        color: $text;
    }

    // .catalog-list__products

    &__products {
        margin-top: 30px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;

        @include atXXl {
            grid-template-columns: repeat(3, 1fr);
        }

        @include atXl {
            grid-template-columns: repeat(2, 1fr);
        }

        @include atMd {
            margin-top: 20px;
            gap: 12px;
        }

    }

    // .catalog-list__products-item

    &__products-item {}
}
</style>