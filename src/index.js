(function init() {
  const highBtn = document.querySelector('.high-btn');
  const lowBtn = document.querySelector('.low-btn');
  const lowImg = document.querySelector('.img-1');
  const h1 = document.querySelector('h1');
  const dash = document.querySelector('.dash');

  const width = window.innerWidth;

  if (width < 1024) {
  
    h1.textContent = h1.textContent.toUpperCase();
  }

  lowBtn.addEventListener('click', (e) => {
    lowImg.classList.add('img-2-active');
  });
  highBtn.addEventListener('click', (e) => {
    lowImg.classList.remove('img-2-active');
  });
})();
