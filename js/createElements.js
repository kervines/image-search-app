export const container = document.querySelector('.container');
export const containerButton = document.querySelector('.container-button');
export const containerImages = document.querySelector('.container-images');

export function createCardImage(imgElement) {
  const div = document.createElement('div');
  div.classList.add('card-image');
  div.appendChild(imgElement);
  containerImages.appendChild(div);
}

export function createImage(url, alt) {
  const img = document.createElement('img');
  img.setAttribute('src', url);
  img.setAttribute('alt', alt);
  return img;
}

export function createButton(event, callback) {
  const button = document.createElement('button');
  button.innerText = 'Show more';
  button.classList.add('btn');
  button.type = event;
  containerButton.appendChild(button);

  button.addEventListener('click', callback);
}
