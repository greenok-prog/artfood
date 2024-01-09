
<template>
    <div class="cart">
        <div class="container">
            <PathHistory class="cart__path"
                :path="['Главная', 'Корзина']" />
            <div class="cart__header">
                <h2 class="cart__title">Корзина</h2>
                <!-- <VCheckbox v-model="selectAll">
                    все товары ({{ store.cartLength }})
                </VCheckbox> -->
            </div>
            <div class="cart__main" v-if="store.cartLength">
                <div class="cart__main-left">
                    <CartProductList v-if="store.existenceProducts"
                        :products="store.existenceProducts"
                        class="cart__main-list" />
                    <CartProductNotAvailable
                        v-if="store.notExistenceProducts.length"
                        :products="store.notExistenceProducts"
                        class="cart__main-disabled" />
                </div>
                <CartProductTotal class="cart__main-total" />
            </div>
            <div class="cart__empty" v-else>
                <h2>
                    Вы ещё ничего не выбрали.
                    Перейдите в каталог и выберите нужные вам товары.
                    <NuxtLink to="/catalog">
                        Перейти в каталог
                    </NuxtLink>
                </h2>
            </div>
        </div>

        <div class="cart__bottom">
            <ContentBlockWrap v-if="productStore.getViewed.length"
                :titleSize="28" title="Вы недавно смотрели">
                <ProductSlider :products="productStore.getViewed" />
            </ContentBlockWrap>
        </div>

    </div>
    <ModalsContainer />
</template>
<script lang="ts" setup>
import { ModalsContainer } from 'vue-final-modal';
import { useCartStore } from '~/store/cart';
import { useProducts } from '~/store/products';


const store = useCartStore()
const productStore = useProducts()

const selectAll = ref(false)
await store.setCart()

productStore.getLocalViewed()

</script>
<style lang="scss" scoped>
.cart {
    background: #F5F5F5;
    padding-top: 35px;

    padding-bottom: 120px;

    @include atLg {

        padding-bottom: 87px;
    }

    &__bottom {
        margin-top: 120px;

        @include atLg {
            margin-top: 84px;
        }
    }

    &__empty {

        margin-top: 40px;
        color: $text-60 ;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        h2 {
            max-width: 700px;
            font-size: 24px;
            font-weight: 700;
            text-align: center;
            display: flex;
            align-items: center;
            flex-direction: column;

            @include atMd {
                font-size: 18px;
            }

            a {
                margin-top: 20px;
                color: $additional;
                font-weight: 700;
            }
        }
    }

    &__header {
        display: flex;
        justify-content: space-between;
        max-width: 940px;
        align-items: center;
        margin-top: 35px;

        @include atXXl {
            max-width: 100%;
        }

        @include atMd {
            margin-top: 25px;
        }
    }

    &__title {
        font-size: 30px;
        font-weight: 700;
        color: $neutral;

        @include atMd {
            font-size: 24px;
        }
    }



    &__main {
        margin-top: 16px;
        display: flex;
        align-items: flex-start;
        gap: 30px;


        @include atLg {
            flex-direction: column;
            gap: 40px;
        }

        &-left {
            width: 940px;

            @include atXXl {
                width: 90%;
            }

            @include atLg {
                width: 100%;

            }
        }

        &-disabled {
            margin-top: 65px;


            @include atXl {

                margin-top: 60px;
            }
        }

        &-list {}

        &-total {
            width: 400px;

            @include atLg {
                width: 100%;
            }
        }
    }
}
</style>