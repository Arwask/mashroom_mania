'use strict';

myApp.controller("mushroomController", function($scope, mushroomFactory) {
	mushroomFactory.getMushroomData()
	.then( (shroomData) => {
		let mushrooms = [];
		let edibleMushrooms = [];
		angular.forEach(shroomData.data, (shroom) => 
		{
			mushrooms.push(shroom);
		});
		$scope.mushroomsList = mushrooms;
		// console.log("shroomData", mushrooms);
	});
})
