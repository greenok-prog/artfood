<template>
    <div class="blog-info">
        <div v-if="blog.images[0]" class="blog-info__image">
            <img :src="blog.images[0].image" alt="">
        </div>
        <div class="blog-info__content">
            <div class="blog-info__content-info">
                <span class="blog-info__date">{{ date }}</span>

            </div>
            <!-- <div class="blog-info__content-share">
                Поделиться статьей: <span>
                    <ShareTgSvg />
                    <ShareWsSvg />
                </span>
            </div> -->
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { Blog } from '~/types/api-schema';
import { formatDate } from '~/utils/date'
const props = defineProps<{
    blog: Blog
}>()

const date = computed(() => {
    return formatDate(props.blog.date_created)
})
</script>
<style lang="scss" scoped>
.blog-info {
    &__image {
        width: 100%;
        height: 400px;

        img {
            border-radius: 20px;
            background: #D9D9D9;
            width: 100%;
            height: 100%;
            object-fit: cover;

        }

        @include atLg {
            height: 300px;
        }

        @include atMd {
            height: 220px;
        }
    }

    // .blog-info__content

    &__content {
        display: flex;
        margin-top: 16px;
        align-items: center;
        justify-content: space-between;
    }

    // .blog-info__content-info

    &__content-info {
        display: flex;
        align-items: center;
        gap: 30px;

        @include atMd {
            width: 100%;
            justify-content: space-between;
        }
    }

    &__right {
        display: flex;
        gap: 30px;
    }

    // .blog-info__date

    &__date {
        color: $green;
        font-weight: 400;
    }

    // .blog-info__watchs

    &__watchs {
        display: flex;
        align-items: center;
        gap: 10px;
        color: $text;
    }

    // .blog-info__likes

    &__likes {
        display: flex;
        align-items: center;
        gap: 10px;
        color: $text;
    }

    // .blog-info__content-share

    &__content-share {
        color: #302E2A;
        display: flex;
        font-weight: 400;
        align-items: center;

        @include atMd {
            display: none;
        }

        span {
            margin-left: 16px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }
}
</style>