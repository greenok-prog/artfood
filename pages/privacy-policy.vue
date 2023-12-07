<template>
    <div class="container">
        <div class="privacy-policy">
            <PathHistory
                :path="['Главная', 'Политика конфиденциальности данных']" />
            <h2 class="privacy-policy__title">Политика конфиденциальности
                данных</h2>
            <p v-if="data.results.length" class="privacy-policy__text"
                v-html="data?.results[0].name">
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { ReturnPolicy } from '~/types/api-schema';
const { data } = await useFetch<ReturnPolicy>('/api/privacy-policy')




</script>

<style lang="scss" scoped>
.privacy-policy {
    margin-top: 50px;
    padding-bottom: 120px;

    @include atMd {
        padding-bottom: 80px;
    }

    // .privacy-policy__title

    &__title {
        margin-top: 38px;
        font-weight: 700;
        font-size: 30px;
        color: $neutral;

        @include atMd {
            font-size: 24px;
        }
    }

    // .privacy-policy__text

    &__text {
        margin-top: 24px;
        color: black;
        white-space: pre-wrap;

        @include atMd {
            font-size: 14px;
        }
    }
}
</style>