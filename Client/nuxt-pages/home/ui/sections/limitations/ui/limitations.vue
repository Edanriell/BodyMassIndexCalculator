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
	}

	.limitations-section__content {
	}

	.limitations-section__title {
	}

	.limitations-section__text {
	}

	.limitations-sections__limits-list {
	}

	.limits-list {
	}

	.limits-list__item {
	}

	.limits-list__header {
	}

	.limits-list__title {
	}

	.limits-list__text {
	}
</style>
