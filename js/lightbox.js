"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//Obtener las imagenes 
var getImages = function getImages(container) {
  return _toConsumableArray(container.querySelectorAll('img'));
}; //Obtener el nombre o las imagenes largas


var getLargeImages = function getLargeImages(gallery) {
  return gallery.map(function (el) {
    return el.src;
  }).map(function (el) {
    return el.replace('thumb', 'large');
  });
}; //Obtener la descripcion de las Imagenes


var getDescriptions = function getDescriptions(gallery) {
  return gallery.map(function (el) {
    return el.alt;
  });
}; // console.log(getLargeImages(getImages(document.querySelector('.gallery-container'))));


var openLightboxEvent = function openLightboxEvent(container, gallery, larges, descriptions) {
  container.addEventListener('click', function (e) {
    var el = e.target,
        i = gallery.indexOf(el);

    if (el.tagName === 'IMG') {
      openLightbox(gallery, i, larges, descriptions);
    }
  });
};

var openLightbox = function openLightbox(gallery, i, larges, descriptions) {
  var lightboxElement = document.createElement('div');
  lightboxElement.innerHTML = "\n        <div class=\"lightbox-overlay\">\n            <figure class=\"lightbox-container\">\n                <div class=\"close-modal\">\u2716</div>\n                <img src=\"".concat(larges[i], "\" class=\"lightbox-image\">\n                <figcaption>\n                    <p class=\"lightbox-description\">").concat(descriptions[i], "</p>\n                    <nav class=\"navigation\">\n                        <a href=\"#\" class=\"lightbox-navigation_button prev\">\u276E</a>\n                        <span class=\"lightbix-navigation_counter\"> Imagen ").concat(i + 1, " de ").concat(gallery.length, "</span>\n                        <a href=\"#\" class=\"lightbox-navigation_button next\">\u276F</a>\n                    </nav>\n                </figcaption>\n            </figure>\n        </div>\n      \n      ");
  lightboxElement.id = 'lightbox';
  document.body.appendChild(lightboxElement);
  closeModal(lightboxElement);
  navigateLightbox(lightboxElement, larges, descriptions, i);
};

var lightbox = function lightbox(container) {
  var images = getImages(container),
      larges = getLargeImages(images),
      descriptions = getDescriptions(images);
  openLightboxEvent(container, images, larges, descriptions);
};

lightbox(document.getElementById('gallery-container'));

var closeModal = function closeModal(modalElement) {
  var closeModal = modalElement.querySelector('.close-modal');
  closeModal.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.removeChild(modalElement);
  });
};

var navigateLightbox = function navigateLightbox(lightboxElement, larges, descriptions, i) {
  var prevButton = lightboxElement.querySelector('.prev');
  var nextButton = lightboxElement.querySelector('.next');
  var image = lightboxElement.querySelector('img');
  var description = lightboxElement.querySelector('p');
  var counter = lightboxElement.querySelector('span');
  window.addEventListener('keyup', function (e) {
    if (e.key === 'ArrowRight') {
      nextButton.click();
    }

    if (e.key === 'ArrowLeft') prevButton.click();

    if (e.key === 'Space') {
      console.log('holas');
    }
  });
  lightboxElement.addEventListener('click', function (e) {
    e.preventDefault();
    var target = e.target;

    if (target === prevButton) {
      if (i > 0) {
        image.src = larges[i - 1];
        i--;
      } else {
        image.src = larges[larges.length - 1];
        i = larges.length - 1;
      }
    } else if (target === nextButton) {
      if (i < larges.length - 1) {
        image.src = larges[i + 1];
        i++;
      } else {
        image.src = larges[0];
        i = 0;
      }
    }

    description.textContent = descriptions[i];
    counter.textContent = "Imagen ".concat(i + 1, " de ").concat(larges.length);
  });
};