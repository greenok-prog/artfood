<template>
    <OrderBlockWrapper>
        <template #title>
            2. Адрес доставки
        </template>
        <template #icon>
            <EditSvg @click="open" />
        </template>
        <div class="order-receiving">
            <p class="order-receiving__main">{{ formatedStreetAddress }}
            </p>

        </div>
    </OrderBlockWrapper>
</template>
<script lang="ts" setup>
import { useModal } from 'vue-final-modal';
import DeliveryAddressModal from './DeliveryAddressModal.vue';
import { useOrder } from '~/store/order';
interface Address {
    city: {
        name: string
    },
    floor: number,
    house_number: string,
    street: string,
    apartment_number: number
}
const props = defineProps<{
    addresses: Address[]
}>()
const emit = defineEmits(['onAdd'])
const { setAddress } = useOrder()
const selectedAddress = ref(props.addresses[0])
const formatedStreetAddress = computed(() => {
    if (selectedAddress.value) {
        return `г.${selectedAddress.value.city.name}, ул.${selectedAddress.value.street} ${selectedAddress.value.house_number}  ${selectedAddress.value.apartment_number ? ', квартира ' + selectedAddress.value.apartment_number : ''}`
    } else {
        return ''
    }
})

onMounted(() => {
    if (props.addresses[0]) {
        setAddress(props.addresses[0])
    }
})
const { open, close } = useModal({
    component: DeliveryAddressModal,
    attrs: {
        onAdd() {
            emit('onAdd')
        },
        onClose(v) {
            selectedAddress.value = v
            setAddress(v)
            close()


        },
    }
})
</script>
<style lang="scss" scoped>
.order-receiving {

    // .order-receiving__main

    &__main {
        color: $text;
    }

    // .order-receiving__inner

    &__inner {
        color: $text-60;
    }
}
</style>