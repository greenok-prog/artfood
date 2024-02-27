<template>
    <div class="container">
        <PathHistory class="category__path"
            :path="[
              {name:'Главная', url: '/'}, 
              {name:'Категории', url: '/catalog/categories'}, 
              {name: data.name, url: `/catalog/categories/${route.params.id}`},
            ]" 
        />
        <div class="category">
            <NuxtLink to="/catalog/categories" class="category__back">
                <ProfileNavbarIconSvg />
                Категории
            </NuxtLink>
            <div class="category__right">
                <h3 class="category__name">{{ data?.name }}</h3>
                <div class="category__list">
                    <div class="category__list-item"
                        v-for="category in data?.subcategories">
                        <CategoryListItem :category="category" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
import type { SubCategoryProduct } from '~/types/api-schema';

interface ResponseData {
    name: string,
    subcategories: SubCategoryProduct[]
}
const route = useRoute()
const { data } = await useFetch<ResponseData>(() => `/api/category/${route.params.id}`)
console.log(data.value);


</script>
<style lang="scss" scoped>
.category {
    margin-top: 38px;
    display: flex;
    align-items: flex-start;
    gap: 30px;
    padding-bottom: 120px;

    @include atMd {
        flex-direction: column;
        padding-bottom: 80px;
        margin-top: 24px;
    }

    &__path {
        margin-top: 38px;

        @include atMd {
            margin-top: 28px;
        }
    }

    // .category__back

    &__back {
        display: flex;
        align-items: center;
        padding: 16px;
        border-radius: 14px;
        background: #F9F9F9;
        width: 250px;
        gap: 3px;
        color: $text;
        font-weight: 700;

        :deep(svg) {
            transform: rotate(180deg);

            path {
                stroke: #737781;
            }
        }
    }

    // .category__right

    &__right {
        width: 100%;
    }

    // .category__name

    &__name {
        color: $text;
        font-size: 30px;
        font-weight: 700;

        @include atMd {
            font-size: 24px;
        }
    }

    // .category__list

    &__list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        margin-top: 30px;

        @include atXl {
            grid-template-columns: repeat(3, 1fr);
        }

        @include atLg {
            gap: 20px;
        }

        @include atMd {
            grid-template-columns: repeat(2, 1fr);
            gap: 13px;
            margin-top: 20px;
        }
    }

    // .category__list-item

    &__list-item {}
}
</style>