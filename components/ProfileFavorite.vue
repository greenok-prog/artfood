<template>
    <div class="favorite">
        <div class="favorite__header">
            <h2>Список желаний ({{ store.favoriteCount }})</h2>
            <div class="favorite__header-right">
                <SearchInput v-model="searchValue" :history="false" />
                <VBtn>Скачать каталог</VBtn>
            </div>
        </div>
        <div class="favorite__list">
            <ProductCard :data="card" v-for="card in searchedCards" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useFavoriteStore } from '~/store/favorite';

const store = useFavoriteStore()
const { favorite } = storeToRefs(store)
const searchValue = ref('')
const searchedCards = computed(() => {
    if (favorite.value) {
        if (favorite.value.length) {
            return favorite.value.filter(el => el.name?.includes(searchValue.value))
        }
    }
})
store.setFavorite()
</script>
<style lang="scss" scoped>
.favorite {
    &__list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        margin-top: 22px;

        @include atXXl {
            grid-template-columns: repeat(2, 1fr);
        }

        @include atMd {
            gap: 13px;
        }
    }

    &__header {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 16px;

        h2 {
            @include atMd {
                display: none;
            }
        }

        @include atXXl {
            display: flex;
            flex-direction: column;
        }

        &-right {
            display: flex;
            align-items: center;
            gap: 16px;

            @include atMd {
                flex-direction: column;
                align-items: flex-start;
            }
        }



        .search-input {
            width: 100%;
            margin: 0;

            @include atXl {
                width: 100%;
            }
        }

        button {
            height: 40px;
            padding: 0;
            width: 200px;
            font-size: 16px;

            @include atMd {
                width: 160px;
            }



        }

    }
}
</style>

