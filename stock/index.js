import angular from "angular";

// Create the module where our functionality can attach to
let stockModule = angular.module("stock", []);

// Include our UI-Router config settings
import StockConfig from "./stock.config";
stockModule.config(StockConfig);

// Controllers
import StockCtrl from "./stock.controller";
stockModule.controller("StockCtrl", StockCtrl);

export default stockModule;
