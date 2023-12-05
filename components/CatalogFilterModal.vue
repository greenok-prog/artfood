<template>
    <VueFinalModal class="catalog-filter-modal"
        content-class="catalog-filter-modal__content"
        overlay-transition="vfm-fade" content-transition="vfm-fade">

        <div class="content">
            <button class="catalog-filter-modal__close"
                @click="emit('close')">
                <ModalCloseSvg />
            </button>
            <p class="catalog-filter-modal__title">Фильтр</p>
            <CatalogFilterBlock @closeModal="emit('close')"
                class="catalog-filter-modal__filter" />
            <!-- <VBtn class="atalog-filter-modal__button">Применить</VBtn> -->

        </div>
    </VueFinalModal>
</template>

<script lang="ts" setup>
import { VueFinalModal } from 'vue-final-modal'

const emit = defineEmits(['close'])
</script>

<style lang="scss">
.catalog-filter-modal {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 100vh;

    &__content {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;


        height: 100vh;
        overflow: auto;


        .content {
            padding: 30px 16px 16px;
            width: 100%;
            position: relative;
            overflow: auto;
            background: white;
            border-radius: 14px 14px 0px 0px;
            box-shadow: 0px 6px 40px 0px rgba(0, 0, 0, 0.24);

        }

    }

    // .catalog-filter-modal__close

    &__close {
        border-radius: 100px;
        background: $text-40;
        position: absolute;
        right: 16px;
        top: 16px;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    // .catalog-filter-modal__title

    &__title {
        color: $text;
        font-weight: 700;
        text-align: center;
    }

    // .catalog-filter-modal__filter

    &__filter {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    &__button {
        margin-top: 20px;
    }
}
</style>