'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountryData = function (country) {
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
request.send();
console.log(request.responseText)

request.addEventListener('load', function() {
    console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    //const data = dataArray[0]
    console.log('data', data);
    console.log('data', data.languages['eng']);

    const html = `
    <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages['eng']}</p>
            <p class="country__row"><span>💰</span>${data.currencies['USD'].name}</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
    
});
}

getCountryData('india');
getCountryData('usa');
getCountryData('australia');