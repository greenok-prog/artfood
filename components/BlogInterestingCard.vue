<template>
    <div class="blog-card">
        <div class="blog-card__content">
            <img v-if="blog.images" :src="blog.images[0].image" alt="">
            <div class="blog-card__info">
                <span class="blog-card__date">
                    {{ formatDate(blog.date_created) }}
                </span>
                <p class="blog-card__title">{{ blog.theme }}</p>
                <p class="blog-card__description">{{ blog.text }}</p>
            </div>
        </div>
        <NuxtLink class="blog-card__more" :to="`/blog/${blog.id}`">Читать
        </NuxtLink>
    </div>
</template>
<script lang="ts" setup>
import type { Blog } from '~/types/api-schema';

const props = defineProps<{
    blog: Blog
}>()

</script>
<style lang="scss" scoped>
.blog-card {
    padding: 15px;
    border-radius: 24px;
    border: 1px solid #C4C6C2;
    background: #FFF;

    // .blog-card__content
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 24px;
        border: 1px solid #C4C6C2;

        background: #FFF;

        @include atXl {
            height: 200px;
        }
    }

    &__content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: flex-start;
        gap: 24px;
        margin-bottom: 13px;

        @include atXl {
            grid-template-columns: 1fr;
        }

    }

    // .blog-card__info

    &__info {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    // .blog-card__date

    &__date {
        color: $green;
        font-size: 14px;
    }

    // .blog-card__title

    &__title {
        font-weight: 700;
        color: $neutral;
        font-weight: 700;
    }

    // .blog-card__description

    &__description {
        color: $neutral;
        font-weight: 400;
    }

    // .blog-card__more

    &__more {
        color: $additional;

    }
}
</style>