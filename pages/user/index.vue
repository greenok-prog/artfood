<template>
    <ProfileWrapper>
        <template #default="{ back }">
            <ProfileBack @onClick="back">
                Мой профиль
            </ProfileBack>
            <div v-if="data">
                <ProfileUser v-if="data?.user_type === 'individual'"
                    :data="data" />
                <ProfileCompany v-if="data?.user_type === 'company'"
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
const { setUser, getUser } = useAuthStore()
const { user } = storeToRefs(useAuthStore())

const { data } = await useAuthFetch('/api/profile')
setUser(data.value)
</script>