<template>
    <div class="catalog-pagination">
        <VBtn :disabled="activePage === 1"
            class="catalog-pagination__back" @click="prevPageHandler">
            <span>Назад</span>
            <ProfileBackArrowSvg />
        </VBtn>
        <div class="catalog-pagination__list">
            <span class="catalog-pagination__item"
                @click="selectPageHandler(i)"
                :class="{ 'catalog-pagination__item_active': activePage === i }"
                v-for="i in pageCount">{{ i
                }}</span>

        </div>
        <VBtn :disabled="activePage === pageCount"
            class="catalog-pagination__next" @click="nextPageHandler">
            <span>Далее</span>
            <ProfileBackArrowSvg />
        </VBtn>
    </div>
</template>
<script lang="ts" setup>
import { useFilter } from '~/store/filter';

const props = defineProps<{
    productCount: number,

}>()
const { setPage } = useFilter()
const pageCount = computed(() => {
    return Math.ceil((props.productCount / 20))
})



const activePage = ref(1)
const nextPageHandler = () => {
    activePage.value++
    setPage(activePage.value)
}
const prevPageHandler = () => {
    activePage.value--
    setPage(activePage.value)
}
const selectPageHandler = (i: number) => {
    activePage.value = i
    setPage(i)
}

</script>
<style lang="scss" scoped>
.catalog-pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // .catalog-pagination__back



    // .catalog-pagination__list

    &__list {
        display: flex;

        p {
            color: #C4C6C2;
        }
    }

    // .catalog-pagination__item

    &__item {
        cursor: pointer;
        font-size: 18px;
        font-weight: 700;
        padding: 10px;
        color: $neutral;

        &-last,
        &-more {
            @include atXl {
                display: none;
            }
        }

        &_active {
            color: white;
            border-radius: 4px;
            background: $additional;

        }
    }

    &__back {
        :deep(svg) {}
    }

    // .catalog-pagination__next

    &__next,
    &__back {
        width: 140px;
        height: 40px;
        padding: 0;

        @include atMd {
            width: 34px;
            height: 34px;
            align-items: center;
            justify-content: center;
            display: flex;
            border-radius: 60px;
        }

        span {
            display: block;

            @include atMd {
                display: none;
            }
        }

        svg {
            display: none;

            @include atMd {
                display: block;
            }
        }
    }

    &__next {
        svg {
            transform: rotate(180deg);
        }
    }
}
</style>