<template>
	<section>
		<header><h1>My friends</h1></header>
		<ul>
			<friend-contact
				v-for="friend in friends"
				:key="friend.id"
				:name="friend.name"
				:phoneNumber="friend.phone"
				:emailAddress="friend.email"
				:isFavorite="friend.isFavorite ? '1' : '0'"
			></friend-contact>
		</ul>
	</section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
export default {
	components: { FriendContact },
	data() {
		return {
			friends: [
				{
					id: 1,
					name: 'John Doe',
					phone: '123-456-7890',
					email: 'aasdada@localhost.com',
				},
				{
					id: 2,
					name: 'John Doe 2',
					phone: '123-456-7890',
					email: 'aasdada@localhost.com',
				},
			],
		};
	},
};
</script>

<style>
* {
	box-sizing: border-box;
}

html {
	font-family: 'Jost', sans-serif;
}

body {
	margin: 0;
}

header {
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	margin: 3rem auto;
	border-radius: 10px;
	padding: 1rem;
	background-color: #58004d;
	color: white;
	text-align: center;
	width: 90%;
	max-width: 40rem;
}

#app ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

#app li {
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	margin: 1rem auto;
	border-radius: 10px;
	padding: 1rem;
	text-align: center;
	width: 90%;
	max-width: 40rem;
}

#app h2 {
	font-size: 2rem;
	border-bottom: 4px solid #ccc;
	color: #58004d;
	margin: 0 0 1rem 0;
}

#app button {
	font: inherit;
	cursor: pointer;
	border: 1px solid #ff0077;
	background-color: #ff0077;
	color: white;
	padding: 0.05rem 1rem;
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
	background-color: #ec3169;
	border-color: #ec3169;
	box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
