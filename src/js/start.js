import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import API__country from './getCountry';

const DEBOUNCE_DELAY = 300;

const refs = {
  btnStart: document.querySelector('.btn-start'),
  contStart: document.querySelector('.cont-start'),
  btnSocNet: document.querySelector('.btn__socNet'),
  startList: document.querySelector('.start__list'),
  btnLevelFirstPicture: '',
  btnMovieFirst: '',
  conSocNet: '',
  btnSocNetBack: '',
  btnCountry: '',
  lvlFirstGalley: '',
  btnCountryBack: '',
  galleryCountry: '',
  countryInfo: '',
  searchForm__country: '',
};

refs.btnStart.textContent = 'Let`s go Guys!';

refs.btnSocNet.textContent = 'Wanna discover my Soc Net?';

refs.btnStart.addEventListener('click', renderSearchFormLevelFirst);

refs.btnSocNet.addEventListener('click', discloseSocNet);

//.........first gallery

function renderSearchFormLevelFirst() {
  const markUpSearchForm = `<div class="level-first">
  <button id="btnLvlFirstPct" class="btn__first" type='submit'>What picture are you looking for?</button>
         <button class="btn-movie__first" type='submit'>Let's watch some movie!</button>
         <button class="btn-country" type='submit'>Maybe check some countries?</button>
         </div>`;

  refs.contStart.insertAdjacentHTML('beforeend', markUpSearchForm);

  refs.startList.classList.replace('start__list', 'btn-hidden');

  refs.btnLevelFirstPicture = document.querySelector('#btnLvlFirstPct');
  refs.btnMovieFirst = document.querySelector('.btn-movie__first');
  refs.btnCountry = document.querySelector('.btn-country');

  refs.btnLevelFirstPicture.addEventListener(
    'click',
    renderSearchFormLevelSecond
  );
  refs.btnCountry.addEventListener('click', disclosureCounries);
}

function renderSearchFormLevelSecond(evt) {
  const markUpSearchFormFirst = `<form class='search-form'id='search-form'>
        <input class='form__input' type='query' autocomplete='off' placeholder='What do you want...?'/>
        <button type='submit'>Let's find out</button>
        </form>`;

  refs.contStart.insertAdjacentHTML('beforeend', markUpSearchFormFirst);
  refs.btnLevelFirstPicture.classList.replace('btn__first', 'btn-hidden');
  refs.btnMovieFirst.classList.replace('btn-movie__first', 'btn-hidden');
}

//..................disclosure

function discloseSocNet(evt) {
  refs.conSocNet = document.querySelector('.soc-network__hidden');
  refs.btnSocNetBack = document.querySelector('.btn-SocNet__backHidden');

  refs.conSocNet.classList.replace('soc-network__hidden', 'soc-network');
  refs.startList.classList.replace('start__list', 'btn-hidden');
  refs.btnSocNetBack.classList.replace(
    'btn-SocNet__backHidden',
    'btn-SocNet__back'
  );
  refs.btnSocNetBack.addEventListener('click', backFromSocNet);
}

function disclosureCounries(evt) {
  const markUpCountryGallery = `<div class="galleryCountry">
    <input type="text" class="searchForm__country" id="search-box" placeholder='What are you searching for?'/>
    <ul class="country-list"></ul>
    <div class="country-info"></div>
    <button class="btn-country__back" type="button">And again return to te beginning!</button>
    </div>`;

  refs.lvlFirstGalley = document.querySelector('.level-first');

  refs.lvlFirstGalley.classList.replace('level-first', 'btn-hidden');

  refs.contStart.insertAdjacentHTML('beforeend', markUpCountryGallery);

  refs.btnCountryBack = document.querySelector('.btn-country__back');
  refs.galleryCountry = document.querySelector('.galleryCountry');

  refs.countryInfo = document.querySelector('.country-info');
  refs.searchForm__country = document.querySelector('.searchForm__country');
  refs.searchForm__country.addEventListener(
    'input',
    debounce(onSearchCountry, DEBOUNCE_DELAY)
  );

  refs.btnCountryBack.addEventListener('click', backFromCountries);
}

//..........................back

function backFromSocNet(evt) {
  refs.conSocNet.classList.replace('soc-network', 'soc-network__hidden');
  refs.btnSocNetBack.classList.replace(
    'btn-SocNet__back',
    'btn-SocNet__backHidden'
  );
  refs.startList.classList.replace('btn-hidden', 'start__list');
}

function backFromCountries(evt) {
  refs.lvlFirstGalley.classList.replace('btn-hidden', 'level-first');
  refs.galleryCountry.classList.replace('galleryCountry', 'btn-hidden');
}

//....................render

function renderCountryCard(country) {
  if (country.length > 1 && country.length < 10) {
    const markUpCountry = country
      .map(el => {
        return `<div class="country_card">
        <img class="flag" src="${el.flags.svg}" alt ="${el.name}" width = "100" height = "80"></>
        <h2 class = "name">Name: ${el.name}</h2>
        </div>`;
      })
      .join('');
    refs.countryInfo.insertAdjacentHTML('afterbegin', markUpCountry);
  }
  if (country.length === 1) {
    const markUpCountryCard = country
      .map(el => {
        return `<div class="country_card">
        <img class="flag" src="${el.flags.svg}" alt ="${
          el.name
        }" width = "420" height = "250"></>
        <h2 class = "country-name">Name: ${el.name};<br>Native name: ${
          el.nativeName
        },</h2>
        <p class= "population country-card__item">Population: ${
          el.population
        }</p>
        <p class= "area country-card__item">Region: ${el.subregion}</p>
        <p class= "area country-card__item">Area: ${el.area} km²</p>
        <p class = "capital country-card__item">Capital: ${el.capital}</p>
        <p class = "language country-card__item">Language: ${Object.values(
          el.languages[0]
        ).join(', ')}</p>
        <p class = "currencies country-card__item">Currencies: ${Object.values(
          el.currencies[0]
        ).join(', ')}</p>
        </div>`;
      })
      .join('');

    refs.countryInfo.insertAdjacentHTML('afterbegin', markUpCountryCard);
  }
  if (country.length >= 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
}

function onSearchCountry(evt) {
  refs.countryInfo.innerHTML = '';
  const countryDraft = evt.target.value;
  const countryName = countryDraft.trim();

  if (countryName.length === 0) {
    refs.countryInfo.innerHTML = '';
    return;
  }
  API__country.getCountry(countryName)
    .then(renderCountryCard)
    .catch(onFetchError);
}

function onFetchError(error) {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
