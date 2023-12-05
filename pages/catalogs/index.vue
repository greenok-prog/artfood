<template>
  <div class="mcatalog">
    <h2 v-if="selectedCatalog || selectedCatalog"
      class="mcatalog__title-category">
      <ProfileNavbarIconSvg @click="onBack" />
      {{
        selectedCategory ?
        selectedCategory.name
        : selectedCatalog.name
      }}
    </h2>
    <h1 v-else class="mcatalog__title">Каталог</h1>
    <div>
      <div v-if="selectedCategory && selectedCatalog"
        class="mcatalog__items">
        <NuxtLink :to="`/catalog?subcategory=${subcategory.id}`"
          v-for="subcategory in selectedCategory.subcategories"
          :key="subcategory.id" class="mcatalog__items-item">
          <span>{{ subcategory.name }}</span>
          <ArrowRight />
        </NuxtLink>

      </div>

      <div v-else-if="selectedCatalog" class="mcatalog__items">
        <a v-for="category in selectedCatalog.categories"
          :key="category.id" @click="selectCategory(category)"
          class="mcatalog__items-item">
          <span>{{ category.name }}</span>
          <ArrowRight />
        </a>

      </div>
      <div v-else class="mcatalog__items">
        <a v-for="catalog in data.results" :key="catalog.id"
          @click="selectCatalog(catalog)" class="mcatalog__items-item">
          <span>{{ catalog.name }}</span>
          <ArrowRight />
        </a>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, watch } from "vue";
import { useNuxtApp } from "nuxt/app";
const { $viewport } = useNuxtApp();
const route = useRouter();

const { data } = await useFetch('/api/catalogs')
const selectedCatalog = ref(null)
const selectedCategory = ref(null)

const selectCatalog = (catalog) => {
  selectedCatalog.value = catalog
}
const selectCategory = (category) => {
  selectedCategory.value = category
}
const onBack = () => {
  if (selectedCategory.value) {
    selectedCategory.value = null
  } else {
    selectedCatalog.value = null
  }
}




watch($viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  if ($viewport.isGreaterOrEquals("tablet")) {
    route.push("/");
  }
});
onMounted(() => {
  if ($viewport.isGreaterOrEquals("tablet")) {
    route.push("/");
  }
});

</script>

<style lang="scss" scoped>
.mcatalog {
  font-family: "Cera Pro", sans-serif;
  padding: 10px;

  &__title {
    font-weight: 700;
    font-size: 24px;

    &-category {
      font-size: 16px;
      color: $text;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 7px;

      svg {
        transform: rotate(180deg);
      }
    }
  }

  &__items {
    margin-top: 20px;
    width: 100%;

    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 0 20px 0 #0000001f;
      padding: 20px 10px 20px 20px;
      border-radius: 10px;
      width: 100%;
      margin-bottom: 10px;
    }
  }
}
</style>
