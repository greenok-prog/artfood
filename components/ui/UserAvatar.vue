<template>
    <div class="user-avatar">
        <div class="user-avatar__inner" @click="openHandler">
            <UserAvatarSvg />
            <span v-if="isLoggedIn">{{ user.username }} {{
                user.last_name }}</span>
            <NuxtLink to="/auth/login" v-else>Войти</NuxtLink>
        </div>
        <div v-if="isOpened && isLoggedIn" class="user-avatar__menu"
            @click="openHandler">
            <NuxtLink to="/user" class="user-avatar__item">Личный кабинет
            </NuxtLink>
            <div class="user-avatar__border"></div>
            <span @click="logout"
                class="user-avatar__item exit">Выход</span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useAuthStore } from '~/store/auth';
const { logout } = useAuthStore()
const { user, isLoggedIn } = storeToRefs(useAuthStore())
const isOpened = ref(false)
const openHandler = () => {
    isOpened.value = !isOpened.value

}


</script>
<style lang="scss" scoped>
.user-avatar {
    position: relative;

    &__inner {
        background: $light-gray;
        padding: 6px 10px 6px 14px;
        display: flex;
        align-items: center;
        gap: 10px;
        border-radius: 30px;
        cursor: pointer;


        span {
            color: #737781;
            font-size: 14px;
            font-weight: 500;
        }



        a {
            color: $additional;

            &:checked {
                color: $additional;
            }
        }

    }

    &__border {
        width: 100%;
        height: 1px;
        background: rgba(0, 0, 0, 0.10);
    }

    &__menu {
        background: white;
        position: absolute;
        top: 40px;
        min-width: 160px;
        width: 100%;
        padding: 14px;
        left: 5px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        z-index: 2;
        border-radius: 10px;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.20);
    }

    &__item {
        color: $text;
        cursor: pointer;

        &.exit {
            color: $warning;
            cursor: pointer;
        }
    }
}
</style>