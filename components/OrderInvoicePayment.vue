<template>
    <div class="invoice-payment">
        <p class="invoice-payment__title">
            Счет на оплату юридическим лицам
        </p>
        <VBtn>
            Скачать счет на оплату
            <DownloadSvg />
        </VBtn>
    </div>
</template>

<style lang="scss" scoped>
.invoice-payment {
    background: white;
    padding: 24px;
    border-radius: 16px;

    @include atMd {
        padding: 16px;
    }

    // .invoice-payment__title

    &__title {
        color: $neutral;
        font-weight: 700;
    }

    button {
        margin-top: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 65px;
        width: 250px;
        padding: 0;

        @include atMd {
            width: 100%;
        }
    }
}
</style>