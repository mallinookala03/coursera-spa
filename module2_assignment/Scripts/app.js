(function () {
    'use strict';
    var toBuyList = [
      {
          name: "Milk",
          quantity: "2"
      },
      {
          name: "Donuts",
          quantity: "200"
      },
      {
          name: "Cookies",
          quantity: "300"
      },
      {
          name: "Chocolate",
          quantity: "5"
      },
      {
          name: "Banana",
          quantity: "12"
      },
      {
          name: "Oranges",
          quantity: "6"
      }
    ];
    angular.module('ShoppingListCheckOff', [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyItems = this;
        toBuyItems.itemsToBuy = ShoppingListCheckOffService.gettToBuyItems();
        toBuyItems.buyItem = function (itemIndex) {            
            ShoppingListCheckOffService.buyItem(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var showList = this;
        showList.itemsBought = ShoppingListCheckOffService.getBoughtItems();        
    }
    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items
        var itemsToBuy = toBuyList;
        var itemsBought = [];

        service.buyItem = function (itemIndex) {
            var selItem = itemsToBuy[itemIndex];
            itemsToBuy.splice(itemIndex, 1);
            itemsBought.push(selItem);
        };

        service.gettToBuyItems = function () {
            return itemsToBuy;
        };
        service.getBoughtItems = function () {
            return itemsBought;
        };
    }
})();