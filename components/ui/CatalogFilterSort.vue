<template>
    <div class="base-dropdown">
        <div class="base-dropdown__value"
            :class="{ 'base-dropdown__value_active': isOpened }"
            @click="clickHandler">

            <span>{{ modelValue.name }}</span>
            <DropdownArrowSvg />
        </div>
        <div class="base-dropdown__options" v-if="isOpened">
            <span @click="onSelect(option)" class="base-dropdown__option"
                v-for="option in options" :key="option.id">{{ option.name
                }}</span>

        </div>
    </div>
</template>
<script lang="ts" setup>

const props = defineProps<{
    options: { id: number, name: string, value: string }[],
    modelValue: any,
}>()
const emit = defineEmits(['update:modelValue'])
const router = useRouter()
const route = useRoute()
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
    router.push({
        path: '/catalog',
        query: {
            ...route.query,
            ordering: v.value
        }
    })
    closeHanlder()
}
</script>
<style lang="scss" scoped>
.base-dropdown {
    width: 100%;
    position: relative;

    // .base-dropdown__value

    &__value {
        width: 100%;
        padding: 13px 20px;
        border-radius: 40px;
        background: #F1F3F8;
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: space-between;
        cursor: pointer;
        color: #61646D;

        :deep(svg) {
            path {
                fill: #737781;
            }
        }

        &_active {


            :deep(svg) {
                transform: rotate(180deg);
            }
        }


    }

    // .base-dropdown__options

    &__options {
        position: absolute;
        bottom: 0px;
        min-width: 220px;
        padding: 10px 20px;
        background: white;
        left: 0;
        top: 60px;
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

        &:hover {
            color: $additional;
        }

    }
}
</style>