<template>
    <div class="review" v-if="product">
        <div class="review__inner">
            <div class="review__image" v-if="product.images.length">
                <img :src="product.images[0].image" alt="">
            </div>
            <div class="review__content">
                <h4 class="review__content-name">{{ product.name }}</h4>
                <div class="review__content-rating">
                    <span>Поставьте оценку</span>

                    <nuxt-rating :read-only="false" :ratingValue="0"
                        rating-size="24px"
                        @rating-selected="(v) => rating = v" />

                </div>

                <div class="review__content-message">
                    <textarea v-model="text"
                        placeholder="Напишите здесь свой отзыв" name=""
                        id=""></textarea>
                </div>
            </div>

        </div>
        <div
            class=" review__content-message review__content-message_mini">
            <textarea v-model="text"
                placeholder="Напишите здесь свой отзыв" name=""
                id=""></textarea>
        </div>
        <FormError :error-message="error" />

        <div class="review__action">
            <VBtn @click="sendReview" class="review__button">Оставить
                отзыв</VBtn>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useAuthStore } from '~/store/auth';
import type { ListProduct } from '~/types/api-schema';


const props = defineProps<{
    product: ListProduct
}>()
const rating = ref(0)
const text = ref('')
const error = ref('')
const user = useAuthStore()
const sendReview = async () => {
    if (!text.value || !rating.value) {
        error.value = 'Заполните обязательные поля'
        return
    }
    const { data } = await useAuthFetch('/api/review-leave', {
        method: 'post',
        body: {

            review_text: text.value,
            "product": props.product.id,
            count_stars: rating.value,
            user: user.user.email
        }
    })


}
</script>
<style lang="scss" scoped>
.review {
    &__inner {
        display: flex;
        align-items: flex-start;
        gap: 30px;

        @include atLg {
            gap: 12px;
        }
    }

    &__action {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;

    }

    &__button {
        width: 210px;
        height: 60px;
        float: right;
    }

    position: relative;
    // .review__image

    &__image {
        width: 150px;
        height: 185px;
        border-radius: 15px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            height: 100%;
        }

        @include atLg {
            height: 90px;
            width: 90px;
        }


    }

    // .review__content

    &__content {
        display: flex;
        flex-direction: column;
        width: 100%;

    }

    // .review__content-name

    &__content-name {
        font-size: 18px;
        font-weight: 700;
        color: $neutral;

        @include atLg {
            font-size: 14px;
        }
    }

    // .review__content-rating

    &__content-rating {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-top: 12px;

        @include atLg {
            font-size: 12px;
        }

        span {
            color: rgba(68, 68, 68, 0.60);

        }

        div {
            display: flex;
            align-items: center;
            gap: 3px;
        }
    }

    // .review__content-message

    &__content-message {
        margin-top: 9px;

        @include atLg {
            display: none;
        }

        &_mini {
            display: none;

            @include atLg {
                display: block;
            }
        }

        textarea {
            min-height: 120px;
            width: 100%;
            border: none;
            padding: 16px;
            border-radius: 12px;
            background: #F4F4F4;
            font-size: 16px;
            resize: none;
            outline: none;

            @include atLg {
                font-size: 12px;
            }

            &::placeholder {
                color: rgba(68, 68, 68, 0.40);

                @include atLg {
                    font-size: 12px;
                }

            }

        }
    }
}
</style>