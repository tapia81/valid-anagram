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

//I created a arrow function expression named checkAnagram that takes two parameters str1 and str2. Since one of the constraints
//is length, I began with an if statement that will check the length of the strings entered and return false if they're not the same.
//That will quickly elminate the wrong entries and check strings within the else statement. In the else statement I return a boolean
//value using a ternary operator. The condition I check is if str1 and str2 are equal, I check by using serveral methods on both strings.
//This includes the methods toLowercase(), split(), sort(), and join(). Using toLowerCase() sets all characters of the strings to
//lowercase which helps with the second constraint from leetcode of s and t consisting only lowercase letters.I then use split('')
//with empty parameter this will return a new array from the string and separate each letter as an array element.Next I will use
//sort() to arrange the elements alphabetically. Finally we will use join() to convert the array back into a string and compare
//str1 and str2 which will return a true value if they are equal.
