export function setThemeClass(themeName: string){
	const classList = document.body.classList
	classList.forEach(cls => {
		if (cls.startsWith('theme')){
			classList.remove(cls)
		}
	})

	classList.add('theme-' + themeName)
}
