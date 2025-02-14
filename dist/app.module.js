
// Define the AngularJS module
var appModule = angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/product', {
            templateUrl: 'views/product.catalog.html', // Template for the home route
            controller: 'ProductCatalogController', // Controller for the home route
            controllerAs: 'productCtrl' // Use 'homeCtrl' as alias for the controller instance
        })
            .otherwise({
            redirectTo: 'home' // Default route is home
        });
    }])
    .controller('LoginController', LoginController)
    .controller('ShoppingController', ShoppingController)
    .controller('ProductCatalogController', ProductCatalogController);

