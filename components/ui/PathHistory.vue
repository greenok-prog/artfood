<template>
    <div class="path-history">
        <HomeSvg /> <span v-for="item in path" :key="item">
            <PathArrowSvg />
            <p>{{ item }}</p>
        </span>
    </div>
</template>
<script lang="ts" setup>

const props = defineProps<{
  path: string[]
}>();

</script>
<style lang="scss" scoped>
.path-history {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    color: #737781;
    font-size: 14px;


    span {
        display: flex;
        align-items: center;
        gap: 3px;

    }
}
</style>