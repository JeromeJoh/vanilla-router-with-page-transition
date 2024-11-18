document.addEventListener('DOMContentLoaded', () => {
  const ease = 'power4.inOut'

  document.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const href = link.getAttribute('href')

      if (href && !href.startsWith('#') && href !== window.location.pathname) {
        animationTrasition().then(() => {
          window.location.href = href
        })
      }

    })
  })


  revealTransition().then(() => {
    gsap.set('.loader', { visibility: 'hidden' })
  })


  function revealTransition() {
    return new Promise((resolve) => {

    })
  }


  function animationTrasition() {
    return new Promise((resolve) => {
      gsap.to('.loader', { visibility: 'visible' })
    })
  }
})