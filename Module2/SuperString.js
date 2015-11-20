/**
 * Created by khanh on 20/11/2015.
 */
module.exports = {

	invert: function (str) {
			var result = "";
			for (var i = str.length -1 ; i >= 0; i--){
				result += str.charAt(i);
			}
			return result;
	},

	longestword: function (sentence) {
		var word = sentence.split(" ");
		var longestWord = '';
		for (var i = 0; i < word.length; i++) {
			if (longestWord.length < word[i].length) {
				longestWord = word[i];
			}
		}
		return longestWord;
	}
};

String.prototype.toCamel = function(){
	return this.replace(/(\s[a-z])/g, function($){return $.toUpperCase().replace(/\s/g, '');});
};


var stringDemo = "you can do anything, but not everything.";