
<template>
    <div class="profile-layout">
        <main class="profile-layout__main">
            <div class="container">
                <div class="profile-layout__top">
                    <PathHistory 
                      :path="[
                        {name:'Личный кабинет', url: '/user'}
                      ]" 
                    />
                    <!-- <p class="profile-layout__top-link">Вы
                        зарегистрированы,
                        как юридическое лицо.
                        <VLink type="underline" to="#">Переключиться на
                            физ лицо</VLink>
                    </p> -->
                </div>
                <div class="profile-layout__content">

                    <div v-if="isMobile ? !isShowPage : true" ref="navbar"
                        class="profile-layout__navbar">
                        <ProfileNavbar @onClick="onProfileLinkClick" />

                    </div>
                    <div class="profile-layout__content-main">
                        <slot v-if="isMobile ? isShowPage : true"
                            :back="onBackClick" :isShow="isShowPage" />
                    </div>
                </div>
            </div>
            <div class="profile-layout__bottom"
                v-if="isMobile ? isShowPage : true">
                <slot name="bottom"></slot>
            </div>
        </main>
    </div>
    <MobileNavbar />
</template>
<script lang="ts" setup>
import { useNuxtApp } from 'nuxt/app';
const { $viewport } = useNuxtApp()
// tablet: 768,
const isShowPage = ref(true)
const onProfileLinkClick = (link) => {
    isShowPage.value = true
};
const onBackClick = () => {
    isShowPage.value = false
};
const isMobile = computed(() => {
    return $viewport.isLessThan('tablet')
});

</script>
<style lang="scss" >
.profile-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;



    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 35px;

        @include atLg {
            flex-direction: column;
            align-items: flex-start;
        }

        &-link {
            color: #2C2C2C;

            @include atLg {
                display: none;
            }
        }
    }

    &__content {
        display: grid;
        grid-template-columns: 1fr 4fr;
        gap: 30px;
        margin-top: 30px;
        height: 100%;
        width: 100%;
        align-items: flex-start;
        min-height: 500px;

        @include atMd {
            grid-template-columns: 1fr;
            gap: 0;
        }

        // &-main {
        //     @include atMd {
        //         display: none;
        //     }

        // }
    }



    &__main {
        flex-grow: 1;
        background-color: #F9F9F9;
        padding-bottom: 120px;
    }
}
</style>
