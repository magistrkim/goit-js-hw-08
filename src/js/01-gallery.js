// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line
const galleryListEl = document.querySelector('.gallery');

const makeGalleryItemCard = ({ preview, original, description }) =>
  `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;

const markup = galleryItems
  .map(element => makeGalleryItemCard(element))
  .join('');
galleryListEl.innerHTML = markup;

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });