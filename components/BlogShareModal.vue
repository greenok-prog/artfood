<template>
    <VueFinalModal class="blog-share-modal"
        content-class="blog-share-modal__content"
        overlay-transition="vfm-fade" content-transition="vfm-fade">
        <button class="blog-share-modal__close" @click="emit('close')">
            <ModalCloseSvg />
        </button>

        <p class="blog-share-modal__title">Поделиться статьей:</p>
        <div class="blog-share-modal__list">
            <button class="blog-share-modal__list-item">
                Telegram
                <ShareTgSvg />
            </button>
            <button class="blog-share-modal__list-item">
                WhatsApp
                <ShareWsSvg />
            </button>
        </div>
    </VueFinalModal>
</template>

<script lang="ts" setup>
import { VueFinalModal } from 'vue-final-modal';
const emit = defineEmits(['close'])
</script>

<style lang="scss">
.blog-share-modal {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    &__content {
        width: 100%;
        background: white;
        padding: 30px 24px 24px 24px;
        box-shadow: 0px 6px 40px 0px rgba(0, 0, 0, 0.24);
        border-radius: 14px 14px 0px 0px;
        position: relative;
    }

    // .blog-share-modal__close

    &__close {
        display: flex;
        width: 30px;
        height: 30px;
        padding: 8px;
        justify-content: center;
        align-items: center;

        position: absolute;
        right: 16px;
        top: 16px;
        background: $text-40;
        border-radius: 100px;
    }

    // .blog-share-modal__title

    &__title {
        width: 100%;
        text-align: center;
        color: $text;
        font-weight: 700;
    }

    // .blog-share-modal__list

    &__list {
        margin-top: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
    }

    // .blog-share-modal__list-item

    &__list-item {
        max-width: 156px;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.30);
        display: flex;
        padding: 10px;
        justify-content: center;
        align-items: center;
        gap: 14px;
        flex: 1 0 0;
        background: #FFF;
        color: $text-80;
    }
}
</style>