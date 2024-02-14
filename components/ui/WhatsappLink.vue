<template>
	<div class="whatsapp-link" aria-label="Chat on WhatsApp">
		<NuxtLink to="https://wa.me/77472454399" target="_blank">
			<img src="/whatsapp_icon.png" alt="whatsapp" width="70"
				height="70">
		</NuxtLink>


	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.whatsapp-link {
	position: fixed;
	left: 20px;
	bottom: 3rem;
	z-index: 999;
	width: 70px;
	height: 70px;

	@include atMd {
		bottom: 5rem;
	}

}
</style>