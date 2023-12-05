<template>
    <div class="multiple-slider">
        <div class="multiple-slider__inputs">
            <div class="multiple-slider__input">
                <span>От</span>
                <input v-model="minvalue" type="number">
            </div>
            <div class="multiple-slider__input">
                <span>До</span>
                <input v-model="maxvalue" type="number">
            </div>

        </div>
        <MultiRangeSlider @input="updateValue" :minValue="minvalue"
            :maxValue="maxvalue" class="range-slider" :max="max"
            :min="min" />
    </div>
</template>

<script lang="ts" setup>
import MultiRangeSlider from "multi-range-slider-vue";

const emit = defineEmits(['update:modelValue'])
const props = defineProps<{
    modelValue: [number, number],
    min: number,
    max: number
}>()
const minvalue = ref(0)
const maxvalue = ref(5000)
const updateValue = (e: any) => {
    minvalue.value = e.minValue
    maxvalue.value = e.maxValue
    emit('update:modelValue', [minvalue.value, maxvalue.value])
}
onMounted(() => {
    minvalue.value = props.modelValue[0]
    maxvalue.value = props.modelValue[1]

})
</script>

<style lang="scss">
.multiple-slider {
    &__inputs {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &__input {
        width: 100%;
        background: white;
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.20);
        display: flex;
        flex-direction: column;
        gap: 3px;

        span {
            color: $text-40;
            font-size: 14px;
        }


        input {
            width: 100%;
            border: none;
            outline: none;
            color: $text;

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        }
    }
}

.range-slider {
    box-shadow: none;
    border: none;
    color: black;
    padding: 0;
    padding-top: 20px;

    .ruler {
        display: none !important;
    }

    .bar-inner {
        background-color: $neutral !important;
        appearance: none;
        border: none !important;
    }

    .bar {
        height: 3px;
        border: none;
    }

    .bar-left {
        padding: 0px !important;
    }

    *,
    *::before {
        box-shadow: none !important;
    }

    .thumb::before {
        background-color: $additional !important;
        border: none !important;
        width: 14px !important;
        height: 14px !important;
        margin: -5px !important;
    }

    .bar-left,
    .bar-right {
        background-color: #dddddd !important;
    }

    .label {
        width: 40px !important;
    }

    .min-caption,
    .max-caption {
        display: none !important;
    }

    .labels {
        display: none;
    }
}
</style>