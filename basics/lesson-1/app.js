const app = Vue.createApp({
	data() {
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
