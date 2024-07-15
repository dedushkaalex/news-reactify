export const formatDate = (date, locales = 'En-en') => {
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}
	
	return new Date(date).toLocaleDateString(locales, options)
}
