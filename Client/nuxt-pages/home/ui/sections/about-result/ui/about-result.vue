<script lang="ts" setup></script>

<template>
	<section class="about-result-section">
		<div class="about-result-section__image-wrapper">
			<NuxtImg
				class="about-result-section__image"
				height="auto"
				preload
				src="/images/raster/person.png"
				width="auto"
			/>
		</div>
		<div class="about-result-section__content">
			<h2 class="about-result-section__title">What your BMI result means</h2>
			<p class="about-result-section__text">
				A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy
				weight may lower your chances of experiencing health issues later on, such as
				obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar
				content, incorporating ample fruits and vegetables. Additionally, strive for regular
				physical activity, ideally about 30 minutes daily for five days a week.
			</p>
		</div>
	</section>
</template>

<style scoped>
	.about-result-section {
		position: relative;
		margin-top: 168rem;
		margin-bottom: 71rem;
	}

	.about-result-section__image-wrapper {
		position: relative;
		overflow: visible;
		border-radius: 32rem;
		width: 375rem;
		height: 257rem;
		background: #e7f5fe;
		margin-bottom: 48rem;
	}

	.about-result-section__image {
		width: 311rem;
		height: 354rem;
		position: absolute;
		z-index: 2;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	.about-result-section__content {
		display: flex;
		flex-direction: column;
		row-gap: 32rem;
		margin: 0 24rem;
	}

	.about-result-section__title {
		font-family: var(--font-family), sans-serif;
		font-weight: 600;
		font-size: 32rem;
		line-height: 110%;
		letter-spacing: -0.05em;
		color: var(--gunmetal);
	}

	.about-result-section__text {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 16rem;
		line-height: 150%;
		color: var(--dark-electric-blue);
	}
</style>
