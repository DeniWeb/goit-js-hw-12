import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import { imagesTemplate } from './js/render-functions';

const refs = {
  container: document.querySelector('.gallery'),
  form: document.querySelector('.form'),
  loader: document.querySelector('.loader'),
  btnLoadMore: document.querySelector('.js-btn-load'),
};

let currentPage = 1;
let currentQuery = '';
const perPage = 40;

refs.form.addEventListener('submit', async e => {
  e.preventDefault();

  currentQuery = e.target.elements.text.value.trim();
  if (!currentQuery) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  currentPage = 1;
  refs.container.innerHTML = '';
  refs.loader.classList.remove('hidden');
  refs.btnLoadMore.classList.add('hidden');

  try {
    const response = await fetchImages(currentQuery, currentPage);
    const images = response.hits || [];
    if (images.length > 0) {
      renderValue(images);
      refs.btnLoadMore.classList.remove('hidden');
    } else {
      iziToast.info({
        title: 'Info',
        message: 'Sorry, there are no images matching your search query.',
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later!',
      position: 'topRight',
    });
  } finally {
    refs.loader.classList.add('hidden');
    e.target.reset();
  }
});

refs.btnLoadMore.addEventListener('click', async () => {
  currentPage += 1;
  refs.loader.classList.remove('hidden');
  refs.btnLoadMore.classList.add('hidden');

  try {
    const response = await fetchImages(currentQuery, currentPage);
    const images = response.hits || [];
    if (images.length > 0) {
      renderValue(images);
      smoothScroll();
      refs.btnLoadMore.classList.remove('hidden');
    }

    const totalPages = Math.ceil(response.totalHits / perPage);
    if (currentPage >= totalPages || images.length === 0) {
      refs.btnLoadMore.classList.add('hidden');
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later!',
      position: 'topRight',
    });
  } finally {
    refs.loader.classList.add('hidden');
  }
});

function renderValue(items) {
  const markup = imagesTemplate(items);
  refs.container.insertAdjacentHTML('beforeend', markup);

  gallery.refresh();
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function smoothScroll() {
  const { height: cardHeight } =
    refs.container.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
