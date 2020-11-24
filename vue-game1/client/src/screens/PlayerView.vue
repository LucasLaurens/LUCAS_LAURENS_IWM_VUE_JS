<template>
	<div id="player-view" class="container mx-auto">
		<div class="mb-4">
			<h2 class="second-title">Players</h2>
			<p>Nombre de joueurs {{stringParse}} : {{counter}}</p>
			<base-array
				v-show="players && players.length > 0"
				:players="players"
				title="players"
			/>
		</div>
	</div>
</template>
<script>
export default {
	name: "player-view",
	computed: {
		counter: function() {
			return this.$store.state.counter
		},
		players: function() {
			return this.$store.state.players
		},
		stringParse: function() {
			return (this.counter && this.counter > 1) ? 'selectionnés' : 'selectionné'
		}
	},
}
</script>
<style>
	.item-list {
		list-style: none;
		text-align: left;
		color: #fff;
		padding: 1%;
		background-color: #1abc9c;
	}
</style>