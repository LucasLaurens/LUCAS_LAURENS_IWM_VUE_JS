<template>
	<div id="character-view" class="container mx-auto">
		<div class="mb-4">
			<h2 class="second-title">characters</h2>
			<h3 v-show="counter >= 11" class="success">Félicitation votre équipe est désormais au grand complet</h3>
			<p>{{statsRace}}</p>
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
			<p v-show="search.length >= 10" class="warn">Vous ne pouvez pas écrire plus de 10 caractères</p>
			<div class="search-bar mt-4 mb-8 grid grid-cols-2">
				<input type="text" v-model="search">
				<base-button
					class="ml-8 btn-search"
					title="Search"
					@click="searchCharactere"
				/>
			</div>
			<base-array
				class="mt-8"
				v-show="characters && characters.length > 0 && is_search !== true"
				:characters="characters"
				title="characters"
			/>
			<base-array
				class="mt-8"
				v-show="charactersFounded && charactersFounded.length > 0 && is_search !== false"
				:characters="charactersFounded"
				title="characters"
			/>

			<base-button
				class="mt-4 text-center btn-load-more"
				title="Load More"
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
			option: "select an option",
			charactersFounded: [],
			search: "",
			is_search: false
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
		},
		countRaceOccurences: function (tab){
			var result = {};
			console.log(tab)
			tab.forEach(function(elem){
				if(elem.race in result){
					result[elem.race] = ++result[elem.race];
				}
				else{
					result[elem.race] = 1;
				}
			});
			return result;
		},
		searchCharactere: function() {
			let characters = [];
			this.is_search = false;
			if( this.search && this.search.length > 0 ){
				this.characters.map((item)=>{
					if (item.name.includes(this.search)) {
						if (!characters.includes(item)) {
							characters.push(item);
						}
					}
				})
				this.is_search = true
			}
			this.charactersFounded = [...this.charactersFounded, ...characters];
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
		},
		statsRace: function() {
			let string = "Tu possède : ";
			let selection = this.$store.state.selection;
			if (selection && selection.length > 0) {
				for(const [key, value] of Object.entries(this.countRaceOccurences(selection))) {
					string += `${value} ${key}, `;
				}
			}
			return string;
		}
	},
	watch: {
		'option': function(val) {
			return this.characters.sort((a,b)=>this.compare(val,a,b));
		},
		'search': function(val) {
			if (val.length > 10) {
				this.search = val.substring(0, val.length-1);
			}
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
	#character-view .btn-load-more button, #character-view .btn-search button {
		background: #1abc9c;
		border: 3px solid #1abc9c;
		color: #fff !important;
		padding: 1%;
	}
	#character-view .search-bar input {
		color: #1abc9c;
		border: 3px solid #1abc9c;
		border-radius: 6px;
		padding: 1%;
	}
	#character-view .search-bar input:focus {
		outline: none;
	}
</style>