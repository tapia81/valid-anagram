const s = 'rat';
const x = 'art';
const t = 'car';
const p = 'hello';

const checkAnagram = (str1, str2) => {
	if (!str1.length == str2.length) {
		return false;
	} else {
		return str1.toLowerCase().split('').sort().join() == str2.toLowerCase().split('').sort().join() ? true : false;
	}
};

console.log(checkAnagram(s, x));
console.log(checkAnagram(s, t));
console.log(checkAnagram(s, p));
