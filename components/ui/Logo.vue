<template>
    <div class="logo" :class="{ 'logo-dark': type === 'dark' }">
        <div>
            <span>ART Food</span>
        </div>
        <span>Магазин товаров
            для кондитера</span>
    </div>
</template>
<script lang="ts" setup>
withDefaults(defineProps<{
    type?: 'light' | 'dark'
}>(), {
    type: 'light'
})
</script>
<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    gap: 13px;
    width: 250px;

    div {
        width: 93px;
        height: 49px;

        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 50px;

        span {
            font-size: 18px;
            font-weight: 700;
            color: #212B36;
        }
    }

    span {
        max-width: 144px;
        color: white;
        line-height: 135%;

        @include atXXl {
            font-size: 14px;
            max-width: 120px;
        }
    }

    &-dark {
        div {
            background-color: #2C2C2C;

            span {
                color: white;
            }
        }

        span {
            color: #2C2C2C;
        }
    }
}
</style>