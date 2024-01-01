<template>
    <div class="base-dropdown">
        <div class="base-dropdown__value"
            :class="{ 'base-dropdown__value_active': isOpened, 'base-dropdown__value_error': errorMessage }"
            @click="clickHandler">
            <span v-if="!modelValue.name && placeholder"
                class="base-dropdown__placeholder">{{ placeholder
                }}</span>
            <span v-else>{{ modelValue.name }}</span>
            <DropdownArrowSvg />
        </div>
        <div class="base-dropdown__options" v-if="isOpened">
            <span @click="onSelect(option)" class="base-dropdown__option"
                v-for="option in options">{{ option.name }}</span>

        </div>
    </div>
    <span v-if="errorMessage" class="base-dropdown__error">{{ errorMessage
    }}</span>
</template>
<script lang="ts" setup>

const props = defineProps<{
    options: any,
    modelValue: any,
    placeholder?: string,
    errorMessage?: string
}>()
const emit = defineEmits(['update:modelValue'])
const isOpened = ref(false)
const clickHandler = () => {
    if (isOpened.value) {
        isOpened.value = false
    } else {
        isOpened.value = true
    }
}
const closeHanlder = () => {
    isOpened.value = false
}
const onSelect = (v: any) => {
    emit('update:modelValue', v)
    closeHanlder()
}
</script>
<style lang="scss" scoped>
.base-dropdown {
    width: 100%;
    position: relative;

    &__placeholder {
        color: rgba(44, 44, 44, 0.70);

    }

    &__error {
        text-align: left;
        width: 100%;
        color: red;
        font-size: 13px;
    }

    // .base-dropdown__value

    &__value {
        width: 100%;
        padding: 20px;
        border-radius: 50px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        border: 1px solid rgba(44, 44, 44, 0.10);

        &_active {
            border: 1px solid $additional;

            svg {
                transform: rotate(180deg);
            }
        }

        &_error {
            border: 1px solid $warning;
        }

        &:focus {
            border: 1px solid $additional;
        }
    }

    // .base-dropdown__options

    &__options {
        position: absolute;
        bottom: 0px;
        padding: 10px 20px;
        background: white;
        left: 0;
        top: 70px;
        border-radius: 24px;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: fit-content;
        z-index: 5;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.20);
        cursor: pointer;



    }

    // .base-dropdown__option

    &__option {
        padding: 10px 0px;

    }
}
</style>