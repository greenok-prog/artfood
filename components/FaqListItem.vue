<template>
    <div class="faq-item">
        <div class="faq-item__header" @click="openHandler">
            <p class="faq-item__name">1. Какие виды продукции вы
                предлагаете для кондитеров?</p>
            <button class="faq-item__button">
                <AddSvg class="faq-item__button-open"
                    :class="{ 'faq-item__button-open_active': isOpened }" />

            </button>
        </div>
        <p class="faq-item__text" v-if="isOpened">
            Ответ: Мы предоставляем широкий ассортимент ингредиентов,
            посуды, инструментов и аксессуаров для кондитеров. Это
            включает муку, сахар, крем-тартар, формы для выпечки,
            декорирования и многое другое.
        </p>
    </div>
</template>
<script lang="ts" setup>
const isOpened = ref(false)
const openHandler = () => {
    setTimeout(() => {
        isOpened.value = !isOpened.value
    }, 100)
}

</script>
<style lang="scss" scoped>
.faq-item {
    padding: 16px;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 16px;
    box-shadow: 0px 16px 40px 0px #D3D3D3;
    // .faq-item__header

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        gap: 10px;

    }

    // .faq-item__name

    &__name {
        color: $neutral;
        font-size: 18px;
        font-weight: 700;

        @include atMd {
            font-size: 14px;
        }
    }

    // .faq-item__button

    &__button {
        border-radius: 100px;
        min-width: 35px;
        height: 35px;
        background: $additional;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &-open {
            margin-right: 1px;
            transition: all 0.2s ease-in-out;

            &_active {

                margin-right: 0;
                transform: rotate(45deg);
            }
        }

        :deep(svg) {


            path {
                stroke: white;
                fill: white;
            }
        }
    }

    // .faq-item__text

    &__text {
        padding-top: 18px;
        border-top: 1px solid rgba(0, 0, 0, 0.30);
        margin-top: 18px;
        color: #222;
        opacity: 0.8;

        @include atMd {
            font-size: 12px;
            padding-top: 10px;
            margin-top: 10px;
        }

    }
}
</style>