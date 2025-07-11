<template>
	<li>
		<h2>{{ name }} {{ friendIsFavorite ? '(Favorite)' : '' }}</h2>
		<button @click="toggleFavorite">Toggle Favorite</button>
		<button @click="toggleDetails">Show Details</button>
		<ul v-if="detailsAreVisible">
			<li><strong>Phone:</strong>{{ friend.phone }}</li>
			<li><strong>Email:</strong>{{ friend.email }}</li>
		</ul>
	</li>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			default: '',
		},
		emailAddress: {
			type: String,
			default: '',
		},
		isFavorite: {
			type: Boolean,
			required: true,
			default: false,
			// validator(value) {
			// 	return value === '0' || value === '1';
			// },
		},
	},
	data() {
		return {
			detailsAreVisible: false,

			friendIsFavorite: this.isFavorite,
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
		toggleFavorite() {
			this.friendIsFavorite = !this.friendIsFavorite;
		},
	},
};
</script>
