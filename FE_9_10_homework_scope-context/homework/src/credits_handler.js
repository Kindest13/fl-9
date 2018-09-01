// Task #1
function userCard(num) {
	const hundredPercent = 100;
	const tax = 0.5;
	const date = new Date();
	let object = {
	key: num,
	balance: 100,
	transactionLimit: 100,
	historyLogs: []
	};
	function getCardOptions() {
		return object;
	}
	function putCredits(amount) {
		object.balance += amount;
		object.historyLogs.push({operationType: `Received credits`,
								credits: amount,
								operationTime: date.toLocaleString('en-GB')});
	}
	function takeCredits(amount) {
		if(amount > object.transactionLimit) {
			console.log(
				`Operation cancelled.The amount of money you want to take is bigger than transaction limit.`);
		} else if (amount > object.balance) {
			console.log(
				`Operation cancelled.The amount of money you want to take is bigger than your balance.`);
		} else {
		object.balance -= amount;
		object.historyLogs.push({operationType: `Withdrawal of credits`,
								credits: amount,
								operationTime: date.toLocaleString('en-GB')});
		}

	}
	function setTransactionLimit(limit) {
		object.transactionLimit = limit;
		object.historyLogs.push({operationType: `Transaction limit change`,
								credits: limit,
								operationTime: date.toLocaleString('en-GB')});
	}
	function transferCredits(amount,card) {
		const taxedTransfer = amount + amount*tax/hundredPercent;
		if(amount > object.transactionLimit) {
			console.log(
				`Operation cancelled.The amount of credits you want to transfer is bigger than transaction limit.`);
		} else if (taxedTransfer > object.balance) {
			console.log(
				`Operation cancelled.The taxed transfer you want to transfer is bigger than your balance.`);
		} else {
			this.takeCredits(taxedTransfer);
			card.putCredits(amount);
		}
	}
	return {
		getCardOptions: getCardOptions,
		putCredits: putCredits,
		takeCredits: takeCredits,
		setTransactionLimit: setTransactionLimit,
		transferCredits: transferCredits
	};
}

// Task #2
class UserAccount {
	constructor(name) {
		this.name = name;
		this.cards = [];
		this.maxCards = 3;
	}
	addCard() {
		if(this.cards.length < this.maxCards) {
			this.cards.push(userCard(this.cards.length + 1));
		} else {
			console.log('Adding cancelled.Exceeded allowed limit of cards.');
		}
	}
	getCardByKey(key) {
		return this.cards[key - 1];
	}
}