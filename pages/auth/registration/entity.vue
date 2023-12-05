<template>
    <div class="registration-individual">
        <h3>Регистрация юридического лица</h3>
    </div>
    <KeepAlive>
        <AuthIndividualRegistrationForm v-if="route.query.step === '1'"
            @goToNext="goToCompanyForm" />
    </KeepAlive>
    <KeepAlive>

        <AuthRegistrationCompany @goToNext="goToLocationForm"
            @goBack="goUserForm" v-if="route.query.step === '2'" />
    </KeepAlive>
    <KeepAlive>
        <AuthEntityRegistrationLoc @goBack="goToCompanyForm"
            v-if="route.query.step === '3'" />
    </KeepAlive>
</template>
<script lang="ts" setup>
definePageMeta({
    layout: 'registration'
})
const route = useRoute()
const router = useRouter()
const goToLocationForm = () => {
    return navigateTo('/auth/registration/entity?step=3')
}
const goToCompanyForm = () => {
    return navigateTo('/auth/registration/entity?step=2')
}
const goUserForm = () => {
    return navigateTo('/auth/registration/entity?step=1')
}

onMounted(() => {
    if (!route.query.step) {
        router.push('/auth/registration/entity?step=1')
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
