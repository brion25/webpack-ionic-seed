import Home from './home/index.js';
import Details from './details/index.js';

export default angular.module('myApp', ['ionic','ui.router'])
  .config(['$stateProvider','$urlRouterProvider',($stateProvider,$urlRouterProvider)=>{
    $urlRouterProvider.otherwise('/')
    $stateProvider
      .state('index',{
        url:'/',
        template:Home.view(),
        controller:['$state',Home.ctrl],
        controllerAs:'home'
      })
      .state('details',{
        url:'/details',
        template:Details.view(),
        controller:Details.ctrl,
        controllerAs:'detail'
      })
  }]);
