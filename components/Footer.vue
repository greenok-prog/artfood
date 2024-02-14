<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <div class="footer-block">
                    <Logo />
                    <div v-if="address" class="footer__adress">
                        <h4>Адрес</h4>
                        <span>Казахстан, г.{{ address.city.name }}</span>
                        <p>ул. {{ address.street }} {{
                            address.house_number
                        }}</p>
                    </div>
                    <div v-if="social" class="footer__social">
                        <p>Мы в соц сетях</p>

                        <div class="footer__social-list">
                            <NuxtLink :to="link.url_network"
                                v-for=" link  in  social "
                                :key="link.name" aria-label="Check site">
                                <VkSvg v-if="link.name === 'Vk'" />
                                <InstagramSvg
                                    v-if="link.name === 'Instagram'" />
                                <FacebookSvg
                                    v-if="link.name === 'Facebook'" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="footer__users">
                    <h4 class="footer__title">Покупателям</h4>
                    <div v-if="categories" class="footer__users-list">
                        <NuxtLink v-for=" category  in  categories "
                            :to="`/catalog?subcategory__category=${category.id}`">
                            {{ category.name }}</NuxtLink>
                    </div>
                </div>
                <div v-if="address" class="footer__contacts">
                    <h4 class="footer__title">Контакты</h4>
                    <div class="footer__contacts-block">
                        <p class="footer__contacts-block-title">Поддержка
                        </p>
                        <p class="footer__item">
                            Artfood777@mail.ru
                        </p>
                        <NuxtLink v-if="address.contact_store"
                            :to="`tel:${address?.contact_store[0].phone_numbers}`">
                            <p>{{ address?.contact_store[0].phone_numbers
                            }}
                            </p>
                        </NuxtLink>
                        <span>Пн - Пт с 9.00 - 19.00</span>
                        <span>Сб с 8.00 - 13.00</span>
                        <span>В праздничные дни уточняйте по
                            телефону</span>
                    </div>

                </div>
                <div class="footer__company">
                    <h4 class="footer__title">Компания</h4>
                    <div class="footer__company-list">
                        <div class="footer__company-block">
                            <NuxtLink to="/#about">О нас</NuxtLink>
                            <NuxtLink to="/return-policy">Условия возврата
                            </NuxtLink>
                            <NuxtLink to="/contacts">Контакты</NuxtLink>

                        </div>
                        <NuxtLink to="/delivery-and-pickup"
                            class="footer__company-block">Доставка и
                            самовывоз</NuxtLink>
                        <NuxtLink to="/payment-and-delivery"
                            class="footer__company-block">Оплата
                        </NuxtLink>
                        <NuxtLink to="/return-policy"
                            class="footer__company-block">Возврат
                        </NuxtLink>
                        <NuxtLink to="/faq" class="footer__company-block">
                            Частые
                            вопросы</NuxtLink>
                    </div>
                </div>
            </div>

        </div>
        <div class="footer__bottom">
            <ul class="container">
                <li>© 2023 ART Food все права защищены</li>
                <li>
                    <NuxtLink to="/privacy-policy">Политика
                        конфиденциальности
                    </NuxtLink>
                </li>
                <li class="footer__bottom-card">
                    <MasterCardSvg />
                </li>
                <li class="footer__bottom-card">
                    <VisaSvg />
                </li>

            </ul>
        </div>
    </footer>
</template>
<script lang="ts" setup>
import { useFooter } from '~/store/footer';


interface ISocial {
    name: string,
    url_network: string
}
interface IAddress {
    city: {
        name: string
    },
    district: {
        name: string
    },
    contact_store: {
        phone_number: string
    }[],
    house_number: string
}
const { getFooter } = useFooter()
const { social, address, categories } = storeToRefs(useFooter())




// const { data: social } = await useFetch<{ results: ISocial[] }>('/api/store-social', {
//     method: 'get',

// })
// const { data: addresses } = await useFetch<{ results: IAddress[] }>('/api/store-addresses')
// const { data: categories } = await useFetch('/api/popular-categories')


// const address = computed(() => {
//     return addresses.value.results[0]
// })
onMounted(async () => {
    await getFooter()

})

</script>
<style lang="scss" scoped>
.footer {
    background-color: $main;
    padding-top: 90px;

    &__item {
        margin-bottom: 6px;
    }

    &__inner {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        @include atXl {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
        }

        @include atSm {
            grid-template-columns: 1fr;
        }
    }

    &__title {
        text-transform: uppercase;
        font-weight: 700;
        opacity: 0.5;
        color: white;
        font-size: 16px;
    }

    &__bottom {
        margin-top: 53px;
        padding-top: 32px;
        padding-bottom: 36px;
        border-top: 1px solid rgba(255, 255, 255, 0.6);

        &-card {
            background: white;
            height: 48px;
            width: 100px;

            svg {
                height: 100%;
                width: 100%;
            }
        }


        ul {
            display: flex;
            color: white;
            list-style-type: none;
            gap: 125px;
            font-size: 14px;
            align-items: center;

            @include atXXl {
                gap: 30px;
            }

            @include atXl {
                flex-direction: column;
                gap: 14px;
            }

            a {
                color: white;
                text-decoration: none;
                font-size: 14px;
            }
        }
    }

    &__company {
        &-list {
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            gap: 30px;

            a {
                color: white;
            }
        }

        &-block {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
    }

    &__contacts {
        &-block {
            margin-top: 30px;

            &-title {
                margin-bottom: 7px;
            }

            p {
                color: white;
            }

            span {
                font-size: 14px;
                color: white;
                opacity: 0.6;
                display: block;
                margin-top: 4px;
            }
        }
    }

    &__users {

        &-list {
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            gap: 16px;

            a {
                color: white;
                text-decoration: none;
            }
        }
    }

    &__social {
        margin-top: 40px;

        p {
            color: white;
        }

        &-list {
            margin-top: 14px;
            display: flex;
            gap: 14px;
        }
    }

    &__adress {
        margin-top: 40px;
        color: white;

        h4 {
            margin-bottom: 7px;
            font-size: 16px;
        }

        p {
            font-size: 14px;
            line-height: 24px;
            opacity: 0.6;
        }
    }

}
</style>