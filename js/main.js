function toggleMobileMenu() {
  var nav = document.getElementById('nav-mobile');
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
}

function navigateTo(url) {
  if (url) {
    window.location.href = url;
  }
}
