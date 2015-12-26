//匹配非[]中的字符
module.exports = function(str) {
	return /^\D[^A-Z]/.test(str);
};