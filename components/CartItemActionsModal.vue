<template>
    <VueFinalModal class="cart-actions-modal"
        content-class="cart-actions-modal__content"
        overlay-transition="vfm-fade" content-transition="vfm-fade">
        <div class="cart-actions-modal__actions">
            <div class="cart-actions-modal__actions-item"
                @click="addToFavoriteHandler" v-if="!isFavorite">
                Перенести в избранное
            </div>
            <div v-else class="cart-actions-modal__actions-item"
                @click="removeFromFavoriteHandler">
                Удалить из избранного
            </div>
            <div class="cart-actions-modal__actions-border"></div>
            <div @click="removeFromcartHandler"
                class="cart-actions-modal__actions-item cart-actions-modal__actions-remove">
                Удалить
            </div>
        </div>
        <span class="cart-actions-modal__cancel" @click="emit('close')">
            Отменить
        </span>
    </VueFinalModal>
</template>

<script lang="ts" setup>
import { VueFinalModal } from 'vue-final-modal';
import { useCartStore } from '~/store/cart';
import { useFavoriteStore } from '~/store/favorite';
import type { ListProduct } from '~/types/api-schema';
const emit = defineEmits(['close'])
const { addToFavorite, removeFromFavorite } = useFavoriteStore()
const { removeFromcart } = useCartStore()
const props = defineProps<{
    isFavorite?: boolean,
    product: ListProduct
}>()
const addToFavoriteHandler = () => {
    addToFavorite(props.product)
    emit('close')

}
const removeFromFavoriteHandler = () => {
    removeFromFavorite(props.product)
    console.log(useFavoriteStore().favorite);


    emit('close')
}
const removeFromcartHandler = () => {
    removeFromcart(props.product)
}


</script>

<style lang="scss">
.cart-actions-modal {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 0 8px;
    padding-bottom: 24px;

    &__content {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 6px;
    }

    // .cart-actions-modal__actions

    &__actions {
        background: white;
        padding: 16px 0;
        display: flex;
        flex-direction: column;
        gap: 14px;
        border-radius: 10px;

        &-border {
            width: 100%;
            height: 1px;
            background: rgba(44, 44, 44, 0.10);
        }
    }

    // .cart-actions-modal__actions-item

    &__actions-item {
        width: 100%;
        text-align: center;
        color: $text;
    }

    // .cart-actions-modal__actions-remove

    &__actions-remove {
        color: $warning;
    }

    // .cart-actions-modal__cancel

    &__cancel {
        padding: 16px 0;
        color: $text;
        text-align: center;
        border-radius: 10px;
        background: #FFF;
    }
}
</style>