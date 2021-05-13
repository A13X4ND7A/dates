const ageCheckFormEl = document.getElementById('age-check-form');
const ageDayEl = document.getElementById('day-input');
const ageMonthEl = document.getElementById('month-input');
const ageYearEl = document.getElementById('year-input');
const resultEl = document.getElementById('result');
const check = document.getElementById('check');
const cross = document.getElementById('cross');
const result2El = document.getElementById('result2');
const check2 = document.getElementById('check2');
const cross2 = document.getElementById('cross2');

let day = +ageDayEl.value;
let month = +ageMonthEl.value;
let year = +ageYearEl.value;
//get current date

//check to see if form has been submitted and calculate the age
ageCheckFormEl.addEventListener('submit', (e) => {
	e.preventDefault();
	getDate();
});

//Error Handling for form

//check to see if it is a leap year. if it is, the maximum days in february increase to 29 from 28
function isLeapYear(year) {
	let month = +ageMonthEl.value;
	if (month === 2) {
		let leapYear = false;

		if (year % 4 === 0) {
			leapYear = true;
			if (year % 100 === 0) {
				leapYear = false;
			}
		}
		if (year % 400 === 0) {
			leapYear = true;
		}
		if (leapYear) {
			let maximumDays = 29;
			calcMaxDays(maximumDays);
			// console.log('it is a leap year!!!!' + maximumDays);
		} else {
			maximumDays = 28;
			calcMaxDays(maximumDays);
			// console.log('it is february' + maximumDays);
		}
	}
}

//find out what month it is and change the maximum days to the appropriate value
function maxDays(month) {
	if (month == 2) {
		// console.log('off to leap year function');
		return isLeapYear(year);
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
		return calcMaxDays(maximumDays);
	} else {
		maximumDays = 31;
		calcMaxDays(maximumDays);
		// console.log('it is january, march, may, july, august, october or december' + maximumDays);
	}
}

//set the attribute with the max number of days
function calcMaxDays(maximDays) {
	ageDayEl.setAttribute('max', maximDays);
}

const currDate = new Date();

let eighteenYearsPrevious = currDate;
eighteenYearsPrevious.setFullYear(eighteenYearsPrevious.getFullYear() - 18);

function getDate() {
	day = +ageDayEl.value;
	month = +ageMonthEl.value;
	year = +ageYearEl.value;
	let inputDate = new Date(year, month - 1, day).toISOString();

	let convertedDate = eighteenYearsPrevious.toISOString();

	if (inputDate <= convertedDate) {
		console.log(resultEl);
		resultEl.innerText = 'Great news, the user is over 18!';
		resultEl.classList.add('green');
		check.classList.add('show-check');
		cross.classList.remove('show-cross');
		resultEl.classList.remove('red');

		console.log('the User is over 18');
	} else {
		resultEl.innerText = 'Sorry, the user is under 18!';
		resultEl.classList.add('red');
		resultEl.classList.remove('green');
		check.classList.remove('show-check');
		cross.classList.add('show-cross');
		console.log('Sorry the user is under 18');
	}
	console.log(convertedDate);
	console.log(inputDate);
}

//AGE CHECKER NUMBER 2 //
const datePickerFormEl = document.getElementById('datePicker-form');

datePickerFormEl.addEventListener('submit', (e) => {
	var dateControl = document.getElementById('age-calc-two');
	getPickerDate(dateControl.value);
	e.preventDefault();
});

function getPickerDate(val) {
	let convertedDate = eighteenYearsPrevious.toISOString();
	let inputedPickerDate = new Date(val).toISOString();
	if (inputedPickerDate <= convertedDate) {
		result2El.innerText = 'Great news, the user is over 18!';
		result2El.classList.add('green');
		check2.classList.add('show-check');
		cross2.classList.remove('show-cross');
		result2El.classList.remove('red');

		console.log('the User is over 18');
	} else {
		result2El.innerText = 'Sorry, the user is under 18!';
		result2El.classList.add('red');
		result2El.classList.remove('green');
		check2.classList.remove('show-check');
		cross2.classList.add('show-cross');
		console.log('Sorry the user is under 18');
	}
}
