<template>
    <div class="auth-layout">
        <Header />
        <main class="auth-layout__main container">
            <PathHistory :path="['Регистрация']"
                class="auth-layout__path" />
            <div class="auth-layout__block">
                <div class="auth-layout__block-container">
                    <NuxtPage />
                </div>
            </div>
        </main>
        <Footer class="footer" />
        <MobileNavbar />
    </div>
</template>
<script lang="ts" setup>


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



    .footer {
        margin-top: 60px;
    }

    &__block {
        margin-top: 35px;
        border-radius: 24px;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        @include atMd {
            margin-top: 25px;
        }


        &-container {
            width: 600px;
            background: #F9F9F9;
            padding: 30px;
            border-radius: 24px;


            @include atMd {
                padding: 20px;
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

