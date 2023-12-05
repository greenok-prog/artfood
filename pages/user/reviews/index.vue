<template>
    <ProfileWrapper>
        <template #default="{ back }">
            <ProfileBack @onClick="back()">Мои отзывы</ProfileBack>
            <ProfileReviews />
        </template>
    </ProfileWrapper>
</template>

<script lang="ts" setup>

const emit = defineEmits(['openMenu'])
</script>