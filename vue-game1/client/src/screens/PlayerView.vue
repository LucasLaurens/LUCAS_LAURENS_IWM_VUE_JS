<template>
	<div id="player-view" class="container mx-auto">
		<div class="mb-4">
			<h2 class="second-title">Players</h2>
			<h3 v-show="counter >= 11" class="success">Félicitation votre équipe est désormais au grand complet</h3>
			<p>Nombre de joueurs {{stringParse}} : {{counter}}/11</p>
			<base-array
				v-show="players && players.length > 0"
				:players="players"
				title="players"
			/>
		</div>
	</div>
</template>
<script>
import Teams from '../service'
import { mapActions } from 'vuex'
export default {
	name: "player-view",
	async mounted() {
		try {
			const result = await Teams.datas();

			if (result && result.length > 0) {
				this.getPSGTeam(result);
			}
		} catch (e) {
			console.error(e)
		}

	},
	methods: {
		...mapActions({
			getPSGTeam: 'getPSGTeam'
		})
	},
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