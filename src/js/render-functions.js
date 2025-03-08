import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a');

export function renderGallery(images) {
  gallery.innerHTML = '';

  if (images.length === 0) {
    showErrorMessage(
      'Sorry, there are no images matching your search query. Please try again!'
    );
    return;
  }

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
            <li>
                <a href="${largeImageURL}">
                    <img src="${webformatURL}" alt="${tags}" loading="lazy">
                </a>
                <div><p>Likes: <span>${likes}</span></p> <p> Views: <span>${views}</span></p> <p> Comments: <span>${comments}</span></p> <p> Downloads: <span>${downloads}</span></p></div>
            </li>
        `
    )
    .join('');

  gallery.innerHTML = markup;
  lightbox.refresh();
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showErrorMessage(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
  });
}
