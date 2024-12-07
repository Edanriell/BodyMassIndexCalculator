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
	}

	.advices-section__advices-list {
	}

	.advices-list {
	}

	.advices-list__item {
	}

	.advices-list__icon-wrapper {
	}

	.advices-list__icon-wrapper--color--cherry {
	}

	.advices-list__icon-wrapper--color--orange {
	}

	.advices-list__icon-wrapper--color--coral {
	}

	.advices-list__item-content {
	}

	.advices-list__title {
	}

	.advices-list__text {
	}

	.icon {
	}

	.icon--type--bowl-food {
	}

	.icon--type--barbell {
	}

	.icon--type--moon-stars {
	}
</style>
