const app = Vue.createApp({
	data() {
		return {
			friends: [
				{
					id: 'manuel',
					name: 'Manuel',
					phone: '123-456-7890',
					email: 'Manuel@example.com',
				},
				{
					id: 'julie',
					name: 'julie',
					phone: '123-456-7890',
					email: 'julie@example.com',
				},
			],
		};
	},
});

app.component('friend-contact', {
	data() {
		return {
			detailsAreVisible: false,
			friend: {
				id: 'manuel',
				name: 'Manuel Lorenz',
				phone: '01234 5678 991',
				email: 'Manuel@example.com',
			},
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
	},
	template: `
		<li>
			<h2>{{ friend.name }}</h2>
			<button @click="toggleDetails">
				{{ detailsAreVisible ? 'Hide' : 'Show' }} Details
			</button>
			<ul v-if="detailsAreVisible">
				<li><strong>Phone:</strong> {{ friend.phone }}</li>
				<li><strong>Email:</strong> {{ friend.email }}</li>
			</ul>
		</li>
	`,
});

app.mount('#app');
