<template>
    <ContentBlockWrap title="Представленные бренды">
        <div class="partners">
            <Swiper class="partners" :autoplay="{ delay: 2000 }"
                :modules="[SwiperAutoplay]"
                :breakpoints="PARTNERS_BREAKPOINTS" :space-between="20">
                <SwiperSlide v-for="item in data" :key="item.id">
                    <NuxtLink class="partners-item"
                        :to="`/catalog?product_data__manufacturer=${item.id}`">
                        <img :src="item.logo" :alt="item.name" width="186"
                            loading="lazy" height="168">
                    </NuxtLink>
                </SwiperSlide>
            </Swiper>
        </div>
    </ContentBlockWrap>
</template>

<script lang="ts" setup>
import { PARTNERS_BREAKPOINTS } from '~/constants/responsiveBreakpoints'



const { data } = await useFetch('/api/brands')




</script>

<style lang="scss" scoped>
.partners {
    width: 100%;
}

.partners-item {
    height: 153px;
    max-width: 214px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6.464px 14.546px 8.082px 12.929px;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
}
</style>