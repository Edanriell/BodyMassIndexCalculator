<script lang="ts" setup>
	import { ref } from "vue";

	import { Input } from "@shared/ui/input/ui";

	const radioInputValue = ref<string>();
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
						v-model="radioInputValue"
						:selected="radioInputValue === 'metric'"
						labelName="Metric"
						name="measurement"
						type="radio"
						value="metric"
					/>
					<Input
						id="imperial"
						v-model="radioInputValue"
						:selected="radioInputValue === 'imperial'"
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
					<div class="number-input__field">
						<label class="number-input__label" for="height">Height</label>
						<div class="number-input__input-wrapper">
							<input id="height" class="number-input" name="height" type="number" />
							<span class="number-input__description">cm</span>
						</div>
					</div>
					<div class="number-input__field">
						<label class="number-input__label" for="weight">Weight</label>
						<div class="number-input__input-wrapper">
							<input id="weight" class="number-input" name="weight" type="number" />
							<span class="number-input__description">kg</span>
						</div>
					</div>
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

	.number-input {
		border: 1rem solid var(--dark-electric-blue);
		border-radius: 12rem;
		padding: 20rem 24rem;
		width: 100%;
		font-family: var(--font-family), sans-serif;
		font-weight: 600;
		font-size: 24rem;
		letter-spacing: -0.05em;
		color: var(--gunmetal);
		max-height: 69rem;
		-moz-appearance: textfield;

		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
	}

	.number-input__label {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 14rem;
		line-height: 150%;
		color: var(--dark-electric-blue);
	}

	.number-input__field {
		display: flex;
		flex-direction: column;
		row-gap: 8rem;
		position: relative;
		width: 100%;
	}

	.number-input__description {
		font-family: var(--font-family), sans-serif;
		font-weight: 600;
		font-size: 24rem;
		letter-spacing: -0.05em;
		color: var(--blue);
		position: absolute;
		right: 24rem;
		top: 50%;
		transform: translateY(-50%);
		pointer-events: none;
		user-select: none;
	}

	.number-input__input-wrapper {
		position: relative;
		width: 100%;
	}
</style>
