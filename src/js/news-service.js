export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    console.log('before', this);
    const options = {
      headers: {
        Authorization: `a1548da97fcf4563944e4aa8b61f5584`,
      },
    };
    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

    return fetch(url, options)
      .then(r => r.json())
      .then(data => {
        this.incrementPage();

        return data.articles;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
