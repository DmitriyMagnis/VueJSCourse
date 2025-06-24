function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const app = Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
			currentRound: 0,
			winner: null,
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
	watch: {
		playerHealth(value) {
			if (value <= 0 && this.monsterHealth <= 0) {
				this.winner = 'draw';
			} else if (value <= 0) {
				this.winner = 'monster';
			}
		},
		monsterHealth(value) {
			if (value <= 0 && this.playerHealth <= 0) {
				this.winner = 'draw';
			} else if (value <= 0) {
				this.winner = 'player';
			}
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
		healPlayer() {
			this.currentRound++;
			const healValue = getRandomValue(8, 20);
			if (this.playerHealth + healValue > 100) {
				this.playerHealth = 100;
			} else {
				this.playerHealth += healValue;
			}
			this.attackPlayer();
		},
		startGame() {
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.currentRound = 0;
			this.winner = null;
		},
		surrender() {
			this.winner = 'monster';
		},
	},
});

app.mount('#game');
