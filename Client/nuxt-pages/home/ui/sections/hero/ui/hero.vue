<script lang="ts" setup>
	import { BmiCalculator } from "@features/bmi-calculator/ui";
</script>

<template>
	<section class="hero-section">
		<div class="hero-section__content-wrapper">
			<h1 class="hero-section__title">Body Mass Index Calculator</h1>
			<p class="hero-section__text">
				Better understand your weight in relation to your height using our body mass index
				(BM) calculator. While BMI is not the sole determinant of a healthy weight, it
				offers a valuable starting point to evaluate your overall health and well-being.
			</p>
		</div>
		<BmiCalculator />
	</section>
</template>

<style scoped>
	.hero-section {
		margin: 0 24rem;

		@media (width >= 768px) {
			margin: 0 41rem;
		}

		@media (width >= 1440px) {
			margin: 0 140rem;
		}
	}

	.hero-section__content-wrapper {
		position: relative;
	}

	.hero-section__title {
		font-family: var(--font-family), sans-serif;
		font-weight: 600;
		font-size: 48rem;
		line-height: 110%;
		letter-spacing: -0.05em;
		text-align: center;
		color: var(--gunmetal);
		margin: 0 7rem 24rem 7rem;

		@media (width >= 768px) {
			margin: 0 177rem 24rem 177rem;
		}

		@media (width >= 1440px) {
			text-align: left;
			font-size: 64rem;
			margin: 0 716rem 35rem 0;
		}
	}

	.hero-section__text {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 16rem;
		line-height: 150%;
		text-align: center;
		color: var(--dark-electric-blue);

		@media (width >= 1440px) {
			text-align: left;
			margin: 0 695rem 0 0;
		}
	}
</style>
