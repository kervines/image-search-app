import {
  createCardImage,
  createImage,
  createButton,
} from './createElements.js';

export default function initFetch() {
  const form = document.querySelector('form');
  const inputSearch = document.querySelector('#search');
  const button = document.querySelector('.btn');
  let countPage = 1;

  form.addEventListener('submit', handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    if (countPage === 1) {
      createButton(handleSubmit);
    }
    const unsplashAPI = fetch(
      `https://api.unsplash.com/search/photos?page=${countPage}&per_page=9&query=${inputSearch.value}&lang=pt&client_id=${keyAPI}`
    )
      .then((response) => response.json())
      .then((urls) => {
        urls.results.forEach((url) => {
          const img = createImage(url.urls.regular, url.alt_description);
          createCardImage(img);
        });
      });
    countPage++;
  }
}
