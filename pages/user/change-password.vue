<template>
    <ProfileWrapper>
        <template #default="{ back }">

            <ProfileChangePasswordForm />
        </template>
    </ProfileWrapper>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ['logged-in']
})



</script>