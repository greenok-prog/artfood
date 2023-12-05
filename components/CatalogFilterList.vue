<template>
    <div class="catalog-filter-list">
        <span class="catalog-filter-list__item"
            :class="{ 'catalog-filter-list__item_active': activeItem ? activeItem.id === item.id : false }"
            @click="emit('onChange', item)" v-for="item in props.items"
            :key="item.id">
            {{ item.name }}
        </span>
    </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['onChange', 'isActive'])
const activeLink = ref(null)

const props = defineProps<{
    items: { name: string, id: number }[],
    activeItem: { name: string, id: number }
}>()



</script>

<style lang="scss" scoped>
.catalog-filter-list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__item {
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
</style>