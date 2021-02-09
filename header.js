

// Header search

let SEARCH = document.getElementById('header_search');
let BACK_SEARCH =  document.getElementById('back');
let OVERLAY = document.getElementById('overlay_search');

SEARCH.addEventListener('focus', () => {
  document.getElementById('header').classList.add('show');
  OVERLAY.classList.add('show');
});

BACK_SEARCH.addEventListener('click', () => {
  document.getElementById('header').classList.remove('show');
  OVERLAY.classList.remove('show');
});
