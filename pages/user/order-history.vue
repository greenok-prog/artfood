<template>
    <ProfileWrapper>
        <template #default="{ back }" v-if="data">
            <ProfileBack @onClick="back()">История заказов</ProfileBack>
            <ProfileOrderHistory :orderList="data.results" />
        </template>
    </ProfileWrapper>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ['logged-in']
})
const { data } = await useAuthFetch('/api/order', {
    method: 'get'
})
const emit = defineEmits(['back'])

</script>