<template>
    <div class="registration-individual">
        <h3>Регистрация физического лица</h3>
    </div>
    <KeepAlive>
        <AuthIndividualRegistrationForm v-if="route.query.step === '1'"
            @goToNext="goToLocationForm" />
    </KeepAlive>
</template>
<script lang="ts" setup>
definePageMeta({
    layout: 'registration'
})
const route = useRoute()
const router = useRouter()
const goToLocationForm = () => {
    return navigateTo('/auth/registration/individual?step=2')
}
const goUserForm = () => {
    return navigateTo('/auth/registration/individual?step=1')
}

onMounted(() => {
    if (!route.query.step) {
        router.push('/auth/registration/individual?step=1')
    }
})

</script>

<style lang="scss" scoped>
.registration-individual {
    h3 {
        text-align: center;
        color: $text;
        font-size: 24px;
        font-weight: 700;
    }
}
</style>
