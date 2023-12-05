<template>
    <button class="v-btn"
        :class="{ 'v-btn_outlined': variant === 'outlined' }">
        <slot />
    </button>
</template>
<script lang="ts" setup>
const props = withDefaults(defineProps<{
    variant?: 'base' | 'outlined'
}>(), {
    variant: 'base'
})
</script>
<style lang="scss" scoped>
.v-btn {
    border-radius: 70px;
    background: #4D9DE7;
    height: 60px;
    padding: 20px 34px;
    width: 100%;
    color: white;
    border: none;
    cursor: pointer;

    :deep(svg) {
        path {
            stroke: white;
        }
    }

    &:disabled {
        background: #F1F3F8;
        color: #737781;
        cursor: default;

        :deep(svg) {
            path {
                stroke-opacity: 0.4;
                stroke: $text;
            }
        }
    }

    &_outlined {
        border: 2px solid $additional;
        color: $additional;
        background: white;
    }
}
</style>