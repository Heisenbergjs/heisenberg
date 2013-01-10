breakingBad.Utilities.Helpers = {
	reverse: function(str){
		return str.split('').reverse().join('');
	},
	fileExtension: function(filename){
		return filename.split('.').pop();
	}
}