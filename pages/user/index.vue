<template>
    <ProfileWrapper v-if="user">
        <template #default="{ back }">
            <ProfileBack @onClick="back">
                Мой профиль
            </ProfileBack>
            <div>
                <ProfileUser v-if="user?.user_type === 'individual'"
                    :data="data" />
                <ProfileCompany v-if="user?.user_type === 'company'"
                    :data="data" />
            </div>
        </template>
    </ProfileWrapper>
</template>

<script lang="ts" setup>
import ENDPOINTS from '~/constants/endpoints';
import { useAuthStore } from '~/store/auth';
definePageMeta({
    middleware: ['logged-in']
})
const { setUser } = useAuthStore()
const { user } = storeToRefs(useAuthStore())

const { data } = await useAuthFetch(`/api/profile`, {
    method: 'get',


})
setUser(data.value)
</script>