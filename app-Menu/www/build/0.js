webpackJsonp([0],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaPageModule", function() { return TecnologiaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tecnologia__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TecnologiaPageModule = /** @class */ (function () {
    function TecnologiaPageModule() {
    }
    TecnologiaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tecnologia__["a" /* TecnologiaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tecnologia__["a" /* TecnologiaPage */]),
            ],
        })
    ], TecnologiaPageModule);
    return TecnologiaPageModule;
}());

//# sourceMappingURL=tecnologia.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TecnologiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TecnologiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TecnologiaPage = /** @class */ (function () {
    function TecnologiaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TecnologiaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TecnologiaPage');
    };
    TecnologiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tecnologia',template:/*ion-inline-start:"F:\wrilliam\git\app-Menu\src\pages\tecnologia\tecnologia.html"*/'<style>\n  h2 {\n    width: 100%;\n    color: #6f6f6f;\n    background-color: #e4e2e2;\n  }\n</style>\n\n<ion-header padding>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon style="color: #49494a;" name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img src="../assets/imgs/logo-text.png">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content text-center>\n  <h2>Computadores</h2>\n  <div padding>\n    <img src="../assets/imgs/pc01.png">\n    <img src="../assets/imgs/pc02.png">\n    <img src="../assets/imgs/pc03.png">\n  </div>\n\n  <h2>Notebooks</h2>\n  <div padding>\n    <img src="../assets/imgs/note01.png">\n    <img src="../assets/imgs/note02.png">\n    <img src="../assets/imgs/note03.png">\n  </div>\n\n  <h2>Smartphones</h2>\n  <div padding>\n    <img src="../assets/imgs/celular01.png">\n    <img src="../assets/imgs/celular02.png">\n    <img src="../assets/imgs/celular03.png">\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\wrilliam\git\app-Menu\src\pages\tecnologia\tecnologia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TecnologiaPage);
    return TecnologiaPage;
}());

//# sourceMappingURL=tecnologia.js.map

/***/ })

});
//# sourceMappingURL=0.js.map