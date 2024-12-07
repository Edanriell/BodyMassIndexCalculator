<script lang="ts" setup>
	import { defineProps } from "vue";

	type IconProps = {
		type: "bowl-food" | "barbell" | "moon-stars";
	};

	const { type } = defineProps<IconProps>();
</script>

<template>
	<NuxtImg
		v-if="type === 'bowl-food'"
		class="icon icon--type--bowl-food"
		height="auto"
		preload
		src="/images/vector/icons/bowl-food-light.svg"
		width="auto"
	/>
	<NuxtImg
		v-if="type === 'barbell'"
		class="icon icon--type--barbell"
		height="auto"
		preload
		src="/images/vector/icons/barbell-light.svg"
		width="auto"
	/>
	<NuxtImg
		v-if="type === 'moon-stars'"
		class="icon icon--type--moon-stars"
		height="auto"
		preload
		src="/images/vector/icons/moon-stars-light.svg"
		width="auto"
	/>
</template>

<style scoped>
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
