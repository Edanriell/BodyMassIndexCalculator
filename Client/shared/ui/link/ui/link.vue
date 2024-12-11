<script lang="ts" setup>
	import { ref } from "vue";
	import { animate } from "motion";

	type LinkProps = {
		href: string;
		target?: "_blank" | "_parent" | "_self" | "_top";
	};

	const { href, target = "_self" } = defineProps<LinkProps>();

	const linkWrapperElement = ref<HTMLDivElement>();

	const handleMouseEnter = () => {
		animate(
			linkWrapperElement.value!,
			{ scale: 1.1 },
			{ type: "spring", duration: 0.25, bounce: 0 }
		);
	};

	const handleMouseLeave = () => {
		animate(
			linkWrapperElement.value!,
			{ scale: 1 },
			{ type: "spring", duration: 0.25, bounce: 0 }
		);
	};

	const handleMouseDown = () => {
		animate(
			linkWrapperElement.value!,
			{ scale: 0.95 },
			{ type: "spring", duration: 0.25, bounce: 0 }
		);
	};

	const handleMouseUp = () => {
		animate(
			linkWrapperElement.value!,
			{ scale: 1.1 },
			{ type: "spring", duration: 0.25, bounce: 0 }
		);
	};

	const handleTouchStart = () => {
		animate(
			linkWrapperElement.value!,
			{ scale: 0.95 },
			{ type: "spring", duration: 0.25, bounce: 0 }
		);
	};

	const handleTouchEnd = () => {
		animate(
			linkWrapperElement.value!,
			{ scale: 1 },
			{ type: "spring", duration: 0.25, bounce: 0 }
		);
	};
</script>

<template>
	<div ref="linkWrapperElement">
		<NuxtLink
			:target="target"
			:to="href"
			class="link link--shape-type--pill"
			@mousedown="handleMouseDown"
			@mouseenter="handleMouseEnter"
			@mouseleave="handleMouseLeave"
			@mouseup="handleMouseUp"
			@touchend="handleTouchStart"
			@touchstart="handleTouchEnd"
		>
			<slot></slot>
		</NuxtLink>
	</div>
</template>

<style scoped>
	.link {
		background: var(--blue);
		border-radius: 216rem;
		cursor: pointer;
		position: relative;
		z-index: 2;
		overflow: hidden;
		width: 100%;
		height: 64rem;

		@media (width >= 1440px) {
			height: 96rem;
		}
	}

	.link--shape-type--pill {
		width: unset;
		height: unset;
		padding: 12rem 32rem;

		@media (width >= 1440px) {
			padding: 18rem 48rem;
		}
	}
</style>
