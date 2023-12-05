<template>
    <div class="product-counter">
        <button :disabled="modelValue === 1"
            @click="decrementProductCount">
            <CountRemoveSvg />
        </button>
        <span>{{ modelValue }}</span>
        <button :disabled="modelValue === max"
            @click="incrementProductCount">
            <CountAddSvg />
        </button>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    modelValue: number,
    max?: number
}>()

const emit = defineEmits(['increase', 'decrease'])


const incrementProductCount = () => {
    emit('increase')
}
const decrementProductCount = () => {
    emit('decrease')
}
</script>

<style lang="scss" scoped>
.product-counter {
    display: flex;
    align-items: center;
    gap: 16.5px;

    button {
        cursor: pointer;
        background: $additional;
        width: 30px;
        display: flex;
        border-radius: 6px;
        height: 30px;

        justify-content: center;
        align-items: center;

        &:disabled {
            opacity: 0.4;
        }

    }
}
</style>