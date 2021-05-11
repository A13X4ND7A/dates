const ageCheckFormEl = document.getElementById('age-check-form');
const ageDayEl = document.getElementById('day-input');
const ageMonthEl = document.getElementById('month-input');
const ageYearEl = document.getElementById('year-input');

const currDate = new Date();

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
		var maximumDays = 29;
		calcMaxDays(maximumDays);
	} else {
		maximumDays = 28;
		calcMaxDays(maximumDays);
	}
}

const thirtyDays = ['04', '06', '09', '11'];

function maxDays(val) {
	console.log(val);
	if (val == 2) {
		ageDayEl.setAttribute('max', '28');
	}
}

function calcMaxDays(maximDays) {
	console.log(maximDays);
	ageDayEl.setAttribute('max', maximDays);
}
