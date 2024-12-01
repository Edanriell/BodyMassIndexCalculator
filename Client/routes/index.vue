<script lang="ts" setup>
	import { HomePage } from "@pages/home/ui";

	useSeoMeta({
		title: "FAQs",
		ogTitle: "FAQs",
		description: "Frequently asked questions about Frontend Mentor.",
		ogDescription: "Frequently asked questions about Frontend Mentor."
	});

	definePageMeta({
		layout: "main-layout-ui"
	});
</script>

<template>
	<HomePage />
</template>
