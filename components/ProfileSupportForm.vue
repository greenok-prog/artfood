<template>
    <div class="support">
        <h3 class="support__title">
            Поддержка
        </h3>
        <div class="support__block">
            <h4 class="support__block-title">Контактные номера для обращения в службу поддержки:</h4>
            <div class="support__block-phones">
                <span>+7 (727) 743-38-78</span>
                <span>+7 (707) 743-39-79</span>
            </div>
            <!-- <div class="support__block-or">
                Или перейдите по кнопке
            </div>
            <button>
                <SupportWsSvg />Написать в поддержку
            </button> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.support {
    // .support__title

    &__title {
        color: $text;
        font-size: 30px;
        font-weight: 700;

        @include atMd {
            display: none;
        }
    }

    // .support__block

    &__block {
        margin-top: 25px;
        padding: 25px;
        border-radius: 16px;
        background: #FFF;
        padding-bottom: 30px;

        @include atLg {
            font-size: 18px;
        }
    }

    // .support__block-title

    &__block-title {
        color: $text;
        font-size: 24px;
        font-weight: 700;
    }

    // .support__block-phones

    &__block-phones {
        margin-top: 22px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 18px;
        color: $text;
    }

    // .support__block-or

    &__block-or {
        margin-top: 40px;
        font-size: 18px;
        color: $text-60;

    }

    button {
        display: flex;
        height: 60px;
        padding: 20px 12px 20px 20px;
        justify-content: center;
        align-items: center;
        gap: 6px;
        border-radius: 70px;
        background: #3DA82B;
        font-size: 16px;
        color: white;
        margin-top: 10px;

        @include atMd {
            width: 100%;
        }
    }
}
</style>