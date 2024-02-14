<template>
    <div class="slider">
        <div v-if="items.length > 5" class="slider__navigation">
            <button @click="swiper.slidePrev()" class="slider-prev"
                aria-label="prev slide">
                <SliderArrowSvg />
            </button>
            <button @click="swiper.slideNext()" class="slider-next"
                aria-label="next slide">
                <SliderArrowSvg />
            </button>
        </div>
        <Swiper :observer="true" :observe-parents="true"
            :pagination="{ clickable: true }"
            :modules="[SwiperNavigation, SwiperPagination]"
            :onSwiper="s => swiper = s" :breakpoints="breakpoints"
            :slides-per-view="1.2" :space-between="30">
            <SwiperSlide class="slider__list-item" v-for="item in items"
                :key="items.id">
                <slot :item="item" />
            </SwiperSlide>
        </Swiper>

    </div>
</template>

<script lang="ts" setup>
import type { ISliderBreakpoints } from '~/dto/breakpoints';

const swiper = ref<any>(null)


const props = defineProps<{
    breakpoints: ISliderBreakpoints,
    items: any
}>()



</script>

<style lang="scss">
.slider {
    position: relative;

    &-next {
        transform: rotate(180deg);
    }

    &__navigation {
        position: absolute;
        z-index: 10;
        top: -94px;
        right: 0;
        display: flex;
        align-items: center;
        gap: 7px;

        @include atMd {
            display: none;
        }

        button {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 50px;
            background: $light-gray;
            cursor: pointer;

            &:hover {
                background-color: $additional;

                svg {
                    path {
                        stroke: white;
                    }
                }
            }
        }

    }


}

.slider .swiper-pagination {
    position: static;
    margin-top: 40px;

    &-bullet {
        width: 8px;
        height: 8px;
        border-radius: 40px;

        &-active {
            width: 30px;
        }
    }
}
</style>