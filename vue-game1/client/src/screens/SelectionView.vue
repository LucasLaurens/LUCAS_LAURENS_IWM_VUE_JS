<template>
	<div>
		<h2 class="second-title">Section</h2>
		<!-- <base-array
			v-show="listPlayers && listPlayers.length > 0"
			:listPlayers="listPlayers"
		/> -->
		<!-- <base-button
			class="btn-show"
			title="Cacher Ma Selection"
			@click="getComplete"
		/> -->
		<!-- Second part -->
		<!-- <div class="m-2 mt-4">
			<ul class="list-errors">
				<li v-for="(msg, i) in errorMessages" :key="i">
					{{msg}}
				</li>
			</ul>
			<p>Ma liste contient <span style="font-weight: bold;">{{counter}}</span> <span v-if="counter > 1">joueurs</span><span v-else>joueur</span></p>
			<base-button
				v-show="isCompleted == false"
				class="btn-show"
				title="Montrer Ma Selection"
				@click="getComplete"
			/>
		</div> -->
	</div>
</template>
<script>
export default {
	name: "selection-box",
	// props: {
	// 	listPlayers: Array
	// },
	// methods: {
		// getComplete() {
		// 	// Display selection list if is completed or not
		// 	this.errorMessages = []
		// 	if (this.list.length > 0) {
		// 		this.isCompleted = true;
		// 	} else {
		// 		const error = "Vous n'avez pas encore sélectionné de joueurs"
		// 		if(!this.errorMessages.includes(error)) {
		// 			this.errorMessages.push(error)
		// 		}
		// 	}
		// }
	// 	getComplete: function() {
	// 		this.$emit('is-completed', false);
	// 	}
	// },
}
</script>
<style >
		/* .list-errors li {
		background: #ff5555;
		color: #fff;
		padding: 1%;
		border-radius: 6px;
		border: 2px solid #ff0000;
	} */
</style>