<template>
	<div id="player-view">
		<h1 class="first-title">{{teamName}}</h1>
		<player-card
			v-show="datas && players.length > 0"
			v-for="(player, i) in players" :key="i"
			class="item-list"
			:class="[(i%2==0) ? 'red' : 'blue', playerPicked(player)]"
			:playerData="player"
			:index="i"
			@add-data="(data) => addOne(data)"
			@remove-data="(player) => removeOne(player)"
		/>
		<p class="m-2">Ma liste contient <span style="font-weight: bold;">{{counter}}</span> <span v-if="counter > 1">joueurs</span><span v-else>joueur</span></p>
		<selection-box
			:listPlayers="list"
		/>
	</div>
</template>
<script>
import datas from './../data/players.json'
import PlayerCard from './PlayerCard'
import SelectionBox from './SelectionBox'
export default {
	name: "player-view",
	components: {
		PlayerCard,
		SelectionBox
	},
	data() {
		return {
			datas: datas,
			counter: 0,
			list: []
		}
	},
	methods: {
		addOne: function(player) {
			if (!this.list.includes(player)) {
				this.list = [...this.list, player];
			}
			this.counter = this.list.length;
		},
		removeOne: function(player) {
			this.list = this.list.filter((item) => {
				return item.name != player.name
			});
			this.counter = this.list.length;
		},
		playerPicked: function(player) {
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
	h1.first-title {
		text-align: center;
		font-size: 36px;
		font-weight: bold;
	}
	.item-list {
		list-style: none;
		text-align: left;
		color: #fff;
		padding: 1%;
	}
	.grey {
		background-color: grey !important;
	}
	.greyAdd .add button, .greyRemove .remove button {
		position: relative;
		background-color: #444 !important;
		transition: .3s ease-in;
	}
	.greyAdd .add button::before, .greyRemove .remove button::before {
		content: "";
		position: absolute;
		height: .25rem;
		width: 100%;
		top: 50%;
		left: 0;
		background: #444;
	}
	.red {
		background-color: red;
	}
	.blue {
		background-color: blue;
	}
</style>