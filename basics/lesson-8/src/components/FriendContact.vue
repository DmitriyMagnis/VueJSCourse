<template>
	<li>
		<h2>{{ friend.name }}</h2>
		<button @click="toggleDetails">Show Details</button>
		<ul v-if="detailsAreVisible">
			<li><strong>Phone:</strong>{{ friend.phone }}</li>
			<li><strong>Email:</strong>{{ friend.email }}</li>
		</ul>
	</li>
</template>

<script>
export default {
	data() {
		return {
			detailsAreVisible: false,
			friend: {
				id: 1,
				name: 'John Doe',
				phone: '123-456-7890',
				email: 'asdada@localhost.com',
			},
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
	},
};
</script>
