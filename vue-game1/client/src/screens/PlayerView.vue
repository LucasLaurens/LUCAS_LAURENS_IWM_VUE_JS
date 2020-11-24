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
				v-show="datas && players.length > 0"
				v-for="(player, i) in players" :key="i"
				class="item-list"
				:class="[(i%2==0) ? '' : 'blue', playerPicked(player)]"
				:playerData="player"
				:index="i"
				@add-data="(data) => addOne(data)"
				@remove-data="(player) => removeOne(player)"
			/>
		</div>
	</div>
</template>
<script>
import datas from './../data/players.json'
import PlayerCard from '../components/PlayerCard'
export default {
	name: "player-view",
	components: {
		PlayerCard
	},
	data() {
		return {
			datas: datas,
			counter: 0,
			isCompleted: false,
			list: [],
			errorMessages: []
		}
	},
	methods: {
		addOne: function(player) {
			// Add an item in a list if doesn't exist
			if (!this.list.includes(player)) {
				this.list = [...this.list, player];
			}
			this.counter = this.list.length;
		},
		removeOne: function(player) {
			// Remove an item accordting to the name
			this.list = this.list.filter((item) => {
				return item.name != player.name
			});
			this.counter = this.list.length;
			if (this.counter == 0) {
				this.isCompleted = false;
			}
		},
		removeAll: function() {
			// Remove all items in a list
			this.list = [];
			this.counter = 0;
		},
		playerPicked: function(player) {
			// Get the color based on the player found
			return (this.list.find(item => item.name === player.name)) ? 'grey greyAdd' : 'greyRemove'
		}
	},
	computed: {
		teamName: function() {
			return datas.name;
		},
		players: function() {
			return datas.players
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
	.blue {
		background-color: #fff;
		color: #1abc9c;
	}
	.grey {
		color: #1abc9c !important;
		background-color: #34495e !important;
	}
	.greyAdd .add button, .greyRemove .remove button {
		position: relative;
		background-color: #34495e !important;
		transition: .3s ease-in;
	}
	.greyAdd .add button::before, .greyRemove .remove button::before {
		content: "";
		position: absolute;
		height: .25rem;
		width: 100%;
		top: 50%;
		left: 0;
		background: #34495e;
	}
	.btn-show {
		width: 10rem;
	}
	.btn-show button {
		color: #fff !important;
		background: #1abc9c !important;
	}
</style>