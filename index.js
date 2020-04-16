const rawCities = require('cities.json');
const rawCountries = require('./countries');

// console.log(JSON.stringify(cities,' ', 2));
const countries = {};
const countriesNameIndex = {};
const countriesAlpha3CodeIndex = {};
const countriesAlpha2CodeIndex = {};
const countriesCiocIndex = {};

const countryKeyCode = 'alpha3Code';

rawCountries.map(function (country) {
    const countryCode = country[countryKeyCode];

    country.cities = [];

    countries[countryCode] = country;

    countriesNameIndex[country.name] = countryCode;
    countriesAlpha2CodeIndex[country.alpha2Code] = countryCode;
    countriesAlpha3CodeIndex[country.alpha3Code] = countryCode;
    countriesCiocIndex[country.cioc] = countryCode;
});

rawCities.map(function (city) {
    city.country = countriesAlpha2CodeIndex[city.country];
    countries[city.country].cities.push(city);
});

console.log(JSON.stringify(countries, null, '  '));
