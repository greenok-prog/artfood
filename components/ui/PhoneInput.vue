<template>
    <input :placeholder="placeholder" v-model="value" v-maska
        data-maska="+7 (###) ### ## ##"
        :class="{ 'phone-input_error': errorMessage?.length }"
        class="phone-input" />
    <span class="phone-input__error">{{ errorMessage }}</span>
</template>

<script lang="ts" setup>
const props = defineProps<{
    modelValue: string,
    placeholder?: string,
    errorMessage?: string,
}>()
const emit = defineEmits(['update:modelValue'])

const value = computed({
    get: () => props.modelValue,
    set: (v: string) => emit('update:modelValue', v)
})

</script>

<style lang="scss" scoped>
.phone-input {
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