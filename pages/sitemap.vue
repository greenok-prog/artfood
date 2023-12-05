<template>
    <div class="sitemap">
        <div class="container">
            <PathHistory :path="['Главная', 'Карта сайта']" />
            <h2 class="sitemap__title">Карта сайта</h2>
            <div class="sitemap__content">
                <div class="sitemap__item">
                    <p class="sitemap__item-title">Покупателям</p>
                    <div class="sitemap__item-list">
                        <NuxtLink to="#">Ингредиенты</NuxtLink>
                        <NuxtLink to="#">Инвентарь</NuxtLink>
                        <NuxtLink to="#">Украшения для торта</NuxtLink>
                        <NuxtLink to="#">Упаковочные материалы</NuxtLink>
                    </div>
                </div>
                <div class="sitemap__item">
                    <p class="sitemap__item-title">Компания</p>
                    <div class="sitemap__item-list">
                        <NuxtLink to="/about">О нас</NuxtLink>
                        <NuxtLink to="#">Условия возврата</NuxtLink>
                        <NuxtLink to="/contacts">Контакты</NuxtLink>
                        <NuxtLink to="#">Упаковочные материалы</NuxtLink>
                    </div>
                    <NuxtLink to="/about">Доставка и самовывоз</NuxtLink>
                    <NuxtLink to="/contacts">Оплата</NuxtLink>
                    <NuxtLink to="/contacts">Возврат</NuxtLink>
                    <NuxtLink to="/contacts">Частые вопросы</NuxtLink>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sitemap {
    background: #F5F5F5;
    padding-top: 24px;
    padding-bottom: 120px;

    @include atMd {
        padding-bottom: 80px;
    }

    // .sitemap__title

    &__title {
        font-weight: 700;
        color: $neutral;
        font-size: 30px;
        margin-top: 38px;

        @include atMd {
            font-size: 24px;
            margin-top: 28px;
        }
    }

    // .sitemap__content

    &__content {
        margin-top: 35px;
        display: flex;
        gap: 275px;
        align-items: flex-start;

        @include atMd {
            flex-direction: column;
            gap: 56px;
        }
    }

    // .sitemap__item

    &__item {
        display: flex;
        gap: 30px;
        flex-direction: column;

        @include atMd {
            flex-direction: column;
            gap: 16px;
        }

        a {
            color: $neutral;
        }
    }

    // .sitemap__item-title

    &__item-title {
        color: #444;
        text-transform: uppercase;
        opacity: 0.5;
        font-weight: 700;
    }

    // .sitemap__item-list

    &__item-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
}
</style>