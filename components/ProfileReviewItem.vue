<template>
    <div class="profile-review">
        <div class="profile-review__image">
            <img v-if="review.images[0]" :src="review.images[0].image"
                alt="">
        </div>
        <div class="profile-review__content">
            <h4>{{ review.name }}</h4>
            <div class="profile-review__rating">
                <StartSvg v-for="i in review.count_star" />
                <EmptyStartSvg v-for="s in 5 - review.count_star" />
            </div>
            <p>{{ review.review_text }}</p>
            <VLink class="profile-review__link" @click="open" to="">
                Редактировать</VLink>
        </div>
    </div>
    <ModalsContainer />
</template>
<script lang="ts" setup>
import { useModal, ModalsContainer } from 'vue-final-modal'
import ReviewRedactModal from '~/components/ReviewRedactModal.vue'
const props = defineProps<{
    review: {
        name: string,
        count_star: number,
        id_review: number,
        review_text: string,

    }
}>()

const { open, close } = useModal({
    component: ReviewRedactModal,
    attrs: {
        review: props.review,
        onConfirm() {
            close()
        },
    }
})

</script>
<style lang="scss" scoped>
.profile-review {
    display: flex;
    gap: 20px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.30);

    @include atLg {
        flex-direction: column;

    }

    // .profile-review__image

    &__image {
        border-radius: 16px;
        background: #F5F5F5;
        height: 120px;
        min-width: 91px;

        @include atLg {
            width: 91px;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }

    &__link {
        cursor: pointer;
    }

    // .profile-review__content

    &__content {
        h4 {
            font-size: 18px;
            color: $neutral;
            font-weight: 700;
        }

        p {
            margin-top: 14px;
            color: rgba(68, 68, 68, 0.80);
        }

        a {
            margin-top: 14px;
            font-weight: 700;
        }
    }

    // .profile-review__rating

    &__rating {
        margin-top: 6px;
        display: flex;
        gap: 4px;

        svg {
            width: 16px;
            height: 16px;
        }
    }
}
</style>