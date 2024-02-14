<template>
    <h1 class="hide">Artfood - магазин кондитеских товаров</h1>
    <div class="container">
        <MainPromo v-if="discounts" class="promo"
            :discounts="discounts?.results" />

    </div>
    <MainDiscountProducts class="discount" />
    <MainPopularProducts class="popular" />
    <TextLine />
    <MainNewProducts />
    <div class="container">
        <MainPromo v-if="discounts" class="slider"
            :discounts="discounts?.results" />
        <MainPartners class="brands" />
    </div>
    <div class="bg-grey">
        <MainPopularCategories class="categories" />
        <MainAdvantages />
        <div class="container">
            <MainAbout />
        </div>
    </div>
    <MainBlogBlock class="blog-block" />
</template>
<script lang="ts" setup>
import { useFavoriteStore } from '~/store/favorite';
import type { ListDiscount } from '~/types/api-schema';

const { data: discounts } = useFetch<ListDiscount[]>('/api/discounts-is_show')

useHead({
    title: 'Artfood - интернет магазин кондитерских товаров',
    meta: [
        { name: 'keywords', content: 'Artfood, artfood shop, артфуд, магазин для кондитеров, artfood', },
        {
            name: 'description',
            content: 'ArtFood - ваш надежный партнер в мире кондитерского сырья. Мы предлагаем широкий ассортимент продукции самого высокого качества. Наша специализация - поставка и продажа кондитерских ингредиентов для профессиональных кондитеров, как местного, так и импортного производства. предприятий общественного питания и любителей сладкого творчества. Наше портфолио включает в себя широкий выбор продуктов, от высококлассных ингредиентов до инновационных решений для творчества в кондитерском искусстве.'
        }
    ]

})
</script>
<style lang="scss" scoped>
.hide {
    display: none;
}

.promo {
    margin-top: 40px;

    @include atMd {
        margin-top: 16px;
    }
}

.blog-block {
    padding-bottom: 100px;

    @include atMd {
        padding-bottom: 60px;
    }
}

.popular,
.discount {
    margin-top: 120px;

    @include atMd {
        margin-top: 80px;
    }
}


.slider {
    margin-top: 120px;
    padding-bottom: 120px;

    @include atMd {
        padding-bottom: 80px;
        margin-top: 100px;
    }
}

.brands {
    padding-top: 120px;
    margin-top: 120px;

    @include atMd {
        padding-top: 70px;
        margin-top: 70px;
    }
}

.bg-grey {
    background-color: #F9F9F9;
    padding-top: 120px;
    margin-top: 120px;

    @include atMd {
        padding-top: 70px;
        margin-top: 70px;
    }
}
</style>