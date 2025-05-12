const app = Vue.createApp({
	data() {
		return {
			age: 27,
			name: 'John',
			value: 'value some',
			imgURL:
				'https://img.freepik.com/free-photo/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus_1418-714.jpg?semt=ais_hybrid&w=740',
		};
	},
	methods: {
		randomNumber() {
			const number = Math.random();

			return Math.floor(number * 100);
		},
	},
});

app.mount('#assignment');
