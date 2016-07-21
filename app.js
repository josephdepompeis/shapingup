(function(){
  var gems = [
    {
    name: 'Azurite',
    price: 2.95,
    description: 'some shitty gem!',
    canPurchase: true,
    soldOut: false,
    },
    {
    name: 'Spazuriggle',
    price: 3.45,
    description: 'some smelly gem!',
    canPurchase: true,
    soldOut: false,
    }
    ];

  var app = angular.module('gemStore', []);

    app.controller('StoreController', function() {
    this.products = gems;


  });



})();
