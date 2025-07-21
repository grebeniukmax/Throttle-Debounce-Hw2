const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');


_
function onInputChange (func, delay) {
const inputValue = sliderInput.value;
console.log(inputValue);
sliderImage.style.width = inputValue + '%';
    };

sliderInput.addEventListener("input", _.debounce(onInputChange,30))

const box = document.querySelector('#box');

document.addEventListener('mousemove',_.throattle(onmousemove, 100));

function onmousemove(event) {
  console.log(event.clientX);
  box.style.left = event.pageX + 'px';
  box.style.top = event.pageY + 'px';
}





