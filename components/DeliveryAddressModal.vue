<template>
    <VueFinalModal class="delivery-address-modal"
        overlay-transition="vfm-fade" content-transition="vfm-fade"
        content-class="delivery-address-modal__content">

        <div v-if="activeLink === 0">
            <div class="delivery-address-modal__header">
                <h4 class="delivery-address-modal__title">Адрес доставки
                </h4>
                <button class="delivery-address-modal__close"
                    @click="emit('close', selected)">
                    <ModalCloseSvg />
                </button>
            </div>
            <NuxtLink class="delivery-address-modal__add"
                to="/user/address-add">
                <AddSvg /> Добавить новый адрес
            </NuxtLink>
            <div class="delivery-address-modal__list"
                v-if="user.addresses.length">
                <label class="delivery-address-modal__item"
                    :class="{ 'delivery-address-modal__item_active': i.id === selected.id }"
                    v-for="i in user.addresses" :key="i.id">
                    <input :value="i" type="radio" v-model="selected">
                    <div class="delivery-address-modal__item-content">
                        <p>{{ formatAddress(i) }}</p>

                    </div>
                </label>
            </div>
            <div class="delivery-address-modal__button">
                <VBtn @click="emit('close', selected)">Привезти сюда
                </VBtn>
            </div>
        </div>
        <DeliveryAdressAddModal @onBack="onBack" @onAdd="emit('close')"
            v-else />
    </VueFinalModal>
</template>


<script lang="ts" setup>
import { VueFinalModal, useModal } from 'vue-final-modal';
import { useAuthStore } from '~/store/auth';
interface IAddress {
    city: {
        name: string
    },
    street: string,
    house_number: string
}
const { user } = storeToRefs(useAuthStore())


const selected = ref<any>(user.value.addresses[0] || null)
const formatAddress = (address: IAddress) => {
    if (address) {
        return `г.${address.city.name && address.city.name}, ул. ${address.street} ${address.house_number}`
    }
}
const emit = defineEmits(['close', 'add'])
const activeLink = ref(0)

const onBack = () => {
    activeLink.value--
}


</script>

<style lang="scss" >
.delivery-address-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;

    &__content {
        background: white;
        padding: 30px;
        border-radius: 24px;
        width: 740px;
        position: relative;

        @include atMd {
            padding: 10px;
        }

    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    // .delivery-address-modal__close

    &__close {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 16px;
        border-radius: 100px;
        background: $text-40;

        @include atMd {
            position: static;
        }
    }

    // .delivery-address-modal__title

    &__title {
        color: $text;
        font-size: 24px;
        font-weight: 700;
    }

    // .delivery-address-modal__add

    &__add {
        display: flex;
        align-items: center;
        color: $additional;
        gap: 8px;
        margin-top: 14px;
    }

    // .delivery-address-modal__list

    &__list {
        margin-top: 14px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__button {

        width: 100%;
        margin-top: 24px;
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            width: 220px !important;

            @include atSm {
                width: 100% !important;
            }
        }

    }

    &__item {
        padding: 12px;
        border-radius: 12px;
        border: 2px solid rgba(0, 0, 0, 0.20);
        background: white;
        display: flex;
        cursor: pointer;
        align-items: center;
        gap: 20px;

        &_active {
            border-color: $additional;
        }

        input {
            width: 24px;
            height: 24px;
        }


        p {
            color: $text;
        }

        span {
            color: $text-60;
        }



    }
}
</style>