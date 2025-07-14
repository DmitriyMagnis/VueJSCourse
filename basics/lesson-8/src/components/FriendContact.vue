<template>
	<li>
		<h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
		<button @click="toggleFavorite">Toggle Favorite</button>
		<button @click="toggleDetails">Show Details</button>
		<ul v-if="detailsAreVisible">
			<li><strong>Phone:</strong>{{ phoneNumber }}</li>
			<li><strong>Email:</strong>{{ emailAddress }}</li>
		</ul>
		<button @click="deleteFriend">Delete</button>
	</li>
</template>

<script>
export default {
	props: {
		id: {
			type: Number,
			required: true,
		},
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
	emits: ['toggle-favorite', 'delete-friend'],

	data() {
		return {
			detailsAreVisible: false,
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
		toggleFavorite() {
			this.$emit('toggle-favorite', this.id);
		},
		deleteFriend() {
			this.$emit('delete-friend', this.id);
		},
	},
};
</script>
