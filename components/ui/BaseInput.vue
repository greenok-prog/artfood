<template>
    <div class="base-input">
        <input class="base-input__input" :placeholder="placeholder"
            :class="{ 'base-input_error': errorMessage?.length }"
            v-model="value" :type="type">
        <span class="base-input__error">{{ errorMessage }}</span>
    </div>
</template>
<script lang="ts" setup>
const props = withDefaults(defineProps<{
    errorMessage?: string;
    modelValue?: string,
    placeholder?: string,
    type?: 'text' | 'password' | 'email' | 'tel'
}>(), {
    type: 'text'
})
const emit = defineEmits(['update:modelValue'])
const value = computed({
    get: () => props.modelValue,
    set: (v) => emit('update:modelValue', v)
})

</script>
<style lang="scss" scoped>
.base-input {
    width: 100%;



    &__input {
        width: 100%;
        height: 54px;
        outline: none;
        border-radius: 50px;
        border: 1px solid rgba(44, 44, 44, 0.10);
        background: #FFF;
        padding: 20px;
        font-size: 16px;
        width: 100%;
        color: #2C2C2C;

        &:focus {
            border: 1px solid $additional;
        }
    }

    &_error {
        border: 1px solid $warning;
    }


    &::placeholder {
        color: rgba(44, 44, 44, 0.40);
        ;
    }

    &__error {
        text-align: left;
        width: 100%;
        color: red;
        font-size: 13px;
    }


}
</style>