const app = Vue.createApp({
	data() {
		// Data properties are reactive and can be used in the template
		// They can also be used in methods and computed properties
		return {
			courseGoalA: 'Some string for presentation',
			courseGoalB: '<h2>Some string for presentation B<h2>',
			vueLink: 'https://vuejs.org',
		};
	},
	methods: {
		outputGoal() {
			const number = Math.random();
			if (number > 0.5) return this.courseGoalA;
			return this.courseGoalB;
		},
	},
});

app.mount('#user-goal');
5206114;
