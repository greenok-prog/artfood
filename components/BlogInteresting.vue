<template>
    <div class="blog-interesting">
        <h4 class="blog-interesting__title">Интересное для вас</h4>
        <div class="blog-interesting__list">
            <BlogInterestingCard v-for="blog in blogs" :key="blog.id"
                :blog="blog" />

        </div>
    </div>
</template>
<script lang="ts" setup>
import type { Blog } from '~/types/api-schema';

const props = defineProps<{
    blogs: Blog[]
}>()

</script>
<style lang="scss" scoped>
.blog-interesting {

    // .blog-interesting__title

    &__title {
        color: #312F30;
        font-size: 26px;
        font-weight: 700;
    }

    // .blog-interesting__list

    &__list {
        margin-top: 24px;
        gap: 14px;
        display: flex;
        flex-direction: column;
    }

}
</style>