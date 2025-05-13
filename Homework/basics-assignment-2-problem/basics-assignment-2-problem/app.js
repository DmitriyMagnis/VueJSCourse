const app = Vue.createApp({
	data() {
		return {
			text: 'Hello World',
			output: '',
			output2: '',
		};
	},
	methods: {
		setForm(evt) {
			this.output2 = evt.target.value;
		},
		setInput(evt) {
			this.output = evt.target.value;
		},
		showAlert() {
			alert('Hello World');
		},
	},
});

app.mount('#assignment');
