<template>
    <div class="blog-card">

        <div class="blog-card__content">
            <img v-if="data.images[0]" :src="data.images[0].image" alt=""
                class="blog-card__image" loading="lazy">
            <span class="blog-card__publish">{{ createdDate }}</span>
            <p class="blog-card__title">{{ data.theme }}
            </p>
            <p v-html="data.text"></p>

        </div>
        <div class="blog-card__actions">
            <NuxtLink :to="`/blog/${data.id}`">Читать</NuxtLink>
            <NuxtLink :to="`/blog/${data.id}`" aria-label="Read more"
                class="blog-card__btn">
                <SliderArrowSvg />
            </NuxtLink>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { Blog } from '~/types/api-schema';
import { formatDate } from '~/utils/date';

const props = defineProps<{
    data: Blog
}>()

const createdDate = computed(() => {
    return formatDate(props.data.date_created)
})


</script>
<style lang="scss" scoped>
.blog-card {
    padding: 15px;
    border-radius: 24px;
    border: 1px solid #C4C6C2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include atMd {
        padding: 10px;
    }

    &__image {
        width: 100%;
        height: 221px;
        object-fit: cover;
        border-radius: 24px;
        border: 1px solid #C4C6C2;
        background: #FFF;
        margin-bottom: 24px;

        @include atMd {
            border-radius: 14px 14px 0px 0px;
            margin-bottom: 0px;
            height: 140px;
        }
    }

    &__content {
        @include atMd {}
    }

    &__publish {
        color: $green;
        font-size: 14px;

    }

    h4 {
        font-weight: 700;
        line-height: 145%;
        margin-top: 10px;
        font-size: 16px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        /* number of lines to show */
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;

        @include atMd {
            font-size: 14px;
            margin-top: 5px;
        }

    }

    p {
        margin-top: 10px;
        font-weight: 400;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        /* number of lines to show */
        line-clamp: 3;
        -webkit-box-orient: vertical;

        @include atMd {
            font-size: 14px;

        }


    }

    &__actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 14px;

        @include atMd {
            margin-top: 10px;
        }

        a {
            text-decoration: none;
            color: $additional;
        }
    }

    &__btn {

        width: 50px;
        height: 50px;
        background: $additional;
        border-radius: 50px;
        transform: rotate(130deg);
        display: flex;
        align-items: center;
        justify-content: center;

        @include atMd {
            width: 40px;
            height: 40px;
        }

        :deep(svg) {
            path {
                stroke: white;
            }
        }
    }
}
</style>