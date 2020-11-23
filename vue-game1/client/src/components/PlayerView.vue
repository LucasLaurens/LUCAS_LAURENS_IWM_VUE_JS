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
			@remove-data="(index) => removeOne(index)"
		/>
	</div>
</template>
<script>
import datas from './../data/players.json'
import PlayerCard from './PlayerCard'
export default {
  watch: {
  },
	name: "player-view",
	components: {
		PlayerCard
	},
	data() {
		return {
			datas: datas,
			list: []
		}
	},
	methods: {
		addOne: function(player) {
			if (!this.list.includes(player)) {
				this.list = [...this.list, player];
			}
		},
		removeOne: function(index) {
			this.list = this.list.filter((item, i) => {
				return i != index
			});
		},
		playerPicked: function(player) {
			return (this.list.find(item => item.name === player.name)) ? 'grey' : ''
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
	.grey .add button {
		position: relative;
		background-color: #444 !important;
		transition: .3s ease-in;
	}
	.grey .add button::before {
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