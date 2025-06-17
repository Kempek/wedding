const background = document.getElementById('background')

function updateBackgroundHeight() {
	const height = Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight
	)
	background.style.height = height + 'px'
}

// Обновляем при загрузке и изменении размера окна
window.addEventListener('load', updateBackgroundHeight)
window.addEventListener('resize', updateBackgroundHeight)
