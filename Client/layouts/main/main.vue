<script lang="ts" setup>
	import { Header } from "@widgets/header/ui";
</script>

<template>
	<Header />
	<main class="main">
		<slot />
	</main>
</template>

<style scoped>
	.main {
		position: relative;
	}
</style>
