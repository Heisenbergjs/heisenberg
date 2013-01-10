breakingBad.Utilities.Helpers = {
	reverse: function(str){
		return str.split('').reverse().join('');
	},
	fileExtension: function(filename){
		return filename.split('.').pop();
	}
};

// here is your helpers module, completely generic functions separated from the rest of your application logic.
// call like so: var reversedStr = breakingBad.Utilities.Helpers.reverse(str);