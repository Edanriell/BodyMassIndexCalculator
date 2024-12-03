<script lang="ts" setup>
	import { Header } from "@widgets/header/ui";
</script>

<template>
	<Header />
	<main class="main">
		<slot />
	</main>
	<div class="decorative-image"></div>
</template>

<style scoped>
	.main {
		position: relative;
	}

	.decorative-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		user-select: none;
		pointer-events: none;
		border-radius: 0 0 35rem 35rem;
		height: 640rem;
		background: linear-gradient(315deg, #d6e6fe 0%, rgba(214, 252, 254, 0) 100%);
		z-index: -1;

		@media (width >= 1440px) {
			width: 978rem;
			height: 737rem;
			left: 24rem;
		}
	}
</style>
