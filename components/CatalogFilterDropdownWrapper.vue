<template>
    <div class="catalog-filter-dropdown">
        <div @click="openHandler" class="catalog-filter-dropdown__value">
            <p class="catalog-filter-dropdown__value-title"
                :style="{ fontSize: titleSize + 'px' }">{{ title }}</p>
            <ProfileNavbarIconSvg
                :class="{ 'catalog-filter-dropdown__active': isOpened }" />
        </div>
        <div v-if="isOpened" class="catalog-filter-dropdown__list">
            <slot></slot>
        </div>
    </div>
</template>


<script lang="ts" setup>
const props = defineProps<{
    title: string,
    titleSize?: number,
}>()
const isOpened = ref(false)
const openHandler = () => {
    isOpened.value = !isOpened.value
}
</script>


<style lang="scss" scoped>
.catalog-filter-dropdown {

    // .catalog-filter-dropdown__value

    &__value {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
        cursor: pointer;

        &-title {
            color: rgba(44, 44, 44, 0.50);
            text-transform: uppercase;
            font-weight: 700;

            @include atMd {
                font-size: 14px;
            }
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

    // .catalog-filter-dropdown__list

    &__list {
        margin-top: 10px;
        padding-bottom: 18px;



        span {
            color: $text;
            cursor: pointer;

            &:hover {
                color: $additional;
            }
        }
    }
}
</style>