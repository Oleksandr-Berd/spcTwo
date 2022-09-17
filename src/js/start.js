const refs = {
  btnStart: document.querySelector('.btn-start'),
  contStart: document.querySelector('.cont-start'),
  btnLevelFirstPicture: '',
  btnMovieFirst: '',
};

refs.btnStart.textContent = 'Let`s go Guys!';

refs.btnStart.addEventListener('click', renderSearchFormLevelFirst);

function renderSearchFormLevelFirst() {
  const markUpSearchForm = `<div class="level-first">
  <button id="btnLvlFirstPct" class="btn__first" type='submit'>What picture are you looking for?</button>
         <button class="btn-movie__first" type='submit'>Let's watch some movie!</button>
         </div>`;

  refs.contStart.insertAdjacentHTML('beforeend', markUpSearchForm);

  refs.btnStart.classList.replace('btn-start', 'btn-hidden');
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
