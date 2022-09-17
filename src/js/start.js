const refs = {
  btnStart: document.querySelector('.btn-start'),
  contStart: document.querySelector('.cont-start'),
  btnLevelFirstPicture: '',
};

refs.btnStart.textContent = 'Let`s go Guys!';

refs.btnStart.addEventListener('click', renderSearchFormLevelFirst);

function renderSearchFormLevelFirst() {
  const markUpSearchForm = `<div class="level-first">
  <button id="btnLvlFirstPct" class="btn__first" type='submit'>What picture are you looking for?</button>
         <button type='submit'>Let's watch some movie!</button>
         </div>`;

  refs.contStart.insertAdjacentHTML('beforeend', markUpSearchForm);

  refs.btnStart.classList.replace('btn-start', 'btn-hidden');
  refs.btnLevelFirstPicture = document.querySelector('#btnLvlFirstPct');
  console.log(refs.btnLevelFirstPicture);
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
  console.log(evt);
}
