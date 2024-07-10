// LINKS TODO

// SLIDER
const sliderTrack = document.querySelector('#sliderTrack')
const arrowPrev = document.querySelector('#arrowPrev')
const arrowNext = document.querySelector('#arrowNext')
const counter = document.querySelector('#counter')
let counterVal = 0

let t = setInterval(() => {
  arrowNext.click()
}, 3000)
console.log(t)
arrowNext.addEventListener('click', (e) => {
  if (e.isTrusted) {
    clearInterval(t)
    t = setInterval(() => {
      arrowNext.click()
    }, 3000)
  }

  if (counterVal === 8) counterVal = -1

  counterVal++
  sliderTrack.children[counterVal].scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'})
  counter.innerText = counterVal + 1
})
arrowPrev.addEventListener('click', (e) => {
  if (e.isTrusted) {
    clearInterval(t)
    t = setInterval(() => {
      arrowNext.click()
    }, 3000)
  }

  if (counterVal === 0) counterVal = 9

  counterVal--
  sliderTrack.children[counterVal].scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'})
  counter.innerText = counterVal + 1
})
window.addEventListener('load', () => {
  if (!isFullyInViewport(sliderTrack)) {
    clearInterval(t)
  }
});
window.addEventListener('scroll', () => {
  if (!isFullyInViewport(sliderTrack)) {
    clearInterval(t)
    console.log(t)
  } else {
    // TODO:
  }
});


// function isInViewport(elem) {
//   const bounding = elem.getBoundingClientRect()
//   console.log(bounding)

//   return bounding.bottom >= 0 && bounding.top <= window.innerHeight
// }
function isFullyInViewport(elem) {
  const bounding = elem.getBoundingClientRect()

  return bounding.top >= 0
}