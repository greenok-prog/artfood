<template>
    <div class="promo">
        <Swiper :slidesPerView="1" :spaceBetween="30" :loop="true"
            :centeredSlides="true" :modules="[SwiperPagination]"
            :pagination="true">
            <SwiperSlide v-for="discount in discounts">
                <div class="promo-info">
                    <ProductBadge type="discount"
                        :discount="discount.discount_amount"
                        class="promo-info__badge">
                        скидка
                    </ProductBadge>
                    <h3 class="promo-info__name">{{ discount.name }}</h3>
                </div>
                <img :src="discount.image" alt="">
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script lang="ts" setup>
import type { ListDiscount } from '~/types/api-schema';

const props = defineProps<{
    discounts: ListDiscount[]
}>()

</script>
<style lang="scss">
.promo {
    @include atSm {
        height: 500px;
    }

    .swiper {
        height: 500px;
        position: relative;

        &-pagination {
            margin-top: 0;
            z-index: 5;
            position: absolute;
            left: 60px;
            bottom: 40px;
            display: inline-flex;

            &-bullet {
                background: rgba(44, 44, 44, 0.80);
                width: 30px;
                height: 8px;
                border-radius: 40px;

                &-active {
                    background: $text;
                    width: 60px;
                }
            }
        }

    }

    &-info {
        position: absolute;
        bottom: 80px;
        left: 70px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        &__badge {
            height: 53px;
            border-radius: 50px;
            font-size: 20px;
            display: flex;
            align-items: center;
            padding: 0;

            span {
                font-size: 20px;
            }

        }

        &__name {
            font-size: 56px;
            font-weight: 700;
            color: $text;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 24px;
    }
}
</style>