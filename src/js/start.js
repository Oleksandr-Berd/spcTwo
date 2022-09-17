const refs = {
  btnStart: document.querySelector('.btn-start'),
  contStart: document.querySelector('.cont-start'),
};

refs.btnStart.textContent = 'Let`s go Guys!';

refs.btnStart.addEventListener('click', renderSearchForm);

function renderSearchForm() {
  const markUpSearchForm = `<form class='search-form'id='search-form'>
        <input type='query' autocomplete='off' placeholder='What do you want...?'/>
        <button type='submit'>What picture are you looking for?</button>
         <button type='submit'>Let's watch some movie!</button>
        </form>`;

  refs.contStart.insertAdjacentHTML('beforeend', markUpSearchForm);

  refs.btnStart.classList.replace('btn-start', 'btn-hidden');
}
