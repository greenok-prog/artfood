<template>
    <div class="profile-navbar">
        <nav class="profile-navbar__inner">
            <div class="profile-navbar__block"
                v-for="block in currentLinks">
                <p>{{ block.title }}</p>
                <div class="profile-navbar__block-list">
                    <NuxtLink @click="onLinkClick(link)"
                        v-for="link in block.links" :to="link.to">{{
                            link.name }}
                        <ProfileNavbarIconSvg />
                    </NuxtLink>
                </div>
            </div>
            <NuxtLink to="/user/support" class="profile-navbar__support">
                Поддержка
                <ProfileNavbarIconSvg />
            </NuxtLink>
        </nav>
        <div class="profile-navbar__logout"
            @click="useAuthStore().logout">
            <NuxtLink to="/">Выход из
                профиля</NuxtLink>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useAuthStore } from '~/store/auth';

interface IBlockLink {
    title: string,
    links: {
        name: string,
        to: string
    }[]
}
const { user } = storeToRefs(useAuthStore())
const blockLinks: IBlockLink[] = [
    {
        title: 'Аккаунт',
        links: [
            {
                name: 'Мой профиль',
                to: '/user'
            },
        ]
    }, {
        title: 'Заказы', links: [
            {
                name: 'История заказов',
                to: '/user/order-history'
            },

            {
                name: 'Список желаний',
                to: '/user/favorite'
            },
            {
                name: 'Мои отзывы',
                to: '/user/reviews/'
            }
        ]
    },

]
const blockLinksCompany: IBlockLink[] = [
    {
        title: 'Аккаунт',
        links: [
            {
                name: 'Мой профиль',
                to: '/user'
            },
            {
                name: 'Документы',
                to: '/user/documents'
            }
        ]
    }, {
        title: 'Заказы', links: [
            {
                name: 'История заказов',
                to: '/user/order-history'
            },

            {
                name: 'Список желаний',
                to: '/user/favorite'
            },
            {
                name: 'Мои отзывы',
                to: '/user/reviews/'
            }
        ]
    },

]
const currentLinks = computed(() => {
    return user.value.user_type === 'company' ? blockLinksCompany : blockLinks
})

const activeLink = ref<{ name: string, to: string }>(blockLinks[0].links[0])

const emit = defineEmits(['onClick'])
const onLinkClick = (link) => {
    emit('onClick', link)
}
</script>

<style lang="scss" scoped>
.profile-navbar {
    min-width: 250px;
    width: 100%;

    &__support {
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
            display: none;
        }
    }

    &__inner {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        padding: 16px;
        border-radius: 16px;
        gap: 24px;

        a {
            color: $text;
        }
    }

    .router-link-exact-active {

        color: $additional;


        svg {
            display: block;
        }
    }

    // .profile-navbar__block
    &__block {
        padding-bottom: 24px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.20);
        ;

        p {
            font-size: 14px;
            font-weight: 700;
            color: $text-40;
            text-transform: uppercase;
        }



        &-list {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;



            svg {
                display: none;
            }

            a {
                color: $text;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
    }

    &__logout {
        margin-top: 10px;
        background-color: #fff;
        padding: 16px;
        text-align: center;

        border-radius: 16px;

        a {
            color: $text;
        }
    }
}
</style>