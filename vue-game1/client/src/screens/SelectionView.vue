<template>
	<div id="selection-view">
		<h2 class="second-title">Selection</h2>
		<div class="m-2">
			<h3 v-show="counter >= 11" class="success">Félicitation votre équipe est désormais au grand complet</h3>
			<p>Nombre de personnages {{stringParse}} : {{counter}}/11</p>
			<p>{{statsRace}}</p>
			<base-button
				class="btn-remove-all m-2"
				title="Remove All"
				@click="removeDatas"
			/>
			<base-array
				v-show="selection && selection.length > 0"
				:characters="selection"
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
		},
		countRaceOccurences: function (tab){
			var result = {};
			tab.forEach(function(elem){
				if(elem.race in result){
					result[elem.race] = ++result[elem.race];
				}
				else{
					result[elem.race] = 1;
				}
			});
			return result;
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
		},
		statsRace: function() {
			let string = "";
			if (this.selection && this.selection.length > 0) {
				for(const [key, value] of Object.entries(this.countRaceOccurences(this.selection))) {
					string += `tu possède : ${value} ${key} `;
				}
			}
			return string;
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