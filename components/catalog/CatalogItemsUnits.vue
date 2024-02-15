<template>
  <div class="catalog-items__wrapper">
    <div class="catalog-items">
      <div class="catalog-items__title">
        <h3 class="catalog-items__title-main">{{ activeCatalog.name }}
        </h3>
        <!-- <p class="catalog-items__title-grey">2938 товаров</p> -->
      </div>
      <div class="catalog-items__list">
        <div v-for="(el, index) in activeCatalog.categories"
          :key="index">

          <NuxtLink @click="emit('closeModal')"
            :to="`/catalog?subcategory__category=${el.id}`"
            class="catalog-items__list-title">{{ el.name }}</NuxtLink>
          <p @click="onSelectSubcategory(el.id, subcategory.id)"
            v-for="subcategory in el.subcategories"
            class="catalog-items__list-unit">{{ subcategory.name }}
          </p>
        </div>
      </div>
    </div>
    <div>
      <CatalogBrands
        v-for="item in activeCatalog.categories.slice(0, 4)"
        :item="item" :key="item.id" />
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  activeCatalog: any
}>()
const emit = defineEmits(['closeModal'])
const router = useRouter()
const onSelectSubcategory = (category: number, subcategory: number) => {
  emit('closeModal')
  router.push(`/catalog?subcategory=${subcategory}&subcategory__category=${category}`)
}


</script>

<style lang="scss" scoped>
.catalog-items {
  max-width: 80vh;
  max-height: 80vh;
  min-width: 900px;

  @include atXXl {
    min-width: 700px;
  }

  @include atXl {
    min-width: 500px;
  }

  @include atLg {
    min-width: 400px;
  }

  &__wrapper {
    display: flex;
    background: #f9f9f9;
    border-radius: 10px;
    padding: 16px;
    overflow: auto;
  }

  &__title {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    &-main {
      font-weight: 700;
      font-size: 30px;
      margin-right: 16px;
    }

    &-grey {
      color: #2c2c2c80;
    }
  }

  &__list {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-right: 6px;

    &-title {
      font-size: 16px;
      color: #2c2c2c;
      font-weight: 700;
      margin-bottom: 10px;
    }

    &-unit {
      color: #2c2c2cb2;
      margin-bottom: 6px;
      cursor: pointer;
    }
  }
}
</style>
