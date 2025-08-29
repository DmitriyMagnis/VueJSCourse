<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>

  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: ['Max', 'Anna', 'Chris'],
    };
  },
  methods: {
    addUser() {
      const enteredUserName = this.$refs.userNameInput.value;
      if (enteredUserName.trim() === '') {
        return;
      }
      this.users.push(enteredUserName);
      this.$refs.userNameInput.value = '';
    },
    removeUser(user) {
      this.users = this.users.filter((u) => u !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: all 0.3s ease-out;
}
.user-list-leave-active {
  transition: all 0.3s ease-in;
  position: absolute;
}
.user-list-enter-to,
.user-list-leave-from {
  opacity: 1.2;
  transform: translateX(0);
}
.user-list-leave-to {
  opacity: 1;
  transform: translateX(30px);
}

.user-list-move {
  transition: transform 0.3s ease;
}
</style>
