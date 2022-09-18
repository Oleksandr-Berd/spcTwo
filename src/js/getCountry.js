const BASE_URL = `https://restcountries.com/v2`;

function getCountry(countryName) {
  return fetch(`${BASE_URL}/name/${countryName}`).then(response => {
    if (!response.ok) {
      refs.countryInfo.innerHTML = '';
      Notiflix.Notify.failure('Oops, there is no country with that name');
    }
    return response.json().catch(onCountryError);
  });
}

function onCountryError(error) {
  refs.countryInfo.innerHTML = '';
  Notiflix.Notify.failure('Oops, there is no country with that name');
}

export default { getCountry, onCountryError };
