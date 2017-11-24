var tools={
	add:function(n){
		var aaa=['a','b','c'];
		var bbb='';
		$.each(aaa,function(k,v){
			bbb+=v;	
		})

		return n*n +'-----'+ bbb;
	}
}

export default tools;