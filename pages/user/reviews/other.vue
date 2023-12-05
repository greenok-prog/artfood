<template>
    <ProfileWrapper>
        <template #default="{ back }">
            <ProfileBack @onClick="back()">Мои отзывы</ProfileBack>
            <ProfileOtherReviews />
        </template>
    </ProfileWrapper>
</template>

<script lang="ts" setup>

</script>