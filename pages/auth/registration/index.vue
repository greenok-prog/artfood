<template>
    <div class="registration">
        <h4 class="registration__title">Регистрация</h4>
        <p class="registration__step">1. Выберите, как вы хотите
            зарегистрироваться</p>
        <div class="registration__toggler">
            <button @click="selectIndividual"
                class="registration__toggler-button"
                :class="{ 'active': activeType === 'individual' }">
                Физическое лицо
            </button>
            <button @click="selectEntity"
                class="registration__toggler-button"
                :class="{ 'active': activeType === 'entity' }">
                Юридическое лицо
            </button>
        </div>
        <RegistrationTypeSelector v-if="activeType"
            @selectEntity="selectEntity"
            @selectIndividual="selectIndividual"
            class="registration__selector" />
        <div class="registration__content" v-if="activeType === 'entity'">
            <strong>* Регистрация юридического лица</strong>
            <p>
                Заполните информацию о компании, чтобы наш
                интернет-магазин мог предоставить вам более
                персонализированный опыт покупок, а также предложить
                специальные условия и скидки, адаптированные под
                потребности вашего бизнеса. Регистрация как юридического
                лица позволит вам получить доступ к оптовым ценам,
                расширенному ассортименту товаров и удобной системе
                управления заказами. Мы ценим каждого нашего клиента и
                стремимся сделать сотрудничество с нами максимально
                удобным и выгодным для вашего кондитерского бизнеса.
            </p>
        </div>
        <div class="registration__content"
            v-if="activeType === 'individual'">
            <strong>* Регистрация физического лица</strong>
            <p>
                Заполните информацию о компании, чтобы наш
                интернет-магазин мог предоставить вам более
                персонализированный опыт покупок, а также предложить
                специальные условия и скидки, адаптированные под
                потребности вашего бизнеса. Регистрация как юридического
                лица позволит вам получить доступ к оптовым ценам,
                расширенному ассортименту товаров и удобной системе
                управления заказами. Мы ценим каждого нашего клиента и
                стремимся сделать сотрудничество с нами максимально
                удобным и выгодным для вашего кондитерского бизнеса.
            </p>
        </div>
        <div class="registration__actions">
            <p>У меня есть учетная запись. <VLink to="/auth/login"
                    type="underline">Войти</VLink>
            </p>
            <!-- <NuxtLink :to="navigateToNextPage"> -->
            <VBtn @click="useRouter().push(navigateToNextPage)">
                Далее</VBtn>
            <!-- </NuxtLink>-->
        </div>

    </div>
</template>
<script lang="ts" setup>

definePageMeta({
    layout: 'registration'
})
const activeType = ref<'entity' | 'individual'>('individual')
const selectEntity = () => {
    activeType.value = 'entity'
}
const selectIndividual = () => {
    activeType.value = 'individual'
}
const navigateToNextPage = computed(() => {
    if (activeType.value === 'entity') {
        return '/auth/registration/entity?step=1'
    } else {
        return '/auth/registration/individual?step=1'
    }
})
</script>
<style scoped lang="scss">
.registration {

    // .registration__title

    &__title {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
    }

    &__step {
        color: $text;
        text-transform: uppercase;
        margin-top: 20px;

        @include atMd {
            font-size: 14px;
        }
    }

    &__actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 85px;

        @include atMd {
            flex-direction: column;
            gap: 15px;
            margin-top: 20px;
        }

        p {
            color: rgba(44, 44, 44, 0.80);

            @include atMd {
                text-align: center;
                order: 2;
                width: 100%;
            }

        }

        button {
            width: 220px;
            height: 50px;
            padding: 0;

            @include atMd {
                order: 1;
                width: 100%;
            }
        }
    }

    &__content {
        margin-top: 30px;

        strong {
            color: #2C2C2C;
        }

        p {
            color: $text-60;
            font-weight: 400;
            line-height: 145%;
            margin-top: 10px;

            @include atMd {
                font-size: 15px;
            }
        }
    }

    // .registration__toggler

    &__toggler {
        margin-top: 20px;
        width: 100%;
        background: white;
        padding: 7px;
        border-radius: 70px;
        border: 1px solid $additional;
        height: 49px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 6px;

        @include atSm {
            display: none;
        }
    }

    &__selector {
        margin-top: 20px;
        display: none;

        @include atSm {
            display: block;
        }
    }

    // .registration__toggler-button

    &__toggler-button {
        padding: 6px 10px;
        color: #737781;
        border-radius: 100px;
        border: none;
        background: white;
        cursor: pointer;

        &.active {
            background: #F1F3F8;
            color: $additional;
        }
    }
}
</style>