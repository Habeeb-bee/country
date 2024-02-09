'use strict';

const countriesContainer = document.querySelector('.countries');
const submit = document.querySelector('.btn-search');
const countryValue = document.getElementsByTagName("input")[0];
const search = document.querySelector('.searchbar')
const overLay = document.querySelector('.overlay');




 
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
 
 };
 const renderError = function (msg) {
  overLay.classList.add('hidden');
  alert(msg)
   

  };

  //promise
 

  const getCountry = async function (country) {

    try {const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  
    if (!res.ok) {
      throw new Error('country not found');
    }
    const data = await res.json();
    renderCountry(data[0]);}
    catch (err) {
      console.error(err);
      renderError(`Something went wrong ${err.message}`)
    }
  }
  
  
    
  
  
  //Displaying the country 
    submit.addEventListener('click', function(e) {
      getCountry(countryValue.value)

    // clear inputs
      countryValue.value = '';
      overLay.classList.remove('hidden')
    })


  // close country display

    const unOpen = document.querySelector('.close-btn');
    const close = function () {countriesContainer.classList.add('hidden')}

   overLay.addEventListener('click', () => {
    overLay.classList.add('hidden');
    close();
  })

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !countriesContainer.classList.contains('hidden')) {
        close();
        overLay.classList.add('hidden')
    }
    
  })
 

//Reloading app
  search.addEventListener('click', function (e) {
   
   if (countriesContainer.classList.contains('hidden')) {
      location.reload(true)
   }
  })
  


  



    


// 'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');
// const submit = document.querySelector('.btn-search');






 
//  const renderCountry = function (data) {

//     const languages =Object.values(data.languages);
//     const currencies =Object.values(data.currencies)[0].name;
    
//     const html = `<article class="country">
//     <!-- <button class="close-btn">&times;</button>
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫:</span>${(data.population / 1000000).toFixed(1)} millon</p>
//         <p class="country__row"><span>🗣️:</span>${languages}</p>
//         <p class="country__row"><span>💰:</span>${ currencies}</p>
//       </div>
//     </article>`;
 
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
 
//  };
//  const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg)
//    countriesContainer.style.opacity = 1;

//   };

  //promise
 
  // const getCountry = function(country){
  //    fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
  //      console.log(response);

  //      if(!response.ok){
  //       throw new Error(`Country not found `)
  //      }
       // To be able to read the data from the response body...
       // ...you need to call the json mtd
      // return response.json();

      // to get the data you need another then mtd
//      }, 
//     ).then( (data) => renderCountry(data[0])
//  ).catch( function (err) {
//   renderError (`Something went wrong ${err.message}, try again`)
//  }
  
//   ); 
//   };


// const getCountry = async function (country) {

//   try {const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);

//   if (!res.ok) {
//     throw new Error('country not found')
//   }
//   const data = await res.json();
//   console.log(data);
//   renderCountry(data[0]);
//   console.log(res);}
//   catch (err) {
//     console.error(err);
//     renderError(`Something went wrong ${err.message}`)
//   }
// }


  



//   submit.addEventListener('click', function(e) {
//     console.log('clicked');
   
//     let countryValue = document.getElementsByTagName("input")[0];
//     const conVal= countryValue.value
//     getCountry(conVal)
    
//   })













//   const icons = new URL('../img/icons.svg', import.meta.url);

// const recipeContainer = document.querySelector('.recipe');

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

// // https://forkify-api.herokuapp.com/v2 ///


// const renderSpinner = function (spin) {

//   const markup = `
//   <div class="spinner">
//   <svg>
//     <use href="${icons}#icon-loader"></use>
//   </svg>
//   </div> 
//   `;


//   spin.innerHTML = ''
//   spin.insertAdjacentHTML = ('afterbegin', markup);
  
// }



// const showRecipe = async function () {
//   try {
//     renderSpinner(recipeContainer)
//    const response = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
//    const data = await response.json();



//    if(!response.ok) throw new Error(`${data.message} `)
//    console.log(data);

//    let {recipe} = data.data;

//    recipe = {
//     id: recipe.id,
//     title: recipe.title,
//     publisher: recipe.publisher, 
//     sourceUrl: recipe.source_url,
//     image: recipe.image_url,
//     servings: recipe.servings,
//     cookingTime: recipe.cooking_time,
//     ingredients: recipe.ingredients

//    }

//    const markup = ` <figure class="recipe__fig">
//    <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
//    <h1 class="recipe__title">
//      <span>${recipe.title}</span>
//    </h1>
//  </figure>

//  <div class="recipe__details">
//    <div class="recipe__info">
//      <svg class="recipe__info-icon">
//        <use href="${icons}#icon-clock"></use>
//      </svg>
//      <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
//      <span class="recipe__info-text">minutes</span>
//    </div>
//    <div class="recipe__info">
//      <svg class="recipe__info-icon">
//        <use href="${icons}#icon-users"></use>
//      </svg>
//      <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
//      <span class="recipe__info-text">servings</span>

//      <div class="recipe__info-buttons">
//        <button class="btn--tiny btn--increase-servings">
//          <svg>
//            <use href="${icons}#icon-minus-circle"></use>
//          </svg>
//        </button>
//        <button class="btn--tiny btn--increase-servings">
//          <svg>
//            <use href="${icons}#icon-plus-circle"></use>
//          </svg>
//        </button>
//      </div>
//    </div>

//    <div class="recipe__user-generated">
//      <svg>
//        <use href="${icons}#icon-user"></use>
//      </svg>
//    </div>
//    <button class="btn--round">
//      <svg class="">
//        <use href="${icons}#icon-bookmark-fill"></use>
//      </svg>
//    </button>
//  </div>

//  <div class="recipe__ingredients">
//    <h2 class="heading--2">Recipe ingredients</h2>
//    <ul class="recipe__ingredient-list">
  

//    ${
//     recipe.ingredients.map(ing => {
//       return `
//       <li class="recipe__ingredient">
//       <svg class="recipe__icon">
//         <use href="${icons}#icon-check"></use>
//       </svg>
//       <div class="recipe__quantity">${ing.quantity}</div>
//       <div class="recipe__description">
//         <span class="recipe__unit">${ing.unit}</span>
//         ${ing.description}
//       </div>
//     </li>
//       `
//     }).join('')
//    }

     
//  </div>

//  <div class="recipe__directions">
//    <h2 class="heading--2">How to cook it</h2>
//    <p class="recipe__directions-text">
//      This recipe was carefully designed and tested by
//      <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
//      directions at their website.
//    </p>
//    <a
//      class="btn--small recipe__btn"
//      href="${recipe.sourceUrl}"
//      target="_blank"
//    >
//      <span>Directions</span>
//      <svg class="search__icon">
//        <use href="${icons}#icon-arrow-right"></use>
//      </svg>
//    </a>
//  </div>
// `;
// recipeContainer.innerHTML = '';
// recipeContainer.insertAdjacentHTML('afterbegin', markup)

//   } catch (error) {
//    alert(error);
//   }  
// };

// showRecipe();


// console.log('test');