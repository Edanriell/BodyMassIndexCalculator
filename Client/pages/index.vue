<script lang="ts" setup>
	import { HomePage } from "@nuxt-pages/home/ui";

	useSeoMeta({
		title: "Body Mass Index Calculator",
		ogTitle: "Body Mass Index Calculator",
		description:
			"Easily calculate your Body Mass Index (BMI) to understand your health status. Input your height and weight to get quick and accurate results.",
		ogDescription:
			"Quickly calculate your BMI to assess your health status. Enter your height and weight for instant insights into your body mass index."
	});

	definePageMeta({
		layout: "main"
	});
</script>

<template>
	<HomePage />
</template>
