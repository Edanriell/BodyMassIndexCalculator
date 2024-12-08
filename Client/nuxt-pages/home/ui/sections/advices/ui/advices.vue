<script lang="ts" setup>
	import { Icon, type IconTypes } from "@shared/ui/icon/ui";

	type Advice = {
		iconType: IconTypes;
		iconColor: string;
		title: string;
		text: string;
	};

	const advices: Array<Advice> = [
		{
			iconType: "bowl-food",
			iconColor: "cherry",
			title: "Healthy eating",
			text: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
		},
		{
			iconType: "barbell",
			iconColor: "orange",
			title: "Regular exercise",
			text: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
		},
		{
			iconType: "moon-stars",
			iconColor: "coral",
			title: "Adequate sleep",
			text: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
		}
	];
</script>

<template>
	<section class="advices-section">
		<h2 class="visually-hidden">Advices to improve bmi</h2>
		<ul class="advices-section__advices-list advices-list">
			<li v-for="{ iconType, title, text, iconColor } in advices" class="advices-list__item">
				<div
					:class="
						'advices-list__icon-wrapper advices-list__icon-wrapper--color--' + iconColor
					"
				>
					<Icon :type="iconType" />
				</div>
				<div class="advices-list__item-content">
					<h3 class="advices-list__title">{{ title }}</h3>
					<p class="advices-list__text">
						{{ text }}
					</p>
				</div>
			</li>
		</ul>
	</section>
</template>

<style scoped>
	.advices-section {
		position: relative;
		background: linear-gradient(
			315deg,
			rgba(214, 230, 254, 0.25) 0%,
			rgba(214, 252, 254, 0) 100%
		);
		margin-bottom: 72rem;

		@media (width >= 768px) {
			margin-bottom: 96rem;
		}

		@media (width >= 1440px) {
			border-radius: 35rem;
			width: 100%;
			max-width: 1392rem;
			margin: 0 auto 120rem auto;
		}
	}

	.advices-section__advices-list {
		padding-top: 56rem;
		padding-bottom: 56rem;

		@media (width >= 768px) {
			padding-top: 60rem;
			padding-bottom: 60rem;
		}

		@media (width >= 1440px) {
			padding-top: 72rem;
			padding-bottom: 96rem;
		}
	}

	.advices-list {
		display: flex;
		flex-direction: column;
		row-gap: 40rem;

		@media (width >= 1440px) {
			flex-direction: row;
			flex-wrap: wrap;
			column-gap: 32rem;
			align-items: center;
			justify-content: center;
			margin: 0 116rem;
		}
	}

	.advices-list__item {
		display: flex;
		flex-direction: column;
		row-gap: 32rem;
		margin: 0 24rem;

		@media (width >= 768px) {
			margin: 0 41rem;
			row-gap: unset;
			flex-direction: row;
			align-items: center;
			column-gap: 40rem;
		}

		@media (width >= 1440px) {
			flex-direction: column;
			row-gap: 45rem;
			column-gap: unset;
			max-width: 365rem;
			margin: unset;
			flex: 0 0 auto;
			align-items: flex-start;
		}
	}

	.advices-list__icon-wrapper {
		width: 64rem;
		height: 64rem;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		@media (width >= 768px) {
			flex: 0 0 auto;
		}
	}

	.advices-list__icon-wrapper--color--cherry {
		background-color: rgba(242, 30, 132, 0.15);
	}

	.advices-list__icon-wrapper--color--orange {
		background-color: rgba(246, 145, 52, 0.15);
	}

	.advices-list__icon-wrapper--color--coral {
		background-color: rgb(34, 193, 193, 0.15);
	}

	.advices-list__item-content {
		display: flex;
		flex-direction: column;
		row-gap: 24rem;
	}

	.advices-list__title {
		font-family: var(--font-family), sans-serif;
		font-weight: 600;
		font-size: 24rem;
		letter-spacing: -0.05em;
		color: var(--gunmetal);
	}

	.advices-list__text {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 16rem;
		line-height: 150%;
		color: var(--dark-electric-blue);
	}
</style>
