<template>
	<div>
		<h3>{{lastName}}</h3>
		<p>
			<span style="font-weight: bold;">number</span> : {{playerData.number}} -
			<span style="font-weight: bold;">position</span> : {{playerData.position}} -
			<span style="font-weight: bold;">country</span> : {{playerData.country}}
		</p>
	</div>
</template>
<script>
export default {
	name: "player-card",
	props: {
		playerData: Object
	},
	computed: {
		lastName: function() {
			// Get only the lastname in the fullname string
			if (this.playerData.name.split('.').length > 1) {
				return this.playerData.name.split('.')[1].toUpperCase()
			}
			return this.playerData.name.toUpperCase()
		}
	},
}
</script>