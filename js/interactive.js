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
