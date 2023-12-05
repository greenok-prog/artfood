<template>
    <div class="order-address">
        <div class="container">
            <PreviousPageLink to="/order" class="order-address__back" />
            <div class="order-address__content">
                <Contacts title="Адрес выдачи заказов">
                    <template #icon>
                        <NuxtLink to="/order"
                            class="order-address__content-icon">
                            <ProfileBackArrowSvg />
                        </NuxtLink>
                    </template>
                </Contacts>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.order-address {
    margin-bottom: 120px;

    @include atMd {
        margin-bottom: 80px;
    }

    // .order-address__back

    &__back {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 35px;

        @include atMd {
            display: none;
        }

        svg {
            transform: rotate(180deg);

        }

    }

    // .order-address__content

    &__content {
        margin-top: 35px;

        &-icon {
            width: 34px;
            height: 34px;
            background: $additional;
            border-radius: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>