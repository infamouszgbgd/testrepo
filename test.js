//console.log('abcd');
//random change
//another random change

var obj = {
	prop: 'propobj',
	whatnow: function(){
		//var prop = 'propinside';
		//console.log(prop);
		console.log(this.prop);
	}

}
obj.whatnow();
