//匹配[]中任意字符
module.exports = function (str) {
	return /^[aeiou0-9]/.test(str)
};