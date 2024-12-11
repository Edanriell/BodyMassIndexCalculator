<script lang="ts" setup>
	import { defineProps } from "vue";

	import { type IconTypes } from "./types";

	type IconProps = {
		type: IconTypes;
	};

	const { type } = defineProps<IconProps>();
</script>

<template>
	<NuxtImg
		v-if="type === 'bowl-food'"
		:preload="false"
		class="icon icon--type--bowl-food"
		height="auto"
		src="/images/vector/icons/bowl-food-light.svg"
		width="auto"
	/>
	<NuxtImg
		v-if="type === 'barbell'"
		:preload="false"
		class="icon icon--type--barbell"
		height="auto"
		src="/images/vector/icons/barbell-light.svg"
		width="auto"
	/>
	<NuxtImg
		v-if="type === 'moon-stars'"
		:preload="false"
		class="icon icon--type--moon-stars"
		height="auto"
		src="/images/vector/icons/moon-stars-light.svg"
		width="auto"
	/>
	<NuxtImg
		v-if="type === 'gender-intersex'"
		:preload="false"
		class="icon icon--type--gender-intersex"
		height="auto"
		src="/images/vector/icons/gender-intersex-light.svg"
		width="auto"
	/>
	<NuxtImg
		v-if="type === 'cake'"
		:preload="false"
		class="icon icon--type--cake"
		height="auto"
		src="/images/vector/icons/cake-light.svg"
		width="auto"
	/>
	<NuxtImg
		v-if="type === 'flexed-biceps'"
		:preload="false"
		class="icon icon--type--flexed-biceps"
		height="auto"
		src="/images/vector/icons/flexed-biceps-light.svg"
		width="auto"
	/>
	<NuxtImg
		v-if="type === 'baby'"
		:preload="false"
		class="icon icon--type--baby"
		height="auto"
		src="/images/vector/icons/baby-light.svg"
		width="auto"
	/>
	<NuxtImg
		v-if="type === 'person'"
		:preload="false"
		class="icon icon--type--person"
		height="auto"
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

	.icon--type--cake {
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
