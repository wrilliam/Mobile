webpackJsonp([1],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresaPageModule", function() { return EmpresaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empresa__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmpresaPageModule = /** @class */ (function () {
    function EmpresaPageModule() {
    }
    EmpresaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__empresa__["a" /* EmpresaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__empresa__["a" /* EmpresaPage */]),
            ],
        })
    ], EmpresaPageModule);
    return EmpresaPageModule;
}());

//# sourceMappingURL=empresa.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpresaPage; });
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
 * Generated class for the EmpresaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmpresaPage = /** @class */ (function () {
    function EmpresaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EmpresaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmpresaPage');
    };
    EmpresaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-empresa',template:/*ion-inline-start:"F:\wrilliam\git\app-Menu\src\pages\empresa\empresa.html"*/'<style>\n  .container-text {\n    font-size: 17px;\n    text-align: justify;\n    color: #4a4a4a;\n    padding: 5px;\n  }\n</style>\n\n<ion-header padding>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon style="color: #49494a;" name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img src="../assets/imgs/logo-text.png">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content text-center>\n  <img src="../assets/imgs/Tecnologia.jpg">\n  <p class="container-text" padding>\n    A empresa, Upgrade - Produtos Tecnológicos S/A, foi criada em 2010, por dois irmãos que veem na tecnologia uma oportunidade de desenvolvimento e inovação, para um futuro melhor. O principal objetivo da Upgrade é oferecer produtos importados de ponta e com preços acessíveis. O propósito disso é de que as pessoas tenham condições de interagir com o mundo e de evoluir utilizando esses produtos.\n  </p>\n</ion-content>\n'/*ion-inline-end:"F:\wrilliam\git\app-Menu\src\pages\empresa\empresa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EmpresaPage);
    return EmpresaPage;
}());

//# sourceMappingURL=empresa.js.map

/***/ })

});
//# sourceMappingURL=1.js.map