<template>
    <ProfileWrapper>
        <template #default="{ back }">
            <ProfileBack @onClick="back">
                Поддержка
            </ProfileBack>
            <ProfileSupportForm />
        </template>
    </ProfileWrapper>
</template>


<script lang="ts" setup>
definePageMeta({
    middleware: ['logged-in']
})
</script>