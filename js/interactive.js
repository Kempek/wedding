document.addEventListener('DOMContentLoaded', function () {
	console.log('Скрипт загружен')

	const submitBtn = document.getElementById('submit-btn')
	const formContainer = document.getElementById('form-container')
	const thankYouMessage = document.getElementById('thank-you-message')

	if (!submitBtn || !formContainer || !thankYouMessage) {
		console.error('Один из элементов не найден!')
		return
	}

	submitBtn.addEventListener('click', function (e) {
		console.log('Кнопка нажата')
		e.preventDefault()

		formContainer.style.opacity = '0'
		formContainer.style.transition = 'opacity 0.5s ease'

		setTimeout(() => {
			formContainer.style.display = 'none'
			thankYouMessage.style.display = 'block'

			setTimeout(() => {
				thankYouMessage.style.opacity = '1'
			}, 10)

			thankYouMessage.scrollIntoView({ behavior: 'smooth' })
		}, 500)
	})
})
document.addEventListener('DOMContentLoaded', function () {
	const music = document.getElementById('bg-music')
	const toggleBtn = document.getElementById('music-toggle')

	if (music && toggleBtn) {
		const icons = toggleBtn.querySelectorAll('.music-icon')
		let isAudioReady = false
		music.volume = 0.3
		const updateButton = () => {
			const isPlaying = !music.paused
			icons[0].classList.toggle('active', !isPlaying)
			icons[1].classList.toggle('active', isPlaying)
		}
		toggleBtn.addEventListener('click', async () => {
			try {
				if (music.paused) {
					if (!isAudioReady) {
						await music.play().then(() => {
							music.pause()
							isAudioReady = true
						})
					}
					await music.play()
				} else {
					music.pause()
				}
				updateButton()
			} catch (error) {
				console.error('Ошибка:', error)
				icons[0].classList.add('active')
				icons[1].classList.remove('active')
			}
		})
		const handleFirstInteraction = () => {
			document.removeEventListener('click', handleFirstInteraction)
			isAudioReady = true
		}
		document.addEventListener('click', handleFirstInteraction, { once: true })
		updateButton()
	}
})
// Устанавливаем первую опцию активной по умолчанию
document.addEventListener('DOMContentLoaded', function () {
	const firstOption = document.querySelector('.options li')
	document.querySelector('.selected-text').textContent = firstOption.textContent
})

// Обработчик клика на выбранную опцию (открытие/закрытие списка)
document
	.querySelector('.selected-option')
	.addEventListener('click', function (e) {
		e.stopPropagation()
		document.querySelector('.custom-select').classList.toggle('active')
	})

// Обработчик выбора опции
document.querySelectorAll('.options li').forEach(option => {
	option.addEventListener('click', function () {
		document.querySelector('.selected-text').textContent = this.textContent
		document.querySelector('.custom-select').classList.remove('active')
	})
})

// Закрытие при клике вне селекта
document.addEventListener('click', function () {
	document.querySelector('.custom-select').classList.remove('active')
})
