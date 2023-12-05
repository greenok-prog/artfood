<template>
    <div class="blog-list">
        <div class="blog-list__item" v-for="card in list" :key="card.id">
            <BlogCard :data="card" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Blog } from '~/types/api-schema';

defineProps<{
    list: Blog[]
}>()
</script>
<style lang="scss" scoped>
.blog-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    @include atXl {
        grid-template-columns: repeat(3, 1fr);
    }

    @include atLg {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;

    }

    @include atMd {
        gap: 13px;
    }


    // .blog-list__item

    &__item {}
}
</style>