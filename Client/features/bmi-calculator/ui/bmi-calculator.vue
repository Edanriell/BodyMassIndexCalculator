<script lang="ts" setup>
	import { computed, onMounted, ref, watch } from "vue";
	import { animate } from "motion";

	import { Input } from "@shared/ui/input/ui";

	import { calculateIdealWeightRange } from "../lib";

	const LOCAL_STORAGE_KEY = "bmiCalculatorData";

	const selectedMeasurementSystem = ref<"metric" | "imperial" | null>("metric");

	const heightMetric = ref<number | null>(null);
	const weightMetric = ref<number | null>(null);

	const heightImperialFt = ref<number | null>(null);
	const heightImperialIn = ref<number | null>(null);
	const weightImperialSt = ref<number | null>(null);
	const weightImperialLbs = ref<number | null>(null);

	onMounted(() => {
		const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (savedData) {
			const parsedData = JSON.parse(savedData);

			selectedMeasurementSystem.value = parsedData.selectedMeasurementSystem ?? "metric";

			heightMetric.value = parsedData.heightMetric ?? null;
			weightMetric.value = parsedData.weightMetric ?? null;

			heightImperialFt.value = parsedData.heightImperialFt ?? null;
			heightImperialIn.value = parsedData.heightImperialIn ?? null;
			weightImperialSt.value = parsedData.weightImperialSt ?? null;
			weightImperialLbs.value = parsedData.weightImperialLbs ?? null;
		}
	});

	watch(
		[
			selectedMeasurementSystem,
			heightMetric,
			weightMetric,
			heightImperialFt,
			heightImperialIn,
			weightImperialSt,
			weightImperialLbs
		],
		() => {
			const dataToSave = {
				selectedMeasurementSystem: selectedMeasurementSystem.value,
				heightMetric: heightMetric.value,
				weightMetric: weightMetric.value,
				heightImperialFt: heightImperialFt.value,
				heightImperialIn: heightImperialIn.value,
				weightImperialSt: weightImperialSt.value,
				weightImperialLbs: weightImperialLbs.value
			};
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToSave));
		},
		{ deep: true }
	);

	const bmi = computed(() => {
		if (selectedMeasurementSystem.value === "metric") {
			if (!heightMetric.value || !weightMetric.value) return null;
			const heightInMeters = heightMetric.value / 100;
			return (weightMetric.value / (heightInMeters * heightInMeters)).toFixed(1);
		} else if (selectedMeasurementSystem.value === "imperial") {
			const totalHeightInInches =
				(heightImperialFt.value || 0) * 12 + (heightImperialIn.value || 0);
			const totalWeightInLbs =
				(weightImperialSt.value || 0) * 14 + (weightImperialLbs.value || 0);
			if (!totalHeightInInches || !totalWeightInLbs) return null;
			return ((totalWeightInLbs * 703) / (totalHeightInInches * totalHeightInInches)).toFixed(
				1
			);
		}
		return null;
	});

	const resultDescription = computed(() => {
		if (!bmi.value) return null;

		const bmiValue = parseFloat(bmi.value);
		if (bmiValue < 18.5) {
			return {
				text: "Your BMI suggests you’re underweight. Your ideal weight is between",
				range: calculateIdealWeightRange({
					minBmi: 18.5,
					maxBmi: 24.9,
					selectedMeasurementSystem: selectedMeasurementSystem.value,
					heightMetric: heightMetric.value,
					heightImperialFt: heightImperialFt.value,
					heightImperialIn: heightImperialIn.value
				})
			};
		} else if (bmiValue >= 18.5 && bmiValue < 25) {
			return {
				text: "Your BMI suggests you’re a healthy weight. Your ideal weight is between",
				range: calculateIdealWeightRange({
					minBmi: 18.5,
					maxBmi: 24.9,
					selectedMeasurementSystem: selectedMeasurementSystem.value,
					heightMetric: heightMetric.value,
					heightImperialFt: heightImperialFt.value,
					heightImperialIn: heightImperialIn.value
				})
			};
		} else if (bmiValue >= 25 && bmiValue < 30) {
			return {
				text: "Your BMI suggests you’re overweight. Your ideal weight is between",
				range: calculateIdealWeightRange({
					minBmi: 18.5,
					maxBmi: 24.9,
					selectedMeasurementSystem: selectedMeasurementSystem.value,
					heightMetric: heightMetric.value,
					heightImperialFt: heightImperialFt.value,
					heightImperialIn: heightImperialIn.value
				})
			};
		} else {
			return {
				text: "Your BMI suggests you’re obese. Your ideal weight is between",
				range: calculateIdealWeightRange({
					minBmi: 18.5,
					maxBmi: 24.9,
					selectedMeasurementSystem: selectedMeasurementSystem.value,
					heightMetric: heightMetric.value,
					heightImperialFt: heightImperialFt.value,
					heightImperialIn: heightImperialIn.value
				})
			};
		}
	});

	const beforeDisplayInputGroup = (element: Element) => {
		animate(
			element,
			{ scale: [0.85], filter: ["blur(4px)", "blur(0px)"] },
			{ type: "spring", duration: 0, bounce: 0 }
		);
	};

	const displayInputGroup = (element: Element, done: () => void) => {
		animate(
			element,
			{ opacity: [0, 1], scale: [0.9, 1], filter: ["blur(4px)", "blur(0px)"] },
			{ type: "spring", duration: 0.5, bounce: 0 }
		).then(() => done());
	};

	const hideInputGroup = (element: Element, done: () => void) => {
		animate(
			element,
			{ opacity: [1, 0], scale: [1, 0.9], filter: ["blur(0px)", "blur(4px)"] },
			{ type: "spring", duration: 0.5, bounce: 0 }
		).then(() => done());
	};
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
				<Transition
					:css="false"
					mode="out-in"
					@beforeEnter="(el) => beforeDisplayInputGroup(el)"
					@enter="(el, done) => displayInputGroup(el, done)"
					@leave="(el, done) => hideInputGroup(el, done)"
				>
					<div
						v-if="selectedMeasurementSystem === 'metric'"
						class="bmi-form__number-input-group bmi-form__number-input-group--type--metric"
					>
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
					<div
						v-else-if="selectedMeasurementSystem === 'imperial'"
						class="bmi-form__number-input-group bmi-form__number-input-group--type--imperial"
					>
						<div class="bmi-form__number-input-subgroup">
							<Input
								id="height"
								v-model="heightImperialFt"
								description="ft"
								labelFor="height"
								labelName="Height"
								name="height"
								placeholder="0"
								type="number"
							/>
							<Input
								id="height"
								v-model="heightImperialIn"
								:labelHidden="true"
								description="in"
								labelFor="height"
								labelName="Height"
								name="height"
								placeholder="0"
								type="number"
							/>
						</div>
						<div class="bmi-form__number-input-subgroup">
							<Input
								id="weight"
								v-model="weightImperialSt"
								description="st"
								labelFor="weight"
								labelName="Weight"
								name="weight"
								placeholder="0"
								type="number"
							/>
							<Input
								id="weight"
								v-model="weightImperialLbs"
								:labelHidden="true"
								description="lbs"
								labelFor="weight"
								labelName="Weight"
								name="weight"
								placeholder="0"
								type="number"
							/>
						</div>
					</div>
				</Transition>
			</fieldset>
		</form>
		<div class="bmi-calculator__result">
			<div
				v-if="bmi"
				class="bmi-calculator__result-content bmi-calculator__result-content--type--result"
			>
				<div class="bmi-calculator__result-column">
					<strong class="bmi-calculator__result-value">
						Your BMI is...
						<span>{{ bmi }}</span>
					</strong>
				</div>
				<div class="bmi-calculator__result-description-column">
					<p class="bmi-calculator__result-description-text">
						{{ resultDescription?.text }}
						<strong>{{ resultDescription?.range }}</strong>
					</p>
				</div>
			</div>
			<div
				v-else
				class="bmi-calculator__result-content bmi-calculator__result-content--type--no-result"
			>
				<strong class="bmi-calculator__result-title">Welcome!</strong>
				<p class="bmi-calculator__result-text">
					Enter your height and weight and you’ll see your BMI result here
				</p>
			</div>
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
	}

	.bmi-form__number-input-subgroup {
		display: flex;
		flex-direction: row;
		column-gap: 16rem;

		@media (width >= 768px) {
			column-gap: 24rem;
		}
	}

	.bmi-form__number-input-group--type--metric {
		flex-direction: column;
		row-gap: 16rem;

		@media (width >= 768px) {
			flex-direction: row;
			column-gap: 24rem;
		}
	}

	.bmi-form__number-input-group--type--imperial {
		flex-direction: column;
		row-gap: 16rem;

		@media (width >= 768px) {
			row-gap: 24rem;
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

	.bmi-calculator__result-content {
		display: flex;
	}

	.bmi-calculator__result-content--type--no-result {
		flex-direction: column;
		row-gap: 16rem;
	}

	.bmi-calculator__result-content--type--result {
		flex-direction: column;
		row-gap: 24rem;

		@media (width >= 768px) {
			flex-direction: row;
			row-gap: unset;
			justify-content: space-between;
			align-items: center;
		}
	}

	.bmi-calculator__result-title {
		font-family: var(--font-family), sans-serif;
		font-weight: 600;
		font-size: 24rem;
		letter-spacing: -0.05em;
		color: var(--pure-white);
		display: block;
	}

	.bmi-calculator__result-text {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 14rem;
		line-height: 150%;
		color: var(--pure-white);
	}

	.bmi-calculator__result-column {
		position: relative;
	}

	.bmi-calculator__result-description-column {
		position: relative;
	}

	.bmi-calculator__result-value {
		display: flex;
		flex-direction: column;
		row-gap: 8rem;
		font-family: var(--font-family), sans-serif;
		font-weight: 600;
		font-size: 16rem;
		line-height: 150%;
		color: var(--pure-white);

		> span {
			font-family: var(--font-family), sans-serif;
			font-weight: 600;
			font-size: 48rem;
			line-height: 110%;
			letter-spacing: -0.05em;
			color: var(--pure-white);

			@media (width >= 1440px) {
				font-size: 64rem;
			}
		}
	}

	.bmi-calculator__result-description-text {
		font-family: var(--font-family), sans-serif;
		font-weight: 300;
		font-size: 14rem;
		line-height: 150%;
		color: var(--pure-white);

		> strong {
			font-weight: 700;
		}

		@media (width >= 768px) {
			max-width: 267rem;
		}

		@media (width >= 1440px) {
			max-width: 206rem;
		}
	}
</style>
