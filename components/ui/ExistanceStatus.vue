<template>
    <div class="existance-status"
        :class="{ 'existance-status_exist': existance }">
        {{ existance ? 'В наличии' : 'Нет в наличии' }}
    </div>
</template>


<script lang="ts" setup>
const props = defineProps<{
    existance: boolean
}>()

</script>

<style lang="scss" scoped>
.existance-status {
    font-size: 14px;
    color: $warning;

    &_exist {
        color: $green;
    }
}
</style>

