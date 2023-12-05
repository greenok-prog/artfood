<template>
  <div class="catalog" v-if="catalogs.length">
    <div class="catalog-categories">
      <a class="catalog-categories__item"
        @click="setActiveCatalog(catalog)"
        :class="{ 'catalog-categories__item_active': activeCatalog.id === catalog.id }"
        v-for="catalog in catalogs" :key="catalog.id">
        <span class="catalog-categories__item-text">{{ catalog.name
        }}</span>
        <ArrowRight />
      </a>
    </div>
    <CatalogItemsUnits @closeModal="emit('closeModal')"
      :activeCatalog="activeCatalog" />
  </div>
</template>

<script lang="ts" setup>
import CatalogItemsUnits from "~/components/catalog/CatalogItemsUnits.vue";
import ArrowRight from "~/components/svg/ArrowRight.vue";
import type { ListCatalog } from "~/types/api-schema";
interface CatalogsResult {
  count: number,
  results: ListCatalog[]
}
const emit = defineEmits(['closeModal'])
const catalogs = ref<ListCatalog[]>([])
const activeCatalog = ref({})
const setActiveCatalog = (catalog: ListCatalog) => {
  activeCatalog.value = catalog
}
onMounted(async () => {
  const { data } = await useFetch<CatalogsResult>('/api/catalogs', {
    method: 'get'
  })
  if (data.value?.results) {
    catalogs.value = data.value?.results
    activeCatalog.value = data.value?.results[0]
  }

})
</script>

<style lang="scss" scoped>
.catalog {
  display: flex;
  justify-content: space-between;
  color: #2c2c2c;

  &-categories {
    background: #f9f9f9;
    margin-right: 20px;
    border-radius: 10px;
    font-size: 16px;
    padding: 8px;
    min-width: 250px;

    @include atLg {
      min-width: 150px;
      font-size: 14px;
    }

    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 16px;
      transition-duration: 200ms;
      padding: 16px;

      &_active {
        fill: $additional;
        color: $additional;
        cursor: pointer;
      }

      &:active {
        background-color: #f1f3f8;
      }

      &:hover {
        fill: $additional;
        color: $additional;
        cursor: pointer;
      }

      &-text {
        display: flex;
        max-width: 200px;
        flex-wrap: wrap;
      }
    }
  }
}
</style>
