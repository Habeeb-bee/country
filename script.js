'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const submit = document.querySelector('.btn-search');






 
 const renderCountry = function (data) {

    const languages =Object.values(data.languages);
    const currencies =Object.values(data.currencies)[0].name;
    
    const html = `<article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫:</span>${(data.population / 1000000).toFixed(1)}millon</p>
        <p class="country__row"><span>🗣️:</span>${languages}</p>
        <p class="country__row"><span>💰:</span>${ currencies}</p>
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
 

  const getCountry = async function (country) {

    try {const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  
    if (!res.ok) {
      throw new Error('country not found')
    }
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
    console.log(res);}
    catch (err) {
      console.error(err);
      renderError(`Something went wrong ${err.message}`)
    }
  }
  
  
    
  
  
  
    submit.addEventListener('click', function(e) {
      console.log('clicked');
     
      let countryValue = document.getElementsByTagName("input")[0];
      const conVal= countryValue.value
      getCountry(conVal)
      
    })
