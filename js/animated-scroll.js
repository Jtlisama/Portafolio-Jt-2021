"use strict";

var getInitialScroll = function getInitialScroll() {
  return document.body.scrollTop;
};

var getfinalScroll = function getfinalScroll(element) {
  return Math.floor(element.getBoundingClientRect().top + getInitialScroll());
}; // console.log(getfinalScroll(document.getElementById('cap2')));


var animatedScrollTo = function animatedScrollTo(element, time) {
  // console.log(time)
  // console.log(element)
  var initialPosition = getInitialScroll(),
      finalPosition = getfinalScroll(element),
      distanceToScroll = finalPosition - initialPosition,
      scrollFragment = distanceToScroll / time; // console.log(initialPosition)
  // console.log(finalPosition)
  // console.log('el final')
  // console.log(distanceToScroll)
  // console.log(scrollFragment)

  animateScroll(scrollFragment, finalPosition, initialPosition);
};

var animateScroll = function animateScroll(scrollFragment, finalPosition) {
  var animatedScroll = setInterval(function () {
    // document.body.scrollTop += scrollFragment;
    // window.scrollBy(0,scrollFragment)
    console.log('Primer ');
    console.log(scrollY);
    scrollY += scrollFragment;
    scrollBy(0, scrollFragment);
    console.log(finalPosition);
    console.log('Arriba finalll');
    console.log(scrollBy);
    if (scrollY > finalPosition) clearInterval(animatedScroll);
  }, 1);
};

animatedScrollTo(document.getElementById('cap2'), 500);