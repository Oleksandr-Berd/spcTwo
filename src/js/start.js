import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
// import InfiniteScroll from 'infinite-scroll';
import SimpleLightbox from 'simplelightbox';
import API__country from './getCountry';
import NewsApiService from './news-service';
import articlesTpl from '../hbs/articles.hbs';
import ApiGallery from './get-gallery';
import imagesTpl from '../hbs/images.hbs';

const DEBOUNCE_DELAY = 300;

const newsApiService = new NewsApiService();
const apiGallery = new ApiGallery();

const refs = {
  btnImage: document.querySelector('.btn__article'),
  contStart: document.querySelector('.cont-start'),
  btnSocNet: document.querySelector('.btn__socNet'),
  startList: document.querySelector('.start__list'),
  btnClock: document.querySelector('.btn__clock'),
  btnLevelFirstPicture: '',
  btnGallery: document.querySelector('.btn__gallery'),
  conSocNet: '',
  btnSocNetBack: '',
  btnCountry: document.querySelector('.btn__country'),
  lvlFirstGalley: '',
  btnCountryBack: '',
  galleryCountry: '',
  countryInfo: '',
  searchForm__country: '',
  clock: '',
  btnClockBack: '',
  searchForm: '',
  submitImage: '',
  articlesContainer: '',
  sentinel: '',
  searchFormGallery: '',
  submitGallery: '',
  articlesContainerGallery: '',
  sentinelGallery: '',
};

refs.btnSocNet.textContent = 'Wanna discover my Soc Net?';
refs.btnClock.textContent = 'What time is it now?';
refs.btnImage.textContent = 'Do you wanna read smth?';
refs.btnCountry.textContent = 'Maybe check some countries?';
refs.btnGallery.textContent = 'Let`s create the gallery!';

refs.btnCountry.addEventListener('click', disclosureCounries);
refs.btnSocNet.addEventListener('click', discloseSocNet);
refs.btnClock.addEventListener('click', disclosureClock);
refs.btnImage.addEventListener('click', renderArticles);
refs.btnGallery.addEventListener('click', renderGallery);

//..................disclosure soc-net

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

function backFromSocNet(evt) {
  refs.conSocNet.classList.replace('soc-network', 'soc-network__hidden');
  refs.btnSocNetBack.classList.replace(
    'btn-SocNet__back',
    'btn-SocNet__backHidden'
  );
  refs.startList.classList.replace('btn-hidden', 'start__list');
}

//....................... dislosure countries

function disclosureCounries(evt) {
  const markUpCountryGallery = `<div class="galleryCountry">
    <input type="text" class="searchForm__country" id="search-box" placeholder='What are you searching for?'/>
    <ul class="country-list"></ul>
    <div class="country-info"></div>
    <button class="btn-country__back" type="button">And again return to te beginning!</button>
    </div>`;

  refs.contStart.insertAdjacentHTML('beforeend', markUpCountryGallery);

  refs.btnCountryBack = document.querySelector('.btn-country__back');
  refs.galleryCountry = document.querySelector('.galleryCountry');
  refs.countryInfo = document.querySelector('.country-info');
  refs.searchForm__country = document.querySelector('.searchForm__country');

  refs.startList.classList.replace('start__list', 'btn-hidden');

  refs.searchForm__country.addEventListener(
    'input',
    debounce(onSearchCountry, DEBOUNCE_DELAY)
  );
  refs.btnCountryBack.addEventListener('click', backFromCountries);
}

// ......................disclosure clock

function disclosureClock(evt) {
  const markUpCountryCLock = `<div class="clock-hidden">
    <div class="hand hour"></div>
    <div class="hand minute"></div>
    <div class="hand second"></div>
    <svg width="500" height="500" class="svg__clock">
        <text class='text__clock' x="345" y="100">1</text>
        <text class='text__clock' x="405" y="170">2</text>
        <text class='text__clock' x="435" y="270">3</text>
        <text class='text__clock' x="400" y="365">4</text>
        <text class='text__clock' x="340" y="440">5</text>
        <text class='text__clock' x="235" y="470">6</text>
        <text class='text__clock' x="140" y="445">7</text>
        <text class='text__clock' x="65" y="375">8</text>
        <text class='text__clock' x="35" y="270">9</text>
        <text class='text__clock' x="55" y="170">10</text>
        <text class='text__clock' x="135" y="95">11</text>
        <text class='text__clock' x="220" y="75">12</text>
    </svg>
</div>
<button class='clock-back' type="button">Time is priceless</button>`;

  refs.contStart.insertAdjacentHTML('beforeend', markUpCountryCLock);

  refs.clock = document.querySelector('.clock-hidden');
  refs.btnClockBack = document.querySelector('.clock-back');

  refs.startList.classList.replace('start__list', 'btn-hidden');
  refs.clock.classList.replace('clock-hidden', 'clock');

  let hourHand = document.querySelector('.hour');
  let minuteHand = document.querySelector('.minute');
  let secondHand = document.querySelector('.second');

  function rotateClock() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const secondsFraction = seconds / 60;
    const minutesFraction = (secondsFraction + minutes) / 60;
    const hoursFraction = (minutesFraction + hours) / 12;

    const secondsRotate = secondsFraction * 360;
    const minutesRotate = minutesFraction * 360;
    const hoursRotate = hoursFraction * 360;

    secondHand.style.transform = `rotate(${secondsRotate}deg)`;
    minuteHand.style.transform = `rotate(${minutesRotate}deg)`;
    hourHand.style.transform = `rotate(${hoursRotate}deg)`;
  }

  setInterval(rotateClock, 1000);

  refs.btnClockBack.addEventListener('click', backFromCLock);
}

// ...................disclosure articles

function renderArticles(evt) {
  const markUpSearchFormFirst = `<form class='search-form'id='search-form'>
        <input class='form__input' type='text' name='query' autocomplete='off' placeholder='What do you want...?'/>
        <button type='submit' class='btn-submit'>Choose your topic!</button>
        </form>
        <ul class='articles js-articles-container'></ul>
        <div class="sentinel"></div>`;

  refs.startList.classList.replace('start__list', 'btn-hidden');
  refs.contStart.insertAdjacentHTML('beforeend', markUpSearchFormFirst);

  refs.searchForm = document.querySelector('.search-form');
  refs.submitImage = document.querySelector('.btn-submit');
  refs.articlesContainer = document.querySelector('.js-articles-container');
  refs.sentinel = document.querySelector('.sentinel');

  refs.searchForm.addEventListener('submit', onsearchArticles);

  const onEntry = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        refs.articlesContainer.innerHTML = '';
        newsApiService.fetchArticles().then(appendArticlesMarkup);
      }
    });
  };
  const options = {
    rootMargin: '150px',
  };

  const observer = new IntersectionObserver(onEntry, options);

  observer.observe(refs.sentinel);
}

function onsearchArticles(e) {
  e.preventDefault();

  clearArticlesContainer();
  newsApiService.query = e.currentTarget.elements.query.value;

  if (newsApiService.query === '') {
    return Notiflix.Notify.warning('You have to ask something!');
  }
  newsApiService.resetPage();

  newsApiService.fetchArticles().then(appendArticlesMarkup);
  refs.submitImage.classList.replace('btn-submit', 'btn-hidden');
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}

//.........................gallery

function renderGallery(evt) {
  const markUpSearchFormGallery = `<form class='search-form__gallery'id='search-form__gallery'>
        <input class='form-gallery__input' type='text' name='query_gallery' autocomplete='off' placeholder='What are you looking for...?'/>
        <button type='submit' class='btn-submit__gallery'>Let's look on!</button>
        </form>
        <ul class='images js-images-container'></ul>
        <div class="sentinel__gallery"></div>`;

  refs.startList.classList.replace('start__list', 'btn-hidden');
  refs.contStart.insertAdjacentHTML('beforeend', markUpSearchFormGallery);

  refs.searchFormGallery = document.querySelector('.search-form__gallery');
  refs.submitGallery = document.querySelector('.btn-submit__gallery');
  refs.articlesContainerGallery = document.querySelector(
    '.js-images-container'
  );
  refs.sentinelGallery = document.querySelector('.sentinel__gallery');

  refs.searchFormGallery.addEventListener('submit', onsearchImages);

  const onEntryImages = images => {
    images.forEach(image => {
      if (image.isIntersecting) {
        refs.articlesContainerGallery.innerHTML = '';
        apiGallery.fetchArticles().then(appendGalleryMarkup);
      }
    });
  };
  const options = {
    rootMargin: '150px',
  };

  const observer__images = new IntersectionObserver(onEntryImages, options);

  observer__images.observe(refs.sentinelGallery);
}
function onsearchImages(e) {
  e.preventDefault();

  clearImagesContainer();
  apiGallery.query_gallery = e.currentTarget.elements.query_gallery.value;

  console.log(apiGallery.query_gallery);

  if (apiGallery.query_gallery === '') {
    return Notiflix.Notify.warning('You have to ask something!');
  }
  apiGallery.resetPage();

  apiGallery.fetchArticles().then(appendGalleryMarkup);
  refs.submitGallery.classList.replace('btn-submit__gallery', 'btn-hidden');
}

function appendGalleryMarkup(images) {
  refs.articlesContainerGallery.insertAdjacentHTML(
    'beforeend',
    imagesTpl(images)
  );
}

function clearImagesContainer() {
  refs.articlesContainerGallery.innerHTML = '';
}

//..........................back

function backFromCountries(evt) {
  refs.startList.classList.replace('btn-hidden', 'start__list');
  refs.galleryCountry.classList.replace('galleryCountry', 'btn-hidden');
}

function backFromCLock(evt) {
  refs.clock.classList.replace('clock', 'clock-hidden');
  refs.btnClockBack.classList.replace('clock-back', 'btn-hidden');
  refs.startList.classList.replace('btn-hidden', 'start__list');
}

//....................render country

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

    refs.countryInfo.innerHTML = '';
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
