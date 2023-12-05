<template>
    <div class="category-dropdown">
        <div @click="openHandler" class="category-dropdown__value"
            :class="{ 'category-dropdown_active': isActiveCategory }">
            <p class="category-dropdown__value-item">{{ category.name }}
            </p>
            <ProfileNavbarIconSvg
                :class="{ 'category-dropdown__active': isOpened }" />
        </div>
        <div v-if="isOpened" class="category-dropdown__list">
            <NuxtLink class="category-dropdown__list-link"
                @click="onSelectCategory"
                :class="{ 'category-dropdown__list-link_active': isActiveSubcategory(subcategory.id) }"
                :to="`/catalog?subcategory=${subcategory.id}`"
                v-for="subcategory in category.subcategories"
                :key="subcategory.id">{{
                    subcategory.name }}</NuxtLink>

        </div>
    </div>
</template>


<script lang="ts" setup>
import { useFilter } from '~/store/filter';
import type { Category, SubCategoryProduct } from '~/types/api-schema';

const props = defineProps<{
    category: Category
}>()
const { setActiveCategory, setPage, resetFilter } = useFilter()
const isOpened = ref(false)
const openHandler = () => {
    isOpened.value = !isOpened.value
}
const route = useRoute()
const isActiveCategory = ref(false)
const isActiveSubcategory = (categoryId: number) => {
    return categoryId === Number(route.query.subcategory)
}
const routerQuery = computed(() => {
    return route.query.subcategory
})
const onSelectCategory = () => {
    setPage(1)
    resetFilter()

}

watch(routerQuery, () => {
    const category = route.query.subcategory
    if (category) {
        const active = props.category.subcategories.find(el => el.id === Number(category))
        if (active) {
            setActiveCategory(active.name)
            isActiveCategory.value = true
        } else {
            isActiveCategory.value = false
        }


    }
}, { immediate: true })

</script>


<style lang="scss" scoped>
.category-dropdown {

    // .category-dropdown__value
    &_active {
        background: #F1F3F8;

        :deep(svg) {
            path {
                stroke: $additional !important;
                stroke-opacity: 0.6 !important;
            }
        }

        p {
            color: $additional;
        }
    }

    &__value {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
        cursor: pointer;
        padding: 10px;
        border-radius: 8px;

        &-item {
            color: $text;
        }

        :deep(svg) {
            width: 16px;
            height: 16px;
            transition: all 0.1s ease-in-out;

            path {
                stroke: #2C2C2C;
                stroke-opacity: 0.4;
            }
        }
    }

    &__active {
        transform: rotate(90deg);
    }

    // .category-dropdown__list

    &__list {
        margin-top: 8px;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        &-link {
            color: $text;
            cursor: pointer;

            &:hover {
                color: $additional;
            }

            &_active {
                color: $additional;
            }
        }

    }
}
</style>