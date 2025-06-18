document.addEventListener('DOMContentLoaded', function () {
	// Инициализация GSAP и ScrollTrigger
	gsap.registerPlugin(ScrollTrigger)

	// Анимация появления заголовка
	gsap.from('.container__header h1', {
		duration: 1.5,
		y: -50,
		opacity: 0,
		ease: 'power3.out',
	})

	// Анимация даты свадьбы
	gsap.from('.container__header p', {
		duration: 1.5,
		y: 50,
		opacity: 0,
		delay: 0.5,
		ease: 'power3.out',
	})

	// Анимация фото молодоженов
	gsap.from('.header__images img', {
		duration: 1.5,
		scale: 0.8,
		opacity: 0,
		delay: 1,
		ease: 'back.out(1.7)',
	})

	// Анимация имен
	gsap.from('.container__header h2', {
		duration: 1.5,
		y: 50,
		opacity: 0,
		delay: 1.5,
		ease: 'power3.out',
	})

	// Анимация для секции приглашения
	gsap.from('.invite-message__block', {
		scrollTrigger: {
			trigger: '.invite-message__block',
			start: 'top 80%',
			toggleActions: 'play none none none',
		},
		duration: 1,
		y: 50,
		opacity: 0,
		ease: 'power3.out',
	})

	// Анимация таймера
	gsap.from('.timer-content', {
		scrollTrigger: {
			trigger: '.timer-content',
			start: 'top 80%',
			toggleActions: 'play none none none',
		},
		duration: 1,
		y: 50,
		opacity: 0,
		ease: 'power3.out',
	})

	// Анимация календаря
	gsap.from('.calendar', {
		scrollTrigger: {
			trigger: '.calendar',
			start: 'top 80%',
			toggleActions: 'play none none none',
		},
		duration: 1.5,
		scale: 0.9,
		opacity: 0,
		ease: 'back.out(1.7)',
	})

	// Анимация для плана мероприятий
	gsap.from('.event', {
		scrollTrigger: {
			trigger: '.plan',
			start: 'top 80%',
			toggleActions: 'play none none none',
		},
		duration: 1,
		y: 50,
		opacity: 0,
		stagger: 0.2,
		ease: 'power3.out',
	})

	// Анимация карты
	gsap.from('.map', {
		scrollTrigger: {
			trigger: '.map',
			start: 'top 80%',
			toggleActions: 'play none none none',
		},
		duration: 1,
		x: -50,
		opacity: 0,
		ease: 'power3.out',
	})

	gsap.from('.description', {
		scrollTrigger: {
			trigger: '.description',
			start: 'top 80%',
			toggleActions: 'play none none none',
		},
		duration: 1,
		x: 50,
		opacity: 0,
		ease: 'power3.out',
	})

	// Анимация дресс-кода
	gsap.from('.dress-code-header', {
		scrollTrigger: {
			trigger: '.dress-code-header',
			start: 'top 80%',
			toggleActions: 'play none none none',
		},
		duration: 1,
		y: 50,
		opacity: 0,
		ease: 'power3.out',
	})

	gsap.from('.dress-code-description', {
		scrollTrigger: {
			trigger: '.dress-code-description',
			start: 'top 80%',
			toggleActions: 'play none none none',
		},
		duration: 1,
		y: 50,
		opacity: 0,
		stagger: 0.3,
		ease: 'power3.out',
	})

	// Анимация формы
	gsap.from('.rsvp-form', {
		scrollTrigger: {
			trigger: '.rsvp-form',
			start: 'top 80%',
			toggleActions: 'play none none none',
		},
		duration: 1,
		y: 50,
		opacity: 0,
		ease: 'power3.out',
	})

	// Анимация футера
	gsap.from('footer', {
		scrollTrigger: {
			trigger: 'footer',
			start: 'top 80%',
			toggleActions: 'play none none none',
		},
		duration: 1,
		y: 50,
		opacity: 0,
		ease: 'power3.out',
	})

	// Анимация при отправке формы
	document.querySelector('.rsvp-form').addEventListener('submit', function (e) {
		e.preventDefault()

		gsap.to('#form-container', {
			duration: 0.5,
			opacity: 0,
			y: -20,
			onComplete: function () {
				document.getElementById('form-container').style.display = 'none'
				document.getElementById('thank-you-message').style.display = 'block'

				gsap.from('#thank-you-message', {
					duration: 1,
					y: 50,
					opacity: 0,
					ease: 'power3.out',
				})
			},
		})
	})

	// Анимация для кастомного select
	const customSelect = document.querySelector('.custom-select')
	const optionsList = document.querySelector('.options')

	gsap.set(optionsList, { y: -10, opacity: 0, display: 'none' })

	document
		.querySelector('.selected-option')
		.addEventListener('click', function () {
			if (customSelect.classList.contains('active')) {
				gsap.to(optionsList, {
					duration: 0.3,
					y: 0,
					opacity: 1,
					display: 'block',
				})
			} else {
				gsap.to(optionsList, {
					duration: 0.3,
					y: -10,
					opacity: 0,
					onComplete: function () {
						optionsList.style.display = 'none'
					},
				})
			}
		})

	// Анимация при выборе опции
	document.querySelectorAll('.options li').forEach(option => {
		option.addEventListener('click', function () {
			gsap.to(optionsList, {
				duration: 0.3,
				y: -10,
				opacity: 0,
				onComplete: function () {
					optionsList.style.display = 'none'
					customSelect.classList.remove('active')
				},
			})

			gsap.fromTo(
				'.selected-option',
				{ scale: 0.95 },
				{ scale: 1, duration: 0.3, ease: 'back.out(1.7)' }
			)
		})
	})
})
