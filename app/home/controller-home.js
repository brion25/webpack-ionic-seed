import __view from "./home.html"

export default ['$state',function($state){
  let self = this;

  self.goTo = function(){
    $state.go('details');
  }
}
]
