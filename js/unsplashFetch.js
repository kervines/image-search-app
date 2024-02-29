import {
  createCardImage,
  createImage,
  createButton,
} from './createElements.js';

export default function initFetch() {
  const body = document.querySelector('body');
  const form = document.querySelector('form');
  const inputSearch = document.querySelector('#search');
  let countPage = 1;

  const unsplashAPI = async () => {
    const keyAPI = 'ymrauY3eOE-V9IZZe235vwZsOvlmsKSKnDBu8N9JqTs';
    const fetchApi = await fetch(
      `https://api.unsplash.com/search/photos?page=${countPage}&per_page=9&query=${inputSearch.value}&lang=pt&client_id=${keyAPI}`
    );
    const data = await fetchApi.json();
    return data;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    body.style.justifyContent = 'flex-start';
    unsplashAPI().then((datas) => {
      datas.results.forEach((data) => {
        console.log(data);
        const img = createImage(data.urls.regular, data.alt_description);
        createCardImage(img);
      });
    });

    if (countPage === 1) {
      createButton(handleSubmit);
    }
    countPage++;
  };

  form.addEventListener('submit', handleSubmit);
}
