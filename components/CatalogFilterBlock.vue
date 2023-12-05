<template>
    <div class="catalog-filter-block">
        <p class="catalog-filter-block__title">Фильтр</p>
        <div class="catalog-filter-block__list">
            <CatalogFilterDropdownWrapper v-if="brands" title="Бренд">
                <CatalogFilterList @onChange="changeBrand" :items="brands"
                    :activeItem="selectedBrand" />
            </CatalogFilterDropdownWrapper>
            <CatalogFilterDropdownWrapper
                v-if="priceInitial && priceInitial[0] !== priceInitial[1]"
                title="Цена, тг">
                <MultipleSlider v-model="priceValue"
                    :min="priceInitial[0]" :max="priceInitial[1]" />
            </CatalogFilterDropdownWrapper>
            <CatalogFilterDropdownWrapper v-if="countries" :titleSize="14"
                title="Страна производства">
                <CatalogFilterList :activeItem="selectedCountry"
                    @onChange="changeCountry" :items="countries" />
            </CatalogFilterDropdownWrapper>


        </div>
        <VBtn class="catalog-filter-block__button"
            @click="changeFilterHandler">Применить</VBtn>
    </div>
</template>
<script lang="ts" setup>
import { useFilter } from '~/store/filter';

interface Price {
    min_price: number,
    max_price: number
}
interface Country {
    id: number,
    name: string
}
interface Brand {
    id: number,
    name: string
}
interface CountriesResult {
    count: number,
    results: Country[]
}
interface Params {
    product_data__made_in?: string,
    product_data__manufacturer?: string,
    price_max?: number,
    price_min?: number
}
const emit = defineEmits(['closeModal'])
const route = useRoute()
const router = useRouter()
const { setBrand, setPrice, setCountry } = useFilter()
const { brand, country } = storeToRefs(useFilter())

const subcategory = computed(() => {
    return route.query.subcategory
})

const brands = ref<Brand[] | null>(null)


const countries = ref<Brand[] | null>(null)
const priceValue = ref<[number, number]>([0, 0])
const priceInitial = ref([0, 0])

const selectedCountry = ref<Country | null>(null)
const selectedBrand = ref<Country | null>(null)

const changeBrand = (brand: Country) => {
    selectedBrand.value = brand

}
const changeCountry = (country: Country) => {
    selectedCountry.value = country
}


const changeFilterHandler = () => {
    const params: Params = {}
    if (selectedCountry.value) {
        params.product_data__made_in = String(selectedCountry.value.id)
        setCountry(selectedCountry.value)
    }
    if (selectedBrand.value) {
        params.product_data__manufacturer = String(selectedBrand.value.id)
        setBrand(selectedBrand.value)
    }
    if (priceValue.value) {
        params.price_min = priceValue.value[0]
        params.price_max = priceValue.value[1]
        setPrice(String(priceValue.value[1]), String(priceValue.value[0]))
    }
    emit('closeModal')
    router.push({
        path: '/catalog',
        query: {
            ...route.query,
            ...params
        }
    })
}
watch(subcategory, async () => {
    const { data } = await useFetch<Brand[]>('/api/catalog-countries', {


    })
    countries.value = data.value.results
    if (route.query.product_data__made_in) {
        const country = data.value?.results.find(el => el.id === Number(route.query.product_data__made_in))
        if (country) {
            setCountry(country)
        }
    }

}, { immediate: true })
watch(subcategory, async () => {
    const { data } = await useFetch<Brand[]>('/api/brands', {
        query: {
            subcategory: route.query.subcategory
        },

    })
    brands.value = data.value
    if (route.query.product_data__manufacturer) {
        const brand = brands.value?.find(el => el.id === Number(route.query.product_data__manufacturer))
        if (brand) {
            setBrand(brand)
        }
    }

}, { immediate: true })


watch(subcategory, async () => {
    const { data } = await useFetch<Price>('/api/catalog-price', {
        query: {
            subcategory: route.query.subcategory
        },

    })
    if (data.value) {
        priceValue.value = [data.value.min_price, data.value.max_price]

        if (route.query.price_max && route.query.price_min) {
            priceInitial.value = [Number(route.query.min_price), Number(route.query.max_price)]
            setPrice(route.query.price_max, route.query.price_min)
        } else {
            priceInitial.value = [data.value.min_price, data.value.max_price]
        }
    }

}, { immediate: true })
watchEffect(() => {
    if (brand.value) {
        selectedBrand.value = brand.value
    } else {
        selectedBrand.value = null
    }
    if (country.value) {
        selectedCountry.value = country.value
    } else {
        selectedCountry.value = null
    }


},)
</script>
<style lang="scss" scoped>
.catalog-filter-block {
    width: 100%;
    border-radius: 14px;
    background: #F9F9F9;
    padding: 22px;


    &__title {
        color: #444;
    }

    &__list {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &__button {
        margin-top: 24px;
        height: 43px;
        padding: 0;
    }
}
</style>