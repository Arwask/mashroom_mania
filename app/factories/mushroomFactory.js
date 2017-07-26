'use strict';

myApp.factory("mushroomFactory", function($q, $http) {
	
	function getMushroomData() {
		return $q( (resolve, reject) => {
			$http.get('https://chatty-6e407.firebaseio.com/mushrooms.json')
		.then( (mushrooms) => {
			// console.log("mushrooms", mushrooms);
			resolve(mushrooms);
		})
		.catch( (err) => {
			reject(err);
		});
	});
	}
	return { getMushroomData };
})