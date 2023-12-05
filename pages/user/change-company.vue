<template>
    <ProfileWrapper>
        <template #default="{ back }" v-if="data">

            <div v-if="data" class="change-company">
                <ProfileChangeCompanyInfo :data="data" />
                <ProfileChangeCompanyAddress :user="data" />
            </div>
        </template>
    </ProfileWrapper>
</template>

<script lang="ts" setup>
import type { UserCompany } from '~/dto/user';
definePageMeta({
    middleware: ['logged-in']
})

const { data, status } = await useAuthFetch<UserCompany>('/api/profile', {
    method: 'get'
})
</script>

<style lang="scss" scoped>
.change-company {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
</style>