<template>
	<div id="selection-view">
		<h2 class="second-title">Selection</h2>
		<div class="m-2">
			<h3 v-show="counter >= 11" class="success">Félicitation votre équipe est désormais au grand complet</h3>
			<p>Nombre de joueurs {{stringParse}} : {{counter}}/11</p>
			<base-button
				class="btn-remove-all m-2"
				title="Remove All"
				@click="removeDatas"
			/>
			<base-array
				v-show="selection && selection.length > 0"
				:players="selection"
				title="selection"
			/>
		</div>
	</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
	name: "selection-view",

	methods: {
		...mapActions({
			removeAll: 'removeAll'
		}),
		removeDatas: function() {
			if(this.counter > 0) {
				this.removeAll();
			}
		}
	},
	computed: {
		/* eslint-disable no-mixed-spaces-and-tabs */
    	selection: function() {
			let store = this.$store.state.selection;
			return (store && store.length > 0) ? store : [];
		},
		counter: function() {
			return this.$store.state.counter
		},
		stringParse: function() {
			return (this.counter && this.counter > 1) ? 'selectionnés' : 'selectionné'
		}
  	}
}
</script>
<style>
	.btn-remove-all button {
		background: #1abc9c;
		color: #fff !important;
	}
</style>