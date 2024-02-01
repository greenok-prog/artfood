<template>
    <div class="default-layout">
        <Header />
        <main class="default-layout__main">
            <NuxtLoadingIndicator />
            <NuxtPage />
        </main>

        <Footer class="footer" />
        <MobileNavbar />
        <WhatsappLink />
    </div>
</template>

<style lang="scss" scoped>
.default-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;



    &__main {
        flex-grow: 1;

    }
}
</style>

