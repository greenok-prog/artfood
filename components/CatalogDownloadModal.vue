<template>
    <VueFinalModal class="catalog-download-modal"
        content-class="catalog-download-modal__content"
        overlay-transition="vfm-fade" content-transition="vfm-fade">
        <button class="catalog-download-modal__close"
            @click="emit('close')">
            <ModalCloseSvg />
        </button>
        <p class="catalog-download-modal__title">
            Скачайте каталог
        </p>
        <VBtn class="catalog-download-modal__button">Скачать каталог
            <DownloadSvg />
        </VBtn>
    </VueFinalModal>
</template>

<script lang="ts" setup>
import { VueFinalModal } from 'vue-final-modal'

const emit = defineEmits(['close'])
</script>

<style lang="scss">
.catalog-download-modal {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    &__content {
        width: 100%;
        background: white;
        padding: 30px 24px 24px;
        box-shadow: 0px 6px 40px 0px rgba(0, 0, 0, 0.24);
        border-radius: 14px 14px 0px 0px;
        position: relative;
    }

    // .catalog-download-modal__close

    &__close {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 16px;
        top: 16px;
        border-radius: 100px;
        background: $text-40;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    // .catalog-download-modal__title

    &__title {
        color: $text;
        font-weight: 700;
        text-align: center;
    }

    // .catalog-download-modal__button

    &__button {
        margin-top: 14px;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
    }
}
</style>