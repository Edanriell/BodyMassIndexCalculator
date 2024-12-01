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
		padding: 32rem 24rem 24rem 24rem;

		@media (width >= 768px) {
			padding: 32rem 41rem 40rem 41rem;
		}

		@media (width >= 1440px) {
			padding: 75rem 140rem 28rem 140rem;
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
