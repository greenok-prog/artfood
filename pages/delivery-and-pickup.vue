<template>
    <div class="container">
        <div class="delivery-and-pickup-policy">
            <PathHistory :path="['Главная', 'Доставка и самовывоз']" />
            <h2 class="delivery-and-pickup-policy__title">Доставка и
                самовывоз</h2>
            <div class="delivery-and-pickup-policy__text"></div>


        </div>
    </div>
</template>

<script lang="ts" setup>
import ENDPOINTS from '~/constants/endpoints';

const { data } = await useFetch(`${ENDPOINTS.LIBRARY}privacy_policy`)

</script>

<style lang="scss" scoped>
.container {}

.delivery-and-pickup-policy {
    margin-top: 50px;
    // .delivery-and-pickup-policy__title

    &__title {
        margin-top: 38px;
        font-weight: 700;
        font-size: 30px;
        color: $neutral;

        @include atMd {
            font-size: 24px;
        }
    }

    // .delivery-and-pickup-policy__text

    &__text {
        margin-top: 24px;

        @include atMd {
            font-size: 14px;
        }
    }
}
</style>