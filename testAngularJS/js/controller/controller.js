var app = angular.module('le', []);

/*******************************directive*****************************/
app.directive("testDirective", function() {
    return {
        template : "<h1>自定义指令.</h1>",
		//compile:function (element, attrs , transclude) { }同时存在 link 不执行
		link:function (scope, element, attrs) {
			console.log('test');
		}
    };
});
app.directive("runoobDirective", function() {
    return {
        restrict : "C",
        template : " :必须设置 restrict 的值为 'C' 才能通过类名来调用指令。"
    };
});

/*
app.directive("runDirective", function() {
    return {
        restrict : "M",
        replace : true,
        template : '注意： 我们需要在该实例添加 replace 属性， 否则评论是不可见的。<br/>注意： 你必须设置 restrict 的值为 "M" 才能通过注释来调用指令。'
    };
});
*/


/*******************************controller*****************************/
app.service('hexafy', function(){//自定义服务
	this.myFunc = function (x) {
		return x.toString(16);
	}
});

app.filter('myFormat',['hexafy', function(hexafy) {
    return function(x) {
        return hexafy.myFunc(x);
    };
}]);

app.controller('CtrlA', function( hexafy, $scope, $location, $http, $timeout, $interval ) {
	 $scope.counts = [255, 251, 200];

	console.log($location.absUrl());
	console.log($location.$$absUrl);
    /*
    $http.get("http://www.runoob.com/try/angularjs/data/Customers_JSON.php").then(function (response) {
		console.log(response);
    });
	
    $http.get("http://www.runoob.com/try/angularjs/data/Customers_JSON.php").success(function(response) {
		console.log(response);
	});
	*/
	
    $scope.myHeader = "Hello World!";
    $timeout(function () {
        $scope.myHeader = "How are you today?";
    }, 2000);

    $scope.theTime = new Date().toLocaleTimeString();
    $interval(function () { //$interval.cancle();
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);

	$scope.hex = hexafy.myFunc(255);

});

app.controller('CtrlB', function( hexafy, $scope, $location, $http, $timeout, $interval ) {
	$scope.names = ["Google", "Runoob", "Taobao"];
    $scope.cars = {
        car01 : {brand : "Ford", model : "Mustang", color : "red"},
        car02 : {brand : "Fiat", model : "500", color : "white"},
        car03 : {brand : "Volvo", model : "XC90", color : "black"}
    }
});