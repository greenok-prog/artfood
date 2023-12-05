<template>
    <div class="profile-user">
        <div class="profile-user__left">
            <div class="profile-user__block">
                <div class="profile-user__block-header">
                    <h4>{{ data?.username }} {{ data?.second_name }}</h4>
                    <NuxtLink to="/user/change-info">
                        <EditSvg />
                    </NuxtLink>
                </div>
                <ul class="profile-user__block-list">
                    <li><span>Почта:</span> {{ data?.email }}</li>
                    <li><span>Телефон:</span> {{ data?.phone_number }}
                    </li>
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
        </div>
        <div class="profile-user__block">
            <div class="profile-user__block-header">
                <h4>Данные о компании</h4>
                <NuxtLink to="/user/change-company">
                    <EditSvg />
                </NuxtLink>
            </div>
            <ul class="profile-user__block-list">
                <li><span>Название компании:</span> {{ data?.company_name
                }}</li>
                <li><span>Телефон компании:</span> {{ data?.phone_number
                }}</li>
                <li><span>Юридический адрес:</span> {{ formatAddress
                }}</li>
                <li><span>БИН/ИИН:</span> {{ data?.bin_iin }}</li>
                <li><span>ИИК:</span> {{ data?.iik }}</li>
                <li><span>Банк:</span> {{ data?.bank }}</li>
                <li><span>БИК:</span> {{ data?.bik }}</li>
            </ul>
        </div>


    </div>
</template>
<script lang="ts" setup>
import ENDPOINTS from '~/constants/endpoints';
import { useAuthStore } from '~/store/auth';
const store = useAuthStore()
const { user } = storeToRefs(store)
const props = defineProps<{
    data: any
}>()
const formatAddress = computed(() => {
    return `г.${props.data.company_address.city.name}, ул. ${props.data.company_address.street} ${props.data.company_address.house_number ?? props.data.company_address.house_number}`
})
</script>

<style lang="scss" scoped>
.profile-user {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: 30px;

    @include atXl {
        grid-template-columns: 1fr;
        gap: 16px;
    }

    &__left {
        display: flex;
        flex-direction: column;
        gap: 30px;

        @include atXl {
            gap: 16px;
        }
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