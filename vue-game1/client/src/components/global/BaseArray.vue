<template>
	<div>
		<table v-show="listPlayers && listPlayers.length > 0" class="table-auto w-full base-array">
			<thead>
				<tr>
					<th class="w-1/4">name</th>
					<th class="w-1/4">position</th>
					<th class="w-1/4">country</th>
					<th class="w-1/4">health</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(player, index) in listPlayers" :key="index" :class="[(index%2==0) ? 'green-line' : 'white-line']">
					<td class="w-1/4 text-center">{{player.name}}</td>
					<td class="w-1/4 text-center">{{player.position}}</td>
					<td class="w-1/4 text-center">{{player.country}}</td>
					<td class="w-1/4 text-center">{{player.health}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
export default {
	name: "base-array",
	props: {
		listPlayers: Array
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
</style>