<template>
    <div class="profile-documents">
        <h3>Документы</h3>
        <div class="profile-documents__list">
            <div class="profile-documents__item"
                v-for="document in documents" :key="document.id">
                <h4>{{ document.name }}</h4>
                <a download :href="document.file_payment_invoice"
                    target="_blank">
                    Скачать</a>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
    documents: any
}>()
console.log(props.documents);

const downloadDocument = async (value: any) => {


}
</script>
<style lang="scss" scoped>
.profile-documents {
    background-color: #fff;
    padding: 30px;
    border-radius: 24px;

    h3 {
        font-size: 24px;
        color: #2C2C2C;
        font-weight: 700;
    }

    // .profile-documents__list
    &__list {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 14px;

    }

    // .profile-documents__item
    &__item {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding-bottom: 14px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.20);
        ;

        &:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }

        h4 {
            font-size: 16px;
            color: #2C2C2C;
            font-weight: 700;
        }
    }
}
</style>