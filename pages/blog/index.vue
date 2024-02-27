<template>
    <div class="container">
        <div class="blog">
            <PathHistory 
              :path="[
                {name:'Главная', url: '/'}, 
                {name:'Новости', url: '/blog'}
              ]" 
            />
            <h2 class="blog__title">Новости</h2>
            <BlogList :list="data.results" class="blog__list" />
            <!-- <div class="blog__more">
                <VBtn class="blog__more-button">Еще статьи</VBtn>
            </div> -->
        </div>
    </div>
</template>
<script lang="ts" setup>
const { data } = await useFetch('/api/blog-list')


</script>
<style lang="scss" scoped>
.blog {
    margin-top: 50px;
    margin-bottom: 120px;

    @include atMd {
        margin-top: 28px;
        margin-bottom: 80px;
    }

    // .blog__title

    &__title {
        margin-top: 35px;
        color: $text;
        font-size: 40px;
        font-weight: 700;
        letter-spacing: -1px;

        @include atMd {
            margin-top: 26px;
            font-size: 24px;
        }
    }

    &__list {
        margin-top: 35px;
    }

    &__more {
        width: 100%;
        margin-top: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            width: 140px;
            height: 40px;
            padding: 0;
        }

    }
}
</style>