<script lang="ts" setup></script>

<template>
	<header class="header">
		<NuxtImg
			class="logotype"
			height="auto"
			preload
			src="/images/vector/logotype.svg"
			width="auto"
		/>
	</header>
</template>

<style scoped>
	.header {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 24rem;
		padding: 32rem 0 24rem 0;

		@media (width >= 768px) {
			margin: 0 41rem;
			padding: 32rem 0 40rem 0;
		}

		@media (width >= 1440px) {
			margin: 0 140rem;
			padding: 75rem 0 0 0;
			justify-content: flex-start;
		}
	}

	.logotype {
		width: 40rem;
		height: 40rem;
		pointer-events: none;
		user-select: none;

		@media (width >= 1440px) {
			width: 64rem;
			height: 64rem;
		}
	}
</style>
