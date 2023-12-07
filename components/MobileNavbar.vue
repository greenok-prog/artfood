<template>
    <div class="mobile-navbar">
        <div>
            <NuxtLink to="/" class="mobile-navbar__item">
                <NavbarHomeSvg />
                <span>Главная</span>
            </NuxtLink>
        </div>
        <div>
            <NuxtLink to="/catalogs" class="mobile-navbar__item">
                <NavbarCatalogSvg />
                <span>Каталог</span>
            </NuxtLink>
        </div>
        <NuxtLink to="/cart" class="mobile-navbar__item">
            <div v-if="cartLength > 0"
                class="mobile-navbar__badge mobile-navbar__badge-cart">{{
                    cartLength }}
            </div>
            <NavbarCartSvg />
            <span>Корзина</span>
        </NuxtLink>
        <NuxtLink to="/user/favorite" class="mobile-navbar__item">
            <div v-if="favoriteCount > 0" class="mobile-navbar__badge">{{
                favoriteCount }}
            </div>
            <NavbarFavoriteSvg />
            <span>Избранное</span>
        </NuxtLink>
        <NuxtLink to="/auth/login" class="mobile-navbar__item">
            <NavbarUserSvg />
            <span>{{ isLoggedIn ? 'Аккаунт' : 'Вход' }}</span>
        </NuxtLink>
    </div>
</template>
<script lang="ts" setup>
import { useAuthStore } from '~/store/auth';
import { useCartStore } from '~/store/cart';
import { useFavoriteStore } from '~/store/favorite';
const { isLoggedIn } = storeToRefs(useAuthStore())
const { favoriteCount } = storeToRefs(useFavoriteStore())
const { cartLength } = storeToRefs(useCartStore())
</script>
<style lang="scss">
.mobile-navbar {
    background-color: #fff;
    padding: 0 16px;
    padding-top: 12px;
    padding-bottom: 7px;
    border-radius: 14px 14px 0px 0px;
    box-shadow: -4px 0px 24px 0px rgba(0, 0, 0, 0.25);
    z-index: 20;
    height: 60px;
    width: 100%;
    position: fixed;
    bottom: -2px;
    justify-content: space-between;
    align-items: center;
    display: none;

    @include atMd {
        display: flex;
    }

    &__badge {
        width: 18px;
        height: 18px;
        border-radius: 100px;
        background: $main;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 12px;
        left: 8px;
        top: -5px;

        &-cart {
            left: 2px;
        }
    }

    .router-link-exact-active {
        svg {
            fill: $additional;

            path {
                fill: $additional;

                fill-opacity: 1;
            }
        }

        span {
            color: $additional;
        }
    }

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;

        position: relative;

        &-active {
            span {
                color: $additional;
            }
        }

        span {
            font-size: 12px;
            color: $text-40;
        }
    }
}
</style>
