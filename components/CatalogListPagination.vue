<script setup lang="ts">
import { useFilter } from '~/store/filter';
const props = defineProps<{
    productCount: number
}>()
const { setPage } = useFilter()
const onClickHandler = (page: number) => {
    setPage(page)
};

const currentPage = ref(1);

</script>

<template>
    <vue-awesome-paginate class="catalog-paginator"
        :total-items="productCount" :max-pages-shown="5"
        v-model="currentPage" :show-breakpoint-buttons="false"
        :on-click="onClickHandler" prev-button-content="Назад"
        next-button-content="Далее">

    </vue-awesome-paginate>
</template>

<style lang="scss">
.catalog-paginator {
    width: 100%;

    .back-button,
    .next-button {
        width: 140px;
        background: $additional;
        color: white;
        border-radius: 70px;
        flex-grow: 1;

        &:hover {
            background: $additional;
            color: white;
        }
    }
}

.pagination-container {

    column-gap: 10px;
    justify-content: center;
}

.paginate-buttons {
    min-width: 30px;
    height: 40px;
    padding: 10px;
    cursor: pointer;
    background-color: none;
    color: $text;


}

.paginate-buttons:hover {
    background-color: #d8d8d8;
}

.active-page {
    background-color: $additional;

    color: white;
}

.active-page:hover {
    background-color: #2988c8;
}
</style>