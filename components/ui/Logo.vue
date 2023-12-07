<template>
    <div class="logo" :class="{ 'logo-dark': type === 'dark' }">
        <div>
            <ArtfoodLogoSvg />
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
        svg {
            width: 72px;
            height: 72px;
            margin-bottom: -5px;
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