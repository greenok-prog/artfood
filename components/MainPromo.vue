<template>
    <div class="promo" v-if="discounts?.length">
        <Swiper :slidesPerView="1" :spaceBetween="30" :loop="true"
            :modules="[SwiperPagination]"
            :pagination="{ clickable: true }">
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

            @include atLg {
                left: 16px;
            }

            &-bullet {
                background: rgba(44, 44, 44, 0.80);
                width: 30px;
                height: 8px;
                border-radius: 40px;

                @include atMd {
                    background: rgba(255, 255, 255, 0.50);
                    opacity: 1;

                }

                &-active {
                    background: $text;
                    width: 60px;

                    @include atMd {
                        background: white;
                    }
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

        @include atLg {
            left: 16px;
            top: 40px;
        }

        &__badge {
            height: 53px;
            border-radius: 50px;
            font-size: 20px;
            display: flex;
            align-items: center;
            padding: 0;

            @include atLg {
                height: 40px;
            }

            span {
                font-size: 20px;

                @include atLg {
                    font-size: 14px;
                }
            }

        }

        &__name {
            font-size: 56px;
            font-weight: 700;
            color: $text;

            @include atLg {
                font-size: 38px;
                margin-top: 18px;
            }

            @include atMd {
                font-size: 24px;
            }
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