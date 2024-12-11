<script lang="ts" setup>
	import { Link } from "@shared/ui/link/ui";
</script>

<template>
	<section class="not-found-section">
		<h1 class="not-found-section__title">404</h1>
		<p class="not-found-section__text">Sorry, the page you are looking for does not exist.</p>
		<Link href="/" target="_self">
			<span class="button__text">Go Back to Home</span>
		</Link>
	</section>
</template>

<style scoped>
	.not-found-section {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 20rem;
		padding-right: 16rem;
		padding-left: 16rem;

		@media (width > 768px) {
			padding-right: 40rem;
			padding-left: 40rem;
		}

		@media (width > 1440px) {
			padding-right: 160rem;
			padding-left: 160rem;
		}
	}

	.not-found-section__title {
		font-family: var(--font-family), sans-serif;
		font-weight: 600;
		font-size: 64rem;
		line-height: 90%;
		letter-spacing: -0.05em;
		color: #000;
	}

	.not-found-section__text {
		font-family: var(--font-family), sans-serif;
		font-weight: 200;
		font-size: 28rem;
		line-height: 90%;
		letter-spacing: -0.04em;
		color: #000;
		text-align: center;
		margin-bottom: 20rem;
	}

	.button__text {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 16rem;
		line-height: 90%;
		letter-spacing: -0.04em;
		color: #fff;
	}
</style>
