const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
		};
	},
	methods: {
		submitForm() {
			alert('Submitted!');
		},
		setName(evt) {
			this.name = evt.target.value;
		},
		add(number) {
			this.counter += number;
		},
		remove(number) {
			this.counter -= number;
		},
	},
});

app.mount('#events');
