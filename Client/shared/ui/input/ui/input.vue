<script lang="ts" setup>
	import { defineModel } from "vue";

	type InputProps = {
		type: "number" | "radio";
		id: string;
		name: string;
		labelName: string;
		labelHidden?: boolean;
		labelFor?: string;
		value?: string;
		selected?: boolean;
		description?: string;
		placeholder?: string;
	};

	const {
		type,
		id,
		name,
		labelName,
		labelFor,
		value,
		selected,
		description,
		placeholder,
		labelHidden
	} = defineProps<InputProps>();

	const model = defineModel<string | number | null>();

	const handleRadioInputSelect = () => {
		model.value = value;
	};

	const handleNumberInputChange = (event: Event) => {
		model.value = Number((event.target as HTMLInputElement).value);
	};
</script>

<template>
	<label v-if="type === 'radio'" class="radio-input__label">
		<input
			:id="id"
			:name="name"
			:value="value"
			class="radio-input"
			type="radio"
			@input="handleRadioInputSelect"
		/>
		<div
			:class="{
				'radio-input__radio-mark': true,
				'radio-input__radio-mark--type--unselected': !selected,
				'radio-input__radio-mark--type--selected': selected
			}"
		>
			<div
				:class="{
					'radio-input__radio-mark-dot': true,
					'radio-input__radio-mark-dot--type--unselected': !selected,
					'radio-input__radio-mark-dot--type--selected': selected
				}"
			></div>
		</div>
		<span class="radio-input__label-name">{{ labelName }}</span>
	</label>
	<div v-else-if="type === 'number'" class="number-input__field">
		<label
			:class="{
				'number-input__label': true,
				'number-input__label--type--hidden': labelHidden
			}"
			:for="labelFor"
			>{{ labelName }}</label
		>
		<div class="number-input__input-wrapper">
			<input
				:id="id"
				:name="name"
				:placeholder="placeholder"
				:value="model?.valueOf()"
				class="number-input"
				type="number"
				@change="handleNumberInputChange"
			/>
			<span class="number-input__description">{{ description }}</span>
		</div>
	</div>
</template>

<style scoped>
	.radio-input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}

	.radio-input__label {
		position: relative;
		display: flex;
		align-items: center;
		column-gap: 18rem;
		cursor: pointer;

		@media (width >= 768px) {
			width: 100%;
			column-gap: 18rem;
		}
	}

	.radio-input__label-name {
		font-family: var(--font-family), sans-serif;
		font-weight: 600;
		font-size: 16rem;
		line-height: 150%;
		color: var(--gunmetal);
	}

	.radio-input__radio-mark {
		width: 31rem;
		height: 31rem;
		border-radius: 50%;
		position: relative;
		display: inline-block;
	}

	.radio-input__radio-mark--type--unselected {
		background-color: transparent;
		border: 1rem solid var(--dark-electric-blue);
	}

	.radio-input__radio-mark--type--selected {
		background-color: hsla(227, 92%, 58%, 0.15);
		border: unset;
	}

	.radio-input__radio-mark-dot {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		width: 15rem;
		height: 15rem;
		border-radius: 50%;
		background: var(--blue);
		transform: translate(-50%, -50%);
	}

	.radio-input__radio-mark-dot--type--unselected {
		opacity: 0;
	}

	.radio-input__radio-mark-dot--type--selected {
		opacity: 1;
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

		&::placeholder {
			font-family: var(--font-family), sans-serif;
			font-weight: 600;
			font-size: 24rem;
			letter-spacing: -0.05em;
			color: var(--dark-electric-blue);
			opacity: 1;
		}
	}

	.number-input__label {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 14rem;
		line-height: 150%;
		color: var(--dark-electric-blue);
	}

	.number-input__label--type--hidden {
		visibility: hidden;
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
