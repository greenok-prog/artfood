<template>
    <div class="product-reviews">
        <div class="product-reviews__top">
            <h4 class="product-reviews__title">Отзывы ({{ reviewsCount }})
            </h4>
            <div class="product-reviews__rating">{{ rating }} <span>
                    <StartSvg v-for="i in rating" />
                    <EmptyStartSvg v-for="i in 5 - rating" />
                </span></div>
        </div>
        <div class="product-reviews__list">
            <ProductDetailsReviewsItem v-for="review in reviews"
                :review="review" />
        </div>
        <VLink to="#" class="product-reviews__all">
            Еще отзывы
        </VLink>
        <div class="product-reviews__all-btn">
            <VBtn>Еще отзывы</VBtn>
        </div>


    </div>
</template>
<script lang="ts" setup>
import type { ReviewCreate } from '~/types/api-schema';

const props = defineProps<{
    reviews: ReviewCreate[],
    rating: number
}>()
const reviewsCount = computed(() => {
    return props.reviews.length
})


</script>
<style lang="scss" scoped>
.product-reviews {
    border-radius: 24px;
    background: #FFF;
    padding: 24px;

    @include atMd {
        padding: 0;
    }

    // .product-reviews__top

    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    // .product-reviews__title

    &__title {
        font-size: 24px;
        color: #444;
        font-weight: 700;
        text-transform: uppercase;
    }

    // .product-reviews__list

    &__list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 30px;
    }

    // .produtc-reviews__rating
    &__rating {
        display: flex;
        align-items: center;
        color: rgba(68, 68, 68, 0.40);
        font-size: 18px;
        font-weight: 700;
        gap: 10px;

        span {
            display: flex;
            align-items: center;
            gap: 9px;
        }
    }

    &__all {
        margin-top: 30px;

        @include atMd {
            display: none;
        }

        &-btn {
            display: none;
            margin-top: 60px;

            justify-content: center;

            button {
                width: 210px;
            }

            @include atMd {
                display: flex;
            }
        }
    }
}
</style>