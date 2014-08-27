<!DOCTYPE html>
<html ng-app="store">
<head>
<meta charset="utf8" />


<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />



</head>
<body>

	<script type="text/javascript" src="js/angular.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>	
	<div ng-controller="StoreController as store" >
		<div ng-repeat="product in store.products">
			<div ng-hide="product.soldOut">
				<h1>{{product.name}}</h1>
				<h2>{{product.price}}</h2>
				<p>{{product.description}}</p>
				<button ng-show="product.canPurchase">Add to Cart</button>
			</div>
		</div>
	</div>



</body>
</html>
