<template>
	<div id="player-view" class="container mx-auto">
		<div class="mb-4">
			<h2 class="second-title">Players</h2>
			<base-button
				class="btn-show m-2"
				title="Remove All"
				@click="removeAll"
			/>
			<player-card
				v-show="players && players.length > 0"
				v-for="(player, i) in players" :key="i"
				class="item-list"
				:class="[(i%2==0) ? '' : 'blue']"
				:playerData="player"
				:index="i"
				@add-data="(data) => addOne(data)"
			/>
		</div>
	</div>
</template>
<script>
import PlayerCard from '../components/PlayerCard'
import { mapActions } from 'vuex'
export default {
	name: "player-view",
	components: {
		PlayerCard
	},
	data() {
		return {
			counter: 0
		}
	},
	methods: {
		...mapActions({
			addPlayer: 'addPlayer'
		}),
		addOne: function(player) {
			// Add an item in a list if doesn't exist
			if (!this.$store.state.selection.includes(player)) {
				this.addPlayer(player)
			}
			this.counter = this.$store.state.selection.length;
		},
		removeAll: function() {
			// Remove all items in a list
			this.list = [];
			this.counter = 0;
		},
	},
	computed: {
		players: function() {
			return this.$store.state.players
		},
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