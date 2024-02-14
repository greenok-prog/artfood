<template>
    <div class="search-input-wrap">
        <div class="search-input">
            <input class="search-input__input" @click="openHistory"
                v-model="value" type="text" placeholder="Я хочу найти">
            <button @click.prevent="searchHandler" aria-label="search"
                class="search-input__icon"
                :class="{ 'search-input__icon__active': value.length }">
                <span>Искать</span>
                <SearchSvg />
            </button>
        </div>
        <SearchHistory v-if="history && historyIsOpened && history.length"
            :items="history.slice(0, 4)"
            @onSelect="historyIsOpened = false"
            @removeItem="removeHistoryItem" @clear="clearHistory"
            class="search-input__history" />
    </div>
</template>
<script lang="ts" setup>

const props = withDefaults(defineProps<{
    history?: boolean,
    modelValue: string,
}>(), {
    history: true
})
const input = ref(null)
const emit = defineEmits(['update:modelValue', 'onSearch'])
const value = computed({
    get: () => props.modelValue,
    set: (v: string) => emit('update:modelValue', v)
})
const localHistoryName = 'searchHistory'
const history = ref<string[]>([])
const historyIsOpened = ref(false)
const searchHandler = () => {
    if (value.value.length) {
        if (!history.value.includes(value.value)) {
            history.value.unshift(value.value)
            localStorage.setItem(localHistoryName, JSON.stringify(history.value))
        }
        emit('onSearch')
        historyIsOpened.value = false
    }
}
const removeHistoryItem = (item: string) => {
    history.value = history.value.filter((el, index) => el !== item)
}
const clearHistory = () => {
    history.value = []
    localStorage.setItem(localHistoryName, JSON.stringify(history.value))
}
const openHistory = () => {

    if (!historyIsOpened.value) {
        historyIsOpened.value = true
    } else {
        historyIsOpened.value = false
    }

}
const closeHistory = () => {
    historyIsOpened.value = false
}

onMounted(() => {
    const local = JSON.parse(localStorage.getItem(localHistoryName))
    if (local) {
        history.value = local
    }
})

</script>
<style lang="scss" scoped>
.search-input-wrap {
    width: 100%;
    position: relative;
}

.search-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    width: 100%;
    height: 50px;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 50px;
    padding-right: 0;

    &__history {
        position: absolute;
        top: 70px;
        left: 0;
        z-index: 2;

    }

    &__icon {
        transition: all 0.2s ease-in-out;
        margin-right: 20px;
        cursor: pointer;


        span {
            color: white;
            display: none;

        }

        &__active {

            background: $additional;
            display: flex;
            align-items: center;
            height: 43px;
            width: 120px;
            gap: 10px;
            padding: 10px 20px;
            border-radius: 60px;
            margin-right: 10px;

            :deep(svg) {
                path {
                    stroke: white;
                }
            }

            span {
                display: block;
            }

        }


    }

    input {
        height: 50px;
        width: 100%;
        outline: none;
        border: none;




    }




}
</style>
