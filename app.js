const ageCheckFormEl = document.getElementById('age-check-form');
const ageDayEl = document.getElementById('day-input');
const ageMonthEl = document.getElementById('month-input');
const ageYearEl = document.getElementById('year-input');

//get current date
const currDate = new Date();

//check to see if form has been submitted and calculate the age
ageCheckFormEl.addEventListener('submit', (e) => {
	e.preventDefault();
	calculateAge();
});

function calculateAge() {
	const day = +ageDayEl.value;
	const month = +ageMonthEl.value - 1;
	const year = +ageYearEl.value;
	const inputDate = new Date(year, month, day);
	console.log(inputDate);
}

//Error Handling for form

//check to see if it is a leap year. if it is, the maximum days in february increase to 29 from 28
function isLeapYear(year) {
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
		console.log('it is a leap year!!!!' + maximumDays);
	} else {
		maximumDays = 28;
		calcMaxDays(maximumDays);
		console.log('it is february' + maximumDays);
	}
}

//find out what month it is and change the maximum days to the appropriate value
function maxDays(month) {
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
		calcMaxDays(maximumDays);
		console.log('it is april, june, september or november' + maximumDays);
	} else {
		maximumDays = 31;
		calcMaxDays(maximumDays);
		console.log('it is january, march, may, july, august, october or december' + maximumDays);
	}

	if (month == 2) {
		const year = +ageYearEl.value;
		isLeapYear(year);
	}
}

//set the attribute with the max number of days
function calcMaxDays(maximDays) {
	console.log(maximDays);

	ageDayEl.setAttribute('max', maximDays);
}
