const imgEl = document.querySelector('img');
let m = 0;

const moveRight = (event) => {
  if (event.code === 'ArrowRight') {
    m += 10;
    imgEl.style.marginLeft = m + 'px';
  }
}

const moveLeft = (event) => {
  if (event.code === 'ArrowLeft') {
    m -= 10;
    imgEl.style.marginLeft = m + 'px';
  }
}

document.addEventListener('keydown', moveRight);
document.addEventListener('keydown', moveLeft);
