const refs = {
  btnStart: document.querySelector('.btn-start'),
  contStart: document.querySelector('.cont-start'),
  btnSocNet: document.querySelector('.btn__socNet'),
  startList: document.querySelector('.start__list'),
  btnLevelFirstPicture: '',
  btnMovieFirst: '',
  conSocNet: '',
  btnSocNetBack: '',
};

refs.btnStart.textContent = 'Let`s go Guys!';

refs.btnSocNet.textContent = 'Wanna discover my Soc Net?';

refs.btnStart.addEventListener('click', renderSearchFormLevelFirst);

refs.btnSocNet.addEventListener('click', discloseSocNet);

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

  refs.btnLevelFirstPicture.addEventListener(
    'click',
    renderSearchFormLevelSecond
  );
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
