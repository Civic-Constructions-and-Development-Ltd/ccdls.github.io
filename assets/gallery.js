const track = document.querySelector('.gallery-track');
const controls = document.querySelector('.gallery-controls');
const [previous, next] = controls.querySelectorAll('button');
const counter = controls.querySelector('span');
const slides = Array.from(track.children);

function currentSlide() {
  const left = track.getBoundingClientRect().left;
  return slides.reduce((nearest, slide, index) => {
    const distance = Math.abs(slide.getBoundingClientRect().left - left);
    return distance < Math.abs(slides[nearest].getBoundingClientRect().left - left) ? index : nearest;
  }, 0);
}

function updateControls() {
  const index = currentSlide();
  const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
  previous.disabled = track.scrollLeft <= 2;
  next.disabled = atEnd;
  const visible = Math.max(1, Math.round(track.clientWidth / slides[0].getBoundingClientRect().width));
  controls.hidden = track.scrollWidth <= track.clientWidth + 2;
  const first = atEnd ? slides.length - visible + 1 : index + 1;
  const last = Math.min(first + visible - 1, slides.length);
  const position = (first === last ? first : first + '–' + last) + ' of ' + slides.length;
  if (counter.textContent !== position) counter.textContent = position;
}

function step(direction) {
  const index = Math.min(slides.length - 1, Math.max(0, currentSlide() + direction));
  track.scrollBy({left: slides[index].getBoundingClientRect().left - track.getBoundingClientRect().left, behavior: 'instant'});
  updateControls();
}

previous.addEventListener('click', () => step(-1));
next.addEventListener('click', () => step(1));
track.addEventListener('scroll', updateControls, {passive:true});
window.addEventListener('resize', updateControls);
track.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    step(event.key === 'ArrowLeft' ? -1 : 1);
  }
});
updateControls();
