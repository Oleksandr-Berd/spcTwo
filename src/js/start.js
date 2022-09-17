const refs = {
  btnStart: document.querySelector('.btn-start'),
  contStart: document.querySelector('.cont-start'),
};

refs.btnStart.textContent = 'Let`s go Guys!';

refs.btnStart.addEventListener('click', renderSearchFormLevelFirst);

refs.btnLevelFirstPicture.addEventListener(
  'click',
  renderSearchFormLevelSecond
);

function renderSearchFormLevelFirst() {
  const markUpSearchForm = `<div class="level-first">
  <button id="btnLvlFirstPct" class="btn__first" type='submit'>What picture are you looking for?</button>
         <button type='submit'>Let's watch some movie!</button>
         </div>`;

  refs.contStart.insertAdjacentHTML('beforeend', markUpSearchForm);
  const btnLevelFirstPicture = document.querySelector('#btnLvlFirstPct');

  console.log(btnLevelFirstPicture);

  refs.btnStart.classList.replace('btn-start', 'btn-hidden');
  return;
}

function renderSearchFormLevelSecond() {
  const markUpSearchForm = `<form class='search-form'id='search-form'>
        <input class='form__input' type='query' autocomplete='off' placeholder='What do you want...?'/>
        <button type='submit'>Let's find out</button>
        </form>`;

  refs.contStart.insertAdjacentHTML('beforeend', markUpSearchForm);

  refs.btnStart.classList.replace('btn-start', 'btn-hidden');
}
