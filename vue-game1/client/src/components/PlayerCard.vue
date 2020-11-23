<template>
	<div class="border border-black rounded m-2 md:flex justify-between">
		<h3>{{lastName}}</h3>
		<p>
			<span style="font-weight: bold;">number</span> : {{playerData.number}} -
			<span style="font-weight: bold;">position</span> : {{playerData.position}} -
			<span style="font-weight: bold;">country</span> : {{playerData.country}}
		</p>
		<div class="flex">
			<base-button
				class="add mr-2"
				title="Add One"
				:index="index"
				@click="addData(playerData)"
			/>
			<base-button
				class="remove"
				title="Remove One"
				:index="index"
				@click="removeData(index)"
			/>
		</div>
	</div>
</template>
<script>
export default {
	name: "player-card",
	props: {
		playerData: Object,
		index: Number,
		clickMethod: Function
	},
	methods: {
		addData: function (player) {
			this.$emit('add-data', player)
		},
		removeData: function (index) {
			this.$emit('remove-data', index)
		}
	},
	computed: {
		lastName: function() {
			// Get only the lastname in the fullname string
			return (this.playerData.name.split('.').length > 1) ? this.playerData.name.split('.')[1].toUpperCase() : this.playerData.name.toUpperCase();
		}
	},
}
</script>