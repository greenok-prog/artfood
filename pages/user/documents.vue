<template>
    <ProfileWrapper>
        <template #default="{ back }">
            <ProfileBack @onClick="back">
                Документы
            </ProfileBack>
            <ProfileDocuments v-if="documents"
                :documents="documents?.results" />
        </template>
    </ProfileWrapper>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ['logged-in']
})

const emit = defineEmits(['back'])
const { data: documents } = await useAuthFetch('/api/document-list', {
    method: 'get'
})


</script>