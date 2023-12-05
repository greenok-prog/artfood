<template>
    <ContentBlockWrap title="Популярные категории">
        <CategorySlider :categories="data.results" />
    </ContentBlockWrap>
</template>
<script lang="ts" setup>
const { data } = await useFetch('/api/popular-categories')


</script>
<style lang="scss" scoped >
.popular-categories {
    padding-top: 120px;

}
</style>