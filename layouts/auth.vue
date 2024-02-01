<template>
    <div class="auth-layout">
        <Header />
        <main class="auth-layout__main container">
            <PathHistory :path="pathText" class="auth-layout__path" />
            <div class="auth-layout__block">
                <div class="auth-layout__block-container">
                    <NuxtLoadingIndicator />
                    <NuxtPage />
                </div>
            </div>
        </main>
        <Footer class="footer" />
    </div>
    <WhatsappLink class="whatsapp-link" />
    <MobileNavbar />
</template>
<script lang="ts" setup>
const router = useRouter()
const pathText = computed(() => {
    switch (router.currentRoute.value.path) {
        case '/auth/registration':
            return ['Регистрация']
        case '/auth/registration/welcome':
            return ['Личный кабинет', 'Успешно пройденная регистрация']
        case '/auth/login':
            return ['Вход в личный кабинет']
        case '/auth/password-recovery':
            return ['Личный кабинет', 'Восстановление пароля']
        case '/auth/password-recovery/submit':
            return ['Личный кабинет', 'Восстановление пароля']
        case '/auth/password-recovery/change-password':
            return ['Личный кабинет', 'Восстановление пароля']
    }
})
</script>
<style lang="scss" scoped>
.auth-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    &__path {
        margin-top: 35px;
    }

    &__main {
        flex-grow: 1;
    }

    &__path {
        display: flex;
        align-items: center;
        gap: 5px;
        color: #737781;
        font-size: 14px;
        margin-top: 35px;

        span {
            display: flex;
            align-items: center;
            gap: 3px;
        }
    }

    .footer {
        margin-top: 60px;
    }

    &__block {
        margin-top: 35px;
        border-radius: 24px;
        background: #F9F9F9;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: 80px 20px;

        @include atMd {
            padding: 30px 20px;
            margin-top: 25px;
        }


        &-container {
            width: 530px;

            @include atMd {
                width: 100%;
            }

        }
    }

    &__info {
        text-align: start;
        padding: 30px;
        border-top: 1px solid rgba(0, 0, 0, 0.30);
        margin-top: 60px;
        padding-bottom: 0;

        h4 {
            color: #2C2C2C;
            font-size: 16px;
        }

        p {
            margin-top: 14px;
            color: $text-60;
            font-weight: 400;
        }

    }

}
</style>

