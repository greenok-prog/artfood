<template>
    <NuxtLink class="v-link"
        :class="{ 'v-link_underline': type === 'underline' }" :to="to">
        <slot />
    </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
    to: string,
    type?: 'underline' | 'default'
}>()

</script>

<style lang="scss" scoped>
.v-link {
    color: $additional;
    text-decoration: none;
    display: inline-flex;

    @include atMd {
        font-size: 14px;
    }

    &_underline {
        text-decoration: underline;
    }
}
</style>