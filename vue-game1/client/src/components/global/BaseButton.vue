<template>
	<div>
		<button class="btn-default" :style="[(index%2==0)? 'color: #c0392b;': 'color: #2980b9;']">
			{{ title }}
		</button>
	</div>
</template>
<script>
export default {
	name: "base-button",
	props: {
		title: String,
		index: Number
	}
}
</script>
<style scoped>
	button {
		border-radius: 0.25rem;
		background: #fff;
		padding: 1%;
		width: 10rem;
		outline: none;
		cursor: pointer;
	}
</style>