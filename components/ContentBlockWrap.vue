<template>
    <div class="product-slider">
        <div class="product-slider-header container">
            <div class="product-slider-header__left">
                <h2 :style="{ fontSize: titleSize + 'px' }">{{ title }}
                </h2>
                <NuxtLink :to="moreLink">{{ moreText }}</NuxtLink>
            </div>
            <button class="product-slider__all-btn" v-if="moreLink"
                @click="navigateToMorePage">Все</button>
        </div>
        <div class="product-slider__list">
            <div class="container">
                <slot />
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>

import type { ISliderBreakpoints } from '~/dto/breakpoints'
const props = defineProps<{
    title: string,
    moreText?: string,
    moreLink?: string,
    breakpoints?: ISliderBreakpoints,
    titleSize?: number
}>()
const emit = defineEmits(['slideNext'])
const navigateToMorePage = () => navigateTo(props.moreLink)
</script>

<style lang="scss" >
.product-slider {
    &-next {
        svg {
            transform: rotate(180deg);
        }
    }

    &__all-btn {
        display: none;
        background: $additional;
        border: none;
        cursor: pointer;
        color: white;
        padding: 10px 30px;
        border-radius: 70px;

        @include atMd {
            display: block;
        }
    }

    &__list {
        margin-top: 44px;

        @include atMd {
            margin-top: 24px;
        }

        .container {
            @include atSm {
                padding-right: 0px;
            }
        }


    }

    &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__left {
            display: flex;
            align-items: flex-end;
            gap: 35px;

            @include atMd {
                gap: 20px;
            }

            h2 {
                font-size: 40px;
                font-weight: 700;

                @include atLg {
                    font-size: 30px;
                }

                @include atSm {
                    font-size: 24px;
                }
            }

            a {
                text-decoration: none;
                color: $additional;
                padding-bottom: 3px;

                @include atLg {
                    font-size: 14px;
                }

                @include atMd {
                    display: none;
                }

            }

        }


    }

}
</style>