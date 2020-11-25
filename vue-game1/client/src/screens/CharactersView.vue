<template>
	<div id="character-view" class="container mx-auto">
		<div class="mb-4">
			<h2 class="second-title">characters</h2>
			<h3 v-show="counter >= 11" class="success">Félicitation votre équipe est désormais au grand complet</h3>

			<div class="grid grid-cols-2">
				<p>Nombre de personnages {{stringParse}} : {{counter}}/11</p>
				<div>
					<label for="options">Sort By : </label>
					<select id="options" v-show="options" v-model="option">
						<option value="select an option" selected>select an option</option>
						<option v-for="(item, i) in options" :key="i" :value="item">{{item}}</option>
					</select>
				</div>
			</div>
			<base-array
				v-show="characters && characters.length > 0"
				:characters="characters"
				title="characters"
			/>

			<base-button
				class="mt-4 text-center btn-load-more"
				title="Load More"
				:index="index"
				@click="loadMore"
			/>
		</div>
	</div>
</template>
<script>
import Character from '../service'
import { mapActions } from 'vuex'
export default {
	name: "character-view",
	data() {
		return {
			options: ['name', 'race'],
			option: "select an option"
		}
	},
	async mounted() {
		try {
			const result = await Character.datas();

			if (result && result.length > 0) {
				this.getCharactersSquad(result);
			}
		} catch (e) {
			console.error(e)
		}
	},
	methods: {
		...mapActions({
			getCharactersSquad: 'getCharactersSquad'
		}),
		compare: function(val, a, b) {
			if (val === 'name') {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			}
			if (val === 'race') {
				if (a.race < b.race) {
					return -1;
				}
				if (a.race > b.race) {
					return 1;
				}
				return 0;
			}
		},
		loadMore: async function() {
			let number = this.characters.length + 3

			try {
				const result = await Character.datas(number);

				if (result && result.length > 0) {
					this.getCharactersSquad(result);
				}
			} catch (e) {
				console.error(e)
			}
		}
	},
	computed: {
		counter: function() {
			return this.$store.state.counter
		},
		characters: function() {
			return this.$store.state.characters
		},
		stringParse: function() {
			return (this.counter && this.counter > 1) ? 'selectionnés' : 'selectionné'
		}
	},
	watch: {
		'option': function(val) {
			return this.characters.sort((a,b)=>this.compare(val,a,b));
		}
	}
}
</script>
<style>
	#character-view #options {
		background-color: #1abc9c;
		border: 3px solid #1abc9c;
		color: #fff;
		border-radius: 6px;
	}
	#character-view #options:focus {
		outline: none;
	}
	#character-view .btn-load-more button {
		background: #1abc9c;
		color: #fff !important;
	}
</style>