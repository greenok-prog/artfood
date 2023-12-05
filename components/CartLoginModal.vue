<template>
    <VueFinalModal class="cart-login-modal"
        content-class="cart-login-modal__content"
        overlay-transition="vfm-fade" content-transition="vfm-fade">
        <span class="cart-login-modal__back" @click="emit('close')">
            <ProfileBackArrowSvg :w="12" :h="12" color="#1C80DC" /> Назад
        </span>
        <p class="cart-login-modal__title">
            Чтобы продолжить оформление заказа
            вам необходимо зарегистрироваться
        </p>
        <div class="cart-login-modal__actions">
            <NuxtLink to="/auth/login">
                <VBtn class="cart-login-modal__login">Войти</VBtn>
            </NuxtLink>
            <NuxtLink to="/auth/registration">
                <VBtn>Зарегистрироваться</VBtn>
            </NuxtLink>
        </div>
    </VueFinalModal>
</template>

<script lang="ts" setup>

import { VueFinalModal } from "vue-final-modal";

const emit = defineEmits(['close'])
</script>

<style lang="scss">
.cart-login-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;

    &__content {
        background: white;
        padding: 30px;
        width: 530px;
        border-radius: 24px;
        padding: 30px 39px 40px 40px;

        @include atMd {
            width: 100%;
            padding: 16px;
        }
    }

    // .cart-login-modal__back

    &__back {
        color: $additional;
        font-weight: 700;
    }

    // .cart-login-modal__title

    &__title {
        font-size: 18px;
        text-align: center;
        font-weight: 700;
        color: $text;
        margin-top: 10px;
    }

    // .cart-login-modal__actionst

    &__actions {
        display: flex;
        gap: 10px;
        margin-top: 20px;

        @include atSm {
            flex-direction: column;
        }

        a {
            width: 100%;
        }

        button {
            width: 100%;
            height: 50px;
            padding: 0;
        }
    }

    // .cart-login-modal__login

    &__login {
        background: white !important;
        border: 2px solid $additional !important;
        color: $additional !important;
    }
}
</style>