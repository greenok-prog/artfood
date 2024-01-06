<template>
  <NuxtLink class="catalog-brands"
    :to="`/catalog/categories/${item.id}`">
    <img :src="item.image" alt="">
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
  item: any
}>()


</script>

<style lang="scss" scoped>
.catalog-brands {
  margin-bottom: 10px;
  width: 120px;
  height: 85px;
  display: flex;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.216);
  border-radius: 16px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
