<template>
    <div class="blog-block" v-if="data">
        <ContentBlockWrap title="Блог" more-text="Все статьи"
            moreLink="/blog">
            <div class="blog-block__list">
                <BlogCard :data="item" v-for="item in data?.results" />
            </div>
        </ContentBlockWrap>

    </div>
</template>
<script lang="ts" setup>
import type { Blog } from '~/types/api-schema';

const { data } = await useFetch<Blog[]>('/api/blog-list')

</script>

<style lang="scss" scoped>
.blog-block {
    margin-top: 100px;

    &__header {
        display: flex;
        align-items: flex-end;
        gap: 35px;

        h3 {
            font-size: 40px;
            font-weight: 700;
        }

        a {
            text-decoration: none;
            color: $additional;
            margin-bottom: 7px;

        }
    }

    &__list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 30px;
        margin-top: 40px;
        align-items: flex-start;

        @include atXl {
            grid-template-columns: 1fr 1fr 1fr;
        }

        @include atMd {
            grid-template-columns: 1fr 1fr;
        }

        @include atSm {
            grid-template-columns: 1fr;
        }
    }
}
</style>