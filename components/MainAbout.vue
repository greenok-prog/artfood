<template>
    <div id="about" class="about" v-if="data">
        <div class="about__left">
            <h2>О компании</h2>
            <p v-html="data?.results[0].name">

            </p>
        </div>
        <div class="about__right">
            <img src="/about-creative.png" alt="Кондитеры" loading="lazy">
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { ReturnPolicy } from '~/types/api-schema';

const { data } = await useFetch<ReturnPolicy>('/api/about_company')




</script>
<style lang="scss" scoped>
.about {
    margin-top: 120px;
    display: grid;
    grid-template-columns: 4fr 2fr;
    align-items: center;
    gap: 40px;
    padding-bottom: 100px;

    @include atXl {
        grid-template-columns: 1fr;

    }

    h2 {
        font-size: 40px;
        font-weight: 700;
    }

    p {
        margin-top: 30px;
        color: $neutral;
        font-weight: 400;
        line-height: 170%;


    }


    &__right {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>