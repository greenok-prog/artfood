<template>
    <div class="search-history">
        <div class="search-history__header">
            <p class="search-history__title">История</p>
            <span class="search-history__reset"
                @click="emit('clear')">Очистить</span>
        </div>
        <div class="search-history__list" v-for="(item, index) in items"
            :key="index">
            <div class="search-history__list-item">
                <span @click="selectSearchValue(item)">{{ item }}</span>
                <ModalCloseSvg @click="emit('removeItem', item)" />
            </div>

        </div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
    items: string[],
}>()
const emit = defineEmits(['removeItem', 'clear'])
const selectSearchValue = (v: string) => {
    return navigateTo(`/catalog?search=${v}`)
}

</script>
<style lang="scss" scoped>
.search-history {
    display: flex;
    flex-direction: column;
    padding: 16px;
    background: white;
    box-shadow: 0px 4px 34px 0px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    width: 100%;
    z-index: 12;
    // .search-history__header

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    // .search-history__title

    &__title {
        font-weight: 700;
        font-size: 18px;
        color: $text;
    }

    // .search-history__reset

    &__reset {
        color: $additional;
        cursor: pointer;
    }

    // .search-history__list

    &__list {
        margin-top: 14px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    // .search-history__list-item

    &__list-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.10);


        &:last-child {
            border: none;
        }

        span {
            cursor: pointer;
            color: rgba(44, 44, 44, 0.70);
        }

        :deep(svg) {
            cursor: pointer;

            path {
                fill: #929292;
            }
        }
    }
}
</style>