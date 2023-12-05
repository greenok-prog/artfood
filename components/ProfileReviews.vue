<template>
    <div class="profile-reviews" v-if="data">
        <h2>Мои отзывы</h2>
        <div class="profile-reviews__subtitle" v-if="data.results.length">
            <strong>{{ notReviewedCount }} товара ожидают оценки</strong>
            <span>Оставьте отзыв, чтобы помочь другим покупателям сделать
                выбор</span>
        </div>
        <div class="profile-reviews__waiting" v-if="data.results.length">
            <h3>Эти товары ожидают отзыва</h3>
            <div class="profile-reviews__waiting-list">
                <div class="profile-reviews__waiting-item"
                    v-for="item in data.results">
                    <div v-if="item.images[0]"
                        class="profile-reviews__waiting-image">
                        <img :src="item.images[0].image" alt="">
                    </div>
                    <p>{{ item.name }}</p>
                </div>
            </div>
            <VBtn @click="leaveReviewsHandler">Оставить отзыв</VBtn>
        </div>
        <div class="profile-reviews__past" v-if="reviews.results.length">
            <h3>Предыдущие отзывы</h3>
            <div class="profile-reviews__past-list">
                <div class="profile-reviews__past-item"
                    v-for="review in reviews.results">
                    <ProfileReviewItem :review="review" />
                </div>


            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const { data } = await useAuthFetch('/api/not-review', {
    method: 'get'
})
const { data: reviews } = await useAuthFetch('/api/user-reviews')





const notReviewedCount = computed(() => {
    if (data.value.results) {
        return data?.value.results.length
    }
})





const leaveReviewsHandler = () => navigateTo('/user/reviews/other')
</script>

<style lang="scss" scoped>
.profile-reviews {
    h2 {
        font-size: 30px;
        color: #2C2C2C;
        font-weight: 700;

        @include atMd {
            display: none;
        }
    }

    &__past {
        background-color: #fff;
        padding: 25px;
        margin-top: 35px;
        border-radius: 16px;

        &-item {
            &:last-child {
                border-bottom: none;
            }
        }

        &-list {
            display: flex;
            flex-direction: column;
            gap: 24px;
            margin-top: 24px;


        }

        h3 {
            color: #2C2C2C;
            font-size: 24px;
            font-weight: 700;

            @include atLg {
                font-size: 18px;
            }
        }
    }

    // .profile-reviews__subtitle

    &__subtitle {
        display: flex;
        flex-direction: column;
        gap: 3px;
        margin-top: 25px;

        strong {
            color: #2C2C2C;
            font-weight: 700;
        }

        span {
            color: rgba(44, 44, 44, 0.70);
        }
    }

    // .profile-reviews__waiting

    &__waiting {
        border-radius: 15px;
        background: white;
        padding: 25px;
        margin-top: 20px;

        button {
            margin-top: 24px;
            max-width: 210px;
        }

        h3 {
            font-size: 24px;
            color: #2C2C2C;
            font-weight: 700;

            @include atLg {
                font-size: 18px;
            }
        }
    }

    // .profile-reviews__waiting-list

    &__waiting-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        margin-top: 24px;

        @include atXl {
            grid-template-columns: repeat(2, 1fr);
        }

        @include atLg {
            grid-template-columns: 1fr;
        }
    }

    // .profile-reviews__waiting-item

    &__waiting-item {
        display: flex;
        flex-direction: column;
        gap: 14px;

        @include atLg {
            flex-direction: row;
        }

        p {
            font-size: 18px;
            color: $neutral;
            font-weight: 700;

            @include atLg {
                font-size: 14px;
            }
        }
    }

    // .profile-reviews__waiting-image

    &__waiting-image {
        width: 100%;
        height: 190px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        background: #F5F5F5;

        @include atLg {
            width: 80px;
            height: 100px;
        }

        img {
            max-height: 165px;
            width: auto;
            min-height: 100px;
            height: auto;
            object-fit: cover;
        }
    }
}
</style>