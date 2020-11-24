<template>
	<div>
		<p v-show="error !== ''" class="error">{{error}}</p>
		<table v-show="players && players.length > 0" class="table-auto w-full base-array">
			<thead>
				<tr>
					<th class="w-1/3">Name</th>
					<th class="w-1/3">Position</th>
					<th class="w-1/3">Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(player, index) in players" :key="index" :class="[(index%2==0) ? 'green-line' : 'white-line']">
					<td class="w-1/3 text-center">{{player.name}}</td>
					<td class="w-1/3 text-center">{{player.position}}</td>
					<td class="w-1/3 text-center">
						<base-button
							v-show="title.length > 0 && title === 'players'"
							title="Add"
							:index="index"
							:class="[playerPicked(player)]"
							@click="addOne(player)"
						/>
						<base-button
							title="Remove"
							:index="index"
							@click="removeData(player)"
						/>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
	name: "base-array",
	data() {
		return {
			error: ""
		}
	},
	props: {
		players: Array,
		title: String
	},
	methods: {
		...mapActions({
			addPlayer: 'addPlayer',
			removePlayer: 'removePlayer'
		}),
		addOne: function(player) {
			this.error = ""
			// Add an item in a list if doesn't exist
			if (this.$store.state.selection.length < 12) {
				if (!this.$store.state.selection.includes(player)) {
					this.addPlayer(player)
				}
				this.counter = this.$store.state.selection.length;
			} else {
				this.error = "Vous avez atteint le cotat maximum de joueurs dans la selection"
				window.scrollTo(0, 0);
			}
		},
		removeData: function(player) {
			// Remove an item accordting to the name
			this.removePlayer(player)
			this.counter = this.$store.state.selection.length;
		},
		playerPicked: function(player) {
			return (this.$store.state.selection.find(item => item.name === player.name)) ? 'selected' : '';
		}
	}
}
</script>
<style>
.base-array {
	text-align: left;
	padding: 1%;
}
.base-array thead {
	text-align: center;
	color: #1abc9c;
}
.base-array tr {
	height: 3rem;
}
.base-array tr.white-line{
	color: #1abc9c;
	background: #fff;
}
.base-array tr.green-line {
	color: #fff;
	background: #1abc9c;
}
.base-array tr .selected button {
	position: relative;
}
.base-array tr .selected button::before {
	content: "";
	position: absolute;
	background: #444;
	top: 50%;
	left: 25%;
	width: 50%;
	height: .25rem;
}
</style>