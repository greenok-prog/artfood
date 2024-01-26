<template>
    <div class="profile-user">
        <div class="profile-user__block">
            <div class="profile-user__block-header">
                <h4>{{ data?.username }} {{ data?.last_name }}</h4>
                <NuxtLink to="/user/change-info">
                    <EditSvg />
                </NuxtLink>
            </div>
            <ul class="profile-user__block-list">
                <li><span>Почта:</span> {{ data?.email }}</li>
                <li><span>Телефон:</span> {{ data?.phone_number }}</li>
            </ul>
        </div>
        <div class="profile-user__block">
            <div class="profile-user__block-header">
                <h4>Пароль</h4>
                <NuxtLink to="/user/change-password">
                    <EditSvg />
                </NuxtLink>
            </div>
            <p>**********</p>
        </div>
        <div class="profile-user__block">
            <div class="profile-user__block-header">
                <h4>Мои адреса</h4>

                <NuxtLink to="/user/addresses">
                    <EditSvg />
                </NuxtLink>
            </div>
            <ul class="profile-user__block-list">
                <li class="profile-user__address"
                    v-for="(address, index) in data.addresses"
                    :key="address.id"><span>{{ index + 1 }}.</span>{{
                        formatAddress(address) }}</li>
            </ul>
            <VLink to="/user/address-add">Добавить адрес</VLink>
        </div>
    </div>
</template>
<script lang="ts" setup>

import ENDPOINTS from '~/constants/endpoints';

const props = defineProps<{
    data: any
}>()

const formatAddress = (address: any) => {
    return `г.${address.city.name}, ул. ${address.street} ${address.house_number}`
}




</script>

<style lang="scss" scoped>
.profile-user {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: 30px;

    @include atLg {
        grid-template-columns: 1fr;
        gap: 16px;
    }

    &__address {
        margin-bottom: 10px;
    }

    // .profile-user__block

    &__block {
        background-color: #fff;
        padding: 30px;
        border-radius: 24px;



        @include atLg {
            padding: 16px;
        }
    }

    // .profile-user__block-header

    &__block-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;

        h4 {
            font-size: 30px;

            @include atLg {
                font-size: 24px;
            }
        }
    }

    // .profile-user__block-list

    &__block-list {
        color: #2C2C2C;
        display: flex;
        flex-direction: column;
        gap: 14px;

        span {
            color: rgba(44, 44, 44, 0.40);
            margin-right: 10px;
        }
    }
}
</style>