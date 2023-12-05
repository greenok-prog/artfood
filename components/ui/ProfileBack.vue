<template>
    <div class="profile-back">
        <button @click="emit('onClick')">
            <ProfileBackArrowSvg />
        </button>
        <h2>
            <slot />
        </h2>
    </div>
</template>
<script lang="ts" setup>
const emit = defineEmits(['onClick'])
</script>
<style lang="scss" scoped>
.profile-back {
    display: none;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;

    h2 {
        font-size: 24px;
        color: #2C2C2C;
    }

    button {
        width: 34px;
        height: 34px;
        background: $additional;
        border-radius: 60px;
        display: flex;
        align-items: center;
        justify-content: center;

        ::deep(svg) {
            width: 12px;
            height: 12px;
            transform: rotate(-90deg);

            path {

                stroke: white;
            }
        }
    }

    @include atMd {
        display: flex;
    }
}
</style>