<template>
    <div class="order">
        <div class="container">
            <div class="order__top">
                <PathHistory class="order__path"
                    :path="['Главная', 'Корзина', 'Оформление заказа']" />
                <div class="order__top-message">Вы зарегистрированы, как
                    физическое лицо. <VLink to="/auth/login">Переключиться
                        на юридическое лицо
                    </VLink>
                </div>
            </div>
            <div class="order__header">
                <ProfileBack class="order__header-back"
                    @on-click="navigateToCart">
                    Оформление заказа
                </ProfileBack>
                <h2 class="order__title">Оформление заказа</h2>
                <VBtn @click="navigateToCart" class="order__back"><span>
                        <ProfileBackArrowSvg />Назад к корзине
                    </span></VBtn>
            </div>
            <div class="order__content">
                <div v-if="data" class="order__content-left">
                    <OrderInvoicePayment
                        v-if="data.user_type === 'company'" />
                    <OrderReceivingMethod @select-method="selectMethod" />
                    <OrderReceivingAdress :addresses="data.addresses" />
                    <OrderUserDetails :user="data" />
                    <OrderCompanyDetails
                        v-if="data.user_type === 'company'"
                        :user="data" />
                </div>
                <OrderTotal @order="submitHandler"
                    class="order__content-total" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { UserCompany } from '~/dto/user';
import { useAuthStore } from '~/store/auth';
import { useCartStore } from '~/store/cart';
import { useOrder } from '~/store/order';
const user = useAuthStore()
const { deliveryAddress } = storeToRefs(useOrder())
const { data } = await useAuthFetch<UserCompany>('/api/profile', {
    method: 'get'
})
const cartId = useCookie('cartId')
const receiveMethod = ref('')
const cartStore = useCartStore()
const router = useRouter()
const submitHandler = async (paymentMethod: 'cash' | 'card' | 'non_cash') => {
    const { data, status } = await useAuthFetch('/api/order', {
        method: 'post',
        body: {
            delivery_method: receiveMethod.value === 'delivery',
            payment_method: paymentMethod,
            delivery_address: deliveryAddress.value ? deliveryAddress.value.id : user.user.addresses[0].id,
            contact_phone: user.user.phone_number
        }
    })
    if (status.value === 'success') {
        cartId.value = null
        cartStore.$reset()
        if (paymentMethod === 'card') {
            const { data: payment } = await useAuthFetch('/api/payment', {
                method: 'post',
                body: {
                    order_id: data.value.id
                }
            })
            await navigateTo(payment.value.pay_url, {
                external: true
            })

        } else {
            return navigateTo('/user/order-history')
        }
    }

}

const selectMethod = (v: string) => {
    receiveMethod.value = v
}

const navigateToCart = () => {
    return navigateTo('/cart')
}
onMounted(() => {
    if (!cartStore.cartLength) {
        return navigateTo('/cart')
    }
})
</script>
<style lang="scss" scoped>
.order {
    background: #F5F5F5;
    padding-bottom: 120px;

    @include atMd {
        padding-bottom: 80px;
    }

    // .order_top

    &__top {
        padding-top: 35px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
            color: $text;

            @include atXl {
                display: none;
            }

        }
    }


    // .order__header

    &__header {
        margin-top: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &-back {
            margin-bottom: 0;
        }

        @include atMd {
            margin-top: 28px;
        }
    }

    // .order__title

    &__title {
        color: $neutral;
        font-size: 30px;
        font-weight: 700;

        @include atMd {
            display: none;
        }
    }

    // .order__back

    &__back {
        width: 185px;
        height: 43px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 60px;

        span {
            display: flex;
            gap: 3px;
            align-items: center;
            justify-content: flex-start;
        }

        @include atMd {
            display: none;
        }
    }

    // .order__content

    &__content {
        margin-top: 33px;
        display: flex;
        align-items: flex-start;
        gap: 30px;
        justify-content: space-between;

        @include atLg {
            flex-direction: column;
            gap: 40px;
        }

        &-left {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 903px;

            @include atXl {
                width: 600px;
            }

            @include atLg {
                width: 100%;
            }

            @include atMd {
                gap: 10px;
            }
        }

        @include atMd {
            margin-top: 20px;
        }

        &-total {
            width: 437px;

            @include atLg {
                width: 100%;
            }
        }
    }
}
</style>