<template>
	<div id="selection-view">
		<h2 class="second-title">Selection</h2>
		<base-array
			v-show="selection && selection.length > 0"
			:selection="selection"
		/>
	</div>
</template>
<script>
export default {
	name: "selection-view",
	computed: {
		/* eslint-disable no-mixed-spaces-and-tabs */
    	selection: function() {
			console.log(this.$store.state.selection)
			let store = this.$store.state.selection;
			return (store && store.length > 0) ? store : [];
		}
  	}
}
</script>