<template>
    <div class="product-images">

        <Swiper :onSwiper="s => swiper = s" :modules="[SwiperPagination]"
            :pagination="true" :slidesPerView="1"
            class="product-images__inner">
            <ProductBadge class="product-images__badge" type="discount"
                :discount="discount" />
            <SwiperSlide class="product-images__slide"
                v-for="image in images">
                <img :src="image.image" alt="">
            </SwiperSlide>
        </Swiper>

        <div class="product-images__list"
            v-if="swiper && images.length > 1">
            <div class="product-images__list-item"
                @click="swiper.slideTo(index)"
                :class="{ 'product-images__list-item_active': swiper.activeIndex === index }"
                v-for="(image, index) in images">
                <img :src="image.image" alt="">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { ProductImage } from '~/types/api-schema';

const props = defineProps<{
    images: ProductImage[],
    discount?: string,
}>()
const swiper = ref<any>(null)


</script>

<style lang="scss">
.product-images {
    position: relative;


    &__inner {
        min-width: 455px;
        height: 455px;
        width: 455px;
        background: #F5F5F5;
        border-radius: 24px;
        position: relative;

        @include atXXl {
            height: 300px;
            min-width: 300px;
            width: 100%;
        }

        @include atLg {
            width: 100% !important;
            min-width: 100%;
            width: 100%;
        }

        @include atMd {}
    }

    &__list {
        position: absolute;
        top: 16px;
        left: 16px;
        z-index: 999;
        display: flex;
        flex-direction: column;
        gap: 10px;


        @include atXl {
            flex-direction: row;
            flex-wrap: wrap;
            position: static;
            margin-top: 10px;
        }

        &-item {
            cursor: pointer;
            width: 90px;
            height: 90px;
            padding: 10px 18px;
            border: 1px solid #C4C6C2;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;

            &_active {
                border-color: $additional;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }



    }

    &__slide {
        width: 100% !important;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__badge {
        position: absolute;
        right: 16px;
        top: 16px;
        z-index: 10;
    }

    img {

        height: 100%;
        max-height: 350px;

        @include atXXl {
            max-height: 200px;
        }

        @include atMd {
            max-height: 280px;
        }
    }


}
</style>