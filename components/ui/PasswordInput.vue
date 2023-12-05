<template>
    <div class="password-input">
        <div class="password-input__inner">
            <BaseInput :placeholder="placeholder"
                :errorMessage="errorMessage" :type="inputType"
                class="password-input__input" v-model="value" />

            <ClosedEyeSvg v-if="inputType === 'password'"
                @click="inputType = 'text'" />
            <OpenedEye v-if="inputType === 'text'"
                @click="inputType = 'password'" />
        </div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
    modelValue?: string,
    placeholder?: string,
    errorMessage?: string,
}>()
const inputType = ref<'text' | 'password'>('password')
const emit = defineEmits(['update:modelValue'])
const value = computed({
    get: () => props.modelValue,
    set: (v) => emit('update:modelValue', v)
})
</script>

<style lang="scss" scoped>
.password-input {
    width: 100%;

    &__inner {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        // background-color: white;
        border-radius: 50px;
        // border: 1px solid rgba(44, 44, 44, 0.10);



    }

    &__error {
        width: 100%;
        color: red;
        text-align: left;
    }

    svg {
        cursor: pointer;
        position: absolute;
        right: 20px;
        top: 15px;

    }

    // .password-input__input

    &__input {
        width: 100%;


        :deep(input) {

            padding-right: 55px;


        }


    }
}
</style>