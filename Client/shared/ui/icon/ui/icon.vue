<script lang="ts" setup>
	import { defineProps } from "vue";

	type IconProps = {
		type:
			| "bowl-food"
			| "barbell"
			| "moon-stars"
			| "gender-intersex"
			| "cake-light"
			| "flexed-biceps"
			| "baby"
			| "person";
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
	<NuxtImg
		v-if="type === 'gender-intersex'"
		class="icon icon--type--gender-intersex"
		height="auto"
		preload
		src="/images/vector/icons/gender-intersex-light.svg"
		width="auto"
	/>
	<NuxtImg
		v-if="type === 'cake-light'"
		class="icon icon--type--cake-light"
		height="auto"
		preload
		src="/images/vector/icons/cake-light.svg"
		width="auto"
	/>
	<NuxtImg
		v-if="type === 'flexed-biceps'"
		class="icon icon--type--flexed-biceps"
		height="auto"
		preload
		src="/images/vector/icons/flexed-biceps-light.svg"
		width="auto"
	/>
	<NuxtImg
		v-if="type === 'baby'"
		class="icon icon--type--baby"
		height="auto"
		preload
		src="/images/vector/icons/baby-light.svg"
		width="auto"
	/>
	<NuxtImg
		v-if="type === 'person'"
		class="icon icon--type--person"
		height="auto"
		preload
		src="/images/vector/icons/person-light.svg"
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

	.icon--type--gender-intersex {
		color: #f24e1e;
	}

	.icon--type--cake-light {
		color: #22c1c1;
	}

	.icon--type--flexed-biceps {
		color: #9747ff;
	}

	.icon--type--baby {
		color: #ffc700;
	}

	.icon--type--person {
		color: #f21e84;
	}
</style>
