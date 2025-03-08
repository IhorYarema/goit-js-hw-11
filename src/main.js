import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  showLoader,
  hideLoader,
  showErrorMessage,
} from './js/render-functions.js';

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) {
    showErrorMessage('Please enter a search term!');
    return;
  }

  showLoader();
  const images = await fetchImages(query);
  hideLoader();

  renderGallery(images);
});
