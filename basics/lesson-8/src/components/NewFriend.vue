<template>
	<form @submit.prevent="submitData">
		<div>
			<label>Name</label>
			<input type="text" placeholder="Name" v-model="name" />
		</div>
		<div>
			<label>Phone</label>
			<input type="tel" placeholder="Phone" v-model="phone" />
		</div>
		<div>
			<label>Email</label>
			<input type="email" placeholder="Email" v-model="email" />
		</div>
		<div>
			<button>Add Contact</button>
		</div>
	</form>
</template>

<script>
export default {
	emits: ['add-friend'],
	data() {
		return {
			name: '',
			phone: '',
			email: '',
		};
	},
	methods: {
		submitData() {
			if (
				this.name.trim() === '' ||
				this.phone.trim() === '' ||
				this.email.trim() === ''
			) {
				return;
			}
			const newFriend = {
				id: new Date().toISOString,
				name: this.name,
				phone: this.phone,
				email: this.email,
				isFavorite: false,
			};
			this.$emit('add-friend', newFriend);
			this.name = '';
			this.phone = '';
			this.email = '';
		},
	},
};
</script>
