<template>
  <div class="catalog-brands">
    <svg
      width="120"
      height="85"
      viewBox="0 0 120 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="120" height="85" rx="13" fill="white" />
      <rect
        x="0.5"
        y="0.5"
        width="119"
        height="84"
        rx="12.5"
        stroke="black"
        stroke-opacity="0.2"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "CatalogBrands",
});
</script>

<style lang="scss" scoped>
.catalog-brands {
  margin-bottom: 10px;
}
</style>
