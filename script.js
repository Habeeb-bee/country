'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');




 
 const renderCountry = function (data) {

    const languages =Object.values(data.languages);
    const currencies =Object.values(data.currencies)[0].name;
    
    const html = `<article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)}millon</p>
        <p class="country__row"><span>🗣️</span>${languages}</p>
        <p class="country__row"><span>💰</span>${ currencies}</p>
      </div>
    </article>`;
 
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
 
 };
 const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg)
   countriesContainer.style.opacity = 1;

  };

  //promise
 
  const getCountry = function(country){
     fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
       console.log(response);

       if(!response.ok){
        throw new Error(`Country not found `)
       }
       // To be able to read the data from the response body...
       // ...you need to call the json mtd
      return response.json();

      // to get the data you need another then mtd
     }, 
    ).then( (data) => renderCountry(data[0])
 ).catch( function (err) {
  renderError (`Something went wrong ${err.message}, try again`)
 }
  
  ); 
  };

  getCountry('canada')
