const button = document.querySelector('.openWind');
let overlay = document.getElementById('zatemnenie');
button.addEventListener('click', function () {
  console.log('click');
  overlay.style.display = '';
});
