(function(){
	var app = angular.module('store', [ ]);
	app.controller("StoreController", function(){
		this.products = gems;
	});

	var gems =[
		{
			name: "Dodecahedron",
			price: 2.95,
			description: ". . . .",
			canPurchase: true,
			soldOut: false
		},
		{
			name: "Product2",
			price: 2.98,
			description: "...",
			canPurchase: true,
			soldOut: false
		},
		{
			name: "Product3",
			price: 2.99,
			description: "This is the third sample product that I will display in my Angualr.js application.",
			canPurchase: true,
			soldOut: false
		}
	];
})();
