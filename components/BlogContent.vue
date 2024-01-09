<template>
    <div class="blog-content">
        <h2 class="blog-content__title">{{ blog.theme }}</h2>
        <div class="blog-content__main">

            <p>
                {{ blog.text }}
            </p>

        </div>
        <div class="blog-content__actions">
            <NuxtLink to="/blog" class="blog-content__back">
                <BlogBackArrowSvg /> Назад
            </NuxtLink>
            <NuxtLink to="/blog" class="blog-content__back-mini">
                <ProfileNavbarIconSvg />
                Назад
            </NuxtLink>

            <!-- <button class="blog-content__share-mini" @click="open">
                <ShareSvg />
            </button> -->
            <!-- <div class="blog-content__share">
                Поделиться статьей:
                <span>
                    <ShareTgSvg />
                    <ShareWsSvg />
                </span>
            </div> -->
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useModal } from 'vue-final-modal';
import BlogShareModal from '~/components/BlogShareModal.vue';
import type { Blog } from '~/types/api-schema';
const props = defineProps<{
    blog: Blog
}>()
const { open, close } = useModal({
    component: BlogShareModal,
    attrs: {
        onClose() {
            close()
        }
    }
})
</script>
<style lang="scss" scoped>
.blog-content {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @include atMd {
        gap: 20px;
    }

    &__actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 40px;

        @include atMd {
            margin-top: 0;
        }
    }

    &__back {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #302E2A;
        font-weight: 400;

        @include atMd {
            display: none;
        }

        &-mini {
            display: none;
            align-items: center;
            gap: 6px;
            color: $additional;

            svg {
                transform: rotate(180deg);
            }

            @include atMd {
                display: flex;
            }
        }
    }

    &__like {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #302E2A;
        font-weight: 400;

        button {
            width: 64px;
            height: 64px;
            border-radius: 70px;
            background: $light-gray;
        }
    }

    &__share {
        display: flex;
        gap: 16px;
        align-items: center;
        color: #302E2A;
        font-weight: 400;

        @include atMd {
            display: none;
        }

        &-mini {
            display: none;
            width: 64px;
            height: 64px;
            border-radius: 70px;
            align-items: center;
            justify-content: center;
            background: $additional;

            :deep(svg) {
                width: 23px;
                height: 24px;

                path {
                    stroke: white;
                    fill: white;
                }
            }

            @include atMd {
                display: flex;
            }
        }

        span {
            display: flex;
            align-items: center;
            gap: 10px;
        }

    }

    // .blog-content__title

    &__title {
        color: $text;
        font-size: 40px;
        font-weight: 700;

        @include atMd {
            font-size: 24px;
        }
    }

    // .blog-content__main

    &__main {
        display: flex;
        flex-direction: column;
        gap: 24px;

        p {
            color: #302E2A;
            line-height: 145%;
            white-space: pre-wrap;


        }



    }


}
</style>