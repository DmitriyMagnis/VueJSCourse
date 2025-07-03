const app = Vue.createApp({
	data() {
		return {
			currentUserInput: '',
			message: 'Vue is great!',
		};
	},
	methods: {
		saveInput(event) {
			this.currentUserInput = event.target.value;
		},
		setText() {
			// this.message = this.currentUserInput;
			this.meesage = this.$refs.userText.value;
		},
	},
	beforeCreate() {
		console.log('beforeCreate() called');
	},
	created() {
		console.log('created() called');
	},
	beforeMount() {
		console.log('beforeMount() called');
	},
	mounted() {
		console.log('mounted() called');
	},
	beforeUpdate() {
		console.log('beforeUpdate() called');
	},
	updated() {
		console.log('updated() called');
	},
	beforeUnmount() {
		console.log('beforeUnmount() called');
	},
	unmounted() {
		console.log('unmounted() called');
	},
});

app.mount('#app');

setTimeout(() => {
	app.unmount();
}, 3000);
