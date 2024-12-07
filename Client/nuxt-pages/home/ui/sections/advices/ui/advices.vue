<script lang="ts" setup></script>

<template>
	<section class="advices-section">
		<h2 class="visually-hidden">Advices to improve bmi</h2>
		<ul class="advices-section__advices-list advices-list">
			<li class="advices-list__item">
				<div class="advices-list__icon-wrapper advices-list__icon-wrapper--color--cherry">
					<NuxtImg
						class="icon icon--type--bowl-food"
						height="auto"
						preload
						src="/images/vector/icons/bowl-food-light.svg"
						width="auto"
					/>
				</div>
				<div class="advices-list__item-content">
					<h3 class="advices-list__title">Healthy eating</h3>
					<p class="advices-list__text">
						Healthy eating promotes weight control, disease prevention, better
						digestion, immunity, mental clarity, and mood.
					</p>
				</div>
			</li>
			<li class="advices-list__item">
				<div class="advices-list__icon-wrapper advices-list__icon-wrapper--color--orange">
					<NuxtImg
						class="icon icon--type--barbell"
						height="auto"
						preload
						src="/images/vector/icons/barbell-light.svg"
						width="auto"
					/>
				</div>
				<div class="advices-list__item-content">
					<h3 class="advices-list__title">Regular exercise</h3>
					<p class="advices-list__text">
						Exercise improves fitness, aids weight control, elevates mood, and reduces
						disease risk, fostering wellness and longevity.
					</p>
				</div>
			</li>
			<li class="advices-list__item">
				<div class="advices-list__icon-wrapper advices-list__icon-wrapper--color--coral">
					<NuxtImg
						class="icon icon--type--moon-stars"
						height="auto"
						preload
						src="/images/vector/icons/moon-stars-light.svg"
						width="auto"
					/>
				</div>
				<div class="advices-list__item-content">
					<h3 class="advices-list__title">Adequate sleep</h3>
					<p class="advices-list__text">
						Sleep enhances mental clarity, emotional stability, and physical wellness,
						promoting overall restoration and rejuvenation.
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
	}

	.advices-section__advices-list {
		padding-top: 56rem;
		padding-bottom: 56rem;
	}

	.advices-list {
		display: flex;
		flex-direction: column;
		row-gap: 40rem;
	}

	.advices-list__item {
		display: flex;
		flex-direction: column;
		row-gap: 32rem;
		margin: 0 24rem;
	}

	.advices-list__icon-wrapper {
		width: 64rem;
		height: 64rem;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
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

	.icon {
		width: 33rem;
		height: 32rem;
	}

	.icon--type--bowl-food {
		color: #f21e84;
	}

	.icon--type--barbell {
		color: #f69134;
	}

	.icon--type--moon-stars {
		color: #22c1c1;
	}
</style>
