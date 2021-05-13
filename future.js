const futureDateInput1 = document.getElementById('futureDate1');

const currentDate = new Date().toISOString().substr(0, 10);

futureDateInput1.setAttribute('min', currentDate);

//FUTURE DATE 2 //
const ageDay2El = document.getElementById('day-input2');
const ageMonth2El = document.getElementById('month-input2');
const ageYear2El = document.getElementById('year-input2');
const futureFormEl = document.getElementById('future-form');

const resultsEl = document.getElementById('results');

let day2 = +ageDay2El.value;
let month2 = +ageMonth2El.value;
let year2 = +ageYear2El.value;

function isLeapYear2(year2) {
	let month2 = +ageMonth2El.value;
	if (month2 === 2) {
		let leapYear = false;

		if (year2 % 4 === 0) {
			leapYear = true;
			if (year2 % 100 === 0) {
				leapYear = false;
			}
		}
		if (year2 % 400 === 0) {
			leapYear = true;
		}
		if (leapYear) {
			let maximumDays = 29;
			calcMaxDays2(maximumDays);
			console.log('it is a leap year!!!!' + maximumDays);
		} else {
			maximumDays = 28;
			calcMaxDays2(maximumDays);
			console.log('it is february' + maximumDays);
		}
	}
}

//find out what month it is and change the maximum days to the appropriate value
function maxDays2(month2) {
	if (month2 == 2) {
		// console.log('off to leap year function');
		return isLeapYear2(year2);
	}
	const thirtyDay = [4, 6, 9, 11];
	let isThirty = false;
	for (let i = 0; i < thirtyDay.length; i++) {
		if (thirtyDay[i] == month) {
			isThirty = true;
			break;
		}
	}
	if (isThirty) {
		let maximumDays = 30;

		// console.log('it is april, june, september or november' + maximumDays);
		return calcMaxDays2(maximumDays);
	} else {
		maximumDays = 31;
		calcMaxDays2(maximumDays);
		// console.log('it is january, march, may, july, august, october or december' + maximumDays);
	}
}

//set the attribute with the max number of days
function calcMaxDays2(maximDays) {
	ageDay2El.setAttribute('max', maximDays);
}

function checkDate() {
	let day2 = +ageDay2El.value;
	let month2 = +ageMonth2El.value;
	let year2 = +ageYear2El.value;
	let newInputDate = new Date(year2, month2 - 1, day2).toISOString();
	let newInputDateConverted = new Date(newInputDate).toLocaleDateString();

	let currentDate = new Date().toISOString();

	if (currentDate > newInputDate) {
		resultsEl.classList.add('error-show');
		resultsEl.innerText = 'The date needs to be in the future';
		setTimeout(function () {
			resultsEl.classList.remove('error-show');
		}, 3000);
	} else if (currentDate < newInputDate) {
		resultsEl.classList.add('success');
		resultsEl.innerText = 'Your chosen date is: ' + newInputDateConverted;
		setTimeout(function () {
			resultsEl.classList.remove('success');
		}, 3000);
	}
}
