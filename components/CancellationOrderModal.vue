<template>
    <VueFinalModal class="order-cancel-modal"
        content-class="order-cancel-modal__content"
        overlay-transition="vfm-fade" content-transition="vfm-fade">
        <h2 class="order-cancel-modal__title">Для отмены заказа обратитесь
            в службу поддержки</h2>
        <div class="order-cancel-modal__phone">
            <span>+7 747 245-43-99</span>
            <span>+7 771 722-94-29</span>
        </div>
        <span class="order-cancel-modal__subtitle">
            <p>
                Или заполните форму обратной связи и с вами свяжется
                наш менеджер для отмены заказа
            </p>
        </span>
        <form action="" class="order-cancel-modal__form">
            <BaseInput placeholder="Ваше имя" />
            <BaseInput placeholder="Телефон" />
            <BaseInput placeholder="Номер заказа" />
            <VBtn>Запросить отмену заказа</VBtn>
        </form>
    </VueFinalModal>
</template>

<script lang="ts" setup>
import { VueFinalModal } from "vue-final-modal";

</script>

<style lang="scss">
.order-cancel-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;

    &__content {

        max-width: 520px;
        padding: 30px;
        border-radius: 24px;
        background: white;
    }

    // .order-cancel-modal__title

    &__title {
        font-size: 24px;
        font-weight: 700;
        color: #2C2C2C;
        text-align: center;
    }

    // .order-cancel-modal__phone

    &__phone {
        width: 100%;
        color: #2C2C2C;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 24px;
        margin-bottom: 18px;
    }

    // .order-cancel-modal__subtitle

    &__subtitle {
        color: rgba(44, 44, 44, 0.70);
        padding-top: 18px;
        text-align: center;
        width: 100%;
    }

    // .order-cancel-modal__form

    &__form {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 14px;
    }
}
</style>