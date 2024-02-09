
<template>
    <div class="contacts">
        <div class="contacts__content">
            <div class="contacts__header">
                <div class="contacts__icon">
                    <slot name="icon"></slot>
                </div>
                <h4 class="contacts__title">{{ title ? title : 'Контакты'
                }}</h4>
            </div>

            <div class="contacts__list">
                <div class="contacts__item">
                    <div class="contacts__item-title">
                        <LocationSvg />
                        <h2>Адресс</h2>
                    </div>
                    <div class="contacts__item-content">
                        <p>Казахстан, г.Алматы</p>
                        <span>Проспект Райымбека 214/1, головной
                            офис</span>
                    </div>
                </div>
                <div class="contacts__item">
                    <div class="contacts__item-title">
                        <SupportSvg />
                        <h2>Поддержка</h2>
                    </div>
                    <div class="contacts__item-content">
                        <p>+7 (777) 920 - 91 - 82</p>
                        <p>Artfood777@mail.ru</p>
                        <span>Пн - Пт с 9.00 - 18.00</span>
                        <span>Сб с 8.00 - 13.00</span>
                        <span>В праздничные дни уточняйте по
                            телефону</span>
                    </div>
                </div>
                <div class="contacts__item">
                    <div class="contacts__item-title">
                        <DeliverySvg />
                        <h2>Доставка</h2>
                    </div>
                    <div class="contacts__item-content">
                        <p>+7 (777) 920 - 91 - 82</p>
                        <p>Artfood777@mail.ru</p>
                        <span>каждый день с 9.00 - 18.00</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="contacts__map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.237476900598!2d76.85415352162939!3d43.25810096787454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836989a6ded4b3%3A0xe7d1d3f858b39aa9!2z0JjQnyBBUlQgRk9PRA!5e0!3m2!1sru!2skz!4v1704364906130!5m2!1sru!2skz"
                style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
    title?: string
}>()
const { data } = await useFetch('/api/store-addresses')
console.log(data.value);


</script>
<style lang="scss" scoped>
.contacts {
    display: flex;
    justify-content: space-between;
    gap: 60px;

    @include atMd {
        flex-direction: column;
    }

    // .contacts__content

    &__content {}

    &__icon {
        display: none;

        @include atMd {
            display: block;
        }
    }

    &__header {
        display: flex;
        gap: 20px;
        align-items: flex-start;
    }

    // .contacts__title

    &__title {
        color: $neutral;
        font-size: 30px;
        font-weight: 700;

        @include atMd {
            font-size: 24px;
        }
    }

    // .contacts__list

    &__list {
        display: flex;
        flex-direction: column;
        gap: 34px;
        margin-top: 30px;
    }

    // .contacts__item

    &__item {
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    // .contacts__item-title

    &__item-title {
        display: flex;
        align-items: center;
        gap: 14px;

        h2 {
            color: $neutral;
            font-size: 20px;
            font-weight: 700;
        }
    }

    // .contacts__item-content

    &__item-content {
        margin-left: 39px;

        p,
        span {
            color: $neutral;
        }

        span {
            opacity: 0.6;
            font-size: 14px;
            display: block;
            margin-top: 4px;
        }
    }

    &__map {
        border-radius: 24px;
        background: #D9D9D9;
        flex-grow: 1;
        max-width: 900px;

        iframe {
            width: 100%;
            height: 100%;
        }

        @include atMd {
            width: 100%;
            height: 420px;
        }


    }
}
</style>