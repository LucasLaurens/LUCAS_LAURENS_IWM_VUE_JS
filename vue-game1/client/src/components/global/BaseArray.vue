<template>
	<div>
		<p v-show="$store.state.counter >= 11" class="error">Vous avez atteint le cotat maximum de joueurs dans la selection</p>
		<table v-show="characters && characters.length > 0" class="table-auto w-full base-array">
			<thead>
				<tr>
					<th class="w-1/3">Name</th>
					<th class="w-1/3">Race</th>
					<th class="w-1/3">Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(character, index) in characters" :key="index" :class="[(index%2==0) ? 'green-line' : 'white-line']">
					<td class="w-1/3 text-center">{{character.name}}</td>
					<td class="w-1/3 text-center">{{getRace(character.race)}}</td>
					<td class="w-1/3 text-center">
						<base-button
							v-show="title.length > 0 && title === 'characters'"
							title="Add"
							:index="index"
							:class="[characterPicked(character)]"
							@click="addOne(character)"
						/>
						<base-button
							title="Remove"
							:index="index"
							@click="removeData(character)"
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
		characters: Array,
		title: String
	},
	methods: {
		...mapActions({
			addCharacter: 'addCharacter',
			removeCharacter: 'removeCharacter'
		}),
		addOne: function(character) {
			// Add an item in a list if doesn't exist
			if (this.$store.state.counter == 10) {
				window.scrollTo(0, 0);
			}
			if (this.$store.state.counter < 11) {
				if (!this.$store.state.selection.includes(character)) {
					this.addCharacter(character)
				}
			}
		},
		removeData: function(character) {
			this.error = "";
			// Remove an item accordting to the name
			this.removeCharacter(character);
		},
		characterPicked: function(character) {
			return (this.$store.state.selection.find(item => item.name === character.name)) ? 'selected' : '';
		},
		getRace: function(race) {
			return (!isNaN(race) || race === 'NaN') ? 'Pas attribué' : race
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