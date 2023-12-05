<template>
    <VueFinalModal class="burger-navbar__modal"
        content-class="burger-navbar" overlay-transition="vfm-fade"
        content-transition="vfm-fade">

        <div class="burger-navbar__top">
            <Logo type="dark" />
            <BurgerCloseSvg @click="emit('close')" />
        </div>
        <div class="burger-navbar-lang">
            <span class="active-lang burger-navbar-lang-item">Ru
            </span>
            <div class="burger-navbar-lang-line"></div>
            <span class="burger-navbar-lang-item">Kaz</span>
        </div>
        <div class="burger-navbar-city">
            <NavigationSvg />
            Алматы
        </div>
        <div class="burger-navbar__content">
            <div class="burger-navbar__block">
                <div class="burger-navbar__list">
                    <NuxtLink to="#">О нас</NuxtLink>
                    <NuxtLink to="/return-policy">Условия возврата
                    </NuxtLink>
                    <NuxtLink to="/contacts">Контакты</NuxtLink>

                </div>
            </div>
            <div class="burger-navbar__block">
                <div class="burger-navbar__list">
                    <NuxtLink to="/delivery-and-pickup">Доставка и
                        самовывоз</NuxtLink>
                    <NuxtLink to="#">Оплата</NuxtLink>
                    <NuxtLink to="#">Возврат</NuxtLink>
                    <NuxtLink to="/faq">Частые вопросы</NuxtLink>
                </div>
            </div>
            <div class="burger-navbar__block">
                <div class="burger-navbar__addres">
                    <p>Казахстан, г.Алматы</p>
                    <div>
                        <span>Проспект Райымбека 214/1, </span>
                        <span>головной офис</span>
                    </div>
                </div>
            </div>
            <div class="burger-navbar__block">
                <div class="burger-navbar__info">
                    <p class="burger-navbar__info-title">Поддержка</p>
                    <p class="burger-navbar__info-phone">+7 (777) 920
                        - 91
                        - 82</p>
                    <span>Пн - Пт с 9.00 - 18.00</span>
                </div>
            </div>
            <div class="burger-navbar__block">
                <div class="burger-navbar__info">
                    <p class="burger-navbar__info-title">Доставка</p>
                    <p class="burger-navbar__info-phone">+7 (777) 920
                        - 91
                        - 82</p>
                    <span>каждый день с 9.00 - 18.00</span>
                </div>
            </div>
        </div>
        <div class="burger-navbar__bottom">
            <NuxtLink to="#">
                <BurgerVk />
            </NuxtLink>
            <NuxtLink to="#">
                <BurgerInst />
            </NuxtLink>
            <NuxtLink to="#">
                <BurgerFacebook />
            </NuxtLink>
        </div>

    </VueFinalModal>
</template>
<script lang="ts" setup>
import { VueFinalModal } from 'vue-final-modal'
const emit = defineEmits(['close'])
</script>
<style lang="scss">
.burger-navbar__modal {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.burger-navbar {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 360px;
    overflow: auto;
    background: white;
    border-radius: 14px 0px 0px 14px;

    padding: 9px 16px 16px 16px;

    &__content {
        display: flex;
        flex-direction: column;
        gap: 14px;
        margin-top: 14px;
    }

    &__info {
        display: flex;
        flex-direction: column;

        color: $text;

        &-phone {
            margin-top: 7px;
        }

        span {
            opacity: 0.6;
            font-size: 14px;
        }

    }

    &__addres {
        color: $text;

        div {
            display: flex;
            flex-direction: column;
        }

        span {
            font-size: 14px;
            opacity: 0.6;
        }
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 14px;

        a {
            color: $text;
        }
    }

    &__block {
        padding-top: 14px;
        border-top: 1px solid rgba(0, 0, 0, 0.10);
    }

    // .burger-navbar__top
    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;


    }

    &__bottom {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-top: 31px;
    }

    &-lang {
        display: flex;
        gap: 4px;
        align-items: center;
        margin-top: 27px;
        font-size: 14px;

        &-item {
            text-transform: uppercase;
            color: rgba(74, 74, 72, 0.5);
        }

        &-line {
            background: rgba(74, 74, 72, 0.4);
            width: 1px;
            height: 10px;
        }
    }

    &-city {
        color: $additional;
        font-size: 14px;
        display: flex;
        gap: 10px;
        align-items: flex-end;
        font-weight: 500;
        margin-top: 15px;
    }
}
</style>