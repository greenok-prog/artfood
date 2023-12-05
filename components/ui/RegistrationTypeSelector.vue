<template>
    <div class="selector">
        <div class="selector__value" @click="isOpened = !isOpened">
            <p>{{ selectedValue }}</p>
            <ArrowDownSvg />
        </div>
        <div class="selector__params" v-if="isOpened">
            <span @click="selectEntity"
                :class="{ 'selector__params-item_active': selectedValue === 'Юридическое лицо' }"
                class="selector__params-item">
                Юридическое лицо
            </span>
            <span @click="selectIndividual"
                :class="{ 'selector__params-item_active': selectedValue === 'Физическое лицо' }"
                class="selector__params-item">
                Физическое лицо
            </span>
        </div>
    </div>
</template>
<script lang="ts" setup>
const emit = defineEmits(['selectIndividual', 'selectEntity'])
const isOpened = ref(false)
const selectedValue = ref('Физическое лицо')
const selectIndividual = () => {
    selectedValue.value = 'Физическое лицо'
    emit('selectIndividual')
    isOpened.value = false
}
const selectEntity = () => {
    selectedValue.value = 'Юридическое лицо'
    emit('selectEntity')
    isOpened.value = false
}

</script>
<style lang="scss" scoped>
.selector {
    position: relative;

    &__value {
        background: $additional;
        border-radius: 100px;
        padding: 6px 16px 6px 20px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        height: 40px;
        color: white;
        position: relative;
        width: 100%;
    }

    // .selector__params

    &__params {
        position: absolute;
        background-color: #fff;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        border-radius: 10px;
        padding: 16px 20px;
        margin-top: 5px;

    }

    // .selector__params-item

    &__params-item {

        &_active {
            color: $additional;
        }
    }
}</style>