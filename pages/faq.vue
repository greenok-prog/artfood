<template>
    <div class="faq">
        <div class="container">
            <PathHistory
                :path="['Главная', 'Часто задаваемые вопросы']" />
            <div class="faq__header">
                <h2 class="faq__title">Часто задаваемые вопросы
                </h2>
                <VBtn class="faq__button">
                    Задать свой вопрос
                </VBtn>
            </div>
            <div class="faq__list">
                <div class="faq__list-item">
                    <FaqListItem />
                </div>
                <div class="faq__list-item">
                    <FaqListItem />
                </div>
                <div class="faq__list-item">
                    <FaqListItem />
                </div>
                <div class="faq__list-item">
                    <FaqListItem />
                </div>
            </div>
            <div class="faq__bottom">
                <VBtn class="faq__button-bottom">
                    Задать свой вопрос
                </VBtn>
            </div>


        </div>
    </div>
</template>

<script lang="ts" setup>
import ENDPOINTS from '~/constants/endpoints';


</script>

<style lang="scss" scoped>
.container {}

.faq {
    padding-top: 50px;
    background: #F5F5F5;
    padding-bottom: 120px;

    @include atMd {
        padding-bottom: 80px;
    }

    // .privacy-policy__title

    &__title {

        font-weight: 700;
        font-size: 30px;
        color: $neutral;

        @include atMd {
            font-size: 24px;
        }
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 38px;
    }

    &__button {
        width: 200px;
        height: 43px;
        padding: 0;

        @include atMd {
            display: none;
        }

        &-bottom {
            display: none;
            width: 200px;
            height: 43px;
            padding: 0;
            margin-top: 38px;


            @include atMd {
                display: block;
            }
        }
    }

    // .privacy-policy__text

    &__list {
        margin-top: 24px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: flex-start;
        gap: 30px;
        row-gap: 24px;
        grid-template-rows: auto;

        @include atMd {
            grid-template-columns: 1fr;
        }

        &-item {
            align-self: start;
        }

    }

    &__bottom {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>