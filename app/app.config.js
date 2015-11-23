import HomeCtrl from './home/controller-home';
import DetailsCtrl from './details/controller-details';

export default angular.module('myApp', ['ionic','ui.router'])
  .config(['$stateProvider','$urlRouterProvider',($stateProvider,$urlRouterProvider)=>{
    $urlRouterProvider.otherwise('/')
    $stateProvider
      .state('index',{
        url:'/',
        templateUrl:'dist/views/home.html',
        controller:HomeCtrl,
        controllerAs:'home'
      })
      .state('details',{
        url:'/details',
        templateUrl:'dist/views/details.html',
        controller:DetailsCtrl,
        controllerAs:'detail'
      })
  }]);
