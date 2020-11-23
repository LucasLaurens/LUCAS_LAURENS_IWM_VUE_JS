<template>
	<div id="player-view">
		<h2 style="text-align: left;">{{teamName}}</h2>
		<player-card
			v-show="datas && players.length > 0"
			v-for="(player, i) in players" :key="i"
			class="item-list"
			:class="[(i%2==0) ? 'red' : 'blue']"
			:playerData="player"
		/>
	</div>
</template>
<script>
import datas from './../data/players.json'
import PlayerCard from './PlayerCard'
export default {
	name: "player-view",
	components: {
		PlayerCard
	},
	data() {
		return {
			datas: datas
		}
	},
	computed: {
		teamName() {
			return datas.name;
		},
		players() {
			return datas.players
		}
	},
}
</script>
<style scoped>
	.item-list {
		list-style: none;
		text-align: left;
	}
	.red {
		color: red;
	}
	.blue {
		color: blue;
	}
</style>