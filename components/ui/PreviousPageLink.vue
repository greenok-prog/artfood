<template>
    <NuxtLink class="previous-link">
        <ProfileNavbarIconSvg />
        Назад
    </NuxtLink>
</template>

<style lang="scss" scoped>
.previous-link {
    display: flex;
    align-items: center;
    gap: 6px;
    color: $additional;

    svg {
        transform: rotate(180deg);
    }
}
</style>