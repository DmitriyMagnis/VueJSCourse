function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const app = Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
			currentRound: 0,
		};
	},
	computed: {
		playerBarStyles() {
			if (this.playerHealth < 0) {
				return { width: '0%' };
			}
			return { width: this.playerHealth + '%' };
		},
		monsterBarStyles() {
			if (this.monsterHealth < 0) {
				return { width: '0%' };
			}
			return { width: this.monsterHealth + '%' };
		},
		mayUseSpecialAttack() {
			return this.currentRound % 3 !== 0;
		},
	},
	methods: {
		attackMonster() {
			this.currentRound++;
			const damage = getRandomValue(5, 12);
			this.monsterHealth -= damage;
			this.checkWin();
			this.attackPlayer();
		},
		attackPlayer() {
			const damage = getRandomValue(8, 15);
			this.playerHealth -= damage;
			console.log(`Player takes ${damage} damage`);
			this.checkWin();
		},
		specialAttackMonster() {
			this.currentRound++;
			const damage = getRandomValue(10, 25);
			this.monsterHealth -= damage;
			this.checkWin();
			this.attackPlayer();
		},
		checkWin() {},
	},
});

app.mount('#game');
