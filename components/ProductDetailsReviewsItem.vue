<template>
    <div class="reviews-item">
        <div class="reviews-item__left">
            <div>
                <h4 class="reviews-item__name">{{ review.user.email }}
                </h4>
                <span class="reviews-item__rating">
                    <StartSvg v-for="i in review.count_stars" />
                    <EmptyStartSvg v-for="i in 5 - review.count_stars" />
                </span>
            </div>
            <span class="reviews-item__date">{{ createdDate }}</span>
        </div>
        <div class="reviews-item__right">
            {{ review.review_text }}
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { ReviewCreate } from '~/types/api-schema';
const props = defineProps<{
    review: ReviewCreate
}>()
const createdDate = computed(() => {
    return new Date(props.review.date_created).toLocaleDateString('ru')
})



</script>
<style lang="scss" scoped>
.reviews-item {
    padding: 24px;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.10);
    background: #FFF;
    display: grid;
    grid-template-columns: 1fr 3fr;

    align-items: flex-start;
    gap: 30px;

    @include atMd {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    // .reviews-item__left

    &__left {
        display: flex;
        flex-direction: column;

        @include atMd {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: flex-start;
        }
    }

    // .reviews-item__name

    &__name {
        font-size: 18px;
        font-weight: 700;
        color: #444;
    }

    // .reviews-item__rating

    &__rating {
        display: flex;
        align-items: center;
        gap: 9px;
        margin-top: 8px;
    }

    // .reviews-item__date

    &__date {
        color: rgba(68, 68, 68, 0.40);
        margin-top: 26px;

        @include atMd {
            margin-top: 0;
        }
    }

    // .reviews-item__right

    &__right {
        color: #444;
        line-height: 145%;
    }
}
</style>