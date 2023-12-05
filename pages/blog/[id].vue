<template>
    <div class="blog-item">
        <div class="container">
            <PathHistory :path="['Главная', data?.theme]" />
            <PreviousPageLink class="blog-item__back" to="/blog" />
            <BlogInfoBlock :blog="data" class="blog-item__info" />
            <div class="blog-item__content">

                <BlogContent :blog="data"
                    class="blog-item__content-content" />
                <BlogInteresting class="blog-item__content-right" />
            </div>

        </div>
        <ContentBlockWrap class="blog-item__bottom"
            title="Вы недавно читали" :title-size="28">
            <BlogSlider />
        </ContentBlockWrap>
    </div>
    <ModalsContainer />
</template>
<script lang="ts" setup>
import { ModalsContainer } from 'vue-final-modal';
import type { Blog } from '~/types/api-schema';
const router = useRoute()
const { data } = useFetch<Blog>(`/api/blog/${router.params.id}`)


</script>
<style lang="scss" scoped>
.blog-item {
    margin-top: 50px;
    margin-bottom: 120px;

    @include atMd {
        margin-top: 25px;
    }

    &__back {
        display: none;

        @include atMd {
            display: flex;
        }
    }

    // .blog-item__content

    &__content {
        margin-top: 24px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 63px;

        &-right {
            @include atXl {
                min-width: 300px;
            }

            @include atLg {
                display: none;
            }
        }
    }

    &__bottom {
        margin-top: 120px;

        @include atXl {
            margin-top: 80px;
        }

        @include atMd {
            display: none;
        }
    }

    // .blog-item__info

    &__info {
        margin-top: 36px;

        @include atMd {
            margin-top: 20px;
        }

    }
}
</style>