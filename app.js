(function(){
  var gem = { name: 'Azurite', price: 2.95, description: 'some shitty gem!', canPurchase: true};
  var app = angular.module('gemStore', []);

    app.controller('StoreController', function() {
    this.product = gem;


  });



})();
