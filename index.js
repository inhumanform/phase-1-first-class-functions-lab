const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
    console.log(firstTwoDrivers);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
    console.log(lastTwoDrivers);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier; 
};
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, whichDrivers) {
    return whichDrivers(drivers);

}

const firstTwoDrivers = returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
console.log(firstTwoDrivers);