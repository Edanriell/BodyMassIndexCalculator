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

		@media (width >= 768px) {
			display: flex;
			flex-direction: row;
			width: 100%;
			justify-content: flex-end;
			padding-bottom: 34rem;
			margin-top: 17.0572vw;
			margin-bottom: 12.5vw;
		}

		@media (width >= 1440px) {
			margin: 410rem auto 96rem;
			width: 100%;
			column-gap: clamp(115rem, 7.9vw, 131rem);
			padding-bottom: unset;
			align-items: center;
			justify-content: center;
			max-width: 1160rem;
		}
	}

	.about-result-section__image-wrapper {
		position: relative;
		overflow: visible;
		border-radius: 32rem;
		width: 100%;
		height: 257rem;
		background: #e7f5fe;
		margin-bottom: 48rem;

		@media (width >= 768px) {
			width: 435rem;
			height: 299rem;
			position: absolute;
			top: unset;
			bottom: 0;
			left: -116rem;
			margin-bottom: unset;
		}

		@media (width >= 1440px) {
			position: relative;
			bottom: unset;
			left: unset;
			width: 564rem;
			height: 388rem;
			flex: 0 0 auto;
		}
	}

	.about-result-section__image {
		width: 311rem;
		height: 354rem;
		position: absolute;
		z-index: 2;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);

		@media (width >= 768px) {
			width: 360rem;
			height: 411rem;
			transform: unset;
			left: unset;
			right: 0;
		}

		@media (width >= 1440px) {
			width: 468rem;
			height: 533rem;
			right: unset;
			left: 50%;
			transform: translateX(-50%);
			flex: 0 0 auto;
		}
	}

	.about-result-section__content {
		display: flex;
		flex-direction: column;
		row-gap: 32rem;
		margin: 0 24rem;

		@media (width >= 768px) {
			margin: 0 41rem 0 383rem;
		}

		@media (width >= 1440px) {
			margin: unset;
			row-gap: 35rem;
			max-width: 465rem;
		}
	}

	.about-result-section__title {
		font-family: var(--font-family), sans-serif;
		font-weight: 600;
		font-size: 32rem;
		line-height: 110%;
		letter-spacing: -0.05em;
		color: var(--gunmetal);

		@media (width >= 1440px) {
			font-size: 48rem;
		}
	}

	.about-result-section__text {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 16rem;
		line-height: 150%;
		color: var(--dark-electric-blue);
	}
</style>
