<template>
    <div class="container">
        <div class="contacts">
            <PathHistory class="contacts__path"
                :path="['Главная', 'Контакты']" />
            <Contacts />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.contacts {
    padding-bottom: 120px;
    margin-top: 26px;

    @include atMd {
        padding-bottom: 80px;
    }

    &__path {
        margin-top: 35px;

        @include atMd {
            margin-top: 26px;
        }
    }

}
</style>