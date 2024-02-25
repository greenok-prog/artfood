<template>
    <div class="product-detail">
        <div class="container">

            <PathHistory class="product-detail__history"
                :path="['Главная', 'Категории', product?.subcategory.name, product.name]" />

            <div class="product-detail__content">
                <ProductDetailsInfo v-if="product"
                    :rating="reviews?.length" :product="product"
                    class="product-detail__info" />
                <ProductDetailsPrice v-if="product" :product="product"
                    class="product-detail__price" />
            </div>
            <ProductDetailsReviews v-if="reviews && product?.rating"
                :rating="product?.rating" :reviews="reviews"
                class="product-detail__reviews" />
            <div class="product-detail__bottom">
                <ContentBlockWrap 
                  title="Вы недавно смотрели"
                  :title-size="28"
                  v-if="state.getViewed.length > 0"
                >
                    <ProductSlider :products="state.getViewed" />
                </ContentBlockWrap>
                <ContentBlockWrap 
                  v-if="similar?.products"
                  title="Рекомендуем вам" 
                  :title-size="28"
                >
                    <ProductSlider 
                      :includeUrl="true" 
                      :products="similar?.products" 
                    />
                </ContentBlockWrap>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useProducts } from '~/store/products';
import type { ListProduct, ReviewCreate } from '~/types/api-schema';

const route = useRoute()
const { data: product } = await useFetch<ListProduct>('/api/product/' + route.params.id)
const { data: reviews } = await useFetch<ReviewCreate[]>('/api/review-for-product/' + route.params.id)
const { data: similar } = await useFetch('/api/products-similar', {
    method: 'post',
    body: {
        product_keys: [route.params.id]
    }
})
console.log(product.value);

const state = useProducts()

if (product.value) {
    state.getLocalViewed()
    state.viewedAdd(product.value)
}







</script>

<style lang="scss" scoped>
.product-detail {
    background: #F5F5F5;
    height: 100%;
    padding-bottom: 120px;

    @include atMd {
        padding-bottom: 80px;
    }

    @include atMd {
        background: white;
    }

    &__history {
        padding-top: 35px;
    }

    &__content {
        display: flex;
        gap: 30px;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 35px;


        @include atLg {
            flex-direction: column;
            gap: 60px;
        }
    }

    &__reviews {
        margin-top: 30px;
        width: 940px;

        @include atXXl {
            width: 100%;
            margin-top: 60px;
        }
    }

    &__info {
        max-width: 940px;
        width: 940px;
        min-height: 600px;

        @include atXl {
            width: 100%;
        }
    }

    &__price {
        height: 600px;
        width: 400px;

        @include atLg {
            width: 100%;
            height: auto;
        }
    }

    &__bottom {
        margin-top: 120px;
        display: flex;
        flex-direction: column;
        gap: 120px;

        @include atMd {
            margin-top: 40px;
            gap: 90px;
        }
    }
}
</style>