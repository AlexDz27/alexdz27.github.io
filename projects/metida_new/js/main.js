// LINKS
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({behavior: 'smooth'})
  }

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({behavior: 'smooth'})
      history.replaceState(null, null, '#' + targetId);
    })
  })
})

// SLIDER
const sliderTrack = document.querySelector('#sliderTrack')
const buttonsContainer = document.querySelector('#buttonsContainer')
let prevIndex = 0 // this probably does nothing
let index = 0

let t = setInterval(() => {
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
  sliderTrack.style.transform = `translateX(-${315 * index}px)`

  setTimeout(() => {
    for (const b of buttonsContainer.children) {
      b.disabled = false
    }
  }, 600)
}