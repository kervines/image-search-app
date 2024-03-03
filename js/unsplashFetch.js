import {
  createCardImage,
  createImage,
  createButton,
  containerImages,
  containerButton,
  container,
} from './createElements.js';

export default function initFetch() {
  const body = document.querySelector('body');
  const form = document.querySelector('form');
  const inputSearch = document.querySelector('#search');
  const suggestionEl = document.querySelectorAll('.suggestion button');

  let countPage = 1;

  const unsplashAPI = async (searchAPI) => {
    const keyAPI = 'ymrauY3eOE-V9IZZe235vwZsOvlmsKSKnDBu8N9JqTs';
    const fetchApi = await fetch(
      `https://api.unsplash.com/search/photos?page=${countPage}&per_page=9&query=${searchAPI}&lang=pt&client_id=${keyAPI}`
    );
    const data = await fetchApi.json();
    return data;
  };

  const renderImage = (search) => {
    container.style.height = 'auto';
    body.style.justifyContent = 'flex-start';
    unsplashAPI(search).then((datas) => {
      datas.results.forEach((data) => {
        const img = createImage(data.urls.regular, data.alt_description);
        createCardImage(img);
      });
    });
  };

  suggestionEl.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.type === 'click') {
        containerImages.innerHTML = '';
        containerButton.innerHTML = '';
        countPage = 1;
      }
      renderImage(btn.textContent);
      if (countPage === 1) {
        createButton('submit', () => {
          renderImage(btn.textContent);
          countPage++;
        });
      }
      countPage++;
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.type === 'submit') {
      containerImages.innerHTML = '';
      containerButton.innerHTML = '';
      countPage = 1;
    }
    renderImage(inputSearch.value);

    if (countPage === 1) {
      createButton('click', handleSubmit);
    }
    countPage++;
  };

  form.addEventListener('submit', handleSubmit);
}
