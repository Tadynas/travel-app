{
  const body = document.querySelector('body')
  const burgerBtn = document.querySelector('.js-burger-menu')
  const nav = document.querySelector('.js-nav')

  burgerBtn.addEventListener('click', () => {
    body.classList.toggle('disable')
    nav.classList.toggle('active')
    burgerBtn.classList.toggle('active')
  })
}

{
  const moreDetailsBtn = document.querySelector('.js-more-details')
  const backBtn = document.querySelector('.js-back')

  const detailsPane = new CupertinoPane('#details', { 
      parentElement: 'main',
      initialBreak: 'top',
      breaks: { 
        top: { enabled: true, height: window.innerHeight-45 },
        middle: { enabled: false },
        bottom: { enabled: true, height: 0 }
      },
      pushElement: '.intro__card',
      pushYOffset: 50,
      backdrop: true,
      buttonClose: false,
      bottomClose: true
    }
  )

  moreDetailsBtn.addEventListener('click', () => {
    detailsPane.present({animate: true})
  })

  backBtn.addEventListener('click', () => {
    detailsPane.hide()
  })
}

