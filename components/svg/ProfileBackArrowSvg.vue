<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="w ? w : 12"
        :height="h ? h : 13" viewBox="0 0 12 13" :fill="'none'">
        <path d="M7.5 10.25L3.75 6.5L7.5 2.75"
            :stroke="color ? color : 'white'" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>

<script lang="ts" setup>
defineProps<{
    color?: string,
    w?: number | string,
    h?: number | string
}>()

</script>