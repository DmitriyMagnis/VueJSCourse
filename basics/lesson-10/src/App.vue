<template>
	<div>
		<the-header></the-header>

		<button @click="setSelectedComponent('active-goals')">ACtive Goals</button>
		<button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
		<keep-alive>
			<component :is="activeGoals"></component>
		</keep-alive>
	</div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoal from './components/CourseGoal.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
	components: {
		TheHeader,
		// BadgeList,
		// UserInfo,
		// CourseGoal,
		ActiveGoals,
		ManageGoals,
	},
	methods: {
		setSelectedComponent(name) {
			this.activeGoals = name;
		},
	},
	data() {
		return {
			activeGoals: 'active-goals',
			activeUser: {
				name: 'Maximilian Schwarzmüller',
				description: 'Site owner and admin',
				role: 'admin',
			},
		};
	},
};
</script>

<style>
html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>
