<template>
    <div class="order-block">
        <div class="order-block__header">
            <h4 class="order-block__title">
                <slot name="title" />
            </h4>
            <div class="order-block__icon">
                <slot name="icon" />
            </div>
        </div>
        <div class="order-block__content">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.order-block {
    padding: 24px;
    background: white;
    border-radius: 16px;

    @include atMd {
        padding: 16px;
    }

    &__icon {
        cursor: pointer;

        @include atMd {
            display: none;
        }
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    // .order-block__title

    &__title {
        font-size: 24px;
        color: $neutral;
        font-weight: 700;

        @include atMd {
            font-size: 22px;
        }
    }

    // .order-block__content

    &__content {
        margin-top: 24px;

        @include atMd {
            margin-top: 16px;
        }
    }
}
</style>