<template>
    <ProfileWrapper>
        <template #default="{ back }">

            <ProfileChangeInfoForm />
        </template>
    </ProfileWrapper>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ['logged-in']
})



</script>