<script lang="ts" setup>
	import { ref } from "vue";

	import { Input } from "@shared/ui/input/ui";

	const selectedMeasurementSystem = ref<"metric" | "imperial" | null>(null);

	const heightMetric = ref<number | null>(null);
	const weightMetric = ref<number | null>(null);
</script>

<template>
	<article class="bmi-calculator">
		<h2 class="bmi-calculator__title">Enter your details below</h2>
		<form class="bmi-calculator__bmi-form bmi-form">
			<fieldset class="bmi-form__fieldset">
				<legend class="visually-hidden">Measurement System</legend>
				<div class="bmi-form__radio-input-group">
					<Input
						id="metric"
						v-model="selectedMeasurementSystem"
						:selected="selectedMeasurementSystem === 'metric'"
						labelName="Metric"
						name="measurement"
						type="radio"
						value="metric"
					/>
					<Input
						id="imperial"
						v-model="selectedMeasurementSystem"
						:selected="selectedMeasurementSystem === 'imperial'"
						labelName="Imperial"
						name="measurement"
						type="radio"
						value="imperial"
					/>
				</div>
			</fieldset>
			<fieldset class="bmi-form__fieldset">
				<legend class="visually-hidden">Enter Your Details</legend>
				<div class="bmi-form__number-input-group">
					<Input
						id="height"
						v-model="heightMetric"
						description="cm"
						labelFor="height"
						labelName="Height"
						name="height"
						placeholder="0"
						type="number"
					/>
					<Input
						id="weight"
						v-model="weightMetric"
						description="kg"
						labelFor="weight"
						labelName="Weight"
						name="weight"
						placeholder="0"
						type="number"
					/>
				</div>
			</fieldset>
		</form>
		<div class="bmi-calculator__result">
			<strong class="bmi-calculator__result-title">Welcome!</strong>
			<p class="bmi-calculator__result-text">
				Enter your height and weight and you’ll see your BMI result here
			</p>
		</div>
	</article>
</template>

<style scoped>
	.bmi-calculator {
		border-radius: 16rem;
		padding: 24rem;
		width: 100%;
		box-shadow: 16rem 32rem 56rem 0 rgba(143, 174, 207, 0.25);
		background: var(--pure-white);
		margin-top: 48rem;

		@media (width >= 768px) {
			margin-top: 40rem;
			padding: 32rem;
		}

		@media (width >= 1440px) {
			margin-top: unset;
			width: 564rem;
			position: absolute;
			top: 43rem;
			right: 0;
		}
	}

	.bmi-calculator__title {
		font-family: var(--font-family), sans-serif;
		font-weight: 600;
		font-size: 24rem;
		letter-spacing: -0.05em;
		color: var(--gunmetal);
	}

	.bmi-calculator__bmi-form {
		position: relative;
	}

	.bmi-form {
		margin: 24rem 0;
		display: flex;
		flex-direction: column;
		row-gap: 24rem;

		@media (width >= 768px) {
			margin: 32rem 0;
			row-gap: 32rem;
		}
	}

	.bmi-form__fieldset {
		border: none;
		margin: 0;
		padding: 0;
	}

	.bmi-form__radio-input-group {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		column-gap: 53rem;

		@media (width >= 768px) {
			column-gap: 24rem;
		}
	}

	.bmi-form__number-input-group {
		display: flex;
		flex-direction: column;
		row-gap: 16rem;

		@media (width >= 768px) {
			flex-direction: row;
			column-gap: 24rem;
		}
	}

	.bmi-calculator__result {
		border-radius: 16rem;
		padding: 32rem;
		width: 100%;
		background: var(--blue);

		@media (width >= 768px) {
			border-radius: 16rem 100rem 100rem 16rem;
			padding: 32rem;
		}
	}

	.bmi-calculator__result-title {
		font-family: var(--font-family), sans-serif;
		font-weight: 600;
		font-size: 24rem;
		letter-spacing: -0.05em;
		color: var(--pure-white);
		margin-bottom: 16rem;
		display: block;
	}

	.bmi-calculator__result-text {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 14rem;
		line-height: 150%;
		color: var(--pure-white);
	}
</style>
