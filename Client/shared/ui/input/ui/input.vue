<script lang="ts" setup>
	import { defineModel } from "vue";

	type InputProps = {
		type: "number" | "radio";
		id: string;
		name: string;
		labelName: string;
		value?: string;
		selected?: boolean;
	};

	const { type, id, name, labelName, value, selected } = defineProps<InputProps>();

	const model = defineModel();

	const handleRadioInputSelect = () => {
		model.value = value;
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
</style>
