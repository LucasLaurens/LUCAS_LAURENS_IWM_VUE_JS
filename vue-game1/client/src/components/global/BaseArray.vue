<template>
	<div>
		<table v-show="selection && selection.length > 0" class="table-auto w-full base-array">
			<thead>
				<tr>
					<th class="w-1/5">Name</th>
					<th class="w-1/5">Position</th>
					<th class="w-1/5">Country</th>
					<th class="w-1/5">Health</th>
					<th class="w-1/5">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(player, index) in selection" :key="index" :class="[(index%2==0) ? 'green-line' : 'white-line']">
					<td class="w-1/6 text-center">{{player.name}}</td>
					<td class="w-1/6 text-center">{{player.position}}</td>
					<td class="w-1/6 text-center">{{player.country}}</td>
					<td class="w-1/6 text-center">{{player.health}}</td>
					<td class="w-1/6 text-center">
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
	props: {
		selection: Array
	},
	methods: {
		...mapActions({
			removePlayer: 'removePlayer'
		}),
		removeData: function(player) {
			// Remove an item accordting to the name
			this.removePlayer(player)
			this.counter = this.$store.state.selection.length;
		}
	},
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
</style>