import * as angular from 'angular';
import 'angular-route';  // Import ngRoute for routing
import { ProductCatalogController } from './controllers/product-catalog.controller';
import { ShoppingController } from './controllers/shopping.controller';
import { LoginController } from './controllers/login.controller';




// Define the AngularJS module
const appModule = angular.module('myApp', ['ngRoute'])
.config(['$routeProvider', ($routeProvider:any) => {
  $routeProvider
    .when('/product', {
      templateUrl: 'views/product.catalog.html',  // Template for the home route
      controller: 'ProductCatalogController',  // Controller for the home route
      controllerAs: 'productCtrl'  // Use 'homeCtrl' as alias for the controller instance
    })
   
    .otherwise({
      redirectTo: 'home'  // Default route is home
    });
}])
.controller('LoginController', LoginController)
.controller('ShoppingController', ShoppingController)
.controller('ProductCatalogController', ProductCatalogController);
export default appModule;


