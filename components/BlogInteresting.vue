<template>
    <div class="blog-interesting">
        <h4 class="blog-interesting__title">Интересное для вас</h4>
        <div class="blog-interesting__list">
            <BlogInterestingCard />
            <BlogInterestingCard />
            <BlogInterestingCard />
            <BlogInterestingCard />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.blog-interesting {

    // .blog-interesting__title

    &__title {
        color: #312F30;
        font-size: 26px;
        font-weight: 700;
    }

    // .blog-interesting__list

    &__list {
        margin-top: 24px;
        gap: 14px;
        display: flex;
        flex-direction: column;
    }

}
</style>