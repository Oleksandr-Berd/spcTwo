const axios = require('axios').default;
const API_KEY__GALLERY = '29768584-66d59ea1e394ad82ebc4cd906';
const BASE_URL__GALLERY = `https://pixabay.com/api/?key=${API_KEY__GALLERY}`;

const options__gallery = {
  headers: {
    Authorization: API_KEY__GALLERY,
    mode: 'no-cors',
  },
};

let perPage = 40;

export default class ApiGallery {
  constructor() {
    this.searchQuery__gallery = '';
    this.page__gallery = 1;
  }

  fetchArticles() {
    const urlGallery = `${BASE_URL__GALLERY}&q=${this.searchQuery__gallery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${this.page__gallery}`;

    return fetch(urlGallery, options__gallery)
      .then(response => response.json())
      .then(({ images }) => {
        this.incrementPage();
        console.log(images);
        return images;
      });
  }

  incrementPage() {
    this.page__gallery += 1;
  }

  resetPage() {
    this.page__gallery = 1;
  }

  get query_gallery() {
    return this.searchQuery__gallery;
  }

  set query_gallery(newQueryGallery) {
    this.searchQuery__gallery = newQueryGallery;
  }
}
