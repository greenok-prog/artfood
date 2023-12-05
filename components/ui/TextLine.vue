<template>
    <div class="text-line">
        <p v-for="i in 20" :key="i">Новинки</p>
    </div>
</template>

<style lang="scss" scoped>
.text-line {
    display: flex;
    align-items: center;
    gap: 60px;
    overflow: hidden;
    margin-left: -20px;
    background-color: $main;
    padding: 15px 0;
    color: white;
    font-size: 18px;
    font-weight: 700;
    margin-top: 60px;
}
</style>