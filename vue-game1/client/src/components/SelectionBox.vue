<template>
	<div>
		<base-array
			v-show="listPlayers && listPlayers.length > 0"
			:listPlayers="listPlayers"
		/>
		<base-button
			class="btn-show"
			title="Cacher Ma Selection"
			@click="getComplete"
		/>
	</div>
</template>
<script>
import BaseArray from './global/BaseArray'
export default {
	name: "selection-box",
	props: {
		listPlayers: Array
	},
	components: {
		BaseArray
	},
	methods: {
		getComplete: function() {
			this.$emit('is-completed', false);
		}
	},
}
</script>