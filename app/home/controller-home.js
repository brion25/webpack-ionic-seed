export default function($state){
  let self = this;

  self.goTo = function(){
    $state.go('details');
  }
}
