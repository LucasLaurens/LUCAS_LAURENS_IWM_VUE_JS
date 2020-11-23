<template>
	<div>
		<button class="btn-default" :style="[(index%2==0)? 'color: red;': 'color: blue;']">
			{{ title }}
		</button>
	</div>
</template>
<script>
export default {
	name: "base-button",
	props: {
		title: String,
		index: Number,
		clickMethod: Function
	}
}
</script>
<style scoped>
	button {
		background: #fff;
		padding: 1%;
		width: 10rem;
		outline: none;
		cursor: pointer;
	}
</style>