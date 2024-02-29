<template>
	<ProfileWrapper>
		<template #default="{ back }">
			<div class="profile-addresses">
				<AddressAddForm />
			</div>
		</template>
	</ProfileWrapper>
</template>

<script lang="ts" setup>

definePageMeta({
	middleware: ['logged-in']
})
// const {} = await useFetch('/api/ad')

</script>

<style lang="scss" scoped>
.text {
	color: black;
}
</style>