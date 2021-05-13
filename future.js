const futureDateInput1 = document.getElementById('futureDate1');

const currentDate = new Date().toISOString().substr(0, 10);

console.log(currentDate);

futureDateInput1.setAttribute('min', currentDate);
