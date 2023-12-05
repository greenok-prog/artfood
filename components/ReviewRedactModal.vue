<template>
    <VueFinalModal class="review-redact-modal"
        content-class="review-redact-modal__content"
        overlay-transition="vfm-fade" content-transition="vfm-fade">
        <span class="review-redact-modal__link" @click="emit('confirm')">
            Назад
        </span>
        <div class="review-redact-modal__header">

            <div class="review-redact-modal__title">
                <h2>Редактирование отзыва</h2>
            </div>
        </div>
        <div class="review-redact-modal__item">
            <ReviewChange :review="review"
                @closeModal="emit('confirm')" />
        </div>

    </VueFinalModal>
</template>

<script lang="ts" setup>
import { VueFinalModal } from "vue-final-modal";
const props = defineProps<{
    review: any
}>()
const emit = defineEmits(['confirm'])

</script>

<style lang="scss">
.review-redact-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;

    &__item {
        margin-top: 24px;
    }

    &__content {
        width: 100%;
        max-width: 1090px;
        padding: 30px;
        border-radius: 24px;
        background: white;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    &__header {
        display: flex;

    }

    &__link {
        position: absolute;
        left: 25px;
        top: 31px;
        color: $additional;
        cursor: pointer;

        @include atMd {
            position: static;
        }
    }

    // .order-cancel-modal__title

    &__title {

        text-align: center;
        width: 100%;

        h2 {
            font-size: 24px;
            font-weight: 700;
            color: #2C2C2C;
        }
    }


}
</style>