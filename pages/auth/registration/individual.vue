<template>
    <div class="registration-individual">
        <h3>Регистрация физического лица</h3>
        <AuthIndividualRegistrationForm @goToNext="goToLocationForm" />
    </div>
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
