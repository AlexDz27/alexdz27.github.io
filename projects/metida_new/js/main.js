// LINKS TODO

// SLIDER
const sliderTrack = document.querySelector('#sliderTrack')
const buttonsContainer = document.querySelector('#buttonsContainer')
let prevIndex = 0
let index = 0

let t = setInterval(() => {
  if (document.visibilityState === 'hidden') return
  prevIndex = index
  index++
  if (index === sliderTrack.childElementCount) index = 0
  slide()
}, 3000)
for (const button of buttonsContainer.children) {
  button.addEventListener('click', (e) => {
    if (e.isTrusted) {
      clearInterval(t)
      t = setInterval(() => {
        if (document.visibilityState === 'hidden') return
        prevIndex = index
        index++
        if (index === sliderTrack.childElementCount) index = 0
        slide()
      }, 3000)
    }

    prevIndex = index
    index = Number(button.dataset.index)
    slide()
  })
}

function slide() {
  if (index === prevIndex) return
  for (const b of buttonsContainer.children) {
    b.disabled = true
  }

  document.querySelector('.button--active').classList.remove('button--active')
  buttonsContainer.children[index].classList.add('button--active')
  sliderTrack.scrollLeft += 315 * (index - prevIndex)

  setTimeout(() => {
    for (const b of buttonsContainer.children) {
      b.disabled = false
    }
  }, 600)
}