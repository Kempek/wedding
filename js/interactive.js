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

		// Инициализация аудио (без автоматического load)
		music.volume = 0.3

		// Обновление кнопки
		const updateButton = () => {
			const isPlaying = !music.paused
			icons[0].classList.toggle('active', !isPlaying)
			icons[1].classList.toggle('active', isPlaying)
		}

		// Обработчик клика
		toggleBtn.addEventListener('click', async () => {
			try {
				if (music.paused) {
					// Первый запуск - только после явного действия пользователя
					if (!isAudioReady) {
						await music.play().then(() => {
							music.pause() // Сразу ставим на паузу после первого запуска
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
				// Показываем иконку play при ошибке
				icons[0].classList.add('active')
				icons[1].classList.remove('active')
			}
		})

		// Разблокировка при любом клике на странице
		const handleFirstInteraction = () => {
			document.removeEventListener('click', handleFirstInteraction)
			// Только помечаем как готовое, не загружаем заранее
			isAudioReady = true
		}

		document.addEventListener('click', handleFirstInteraction, { once: true })
		updateButton()
	}
})
