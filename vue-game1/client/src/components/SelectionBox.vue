<template>
	<div>
		<table v-show="listPlayers.length > 0" class="table-auto w-full">
			<thead>
				<tr>
					<th class="w-1/3">name</th>
					<th class="w-1/3">position</th>
					<th class="w-1/3">country</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(player, index) in listPlayers" :key="index">
					<td class="w-1/3 text-center">{{player.name}}</td>
					<td class="w-1/3 text-center">{{player.position}}</td>
					<td class="w-1/3 text-center">{{player.country}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
export default {
	name: "selection-box",
	props: {
		listPlayers: Array
	}
}
</script>