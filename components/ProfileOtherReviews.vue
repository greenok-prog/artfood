<template>
    <div class="other-reviews">
        <VLink class="other-reviews__back" to="/user/reviews">
            <ProfileBackArrowSvg w="12" h="12" color="#1C80DC"
                class="other-reviews__back-arrow" />Назад
        </VLink>
        <div class="other-reviews__content" v-if="data">
            <h2>Напишите отзыв о товарах</h2>
            <div class="other-reviews__list">
                <ReviewLeaveItem :product="product"
                    v-for="product in data.results" />

            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const { data } = await useAuthFetch('/api/not-review', {
    method: 'get'
})

</script>
<style lang="scss" scoped>
.other-reviews {

    // .other-reviews__back

    &__back {
        display: flex;
        align-items: center;
        gap: 6px;

        &-arrow {
            display: none;
            margin-top: 2px;

            @include atMd {
                display: block;
            }
        }
    }

    // .other-reviews__content

    &__content {
        margin-top: 34px;
        padding: 24px;
        border-radius: 16px;
        background: #FFF;

        @include atLg {
            padding: 16px;
            margin-top: 20px;
        }

        h2 {
            color: #2C2C2C;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;

            @include atLg {
                font-size: 24px;
            }
        }
    }

    // .other-reviews__list

    &__list {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-top: 24px;
    }
}
</style>