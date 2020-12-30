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

  const detailTitle = document.querySelector('.js-detail-title')

  const tooltip = document.querySelector('.js-tooltip')
  
  const detailsPane = new CupertinoPane('#details', { 
      parentElement: 'main',
      initialBreak: 'top',
      breaks: { 
        top: { enabled: true, height: window.innerHeight-45},
        middle: { enabled: false },
        bottom: { enabled: true, height: 0 }
      },
      pushElement: '.intro__card',
      pushYOffset: 50,
      backdrop: true,
      buttonClose: false,
      bottomClose: true,
      onWillDismiss: () => {
        detailTitle.classList.remove('active')
        backBtn.classList.remove('active')
      },
      onDrag: () => {
        if(tooltip.classList.contains('active')) {
          tooltip.classList.remove('active')
        }
      }
    }
  )

  moreDetailsBtn.addEventListener('click', () => {
    detailsPane.screen_height = window.innerHeight
    detailsPane.present({animate: true})
    detailTitle.classList.add('active')
    backBtn.classList.add('active')
  })

  backBtn.addEventListener('click', () => {
    detailsPane.hide()
    detailTitle.classList.remove('active')
    backBtn.classList.remove('active')
  })

  window.addEventListener('resize', () => {
    const pane = document.querySelector('.pane')
    const details = document.querySelector('#details')
    if(pane) {
      pane.style.height = `${window.innerHeight-45}px`
      details.style.height = `${window.innerHeight-45}px`
    }
  });  
}

{
  const details = document.querySelector('#details') 
  const availabilityBar = document.querySelector('.js-availability-bar')

  details.addEventListener('scroll', () => {
    if(((details.scrollHeight - window.innerHeight + 45) - details.scrollTop) < 200) {
      if(!availabilityBar.classList.contains('hidden')) {
        availabilityBar.classList.add('hidden')
      }
    } else if(availabilityBar.classList.contains('hidden')) {
      availabilityBar.classList.remove('hidden')
    }
  })
}

{
  const tooltip = document.querySelector('.js-tooltip')

  window.addEventListener('click', (e) => {
    if(e.path.includes(tooltip) && !tooltip.classList.contains('active')) {
      tooltip.classList.add('active')
    } else if(tooltip.classList.contains('active')) {
      tooltip.classList.remove('active')
    }
  })
}

{
  const intro = document.querySelector('.js-intro')
  
  window.addEventListener('load', () => {
    const vh = window.innerHeight * 0.01
    intro.style.height = `${vh * 100}px`;
  });

  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01
    intro.style.height = `${vh * 100}px`;
  });
}