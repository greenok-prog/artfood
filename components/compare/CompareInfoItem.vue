<template>
	<span class="compare-item">
		<p>
			<slot />
		</p>
	</span>
</template>

<style lang="scss" scoped>
.compare-item {
	background: white;
	border-radius: 6px;
	padding: 13px;
	width: 100%;
	display: flex;
	box-shadow: 0px 2px 10px 0px #E4E4E4;

	p {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		/* number of lines to show */
		line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;

		@include atMd {
			font-size: 12px;
		}
	}
}
</style>