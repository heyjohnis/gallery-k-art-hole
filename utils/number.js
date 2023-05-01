export function commaFormat(str) {
	str = String(parseInt(str));
	return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}