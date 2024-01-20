const form = document.querySelector('form');
const inputSearch = document.querySelector('#search');
const containerImages = document.querySelector('.container-images');

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  containerImages.innerHTML = '';

  const unsplashAPI = fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${inputSearch.value}&client_id=${keyAPI}`
  )
    .then((response) => response.json())
    .then((urls) => {
      urls.results.forEach((url) => {
        createImage(url.urls.regular, url.alt_description);
      });
    });
}

function createImage(url, alt) {
  const img = document.createElement('img');
  img.setAttribute('src', url);
  img.setAttribute('alt', alt);
  containerImages.appendChild(img);
}
