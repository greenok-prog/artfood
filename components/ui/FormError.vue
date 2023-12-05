<template>
    <p class="form-error" v-if="errorMessage.length">
        {{ errorMessage }}
    </p>
</template>

<script lang="ts" setup>
const props = defineProps<{
    errorMessage: string,

}>()

</script>

<style lang="scss" scoped>
.form-error {
    font-size: 14px;
    color: $warning;
}
</style>