export function commaFormat(str) {
	str = String(parseInt(str));
	return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function hyphenForPhone(val) {
    return (val || '')
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
}

export function hyphenForCorpNum (val) {
    return (val || '')
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{3})(\d{2})(\d{5})$/, `$1-$2-$3`);
}