<template>
    <ProfileWrapper>
        <template #default="{ back }">
            <ProfileBack @onClick="back()">Список желаний ({{
                favorite.favoriteCount }})
            </ProfileBack>
            <ProfileFavorite />
        </template>
        <template #bottom>
            <div class="favorite__bottom">
                <ContentBlockWrap v-if="getViewed.length" :titleSize="24"
                    title="Вы недавно смотрели">
                    <ProductSlider :products="getViewed" />
                </ContentBlockWrap>
                <!-- <ContentBlockWrap :titleSize="24" title="Рекомендуем вам">
                    <ProductSlider />
                </ContentBlockWrap> -->
            </div>
        </template>
    </ProfileWrapper>
</template>
<script lang="ts" setup>
import { useFavoriteStore } from '~/store/favorite';
import { useProducts } from '~/store/products';

const favorite = useFavoriteStore()
const { getLocalViewed } = useProducts()
const { getViewed } = storeToRefs(useProducts())
getLocalViewed()
</script>

<style lang="scss" scoped>
.favorite {
    &__bottom {
        margin-top: 120px;
        display: flex;
        flex-direction: column;
        gap: 120px;
    }
}
</style>