function StockConfig($stateProvider) {
  "ngInject";

  $stateProvider.state("stock", {
    url: "",
    controller: "StockCtrl",
    controllerAs: "$ctrl",
    templateUrl: "stock/stock.html"
  });
}

export default StockConfig;
