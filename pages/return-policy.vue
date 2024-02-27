<template>
    <div class="container">
        <div class="return-policy">
            <PathHistory 
              :path="[
                {name:'Главная', url: '/'}, 
                {name:'Условия возврата', url: '/return-policy'}
               ]" 
            />
            <h2 class="return-policy__title">Условия возврата
            </h2>
            <p v-if="data.results.length" class="return-policy__text"
                v-html="data?.results[0].name">
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { ReturnPolicy } from '~/types/api-schema';
const { data } = await useFetch<ReturnPolicy>('/api/return-policy')
</script>

<style lang="scss" scoped>
.return-policy {
    margin-top: 50px;
    // .return-policy__title
    padding-bottom: 120px;

    @include atMd {
        padding-bottom: 80px;
    }

    &__title {
        margin-top: 38px;
        font-weight: 700;
        font-size: 30px;
        color: $neutral;

        @include atMd {
            font-size: 24px;
        }
    }

    // .return-policy__text

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