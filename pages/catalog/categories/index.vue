<template>
    <div class="container">
        <div class="categories">
            <PathHistory class="categories__path"
              :path="[
                {name:'Главная', url: '/'} ,
                {name:'Категории', url: '/catalog/categories'}
              ]" 
            />
            <h2 class="categories__title">Категории</h2>
            <CategoryList class="categories__list"
                :categories="data.results" />
        </div>
    </div>
</template>
<script lang="ts" setup>
const { data } = await useFetch('/api/category-list')


</script>
<style lang="scss" scoped>
.categories {
    padding-top: 38px;
    padding-bottom: 120px;

    @include atMd {
        padding-bottom: 80px;
        padding-top: 28px;
    }


    // .categories__title

    &__title {
        margin-top: 38px;
        font-size: 30px;
        font-weight: 700;
        color: $text;

        @include atMd {
            font-size: 24px;
            margin-top: 20px;
        }
    }

    &__list {
        margin-top: 30px;

        @include atMd {
            margin-top: 20px;
        }
    }
}
</style>