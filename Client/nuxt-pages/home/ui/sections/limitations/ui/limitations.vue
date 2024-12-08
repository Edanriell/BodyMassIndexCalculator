<script lang="ts" setup>
	import { Icon } from "@shared/ui/icon/ui";
</script>

<template>
	<section class="limitations-section">
		<div class="limitations-section__content">
			<h2 class="limitations-section__title">Limitations of BMI</h2>
			<p class="limitations-section__text">
				Although BMI is often a practical indicator of healthy weight, it is not suited for
				every person. Specific groups should carefully consider their BMI outcomes, and in
				certain cases, the measurement may not be beneficial to use.
			</p>
		</div>
		<ul class="limitations-sections__limits-list limits-list">
			<li class="limits-list__item">
				<header class="limits-list__header">
					<Icon type="gender-intersex" />
					<h3 class="limits-list__title">Gender</h3>
				</header>
				<p class="limits-list__text">
					The development and body fat composition of girls and boys vary with age.
					Consequently, a child's age and gender are considered when evaluating their BMI.
				</p>
			</li>
			<li class="limits-list__item">
				<header class="limits-list__header">
					<Icon type="cake" />
					<h3 class="limits-list__title">Age</h3>
				</header>
				<p class="limits-list__text">
					In aging individuals, increased body fat and muscle loss may cause BMI to
					underestimate body fat content.
				</p>
			</li>
			<li class="limits-list__item">
				<header class="limits-list__header">
					<Icon type="flexed-biceps" />
					<h3 class="limits-list__title">Muscle</h3>
				</header>
				<p class="limits-list__text">
					BMI may misclassify muscular individuals as overweight or obese, as it doesn't
					differentiate muscle from fat.
				</p>
			</li>
			<li class="limits-list__item">
				<header class="limits-list__header">
					<Icon type="baby" />
					<h3 class="limits-list__title">Pregnancy</h3>
				</header>
				<p class="limits-list__text">
					Expectant mothers experience weight gain due to their growing baby. Maintaining
					a healthy pre-pregnancy BMI is advisable to minimise health risks for both
					mother and child.
				</p>
			</li>
			<li class="limits-list__item">
				<header class="limits-list__header">
					<Icon type="person" />
					<h3 class="limits-list__title">Race</h3>
				</header>
				<p class="limits-list__text">
					Certain health concerns may affect individuals of some Black and Asian origins
					at lower BMIs than others. To learn more, it is advised to discuss this with
					your GP or practice nurse.
				</p>
			</li>
		</ul>
	</section>
</template>

<style scoped>
	.limitations-section {
		position: relative;
		margin: 0 24rem 96rem 24rem;

		@media (width >= 768px) {
			margin: 0 41rem 96rem 41rem;
		}

		@media (width >= 768px) {
			margin: 0 auto 120rem auto;
			max-width: 1160rem;
		}
	}

	.limitations-section__content {
		display: flex;
		flex-direction: column;
		row-gap: 32rem;

		@media (width >= 1440px) {
			row-gap: 35rem;
			max-width: 556rem;
			position: absolute;
			top: 0;
			left: 0;
		}
	}

	.limitations-section__title {
		font-family: var(--font-family), sans-serif;
		font-weight: 600;
		font-size: 32rem;
		line-height: 110%;
		letter-spacing: -0.05em;
		text-align: center;
		color: var(--gunmetal);

		@media (width >= 1440px) {
			font-size: 48rem;
			text-align: left;
		}
	}

	.limitations-section__text {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 16rem;
		line-height: 150%;
		text-align: center;
		color: var(--dark-electric-blue);

		@media (width >= 1440px) {
			text-align: left;
		}
	}

	.limitations-sections__limits-list {
		margin-top: 56rem;

		@media (width >= 1440px) {
			margin-top: unset;
		}
	}

	.limits-list {
		display: flex;
		flex-direction: column;
		row-gap: 16rem;

		@media (width >= 768px) {
			flex-direction: row;
			column-gap: 16rem;
			row-gap: 24rem;
			flex-wrap: wrap;
			align-items: stretch;
			justify-content: center;
		}

		@media (width >= 1440px) {
			gap: 24rem 32rem;
			width: 100%;
			max-width: 960rem;
			justify-content: flex-end;
			margin-left: 199rem;
		}
	}

	.limits-list__item {
		border-radius: 16rem;
		padding: 24rem;
		box-shadow: 16rem 32rem 56rem 0 rgba(143, 174, 207, 0.25);
		background: var(--pure-white);
		display: flex;
		flex-direction: column;
		row-gap: 16rem;

		@media (width >= 768px) {
			padding: 32rem;
			width: clamp(326rem, 42.4vw, 335rem);
		}

		@media (width >= 1440px) {
			flex: 0 0 auto;
			width: 365rem;
		}
	}

	.limits-list__item:first-child {
		@media (width >= 1440px) {
			margin-right: 94rem;
			margin-left: 496rem;
		}
	}

	.limits-list__item:last-child {
		@media (width >= 1440px) {
			margin-right: 198rem;
		}
	}

	.limits-list__item:nth-last-child(2) {
		@media (width >= 1440px) {
			margin-left: unset;
		}
	}

	.limits-list__header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		column-gap: 16rem;
	}

	.limits-list__title {
		font-family: var(--font-family), sans-serif;
		font-weight: 600;
		font-size: 20rem;
		letter-spacing: -0.05em;
		color: var(--gunmetal);
	}

	.limits-list__text {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 16rem;
		line-height: 150%;
		color: var(--dark-electric-blue);
	}
</style>
