<template>
    <header class="header">
        <div class="container">
            <div class="header-top">
                <NuxtLink to="/" class="header-top__logo">
                    <Logo type="dark" />
                </NuxtLink>
                <MenuBtnSvg class="header-top__menu"
                    @click="openNavbar" />
                <nav>
                    <NuxtLink to="/#about">О нас</NuxtLink>
                    <NuxtLink to="/return-policy">Условия возврата
                    </NuxtLink>
                    <NuxtLink to="/contacts">Контакты</NuxtLink>
                </nav>
                <div class="header-top__actions">
                    <UserAvatar />
                    <!-- <div class="header-top__actions-lang">
                        <span
                            class="active-lang header-top__actions-lang-item">Ru
                        </span>
                        <div class="header-top__actions-lang-line"></div>
                        <span
                            class="header-top__actions-lang-item">Kaz</span>
                    </div>
                    <div class="header-top__actions-city">
                        <NavigationSvg />
                        Алматы
                    </div> -->
                </div>
            </div>
        </div>
        <div class="header-main">
            <div class="container">
                <div class="header-inner">
                    <NuxtLink to="/" class="header-logo">
                        <Logo />
                    </NuxtLink>
                    <button class="header-catalog" @click="open">
                        <div class="header-catalog__left">
                            <div class="header-catalog__icon">
                                <span></span><span></span><span></span>
                            </div>
                            <span>Каталог товаров</span>
                        </div>
                        <ArrowDownSvg />
                    </button>
                    <SearchInput v-model="search" @onSearch="onSearch" />
                    <NuxtLink to="/compare" class="header-favorite">
                        <HeaderCompareSvg />
                        <span>({{ compareStore.compareCount }})</span>
                    </NuxtLink>
                    <NuxtLink to="/cart" class="header-cart">
                        <CartSvg />
                        <span>({{ cartStore.cartLength }})</span>
                    </NuxtLink>

                    <NuxtLink to="/user/favorite" class="header-favorite">
                        <HeaderFavSvg />
                        <span>({{ store.favoriteCount }})</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </header>
    <ModalsContainer />
</template>
<script lang="ts" setup>
import { ModalsContainer, useModal } from "vue-final-modal";
import ModalCatalog from "@/components/catalog/ModalCatalog.vue";

import HeaderBurgerNavbar from "@/components/HeaderBurgerNavbar.vue";
import { useFavoriteStore } from "~/store/favorite";
import { useCartStore } from "~/store/cart";
import { useCompareStore } from "~/store/compare";

const router = useRouter()
const search = ref('')
const onSearch = () => {
    search.value = ''
    router.push(`/catalog?search=${search.value}`)
}
const { open, close } = useModal({
    component: ModalCatalog,
    attrs: {
        onConfirm() {
            close();
        },
    },
});
const { open: openNavbar, close: closeNavbar } = useModal({
    component: HeaderBurgerNavbar,
    attrs: {
        onClose() {
            closeNavbar();
        },
    },
});
const store = useFavoriteStore()
const cartStore = useCartStore()
const compareStore = useCompareStore()



</script>
<style lang="scss" scoped>
.header {
    &-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &-logo {
        @include atXl {
            display: none;
        }
    }

    &-cart {
        display: flex;
        align-items: center;
        gap: 12px;
        color: rgba(255, 255, 255, 0.6);
        margin-left: 30px;

        @include atXXl {
            margin-left: 20px;
        }

        @include atLg {
            display: none;
        }
    }

    &-favorite {
        display: flex;
        align-items: center;
        gap: 12px;
        color: rgba(255, 255, 255, 0.6);
        margin-left: 40px;



        @include atXXl {
            margin-left: 20px;
        }

        @include atLg {
            display: none;
        }
    }

    &-catalog {
        min-width: 250px;
        max-width: 250px;
        margin-left: 30px;
        margin-right: 10px;
        background-color: #bd1851;
        padding: 17px 14px 17px 24px;
        color: white;
        border: none;
        border-radius: 50px;
        display: flex;
        gap: 13px;
        flex-grow: 1;
        justify-content: space-between;
        cursor: pointer;

        @include atXXl {
            margin-left: 10px;
            font-size: 14px;
            gap: 8px;
        }

        @include atMd {
            display: none;
        }

        &__left {
            display: flex;
            align-items: center;
        }

        &__icon {
            width: 22px;
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 3px;
            margin-right: 8px;

            span {
                width: 22px;
                height: 3px;
                border-radius: 40px;
                background-color: white;
            }
        }
    }

    &-top {
        display: flex;
        padding: 13px 0;
        align-items: center;
        justify-content: space-between;

        &__menu {
            display: none;

            @include atLg {
                display: flex;
            }
        }

        &__logo {
            display: none;

            @include atLg {
                display: flex;
            }
        }

        nav {
            display: flex;
            align-items: center;
            gap: 30px;

            @include atLg {
                display: none;
            }

            a {
                color: #4a4a48;
                line-height: 145%;
                font-size: 14px;
                text-decoration: none;
            }
        }

        &__actions {
            display: flex;
            align-items: center;
            gap: 30px;

            @include atLg {
                display: none;
            }

            &-lang {
                display: flex;
                gap: 4px;
                align-items: center;

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
            }
        }
    }

    &-main {
        background: $main;
        padding-top: 12px;
        padding-bottom: 14px;
    }
}

.active-lang {
    color: #4a4a48;
    font-size: 14px;
}
</style>