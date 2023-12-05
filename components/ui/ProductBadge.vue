<template>
    <div class="product-badge" :class="badgeStyles"
        v-if="type === 'discount' && discount || type === 'new'">
        <span v-if="discount && type === 'discount'">-{{ discount
        }}%
            <slot />
        </span>
        <span v-else>NEW</span>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    type: 'discount' | 'new',
    discount?: number
}>()
const badgeStyles = {
    'product-badge_new': props.type === 'new',
    'product-badge_discount-base': props.type === 'discount' && props.discount < 49,
    'product-badge_discount-hot': props.type === 'discount' && props.discount >= 50
}

</script>

<style lang="scss" scoped>
.product-badge {
    padding: 8px 12px 6px 12px;
    border-radius: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;

    &_new {

        background: #5970E4;
        text-transform: uppercase;
    }

    &_discount-hot {
        background: #FD0101;
    }

    &_discount-base {
        background: #FDA701;
    }
}
</style>