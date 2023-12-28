<template>
    <div class="welcome-page">
        <h1>Добро пожаловать! </h1>
        <p>Это ваш личный кабинет. Здесь Вы можете отслеживать свою
            историю
            покупок, печать счета, изменять свою контактную информацию,
            адрес
            доставки, отслеживать информацию о доставке и многое другое.
        </p>
        <p>Если у вас есть какие-либо вопросы, <VLink to="#">свяжитесь с
                нами.
            </VLink>
        </p>
        <VBtn @click="goToLoginPage">Войти</VBtn>
    </div>
</template>


<script lang="ts" setup>
definePageMeta({
    layout: 'auth'
})

const route = useRoute()
const { data } = await useFetch('/api/confirm-email', {
    method: 'get',
    query: {
        token: route.query.token
    }
})
const goToLoginPage = () => {
    return navigateTo('/auth/login')
}
</script>

<style lang="scss" scoped>
.welcome-page {
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-align: center;


    h1 {
        font-size: 30px;
        color: $text;

        @include atMd {
            font-size: 24px;
        }
    }

    p {
        color: rgba(44, 44, 44, 0.80);
        ;

        @include atMd {
            font-size: 14px;
        }
    }
}
</style>