//Все слайдеры
window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper

    breakpoint = window.matchMedia(breakpoint)

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }

    breakpoint.addEventListener('resize', checker)
    checker()
  }

  resizableSwiper('(max-width: 767px)', '.wrapper-1', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dinamicBullets: true
    }
  })

  resizableSwiper('(max-width: 767px)', '.wrapper-2', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dinamicBullets: true
    }
  })

  resizableSwiper('(max-width: 767px)', '.wrapper-3', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dinamicBullets: true
    }
  })
})
