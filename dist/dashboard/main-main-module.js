(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "0LYO":
/*!*************************************************!*\
  !*** ./src/app/main/alerts/alerts.component.ts ***!
  \*************************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "OaSA");




function AlertsComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Aviso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AlertsComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r8.name, " ");
} }
function AlertsComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Classifica\u00E7\u00E3o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AlertsComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.nivel, " ");
} }
function AlertsComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hora ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AlertsComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.hora, " ");
} }
function AlertsComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
} }
function AlertsComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
const ELEMENT_DATA = [
    { name: 'Consumo não identificado acima de 10kWh, por favor checar se você não cadastrou algum aparelho, caso contrario pode está tendo perda de energia', nivel: 'Importante', hora: '12:30:00' },
    { name: 'Consumo não identificado acima de 10kWh, por favor checar se você não cadastrou algum aparelho, caso contrario pode está tendo perda de energia', nivel: 'Importante', hora: '12:15:00' },
    { name: 'O aparelho Computador, está ligado por mais de 20hrs seguidas', nivel: 'Aviso', hora: '12:00:00' },
    { name: 'O aparelho ventilador está ligado por masi de 4 horas seguidas', nivel: 'Aviso', hora: '11:30:00' }
];
class AlertsComponent {
    constructor() {
        this.displayedColumns = ['name', 'nivel', 'hora'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() {
    }
}
AlertsComponent.ɵfac = function AlertsComponent_Factory(t) { return new (t || AlertsComponent)(); };
AlertsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertsComponent, selectors: [["app-alerts"]], decls: 17, vars: 3, consts: [["fxLayout", "row", "fxLayoutGap", "20px"], ["fxFlex", "80"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nivel"], ["matColumnDef", "hora"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function AlertsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AlertsComponent_th_7_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AlertsComponent_td_8_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AlertsComponent_th_10_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AlertsComponent_td_11_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AlertsComponent_th_13_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AlertsComponent_td_14_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AlertsComponent_tr_15_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AlertsComponent_tr_16_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  div[_ngcontent-%COMP%] {\r\n      margin-left: 5%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO01BQ0ksZUFBZTtFQUNuQiIsImZpbGUiOiJhbGVydHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgZGl2IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alerts',
                templateUrl: './alerts.component.html',
                styleUrls: ['./alerts.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "1URv":
/*!*****************************************************!*\
  !*** ./src/app/main/products/products.component.ts ***!
  \*****************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "zmBI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ProductsComponent_div_2_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", p_r5.name, " | ", p_r5.price, "");
} }
function ProductsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsComponent_div_2_li_2_Template, 2, 2, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r0.products$));
} }
function ProductsComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No person found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductsComponent {
    constructor(mainService) {
        this.mainService = mainService;
    }
    ngOnInit() {
        this.products$ = this.mainService.getProducts();
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 6, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["noproduct", ""], [4, "ngFor", "ngForOf"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsComponent_div_2_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductsComponent_ng_template_4_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.products$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.css']
            }]
    }], function () { return [{ type: _main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }]; }, null); })();


/***/ }),

/***/ "3hl/":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./people/people.component */ "bRY+");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "1URv");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alerts/alerts.component */ "0LYO");
/* harmony import */ var _aparelhos_aparelhos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aparelhos/aparelhos.component */ "GA6K");
/* harmony import */ var _comodo_comodo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comodo/comodo.component */ "Zi9g");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./details/details.component */ "gOqG");
/* harmony import */ var _dash_dash_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dash/dash.component */ "62kS");
/* harmony import */ var _tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tutorials/tutorials.component */ "VTJx");












const routes = [
    { path: '', redirectTo: 'dash' },
    { path: 'alerts', component: _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_4__["AlertsComponent"] },
    { path: 'aparelhos', component: _aparelhos_aparelhos_component__WEBPACK_IMPORTED_MODULE_5__["AparelhosComponent"] },
    { path: 'comodo', component: _comodo_comodo_component__WEBPACK_IMPORTED_MODULE_6__["ComodoComponent"] },
    { path: 'details', component: _details_details_component__WEBPACK_IMPORTED_MODULE_7__["DetailsComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"] },
    { path: 'people', component: _people_people_component__WEBPACK_IMPORTED_MODULE_2__["PeopleComponent"] },
    { path: 'dash', component: _dash_dash_component__WEBPACK_IMPORTED_MODULE_8__["DashComponent"] },
    { path: 'tutorials', component: _tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_9__["TutorialsComponent"] },
];
class MainRoutingModule {
}
MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainRoutingModule });
MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "62kS":
/*!*********************************************!*\
  !*** ./src/app/main/dash/dash.component.ts ***!
  \*********************************************/
/*! exports provided: DashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashComponent", function() { return DashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/modules/exporting */ "AxlJ");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts-angular */ "JUyF");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









class DashComponent {
    constructor() {
        this.label = 'Geladeira';
        this.porcentagem = '50';
        this.total = "100";
        this.label1 = 'Geladeira';
        this.porcentagem1 = '10';
        this.total1 = "32";
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {};
        this.charts1 = {};
        this.charts2 = {};
        this.pie1 = {};
        this.pie2 = {};
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Cômodos com maior consumo nos ultimos 7 dias'
            },
            xAxis: {
                categories: ['6 dias atrás', '5 dias atrás', '4 dias atrás', '3 dias atrás', '2 dias atrás', 'Ontem', 'Hoje'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'kWh'
                },
            },
            tooltip: {
                split: true,
                valueSuffix: ' kWh'
            },
            plotOptions: {
                area: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                }
            },
            series: [{
                    name: 'Sala',
                    data: [502, 635, 809, 947, 1402, 3634, 5268]
                }, {
                    name: 'Cozinha',
                    data: [106, 107, 111, 133, 221, 767, 1766]
                }, {
                    name: 'Banheiro',
                    data: [163, 203, 276, 408, 547, 729, 628]
                }, {
                    name: 'Quarto 1',
                    data: [18, 31, 54, 156, 339, 818, 1201]
                }, {
                    name: 'Quarto 2',
                    data: [2, 2, 2, 6, 13, 30, 46]
                }]
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2___default()(highcharts__WEBPACK_IMPORTED_MODULE_1__);
        this.charts1 = {
            chart: {
                type: 'area'
            },
            title: {
                text: null
            },
            subtitle: {
                text: null
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            xAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            yAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            series: [{
                    data: [70, 80, 56, 32,]
                }]
        };
        this.charts2 = {
            chart: {
                type: 'area'
            },
            title: {
                text: null
            },
            subtitle: {
                text: null
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            xAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            yAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            series: [{
                    data: [70, 10, 56, 50,]
                }]
        };
        this.pie1 = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Aparelhos com maior gasto em kWh (Total)'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                            name: 'Microondas',
                            y: 11.84
                        }, {
                            name: 'Televisão',
                            y: 10.85
                        }, {
                            name: 'Computador',
                            y: 4.67
                        }, {
                            name: 'Aspirador de pó',
                            y: 4.18
                        }]
                }]
        };
        this.pie2 = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Aparelhos com mais tempo ligado'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: 'hrs'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} hrs'
                    }
                }
            },
            exporting: {
                enabled: false
            },
            creditts: {
                enabled: false
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                            name: 'Geladeira',
                            y: 61.41,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'Microondas',
                            y: 11.84
                        }, {
                            name: 'Televisão',
                            y: 10.85
                        }, {
                            name: 'Computador',
                            y: 4.67
                        }, {
                            name: 'Aspirador de pó',
                            y: 4.18
                        }]
                }]
        };
    }
}
DashComponent.ɵfac = function DashComponent_Factory(t) { return new (t || DashComponent)(); };
DashComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashComponent, selectors: [["app-dash"]], decls: 42, vars: 16, consts: [[2, "width", "100%", "height", "400px", "display", "block", 3, "Highcharts", "options"], ["fxLayout", "row", "fx", "", "fxLayoutAlign", "space-between center", "fxLayoutGap", "20px", 1, "stats-cards"], ["fxFlex", "50"], [1, "text"], [1, "total"], ["color", "primary"], [1, "description"], [2, "width", "90%", "height", "100px", "display", "block", 3, "Highcharts", "options"], ["fxLayout", "row", "fxLayout", "space-between center", "fxLayoutGap", "20px"], ["fxFlex", "45"], [2, "width", "100%", "display", "block", 3, "Highcharts", "options"]], template: function DashComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "highcharts-chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "highcharts-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "highcharts-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "highcharts-chart", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "highcharts-chart", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Aparelho com maior consumo: ", ctx.label, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.total, " kWh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.porcentagem, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.charts1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Aparelho a mais tempo ligado: ", ctx.label1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.total1, " horas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.porcentagem1, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.charts2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.pie1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.pie2);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_3__["HighchartsChartComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: ["h4[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n}\r\n\r\n.total[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%], .description[_ngcontent-%COMP%] {\r\n    color: rgb(121, 73, 11);\r\n    font-size: 2em;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 0 20px;\r\n    top: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFFBQVE7QUFDWiIsImZpbGUiOiJkYXNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4udG90YWwge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5tYXQtaWNvbiwgLmRlc2NyaXB0aW9uIHtcclxuICAgIGNvbG9yOiByZ2IoMTIxLCA3MywgMTEpO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICB0b3A6IDVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dash',
                templateUrl: './dash.component.html',
                styleUrls: ['./dash.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6n/F":
/*!***********************************************!*\
  !*** ./node_modules/highcharts/highcharts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v9.0.1 (2021-02-15)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(W,P){ true&&module.exports?(P["default"]=P,module.exports=W.document?P(W):P): true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return P(W)}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):(undefined)})("undefined"!==typeof window?window:this,function(W){function P(f,d,k,x){f.hasOwnProperty(d)||(f[d]=x.apply(null,k))}var k={};P(k,"Core/Globals.js",[],function(){var f="undefined"!==typeof W?W:"undefined"!==typeof window?window:{},d=f.document,
k=f.navigator&&f.navigator.userAgent||"",x=d&&d.createElementNS&&!!d.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,B=/(edge|msie|trident)/i.test(k)&&!f.opera,G=-1!==k.indexOf("Firefox"),D=-1!==k.indexOf("Chrome"),H=G&&4>parseInt(k.split("Firefox/")[1],10),t=function(){};return{product:"Highcharts",version:"9.0.1",deg2rad:2*Math.PI/360,doc:d,hasBidiBug:H,hasTouch:!!f.TouchEvent,isMS:B,isWebKit:-1!==k.indexOf("AppleWebKit"),isFirefox:G,isChrome:D,isSafari:!D&&-1!==k.indexOf("Safari"),
isTouchDevice:/(Mobile|Android|Windows Phone)/.test(k),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},supportsPassiveEvents:function(){var C=!1;if(!B){var l=Object.defineProperty({},"passive",{get:function(){C=!0}});f.addEventListener&&f.removeEventListener&&(f.addEventListener("testPassive",t,l),f.removeEventListener("testPassive",t,l))}return C}(),symbolSizes:{},svg:x,win:f,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:t,charts:[],dateFormats:{}}});P(k,"Core/Utilities.js",
[k["Core/Globals.js"]],function(f){function d(a,c,v,L){var p=c?"Highcharts error":"Highcharts warning";32===a&&(a=p+": Deprecated member");var K=l(a),h=K?p+" #"+a+": www.highcharts.com/errors/"+a+"/":a.toString();p=function(){if(c)throw Error(h);b.console&&-1===d.messages.indexOf(h)&&console.warn(h)};if("undefined"!==typeof L){var g="";K&&(h+="?");m(L,function(p,a){g+="\n - "+a+": "+p;K&&(h+=encodeURI(a)+"="+encodeURI(p))});h+=g}v?e(v,"displayError",{code:a,message:h,params:L},p):p();d.messages.push(h)}
function k(){var a,b=arguments,v={},L=function(p,a){"object"!==typeof p&&(p={});m(a,function(b,u){"__proto__"!==u&&"constructor"!==u&&(!H(b,!0)||C(b)||t(b)?p[u]=a[u]:p[u]=L(p[u]||{},b))});return p};!0===b[0]&&(v=b[1],b=Array.prototype.slice.call(b,2));var p=b.length;for(a=0;a<p;a++)v=L(v,b[a]);return v}function x(a,b){var v={};m(a,function(L,p){if(H(a[p],!0)&&!a.nodeType&&b[p])L=x(a[p],b[p]),Object.keys(L).length&&(v[p]=L);else if(H(a[p])||a[p]!==b[p])v[p]=a[p]});return v}function B(a,b){return parseInt(a,
b||10)}function G(a){return"string"===typeof a}function D(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a}function H(a,b){return!!a&&"object"===typeof a&&(!b||!D(a))}function t(a){return H(a)&&"number"===typeof a.nodeType}function C(a){var b=a&&a.constructor;return!(!H(a,!0)||t(a)||!b||!b.name||"Object"===b.name)}function l(a){return"number"===typeof a&&!isNaN(a)&&Infinity>a&&-Infinity<a}function E(a){return"undefined"!==typeof a&&null!==a}function g(a,
b,v){var L;G(b)?E(v)?a.setAttribute(b,v):a&&a.getAttribute&&((L=a.getAttribute(b))||"class"!==b||(L=a.getAttribute(b+"Name"))):m(b,function(p,b){a.setAttribute(b,p)});return L}function y(a,b){var v;a||(a={});for(v in b)a[v]=b[v];return a}function c(){for(var a=arguments,b=a.length,v=0;v<b;v++){var L=a[v];if("undefined"!==typeof L&&null!==L)return L}}function q(a,b){f.isMS&&!f.svg&&b&&"undefined"!==typeof b.opacity&&(b.filter="alpha(opacity="+100*b.opacity+")");y(a.style,b)}function n(b,e,v,L,p){b=
a.createElement(b);e&&y(b,e);p&&q(b,{padding:"0",border:"none",margin:"0"});v&&q(b,v);L&&L.appendChild(b);return b}function A(a,b){return parseFloat(a.toPrecision(b||14))}function M(a,b,v,L){a=+a||0;b=+b;var p=f.defaultOptions.lang,K=(a.toString().split(".")[1]||"").split("e")[0].length,e=a.toString().split("e"),h=b;if(-1===b)b=Math.min(K,20);else if(!l(b))b=2;else if(b&&e[1]&&0>e[1]){var u=b+ +e[1];0<=u?(e[0]=(+e[0]).toExponential(u).split("e")[0],b=u):(e[0]=e[0].split(".")[0]||0,a=20>b?(e[0]*Math.pow(10,
e[1])).toFixed(b):0,e[1]=0)}var m=(Math.abs(e[1]?e[0]:a)+Math.pow(10,-Math.max(b,K)-1)).toFixed(b);K=String(B(m));u=3<K.length?K.length%3:0;v=c(v,p.decimalPoint);L=c(L,p.thousandsSep);a=(0>a?"-":"")+(u?K.substr(0,u)+L:"");a=0>+e[1]&&!h?"0":a+K.substr(u).replace(/(\d{3})(?=\d)/g,"$1"+L);b&&(a+=v+m.slice(-b));e[1]&&0!==+a&&(a+="e"+e[1]);return a}function z(a,b){if(!a)return b;var v=a.split(".").reverse();if(1===v.length)return b[a];for(a=v.pop();"undefined"!==typeof a&&"undefined"!==typeof b&&null!==
b;)b=b[a],a=v.pop();return b}function m(a,b,v){for(var e in a)Object.hasOwnProperty.call(a,e)&&b.call(v||a[e],a[e],e,a)}function r(a,b,v){function e(p,b){var u=a.removeEventListener||f.removeEventListenerPolyfill;u&&u.call(a,p,b,!1)}function p(p){var u;if(a.nodeName){if(b){var v={};v[b]=!0}else v=p;m(v,function(a,b){if(p[b])for(u=p[b].length;u--;)e(b,p[b][u].fn)})}}var K="function"===typeof a&&a.prototype||a;if(Object.hasOwnProperty.call(K,"hcEvents")){var h=K.hcEvents;b?(K=h[b]||[],v?(h[b]=K.filter(function(a){return v!==
a.fn}),e(b,v)):(p(h),h[b]=[])):(p(h),delete K.hcEvents)}}function e(b,e,v,L){v=v||{};if(a.createEvent&&(b.dispatchEvent||b.fireEvent)){var p=a.createEvent("Events");p.initEvent(e,!0,!0);y(p,v);b.dispatchEvent?b.dispatchEvent(p):b.fireEvent(e,p)}else if(b.hcEvents){v.target||y(v,{preventDefault:function(){v.defaultPrevented=!0},target:b,type:e});p=[];for(var K=b,h=!1;K.hcEvents;)Object.hasOwnProperty.call(K,"hcEvents")&&K.hcEvents[e]&&(p.length&&(h=!0),p.unshift.apply(p,K.hcEvents[e])),K=Object.getPrototypeOf(K);
h&&p.sort(function(a,p){return a.order-p.order});p.forEach(function(a){!1===a.fn.call(b,v)&&v.preventDefault()})}L&&!v.defaultPrevented&&L.call(b,v)}var h=f.charts,a=f.doc,b=f.win;"";(d||(d={})).messages=[];var w;Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};var J=Array.prototype.find?function(a,b){return a.find(b)}:function(a,b){var v,e=a.length;for(v=0;v<e;v++)if(b(a[v],v))return a[v]};m({map:"map",each:"forEach",grep:"filter",reduce:"reduce",some:"some"},function(a,b){f[b]=
function(v){var e;d(32,!1,void 0,(e={},e["Highcharts."+b]="use Array."+a,e));return Array.prototype[a].apply(v,[].slice.call(arguments,1))}});var O,F=function(){var a=Math.random().toString(36).substring(2,9)+"-",b=0;return function(){return"highcharts-"+(O?"":a)+b++}}(),N=f.getOptions=function(){return f.defaultOptions},R=f.setOptions=function(a){f.defaultOptions=k(!0,f.defaultOptions,a);(a.time||a.global)&&f.time.update(k(f.defaultOptions.global,f.defaultOptions.time,a.global,a.time));return f.defaultOptions};
b.jQuery&&(b.jQuery.fn.highcharts=function(){var a=[].slice.call(arguments);if(this[0])return a[0]?(new (f[G(a[0])?a.shift():"Chart"])(this[0],a[0],a[1]),this):h[g(this[0],"data-highcharts-chart")]});return{addEvent:function(a,b,v,e){void 0===e&&(e={});var p="function"===typeof a&&a.prototype||a;Object.hasOwnProperty.call(p,"hcEvents")||(p.hcEvents={});p=p.hcEvents;f.Point&&a instanceof f.Point&&a.series&&a.series.chart&&(a.series.chart.runTrackerClick=!0);var K=a.addEventListener||f.addEventListenerPolyfill;
K&&K.call(a,b,v,f.supportsPassiveEvents?{passive:void 0===e.passive?-1!==b.indexOf("touch"):e.passive,capture:!1}:!1);p[b]||(p[b]=[]);p[b].push({fn:v,order:"number"===typeof e.order?e.order:Infinity});p[b].sort(function(a,b){return a.order-b.order});return function(){r(a,b,v)}},arrayMax:function(a){for(var b=a.length,v=a[0];b--;)a[b]>v&&(v=a[b]);return v},arrayMin:function(a){for(var b=a.length,v=a[0];b--;)a[b]<v&&(v=a[b]);return v},attr:g,clamp:function(a,b,v){return a>b?a<v?a:v:b},cleanRecursively:x,
clearTimeout:function(a){E(a)&&clearTimeout(a)},correctFloat:A,createElement:n,css:q,defined:E,destroyObjectProperties:function(a,b){m(a,function(v,e){v&&v!==b&&v.destroy&&v.destroy();delete a[e]})},discardElement:function(a){w||(w=n("div"));a&&w.appendChild(a);w.innerHTML=""},erase:function(a,b){for(var v=a.length;v--;)if(a[v]===b){a.splice(v,1);break}},error:d,extend:y,extendClass:function(a,b){var v=function(){};v.prototype=new a;y(v.prototype,b);return v},find:J,fireEvent:e,format:function(a,
b,v){var e="{",p=!1,K=[],h=/f$/,c=/\.([0-9])/,u=f.defaultOptions.lang,m=v&&v.time||f.time;for(v=v&&v.numberFormatter||M;a;){var I=a.indexOf(e);if(-1===I)break;var g=a.slice(0,I);if(p){g=g.split(":");e=z(g.shift()||"",b);if(g.length&&"number"===typeof e)if(g=g.join(":"),h.test(g)){var w=parseInt((g.match(c)||["","-1"])[1],10);null!==e&&(e=v(e,w,u.decimalPoint,-1<g.indexOf(",")?u.thousandsSep:""))}else e=m.dateFormat(g,e);K.push(e)}else K.push(g);a=a.slice(I+1);e=(p=!p)?"}":"{"}K.push(a);return K.join("")},
getMagnitude:function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))},getNestedProperty:z,getOptions:N,getStyle:function(a,e,v){if("width"===e)return e=Math.min(a.offsetWidth,a.scrollWidth),v=a.getBoundingClientRect&&a.getBoundingClientRect().width,v<e&&v>=e-1&&(e=Math.floor(v)),Math.max(0,e-f.getStyle(a,"padding-left")-f.getStyle(a,"padding-right"));if("height"===e)return Math.max(0,Math.min(a.offsetHeight,a.scrollHeight)-f.getStyle(a,"padding-top")-f.getStyle(a,"padding-bottom"));b.getComputedStyle||
d(27,!0);if(a=b.getComputedStyle(a,void 0))a=a.getPropertyValue(e),c(v,"opacity"!==e)&&(a=B(a));return a},inArray:function(a,b,v){d(32,!1,void 0,{"Highcharts.inArray":"use Array.indexOf"});return b.indexOf(a,v)},isArray:D,isClass:C,isDOMElement:t,isFunction:function(a){return"function"===typeof a},isNumber:l,isObject:H,isString:G,keys:function(a){d(32,!1,void 0,{"Highcharts.keys":"use Object.keys"});return Object.keys(a)},merge:k,normalizeTickInterval:function(a,b,v,e,p){var K=a;v=c(v,1);var h=a/
v;b||(b=p?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===e&&(1===v?b=b.filter(function(a){return 0===a%1}):.1>=v&&(b=[1/v])));for(e=0;e<b.length&&!(K=b[e],p&&K*v>=a||!p&&h<=(b[e]+(b[e+1]||b[e]))/2);e++);return K=A(K*v,-Math.round(Math.log(.001)/Math.LN10))},numberFormat:M,objectEach:m,offset:function(e){var h=a.documentElement;e=e.parentElement||e.parentNode?e.getBoundingClientRect():{top:0,left:0,width:0,height:0};return{top:e.top+(b.pageYOffset||h.scrollTop)-(h.clientTop||0),left:e.left+(b.pageXOffset||
h.scrollLeft)-(h.clientLeft||0),width:e.width,height:e.height}},pad:function(a,b,v){return Array((b||2)+1-String(a).replace("-","").length).join(v||"0")+a},pick:c,pInt:B,relativeLength:function(a,b,v){return/%$/.test(a)?b*parseFloat(a)/100+(v||0):parseFloat(a)},removeEvent:r,setOptions:R,splat:function(a){return D(a)?a:[a]},stableSort:function(a,b){var v=a.length,e,p;for(p=0;p<v;p++)a[p].safeI=p;a.sort(function(a,p){e=b(a,p);return 0===e?a.safeI-p.safeI:e});for(p=0;p<v;p++)delete a[p].safeI},syncTimeout:function(a,
b,v){if(0<b)return setTimeout(a,b,v);a.call(0,v);return-1},timeUnits:{millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5},uniqueKey:F,useSerialIds:function(a){return O=c(a,O)},wrap:function(a,b,v){var e=a[b];a[b]=function(){var a=Array.prototype.slice.call(arguments),b=arguments,h=this;h.proceed=function(){e.apply(h,arguments.length?arguments:b)};a.unshift(e);a=v.apply(this,a);h.proceed=null;return a}}}});P(k,"Core/Renderer/HTML/AST.js",[k["Core/Globals.js"],
k["Core/Utilities.js"]],function(f,d){var k=f.SVG_NS,x=d.attr,B=d.createElement,G=d.discardElement,D=d.error,H=d.isString,t=d.objectEach,C=d.splat;"";var l=!1;try{l=!!(new DOMParser).parseFromString("","text/html")}catch(E){}return function(){function E(g){this.nodes="string"===typeof g?this.parseMarkup(g):g}E.filterUserAttributes=function(g){t(g,function(y,c){var q=!0;-1===E.allowedAttributes.indexOf(c)&&(q=!1);-1!==["background","dynsrc","href","lowsrc","src"].indexOf(c)&&(q=H(y)&&E.allowedReferences.some(function(c){return 0===
y.indexOf(c)}));q||(D("Highcharts warning: Invalid attribute '"+c+"' in config"),delete g[c])});return g};E.setElementHTML=function(g,y){g.innerHTML="";y&&(new E(y)).addToDOM(g)};E.prototype.addToDOM=function(g){function y(c,g){var n;C(c).forEach(function(c){var q=c.tagName,A=c.textContent?f.doc.createTextNode(c.textContent):void 0;if(q)if("#text"===q)var m=A;else if(-1!==E.allowedTags.indexOf(q)){q=f.doc.createElementNS("svg"===q?k:g.namespaceURI||k,q);var r=c.attributes||{};t(c,function(e,h){"tagName"!==
h&&"attributes"!==h&&"children"!==h&&"textContent"!==h&&(r[h]=e)});x(q,E.filterUserAttributes(r));A&&q.appendChild(A);y(c.children||[],q);m=q}else D("Highcharts warning: Invalid tagName '"+q+"' in config");m&&g.appendChild(m);n=m});return n}return y(this.nodes,g)};E.prototype.parseMarkup=function(g){var y=[];if(l)g=(new DOMParser).parseFromString(g,"text/html");else{var c=B("div");c.innerHTML=g;g={body:c}}var q=function(c,g){var n=c.nodeName.toLowerCase(),A={tagName:n};if("#text"===n){n=c.textContent||
"";if(/^[\s]*$/.test(n))return;A.textContent=n}if(n=c.attributes){var m={};[].forEach.call(n,function(e){m[e.name]=e.value});A.attributes=m}if(c.childNodes.length){var r=[];[].forEach.call(c.childNodes,function(e){q(e,r)});r.length&&(A.children=r)}g.push(A)};[].forEach.call(g.body.childNodes,function(c){return q(c,y)});c&&G(c);return y};E.allowedTags="a b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text thead tbody tspan td th tr ul #text".split(" ");
E.allowedAttributes="aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style result rowspan summary target tabindex text-align textAnchor textLength type valign width x x1 xy y y1 y2 zIndex".split(" ");
E.allowedReferences="https:// http:// mailto: / ../ ./ #".split(" ");return E}()});P(k,"Core/Color/Color.js",[k["Core/Globals.js"],k["Core/Utilities.js"]],function(f,d){var k=d.isNumber,x=d.merge,B=d.pInt;"";d=function(){function d(D){this.parsers=[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(d){return[B(d[1]),B(d[2]),B(d[3]),parseFloat(d[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(d){return[B(d[1]),
B(d[2]),B(d[3]),1]}}];this.rgba=[];if(f.Color!==d)return new f.Color(D);if(!(this instanceof d))return new d(D);this.init(D)}d.parse=function(f){return new d(f)};d.prototype.init=function(f){var k,t;if((this.input=f=d.names[f&&f.toLowerCase?f.toLowerCase():""]||f)&&f.stops)this.stops=f.stops.map(function(l){return new d(l[1])});else{if(f&&f.charAt&&"#"===f.charAt()){var C=f.length;f=parseInt(f.substr(1),16);7===C?k=[(f&16711680)>>16,(f&65280)>>8,f&255,1]:4===C&&(k=[(f&3840)>>4|(f&3840)>>8,(f&240)>>
4|f&240,(f&15)<<4|f&15,1])}if(!k)for(t=this.parsers.length;t--&&!k;){var l=this.parsers[t];(C=l.regex.exec(f))&&(k=l.parse(C))}}this.rgba=k||[]};d.prototype.get=function(d){var f=this.input,t=this.rgba;if("undefined"!==typeof this.stops){var C=x(f);C.stops=[].concat(C.stops);this.stops.forEach(function(l,E){C.stops[E]=[C.stops[E][0],l.get(d)]})}else C=t&&k(t[0])?"rgb"===d||!d&&1===t[3]?"rgb("+t[0]+","+t[1]+","+t[2]+")":"a"===d?t[3]:"rgba("+t.join(",")+")":f;return C};d.prototype.brighten=function(d){var f,
t=this.rgba;if(this.stops)this.stops.forEach(function(C){C.brighten(d)});else if(k(d)&&0!==d)for(f=0;3>f;f++)t[f]+=B(255*d),0>t[f]&&(t[f]=0),255<t[f]&&(t[f]=255);return this};d.prototype.setOpacity=function(d){this.rgba[3]=d;return this};d.prototype.tweenTo=function(d,f){var t=this.rgba,C=d.rgba;C.length&&t&&t.length?(d=1!==C[3]||1!==t[3],f=(d?"rgba(":"rgb(")+Math.round(C[0]+(t[0]-C[0])*(1-f))+","+Math.round(C[1]+(t[1]-C[1])*(1-f))+","+Math.round(C[2]+(t[2]-C[2])*(1-f))+(d?","+(C[3]+(t[3]-C[3])*(1-
f)):"")+")"):f=d.input||"none";return f};d.names={white:"#ffffff",black:"#000000"};return d}();f.Color=d;f.color=d.parse;return d});P(k,"Core/Color/Palette.js",[],function(){return{colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),backgroundColor:"#ffffff",neutralColor100:"#000000",neutralColor80:"#333333",neutralColor60:"#666666",neutralColor40:"#999999",neutralColor20:"#cccccc",neutralColor10:"#e6e6e6",neutralColor5:"#f2f2f2",neutralColor3:"#f7f7f7",
highlightColor100:"#003399",highlightColor80:"#335cad",highlightColor60:"#6685c2",highlightColor20:"#ccd6eb",highlightColor10:"#e6ebf5",indicatorPositiveLine:"#06b535",indicatorNegativeLine:"#f21313"}});P(k,"Core/Animation/Fx.js",[k["Core/Globals.js"],k["Core/Utilities.js"]],function(f,d){var k=f.win,x=d.isNumber,B=d.objectEach;d=function(){function d(d,f,t){this.pos=NaN;this.options=f;this.elem=d;this.prop=t}d.prototype.dSetter=function(){var d=this.paths,f=d&&d[0];d=d&&d[1];var t=[],C=this.now||
0;if(1!==C&&f&&d)if(f.length===d.length&&1>C)for(var l=0;l<d.length;l++){for(var E=f[l],g=d[l],y=[],c=0;c<g.length;c++){var q=E[c],n=g[c];x(q)&&x(n)&&("A"!==g[0]||4!==c&&5!==c)?y[c]=q+C*(n-q):y[c]=n}t.push(y)}else t=d;else t=this.toD||[];this.elem.attr("d",t,void 0,!0)};d.prototype.update=function(){var d=this.elem,f=this.prop,t=this.now,C=this.options.step;if(this[f+"Setter"])this[f+"Setter"]();else d.attr?d.element&&d.attr(f,t,null,!0):d.style[f]=t+this.unit;C&&C.call(d,t,this)};d.prototype.run=
function(f,H,t){var C=this,l=C.options,E=function(c){return E.stopped?!1:C.step(c)},g=k.requestAnimationFrame||function(c){setTimeout(c,13)},y=function(){for(var c=0;c<d.timers.length;c++)d.timers[c]()||d.timers.splice(c--,1);d.timers.length&&g(y)};f!==H||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=f,this.end=H,this.unit=t,this.now=this.start,this.pos=0,E.elem=this.elem,E.prop=this.prop,E()&&1===d.timers.push(E)&&g(y)):(delete l.curAnim[this.prop],l.complete&&0===Object.keys(l.curAnim).length&&
l.complete.call(this.elem))};d.prototype.step=function(d){var f=+new Date,t=this.options,C=this.elem,l=t.complete,E=t.duration,g=t.curAnim;if(C.attr&&!C.element)d=!1;else if(d||f>=E+this.startTime){this.now=this.end;this.pos=1;this.update();var y=g[this.prop]=!0;B(g,function(c){!0!==c&&(y=!1)});y&&l&&l.call(C);d=!1}else this.pos=t.easing((f-this.startTime)/E),this.now=this.start+(this.end-this.start)*this.pos,this.update(),d=!0;return d};d.prototype.initPath=function(d,f,t){function C(c,g){for(;c.length<
A;){var m=c[0],n=g[A-c.length];n&&"M"===m[0]&&(c[0]="C"===n[0]?["C",m[1],m[2],m[1],m[2],m[1],m[2]]:["L",m[1],m[2]]);c.unshift(m);y&&c.push(c[c.length-1])}}function l(g,n){for(;g.length<A;)if(n=g[g.length/c-1].slice(),"C"===n[0]&&(n[1]=n[5],n[2]=n[6]),y){var m=g[g.length/c].slice();g.splice(g.length/2,0,n,m)}else g.push(n)}var E=d.startX,g=d.endX;f=f&&f.slice();t=t.slice();var y=d.isArea,c=y?2:1;if(!f)return[t,t];if(E&&g){for(d=0;d<E.length;d++)if(E[d]===g[0]){var q=d;break}else if(E[0]===g[g.length-
E.length+d]){q=d;var n=!0;break}else if(E[E.length-1]===g[g.length-E.length+d]){q=E.length-d;break}"undefined"===typeof q&&(f=[])}if(f.length&&x(q)){var A=t.length+q*c;n?(C(f,t),l(t,f)):(C(t,f),l(f,t))}return[f,t]};d.prototype.fillSetter=function(){d.prototype.strokeSetter.apply(this,arguments)};d.prototype.strokeSetter=function(){this.elem.attr(this.prop,f.color(this.start).tweenTo(f.color(this.end),this.pos),null,!0)};d.timers=[];return d}();f.Fx=d;f.timers=d.timers;return d});P(k,"Core/Animation/AnimationUtilities.js",
[k["Core/Animation/Fx.js"],k["Core/Globals.js"],k["Core/Utilities.js"]],function(f,d,k){var x=k.defined,B=k.getStyle,S=k.isArray,D=k.isNumber,H=k.isObject,t=k.merge,C=k.objectEach,l=k.pick;k=d.setAnimation=function(c,g){g.renderer.globalAnimation=l(c,g.options.chart.animation,!0)};var E=d.animObject=function(c){return H(c)?t({duration:500,defer:0},c):{duration:c?500:0,defer:0}},g=d.getDeferredAnimation=function(c,g,n){var q=E(g),y=0,l=0;(n?[n]:c.series).forEach(function(c){c=E(c.options.animation);
y=g&&x(g.defer)?q.defer:Math.max(y,c.duration+c.defer);l=Math.min(q.duration,c.duration)});c.renderer.forExport&&(y=0);return{defer:Math.max(0,y-l),duration:Math.min(y,l)}},y=d.stop=function(c,g){for(var n=f.timers.length;n--;)f.timers[n].elem!==c||g&&g!==f.timers[n].prop||(f.timers[n].stopped=!0)};return{animate:function(c,g,n){var q,l="",d,m;if(!H(n)){var r=arguments;n={duration:r[2],easing:r[3],complete:r[4]}}D(n.duration)||(n.duration=400);n.easing="function"===typeof n.easing?n.easing:Math[n.easing]||
Math.easeInOutSine;n.curAnim=t(g);C(g,function(e,h){y(c,h);m=new f(c,n,h);d=null;"d"===h&&S(g.d)?(m.paths=m.initPath(c,c.pathArray,g.d),m.toD=g.d,q=0,d=1):c.attr?q=c.attr(h):(q=parseFloat(B(c,h))||0,"opacity"!==h&&(l="px"));d||(d=e);d&&d.match&&d.match("px")&&(d=d.replace(/px/g,""));m.run(q,d,l)})},animObject:E,getDeferredAnimation:g,setAnimation:k,stop:y}});P(k,"Core/Renderer/SVG/SVGElement.js",[k["Core/Animation/AnimationUtilities.js"],k["Core/Renderer/HTML/AST.js"],k["Core/Color/Color.js"],k["Core/Globals.js"],
k["Core/Color/Palette.js"],k["Core/Utilities.js"]],function(f,d,k,x,B,G){var D=f.animate,H=f.animObject,t=f.stop,C=x.deg2rad,l=x.doc,E=x.hasTouch,g=x.noop,y=x.svg,c=x.SVG_NS,q=x.win,n=G.attr,A=G.createElement,M=G.css,z=G.defined,m=G.erase,r=G.extend,e=G.fireEvent,h=G.isArray,a=G.isFunction,b=G.isNumber,w=G.isString,J=G.merge,O=G.objectEach,F=G.pick,N=G.pInt,R=G.syncTimeout,Q=G.uniqueKey;"";f=function(){function f(){this.height=this.element=void 0;this.opacity=1;this.renderer=void 0;this.SVG_NS=c;
this.symbolCustomAttribs="x y width height r start end innerR anchorX anchorY rounded".split(" ");this.width=void 0}f.prototype._defaultGetter=function(a){a=F(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a};f.prototype._defaultSetter=function(a,b,p){p.setAttribute(b,a)};f.prototype.add=function(a){var b=this.renderer,p=this.element;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;"undefined"!==typeof this.textStr&&
"text"===this.element.nodeName&&b.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)var e=this.zIndexSetter();e||(a?a.element:b.box).appendChild(p);if(this.onAdd)this.onAdd();return this};f.prototype.addClass=function(a,b){var p=b?"":this.attr("class")||"";a=(a||"").split(/ /g).reduce(function(a,b){-1===p.indexOf(b)&&a.push(b);return a},p?[p]:[]).join(" ");a!==p&&this.attr("class",a);return this};f.prototype.afterSetters=function(){this.doTransform&&(this.updateTransform(),this.doTransform=
!1)};f.prototype.align=function(a,b,p){var e,v={};var c=this.renderer;var u=c.alignedObjects;var h,I;if(a){if(this.alignOptions=a,this.alignByTranslate=b,!p||w(p))this.alignTo=e=p||"renderer",m(u,this),u.push(this),p=void 0}else a=this.alignOptions,b=this.alignByTranslate,e=this.alignTo;p=F(p,c[e],c);e=a.align;c=a.verticalAlign;u=(p.x||0)+(a.x||0);var g=(p.y||0)+(a.y||0);"right"===e?h=1:"center"===e&&(h=2);h&&(u+=(p.width-(a.width||0))/h);v[b?"translateX":"x"]=Math.round(u);"bottom"===c?I=1:"middle"===
c&&(I=2);I&&(g+=(p.height-(a.height||0))/I);v[b?"translateY":"y"]=Math.round(g);this[this.placed?"animate":"attr"](v);this.placed=!0;this.alignAttr=v;return this};f.prototype.alignSetter=function(a){var b={left:"start",center:"middle",right:"end"};b[a]&&(this.alignValue=a,this.element.setAttribute("text-anchor",b[a]))};f.prototype.animate=function(a,b,p){var e=this,v=H(F(b,this.renderer.globalAnimation,!0));b=v.defer;F(l.hidden,l.msHidden,l.webkitHidden,!1)&&(v.duration=0);0!==v.duration?(p&&(v.complete=
p),R(function(){e.element&&D(e,a,v)},b)):(this.attr(a,void 0,p),O(a,function(a,b){v.step&&v.step.call(this,a,{prop:b,pos:1,elem:this})},this));return this};f.prototype.applyTextOutline=function(a){var b=this.element;-1!==a.indexOf("contrast")&&(a=a.replace(/contrast/g,this.renderer.getContrast(b.style.fill)));var p=a.split(" ");a=p[p.length-1];if((p=p[0])&&"none"!==p&&x.svg){this.fakeTS=!0;this.ySetter=this.xSetter;p=p.replace(/(^[\d\.]+)(.*?)$/g,function(a,b,p){return 2*Number(b)+p});this.removeTextOutline();
var e=l.createElementNS(c,"tspan");n(e,{"class":"highcharts-text-outline",fill:a,stroke:a,"stroke-width":p,"stroke-linejoin":"round"});[].forEach.call(b.childNodes,function(a){var b=a.cloneNode(!0);b.removeAttribute&&["fill","stroke","stroke-width","stroke"].forEach(function(a){return b.removeAttribute(a)});e.appendChild(b)});a=l.createElementNS(c,"tspan");a.textContent="\u200b";n(a,{x:b.getAttribute("x"),y:b.getAttribute("y")});e.appendChild(a);b.insertBefore(e,b.firstChild)}};f.prototype.attr=function(a,
b,p,e){var K=this.element,v,u=this,c,h,g=this.symbolCustomAttribs;if("string"===typeof a&&"undefined"!==typeof b){var L=a;a={};a[L]=b}"string"===typeof a?u=(this[a+"Getter"]||this._defaultGetter).call(this,a,K):(O(a,function(b,p){c=!1;e||t(this,p);this.symbolName&&-1!==g.indexOf(p)&&(v||(this.symbolAttr(a),v=!0),c=!0);!this.rotation||"x"!==p&&"y"!==p||(this.doTransform=!0);c||(h=this[p+"Setter"]||this._defaultSetter,h.call(this,b,p,K),!this.styledMode&&this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(p)&&
this.updateShadows(p,b,h))},this),this.afterSetters());p&&p.call(this);return u};f.prototype.clip=function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")};f.prototype.crisp=function(a,b){b=b||a.strokeWidth||0;var p=Math.round(b)%2/2;a.x=Math.floor(a.x||this.x||0)+p;a.y=Math.floor(a.y||this.y||0)+p;a.width=Math.floor((a.width||this.width||0)-2*p);a.height=Math.floor((a.height||this.height||0)-2*p);z(a.strokeWidth)&&(a.strokeWidth=b);return a};f.prototype.complexColor=
function(a,b,p){var K=this.renderer,v,c,u,g,I,m,L,w,n,r,q=[],F;e(this.renderer,"complexColor",{args:arguments},function(){a.radialGradient?c="radialGradient":a.linearGradient&&(c="linearGradient");if(c){u=a[c];I=K.gradients;m=a.stops;n=p.radialReference;h(u)&&(a[c]=u={x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientUnits:"userSpaceOnUse"});"radialGradient"===c&&n&&!z(u.gradientUnits)&&(g=u,u=J(u,K.getRadialAttr(n,g),{gradientUnits:"userSpaceOnUse"}));O(u,function(a,b){"id"!==b&&q.push(b,a)});O(m,function(a){q.push(a)});
q=q.join(",");if(I[q])r=I[q].attr("id");else{u.id=r=Q();var e=I[q]=K.createElement(c).attr(u).add(K.defs);e.radAttr=g;e.stops=[];m.forEach(function(a){0===a[1].indexOf("rgba")?(v=k.parse(a[1]),L=v.get("rgb"),w=v.get("a")):(L=a[1],w=1);a=K.createElement("stop").attr({offset:a[0],"stop-color":L,"stop-opacity":w}).add(e);e.stops.push(a)})}F="url("+K.url+"#"+r+")";p.setAttribute(b,F);p.gradient=q;a.toString=function(){return F}}})};f.prototype.css=function(a){var b=this.styles,p={},e=this.element,c="",
v=!b,u=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);b&&O(a,function(a,u){b&&b[u]!==a&&(p[u]=a,v=!0)});if(v){b&&(a=r(b,p));if(a)if(null===a.width||"auto"===a.width)delete this.textWidth;else if("text"===e.nodeName.toLowerCase()&&a.width)var h=this.textWidth=N(a.width);this.styles=a;h&&!y&&this.renderer.forExport&&delete a.width;if(e.namespaceURI===this.SVG_NS){var g=function(a,b){return"-"+b.toLowerCase()};O(a,function(a,b){-1===u.indexOf(b)&&(c+=b.replace(/([A-Z])/g,g)+":"+
a+";")});c&&n(e,"style",c)}else M(e,a);this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline))}return this};f.prototype.dashstyleSetter=function(a){var b=this["stroke-width"];"inherit"===b&&(b=1);if(a=a&&a.toLowerCase()){var p=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,
"").split(",");for(a=p.length;a--;)p[a]=""+N(p[a])*F(b,NaN);a=p.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}};f.prototype.destroy=function(){var a=this,b=a.element||{},p=a.renderer,e=p.isSVG&&"SPAN"===b.nodeName&&a.parentGroup||void 0,c=b.ownerSVGElement;b.onclick=b.onmouseout=b.onmouseover=b.onmousemove=b.point=null;t(a);if(a.clipPath&&c){var h=a.clipPath;[].forEach.call(c.querySelectorAll("[clip-path],[CLIP-PATH]"),function(a){-1<a.getAttribute("clip-path").indexOf(h.element.id)&&
a.removeAttribute("clip-path")});a.clipPath=h.destroy()}if(a.stops){for(c=0;c<a.stops.length;c++)a.stops[c].destroy();a.stops.length=0;a.stops=void 0}a.safeRemoveChild(b);for(p.styledMode||a.destroyShadows();e&&e.div&&0===e.div.childNodes.length;)b=e.parentGroup,a.safeRemoveChild(e.div),delete e.div,e=b;a.alignTo&&m(p.alignedObjects,a);O(a,function(b,p){a[p]&&a[p].parentGroup===a&&a[p].destroy&&a[p].destroy();delete a[p]})};f.prototype.destroyShadows=function(){(this.shadows||[]).forEach(function(a){this.safeRemoveChild(a)},
this);this.shadows=void 0};f.prototype.destroyTextPath=function(a,b){var p=a.getElementsByTagName("text")[0];if(p){if(p.removeAttribute("dx"),p.removeAttribute("dy"),b.element.setAttribute("id",""),this.textPathWrapper&&p.getElementsByTagName("textPath").length){for(a=this.textPathWrapper.element.childNodes;a.length;)p.appendChild(a[0]);p.removeChild(this.textPathWrapper.element)}}else if(a.getAttribute("dx")||a.getAttribute("dy"))a.removeAttribute("dx"),a.removeAttribute("dy");this.textPathWrapper&&
(this.textPathWrapper=this.textPathWrapper.destroy())};f.prototype.dSetter=function(a,b,p){h(a)&&("string"===typeof a[0]&&(a=this.renderer.pathToSegments(a)),this.pathArray=a,a=a.reduce(function(a,b,p){return b&&b.join?(p?a+" ":"")+b.join(" "):(b||"").toString()},""));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[b]!==a&&(p.setAttribute(b,a),this[b]=a)};f.prototype.fadeOut=function(a){var b=this;b.animate({opacity:0},{duration:F(a,150),complete:function(){b.attr({y:-9999}).hide()}})};f.prototype.fillSetter=
function(a,b,p){"string"===typeof a?p.setAttribute(b,a):a&&this.complexColor(a,b,p)};f.prototype.getBBox=function(b,e){var p,c=this.renderer,h=this.element,g=this.styles,u=this.textStr,m=c.cache,I=c.cacheKeys,v=h.namespaceURI===this.SVG_NS;e=F(e,this.rotation,0);var L=c.styledMode?h&&f.prototype.getStyle.call(h,"font-size"):g&&g.fontSize;if(z(u)){var w=u.toString();-1===w.indexOf("<")&&(w=w.replace(/[0-9]/g,"0"));w+=["",e,L,this.textWidth,g&&g.textOverflow,g&&g.fontWeight].join()}w&&!b&&(p=m[w]);
if(!p){if(v||c.forExport){try{var n=this.fakeTS&&function(a){var b=h.querySelector(".highcharts-text-outline");b&&M(b,{display:a})};a(n)&&n("none");p=h.getBBox?r({},h.getBBox()):{width:h.offsetWidth,height:h.offsetHeight};a(n)&&n("")}catch(da){""}if(!p||0>p.width)p={width:0,height:0}}else p=this.htmlGetBBox();c.isSVG&&(b=p.width,c=p.height,v&&(p.height=c={"11px,17":14,"13px,20":16}[g&&g.fontSize+","+Math.round(c)]||c),e&&(g=e*C,p.width=Math.abs(c*Math.sin(g))+Math.abs(b*Math.cos(g)),p.height=Math.abs(c*
Math.cos(g))+Math.abs(b*Math.sin(g))));if(w&&0<p.height){for(;250<I.length;)delete m[I.shift()];m[w]||I.push(w);m[w]=p}}return p};f.prototype.getStyle=function(a){return q.getComputedStyle(this.element||this,"").getPropertyValue(a)};f.prototype.hasClass=function(a){return-1!==(""+this.attr("class")).split(" ").indexOf(a)};f.prototype.hide=function(a){a?this.attr({y:-9999}):this.attr({visibility:"hidden"});return this};f.prototype.htmlGetBBox=function(){return{height:0,width:0,x:0,y:0}};f.prototype.init=
function(a,b){this.element="span"===b?A(b):l.createElementNS(this.SVG_NS,b);this.renderer=a;e(this,"afterInit")};f.prototype.invert=function(a){this.inverted=a;this.updateTransform();return this};f.prototype.on=function(a,b){var p,e,c=this.element,h;E&&"click"===a?(c.ontouchstart=function(a){p=a.touches[0].clientX;e=a.touches[0].clientY},c.ontouchend=function(a){p&&4<=Math.sqrt(Math.pow(p-a.changedTouches[0].clientX,2)+Math.pow(e-a.changedTouches[0].clientY,2))||b.call(c,a);h=!0;!1!==a.cancelable&&
a.preventDefault()},c.onclick=function(a){h||b.call(c,a)}):c["on"+a]=b;return this};f.prototype.opacitySetter=function(a,b,p){this.opacity=a=Number(Number(a).toFixed(3));p.setAttribute(b,a)};f.prototype.removeClass=function(a){return this.attr("class",(""+this.attr("class")).replace(w(a)?new RegExp("(^| )"+a+"( |$)"):a," ").replace(/ +/g," ").trim())};f.prototype.removeTextOutline=function(){var a=this.element.querySelector("tspan.highcharts-text-outline");a&&this.safeRemoveChild(a)};f.prototype.safeRemoveChild=
function(a){var b=a.parentNode;b&&b.removeChild(a)};f.prototype.setRadialReference=function(a){var b=this.element.gradient&&this.renderer.gradients[this.element.gradient];this.element.radialReference=a;b&&b.radAttr&&b.animate(this.renderer.getRadialAttr(a,b.radAttr));return this};f.prototype.setTextPath=function(a,e){var p=this.element,c=this.text?this.text.element:p,h={textAnchor:"text-anchor"},m=!1,u=this.textPathWrapper,v=!u;e=J(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},
e);var I=d.filterUserAttributes(e.attributes);if(a&&e&&e.enabled){u&&null===u.element.parentNode?(v=!0,u=u.destroy()):u&&this.removeTextOutline.call(u.parentGroup);this.options&&this.options.padding&&(I.dx=-this.options.padding);u||(this.textPathWrapper=u=this.renderer.createElement("textPath"),m=!0);var w=u.element;(e=a.element.getAttribute("id"))||a.element.setAttribute("id",e=Q());if(v)for(c.setAttribute("y",0),b(I.dx)&&c.setAttribute("x",-I.dx),a=[].slice.call(c.childNodes),v=0;v<a.length;v++){var n=
a[v];n.nodeType!==Node.TEXT_NODE&&"tspan"!==n.nodeName||w.appendChild(n)}m&&u&&u.add({element:c});w.setAttributeNS("http://www.w3.org/1999/xlink","href",this.renderer.url+"#"+e);z(I.dy)&&(w.parentNode.setAttribute("dy",I.dy),delete I.dy);z(I.dx)&&(w.parentNode.setAttribute("dx",I.dx),delete I.dx);O(I,function(a,b){w.setAttribute(h[b]||b,a)});p.removeAttribute("transform");this.removeTextOutline.call(u);this.text&&!this.renderer.styledMode&&this.attr({fill:"none","stroke-width":0});this.applyTextOutline=
this.updateTransform=g}else u&&(delete this.updateTransform,delete this.applyTextOutline,this.destroyTextPath(p,a),this.updateTransform(),this.options&&this.options.rotation&&this.applyTextOutline(this.options.style.textOutline));return this};f.prototype.shadow=function(a,b,p){var e=[],c=this.element,h=!1,u=this.oldShadowOptions;var g={color:B.neutralColor100,offsetX:1,offsetY:1,opacity:.15,width:3};var I;!0===a?I=g:"object"===typeof a&&(I=r(g,a));I&&(I&&u&&O(I,function(a,b){a!==u[b]&&(h=!0)}),h&&
this.destroyShadows(),this.oldShadowOptions=I);if(!I)this.destroyShadows();else if(!this.shadows){var m=I.opacity/I.width;var v=this.parentInverted?"translate(-1,-1)":"translate("+I.offsetX+", "+I.offsetY+")";for(g=1;g<=I.width;g++){var w=c.cloneNode(!1);var L=2*I.width+1-2*g;n(w,{stroke:a.color||B.neutralColor100,"stroke-opacity":m*g,"stroke-width":L,transform:v,fill:"none"});w.setAttribute("class",(w.getAttribute("class")||"")+" highcharts-shadow");p&&(n(w,"height",Math.max(n(w,"height")-L,0)),
w.cutHeight=L);b?b.element.appendChild(w):c.parentNode&&c.parentNode.insertBefore(w,c);e.push(w)}this.shadows=e}return this};f.prototype.show=function(a){return this.attr({visibility:a?"inherit":"visible"})};f.prototype.strokeSetter=function(a,b,p){this[b]=a;this.stroke&&this["stroke-width"]?(f.prototype.fillSetter.call(this,this.stroke,"stroke",p),p.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===b&&0===a&&this.hasStroke?(p.removeAttribute("stroke"),this.hasStroke=
!1):this.renderer.styledMode&&this["stroke-width"]&&(p.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0)};f.prototype.strokeWidth=function(){if(!this.renderer.styledMode)return this["stroke-width"]||0;var a=this.getStyle("stroke-width"),b=0;if(a.indexOf("px")===a.length-2)b=N(a);else if(""!==a){var p=l.createElementNS(c,"rect");n(p,{width:a,"stroke-width":0});this.element.parentNode.appendChild(p);b=p.getBBox().width;p.parentNode.removeChild(p)}return b};f.prototype.symbolAttr=
function(a){var b=this;"x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(p){b[p]=F(a[p],b[p])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})};f.prototype.textSetter=function(a){a!==this.textStr&&(delete this.textPxLength,this.textStr=a,this.added&&this.renderer.buildText(this))};f.prototype.titleSetter=function(a){var b=this.element,p=b.getElementsByTagName("title")[0]||l.createElementNS(this.SVG_NS,"title");b.insertBefore?b.insertBefore(p,
b.firstChild):b.appendChild(p);p.textContent=String(F(a,"")).replace(/<[^>]*>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">")};f.prototype.toFront=function(){var a=this.element;a.parentNode.appendChild(a);return this};f.prototype.translate=function(a,b){return this.attr({translateX:a,translateY:b})};f.prototype.updateShadows=function(a,b,p){var e=this.shadows;if(e)for(var c=e.length;c--;)p.call(e[c],"height"===a?Math.max(b-(e[c].cutHeight||0),0):"d"===a?this.d:b,a,e[c])};f.prototype.updateTransform=
function(){var a=this.translateX||0,b=this.translateY||0,p=this.scaleX,e=this.scaleY,c=this.inverted,h=this.rotation,u=this.matrix,g=this.element;c&&(a+=this.width,b+=this.height);a=["translate("+a+","+b+")"];z(u)&&a.push("matrix("+u.join(",")+")");c?a.push("rotate(90) scale(-1,1)"):h&&a.push("rotate("+h+" "+F(this.rotationOriginX,g.getAttribute("x"),0)+" "+F(this.rotationOriginY,g.getAttribute("y")||0)+")");(z(p)||z(e))&&a.push("scale("+F(p,1)+" "+F(e,1)+")");a.length&&g.setAttribute("transform",
a.join(" "))};f.prototype.visibilitySetter=function(a,b,p){"inherit"===a?p.removeAttribute(b):this[b]!==a&&p.setAttribute(b,a);this[b]=a};f.prototype.xGetter=function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)};f.prototype.zIndexSetter=function(a,b){var p=this.renderer,e=this.parentGroup,c=(e||p).element||p.box,h=this.element,u=!1;p=c===p.box;var g=this.added;var I;z(a)?(h.setAttribute("data-z-index",a),a=+a,this[b]===a&&(g=!1)):z(this[b])&&
h.removeAttribute("data-z-index");this[b]=a;if(g){(a=this.zIndex)&&e&&(e.handleZ=!0);b=c.childNodes;for(I=b.length-1;0<=I&&!u;I--){e=b[I];g=e.getAttribute("data-z-index");var m=!z(g);if(e!==h)if(0>a&&m&&!p&&!I)c.insertBefore(h,b[I]),u=!0;else if(N(g)<=a||m&&(!z(a)||0<=a))c.insertBefore(h,b[I+1]||null),u=!0}u||(c.insertBefore(h,b[p?3:0]||null),u=!0)}return u};return f}();f.prototype["stroke-widthSetter"]=f.prototype.strokeSetter;f.prototype.yGetter=f.prototype.xGetter;f.prototype.matrixSetter=f.prototype.rotationOriginXSetter=
f.prototype.rotationOriginYSetter=f.prototype.rotationSetter=f.prototype.scaleXSetter=f.prototype.scaleYSetter=f.prototype.translateXSetter=f.prototype.translateYSetter=f.prototype.verticalAlignSetter=function(a,b){this[b]=a;this.doTransform=!0};x.SVGElement=f;return x.SVGElement});P(k,"Core/Renderer/SVG/SVGLabel.js",[k["Core/Renderer/SVG/SVGElement.js"],k["Core/Utilities.js"]],function(f,d){function k(f,d){D(f)?f!==this[d]&&(this[d]=f,this.updateTextPadding()):this[d]=void 0}var x=this&&this.__extends||
function(){var f=function(d,g){f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,c){g.__proto__=c}||function(g,c){for(var q in c)c.hasOwnProperty(q)&&(g[q]=c[q])};return f(d,g)};return function(d,g){function y(){this.constructor=d}f(d,g);d.prototype=null===g?Object.create(g):(y.prototype=g.prototype,new y)}}(),B=d.defined,G=d.extend,D=d.isNumber,H=d.merge,t=d.pick,C=d.removeEvent;return function(d){function l(g,f,c,q,n,A,M,z,m,r){var e=d.call(this)||this;e.paddingSetter=k;e.paddingLeftSetter=
k;e.paddingRightSetter=k;e.init(g,"g");e.textStr=f;e.x=c;e.y=q;e.anchorX=A;e.anchorY=M;e.baseline=m;e.className=r;"button"!==r&&e.addClass("highcharts-label");r&&e.addClass("highcharts-"+r);e.text=g.text("",0,0,z).attr({zIndex:1});if("string"===typeof n){var h=/^url\((.*?)\)$/.test(n);if(e.renderer.symbols[n]||h)e.symbolKey=n}e.bBox=l.emptyBBox;e.padding=3;e.baselineOffset=0;e.needsBox=g.styledMode||h;e.deferredAttr={};e.alignFactor=0;return e}x(l,d);l.prototype.alignSetter=function(g){g={left:0,
center:.5,right:1}[g];g!==this.alignFactor&&(this.alignFactor=g,this.bBox&&D(this.xSetting)&&this.attr({x:this.xSetting}))};l.prototype.anchorXSetter=function(g,l){this.anchorX=g;this.boxAttr(l,Math.round(g)-this.getCrispAdjust()-this.xSetting)};l.prototype.anchorYSetter=function(g,l){this.anchorY=g;this.boxAttr(l,g-this.ySetting)};l.prototype.boxAttr=function(g,l){this.box?this.box.attr(g,l):this.deferredAttr[g]=l};l.prototype.css=function(g){if(g){var d={};g=H(g);l.textProps.forEach(function(c){"undefined"!==
typeof g[c]&&(d[c]=g[c],delete g[c])});this.text.css(d);var c="width"in d;"fontSize"in d||"fontWeight"in d?this.updateTextPadding():c&&this.updateBoxSize()}return f.prototype.css.call(this,g)};l.prototype.destroy=function(){C(this.element,"mouseenter");C(this.element,"mouseleave");this.text&&this.text.destroy();this.box&&(this.box=this.box.destroy());f.prototype.destroy.call(this)};l.prototype.fillSetter=function(g,l){g&&(this.needsBox=!0);this.fill=g;this.boxAttr(l,g)};l.prototype.getBBox=function(){var g=
this.bBox,l=this.padding,c=t(this.paddingLeft,l);return{width:this.width,height:this.height,x:g.x-c,y:g.y-l}};l.prototype.getCrispAdjust=function(){return this.renderer.styledMode&&this.box?this.box.strokeWidth()%2/2:(this["stroke-width"]?parseInt(this["stroke-width"],10):0)%2/2};l.prototype.heightSetter=function(g){this.heightSetting=g};l.prototype.on=function(g,l){var c=this,q=c.text,n=q&&"SPAN"===q.element.tagName?q:void 0;if(n){var d=function(q){("mouseenter"===g||"mouseleave"===g)&&q.relatedTarget instanceof
Element&&(c.element.compareDocumentPosition(q.relatedTarget)&Node.DOCUMENT_POSITION_CONTAINED_BY||n.element.compareDocumentPosition(q.relatedTarget)&Node.DOCUMENT_POSITION_CONTAINED_BY)||l.call(c.element,q)};n.on(g,d)}f.prototype.on.call(c,g,d||l);return c};l.prototype.onAdd=function(){var g=this.textStr;this.text.add(this);this.attr({text:B(g)?g:"",x:this.x,y:this.y});this.box&&B(this.anchorX)&&this.attr({anchorX:this.anchorX,anchorY:this.anchorY})};l.prototype.rSetter=function(g,l){this.boxAttr(l,
g)};l.prototype.shadow=function(g){g&&!this.renderer.styledMode&&(this.updateBoxSize(),this.box&&this.box.shadow(g));return this};l.prototype.strokeSetter=function(g,l){this.stroke=g;this.boxAttr(l,g)};l.prototype["stroke-widthSetter"]=function(g,l){g&&(this.needsBox=!0);this["stroke-width"]=g;this.boxAttr(l,g)};l.prototype["text-alignSetter"]=function(g){this.textAlign=g};l.prototype.textSetter=function(g){"undefined"!==typeof g&&this.text.attr({text:g});this.updateTextPadding()};l.prototype.updateBoxSize=
function(){var g=this.text.element.style,d={},c=this.padding,q=this.bBox=D(this.widthSetting)&&D(this.heightSetting)&&!this.textAlign||!B(this.text.textStr)?l.emptyBBox:this.text.getBBox();this.width=this.getPaddedWidth();this.height=(this.heightSetting||q.height||0)+2*c;this.baselineOffset=c+Math.min(this.renderer.fontMetrics(g&&g.fontSize,this.text).b,q.height||Infinity);this.needsBox&&(this.box||(g=this.box=this.symbolKey?this.renderer.symbol(this.symbolKey):this.renderer.rect(),g.addClass(("button"===
this.className?"":"highcharts-label-box")+(this.className?" highcharts-"+this.className+"-box":"")),g.add(this)),g=this.getCrispAdjust(),d.x=g,d.y=(this.baseline?-this.baselineOffset:0)+g,d.width=Math.round(this.width),d.height=Math.round(this.height),this.box.attr(G(d,this.deferredAttr)),this.deferredAttr={})};l.prototype.updateTextPadding=function(){var g=this.text;this.updateBoxSize();var l=this.baseline?0:this.baselineOffset,c=t(this.paddingLeft,this.padding);B(this.widthSetting)&&this.bBox&&
("center"===this.textAlign||"right"===this.textAlign)&&(c+={center:.5,right:1}[this.textAlign]*(this.widthSetting-this.bBox.width));if(c!==g.x||l!==g.y)g.attr("x",c),g.hasBoxWidthChanged&&(this.bBox=g.getBBox(!0)),"undefined"!==typeof l&&g.attr("y",l);g.x=c;g.y=l};l.prototype.widthSetter=function(g){this.widthSetting=D(g)?g:void 0};l.prototype.getPaddedWidth=function(){var g=this.padding,l=t(this.paddingLeft,g);g=t(this.paddingRight,g);return(this.widthSetting||this.bBox.width||0)+l+g};l.prototype.xSetter=
function(g){this.x=g;this.alignFactor&&(g-=this.alignFactor*this.getPaddedWidth(),this["forceAnimate:x"]=!0);this.xSetting=Math.round(g);this.attr("translateX",this.xSetting)};l.prototype.ySetter=function(g){this.ySetting=this.y=Math.round(g);this.attr("translateY",this.ySetting)};l.emptyBBox={width:0,height:0,x:0,y:0};l.textProps="color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");return l}(f)});P(k,"Core/Renderer/SVG/TextBuilder.js",
[k["Core/Globals.js"],k["Core/Utilities.js"],k["Core/Renderer/HTML/AST.js"]],function(f,d,k){var x=f.doc,B=f.SVG_NS,S=d.attr,D=d.isString,H=d.objectEach,t=d.pick;return function(){function d(l){var d=l.styles;this.renderer=l.renderer;this.svgElement=l;this.width=l.textWidth;this.textLineHeight=d&&d.lineHeight;this.textOutline=d&&d.textOutline;this.ellipsis=!(!d||"ellipsis"!==d.textOverflow);this.noWrap=!(!d||"nowrap"!==d.whiteSpace);this.fontSize=d&&d.fontSize}d.prototype.buildSVG=function(){var l=
this.svgElement,d=l.element,g=l.renderer,f=t(l.textStr,"").toString(),c=-1!==f.indexOf("<"),q=d.childNodes,n=q.length;g=this.width&&!l.added&&g.box;var A=/<br.*?>/g;var M=[f,this.ellipsis,this.noWrap,this.textLineHeight,this.textOutline,this.fontSize,this.width].join();if(M!==l.textCache){l.textCache=M;for(delete l.actualWidth;n--;)d.removeChild(q[n]);c||this.ellipsis||this.width||-1!==f.indexOf(" ")&&(!this.noWrap||A.test(f))?""!==f&&(g&&g.appendChild(d),f=new k(f),this.modifyTree(f.nodes),f.addToDOM(l.element),
this.modifyDOM(),this.ellipsis&&-1!==(d.textContent||"").indexOf("\u2026")&&l.attr("title",this.unescapeEntities(l.textStr||"",["&lt;","&gt;"])),g&&g.removeChild(d)):d.appendChild(x.createTextNode(this.unescapeEntities(f)));D(this.textOutline)&&l.applyTextOutline&&l.applyTextOutline(this.textOutline)}};d.prototype.modifyDOM=function(){var d=this,f=this.svgElement,g=S(f.element,"x");[].forEach.call(f.element.querySelectorAll("tspan.highcharts-br"),function(c){c.nextSibling&&c.previousSibling&&S(c,
{dy:d.getLineHeight(c.nextSibling),x:g})});var y=this.width||0;if(y){var c=function(c,q){var n=c.textContent||"",l=n.replace(/([^\^])-/g,"$1- ").split(" "),m=!d.noWrap&&(1<l.length||1<f.element.childNodes.length),r=d.getLineHeight(q),e=0,h=f.actualWidth;if(d.ellipsis)n&&d.truncate(c,n,void 0,0,Math.max(0,y-parseInt(d.fontSize||12,10)),function(a,b){return a.substring(0,b)+"\u2026"});else if(m){n=[];for(m=[];q.firstChild&&q.firstChild!==c;)m.push(q.firstChild),q.removeChild(q.firstChild);for(;l.length;)l.length&&
!d.noWrap&&0<e&&(n.push(c.textContent||""),c.textContent=l.join(" ").replace(/- /g,"-")),d.truncate(c,void 0,l,0===e?h||0:0,y,function(a,b){return l.slice(0,b).join(" ").replace(/- /g,"-")}),h=f.actualWidth,e++;m.forEach(function(a){q.insertBefore(a,c)});n.forEach(function(a){q.insertBefore(x.createTextNode(a),c);a=x.createElementNS(B,"tspan");a.textContent="\u200b";S(a,{dy:r,x:g});q.insertBefore(a,c)})}},q=function(g){[].slice.call(g.childNodes).forEach(function(n){n.nodeType===Node.TEXT_NODE?c(n,
g):(-1!==n.className.baseVal.indexOf("highcharts-br")&&(f.actualWidth=0),q(n))})};q(f.element)}};d.prototype.getLineHeight=function(d){var l;d=d.nodeType===Node.TEXT_NODE?d.parentElement:d;this.renderer.styledMode||(l=d&&/(px|em)$/.test(d.style.fontSize)?d.style.fontSize:this.fontSize||this.renderer.style.fontSize||12);return this.textLineHeight?parseInt(this.textLineHeight.toString(),10):this.renderer.fontMetrics(l,d||this.svgElement.element).h};d.prototype.modifyTree=function(d){var l=this,g=function(f,
c){var q=f.tagName,n=l.renderer.styledMode,A=f.attributes||{};if("b"===q||"strong"===q)n?A["class"]="highcharts-strong":A.style="font-weight:bold;"+(A.style||"");else if("i"===q||"em"===q)n?A["class"]="highcharts-emphasized":A.style="font-style:italic;"+(A.style||"");D(A.style)&&(A.style=A.style.replace(/(;| |^)color([ :])/,"$1fill$2"));"br"===q&&(A["class"]="highcharts-br",f.textContent="\u200b",(c=d[c+1])&&c.textContent&&(c.textContent=c.textContent.replace(/^ +/gm,"")));"#text"!==q&&"a"!==q&&(f.tagName=
"tspan");f.attributes=A;f.children&&f.children.filter(function(c){return"#text"!==c.tagName}).forEach(g)};for(d.forEach(g);d[0]&&"tspan"===d[0].tagName&&!d[0].children;)d.splice(0,1)};d.prototype.truncate=function(d,f,g,y,c,q){var n=this.svgElement,l=n.renderer,M=n.rotation,z=[],m=g?1:0,r=(f||g||"").length,e=r,h,a=function(a,b){b=b||a;var e=d.parentNode;if(e&&"undefined"===typeof z[b])if(e.getSubStringLength)try{z[b]=y+e.getSubStringLength(0,g?b+1:b)}catch(F){""}else l.getSpanWidth&&(d.textContent=
q(f||g,a),z[b]=y+l.getSpanWidth(n,d));return z[b]};n.rotation=0;var b=a(d.textContent.length);if(y+b>c){for(;m<=r;)e=Math.ceil((m+r)/2),g&&(h=q(g,e)),b=a(e,h&&h.length-1),m===r?m=r+1:b>c?r=e-1:m=e;0===r?d.textContent="":f&&r===f.length-1||(d.textContent=h||q(f||g,e))}g&&g.splice(0,e);n.actualWidth=b;n.rotation=M};d.prototype.unescapeEntities=function(d,f){H(this.renderer.escapes,function(g,l){f&&-1!==f.indexOf(g)||(d=d.toString().replace(new RegExp(g,"g"),l))});return d};return d}()});P(k,"Core/Renderer/SVG/SVGRenderer.js",
[k["Core/Color/Color.js"],k["Core/Globals.js"],k["Core/Color/Palette.js"],k["Core/Renderer/SVG/SVGElement.js"],k["Core/Renderer/SVG/SVGLabel.js"],k["Core/Renderer/HTML/AST.js"],k["Core/Renderer/SVG/TextBuilder.js"],k["Core/Utilities.js"]],function(f,d,k,x,B,G,D,H){var t=H.addEvent,C=H.attr,l=H.createElement,E=H.css,g=H.defined,y=H.destroyObjectProperties,c=H.extend,q=H.isArray,n=H.isNumber,A=H.isObject,M=H.isString,z=H.merge,m=H.pick,r=H.pInt,e=H.uniqueKey,h=d.charts,a=d.deg2rad,b=d.doc,w=d.isFirefox,
J=d.isMS,O=d.isWebKit;H=d.noop;var F=d.SVG_NS,N=d.symbolSizes,R=d.win,Q,T=function(){function d(a,b,e,c,h,u,g){this.width=this.url=this.style=this.isSVG=this.imgCount=this.height=this.gradients=this.globalAnimation=this.defs=this.chartIndex=this.cacheKeys=this.cache=this.boxWrapper=this.box=this.alignedObjects=void 0;this.init(a,b,e,c,h,u,g)}d.prototype.init=function(a,p,e,c,h,u,g){var K=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"});g||K.css(this.getStyle(c));c=K.element;
a.appendChild(c);C(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&C(c,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=c;this.boxWrapper=K;this.alignedObjects=[];this.url=this.getReferenceURL();this.createElement("desc").add().element.appendChild(b.createTextNode("Created with Highcharts 9.0.1"));this.defs=this.createElement("defs").add();this.allowHTML=u;this.forExport=h;this.styledMode=g;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(p,e,!1);var m;w&&a.getBoundingClientRect&&
(p=function(){E(a,{left:0,top:0});m=a.getBoundingClientRect();E(a,{left:Math.ceil(m.left)-m.left+"px",top:Math.ceil(m.top)-m.top+"px"})},p(),this.unSubPixelFix=t(R,"resize",p))};d.prototype.definition=function(a){return(new G([a])).addToDOM(this.defs.element)};d.prototype.getReferenceURL=function(){if((w||O)&&b.getElementsByTagName("base").length){if(!g(Q)){var a=e();a=(new G([{tagName:"svg",attributes:{width:8,height:8},children:[{tagName:"defs",children:[{tagName:"clipPath",attributes:{id:a},children:[{tagName:"rect",
attributes:{width:4,height:4}}]}]},{tagName:"rect",attributes:{id:"hitme",width:8,height:8,"clip-path":"url(#"+a+")",fill:"rgba(0,0,0,0.001)"}}]}])).addToDOM(b.body);E(a,{position:"fixed",top:0,left:0,zIndex:9E5});var p=b.elementFromPoint(6,6);Q="hitme"===(p&&p.id);b.body.removeChild(a)}if(Q)return R.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20")}return""};d.prototype.getStyle=function(a){return this.style=c({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
fontSize:"12px"},a)};d.prototype.setStyle=function(a){this.boxWrapper.css(this.getStyle(a))};d.prototype.isHidden=function(){return!this.boxWrapper.getBBox().width};d.prototype.destroy=function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();y(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null};d.prototype.createElement=function(a){var b=new this.Element;b.init(this,a);return b};d.prototype.getRadialAttr=
function(a,b){return{cx:a[0]-a[2]/2+b.cx*a[2],cy:a[1]-a[2]/2+b.cy*a[2],r:b.r*a[2]}};d.prototype.buildText=function(a){(new D(a)).buildSVG()};d.prototype.getContrast=function(a){a=f.parse(a).rgba;a[0]*=1;a[1]*=1.2;a[2]*=.5;return 459<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"};d.prototype.button=function(a,b,e,h,g,u,m,I,w,d){var p=this.label(a,b,e,w,void 0,void 0,d,void 0,"button"),K=0,n=this.styledMode,q=g?z(g):{};a=q&&q.style||{};q=G.filterUserAttributes(q);p.attr(z({padding:8,r:2},q));if(!n){q=z({fill:k.neutralColor3,
stroke:k.neutralColor20,"stroke-width":1,style:{color:k.neutralColor80,cursor:"pointer",fontWeight:"normal"}},{style:a},q);var r=q.style;delete q.style;u=z(q,{fill:k.neutralColor10},G.filterUserAttributes(u||{}));var aa=u.style;delete u.style;m=z(q,{fill:k.highlightColor10,style:{color:k.neutralColor100,fontWeight:"bold"}},G.filterUserAttributes(m||{}));var f=m.style;delete m.style;I=z(q,{style:{color:k.neutralColor20}},G.filterUserAttributes(I||{}));var v=I.style;delete I.style}t(p.element,J?"mouseover":
"mouseenter",function(){3!==K&&p.setState(1)});t(p.element,J?"mouseout":"mouseleave",function(){3!==K&&p.setState(K)});p.setState=function(a){1!==a&&(p.state=K=a);p.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);n||p.attr([q,u,m,I][a||0]).css([r,aa,f,v][a||0])};n||p.attr(q).css(c({cursor:"default"},r));return p.on("click",function(a){3!==K&&h.call(p,a)})};d.prototype.crispLine=function(a,b,e){void 0===e&&
(e="round");var p=a[0],c=a[1];p[1]===c[1]&&(p[1]=c[1]=Math[e](p[1])-b%2/2);p[2]===c[2]&&(p[2]=c[2]=Math[e](p[2])+b%2/2);return a};d.prototype.path=function(a){var b=this.styledMode?{}:{fill:"none"};q(a)?b.d=a:A(a)&&c(b,a);return this.createElement("path").attr(b)};d.prototype.circle=function(a,b,e){a=A(a)?a:"undefined"===typeof a?{}:{x:a,y:b,r:e};b=this.createElement("circle");b.xSetter=b.ySetter=function(a,b,p){p.setAttribute("c"+b,a)};return b.attr(a)};d.prototype.arc=function(a,b,e,c,h,u){A(a)?
(c=a,b=c.y,e=c.r,a=c.x):c={innerR:c,start:h,end:u};a=this.symbol("arc",a,b,e,e,c);a.r=e;return a};d.prototype.rect=function(a,b,e,c,h,u){h=A(a)?a.r:h;var p=this.createElement("rect");a=A(a)?a:"undefined"===typeof a?{}:{x:a,y:b,width:Math.max(e,0),height:Math.max(c,0)};this.styledMode||("undefined"!==typeof u&&(a.strokeWidth=u,a=p.crisp(a)),a.fill="none");h&&(a.r=h);p.rSetter=function(a,b,e){p.r=a;C(e,{rx:a,ry:a})};p.rGetter=function(){return p.r};return p.attr(a)};d.prototype.setSize=function(a,b,
e){var p=this.alignedObjects,c=p.length;this.width=a;this.height=b;for(this.boxWrapper.animate({width:a,height:b},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:m(e,!0)?void 0:0});c--;)p[c].align()};d.prototype.g=function(a){var b=this.createElement("g");return a?b.attr({"class":"highcharts-"+a}):b};d.prototype.image=function(a,b,e,h,g,u){var p={preserveAspectRatio:"none"},K=function(a,b){a.setAttributeNS?a.setAttributeNS("http://www.w3.org/1999/xlink",
"href",b):a.setAttribute("hc-svg-href",b)},m=function(b){K(w.element,a);u.call(w,b)};1<arguments.length&&c(p,{x:b,y:e,width:h,height:g});var w=this.createElement("image").attr(p);u?(K(w.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),p=new R.Image,t(p,"load",m),p.src=a,p.complete&&m({})):K(w.element,a);return w};d.prototype.symbol=function(a,p,e,w,d,u){var K=this,I=/^url\((.*?)\)$/,q=I.test(a),n=!q&&(this.symbols[a]?a:"circle"),r=n&&this.symbols[n],J;if(r){"number"===
typeof p&&(J=r.call(this.symbols,Math.round(p||0),Math.round(e||0),w||0,d||0,u));var f=this.path(J);K.styledMode||f.attr("fill","none");c(f,{symbolName:n,x:p,y:e,width:w,height:d});u&&c(f,u)}else if(q){var v=a.match(I)[1];f=this.image(v);f.imgwidth=m(N[v]&&N[v].width,u&&u.width);f.imgheight=m(N[v]&&N[v].height,u&&u.height);var F=function(){f.attr({width:f.width,height:f.height})};["width","height"].forEach(function(a){f[a+"Setter"]=function(a,b){var p={},e=this["img"+b],c="width"===b?"translateX":
"translateY";this[b]=a;g(e)&&(u&&"within"===u.backgroundSize&&this.width&&this.height&&(e=Math.round(e*Math.min(this.width/this.imgwidth,this.height/this.imgheight))),this.element&&this.element.setAttribute(b,e),this.alignByTranslate||(p[c]=((this[b]||0)-e)/2,this.attr(p)))}});g(p)&&f.attr({x:p,y:e});f.isImg=!0;g(f.imgwidth)&&g(f.imgheight)?F():(f.attr({width:0,height:0}),l("img",{onload:function(){var a=h[K.chartIndex];0===this.width&&(E(this,{position:"absolute",top:"-999em"}),b.body.appendChild(this));
N[v]={width:this.width,height:this.height};f.imgwidth=this.width;f.imgheight=this.height;f.element&&F();this.parentNode&&this.parentNode.removeChild(this);K.imgCount--;if(!K.imgCount&&a&&!a.hasLoaded)a.onload()},src:v}),this.imgCount++)}return f};d.prototype.clipRect=function(a,b,c,h){var p=e()+"-",u=this.createElement("clipPath").attr({id:p}).add(this.defs);a=this.rect(a,b,c,h,0).add(u);a.id=p;a.clipPath=u;a.count=0;return a};d.prototype.text=function(a,b,e,c){var p={};if(c&&(this.allowHTML||!this.forExport))return this.html(a,
b,e);p.x=Math.round(b||0);e&&(p.y=Math.round(e));g(a)&&(p.text=a);a=this.createElement("text").attr(p);c||(a.xSetter=function(a,b,p){var e=p.getElementsByTagName("tspan"),u=p.getAttribute(b),c;for(c=0;c<e.length;c++){var h=e[c];h.getAttribute(b)===u&&h.setAttribute(b,a)}p.setAttribute(b,a)});return a};d.prototype.fontMetrics=function(a,b){a=!this.styledMode&&/px/.test(a)||!R.getComputedStyle?a||b&&b.style&&b.style.fontSize||this.style&&this.style.fontSize:b&&x.prototype.getStyle.call(b,"font-size");
a=/px/.test(a)?r(a):12;b=24>a?a+3:Math.round(1.2*a);return{h:b,b:Math.round(.8*b),f:a}};d.prototype.rotCorr=function(b,p,e){var c=b;p&&e&&(c=Math.max(c*Math.cos(p*a),4));return{x:-b/3*Math.sin(p*a),y:c}};d.prototype.pathToSegments=function(a){for(var b=[],e=[],c={A:8,C:7,H:2,L:3,M:3,Q:5,S:5,T:3,V:2},h=0;h<a.length;h++)M(e[0])&&n(a[h])&&e.length===c[e[0].toUpperCase()]&&a.splice(h,0,e[0].replace("M","L").replace("m","l")),"string"===typeof a[h]&&(e.length&&b.push(e.slice(0)),e.length=0),e.push(a[h]);
b.push(e.slice(0));return b};d.prototype.label=function(a,b,e,c,h,u,g,m,w){return new B(this,a,b,e,c,h,u,g,m,w)};return d}();T.prototype.Element=x;T.prototype.SVG_NS=F;T.prototype.draw=H;T.prototype.escapes={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"};T.prototype.symbols={circle:function(a,b,e,c){return this.arc(a+e/2,b+c/2,e/2,c/2,{start:.5*Math.PI,end:2.5*Math.PI,open:!1})},square:function(a,b,e,c){return[["M",a,b],["L",a+e,b],["L",a+e,b+c],["L",a,b+c],["Z"]]},triangle:function(a,
b,e,c){return[["M",a+e/2,b],["L",a+e,b+c],["L",a,b+c],["Z"]]},"triangle-down":function(a,b,e,c){return[["M",a,b],["L",a+e,b],["L",a+e/2,b+c],["Z"]]},diamond:function(a,b,e,c){return[["M",a+e/2,b],["L",a+e,b+c/2],["L",a+e/2,b+c],["L",a,b+c/2],["Z"]]},arc:function(a,b,e,c,h){var p=[];if(h){var u=h.start||0,K=h.end||0,I=h.r||e;e=h.r||c||e;var w=.001>Math.abs(K-u-2*Math.PI);K-=.001;c=h.innerR;w=m(h.open,w);var d=Math.cos(u),n=Math.sin(u),q=Math.cos(K),r=Math.sin(K);u=m(h.longArc,.001>K-u-Math.PI?0:1);
p.push(["M",a+I*d,b+e*n],["A",I,e,0,u,m(h.clockwise,1),a+I*q,b+e*r]);g(c)&&p.push(w?["M",a+c*q,b+c*r]:["L",a+c*q,b+c*r],["A",c,c,0,u,g(h.clockwise)?1-h.clockwise:0,a+c*d,b+c*n]);w||p.push(["Z"])}return p},callout:function(a,b,e,c,h){var p=Math.min(h&&h.r||0,e,c),u=p+6,g=h&&h.anchorX;h=h&&h.anchorY||0;var m=[["M",a+p,b],["L",a+e-p,b],["C",a+e,b,a+e,b,a+e,b+p],["L",a+e,b+c-p],["C",a+e,b+c,a+e,b+c,a+e-p,b+c],["L",a+p,b+c],["C",a,b+c,a,b+c,a,b+c-p],["L",a,b+p],["C",a,b,a,b,a+p,b]];if(!n(g))return m;a+
g>=e?h>b+u&&h<b+c-u?m.splice(3,1,["L",a+e,h-6],["L",a+e+6,h],["L",a+e,h+6],["L",a+e,b+c-p]):m.splice(3,1,["L",a+e,c/2],["L",g,h],["L",a+e,c/2],["L",a+e,b+c-p]):0>=a+g?h>b+u&&h<b+c-u?m.splice(7,1,["L",a,h+6],["L",a-6,h],["L",a,h-6],["L",a,b+p]):m.splice(7,1,["L",a,c/2],["L",g,h],["L",a,c/2],["L",a,b+p]):h&&h>c&&g>a+u&&g<a+e-u?m.splice(5,1,["L",g+6,b+c],["L",g,b+c+6],["L",g-6,b+c],["L",a+p,b+c]):h&&0>h&&g>a+u&&g<a+e-u&&m.splice(1,1,["L",g-6,b],["L",g,b-6],["L",g+6,b],["L",e-p,b]);return m}};d.SVGRenderer=
T;d.Renderer=d.SVGRenderer;return d.Renderer});P(k,"Core/Renderer/HTML/HTMLElement.js",[k["Core/Globals.js"],k["Core/Renderer/SVG/SVGElement.js"],k["Core/Utilities.js"]],function(f,d,k){var x=k.css,B=k.defined,S=k.extend,D=k.pick,H=k.pInt,t=f.isFirefox;S(d.prototype,{htmlCss:function(d){var f="SPAN"===this.element.tagName&&d&&"width"in d,t=D(f&&d.width,void 0);if(f){delete d.width;this.textWidth=t;var g=!0}d&&"ellipsis"===d.textOverflow&&(d.whiteSpace="nowrap",d.overflow="hidden");this.styles=S(this.styles,
d);x(this.element,d);g&&this.htmlUpdateTransform();return this},htmlGetBBox:function(){var d=this.element;return{x:d.offsetLeft,y:d.offsetTop,width:d.offsetWidth,height:d.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var d=this.renderer,f=this.element,t=this.translateX||0,g=this.translateY||0,y=this.x||0,c=this.y||0,q=this.textAlign||"left",n={left:0,center:.5,right:1}[q],A=this.styles,M=A&&A.whiteSpace;x(f,{marginLeft:t,marginTop:g});!d.styledMode&&this.shadows&&this.shadows.forEach(function(e){x(e,
{marginLeft:t+1,marginTop:g+1})});this.inverted&&[].forEach.call(f.childNodes,function(e){d.invertChild(e,f)});if("SPAN"===f.tagName){A=this.rotation;var z=this.textWidth&&H(this.textWidth),m=[A,q,f.innerHTML,this.textWidth,this.textAlign].join(),r;(r=z!==this.oldTextWidth)&&!(r=z>this.oldTextWidth)&&((r=this.textPxLength)||(x(f,{width:"",whiteSpace:M||"nowrap"}),r=f.offsetWidth),r=r>z);r&&(/[ \-]/.test(f.textContent||f.innerText)||"ellipsis"===f.style.textOverflow)?(x(f,{width:z+"px",display:"block",
whiteSpace:M||"normal"}),this.oldTextWidth=z,this.hasBoxWidthChanged=!0):this.hasBoxWidthChanged=!1;m!==this.cTT&&(M=d.fontMetrics(f.style.fontSize,f).b,!B(A)||A===(this.oldRotation||0)&&q===this.oldAlign||this.setSpanRotation(A,n,M),this.getSpanCorrection(!B(A)&&this.textPxLength||f.offsetWidth,M,n,A,q));x(f,{left:y+(this.xCorr||0)+"px",top:c+(this.yCorr||0)+"px"});this.cTT=m;this.oldRotation=A;this.oldAlign=q}}else this.alignOnAdd=!0},setSpanRotation:function(d,f,k){var g={},l=this.renderer.getTransformKey();
g[l]=g.transform="rotate("+d+"deg)";g[l+(t?"Origin":"-origin")]=g.transformOrigin=100*f+"% "+k+"px";x(this.element,g)},getSpanCorrection:function(d,f,t){this.xCorr=-d*t;this.yCorr=-f}});return d});P(k,"Core/Renderer/HTML/HTMLRenderer.js",[k["Core/Globals.js"],k["Core/Renderer/HTML/AST.js"],k["Core/Renderer/SVG/SVGElement.js"],k["Core/Renderer/SVG/SVGRenderer.js"],k["Core/Utilities.js"]],function(f,d,k,x,B){var S=f.isFirefox,D=f.isMS,H=f.isWebKit,t=f.win,C=B.attr,l=B.createElement,E=B.extend,g=B.pick;
E(x.prototype,{getTransformKey:function(){return D&&!/Edge/.test(t.navigator.userAgent)?"-ms-transform":H?"-webkit-transform":S?"MozTransform":t.opera?"-o-transform":""},html:function(f,c,q){var n=this.createElement("span"),A=n.element,M=n.renderer,z=M.isSVG,m=function(c,e){["opacity","visibility"].forEach(function(h){c[h+"Setter"]=function(a,b,g){var m=c.div?c.div.style:e;k.prototype[h+"Setter"].call(this,a,b,g);m&&(m[b]=a)}});c.addedSetters=!0};n.textSetter=function(c){c!==this.textStr&&(delete this.bBox,
delete this.oldTextWidth,d.setElementHTML(this.element,g(c,"")),this.textStr=c,n.doTransform=!0)};z&&m(n,n.element.style);n.xSetter=n.ySetter=n.alignSetter=n.rotationSetter=function(c,e){"align"===e?n.alignValue=n.textAlign=c:n[e]=c;n.doTransform=!0};n.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};n.attr({text:f,x:Math.round(c),y:Math.round(q)}).css({position:"absolute"});M.styledMode||n.css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});
A.style.whiteSpace="nowrap";n.css=n.htmlCss;z&&(n.add=function(c){var e=M.box.parentNode,h=[];if(this.parentGroup=c){var a=c.div;if(!a){for(;c;)h.push(c),c=c.parentGroup;h.reverse().forEach(function(b){function c(a,e){b[e]=a;"translateX"===e?q.left=a+"px":q.top=a+"px";b.doTransform=!0}var g=C(b.element,"class"),d=b.styles||{};a=b.div=b.div||l("div",g?{className:g}:void 0,{position:"absolute",left:(b.translateX||0)+"px",top:(b.translateY||0)+"px",display:b.display,opacity:b.opacity,cursor:d.cursor,
pointerEvents:d.pointerEvents},a||e);var q=a.style;E(b,{classSetter:function(a){return function(b){this.element.setAttribute("class",b);a.className=b}}(a),on:function(){h[0].div&&n.on.apply({element:h[0].div},arguments);return b},translateXSetter:c,translateYSetter:c});b.addedSetters||m(b)})}}else a=e;a.appendChild(A);n.added=!0;n.alignOnAdd&&n.htmlUpdateTransform();return n});return n}});return x});P(k,"Core/Time.js",[k["Core/Globals.js"],k["Core/Utilities.js"]],function(f,d){var k=f.win,x=d.defined,
B=d.error,G=d.extend,D=d.isObject,H=d.merge,t=d.objectEach,C=d.pad,l=d.pick,E=d.splat,g=d.timeUnits;"";d=function(){function d(c){this.options={};this.variableTimezone=this.useUTC=!1;this.Date=k.Date;this.getTimezoneOffset=this.timezoneOffsetFunction();this.update(c)}d.prototype.get=function(c,g){if(this.variableTimezone||this.timezoneOffset){var d=g.getTime(),q=d-this.getTimezoneOffset(g);g.setTime(q);c=g["getUTC"+c]();g.setTime(d);return c}return this.useUTC?g["getUTC"+c]():g["get"+c]()};d.prototype.set=
function(c,g,d){if(this.variableTimezone||this.timezoneOffset){if("Milliseconds"===c||"Seconds"===c||"Minutes"===c&&0===this.getTimezoneOffset(g)%36E5)return g["setUTC"+c](d);var n=this.getTimezoneOffset(g);n=g.getTime()-n;g.setTime(n);g["setUTC"+c](d);c=this.getTimezoneOffset(g);n=g.getTime()+c;return g.setTime(n)}return this.useUTC?g["setUTC"+c](d):g["set"+c](d)};d.prototype.update=function(c){var g=l(c&&c.useUTC,!0);this.options=c=H(!0,this.options||{},c);this.Date=c.Date||k.Date||Date;this.timezoneOffset=
(this.useUTC=g)&&c.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();this.variableTimezone=g&&!(!c.getTimezoneOffset&&!c.timezone)};d.prototype.makeTime=function(c,g,d,A,M,z){if(this.useUTC){var m=this.Date.UTC.apply(0,arguments);var n=this.getTimezoneOffset(m);m+=n;var e=this.getTimezoneOffset(m);n!==e?m+=e-n:n-36E5!==this.getTimezoneOffset(m-36E5)||f.isSafari||(m-=36E5)}else m=(new this.Date(c,g,l(d,1),l(A,0),l(M,0),l(z,0))).getTime();return m};d.prototype.timezoneOffsetFunction=
function(){var c=this,g=this.options,d=g.moment||k.moment;if(!this.useUTC)return function(c){return 6E4*(new Date(c.toString())).getTimezoneOffset()};if(g.timezone){if(d)return function(c){return 6E4*-d.tz(c,g.timezone).utcOffset()};B(25)}return this.useUTC&&g.getTimezoneOffset?function(c){return 6E4*g.getTimezoneOffset(c.valueOf())}:function(){return 6E4*(c.timezoneOffset||0)}};d.prototype.dateFormat=function(c,g,d){var n;if(!x(g)||isNaN(g))return(null===(n=f.defaultOptions.lang)||void 0===n?void 0:
n.invalidDate)||"";c=l(c,"%Y-%m-%d %H:%M:%S");var q=this;n=new this.Date(g);var z=this.get("Hours",n),m=this.get("Day",n),r=this.get("Date",n),e=this.get("Month",n),h=this.get("FullYear",n),a=f.defaultOptions.lang,b=null===a||void 0===a?void 0:a.weekdays,w=null===a||void 0===a?void 0:a.shortWeekdays;n=G({a:w?w[m]:b[m].substr(0,3),A:b[m],d:C(r),e:C(r,2," "),w:m,b:a.shortMonths[e],B:a.months[e],m:C(e+1),o:e+1,y:h.toString().substr(2,2),Y:h,H:C(z),k:z,I:C(z%12||12),l:z%12||12,M:C(this.get("Minutes",
n)),p:12>z?"AM":"PM",P:12>z?"am":"pm",S:C(n.getSeconds()),L:C(Math.floor(g%1E3),3)},f.dateFormats);t(n,function(a,b){for(;-1!==c.indexOf("%"+b);)c=c.replace("%"+b,"function"===typeof a?a.call(q,g):a)});return d?c.substr(0,1).toUpperCase()+c.substr(1):c};d.prototype.resolveDTLFormat=function(c){return D(c,!0)?c:(c=E(c),{main:c[0],from:c[1],to:c[2]})};d.prototype.getTimeTicks=function(c,d,n,f){var q=this,A=[],m={};var r=new q.Date(d);var e=c.unitRange,h=c.count||1,a;f=l(f,1);if(x(d)){q.set("Milliseconds",
r,e>=g.second?0:h*Math.floor(q.get("Milliseconds",r)/h));e>=g.second&&q.set("Seconds",r,e>=g.minute?0:h*Math.floor(q.get("Seconds",r)/h));e>=g.minute&&q.set("Minutes",r,e>=g.hour?0:h*Math.floor(q.get("Minutes",r)/h));e>=g.hour&&q.set("Hours",r,e>=g.day?0:h*Math.floor(q.get("Hours",r)/h));e>=g.day&&q.set("Date",r,e>=g.month?1:Math.max(1,h*Math.floor(q.get("Date",r)/h)));if(e>=g.month){q.set("Month",r,e>=g.year?0:h*Math.floor(q.get("Month",r)/h));var b=q.get("FullYear",r)}e>=g.year&&q.set("FullYear",
r,b-b%h);e===g.week&&(b=q.get("Day",r),q.set("Date",r,q.get("Date",r)-b+f+(b<f?-7:0)));b=q.get("FullYear",r);f=q.get("Month",r);var w=q.get("Date",r),J=q.get("Hours",r);d=r.getTime();!q.variableTimezone&&q.useUTC||!x(n)||(a=n-d>4*g.month||q.getTimezoneOffset(d)!==q.getTimezoneOffset(n));d=r.getTime();for(r=1;d<n;)A.push(d),d=e===g.year?q.makeTime(b+r*h,0):e===g.month?q.makeTime(b,f+r*h):!a||e!==g.day&&e!==g.week?a&&e===g.hour&&1<h?q.makeTime(b,f,w,J+r*h):d+e*h:q.makeTime(b,f,w+r*h*(e===g.day?1:7)),
r++;A.push(d);e<=g.hour&&1E4>A.length&&A.forEach(function(a){0===a%18E5&&"000000000"===q.dateFormat("%H%M%S%L",a)&&(m[a]="day")})}A.info=G(c,{higherRanks:m,totalRange:e*h});return A};return d}();f.Time=d;return f.Time});P(k,"Core/Options.js",[k["Core/Globals.js"],k["Core/Color/Color.js"],k["Core/Color/Palette.js"],k["Core/Time.js"],k["Core/Utilities.js"]],function(f,d,k,x,B){var G=f.isTouchDevice,D=f.svg;d=d.parse;B=B.merge;"";f.defaultOptions={colors:k.colors,symbols:["circle","diamond","square",
"triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:{Date:void 0,getTimezoneOffset:void 0,timezone:void 0,
timezoneOffset:0,useUTC:!0},chart:{styledMode:!1,borderRadius:0,colorCount:10,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},zoomBySingleTouch:!1,width:null,height:null,borderColor:k.highlightColor80,backgroundColor:k.backgroundColor,plotBorderColor:k.neutralColor20},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},caption:{margin:15,text:"",
align:"left",verticalAlign:"bottom"},plotOptions:{},labels:{style:{position:"absolute",color:k.neutralColor80}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",labelFormatter:function(){return this.name},borderColor:k.neutralColor40,borderRadius:0,navigation:{activeColor:k.highlightColor100,inactiveColor:k.neutralColor20},itemStyle:{color:k.neutralColor80,cursor:"pointer",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:k.neutralColor100},itemHiddenStyle:{color:k.neutralColor20},
shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:k.backgroundColor,opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:D,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",
day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:G?25:10,headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',backgroundColor:d(k.neutralColor3).setOpacity(.85).get(),borderWidth:1,shadow:!0,style:{color:k.neutralColor80,cursor:"default",fontSize:"12px",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"https://www.highcharts.com?credits",
position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:k.neutralColor40,fontSize:"9px"},text:"Highcharts.com"}};f.defaultOptions.chart.styledMode=!1;"";f.time=new x(B(f.defaultOptions.global,f.defaultOptions.time));f.dateFormat=function(d,t,k){return f.time.dateFormat(d,t,k)};return{dateFormat:f.dateFormat,defaultOptions:f.defaultOptions,time:f.time}});P(k,"Core/Axis/Tick.js",[k["Core/Globals.js"],k["Core/Utilities.js"]],function(f,d){var k=f.deg2rad,x=d.clamp,B=
d.correctFloat,G=d.defined,D=d.destroyObjectProperties,H=d.extend,t=d.fireEvent,C=d.isNumber,l=d.merge,E=d.objectEach,g=d.pick;"";d=function(){function d(c,g,d,f,l){this.isNewLabel=this.isNew=!0;this.axis=c;this.pos=g;this.type=d||"";this.parameters=l||{};this.tickmarkOffset=this.parameters.tickmarkOffset;this.options=this.parameters.options;t(this,"init");d||f||this.addLabel()}d.prototype.addLabel=function(){var c=this,d=c.axis,n=d.options,f=d.chart,l=d.categories,z=d.logarithmic,m=d.names,r=c.pos,
e=g(c.options&&c.options.labels,n.labels),h=d.tickPositions,a=r===h[0],b=r===h[h.length-1];m=this.parameters.category||(l?g(l[r],m[r],r):r);var w=c.label;l=(!e.step||1===e.step)&&1===d.tickInterval;h=h.info;var J,O;if(d.dateTime&&h){var F=f.time.resolveDTLFormat(n.dateTimeLabelFormats[!n.grid&&h.higherRanks[r]||h.unitName]);var N=F.main}c.isFirst=a;c.isLast=b;c.formatCtx={axis:d,chart:f,isFirst:a,isLast:b,dateTimeLabelFormat:N,tickPositionInfo:h,value:z?B(z.lin2log(m)):m,pos:r};n=d.labelFormatter.call(c.formatCtx,
this.formatCtx);if(O=F&&F.list)c.shortenLabel=function(){for(J=0;J<O.length;J++)if(w.attr({text:d.labelFormatter.call(H(c.formatCtx,{dateTimeLabelFormat:O[J]}))}),w.getBBox().width<d.getSlotWidth(c)-2*g(e.padding,5))return;w.attr({text:""})};l&&d._addedPlotLB&&c.moveLabel(n,e);G(w)||c.movedLabel?w&&w.textStr!==n&&!l&&(!w.textWidth||e.style&&e.style.width||w.styles.width||w.css({width:null}),w.attr({text:n}),w.textPxLength=w.getBBox().width):(c.label=w=c.createLabel({x:0,y:0},n,e),c.rotation=0)};d.prototype.createLabel=
function(c,g,d){var n=this.axis,f=n.chart;if(c=G(g)&&d.enabled?f.renderer.text(g,c.x,c.y,d.useHTML).add(n.labelGroup):null)f.styledMode||c.css(l(d.style)),c.textPxLength=c.getBBox().width;return c};d.prototype.destroy=function(){D(this,this.axis)};d.prototype.getPosition=function(c,g,d,f){var n=this.axis,q=n.chart,m=f&&q.oldChartHeight||q.chartHeight;c={x:c?B(n.translate(g+d,null,null,f)+n.transB):n.left+n.offset+(n.opposite?(f&&q.oldChartWidth||q.chartWidth)-n.right-n.left:0),y:c?m-n.bottom+n.offset-
(n.opposite?n.height:0):B(m-n.translate(g+d,null,null,f)-n.transB)};c.y=x(c.y,-1E5,1E5);t(this,"afterGetPosition",{pos:c});return c};d.prototype.getLabelPosition=function(c,g,d,f,l,z,m,r){var e=this.axis,h=e.transA,a=e.isLinked&&e.linkedParent?e.linkedParent.reversed:e.reversed,b=e.staggerLines,w=e.tickRotCorr||{x:0,y:0},n=l.y,q=f||e.reserveSpaceDefault?0:-e.labelOffset*("center"===e.labelAlign?.5:1),F={};G(n)||(n=0===e.side?d.rotation?-8:-d.getBBox().height:2===e.side?w.y+8:Math.cos(d.rotation*k)*
(w.y-d.getBBox(!1,0).height/2));c=c+l.x+q+w.x-(z&&f?z*h*(a?-1:1):0);g=g+n-(z&&!f?z*h*(a?1:-1):0);b&&(d=m/(r||1)%b,e.opposite&&(d=b-d-1),g+=e.labelOffset/b*d);F.x=c;F.y=Math.round(g);t(this,"afterGetLabelPosition",{pos:F,tickmarkOffset:z,index:m});return F};d.prototype.getLabelSize=function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0};d.prototype.getMarkPath=function(c,g,d,f,l,z){return z.crispLine([["M",c,g],["L",c+(l?0:-d),g+(l?d:0)]],f)};d.prototype.handleOverflow=
function(c){var d=this.axis,f=d.options.labels,l=c.x,t=d.chart.chartWidth,z=d.chart.spacing,m=g(d.labelLeft,Math.min(d.pos,z[3]));z=g(d.labelRight,Math.max(d.isRadial?0:d.pos+d.len,t-z[1]));var r=this.label,e=this.rotation,h={left:0,center:.5,right:1}[d.labelAlign||r.attr("align")],a=r.getBBox().width,b=d.getSlotWidth(this),w=b,J=1,O,F={};if(e||"justify"!==g(f.overflow,"justify"))0>e&&l-h*a<m?O=Math.round(l/Math.cos(e*k)-m):0<e&&l+h*a>z&&(O=Math.round((t-l)/Math.cos(e*k)));else if(t=l+(1-h)*a,l-h*
a<m?w=c.x+w*(1-h)-m:t>z&&(w=z-c.x+w*h,J=-1),w=Math.min(b,w),w<b&&"center"===d.labelAlign&&(c.x+=J*(b-w-h*(b-Math.min(a,w)))),a>w||d.autoRotation&&(r.styles||{}).width)O=w;O&&(this.shortenLabel?this.shortenLabel():(F.width=Math.floor(O)+"px",(f.style||{}).textOverflow||(F.textOverflow="ellipsis"),r.css(F)))};d.prototype.moveLabel=function(c,g){var d=this,f=d.label,q=!1,l=d.axis,m=l.reversed;f&&f.textStr===c?(d.movedLabel=f,q=!0,delete d.label):E(l.ticks,function(e){q||e.isNew||e===d||!e.label||e.label.textStr!==
c||(d.movedLabel=e.label,q=!0,e.labelPos=d.movedLabel.xy,delete e.label)});if(!q&&(d.labelPos||f)){var r=d.labelPos||f.xy;f=l.horiz?m?0:l.width+l.left:r.x;l=l.horiz?r.y:m?l.width+l.left:0;d.movedLabel=d.createLabel({x:f,y:l},c,g);d.movedLabel&&d.movedLabel.attr({opacity:0})}};d.prototype.render=function(c,d,f){var n=this.axis,q=n.horiz,l=this.pos,m=g(this.tickmarkOffset,n.tickmarkOffset);l=this.getPosition(q,l,m,d);m=l.x;var r=l.y;n=q&&m===n.pos+n.len||!q&&r===n.pos?-1:1;f=g(f,1);this.isActive=!0;
this.renderGridLine(d,f,n);this.renderMark(l,f,n);this.renderLabel(l,d,f,c);this.isNew=!1;t(this,"afterRender")};d.prototype.renderGridLine=function(c,d,f){var n=this.axis,q=n.options,l=this.gridLine,m={},r=this.pos,e=this.type,h=g(this.tickmarkOffset,n.tickmarkOffset),a=n.chart.renderer,b=e?e+"Grid":"grid",w=q[b+"LineWidth"],J=q[b+"LineColor"];q=q[b+"LineDashStyle"];l||(n.chart.styledMode||(m.stroke=J,m["stroke-width"]=w,q&&(m.dashstyle=q)),e||(m.zIndex=1),c&&(d=0),this.gridLine=l=a.path().attr(m).addClass("highcharts-"+
(e?e+"-":"")+"grid-line").add(n.gridGroup));if(l&&(f=n.getPlotLinePath({value:r+h,lineWidth:l.strokeWidth()*f,force:"pass",old:c})))l[c||this.isNew?"attr":"animate"]({d:f,opacity:d})};d.prototype.renderMark=function(c,d,f){var n=this.axis,q=n.options,l=n.chart.renderer,m=this.type,r=m?m+"Tick":"tick",e=n.tickSize(r),h=this.mark,a=!h,b=c.x;c=c.y;var w=g(q[r+"Width"],!m&&n.isXAxis?1:0);q=q[r+"Color"];e&&(n.opposite&&(e[0]=-e[0]),a&&(this.mark=h=l.path().addClass("highcharts-"+(m?m+"-":"")+"tick").add(n.axisGroup),
n.chart.styledMode||h.attr({stroke:q,"stroke-width":w})),h[a?"attr":"animate"]({d:this.getMarkPath(b,c,e[0],h.strokeWidth()*f,n.horiz,l),opacity:d}))};d.prototype.renderLabel=function(c,d,f,l){var n=this.axis,q=n.horiz,m=n.options,r=this.label,e=m.labels,h=e.step;n=g(this.tickmarkOffset,n.tickmarkOffset);var a=!0,b=c.x;c=c.y;r&&C(b)&&(r.xy=c=this.getLabelPosition(b,c,r,q,e,n,l,h),this.isFirst&&!this.isLast&&!g(m.showFirstLabel,1)||this.isLast&&!this.isFirst&&!g(m.showLastLabel,1)?a=!1:!q||e.step||
e.rotation||d||0===f||this.handleOverflow(c),h&&l%h&&(a=!1),a&&C(c.y)?(c.opacity=f,r[this.isNewLabel?"attr":"animate"](c),this.isNewLabel=!1):(r.attr("y",-9999),this.isNewLabel=!0))};d.prototype.replaceMovedLabel=function(){var c=this.label,g=this.axis,d=g.reversed;if(c&&!this.isNew){var f=g.horiz?d?g.left:g.width+g.left:c.xy.x;d=g.horiz?c.xy.y:d?g.width+g.top:g.top;c.animate({x:f,y:d,opacity:0},void 0,c.destroy);delete this.label}g.isDirty=!0;this.label=this.movedLabel;delete this.movedLabel};return d}();
f.Tick=d;return f.Tick});P(k,"Core/Axis/Axis.js",[k["Core/Animation/AnimationUtilities.js"],k["Core/Color/Color.js"],k["Core/Globals.js"],k["Core/Color/Palette.js"],k["Core/Options.js"],k["Core/Axis/Tick.js"],k["Core/Utilities.js"]],function(f,d,k,x,B,G,D){var H=f.animObject,t=B.defaultOptions,C=D.addEvent,l=D.arrayMax,E=D.arrayMin,g=D.clamp,y=D.correctFloat,c=D.defined,q=D.destroyObjectProperties,n=D.erase,A=D.error,M=D.extend,z=D.fireEvent,m=D.format,r=D.getMagnitude,e=D.isArray,h=D.isFunction,
a=D.isNumber,b=D.isString,w=D.merge,J=D.normalizeTickInterval,O=D.objectEach,F=D.pick,N=D.relativeLength,R=D.removeEvent,Q=D.splat,T=D.syncTimeout;"";var v=k.deg2rad;f=function(){function f(a,b){this.zoomEnabled=this.width=this.visible=this.userOptions=this.translationSlope=this.transB=this.transA=this.top=this.ticks=this.tickRotCorr=this.tickPositions=this.tickmarkOffset=this.tickInterval=this.tickAmount=this.side=this.series=this.right=this.positiveValuesOnly=this.pos=this.pointRangePadding=this.pointRange=
this.plotLinesAndBandsGroups=this.plotLinesAndBands=this.paddedTicks=this.overlap=this.options=this.offset=this.names=this.minPixelPadding=this.minorTicks=this.minorTickInterval=this.min=this.maxLabelLength=this.max=this.len=this.left=this.labelFormatter=this.labelEdge=this.isLinked=this.height=this.hasVisibleSeries=this.hasNames=this.coll=this.closestPointRange=this.chart=this.categories=this.bottom=this.alternateBands=void 0;this.init(a,b)}f.prototype.init=function(a,b){var e=b.isX,p=this;p.chart=
a;p.horiz=a.inverted&&!p.isZAxis?!e:e;p.isXAxis=e;p.coll=p.coll||(e?"xAxis":"yAxis");z(this,"init",{userOptions:b});p.opposite=F(b.opposite,p.opposite);p.side=F(b.side,p.side,p.horiz?p.opposite?0:2:p.opposite?1:3);p.setOptions(b);var u=this.options,g=u.type;p.labelFormatter=u.labels.formatter||p.defaultLabelFormatter;p.userOptions=b;p.minPixelPadding=0;p.reversed=F(u.reversed,p.reversed);p.visible=!1!==u.visible;p.zoomEnabled=!1!==u.zoomEnabled;p.hasNames="category"===g||!0===u.categories;p.categories=
u.categories||p.hasNames;p.names||(p.names=[],p.names.keys={});p.plotLinesAndBandsGroups={};p.positiveValuesOnly=!!p.logarithmic;p.isLinked=c(u.linkedTo);p.ticks={};p.labelEdge=[];p.minorTicks={};p.plotLinesAndBands=[];p.alternateBands={};p.len=0;p.minRange=p.userMinRange=u.minRange||u.maxZoom;p.range=u.range;p.offset=u.offset||0;p.max=null;p.min=null;p.crosshair=F(u.crosshair,Q(a.options.tooltip.crosshairs)[e?0:1],!1);b=p.options.events;-1===a.axes.indexOf(p)&&(e?a.axes.splice(a.xAxis.length,0,p):
a.axes.push(p),a[p.coll].push(p));p.series=p.series||[];a.inverted&&!p.isZAxis&&e&&"undefined"===typeof p.reversed&&(p.reversed=!0);p.labelRotation=p.options.labels.rotation;O(b,function(a,b){h(a)&&C(p,b,a)});z(this,"afterInit")};f.prototype.setOptions=function(a){this.options=w(f.defaultOptions,"yAxis"===this.coll&&f.defaultYAxisOptions,[f.defaultTopAxisOptions,f.defaultRightAxisOptions,f.defaultBottomAxisOptions,f.defaultLeftAxisOptions][this.side],w(t[this.coll],a));z(this,"afterSetOptions",{userOptions:a})};
f.prototype.defaultLabelFormatter=function(){var b=this.axis,e=a(this.value)?this.value:NaN,c=b.chart.time,g=b.categories,u=this.dateTimeLabelFormat,h=t.lang,d=h.numericSymbols;h=h.numericSymbolMagnitude||1E3;var f=d&&d.length,w=b.options.labels.format;b=b.logarithmic?Math.abs(e):b.tickInterval;var n=this.chart,q=n.numberFormatter;if(w)var r=m(w,this,n);else if(g)r=""+this.value;else if(u)r=c.dateFormat(u,e);else if(f&&1E3<=b)for(;f--&&"undefined"===typeof r;)c=Math.pow(h,f+1),b>=c&&0===10*e%c&&null!==
d[f]&&0!==e&&(r=q(e/c,-1)+d[f]);"undefined"===typeof r&&(r=1E4<=Math.abs(e)?q(e,-1):q(e,-1,void 0,""));return r};f.prototype.getSeriesExtremes=function(){var b=this,e=b.chart,g;z(this,"getSeriesExtremes",null,function(){b.hasVisibleSeries=!1;b.dataMin=b.dataMax=b.threshold=null;b.softThreshold=!b.isXAxis;b.stacking&&b.stacking.buildStacks();b.series.forEach(function(p){if(p.visible||!e.options.chart.ignoreHiddenSeries){var u=p.options,h=u.threshold;b.hasVisibleSeries=!0;b.positiveValuesOnly&&0>=h&&
(h=null);if(b.isXAxis){if(u=p.xData,u.length){u=b.logarithmic?u.filter(b.validatePositiveValue):u;g=p.getXExtremes(u);var d=g.min;var f=g.max;a(d)||d instanceof Date||(u=u.filter(a),g=p.getXExtremes(u),d=g.min,f=g.max);u.length&&(b.dataMin=Math.min(F(b.dataMin,d),d),b.dataMax=Math.max(F(b.dataMax,f),f))}}else if(p=p.applyExtremes(),a(p.dataMin)&&(d=p.dataMin,b.dataMin=Math.min(F(b.dataMin,d),d)),a(p.dataMax)&&(f=p.dataMax,b.dataMax=Math.max(F(b.dataMax,f),f)),c(h)&&(b.threshold=h),!u.softThreshold||
b.positiveValuesOnly)b.softThreshold=!1}})});z(this,"afterGetSeriesExtremes")};f.prototype.translate=function(b,e,c,g,u,h){var p=this.linkedParent||this,d=1,f=0,m=g&&p.old?p.old.transA:p.transA;g=g&&p.old?p.old.min:p.min;var w=p.minPixelPadding;u=(p.isOrdinal||p.brokenAxis&&p.brokenAxis.hasBreaks||p.logarithmic&&u)&&p.lin2val;m||(m=p.transA);c&&(d*=-1,f=p.len);p.reversed&&(d*=-1,f-=d*(p.sector||p.len));e?(b=(b*d+f-w)/m+g,u&&(b=p.lin2val(b))):(u&&(b=p.val2lin(b)),b=a(g)?d*(b-g)*m+f+d*w+(a(h)?m*h:0):
void 0);return b};f.prototype.toPixels=function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)};f.prototype.toValue=function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)};f.prototype.getPlotLinePath=function(b){function e(a,b,e){if("pass"!==n&&a<b||a>e)n?a=g(a,b,e):Z=!0;return a}var c=this,p=c.chart,u=c.left,h=c.top,d=b.old,f=b.value,m=b.translatedValue,w=b.lineWidth,n=b.force,r,q,l,J,v=d&&p.oldChartHeight||p.chartHeight,V=d&&p.oldChartWidth||p.chartWidth,
Z,N=c.transB;b={value:f,lineWidth:w,old:d,force:n,acrossPanes:b.acrossPanes,translatedValue:m};z(this,"getPlotLinePath",b,function(b){m=F(m,c.translate(f,null,null,d));m=g(m,-1E5,1E5);r=l=Math.round(m+N);q=J=Math.round(v-m-N);a(m)?c.horiz?(q=h,J=v-c.bottom,r=l=e(r,u,u+c.width)):(r=u,l=V-c.right,q=J=e(q,h,h+c.height)):(Z=!0,n=!1);b.path=Z&&!n?null:p.renderer.crispLine([["M",r,q],["L",l,J]],w||1)});return b.path};f.prototype.getLinearTickPositions=function(a,b,e){var c=y(Math.floor(b/a)*a);e=y(Math.ceil(e/
a)*a);var p=[],g;y(c+a)===c&&(g=20);if(this.single)return[b];for(b=c;b<=e;){p.push(b);b=y(b+a,g);if(b===h)break;var h=b}return p};f.prototype.getMinorTickInterval=function(){var a=this.options;return!0===a.minorTicks?F(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval};f.prototype.getMinorTickPositions=function(){var a=this.options,b=this.tickPositions,e=this.minorTickInterval,c=[],u=this.pointRangePadding||0,g=this.min-u;u=this.max+u;var h=u-g;if(h&&h/e<this.len/3){var d=this.logarithmic;
if(d)this.paddedTicks.forEach(function(a,b,p){b&&c.push.apply(c,d.getLogTickPositions(e,p[b-1],p[b],!0))});else if(this.dateTime&&"auto"===this.getMinorTickInterval())c=c.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(e),g,u,a.startOfWeek));else for(a=g+(b[0]-g)%e;a<=u&&a!==c[0];a+=e)c.push(a)}0!==c.length&&this.trimTicks(c);return c};f.prototype.adjustForMinRange=function(){var a=this.options,b=this.min,e=this.max,g=this.logarithmic,u=0,h,d,f,m;this.isXAxis&&"undefined"===typeof this.minRange&&
!g&&(c(a.min)||c(a.max)?this.minRange=null:(this.series.forEach(function(a){f=a.xData;m=a.xIncrement?1:f.length-1;if(1<f.length)for(h=m;0<h;h--)if(d=f[h]-f[h-1],!u||d<u)u=d}),this.minRange=Math.min(5*u,this.dataMax-this.dataMin)));if(e-b<this.minRange){var w=this.dataMax-this.dataMin>=this.minRange;var n=this.minRange;var r=(n-e+b)/2;r=[b-r,F(a.min,b-r)];w&&(r[2]=this.logarithmic?this.logarithmic.log2lin(this.dataMin):this.dataMin);b=l(r);e=[b+n,F(a.max,b+n)];w&&(e[2]=g?g.log2lin(this.dataMax):this.dataMax);
e=E(e);e-b<n&&(r[0]=e-n,r[1]=F(a.min,e-n),b=l(r))}this.min=b;this.max=e};f.prototype.getClosest=function(){var a;this.categories?a=1:this.series.forEach(function(b){var e=b.closestPointRange,p=b.visible||!b.chart.options.chart.ignoreHiddenSeries;!b.noSharedTooltip&&c(e)&&p&&(a=c(a)?Math.min(a,e):e)});return a};f.prototype.nameToX=function(a){var b=e(this.categories),p=b?this.categories:this.names,g=a.options.x;a.series.requireSorting=!1;c(g)||(g=!1===this.options.uniqueNames?a.series.autoIncrement():
b?p.indexOf(a.name):F(p.keys[a.name],-1));if(-1===g){if(!b)var u=p.length}else u=g;"undefined"!==typeof u&&(this.names[u]=a.name,this.names.keys[a.name]=u);return u};f.prototype.updateNames=function(){var a=this,b=this.names;0<b.length&&(Object.keys(b.keys).forEach(function(a){delete b.keys[a]}),b.length=0,this.minRange=this.userMinRange,(this.series||[]).forEach(function(b){b.xIncrement=null;if(!b.points||b.isDirtyData)a.max=Math.max(a.max,b.xData.length-1),b.processData(),b.generatePoints();b.data.forEach(function(e,
c){if(e&&e.options&&"undefined"!==typeof e.name){var p=a.nameToX(e);"undefined"!==typeof p&&p!==e.x&&(e.x=p,b.xData[c]=p)}})}))};f.prototype.setAxisTranslation=function(){var a=this,e=a.max-a.min,c=a.axisPointRange||0,g=0,u=0,h=a.linkedParent,d=!!a.categories,f=a.transA,m=a.isXAxis;if(m||d||c){var w=a.getClosest();h?(g=h.minPointOffset,u=h.pointRangePadding):a.series.forEach(function(e){var p=d?1:m?F(e.options.pointRange,w,0):a.axisPointRange||0,h=e.options.pointPlacement;c=Math.max(c,p);if(!a.single||
d)e=e.is("xrange")?!m:m,g=Math.max(g,e&&b(h)?0:p/2),u=Math.max(u,e&&"on"===h?0:p)});h=a.ordinal&&a.ordinal.slope&&w?a.ordinal.slope/w:1;a.minPointOffset=g*=h;a.pointRangePadding=u*=h;a.pointRange=Math.min(c,a.single&&d?1:e);m&&(a.closestPointRange=w)}a.translationSlope=a.transA=f=a.staticScale||a.len/(e+u||1);a.transB=a.horiz?a.left:a.bottom;a.minPixelPadding=f*g;z(this,"afterSetAxisTranslation")};f.prototype.minFromRange=function(){return this.max-this.range};f.prototype.setTickInterval=function(b){var e=
this,p=e.chart,g=e.logarithmic,u=e.options,h=e.isXAxis,d=e.isLinked,f=u.maxPadding,m=u.minPadding,w=u.tickInterval,n=u.tickPixelInterval,q=e.categories,l=a(e.threshold)?e.threshold:null,v=e.softThreshold;e.dateTime||q||d||this.getTickAmount();var N=F(e.userMin,u.min);var O=F(e.userMax,u.max);if(d){e.linkedParent=p[e.coll][u.linkedTo];var V=e.linkedParent.getExtremes();e.min=F(V.min,V.dataMin);e.max=F(V.max,V.dataMax);u.type!==e.linkedParent.options.type&&A(11,1,p)}else{if(v&&c(l))if(e.dataMin>=l)V=
l,m=0;else if(e.dataMax<=l){var Z=l;f=0}e.min=F(N,V,e.dataMin);e.max=F(O,Z,e.dataMax)}g&&(e.positiveValuesOnly&&!b&&0>=Math.min(e.min,F(e.dataMin,e.min))&&A(10,1,p),e.min=y(g.log2lin(e.min),16),e.max=y(g.log2lin(e.max),16));e.range&&c(e.max)&&(e.userMin=e.min=N=Math.max(e.dataMin,e.minFromRange()),e.userMax=O=e.max,e.range=null);z(e,"foundExtremes");e.beforePadding&&e.beforePadding();e.adjustForMinRange();!(q||e.axisPointRange||e.stacking&&e.stacking.usePercentage||d)&&c(e.min)&&c(e.max)&&(p=e.max-
e.min)&&(!c(N)&&m&&(e.min-=p*m),!c(O)&&f&&(e.max+=p*f));a(e.userMin)||(a(u.softMin)&&u.softMin<e.min&&(e.min=N=u.softMin),a(u.floor)&&(e.min=Math.max(e.min,u.floor)));a(e.userMax)||(a(u.softMax)&&u.softMax>e.max&&(e.max=O=u.softMax),a(u.ceiling)&&(e.max=Math.min(e.max,u.ceiling)));v&&c(e.dataMin)&&(l=l||0,!c(N)&&e.min<l&&e.dataMin>=l?e.min=e.options.minRange?Math.min(l,e.max-e.minRange):l:!c(O)&&e.max>l&&e.dataMax<=l&&(e.max=e.options.minRange?Math.max(l,e.min+e.minRange):l));a(e.min)&&a(e.max)&&
!this.chart.polar&&e.min>e.max&&(c(e.options.min)?e.max=e.min:c(e.options.max)&&(e.min=e.max));e.tickInterval=e.min===e.max||"undefined"===typeof e.min||"undefined"===typeof e.max?1:d&&!w&&n===e.linkedParent.options.tickPixelInterval?w=e.linkedParent.tickInterval:F(w,this.tickAmount?(e.max-e.min)/Math.max(this.tickAmount-1,1):void 0,q?1:(e.max-e.min)*n/Math.max(e.len,n));h&&!b&&e.series.forEach(function(a){var b,c;a.processData(e.min!==(null===(b=e.old)||void 0===b?void 0:b.min)||e.max!==(null===
(c=e.old)||void 0===c?void 0:c.max))});e.setAxisTranslation();z(this,"initialAxisTranslation");e.pointRange&&!w&&(e.tickInterval=Math.max(e.pointRange,e.tickInterval));b=F(u.minTickInterval,e.dateTime&&!e.series.some(function(a){return a.noSharedTooltip})?e.closestPointRange:0);!w&&e.tickInterval<b&&(e.tickInterval=b);e.dateTime||e.logarithmic||w||(e.tickInterval=J(e.tickInterval,void 0,r(e.tickInterval),F(u.allowDecimals,.5>e.tickInterval||void 0!==this.tickAmount),!!this.tickAmount));this.tickAmount||
(e.tickInterval=e.unsquish());this.setTickPositions()};f.prototype.setTickPositions=function(){var a=this.options,b=a.tickPositions;var e=this.getMinorTickInterval();var g=a.tickPositioner,h=this.hasVerticalPanning(),d="colorAxis"===this.coll,f=(d||!h)&&a.startOnTick;h=(d||!h)&&a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===e&&this.tickInterval?this.tickInterval/5:e;this.single=this.min===this.max&&c(this.min)&&
!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=e=b&&b.slice();!e&&(this.ordinal&&this.ordinal.positions||!((this.max-this.min)/this.tickInterval>Math.max(2*this.len,200))?e=this.dateTime?this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinal&&this.ordinal.positions,this.closestPointRange,!0):this.logarithmic?this.logarithmic.getLogTickPositions(this.tickInterval,this.min,this.max):
this.getLinearTickPositions(this.tickInterval,this.min,this.max):(e=[this.min,this.max],A(19,!1,this.chart)),e.length>this.len&&(e=[e[0],e.pop()],e[0]===e[1]&&(e.length=1)),this.tickPositions=e,g&&(g=g.apply(this,[this.min,this.max])))&&(this.tickPositions=e=g);this.paddedTicks=e.slice(0);this.trimTicks(e,f,h);this.isLinked||(this.single&&2>e.length&&!this.categories&&!this.series.some(function(a){return a.is("heatmap")&&"between"===a.options.pointPlacement})&&(this.min-=.5,this.max+=.5),b||g||this.adjustTickAmount());
z(this,"afterSetTickPositions")};f.prototype.trimTicks=function(a,b,e){var g=a[0],p=a[a.length-1],h=!this.isOrdinal&&this.minPointOffset||0;z(this,"trimTicks");if(!this.isLinked){if(b&&-Infinity!==g)this.min=g;else for(;this.min-h>a[0];)a.shift();if(e)this.max=p;else for(;this.max+h<a[a.length-1];)a.pop();0===a.length&&c(g)&&!this.options.tickPositions&&a.push((p+g)/2)}};f.prototype.alignToOthers=function(){var a={},b,e=this.options;!1===this.chart.options.chart.alignTicks||!1===e.alignTicks||!1===
e.startOnTick||!1===e.endOnTick||this.logarithmic||this.chart[this.coll].forEach(function(e){var c=e.options;c=[e.horiz?c.left:c.top,c.width,c.height,c.pane].join();e.series.length&&(a[c]?b=!0:a[c]=1)});return b};f.prototype.getTickAmount=function(){var a=this.options,b=a.tickAmount,e=a.tickPixelInterval;!c(a.tickInterval)&&!b&&this.len<e&&!this.isRadial&&!this.logarithmic&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/e)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=
b};f.prototype.adjustTickAmount=function(){var b=this.options,e=this.tickInterval,g=this.tickPositions,h=this.tickAmount,u=this.finalTickAmt,d=g&&g.length,f=F(this.threshold,this.softThreshold?0:null);if(this.hasData()&&a(this.min)&&a(this.max)){if(d<h){for(;g.length<h;)g.length%2||this.min===f?g.push(y(g[g.length-1]+e)):g.unshift(y(g[0]-e));this.transA*=(d-1)/(h-1);this.min=b.startOnTick?g[0]:Math.min(this.min,g[0]);this.max=b.endOnTick?g[g.length-1]:Math.max(this.max,g[g.length-1])}else d>h&&(this.tickInterval*=
2,this.setTickPositions());if(c(u)){for(e=b=g.length;e--;)(3===u&&1===e%2||2>=u&&0<e&&e<b-1)&&g.splice(e,1);this.finalTickAmt=void 0}}};f.prototype.setScale=function(){var a,b,e,c,g,h,d=!1,f=!1;this.series.forEach(function(a){var b;d=d||a.isDirtyData||a.isDirty;f=f||(null===(b=a.xAxis)||void 0===b?void 0:b.isDirty)||!1});this.setAxisSize();(h=this.len!==(null===(a=this.old)||void 0===a?void 0:a.len))||d||f||this.isLinked||this.forceRedraw||this.userMin!==(null===(b=this.old)||void 0===b?void 0:b.userMin)||
this.userMax!==(null===(e=this.old)||void 0===e?void 0:e.userMax)||this.alignToOthers()?(this.stacking&&this.stacking.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.isDirty||(this.isDirty=h||this.min!==(null===(c=this.old)||void 0===c?void 0:c.min)||this.max!==(null===(g=this.old)||void 0===g?void 0:g.max))):this.stacking&&this.stacking.cleanStacks();d&&this.panningState&&(this.panningState.isDirty=!0);z(this,"afterSetScale")};f.prototype.setExtremes=function(a,
b,e,c,g){var h=this,p=h.chart;e=F(e,!0);h.series.forEach(function(a){delete a.kdTree});g=M(g,{min:a,max:b});z(h,"setExtremes",g,function(){h.userMin=a;h.userMax=b;h.eventArgs=g;e&&p.redraw(c)})};f.prototype.zoom=function(a,b){var e=this,g=this.dataMin,h=this.dataMax,p=this.options,d=Math.min(g,F(p.min,g)),f=Math.max(h,F(p.max,h));a={newMin:a,newMax:b};z(this,"zoom",a,function(a){var b=a.newMin,p=a.newMax;if(b!==e.min||p!==e.max)e.allowZoomOutside||(c(g)&&(b<d&&(b=d),b>f&&(b=f)),c(h)&&(p<d&&(p=d),
p>f&&(p=f))),e.displayBtn="undefined"!==typeof b||"undefined"!==typeof p,e.setExtremes(b,p,!1,void 0,{trigger:"zoom"});a.zoomed=!0});return a.zoomed};f.prototype.setAxisSize=function(){var a=this.chart,b=this.options,e=b.offsets||[0,0,0,0],c=this.horiz,g=this.width=Math.round(N(F(b.width,a.plotWidth-e[3]+e[1]),a.plotWidth)),h=this.height=Math.round(N(F(b.height,a.plotHeight-e[0]+e[2]),a.plotHeight)),d=this.top=Math.round(N(F(b.top,a.plotTop+e[0]),a.plotHeight,a.plotTop));b=this.left=Math.round(N(F(b.left,
a.plotLeft+e[3]),a.plotWidth,a.plotLeft));this.bottom=a.chartHeight-h-d;this.right=a.chartWidth-g-b;this.len=Math.max(c?g:h,0);this.pos=c?b:d};f.prototype.getExtremes=function(){var a=this.logarithmic;return{min:a?y(a.lin2log(this.min)):this.min,max:a?y(a.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}};f.prototype.getThreshold=function(a){var b=this.logarithmic,e=b?b.lin2log(this.min):this.min;b=b?b.lin2log(this.max):this.max;null===
a||-Infinity===a?a=e:Infinity===a?a=b:e>a?a=e:b<a&&(a=b);return this.translate(a,0,1,0,1)};f.prototype.autoLabelAlign=function(a){var b=(F(a,0)-90*this.side+720)%360;a={align:"center"};z(this,"autoLabelAlign",a,function(a){15<b&&165>b?a.align="right":195<b&&345>b&&(a.align="left")});return a.align};f.prototype.tickSize=function(a){var b=this.options,e=b["tick"===a?"tickLength":"minorTickLength"],c=F(b["tick"===a?"tickWidth":"minorTickWidth"],"tick"===a&&this.isXAxis&&!this.categories?1:0);if(c&&e){"inside"===
b[a+"Position"]&&(e=-e);var g=[e,c]}a={tickSize:g};z(this,"afterTickSize",a);return a.tickSize};f.prototype.labelMetrics=function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)};f.prototype.unsquish=function(){var a=this.options.labels,b=this.horiz,e=this.tickInterval,g=e,h=this.len/(((this.categories?1:0)+this.max-this.min)/e),d,f=a.rotation,m=this.labelMetrics(),
w,n=Number.MAX_VALUE,r,l=Math.max(this.max-this.min,0),q=function(a){var b=a/(h||1);b=1<b?Math.ceil(b):1;b*e>l&&Infinity!==a&&Infinity!==h&&l&&(b=Math.ceil(l/e));return y(b*e)};b?(r=!a.staggerLines&&!a.step&&(c(f)?[f]:h<F(a.autoRotationLimit,80)&&a.autoRotation))&&r.forEach(function(a){if(a===f||a&&-90<=a&&90>=a){w=q(Math.abs(m.h/Math.sin(v*a)));var b=w+Math.abs(a/360);b<n&&(n=b,d=a,g=w)}}):a.step||(g=q(m.h));this.autoRotation=r;this.labelRotation=F(d,f);return g};f.prototype.getSlotWidth=function(b){var e,
c=this.chart,g=this.horiz,h=this.options.labels,d=Math.max(this.tickPositions.length-(this.categories?0:1),1),p=c.margin[3];if(b&&a(b.slotWidth))return b.slotWidth;if(g&&h&&2>(h.step||0))return h.rotation?0:(this.staggerLines||1)*this.len/d;if(!g){b=null===(e=null===h||void 0===h?void 0:h.style)||void 0===e?void 0:e.width;if(void 0!==b)return parseInt(b,10);if(p)return p-c.spacing[3]}return.33*c.chartWidth};f.prototype.renderUnsquish=function(){var a=this.chart,e=a.renderer,c=this.tickPositions,g=
this.ticks,h=this.options.labels,d=h&&h.style||{},f=this.horiz,m=this.getSlotWidth(),w=Math.max(1,Math.round(m-2*(h.padding||5))),n={},r=this.labelMetrics(),l=h.style&&h.style.textOverflow,q=0;b(h.rotation)||(n.rotation=h.rotation||0);c.forEach(function(a){a=g[a];a.movedLabel&&a.replaceMovedLabel();a&&a.label&&a.label.textPxLength>q&&(q=a.label.textPxLength)});this.maxLabelLength=q;if(this.autoRotation)q>w&&q>r.h?n.rotation=this.labelRotation:this.labelRotation=0;else if(m){var J=w;if(!l){var F="clip";
for(w=c.length;!f&&w--;){var v=c[w];if(v=g[v].label)v.styles&&"ellipsis"===v.styles.textOverflow?v.css({textOverflow:"clip"}):v.textPxLength>m&&v.css({width:m+"px"}),v.getBBox().height>this.len/c.length-(r.h-r.f)&&(v.specificTextOverflow="ellipsis")}}}n.rotation&&(J=q>.5*a.chartHeight?.33*a.chartHeight:q,l||(F="ellipsis"));if(this.labelAlign=h.align||this.autoLabelAlign(this.labelRotation))n.align=this.labelAlign;c.forEach(function(a){var b=(a=g[a])&&a.label,e=d.width,c={};b&&(b.attr(n),a.shortenLabel?
a.shortenLabel():J&&!e&&"nowrap"!==d.whiteSpace&&(J<b.textPxLength||"SPAN"===b.element.tagName)?(c.width=J+"px",l||(c.textOverflow=b.specificTextOverflow||F),b.css(c)):b.styles&&b.styles.width&&!c.width&&!e&&b.css({width:null}),delete b.specificTextOverflow,a.rotation=n.rotation)},this);this.tickRotCorr=e.rotCorr(r.b,this.labelRotation||0,0!==this.side)};f.prototype.hasData=function(){return this.series.some(function(a){return a.hasData()})||this.options.showEmpty&&c(this.min)&&c(this.max)};f.prototype.addTitle=
function(a){var b=this.chart.renderer,e=this.horiz,c=this.opposite,g=this.options.title,h,d=this.chart.styledMode;this.axisTitle||((h=g.textAlign)||(h=(e?{low:"left",middle:"center",high:"right"}:{low:c?"right":"left",middle:"center",high:c?"left":"right"})[g.align]),this.axisTitle=b.text(g.text,0,0,g.useHTML).attr({zIndex:7,rotation:g.rotation||0,align:h}).addClass("highcharts-axis-title"),d||this.axisTitle.css(w(g.style)),this.axisTitle.add(this.axisGroup),this.axisTitle.isNew=!0);d||g.style.width||
this.isRadial||this.axisTitle.css({width:this.len+"px"});this.axisTitle[a?"show":"hide"](a)};f.prototype.generateTick=function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new G(this,a)};f.prototype.getOffset=function(){var a=this,b=this,e=b.chart,g=e.renderer,h=b.options,d=b.tickPositions,f=b.ticks,m=b.horiz,w=b.side,n=e.inverted&&!b.isZAxis?[1,0,3,2][w]:w,r,l=0,q=0,J=h.title,v=h.labels,N=0,V=e.axisOffset;e=e.clipOffset;var Z=[-1,1,1,-1][w],k=h.className,t=b.axisParent;var y=b.hasData();b.showAxis=
r=y||F(h.showEmpty,!0);b.staggerLines=b.horiz&&v.staggerLines;if(!b.axisGroup){var A=function(b,e,c){return g.g(b).attr({zIndex:c}).addClass("highcharts-"+a.coll.toLowerCase()+e+" "+(a.isRadial?"highcharts-radial-axis"+e+" ":"")+(k||"")).add(t)};b.gridGroup=A("grid","-grid",h.gridZIndex||1);b.axisGroup=A("axis","",h.zIndex||2);b.labelGroup=A("axis-labels","-labels",v.zIndex||7)}y||b.isLinked?(d.forEach(function(a,e){b.generateTick(a,e)}),b.renderUnsquish(),b.reserveSpaceDefault=0===w||2===w||{1:"left",
3:"right"}[w]===b.labelAlign,F(v.reserveSpace,"center"===b.labelAlign?!0:null,b.reserveSpaceDefault)&&d.forEach(function(a){N=Math.max(f[a].getLabelSize(),N)}),b.staggerLines&&(N*=b.staggerLines),b.labelOffset=N*(b.opposite?-1:1)):O(f,function(a,b){a.destroy();delete f[b]});if(J&&J.text&&!1!==J.enabled&&(b.addTitle(r),r&&!1!==J.reserveSpace)){b.titleOffset=l=b.axisTitle.getBBox()[m?"height":"width"];var R=J.offset;q=c(R)?0:F(J.margin,m?5:10)}b.renderLine();b.offset=Z*F(h.offset,V[w]?V[w]+(h.margin||
0):0);b.tickRotCorr=b.tickRotCorr||{x:0,y:0};J=0===w?-b.labelMetrics().h:2===w?b.tickRotCorr.y:0;q=Math.abs(N)+q;N&&(q=q-J+Z*(m?F(v.y,b.tickRotCorr.y+8*Z):v.x));b.axisTitleMargin=F(R,q);b.getMaxLabelDimensions&&(b.maxLabelDimensions=b.getMaxLabelDimensions(f,d));m=this.tickSize("tick");V[w]=Math.max(V[w],b.axisTitleMargin+l+Z*b.offset,q,d&&d.length&&m?m[0]+Z*b.offset:0);h=h.offset?0:2*Math.floor(b.axisLine.strokeWidth()/2);e[n]=Math.max(e[n],h);z(this,"afterGetOffset")};f.prototype.getLinePath=function(a){var b=
this.chart,e=this.opposite,c=this.offset,g=this.horiz,h=this.left+(e?this.width:0)+c;c=b.chartHeight-this.bottom-(e?this.height:0)+c;e&&(a*=-1);return b.renderer.crispLine([["M",g?this.left:h,g?c:this.top],["L",g?b.chartWidth-this.right:h,g?c:b.chartHeight-this.bottom]],a)};f.prototype.renderLine=function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.chart.styledMode||this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,
zIndex:7}))};f.prototype.getTitlePosition=function(){var a=this.horiz,b=this.left,e=this.top,c=this.len,g=this.options.title,h=a?b:e,d=this.opposite,f=this.offset,m=g.x||0,w=g.y||0,n=this.axisTitle,r=this.chart.renderer.fontMetrics(g.style&&g.style.fontSize,n);n=Math.max(n.getBBox(null,0).height-r.h-1,0);c={low:h+(a?0:c),middle:h+c/2,high:h+(a?c:0)}[g.align];b=(a?e+this.height:b)+(a?1:-1)*(d?-1:1)*this.axisTitleMargin+[-n,n,r.f,-n][this.side];a={x:a?c+m:b+(d?this.width:0)+f+m,y:a?b+w-(d?this.height:
0)+f:c+w};z(this,"afterGetTitlePosition",{titlePosition:a});return a};f.prototype.renderMinorTick=function(a){var b=this.chart.hasRendered&&this.old,e=this.minorTicks;e[a]||(e[a]=new G(this,a,"minor"));b&&e[a].isNew&&e[a].render(null,!0);e[a].render(null,!1,1)};f.prototype.renderTick=function(a,b){var e,c=this.ticks,g=this.chart.hasRendered&&this.old;if(!this.isLinked||a>=this.min&&a<=this.max||(null===(e=this.grid)||void 0===e?0:e.isColumn))c[a]||(c[a]=new G(this,a)),g&&c[a].isNew&&c[a].render(b,
!0,-1),c[a].render(b)};f.prototype.render=function(){var b=this,e=b.chart,c=b.logarithmic,g=b.options,h=b.isLinked,d=b.tickPositions,f=b.axisTitle,m=b.ticks,w=b.minorTicks,n=b.alternateBands,r=g.stackLabels,q=g.alternateGridColor,l=b.tickmarkOffset,J=b.axisLine,F=b.showAxis,v=H(e.renderer.globalAnimation),V,N;b.labelEdge.length=0;b.overlap=!1;[m,w,n].forEach(function(a){O(a,function(a){a.isActive=!1})});if(b.hasData()||h)b.minorTickInterval&&!b.categories&&b.getMinorTickPositions().forEach(function(a){b.renderMinorTick(a)}),
d.length&&(d.forEach(function(a,e){b.renderTick(a,e)}),l&&(0===b.min||b.single)&&(m[-1]||(m[-1]=new G(b,-1,null,!0)),m[-1].render(-1))),q&&d.forEach(function(a,g){N="undefined"!==typeof d[g+1]?d[g+1]+l:b.max-l;0===g%2&&a<b.max&&N<=b.max+(e.polar?-l:l)&&(n[a]||(n[a]=new k.PlotLineOrBand(b)),V=a+l,n[a].options={from:c?c.lin2log(V):V,to:c?c.lin2log(N):N,color:q,className:"highcharts-alternate-grid"},n[a].render(),n[a].isActive=!0)}),b._addedPlotLB||(b._addedPlotLB=!0,(g.plotLines||[]).concat(g.plotBands||
[]).forEach(function(a){b.addPlotBandOrLine(a)}));[m,w,n].forEach(function(a){var b,c=[],g=v.duration;O(a,function(a,b){a.isActive||(a.render(b,!1,0),a.isActive=!1,c.push(b))});T(function(){for(b=c.length;b--;)a[c[b]]&&!a[c[b]].isActive&&(a[c[b]].destroy(),delete a[c[b]])},a!==n&&e.hasRendered&&g?g:0)});J&&(J[J.isPlaced?"animate":"attr"]({d:this.getLinePath(J.strokeWidth())}),J.isPlaced=!0,J[F?"show":"hide"](F));f&&F&&(g=b.getTitlePosition(),a(g.y)?(f[f.isNew?"attr":"animate"](g),f.isNew=!1):(f.attr("y",
-9999),f.isNew=!0));r&&r.enabled&&b.stacking&&b.stacking.renderStackTotals();b.old={len:b.len,max:b.max,min:b.min,transA:b.transA,userMax:b.userMax,userMin:b.userMin};b.isDirty=!1;z(this,"afterRender")};f.prototype.redraw=function(){this.visible&&(this.render(),this.plotLinesAndBands.forEach(function(a){a.render()}));this.series.forEach(function(a){a.isDirty=!0})};f.prototype.getKeepProps=function(){return this.keepProps||f.keepProps};f.prototype.destroy=function(a){var b=this,e=b.plotLinesAndBands,
c;z(this,"destroy",{keepEvents:a});a||R(b);[b.ticks,b.minorTicks,b.alternateBands].forEach(function(a){q(a)});if(e)for(a=e.length;a--;)e[a].destroy();"axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(a){b[a]&&(b[a]=b[a].destroy())});for(c in b.plotLinesAndBandsGroups)b.plotLinesAndBandsGroups[c]=b.plotLinesAndBandsGroups[c].destroy();O(b,function(a,e){-1===b.getKeepProps().indexOf(e)&&delete b[e]})};f.prototype.drawCrosshair=function(a,b){var e=this.crosshair,
g=F(e.snap,!0),h,f=this.cross,m=this.chart;z(this,"drawCrosshair",{e:a,point:b});a||(a=this.cross&&this.cross.e);if(this.crosshair&&!1!==(c(b)||!g)){g?c(b)&&(h=F("colorAxis"!==this.coll?b.crosshairPos:null,this.isXAxis?b.plotX:this.len-b.plotY)):h=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos);if(c(h)){var p={value:b&&(this.isXAxis?b.x:F(b.stackY,b.y)),translatedValue:h};m.polar&&M(p,{isCrosshair:!0,chartX:a&&a.chartX,chartY:a&&a.chartY,point:b});p=this.getPlotLinePath(p)||null}if(!c(p)){this.hideCrosshair();
return}g=this.categories&&!this.isRadial;f||(this.cross=f=m.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(g?"category ":"thin ")+e.className).attr({zIndex:F(e.zIndex,2)}).add(),m.styledMode||(f.attr({stroke:e.color||(g?d.parse(x.highlightColor20).setOpacity(.25).get():x.neutralColor20),"stroke-width":F(e.width,1)}).css({"pointer-events":"none"}),e.dashStyle&&f.attr({dashstyle:e.dashStyle})));f.show().attr({d:p});g&&!e.width&&f.attr({"stroke-width":this.transA});this.cross.e=
a}else this.hideCrosshair();z(this,"afterDrawCrosshair",{e:a,point:b})};f.prototype.hideCrosshair=function(){this.cross&&this.cross.hide();z(this,"afterHideCrosshair")};f.prototype.hasVerticalPanning=function(){var a,b=null===(a=this.chart.options.chart)||void 0===a?void 0:a.panning;return!!(b&&b.enabled&&/y/.test(b.type))};f.prototype.validatePositiveValue=function(b){return a(b)&&0<b};f.prototype.update=function(a,b){var e=this.chart,c=a&&a.events||{};a=w(this.userOptions,a);e.options[this.coll].indexOf&&
(e.options[this.coll][e.options[this.coll].indexOf(this.userOptions)]=a);O(e.options[this.coll].events,function(a,b){"undefined"===typeof c[b]&&(c[b]=void 0)});this.destroy(!0);this.init(e,M(a,{events:c}));e.isDirtyBox=!0;F(b,!0)&&e.redraw()};f.prototype.remove=function(a){for(var b=this.chart,c=this.coll,g=this.series,h=g.length;h--;)g[h]&&g[h].remove(!1);n(b.axes,this);n(b[c],this);e(b.options[c])?b.options[c].splice(this.options.index,1):delete b.options[c];b[c].forEach(function(a,b){a.options.index=
a.userOptions.index=b});this.destroy();b.isDirtyBox=!0;F(a,!0)&&b.redraw()};f.prototype.setTitle=function(a,b){this.update({title:a},b)};f.prototype.setCategories=function(a,b){this.update({categories:a},b)};f.defaultOptions={dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},week:{main:"%e. %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,labels:{enabled:!0,indentation:10,
x:0,style:{color:x.neutralColor60,cursor:"default",fontSize:"11px"}},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,showEmpty:!0,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",style:{color:x.neutralColor60}},type:"linear",minorGridLineColor:x.neutralColor5,minorGridLineWidth:1,minorTickColor:x.neutralColor40,lineColor:x.highlightColor20,lineWidth:1,gridLineColor:x.neutralColor10,
tickColor:x.highlightColor20};f.defaultYAxisOptions={endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{animation:{},allowOverlap:!1,enabled:!1,crop:!0,overflow:"justify",formatter:function(){var a=this.axis.chart.numberFormatter;return a(this.total,-1)},style:{color:x.neutralColor100,fontSize:"11px",fontWeight:"bold",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0};f.defaultLeftAxisOptions=
{labels:{x:-15},title:{rotation:270}};f.defaultRightAxisOptions={labels:{x:15},title:{rotation:90}};f.defaultBottomAxisOptions={labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}};f.defaultTopAxisOptions={labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}};f.keepProps="extKey hcEvents names series userMax userMin".split(" ");return f}();k.Axis=f;return k.Axis});P(k,"Core/Axis/DateTimeAxis.js",[k["Core/Axis/Axis.js"],k["Core/Utilities.js"]],function(f,d){var k=d.addEvent,x=d.getMagnitude,
B=d.normalizeTickInterval,G=d.timeUnits,D=function(){function d(d){this.axis=d}d.prototype.normalizeTimeTickInterval=function(d,f){var l=f||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];f=l[l.length-1];var k=G[f[0]],g=f[1],t;for(t=0;t<l.length&&!(f=l[t],k=G[f[0]],g=f[1],l[t+1]&&d<=(k*g[g.length-1]+G[l[t+1][0]])/2);t++);k===G.year&&d<5*k&&(g=[1,2,5]);
d=B(d/k,g,"year"===f[0]?Math.max(x(d/k),1):1);return{unitRange:k,count:d,unitName:f[0]}};return d}();d=function(){function d(){}d.compose=function(d){d.keepProps.push("dateTime");d.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};k(d,"init",function(d){"datetime"!==d.userOptions.type?this.dateTime=void 0:this.dateTime||(this.dateTime=new D(this))})};d.AdditionsClass=D;return d}();d.compose(f);return d});P(k,"Core/Axis/LogarithmicAxis.js",[k["Core/Axis/Axis.js"],
k["Core/Utilities.js"]],function(f,d){var k=d.addEvent,x=d.getMagnitude,B=d.normalizeTickInterval,G=d.pick,D=function(){function d(d){this.axis=d}d.prototype.getLogTickPositions=function(d,f,l,k){var g=this.axis,y=g.len,c=g.options,q=[];k||(this.minorAutoInterval=void 0);if(.5<=d)d=Math.round(d),q=g.getLinearTickPositions(d,f,l);else if(.08<=d){c=Math.floor(f);var n,A;for(y=.3<d?[1,2,4]:.15<d?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];c<l+1&&!A;c++){var t=y.length;for(n=0;n<t&&!A;n++){var z=this.log2lin(this.lin2log(c)*
y[n]);z>f&&(!k||m<=l)&&"undefined"!==typeof m&&q.push(m);m>l&&(A=!0);var m=z}}}else f=this.lin2log(f),l=this.lin2log(l),d=k?g.getMinorTickInterval():c.tickInterval,d=G("auto"===d?null:d,this.minorAutoInterval,c.tickPixelInterval/(k?5:1)*(l-f)/((k?y/g.tickPositions.length:y)||1)),d=B(d,void 0,x(d)),q=g.getLinearTickPositions(d,f,l).map(this.log2lin),k||(this.minorAutoInterval=d/5);k||(g.tickInterval=d);return q};d.prototype.lin2log=function(d){return Math.pow(10,d)};d.prototype.log2lin=function(d){return Math.log(d)/
Math.LN10};return d}();d=function(){function d(){}d.compose=function(d){d.keepProps.push("logarithmic");k(d,"init",function(d){var f=this.logarithmic;"logarithmic"!==d.userOptions.type?this.logarithmic=void 0:f||(this.logarithmic=new D(this))});k(d,"afterInit",function(){var d=this.logarithmic;d&&(this.lin2val=function(f){return d.lin2log(f)},this.val2lin=function(f){return d.log2lin(f)})})};return d}();d.compose(f);return d});P(k,"Core/Axis/PlotLineOrBand.js",[k["Core/Axis/Axis.js"],k["Core/Globals.js"],
k["Core/Color/Palette.js"],k["Core/Utilities.js"]],function(f,d,k,x){var B=x.arrayMax,G=x.arrayMin,D=x.defined,H=x.destroyObjectProperties,t=x.erase,C=x.extend,l=x.fireEvent,E=x.merge,g=x.objectEach,y=x.pick;x=function(){function c(c,g){this.axis=c;g&&(this.options=g,this.id=g.id)}c.prototype.render=function(){l(this,"render");var c=this,d=c.axis,f=d.horiz,t=d.logarithmic,z=c.options,m=z.label,r=c.label,e=z.to,h=z.from,a=z.value,b=D(h)&&D(e),w=D(a),J=c.svgElem,O=!J,F=[],N=z.color,R=y(z.zIndex,0),
Q=z.events;F={"class":"highcharts-plot-"+(b?"band ":"line ")+(z.className||"")};var C={},v=d.chart.renderer,x=b?"bands":"lines";t&&(h=t.log2lin(h),e=t.log2lin(e),a=t.log2lin(a));d.chart.styledMode||(w?(F.stroke=N||k.neutralColor40,F["stroke-width"]=y(z.width,1),z.dashStyle&&(F.dashstyle=z.dashStyle)):b&&(F.fill=N||k.highlightColor10,z.borderWidth&&(F.stroke=z.borderColor,F["stroke-width"]=z.borderWidth)));C.zIndex=R;x+="-"+R;(t=d.plotLinesAndBandsGroups[x])||(d.plotLinesAndBandsGroups[x]=t=v.g("plot-"+
x).attr(C).add());O&&(c.svgElem=J=v.path().attr(F).add(t));if(w)F=d.getPlotLinePath({value:a,lineWidth:J.strokeWidth(),acrossPanes:z.acrossPanes});else if(b)F=d.getPlotBandPath(h,e,z);else return;!c.eventsAdded&&Q&&(g(Q,function(a,b){J.on(b,function(a){Q[b].apply(c,[a])})}),c.eventsAdded=!0);(O||!J.d)&&F&&F.length?J.attr({d:F}):J&&(F?(J.show(!0),J.animate({d:F})):J.d&&(J.hide(),r&&(c.label=r=r.destroy())));m&&(D(m.text)||D(m.formatter))&&F&&F.length&&0<d.width&&0<d.height&&!F.isFlat?(m=E({align:f&&
b&&"center",x:f?!b&&4:10,verticalAlign:!f&&b&&"middle",y:f?b?16:10:b?6:-4,rotation:f&&!b&&90},m),this.renderLabel(m,F,b,R)):r&&r.hide();return c};c.prototype.renderLabel=function(c,g,d,f){var n=this.label,m=this.axis.chart.renderer;n||(n={align:c.textAlign||c.align,rotation:c.rotation,"class":"highcharts-plot-"+(d?"band":"line")+"-label "+(c.className||"")},n.zIndex=f,f=this.getLabelText(c),this.label=n=m.text(f,0,0,c.useHTML).attr(n).add(),this.axis.chart.styledMode||n.css(c.style));m=g.xBounds||
[g[0][1],g[1][1],d?g[2][1]:g[0][1]];g=g.yBounds||[g[0][2],g[1][2],d?g[2][2]:g[0][2]];d=G(m);f=G(g);n.align(c,!1,{x:d,y:f,width:B(m)-d,height:B(g)-f});n.show(!0)};c.prototype.getLabelText=function(c){return D(c.formatter)?c.formatter.call(this):c.text};c.prototype.destroy=function(){t(this.axis.plotLinesAndBands,this);delete this.axis;H(this)};return c}();C(f.prototype,{getPlotBandPath:function(c,g,d){void 0===d&&(d=this.options);var f=this.getPlotLinePath({value:g,force:!0,acrossPanes:d.acrossPanes});
d=this.getPlotLinePath({value:c,force:!0,acrossPanes:d.acrossPanes});var n=[],l=this.horiz,m=1;c=c<this.min&&g<this.min||c>this.max&&g>this.max;if(d&&f){if(c){var r=d.toString()===f.toString();m=0}for(c=0;c<d.length;c+=2){g=d[c];var e=d[c+1],h=f[c],a=f[c+1];"M"!==g[0]&&"L"!==g[0]||"M"!==e[0]&&"L"!==e[0]||"M"!==h[0]&&"L"!==h[0]||"M"!==a[0]&&"L"!==a[0]||(l&&h[1]===g[1]?(h[1]+=m,a[1]+=m):l||h[2]!==g[2]||(h[2]+=m,a[2]+=m),n.push(["M",g[1],g[2]],["L",e[1],e[2]],["L",a[1],a[2]],["L",h[1],h[2]],["Z"]));
n.isFlat=r}}return n},addPlotBand:function(c){return this.addPlotBandOrLine(c,"plotBands")},addPlotLine:function(c){return this.addPlotBandOrLine(c,"plotLines")},addPlotBandOrLine:function(c,g){var f=this,l=new d.PlotLineOrBand(this,c),q=this.userOptions;this.visible&&(l=l.render());if(l){this._addedPlotLB||(this._addedPlotLB=!0,(q.plotLines||[]).concat(q.plotBands||[]).forEach(function(c){f.addPlotBandOrLine(c)}));if(g){var k=q[g]||[];k.push(c);q[g]=k}this.plotLinesAndBands.push(l)}return l},removePlotBandOrLine:function(c){for(var g=
this.plotLinesAndBands,d=this.options,f=this.userOptions,l=g.length;l--;)g[l].id===c&&g[l].destroy();[d.plotLines||[],f.plotLines||[],d.plotBands||[],f.plotBands||[]].forEach(function(g){for(l=g.length;l--;)(g[l]||{}).id===c&&t(g,g[l])})},removePlotBand:function(c){this.removePlotBandOrLine(c)},removePlotLine:function(c){this.removePlotBandOrLine(c)}});d.PlotLineOrBand=x;return d.PlotLineOrBand});P(k,"Core/Tooltip.js",[k["Core/Globals.js"],k["Core/Color/Palette.js"],k["Core/Utilities.js"]],function(f,
d,k){var x=f.doc,B=k.clamp,G=k.css,D=k.defined,H=k.discardElement,t=k.extend,C=k.fireEvent,l=k.format,E=k.isNumber,g=k.isString,y=k.merge,c=k.pick,q=k.splat,n=k.syncTimeout,A=k.timeUnits;"";var M=function(){function z(c,g){this.container=void 0;this.crosshairs=[];this.distance=0;this.isHidden=!0;this.isSticky=!1;this.now={};this.options={};this.outside=!1;this.chart=c;this.init(c,g)}z.prototype.applyFilter=function(){var c=this.chart;c.renderer.definition({tagName:"filter",attributes:{id:"drop-shadow-"+
c.index,opacity:.5},children:[{tagName:"feGaussianBlur",attributes:{"in":"SourceAlpha",stdDeviation:1}},{tagName:"feOffset",attributes:{dx:1,dy:1}},{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",attributes:{type:"linear",slope:.3}}]},{tagName:"feMerge",children:[{tagName:"feMergeNode"},{tagName:"feMergeNode",attributes:{"in":"SourceGraphic"}}]}]});c.renderer.definition({tagName:"style",textContent:".highcharts-tooltip-"+c.index+"{filter:url(#drop-shadow-"+c.index+")}"})};z.prototype.bodyFormatter=
function(c){return c.map(function(c){var e=c.series.tooltipOptions;return(e[(c.point.formatPrefix||"point")+"Formatter"]||c.point.tooltipFormatter).call(c.point,e[(c.point.formatPrefix||"point")+"Format"]||"")})};z.prototype.cleanSplit=function(c){this.chart.series.forEach(function(g){var e=g&&g.tt;e&&(!e.isActive||c?g.tt=e.destroy():e.isActive=!1)})};z.prototype.defaultFormatter=function(c){var g=this.points||q(this);var e=[c.tooltipFooterHeaderFormatter(g[0])];e=e.concat(c.bodyFormatter(g));e.push(c.tooltipFooterHeaderFormatter(g[0],
!0));return e};z.prototype.destroy=function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());this.renderer&&(this.renderer=this.renderer.destroy(),H(this.container));k.clearTimeout(this.hideTimer);k.clearTimeout(this.tooltipTimeout)};z.prototype.getAnchor=function(c,g){var e=this.chart;var d=e.pointer;var a=e.inverted,b=e.plotTop,f=e.plotLeft,m=0,n=0,l,r;c=q(c);this.followPointer&&g?("undefined"===typeof g.chartX&&(g=d.normalize(g)),
d=[g.chartX-f,g.chartY-b]):c[0].tooltipPos?d=c[0].tooltipPos:(c.forEach(function(c){l=c.series.yAxis;r=c.series.xAxis;m+=c.plotX||0;n+=c.plotLow?(c.plotLow+(c.plotHigh||0))/2:c.plotY||0;r&&l&&(a?(m+=b+e.plotHeight-r.len-r.pos,n+=f+e.plotWidth-l.len-l.pos):(m+=r.pos-f,n+=l.pos-b))}),m/=c.length,n/=c.length,d=[a?e.plotWidth-n:m,a?e.plotHeight-m:n],this.shared&&1<c.length&&g&&(a?d[0]=g.chartX-f:d[1]=g.chartY-b));return d.map(Math.round)};z.prototype.getDateFormat=function(c,g,e,d){var a=this.chart.time,
b=a.dateFormat("%m-%d %H:%M:%S.%L",g),h={millisecond:15,second:12,minute:9,hour:6,day:3},f="millisecond";for(m in A){if(c===A.week&&+a.dateFormat("%w",g)===e&&"00:00:00.000"===b.substr(6)){var m="week";break}if(A[m]>c){m=f;break}if(h[m]&&b.substr(h[m])!=="01-01 00:00:00.000".substr(h[m]))break;"week"!==m&&(f=m)}if(m)var n=a.resolveDTLFormat(d[m]).main;return n};z.prototype.getLabel=function(){var c,g,e,d=this,a=this.chart.renderer,b=this.chart.styledMode,w=this.options,n="tooltip"+(D(w.className)?
" "+w.className:""),l=(null===(c=w.style)||void 0===c?void 0:c.pointerEvents)||(!this.followPointer&&w.stickOnContact?"auto":"none"),q;c=function(){d.inContact=!0};var k=function(){var a=d.chart.hoverSeries;d.inContact=!1;if(a&&a.onMouseOut)a.onMouseOut()};if(!this.label){if(this.outside){var t=null===(g=this.chart.options.chart)||void 0===g?void 0:g.style;this.container=q=f.doc.createElement("div");q.className="highcharts-tooltip-container";G(q,{position:"absolute",top:"1px",pointerEvents:l,zIndex:Math.max((null===
(e=this.options.style)||void 0===e?void 0:e.zIndex)||0,((null===t||void 0===t?void 0:t.zIndex)||0)+3)});f.doc.body.appendChild(q);this.renderer=a=new f.Renderer(q,0,0,t,void 0,void 0,a.styledMode)}this.split?this.label=a.g(n):(this.label=a.label("",0,0,w.shape||"callout",null,null,w.useHTML,null,n).attr({padding:w.padding,r:w.borderRadius}),b||this.label.attr({fill:w.backgroundColor,"stroke-width":w.borderWidth}).css(w.style).css({pointerEvents:l}).shadow(w.shadow));b&&(this.applyFilter(),this.label.addClass("highcharts-tooltip-"+
this.chart.index));if(d.outside&&!d.split){var y=this.label,z=y.xSetter,v=y.ySetter;y.xSetter=function(a){z.call(y,d.distance);q.style.left=a+"px"};y.ySetter=function(a){v.call(y,d.distance);q.style.top=a+"px"}}this.label.on("mouseenter",c).on("mouseleave",k).attr({zIndex:8}).add()}return this.label};z.prototype.getPosition=function(g,d,e){var h=this.chart,a=this.distance,b={},f=h.inverted&&e.h||0,m,n=this.outside,l=n?x.documentElement.clientWidth-2*a:h.chartWidth,r=n?Math.max(x.body.scrollHeight,
x.documentElement.scrollHeight,x.body.offsetHeight,x.documentElement.offsetHeight,x.documentElement.clientHeight):h.chartHeight,q=h.pointer.getChartPosition(),k=function(b){var c="x"===b;return[b,c?l:r,c?g:d].concat(n?[c?g*q.scaleX:d*q.scaleY,c?q.left-a+(e.plotX+h.plotLeft)*q.scaleX:q.top-a+(e.plotY+h.plotTop)*q.scaleY,0,c?l:r]:[c?g:d,c?e.plotX+h.plotLeft:e.plotY+h.plotTop,c?h.plotLeft:h.plotTop,c?h.plotLeft+h.plotWidth:h.plotTop+h.plotHeight])},y=k("y"),v=k("x"),t=!this.followPointer&&c(e.ttBelow,
!h.inverted===!!e.negative),p=function(e,c,g,d,h,m,p){var u=n?"y"===e?a*q.scaleY:a*q.scaleX:a,w=(g-d)/2,l=d<h-a,r=h+a+d<c,J=h-u-g+w;h=h+u-w;if(t&&r)b[e]=h;else if(!t&&l)b[e]=J;else if(l)b[e]=Math.min(p-d,0>J-f?J:J-f);else if(r)b[e]=Math.max(m,h+f+g>c?h:h+f);else return!1},z=function(e,c,g,d,h){var f;h<a||h>c-a?f=!1:b[e]=h<g/2?1:h>c-d/2?c-d-2:h-g/2;return f},A=function(a){var b=y;y=v;v=b;m=a},E=function(){!1!==p.apply(0,y)?!1!==z.apply(0,v)||m||(A(!0),E()):m?b.x=b.y=0:(A(!0),E())};(h.inverted||1<this.len)&&
A();E();return b};z.prototype.getXDateFormat=function(c,g,e){g=g.dateTimeLabelFormats;var d=e&&e.closestPointRange;return(d?this.getDateFormat(d,c.x,e.options.startOfWeek,g):g.day)||g.year};z.prototype.hide=function(g){var d=this;k.clearTimeout(this.hideTimer);g=c(g,this.options.hideDelay,500);this.isHidden||(this.hideTimer=n(function(){d.getLabel().fadeOut(g?void 0:g);d.isHidden=!0},g))};z.prototype.init=function(g,d){this.chart=g;this.options=d;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=
!0;this.split=d.split&&!g.inverted&&!g.polar;this.shared=d.shared||this.split;this.outside=c(d.outside,!(!g.scrollablePixelsX&&!g.scrollablePixelsY))};z.prototype.isStickyOnContact=function(){return!(this.followPointer||!this.options.stickOnContact||!this.inContact)};z.prototype.move=function(c,g,e,d){var a=this,b=a.now,h=!1!==a.options.animation&&!a.isHidden&&(1<Math.abs(c-b.x)||1<Math.abs(g-b.y)),f=a.followPointer||1<a.len;t(b,{x:h?(2*b.x+c)/3:c,y:h?(b.y+g)/2:g,anchorX:f?void 0:h?(2*b.anchorX+e)/
3:e,anchorY:f?void 0:h?(b.anchorY+d)/2:d});a.getLabel().attr(b);a.drawTracker();h&&(k.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){a&&a.move(c,g,e,d)},32))};z.prototype.refresh=function(g,f){var e=this.chart,h=this.options,a=g,b={},m=[],n=h.formatter||this.defaultFormatter;b=this.shared;var l=e.styledMode;if(h.enabled){k.clearTimeout(this.hideTimer);this.followPointer=q(a)[0].series.tooltipOptions.followPointer;var r=this.getAnchor(a,f);f=r[0];var N=r[1];!b||a.series&&
a.series.noSharedTooltip?b=a.getLabelConfig():(e.pointer.applyInactiveState(a),a.forEach(function(a){a.setState("hover");m.push(a.getLabelConfig())}),b={x:a[0].category,y:a[0].y},b.points=m,a=a[0]);this.len=m.length;e=n.call(b,this);n=a.series;this.distance=c(n.tooltipOptions.distance,16);!1===e?this.hide():(this.split?this.renderSplit(e,q(g)):(g=this.getLabel(),h.style.width&&!l||g.css({width:this.chart.spacingBox.width+"px"}),g.attr({text:e&&e.join?e.join(""):e}),g.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+
c(a.colorIndex,n.colorIndex)),l||g.attr({stroke:h.borderColor||a.color||n.color||d.neutralColor60}),this.updatePosition({plotX:f,plotY:N,negative:a.negative,ttBelow:a.ttBelow,h:r[2]||0})),this.isHidden&&this.label&&this.label.attr({opacity:1}).show(),this.isHidden=!1);C(this,"refresh")}};z.prototype.renderSplit=function(m,n){function e(a,b,e,c,g){void 0===g&&(g=!0);e?(b=aa?0:U,a=B(a-c/2,x.left,x.right-c)):(b-=I,a=g?a-c-p:a+p,a=B(a,g?a:x.left,x.right));return{x:a,y:b}}var h=this,a=h.chart,b=h.chart,
w=b.plotHeight,l=b.plotLeft,q=b.plotTop,r=b.pointer,k=b.renderer,y=b.scrollablePixelsY,z=void 0===y?0:y;y=b.scrollingContainer;y=void 0===y?{scrollLeft:0,scrollTop:0}:y;var A=y.scrollLeft,v=y.scrollTop,E=b.styledMode,p=h.distance,C=h.options,M=h.options.positioner,x={left:A,right:A+b.chartWidth,top:v,bottom:v+b.chartHeight},u=h.getLabel(),aa=!(!a.xAxis[0]||!a.xAxis[0].opposite),I=q+v,X=0,U=w-z;g(m)&&(m=[!1,m]);m=m.slice(0,n.length+1).reduce(function(a,b,g){if(!1!==b&&""!==b){g=n[g-1]||{isHeader:!0,
plotX:n[0].plotX,plotY:w,series:{}};var f=g.isHeader,m=f?h:g.series,r=m.tt,J=g.isHeader;var F=g.series;var N="highcharts-color-"+c(g.colorIndex,F.colorIndex,"none");r||(r={padding:C.padding,r:C.borderRadius},E||(r.fill=C.backgroundColor,r["stroke-width"]=C.borderWidth),r=k.label("",0,0,C[J?"headerShape":"shape"]||"callout",void 0,void 0,C.useHTML).addClass((J?"highcharts-tooltip-header ":"")+"highcharts-tooltip-box "+N).attr(r).add(u));r.isActive=!0;r.attr({text:b});E||r.css(C.style).shadow(C.shadow).attr({stroke:C.borderColor||
g.color||F.color||d.neutralColor80});b=m.tt=r;J=b.getBBox();m=J.width+b.strokeWidth();f&&(X=J.height,U+=X,aa&&(I-=X));F=g.plotX;F=void 0===F?0:F;N=g.plotY;N=void 0===N?0:N;var O=g.series;if(g.isHeader){F=l+F;var y=q+w/2}else r=O.xAxis,O=O.yAxis,F=r.pos+B(F,-p,r.len+p),O.pos+N>=v+q&&O.pos+N<=v+q+w-z&&(y=O.pos+N);F=B(F,x.left-p,x.right+p);"number"===typeof y?(J=J.height+1,N=M?M.call(h,m,J,g):e(F,y,f,m),a.push({align:M?0:void 0,anchorX:F,anchorY:y,boxWidth:m,point:g,rank:c(N.rank,f?1:0),size:J,target:N.y,
tt:b,x:N.x})):b.isActive=!1}return a},[]);!M&&m.some(function(a){return a.x<x.left})&&(m=m.map(function(a){var b=e(a.anchorX,a.anchorY,a.point.isHeader,a.boxWidth,!1);return t(a,{target:b.y,x:b.x})}));h.cleanSplit();f.distribute(m,U);m.forEach(function(a){var b=a.pos;a.tt.attr({visibility:"undefined"===typeof b?"hidden":"inherit",x:a.x,y:b+I,anchorX:a.anchorX,anchorY:a.anchorY})});m=h.container;a=h.renderer;h.outside&&m&&a&&(b=u.getBBox(),a.setSize(b.width+b.x,b.height+b.y,!1),r=r.getChartPosition(),
m.style.left=r.left+"px",m.style.top=r.top+"px")};z.prototype.drawTracker=function(){if(this.followPointer||!this.options.stickOnContact)this.tracker&&this.tracker.destroy();else{var c=this.chart,g=this.label,e=c.hoverPoint;if(g&&e){var d={x:0,y:0,width:0,height:0};e=this.getAnchor(e);var a=g.getBBox();e[0]+=c.plotLeft-g.translateX;e[1]+=c.plotTop-g.translateY;d.x=Math.min(0,e[0]);d.y=Math.min(0,e[1]);d.width=0>e[0]?Math.max(Math.abs(e[0]),a.width-e[0]):Math.max(Math.abs(e[0]),a.width);d.height=0>
e[1]?Math.max(Math.abs(e[1]),a.height-Math.abs(e[1])):Math.max(Math.abs(e[1]),a.height);this.tracker?this.tracker.attr(d):(this.tracker=g.renderer.rect(d).addClass("highcharts-tracker").add(g),c.styledMode||this.tracker.attr({fill:"rgba(0,0,0,0)"}))}}};z.prototype.styledModeFormat=function(c){return c.replace('style="font-size: 10px"','class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g,'class="highcharts-color-{$1.colorIndex}"')};z.prototype.tooltipFooterHeaderFormatter=
function(c,g){var e=g?"footer":"header",d=c.series,a=d.tooltipOptions,b=a.xDateFormat,f=d.xAxis,m=f&&"datetime"===f.options.type&&E(c.key),n=a[e+"Format"];g={isFooter:g,labelConfig:c};C(this,"headerFormatter",g,function(e){m&&!b&&(b=this.getXDateFormat(c,a,f));m&&b&&(c.point&&c.point.tooltipDateKeys||["key"]).forEach(function(a){n=n.replace("{point."+a+"}","{point."+a+":"+b+"}")});d.chart.styledMode&&(n=this.styledModeFormat(n));e.text=l(n,{point:c,series:d},this.chart)});return g.text};z.prototype.update=
function(c){this.destroy();y(!0,this.chart.options.tooltip.userOptions,c);this.init(this.chart,y(!0,this.options,c))};z.prototype.updatePosition=function(c){var g=this.chart,e=g.pointer,d=this.getLabel(),a=c.plotX+g.plotLeft;g=c.plotY+g.plotTop;e=e.getChartPosition();c=(this.options.positioner||this.getPosition).call(this,d.width,d.height,c);if(this.outside){var b=(this.options.borderWidth||0)+2*this.distance;this.renderer.setSize(d.width+b,d.height+b,!1);if(1!==e.scaleX||1!==e.scaleY)G(this.container,
{transform:"scale("+e.scaleX+", "+e.scaleY+")"}),a*=e.scaleX,g*=e.scaleY;a+=e.left-c.x;g+=e.top-c.y}this.move(Math.round(c.x),Math.round(c.y||0),a,g)};return z}();f.Tooltip=M;return f.Tooltip});P(k,"Core/Pointer.js",[k["Core/Color/Color.js"],k["Core/Globals.js"],k["Core/Color/Palette.js"],k["Core/Tooltip.js"],k["Core/Utilities.js"]],function(f,d,k,x,B){var G=f.parse,D=d.charts,H=d.noop,t=B.addEvent,C=B.attr,l=B.css,E=B.defined,g=B.extend,y=B.find,c=B.fireEvent,q=B.isNumber,n=B.isObject,A=B.objectEach,
M=B.offset,z=B.pick,m=B.splat;"";f=function(){function f(e,c){this.lastValidTouch={};this.pinchDown=[];this.runChartClick=!1;this.chart=e;this.hasDragged=!1;this.options=c;this.unbindContainerMouseLeave=function(){};this.unbindContainerMouseEnter=function(){};this.init(e,c)}f.prototype.applyInactiveState=function(e){var c=[],a;(e||[]).forEach(function(b){a=b.series;c.push(a);a.linkedParent&&c.push(a.linkedParent);a.linkedSeries&&(c=c.concat(a.linkedSeries));a.navigatorSeries&&c.push(a.navigatorSeries)});
this.chart.series.forEach(function(a){-1===c.indexOf(a)?a.setState("inactive",!0):a.options.inactiveOtherPoints&&a.setAllPointsToState("inactive")})};f.prototype.destroy=function(){var e=this;"undefined"!==typeof e.unDocMouseMove&&e.unDocMouseMove();this.unbindContainerMouseLeave();d.chartCount||(d.unbindDocumentMouseUp&&(d.unbindDocumentMouseUp=d.unbindDocumentMouseUp()),d.unbindDocumentTouchEnd&&(d.unbindDocumentTouchEnd=d.unbindDocumentTouchEnd()));clearInterval(e.tooltipTimeout);A(e,function(c,
a){e[a]=void 0})};f.prototype.drag=function(e){var c=this.chart,a=c.options.chart,b=e.chartX,g=e.chartY,d=this.zoomHor,f=this.zoomVert,m=c.plotLeft,l=c.plotTop,q=c.plotWidth,r=c.plotHeight,y=this.selectionMarker,v=this.mouseDownX||0,t=this.mouseDownY||0,p=n(a.panning)?a.panning&&a.panning.enabled:a.panning,z=a.panKey&&e[a.panKey+"Key"];if(!y||!y.touch)if(b<m?b=m:b>m+q&&(b=m+q),g<l?g=l:g>l+r&&(g=l+r),this.hasDragged=Math.sqrt(Math.pow(v-b,2)+Math.pow(t-g,2)),10<this.hasDragged){var A=c.isInsidePlot(v-
m,t-l);c.hasCartesianSeries&&(this.zoomX||this.zoomY)&&A&&!z&&!y&&(this.selectionMarker=y=c.renderer.rect(m,l,d?1:q,f?1:r,0).attr({"class":"highcharts-selection-marker",zIndex:7}).add(),c.styledMode||y.attr({fill:a.selectionMarkerFill||G(k.highlightColor80).setOpacity(.25).get()}));y&&d&&(b-=v,y.attr({width:Math.abs(b),x:(0<b?0:b)+v}));y&&f&&(b=g-t,y.attr({height:Math.abs(b),y:(0<b?0:b)+t}));A&&!y&&p&&c.pan(e,a.panning)}};f.prototype.dragStart=function(e){var c=this.chart;c.mouseIsDown=e.type;c.cancelClick=
!1;c.mouseDownX=this.mouseDownX=e.chartX;c.mouseDownY=this.mouseDownY=e.chartY};f.prototype.drop=function(e){var d=this,a=this.chart,b=this.hasPinched;if(this.selectionMarker){var f={originalEvent:e,xAxis:[],yAxis:[]},m=this.selectionMarker,n=m.attr?m.attr("x"):m.x,r=m.attr?m.attr("y"):m.y,k=m.attr?m.attr("width"):m.width,y=m.attr?m.attr("height"):m.height,t;if(this.hasDragged||b)a.axes.forEach(function(a){if(a.zoomEnabled&&E(a.min)&&(b||d[{xAxis:"zoomX",yAxis:"zoomY"}[a.coll]])&&q(n)&&q(r)){var c=
a.horiz,g="touchend"===e.type?a.minPixelPadding:0,h=a.toValue((c?n:r)+g);c=a.toValue((c?n+k:r+y)-g);f[a.coll].push({axis:a,min:Math.min(h,c),max:Math.max(h,c)});t=!0}}),t&&c(a,"selection",f,function(e){a.zoom(g(e,b?{animation:!1}:null))});q(a.index)&&(this.selectionMarker=this.selectionMarker.destroy());b&&this.scaleGroups()}a&&q(a.index)&&(l(a.container,{cursor:a._cursor}),a.cancelClick=10<this.hasDragged,a.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])};f.prototype.findNearestKDPoint=
function(e,c,a){var b=this.chart,g=b.hoverPoint;b=b.tooltip;if(g&&b&&b.isStickyOnContact())return g;var d;e.forEach(function(b){var e=!(b.noSharedTooltip&&c)&&0>b.options.findNearestPointBy.indexOf("y");b=b.searchPoint(a,e);if((e=n(b,!0)&&b.series)&&!(e=!n(d,!0))){e=d.distX-b.distX;var g=d.dist-b.dist,f=(b.series.group&&b.series.group.zIndex)-(d.series.group&&d.series.group.zIndex);e=0<(0!==e&&c?e:0!==g?g:0!==f?f:d.series.index>b.series.index?-1:1)}e&&(d=b)});return d};f.prototype.getChartCoordinatesFromPoint=
function(e,c){var a=e.series,b=a.xAxis;a=a.yAxis;var g=z(e.clientX,e.plotX),d=e.shapeArgs;if(b&&a)return c?{chartX:b.len+b.pos-g,chartY:a.len+a.pos-e.plotY}:{chartX:g+b.pos,chartY:e.plotY+a.pos};if(d&&d.x&&d.y)return{chartX:d.x,chartY:d.y}};f.prototype.getChartPosition=function(){if(this.chartPosition)return this.chartPosition;var e=this.chart.container,c=M(e);this.chartPosition={left:c.left,top:c.top,scaleX:1,scaleY:1};var a=e.offsetWidth;e=e.offsetHeight;2<a&&2<e&&(this.chartPosition.scaleX=c.width/
a,this.chartPosition.scaleY=c.height/e);return this.chartPosition};f.prototype.getCoordinates=function(e){var c={xAxis:[],yAxis:[]};this.chart.axes.forEach(function(a){c[a.isXAxis?"xAxis":"yAxis"].push({axis:a,value:a.toValue(e[a.horiz?"chartX":"chartY"])})});return c};f.prototype.getHoverData=function(e,g,a,b,d,f){var h,m=[];b=!(!b||!e);var w=g&&!g.stickyTracking,l={chartX:f?f.chartX:void 0,chartY:f?f.chartY:void 0,shared:d};c(this,"beforeGetHoverData",l);w=w?[g]:a.filter(function(a){return l.filter?
l.filter(a):a.visible&&!(!d&&a.directTouch)&&z(a.options.enableMouseTracking,!0)&&a.stickyTracking});g=(h=b||!f?e:this.findNearestKDPoint(w,d,f))&&h.series;h&&(d&&!g.noSharedTooltip?(w=a.filter(function(a){return l.filter?l.filter(a):a.visible&&!(!d&&a.directTouch)&&z(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),w.forEach(function(a){var b=y(a.points,function(a){return a.x===h.x&&!a.isNull});n(b)&&(a.chart.isBoosting&&(b=a.getPoint(b)),m.push(b))})):m.push(h));l={hoverPoint:h};c(this,"afterGetHoverData",
l);return{hoverPoint:l.hoverPoint,hoverSeries:g,hoverPoints:m}};f.prototype.getPointFromEvent=function(e){e=e.target;for(var c;e&&!c;)c=e.point,e=e.parentNode;return c};f.prototype.onTrackerMouseOut=function(e){e=e.relatedTarget||e.toElement;var c=this.chart.hoverSeries;this.isDirectTouch=!1;if(!(!c||!e||c.stickyTracking||this.inClass(e,"highcharts-tooltip")||this.inClass(e,"highcharts-series-"+c.index)&&this.inClass(e,"highcharts-tracker")))c.onMouseOut()};f.prototype.inClass=function(e,c){for(var a;e;){if(a=
C(e,"class")){if(-1!==a.indexOf(c))return!0;if(-1!==a.indexOf("highcharts-container"))return!1}e=e.parentNode}};f.prototype.init=function(e,c){this.options=c;this.chart=e;this.runChartClick=c.chart.events&&!!c.chart.events.click;this.pinchDown=[];this.lastValidTouch={};x&&(e.tooltip=new x(e,c.tooltip),this.followTouchMove=z(c.tooltip.followTouchMove,!0));this.setDOMEvents()};f.prototype.normalize=function(e,c){var a=e.touches,b=a?a.length?a.item(0):z(a.changedTouches,e.changedTouches)[0]:e;c||(c=
this.getChartPosition());a=b.pageX-c.left;b=b.pageY-c.top;a/=c.scaleX;b/=c.scaleY;return g(e,{chartX:Math.round(a),chartY:Math.round(b)})};f.prototype.onContainerClick=function(e){var d=this.chart,a=d.hoverPoint;e=this.normalize(e);var b=d.plotLeft,f=d.plotTop;d.cancelClick||(a&&this.inClass(e.target,"highcharts-tracker")?(c(a.series,"click",g(e,{point:a})),d.hoverPoint&&a.firePointEvent("click",e)):(g(e,this.getCoordinates(e)),d.isInsidePlot(e.chartX-b,e.chartY-f)&&c(d,"click",e)))};f.prototype.onContainerMouseDown=
function(e){var c=1===((e.buttons||e.button)&1);e=this.normalize(e);if(d.isFirefox&&0!==e.button)this.onContainerMouseMove(e);if("undefined"===typeof e.button||c)this.zoomOption(e),c&&e.preventDefault&&e.preventDefault(),this.dragStart(e)};f.prototype.onContainerMouseLeave=function(e){var c=D[z(d.hoverChartIndex,-1)],a=this.chart.tooltip;e=this.normalize(e);c&&(e.relatedTarget||e.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=void 0);a&&!a.isHidden&&this.reset()};f.prototype.onContainerMouseEnter=
function(e){delete this.chartPosition};f.prototype.onContainerMouseMove=function(e){var c=this.chart;e=this.normalize(e);this.setHoverChartIndex();e.preventDefault||(e.returnValue=!1);("mousedown"===c.mouseIsDown||this.touchSelect(e))&&this.drag(e);c.openMenu||!this.inClass(e.target,"highcharts-tracker")&&!c.isInsidePlot(e.chartX-c.plotLeft,e.chartY-c.plotTop)||this.runPointActions(e)};f.prototype.onDocumentTouchEnd=function(e){D[d.hoverChartIndex]&&D[d.hoverChartIndex].pointer.drop(e)};f.prototype.onContainerTouchMove=
function(e){if(this.touchSelect(e))this.onContainerMouseMove(e);else this.touch(e)};f.prototype.onContainerTouchStart=function(e){if(this.touchSelect(e))this.onContainerMouseDown(e);else this.zoomOption(e),this.touch(e,!0)};f.prototype.onDocumentMouseMove=function(e){var c=this.chart,a=this.chartPosition;e=this.normalize(e,a);var b=c.tooltip;!a||b&&b.isStickyOnContact()||c.isInsidePlot(e.chartX-c.plotLeft,e.chartY-c.plotTop)||this.inClass(e.target,"highcharts-tracker")||this.reset()};f.prototype.onDocumentMouseUp=
function(e){var c=D[z(d.hoverChartIndex,-1)];c&&c.pointer.drop(e)};f.prototype.pinch=function(e){var c=this,a=c.chart,b=c.pinchDown,d=e.touches||[],f=d.length,m=c.lastValidTouch,n=c.hasZoom,l=c.selectionMarker,q={},r=1===f&&(c.inClass(e.target,"highcharts-tracker")&&a.runTrackerClick||c.runChartClick),k={};1<f&&(c.initiated=!0);n&&c.initiated&&!r&&!1!==e.cancelable&&e.preventDefault();[].map.call(d,function(a){return c.normalize(a)});"touchstart"===e.type?([].forEach.call(d,function(a,e){b[e]={chartX:a.chartX,
chartY:a.chartY}}),m.x=[b[0].chartX,b[1]&&b[1].chartX],m.y=[b[0].chartY,b[1]&&b[1].chartY],a.axes.forEach(function(b){if(b.zoomEnabled){var e=a.bounds[b.horiz?"h":"v"],c=b.minPixelPadding,g=b.toPixels(Math.min(z(b.options.min,b.dataMin),b.dataMin)),d=b.toPixels(Math.max(z(b.options.max,b.dataMax),b.dataMax)),f=Math.max(g,d);e.min=Math.min(b.pos,Math.min(g,d)-c);e.max=Math.max(b.pos+b.len,f+c)}}),c.res=!0):c.followTouchMove&&1===f?this.runPointActions(c.normalize(e)):b.length&&(l||(c.selectionMarker=
l=g({destroy:H,touch:!0},a.plotBox)),c.pinchTranslate(b,d,q,l,k,m),c.hasPinched=n,c.scaleGroups(q,k),c.res&&(c.res=!1,this.reset(!1,0)))};f.prototype.pinchTranslate=function(e,c,a,b,g,d){this.zoomHor&&this.pinchTranslateDirection(!0,e,c,a,b,g,d);this.zoomVert&&this.pinchTranslateDirection(!1,e,c,a,b,g,d)};f.prototype.pinchTranslateDirection=function(e,c,a,b,g,d,f,m){var h=this.chart,n=e?"x":"y",l=e?"X":"Y",w="chart"+l,q=e?"width":"height",r=h["plot"+(e?"Left":"Top")],p,J,F=m||1,k=h.inverted,u=h.bounds[e?
"h":"v"],y=1===c.length,I=c[0][w],t=a[0][w],z=!y&&c[1][w],O=!y&&a[1][w];a=function(){"number"===typeof O&&20<Math.abs(I-z)&&(F=m||Math.abs(t-O)/Math.abs(I-z));J=(r-t)/F+I;p=h["plot"+(e?"Width":"Height")]/F};a();c=J;if(c<u.min){c=u.min;var A=!0}else c+p>u.max&&(c=u.max-p,A=!0);A?(t-=.8*(t-f[n][0]),"number"===typeof O&&(O-=.8*(O-f[n][1])),a()):f[n]=[t,O];k||(d[n]=J-r,d[q]=p);d=k?1/F:F;g[q]=p;g[n]=c;b[k?e?"scaleY":"scaleX":"scale"+l]=F;b["translate"+l]=d*r+(t-d*I)};f.prototype.reset=function(e,c){var a=
this.chart,b=a.hoverSeries,g=a.hoverPoint,d=a.hoverPoints,f=a.tooltip,h=f&&f.shared?d:g;e&&h&&m(h).forEach(function(a){a.series.isCartesian&&"undefined"===typeof a.plotX&&(e=!1)});if(e)f&&h&&m(h).length&&(f.refresh(h),f.shared&&d?d.forEach(function(a){a.setState(a.state,!0);a.series.isCartesian&&(a.series.xAxis.crosshair&&a.series.xAxis.drawCrosshair(null,a),a.series.yAxis.crosshair&&a.series.yAxis.drawCrosshair(null,a))}):g&&(g.setState(g.state,!0),a.axes.forEach(function(a){a.crosshair&&g.series[a.coll]===
a&&a.drawCrosshair(null,g)})));else{if(g)g.onMouseOut();d&&d.forEach(function(a){a.setState()});if(b)b.onMouseOut();f&&f.hide(c);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());a.axes.forEach(function(a){a.hideCrosshair()});this.hoverX=a.hoverPoints=a.hoverPoint=null}};f.prototype.runPointActions=function(e,c){var a=this.chart,b=a.tooltip&&a.tooltip.options.enabled?a.tooltip:void 0,g=b?b.shared:!1,f=c||a.hoverPoint,h=f&&f.series||a.hoverSeries;h=this.getHoverData(f,h,a.series,(!e||
"touchmove"!==e.type)&&(!!c||h&&h.directTouch&&this.isDirectTouch),g,e);f=h.hoverPoint;var m=h.hoverPoints;c=(h=h.hoverSeries)&&h.tooltipOptions.followPointer;g=g&&h&&!h.noSharedTooltip;if(f&&(f!==a.hoverPoint||b&&b.isHidden)){(a.hoverPoints||[]).forEach(function(a){-1===m.indexOf(a)&&a.setState()});if(a.hoverSeries!==h)h.onMouseOver();this.applyInactiveState(m);(m||[]).forEach(function(a){a.setState("hover")});a.hoverPoint&&a.hoverPoint.firePointEvent("mouseOut");if(!f.series)return;a.hoverPoints=
m;a.hoverPoint=f;f.firePointEvent("mouseOver");b&&b.refresh(g?m:f,e)}else c&&b&&!b.isHidden&&(f=b.getAnchor([{}],e),b.updatePosition({plotX:f[0],plotY:f[1]}));this.unDocMouseMove||(this.unDocMouseMove=t(a.container.ownerDocument,"mousemove",function(a){var b=D[d.hoverChartIndex];if(b)b.pointer.onDocumentMouseMove(a)}));a.axes.forEach(function(b){var c=z((b.crosshair||{}).snap,!0),g;c&&((g=a.hoverPoint)&&g.series[b.coll]===b||(g=y(m,function(a){return a.series[b.coll]===b})));g||!c?b.drawCrosshair(e,
g):b.hideCrosshair()})};f.prototype.scaleGroups=function(e,c){var a=this.chart,b;a.series.forEach(function(g){b=e||g.getPlotBox();g.xAxis&&g.xAxis.zoomEnabled&&g.group&&(g.group.attr(b),g.markerGroup&&(g.markerGroup.attr(b),g.markerGroup.clip(c?a.clipRect:null)),g.dataLabelsGroup&&g.dataLabelsGroup.attr(b))});a.clipRect.attr(c||a.clipBox)};f.prototype.setDOMEvents=function(){var e=this,c=this.chart.container,a=c.ownerDocument;c.onmousedown=this.onContainerMouseDown.bind(this);c.onmousemove=this.onContainerMouseMove.bind(this);
c.onclick=this.onContainerClick.bind(this);this.unbindContainerMouseEnter=t(c,"mouseenter",this.onContainerMouseEnter.bind(this));this.unbindContainerMouseLeave=t(c,"mouseleave",this.onContainerMouseLeave.bind(this));d.unbindDocumentMouseUp||(d.unbindDocumentMouseUp=t(a,"mouseup",this.onDocumentMouseUp.bind(this)));for(var b=this.chart.renderTo.parentElement;b&&"BODY"!==b.tagName;)t(b,"scroll",function(){delete e.chartPosition}),b=b.parentElement;d.hasTouch&&(t(c,"touchstart",this.onContainerTouchStart.bind(this),
{passive:!1}),t(c,"touchmove",this.onContainerTouchMove.bind(this),{passive:!1}),d.unbindDocumentTouchEnd||(d.unbindDocumentTouchEnd=t(a,"touchend",this.onDocumentTouchEnd.bind(this),{passive:!1})))};f.prototype.setHoverChartIndex=function(){var e=this.chart,c=d.charts[z(d.hoverChartIndex,-1)];if(c&&c!==e)c.pointer.onContainerMouseLeave({relatedTarget:!0});c&&c.mouseIsDown||(d.hoverChartIndex=e.index)};f.prototype.touch=function(e,c){var a=this.chart,b;this.setHoverChartIndex();if(1===e.touches.length)if(e=
this.normalize(e),(b=a.isInsidePlot(e.chartX-a.plotLeft,e.chartY-a.plotTop))&&!a.openMenu){c&&this.runPointActions(e);if("touchmove"===e.type){c=this.pinchDown;var g=c[0]?4<=Math.sqrt(Math.pow(c[0].chartX-e.chartX,2)+Math.pow(c[0].chartY-e.chartY,2)):!1}z(g,!0)&&this.pinch(e)}else c&&this.reset();else 2===e.touches.length&&this.pinch(e)};f.prototype.touchSelect=function(e){return!(!this.chart.options.chart.zoomBySingleTouch||!e.touches||1!==e.touches.length)};f.prototype.zoomOption=function(e){var c=
this.chart,a=c.options.chart,b=a.zoomType||"";c=c.inverted;/touch/.test(e.type)&&(b=z(a.pinchType,b));this.zoomX=e=/x/.test(b);this.zoomY=b=/y/.test(b);this.zoomHor=e&&!c||b&&c;this.zoomVert=b&&!c||e&&c;this.hasZoom=e||b};return f}();return d.Pointer=f});P(k,"Core/MSPointer.js",[k["Core/Globals.js"],k["Core/Pointer.js"],k["Core/Utilities.js"]],function(f,d,k){function x(){var c=[];c.item=function(c){return this[c]};E(y,function(g){c.push({pageX:g.pageX,pageY:g.pageY,target:g.target})});return c}function B(c,
g,d,l){"touch"!==c.pointerType&&c.pointerType!==c.MSPOINTER_TYPE_TOUCH||!D[f.hoverChartIndex]||(l(c),l=D[f.hoverChartIndex].pointer,l[g]({type:d,target:c.currentTarget,preventDefault:t,touches:x()}))}var G=this&&this.__extends||function(){var c=function(g,d){c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,g){c.__proto__=g}||function(c,g){for(var d in g)g.hasOwnProperty(d)&&(c[d]=g[d])};return c(g,d)};return function(g,d){function f(){this.constructor=g}c(g,d);g.prototype=null===
d?Object.create(d):(f.prototype=d.prototype,new f)}}(),D=f.charts,H=f.doc,t=f.noop,C=k.addEvent,l=k.css,E=k.objectEach,g=k.removeEvent,y={},c=!!f.win.PointerEvent;return function(d){function f(){return null!==d&&d.apply(this,arguments)||this}G(f,d);f.prototype.batchMSEvents=function(g){g(this.chart.container,c?"pointerdown":"MSPointerDown",this.onContainerPointerDown);g(this.chart.container,c?"pointermove":"MSPointerMove",this.onContainerPointerMove);g(H,c?"pointerup":"MSPointerUp",this.onDocumentPointerUp)};
f.prototype.destroy=function(){this.batchMSEvents(g);d.prototype.destroy.call(this)};f.prototype.init=function(c,g){d.prototype.init.call(this,c,g);this.hasZoom&&l(c.container,{"-ms-touch-action":"none","touch-action":"none"})};f.prototype.onContainerPointerDown=function(c){B(c,"onContainerTouchStart","touchstart",function(c){y[c.pointerId]={pageX:c.pageX,pageY:c.pageY,target:c.currentTarget}})};f.prototype.onContainerPointerMove=function(c){B(c,"onContainerTouchMove","touchmove",function(c){y[c.pointerId]=
{pageX:c.pageX,pageY:c.pageY};y[c.pointerId].target||(y[c.pointerId].target=c.currentTarget)})};f.prototype.onDocumentPointerUp=function(c){B(c,"onDocumentTouchEnd","touchend",function(c){delete y[c.pointerId]})};f.prototype.setDOMEvents=function(){d.prototype.setDOMEvents.call(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(C)};return f}(d)});P(k,"Core/Series/Point.js",[k["Core/Renderer/HTML/AST.js"],k["Core/Animation/AnimationUtilities.js"],k["Core/Globals.js"],k["Core/Options.js"],
k["Core/Utilities.js"]],function(f,d,k,x,B){var G=d.animObject,D=x.defaultOptions,H=B.addEvent,t=B.defined,C=B.erase,l=B.extend,E=B.fireEvent,g=B.format,y=B.getNestedProperty,c=B.isArray,q=B.isFunction,n=B.isNumber,A=B.isObject,M=B.merge,z=B.objectEach,m=B.pick,r=B.syncTimeout,e=B.removeEvent,h=B.uniqueKey;"";d=function(){function a(){this.colorIndex=this.category=void 0;this.formatPrefix="point";this.id=void 0;this.isNull=!1;this.percentage=this.options=this.name=void 0;this.selected=!1;this.total=
this.series=void 0;this.visible=!0;this.x=void 0}a.prototype.animateBeforeDestroy=function(){var a=this,c={x:a.startXPos,opacity:0},e,g=a.getGraphicalProps();g.singular.forEach(function(b){e="dataLabel"===b;a[b]=a[b].animate(e?{x:a[b].startXPos,y:a[b].startYPos,opacity:0}:c)});g.plural.forEach(function(b){a[b].forEach(function(b){b.element&&b.animate(l({x:a.startXPos},b.startYPos?{x:b.startXPos,y:b.startYPos}:{}))})})};a.prototype.applyOptions=function(b,c){var e=this.series,g=e.options.pointValKey||
e.pointValKey;b=a.prototype.optionsToObject.call(this,b);l(this,b);this.options=this.options?l(this.options,b):b;b.group&&delete this.group;b.dataLabels&&delete this.dataLabels;g&&(this.y=a.prototype.getNestedProperty.call(this,g));this.formatPrefix=(this.isNull=m(this.isValid&&!this.isValid(),null===this.x||!n(this.y)))?"null":"point";this.selected&&(this.state="select");"name"in this&&"undefined"===typeof c&&e.xAxis&&e.xAxis.hasNames&&(this.x=e.xAxis.nameToX(this));"undefined"===typeof this.x&&
e&&(this.x="undefined"===typeof c?e.autoIncrement(this):c);return this};a.prototype.destroy=function(){function a(){if(c.graphic||c.dataLabel||c.dataLabels)e(c),c.destroyElements();for(m in c)c[m]=null}var c=this,g=c.series,d=g.chart;g=g.options.dataSorting;var f=d.hoverPoints,h=G(c.series.chart.renderer.globalAnimation),m;c.legendItem&&d.legend.destroyItem(c);f&&(c.setState(),C(f,c),f.length||(d.hoverPoints=null));if(c===d.hoverPoint)c.onMouseOut();g&&g.enabled?(this.animateBeforeDestroy(),r(a,h.duration)):
a();d.pointCount--};a.prototype.destroyElements=function(a){var b=this;a=b.getGraphicalProps(a);a.singular.forEach(function(a){b[a]=b[a].destroy()});a.plural.forEach(function(a){b[a].forEach(function(a){a.element&&a.destroy()});delete b[a]})};a.prototype.firePointEvent=function(a,c,e){var b=this,g=this.series.options;(g.point.events[a]||b.options&&b.options.events&&b.options.events[a])&&b.importEvents();"click"===a&&g.allowPointSelect&&(e=function(a){b.select&&b.select(null,a.ctrlKey||a.metaKey||
a.shiftKey)});E(b,a,c,e)};a.prototype.getClassName=function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+("undefined"!==typeof this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")};a.prototype.getGraphicalProps=function(a){var b=this,c=
[],e,g={singular:[],plural:[]};a=a||{graphic:1,dataLabel:1};a.graphic&&c.push("graphic","upperGraphic","shadowGroup");a.dataLabel&&c.push("dataLabel","dataLabelUpper","connector");for(e=c.length;e--;){var d=c[e];b[d]&&g.singular.push(d)}["dataLabel","connector"].forEach(function(c){var e=c+"s";a[c]&&b[e]&&g.plural.push(e)});return g};a.prototype.getLabelConfig=function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,
percentage:this.percentage,total:this.total||this.stackTotal}};a.prototype.getNestedProperty=function(a){if(a)return 0===a.indexOf("custom.")?y(a,this.options):this[a]};a.prototype.getZone=function(){var a=this.series,c=a.zones;a=a.zoneAxis||"y";var e=0,g;for(g=c[e];this[a]>=g.value;)g=c[++e];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=g&&g.color&&!this.options.color?g.color:this.nonZonedColor;return g};a.prototype.hasNewShapeType=function(){return(this.graphic&&(this.graphic.symbolName||
this.graphic.element.nodeName))!==this.shapeType};a.prototype.init=function(a,c,e){this.series=a;this.applyOptions(c,e);this.id=t(this.id)?this.id:h();this.resolveColor();a.chart.pointCount++;E(this,"afterInit");return this};a.prototype.optionsToObject=function(b){var e={},g=this.series,d=g.options.keys,f=d||g.pointArrayMap||["y"],h=f.length,m=0,l=0;if(n(b)||null===b)e[f[0]]=b;else if(c(b))for(!d&&b.length>h&&(g=typeof b[0],"string"===g?e.name=b[0]:"number"===g&&(e.x=b[0]),m++);l<h;)d&&"undefined"===
typeof b[m]||(0<f[l].indexOf(".")?a.prototype.setNestedProperty(e,b[m],f[l]):e[f[l]]=b[m]),m++,l++;else"object"===typeof b&&(e=b,b.dataLabels&&(g._hasPointLabels=!0),b.marker&&(g._hasPointMarkers=!0));return e};a.prototype.resolveColor=function(){var a=this.series;var c=a.chart.options.chart.colorCount;var e=a.chart.styledMode;delete this.nonZonedColor;e||this.options.color||(this.color=a.color);a.options.colorByPoint?(e||(c=a.options.colors||a.chart.options.colors,this.color=this.color||c[a.colorCounter],
c=c.length),e=a.colorCounter,a.colorCounter++,a.colorCounter===c&&(a.colorCounter=0)):e=a.colorIndex;this.colorIndex=m(this.options.colorIndex,e)};a.prototype.setNestedProperty=function(a,c,e){e.split(".").reduce(function(a,b,e,g){a[b]=g.length-1===e?c:A(a[b],!0)?a[b]:{};return a[b]},a);return a};a.prototype.tooltipFormatter=function(a){var b=this.series,c=b.tooltipOptions,e=m(c.valueDecimals,""),d=c.valuePrefix||"",f=c.valueSuffix||"";b.chart.styledMode&&(a=b.chart.tooltip.styledModeFormat(a));(b.pointArrayMap||
["y"]).forEach(function(b){b="{point."+b;if(d||f)a=a.replace(RegExp(b+"}","g"),d+b+"}"+f);a=a.replace(RegExp(b+"}","g"),b+":,."+e+"f}")});return g(a,{point:this,series:this.series},b.chart)};a.prototype.update=function(a,c,e,g){function b(){d.applyOptions(a);var b=h&&d.hasDummyGraphic;b=null===d.y?!b:b;h&&b&&(d.graphic=h.destroy(),delete d.hasDummyGraphic);A(a,!0)&&(h&&h.element&&a&&a.marker&&"undefined"!==typeof a.marker.symbol&&(d.graphic=h.destroy()),a&&a.dataLabels&&d.dataLabel&&(d.dataLabel=
d.dataLabel.destroy()),d.connector&&(d.connector=d.connector.destroy()));l=d.index;f.updateParallelArrays(d,l);q.data[l]=A(q.data[l],!0)||A(a,!0)?d.options:m(a,q.data[l]);f.isDirty=f.isDirtyData=!0;!f.fixedBox&&f.hasCartesianSeries&&(n.isDirtyBox=!0);"point"===q.legendType&&(n.isDirtyLegend=!0);c&&n.redraw(e)}var d=this,f=d.series,h=d.graphic,l,n=f.chart,q=f.options;c=m(c,!0);!1===g?b():d.firePointEvent("update",{options:a},b)};a.prototype.remove=function(a,c){this.series.removePoint(this.series.data.indexOf(this),
a,c)};a.prototype.select=function(a,c){var b=this,e=b.series,g=e.chart;this.selectedStaging=a=m(a,!b.selected);b.firePointEvent(a?"select":"unselect",{accumulate:c},function(){b.selected=b.options.selected=a;e.options.data[e.data.indexOf(b)]=b.options;b.setState(a&&"select");c||g.getSelectedPoints().forEach(function(a){var c=a.series;a.selected&&a!==b&&(a.selected=a.options.selected=!1,c.options.data[c.data.indexOf(a)]=a.options,a.setState(g.hoverPoints&&c.options.inactiveOtherPoints?"inactive":""),
a.firePointEvent("unselect"))})});delete this.selectedStaging};a.prototype.onMouseOver=function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)};a.prototype.onMouseOut=function(){var a=this.series.chart;this.firePointEvent("mouseOut");this.series.options.inactiveOtherPoints||(a.hoverPoints||[]).forEach(function(a){a.setState()});a.hoverPoints=a.hoverPoint=null};a.prototype.importEvents=function(){if(!this.hasImportedEvents){var a=
this,c=M(a.series.options.point,a.options).events;a.events=c;z(c,function(b,c){q(b)&&H(a,c,b)});this.hasImportedEvents=!0}};a.prototype.setState=function(a,c){var b=this.series,e=this.state,g=b.options.states[a||"normal"]||{},d=D.plotOptions[b.type].marker&&b.options.marker,h=d&&!1===d.enabled,n=d&&d.states&&d.states[a||"normal"]||{},q=!1===n.enabled,r=b.stateMarkerGraphic,w=this.marker||{},p=b.chart,k=b.halo,y,t=d&&b.markerAttribs;a=a||"";if(!(a===this.state&&!c||this.selected&&"select"!==a||!1===
g.enabled||a&&(q||h&&!1===n.enabled)||a&&w.states&&w.states[a]&&!1===w.states[a].enabled)){this.state=a;t&&(y=b.markerAttribs(this,a));if(this.graphic){e&&this.graphic.removeClass("highcharts-point-"+e);a&&this.graphic.addClass("highcharts-point-"+a);if(!p.styledMode){var u=b.pointAttribs(this,a);var z=m(p.options.chart.animation,g.animation);b.options.inactiveOtherPoints&&u.opacity&&((this.dataLabels||[]).forEach(function(a){a&&a.animate({opacity:u.opacity},z)}),this.connector&&this.connector.animate({opacity:u.opacity},
z));this.graphic.animate(u,z)}y&&this.graphic.animate(y,m(p.options.chart.animation,n.animation,d.animation));r&&r.hide()}else{if(a&&n){e=w.symbol||b.symbol;r&&r.currentSymbol!==e&&(r=r.destroy());if(y)if(r)r[c?"animate":"attr"]({x:y.x,y:y.y});else e&&(b.stateMarkerGraphic=r=p.renderer.symbol(e,y.x,y.y,y.width,y.height).add(b.markerGroup),r.currentSymbol=e);!p.styledMode&&r&&r.attr(b.pointAttribs(this,a))}r&&(r[a&&this.isInside?"show":"hide"](),r.element.point=this)}a=g.halo;g=(r=this.graphic||r)&&
r.visibility||"inherit";a&&a.size&&r&&"hidden"!==g&&!this.isCluster?(k||(b.halo=k=p.renderer.path().add(r.parentGroup)),k.show()[c?"animate":"attr"]({d:this.haloPath(a.size)}),k.attr({"class":"highcharts-halo highcharts-color-"+m(this.colorIndex,b.colorIndex)+(this.className?" "+this.className:""),visibility:g,zIndex:-1}),k.point=this,p.styledMode||k.attr(l({fill:this.color||b.color,"fill-opacity":a.opacity},f.filterUserAttributes(a.attributes||{})))):k&&k.point&&k.point.haloPath&&k.animate({d:k.point.haloPath(0)},
null,k.hide);E(this,"afterSetState")}};a.prototype.haloPath=function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)};return a}();return k.Point=d});P(k,"Core/Legend.js",[k["Core/Animation/AnimationUtilities.js"],k["Core/Globals.js"],k["Core/Series/Point.js"],k["Core/Utilities.js"]],function(f,d,k,x){var B=f.animObject,G=f.setAnimation;f=d.isFirefox;var D=d.marginNames,H=d.win,t=x.addEvent,C=x.createElement,l=x.css,E=x.defined,g=x.discardElement,
y=x.find,c=x.fireEvent,q=x.format,n=x.isNumber,A=x.merge,M=x.pick,z=x.relativeLength,m=x.stableSort,r=x.syncTimeout;x=x.wrap;var e=function(){function e(a,b){this.allItems=[];this.contentGroup=this.box=void 0;this.display=!1;this.group=void 0;this.offsetWidth=this.maxLegendWidth=this.maxItemWidth=this.legendWidth=this.legendHeight=this.lastLineHeight=this.lastItemY=this.itemY=this.itemX=this.itemMarginTop=this.itemMarginBottom=this.itemHeight=this.initialItemY=0;this.options={};this.padding=0;this.pages=
[];this.proximate=!1;this.scrollGroup=void 0;this.widthOption=this.totalItemWidth=this.titleHeight=this.symbolWidth=this.symbolHeight=0;this.chart=a;this.init(a,b)}e.prototype.init=function(a,b){this.chart=a;this.setOptions(b);b.enabled&&(this.render(),t(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=t(this.chart,"render",function(){this.legend.proximatePositions();this.legend.positionItems()}):this.unchartrender&&this.unchartrender())};e.prototype.setOptions=
function(a){var b=M(a.padding,8);this.options=a;this.chart.styledMode||(this.itemStyle=a.itemStyle,this.itemHiddenStyle=A(this.itemStyle,a.itemHiddenStyle));this.itemMarginTop=a.itemMarginTop||0;this.itemMarginBottom=a.itemMarginBottom||0;this.padding=b;this.initialItemY=b-5;this.symbolWidth=M(a.symbolWidth,16);this.pages=[];this.proximate="proximate"===a.layout&&!this.chart.inverted;this.baseline=void 0};e.prototype.update=function(a,b){var e=this.chart;this.setOptions(A(!0,this.options,a));this.destroy();
e.isDirtyLegend=e.isDirtyBox=!0;M(b,!0)&&e.redraw();c(this,"afterUpdate")};e.prototype.colorizeItem=function(a,b){a.legendGroup[b?"removeClass":"addClass"]("highcharts-legend-item-hidden");if(!this.chart.styledMode){var e=this.options,g=a.legendItem,d=a.legendLine,f=a.legendSymbol,h=this.itemHiddenStyle.color;e=b?e.itemStyle.color:h;var m=b?a.color||h:h,l=a.options&&a.options.marker,n={fill:m};g&&g.css({fill:e,color:e});d&&d.attr({stroke:m});f&&(l&&f.isMarker&&(n=a.pointAttribs(),b||(n.stroke=n.fill=
h)),f.attr(n))}c(this,"afterColorizeItem",{item:a,visible:b})};e.prototype.positionItems=function(){this.allItems.forEach(this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()};e.prototype.positionItem=function(a){var b=this,e=this.options,g=e.symbolPadding,d=!e.rtl,f=a._legendItemPos;e=f[0];f=f[1];var h=a.checkbox,m=a.legendGroup;m&&m.element&&(g={translateX:d?e:this.legendWidth-e-2*g-4,translateY:f},d=function(){c(b,"afterPositionItem",{item:a})},E(m.translateY)?m.animate(g,void 0,
d):(m.attr(g),d()));h&&(h.x=e,h.y=f)};e.prototype.destroyItem=function(a){var b=a.checkbox;["legendItem","legendLine","legendSymbol","legendGroup"].forEach(function(b){a[b]&&(a[b]=a[b].destroy())});b&&g(a.checkbox)};e.prototype.destroy=function(){function a(a){this[a]&&(this[a]=this[a].destroy())}this.getAllItems().forEach(function(b){["legendItem","legendGroup"].forEach(a,b)});"clipRect up down pager nav box title group".split(" ").forEach(a,this);this.display=null};e.prototype.positionCheckboxes=
function(){var a=this.group&&this.group.alignAttr,b=this.clipHeight||this.legendHeight,c=this.titleHeight;if(a){var e=a.translateY;this.allItems.forEach(function(g){var d=g.checkbox;if(d){var f=e+c+d.y+(this.scrollOffset||0)+3;l(d,{left:a.translateX+g.checkboxOffset+d.x-20+"px",top:f+"px",display:this.proximate||f>e-6&&f<e+b-6?"":"none"})}},this)}};e.prototype.renderTitle=function(){var a=this.options,b=this.padding,c=a.title,e=0;c.text&&(this.title||(this.title=this.chart.renderer.label(c.text,b-
3,b-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}),this.chart.styledMode||this.title.css(c.style),this.title.add(this.group)),c.width||this.title.css({width:this.maxLegendWidth+"px"}),a=this.title.getBBox(),e=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:e}));this.titleHeight=e};e.prototype.setText=function(a){var b=this.options;a.legendItem.attr({text:b.labelFormat?q(b.labelFormat,a,this.chart):b.labelFormatter.call(a)})};e.prototype.renderItem=function(a){var b=
this.chart,c=b.renderer,e=this.options,g=this.symbolWidth,d=e.symbolPadding,f=this.itemStyle,h=this.itemHiddenStyle,m="horizontal"===e.layout?M(e.itemDistance,20):0,l=!e.rtl,n=a.legendItem,q=!a.series,p=!q&&a.series.drawLegendSymbol?a.series:a,r=p.options;r=this.createCheckboxForItem&&r&&r.showCheckbox;m=g+d+m+(r?20:0);var k=e.useHTML,y=a.options.className;n||(a.legendGroup=c.g("legend-item").addClass("highcharts-"+p.type+"-series highcharts-color-"+a.colorIndex+(y?" "+y:"")+(q?" highcharts-series-"+
a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=n=c.text("",l?g+d:-d,this.baseline||0,k),b.styledMode||n.css(A(a.visible?f:h)),n.attr({align:l?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(this.fontMetrics=c.fontMetrics(b.styledMode?12:f.fontSize,n),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,n.attr("y",this.baseline)),this.symbolHeight=e.symbolHeight||this.fontMetrics.f,p.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,n,k));r&&!a.checkbox&&
this.createCheckboxForItem&&this.createCheckboxForItem(a);this.colorizeItem(a,a.visible);!b.styledMode&&f.width||n.css({width:(e.itemWidth||this.widthOption||b.spacingBox.width)-m+"px"});this.setText(a);b=n.getBBox();a.itemWidth=a.checkboxOffset=e.itemWidth||a.legendItemWidth||b.width+m;this.maxItemWidth=Math.max(this.maxItemWidth,a.itemWidth);this.totalItemWidth+=a.itemWidth;this.itemHeight=a.itemHeight=Math.round(a.legendItemHeight||b.height||this.symbolHeight)};e.prototype.layoutItem=function(a){var b=
this.options,c=this.padding,e="horizontal"===b.layout,g=a.itemHeight,d=this.itemMarginBottom,f=this.itemMarginTop,h=e?M(b.itemDistance,20):0,m=this.maxLegendWidth;b=b.alignColumns&&this.totalItemWidth>m?this.maxItemWidth:a.itemWidth;e&&this.itemX-c+b>m&&(this.itemX=c,this.lastLineHeight&&(this.itemY+=f+this.lastLineHeight+d),this.lastLineHeight=0);this.lastItemY=f+this.itemY+d;this.lastLineHeight=Math.max(g,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=b:(this.itemY+=
f+g+d,this.lastLineHeight=g);this.offsetWidth=this.widthOption||Math.max((e?this.itemX-c-(a.checkbox?0:h):b)+c,this.offsetWidth)};e.prototype.getAllItems=function(){var a=[];this.chart.series.forEach(function(b){var c=b&&b.options;b&&M(c.showInLegend,E(c.linkedTo)?!1:void 0,!0)&&(a=a.concat(b.legendItems||("point"===c.legendType?b.data:b)))});c(this,"afterGetAllItems",{allItems:a});return a};e.prototype.getAlignment=function(){var a=this.options;return this.proximate?a.align.charAt(0)+"tv":a.floating?
"":a.align.charAt(0)+a.verticalAlign.charAt(0)+a.layout.charAt(0)};e.prototype.adjustMargins=function(a,b){var c=this.chart,e=this.options,g=this.getAlignment();g&&[/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/].forEach(function(d,f){d.test(g)&&!E(a[f])&&(c[D[f]]=Math.max(c[D[f]],c.legend[(f+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][f]*e[f%2?"x":"y"]+M(e.margin,12)+b[f]+(c.titleOffset[f]||0)))})};e.prototype.proximatePositions=function(){var a=this.chart,b=[],c="left"===this.options.align;
this.allItems.forEach(function(e){var g;var d=c;if(e.yAxis){e.xAxis.options.reversed&&(d=!d);e.points&&(g=y(d?e.points:e.points.slice(0).reverse(),function(a){return n(a.plotY)}));d=this.itemMarginTop+e.legendItem.getBBox().height+this.itemMarginBottom;var f=e.yAxis.top-a.plotTop;e.visible?(g=g?g.plotY:e.yAxis.height,g+=f-.3*d):g=f+e.yAxis.height;b.push({target:g,size:d,item:e})}},this);d.distribute(b,a.plotHeight);b.forEach(function(b){b.item._legendItemPos[1]=a.plotTop-a.spacing[0]+b.pos})};e.prototype.render=
function(){var a=this.chart,b=a.renderer,e=this.group,g=this.box,d=this.options,f=this.padding;this.itemX=f;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;this.widthOption=z(d.width,a.spacingBox.width-f);var h=a.spacingBox.width-2*f-d.x;-1<["rm","lm"].indexOf(this.getAlignment().substring(0,2))&&(h/=2);this.maxLegendWidth=this.widthOption||h;e||(this.group=e=b.g("legend").attr({zIndex:7}).add(),this.contentGroup=b.g().attr({zIndex:1}).add(e),this.scrollGroup=b.g().add(this.contentGroup));
this.renderTitle();var n=this.getAllItems();m(n,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});d.reversed&&n.reverse();this.allItems=n;this.display=h=!!n.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;n.forEach(this.renderItem,this);n.forEach(this.layoutItem,this);n=(this.widthOption||this.offsetWidth)+f;var l=this.lastItemY+this.lastLineHeight+this.titleHeight;l=this.handleOverflow(l);l+=f;g||(this.box=g=b.rect().addClass("highcharts-legend-box").attr({r:d.borderRadius}).add(e),
g.isNew=!0);a.styledMode||g.attr({stroke:d.borderColor,"stroke-width":d.borderWidth||0,fill:d.backgroundColor||"none"}).shadow(d.shadow);0<n&&0<l&&(g[g.isNew?"attr":"animate"](g.crisp.call({},{x:0,y:0,width:n,height:l},g.strokeWidth())),g.isNew=!1);g[h?"show":"hide"]();a.styledMode&&"none"===e.getStyle("display")&&(n=l=0);this.legendWidth=n;this.legendHeight=l;h&&this.align();this.proximate||this.positionItems();c(this,"afterRender")};e.prototype.align=function(a){void 0===a&&(a=this.chart.spacingBox);
var b=this.chart,c=this.options,e=a.y;/(lth|ct|rth)/.test(this.getAlignment())&&0<b.titleOffset[0]?e+=b.titleOffset[0]:/(lbh|cb|rbh)/.test(this.getAlignment())&&0<b.titleOffset[2]&&(e-=b.titleOffset[2]);e!==a.y&&(a=A(a,{y:e}));this.group.align(A(c,{width:this.legendWidth,height:this.legendHeight,verticalAlign:this.proximate?"top":c.verticalAlign}),!0,a)};e.prototype.handleOverflow=function(a){var b=this,c=this.chart,e=c.renderer,g=this.options,d=g.y,f=this.padding;d=c.spacingBox.height+("top"===g.verticalAlign?
-d:d)-f;var h=g.maxHeight,m,n=this.clipRect,l=g.navigation,q=M(l.animation,!0),p=l.arrowSize||12,r=this.nav,k=this.pages,y,u=this.allItems,t=function(a){"number"===typeof a?n.attr({height:a}):n&&(b.clipRect=n.destroy(),b.contentGroup.clip());b.contentGroup.div&&(b.contentGroup.div.style.clip=a?"rect("+f+"px,9999px,"+(f+a)+"px,0)":"auto")},I=function(a){b[a]=e.circle(0,0,1.3*p).translate(p/2,p/2).add(r);c.styledMode||b[a].attr("fill","rgba(0,0,0,0.0001)");return b[a]};"horizontal"!==g.layout||"middle"===
g.verticalAlign||g.floating||(d/=2);h&&(d=Math.min(d,h));k.length=0;a>d&&!1!==l.enabled?(this.clipHeight=m=Math.max(d-20-this.titleHeight-f,0),this.currentPage=M(this.currentPage,1),this.fullHeight=a,u.forEach(function(a,b){var c=a._legendItemPos[1],e=Math.round(a.legendItem.getBBox().height),g=k.length;if(!g||c-k[g-1]>m&&(y||c)!==k[g-1])k.push(y||c),g++;a.pageIx=g-1;y&&(u[b-1].pageIx=g-1);b===u.length-1&&c+e-k[g-1]>m&&c!==y&&(k.push(c),a.pageIx=g);c!==y&&(y=c)}),n||(n=b.clipRect=e.clipRect(0,f,9999,
0),b.contentGroup.clip(n)),t(m),r||(this.nav=r=e.g().attr({zIndex:1}).add(this.group),this.up=e.symbol("triangle",0,0,p,p).add(r),I("upTracker").on("click",function(){b.scroll(-1,q)}),this.pager=e.text("",15,10).addClass("highcharts-legend-navigation"),c.styledMode||this.pager.css(l.style),this.pager.add(r),this.down=e.symbol("triangle-down",0,0,p,p).add(r),I("downTracker").on("click",function(){b.scroll(1,q)})),b.scroll(0),a=d):r&&(t(),this.nav=r.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=
0);return a};e.prototype.scroll=function(a,b){var e=this,g=this.chart,d=this.pages,f=d.length,h=this.currentPage+a;a=this.clipHeight;var m=this.options.navigation,n=this.pager,l=this.padding;h>f&&(h=f);0<h&&("undefined"!==typeof b&&G(b,g),this.nav.attr({translateX:l,translateY:a+this.padding+7+this.titleHeight,visibility:"visible"}),[this.up,this.upTracker].forEach(function(a){a.attr({"class":1===h?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})}),n.attr({text:h+"/"+f}),[this.down,
this.downTracker].forEach(function(a){a.attr({x:18+this.pager.getBBox().width,"class":h===f?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})},this),g.styledMode||(this.up.attr({fill:1===h?m.inactiveColor:m.activeColor}),this.upTracker.css({cursor:1===h?"default":"pointer"}),this.down.attr({fill:h===f?m.inactiveColor:m.activeColor}),this.downTracker.css({cursor:h===f?"default":"pointer"})),this.scrollOffset=-d[h-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),
this.currentPage=h,this.positionCheckboxes(),b=B(M(b,g.renderer.globalAnimation,!0)),r(function(){c(e,"afterScroll",{currentPage:h})},b.duration))};e.prototype.setItemEvents=function(a,b,e){var g=this,d=g.chart.renderer.boxWrapper,f=a instanceof k,h="highcharts-legend-"+(f?"point":"series")+"-active",m=g.chart.styledMode;(e?[b,a.legendSymbol]:[a.legendGroup]).forEach(function(e){if(e)e.on("mouseover",function(){a.visible&&g.allItems.forEach(function(b){a!==b&&b.setState("inactive",!f)});a.setState("hover");
a.visible&&d.addClass(h);m||b.css(g.options.itemHoverStyle)}).on("mouseout",function(){g.chart.styledMode||b.css(A(a.visible?g.itemStyle:g.itemHiddenStyle));g.allItems.forEach(function(b){a!==b&&b.setState("",!f)});d.removeClass(h);a.setState()}).on("click",function(b){var e=function(){a.setVisible&&a.setVisible();g.allItems.forEach(function(b){a!==b&&b.setState(a.visible?"inactive":"",!f)})};d.removeClass(h);b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,e):c(a,"legendItemClick",
b,e)})})};e.prototype.createCheckboxForItem=function(a){a.checkbox=C("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);t(a.checkbox,"click",function(b){c(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})};return e}();(/Trident\/7\.0/.test(H.navigator&&H.navigator.userAgent)||f)&&x(e.prototype,"positionItem",function(e,a){var b=this,c=function(){a._legendItemPos&&
e.call(b,a)};c();b.bubbleLegend||setTimeout(c)});d.Legend=e;return d.Legend});P(k,"Core/Series/SeriesRegistry.js",[k["Core/Globals.js"],k["Core/Options.js"],k["Core/Series/Point.js"],k["Core/Utilities.js"]],function(f,d,k,x){var B=d.defaultOptions,G=x.error,D=x.extendClass,H=x.merge,t;(function(d){function f(f,g){var l=B.plotOptions||{},c=g.defaultOptions;g.prototype.pointClass||(g.prototype.pointClass=k);g.prototype.type=f;c&&(l[f]=c);d.seriesTypes[f]=g}d.seriesTypes={};d.getSeries=function(f,g){void 0===
g&&(g={});var l=f.options.chart;l=g.type||l.type||l.defaultSeriesType||"";var c=d.seriesTypes[l];d||G(17,!0,f,{missingModuleFor:l});l=new c;"function"===typeof l.init&&l.init(f,g);return l};d.registerSeriesType=f;d.seriesType=function(l,g,y,c,q){var n=B.plotOptions||{};g=g||"";n[l]=H(n[g],y);f(l,D(d.seriesTypes[g]||function(){},c));d.seriesTypes[l].prototype.type=l;q&&(d.seriesTypes[l].prototype.pointClass=D(k,q));return d.seriesTypes[l]}})(t||(t={}));f.seriesType=t.seriesType;f.seriesTypes=t.seriesTypes;
return t});P(k,"Core/Chart/Chart.js",[k["Core/Animation/AnimationUtilities.js"],k["Core/Axis/Axis.js"],k["Core/Globals.js"],k["Core/Legend.js"],k["Core/MSPointer.js"],k["Core/Options.js"],k["Core/Color/Palette.js"],k["Core/Pointer.js"],k["Core/Series/SeriesRegistry.js"],k["Core/Time.js"],k["Core/Utilities.js"],k["Core/Renderer/HTML/AST.js"]],function(f,d,k,x,B,G,D,H,t,C,l,E){var g=f.animate,y=f.animObject,c=f.setAnimation,q=k.charts,n=k.doc,A=k.win,M=G.defaultOptions,z=G.time,m=t.seriesTypes,r=l.addEvent,
e=l.attr,h=l.cleanRecursively,a=l.createElement,b=l.css,w=l.defined,J=l.discardElement,O=l.erase,F=l.error,N=l.extend,R=l.find,Q=l.fireEvent,T=l.getStyle,v=l.isArray,L=l.isFunction,p=l.isNumber,K=l.isObject,S=l.isString,ba=l.merge,u=l.numberFormat,aa=l.objectEach,I=l.pick,X=l.pInt,U=l.relativeLength,ea=l.removeEvent,Y=l.splat,da=l.syncTimeout,ha=l.uniqueKey,fa=k.marginNames,ca=function(){function f(a,b,c){this.yAxis=this.xAxis=this.userOptions=this.titleOffset=this.time=this.symbolCounter=this.spacingBox=
this.spacing=this.series=this.renderTo=this.renderer=this.pointer=this.pointCount=this.plotWidth=this.plotTop=this.plotLeft=this.plotHeight=this.plotBox=this.options=this.numberFormatter=this.margin=this.legend=this.labelCollectors=this.isResizing=this.index=this.container=this.colorCounter=this.clipBox=this.chartWidth=this.chartHeight=this.bounds=this.axisOffset=this.axes=void 0;this.getArgs(a,b,c)}f.prototype.getArgs=function(a,b,c){S(a)||a.nodeName?(this.renderTo=a,this.init(b,c)):this.init(a,
b)};f.prototype.init=function(a,b){var c,e=a.series,g=a.plotOptions||{};Q(this,"init",{args:arguments},function(){a.series=null;c=ba(M,a);var d=c.chart||{};aa(c.plotOptions,function(a,b){K(a)&&(a.tooltip=g[b]&&ba(g[b].tooltip)||void 0)});c.tooltip.userOptions=a.chart&&a.chart.forExport&&a.tooltip.userOptions||a.tooltip;c.series=a.series=e;this.userOptions=a;var f=d.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=b;this.isResizing=0;this.options=
c;this.axes=[];this.series=[];this.time=a.time&&Object.keys(a.time).length?new C(a.time):k.time;this.numberFormatter=d.numberFormatter||u;this.styledMode=d.styledMode;this.hasCartesianSeries=d.showAxes;var h=this;h.index=q.length;q.push(h);k.chartCount++;f&&aa(f,function(a,b){L(a)&&r(h,b,a)});h.xAxis=[];h.yAxis=[];h.pointCount=h.colorCounter=h.symbolCounter=0;Q(h,"afterInit");h.firstRender()})};f.prototype.initSeries=function(a){var b=this.options.chart;b=a.type||b.type||b.defaultSeriesType;var c=
m[b];c||F(17,!0,this,{missingModuleFor:b});b=new c;"function"===typeof b.init&&b.init(this,a);return b};f.prototype.setSeriesData=function(){this.getSeriesOrderByLinks().forEach(function(a){a.points||a.data||!a.enabledDataSorting||a.setData(a.options.data,!1)})};f.prototype.getSeriesOrderByLinks=function(){return this.series.concat().sort(function(a,b){return a.linkedSeries.length||b.linkedSeries.length?b.linkedSeries.length-a.linkedSeries.length:0})};f.prototype.orderSeries=function(a){var b=this.series;
for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].getName())};f.prototype.isInsidePlot=function(a,b,c){var e=c?b:a;a=c?a:b;e={x:e,y:a,isInsidePlot:0<=e&&e<=this.plotWidth&&0<=a&&a<=this.plotHeight};Q(this,"afterIsInsidePlot",e);return e.isInsidePlot};f.prototype.redraw=function(a){Q(this,"beforeRedraw");var b=this.hasCartesianSeries?this.axes:this.colorAxis||[],e=this.series,g=this.pointer,d=this.legend,f=this.userOptions.legend,h=this.isDirtyLegend,m=this.isDirtyBox,u=this.renderer,l=
u.isHidden(),n=[];this.setResponsive&&this.setResponsive(!1);c(this.hasRendered?a:!1,this);l&&this.temporaryDisplay();this.layOutTitles();for(a=e.length;a--;){var p=e[a];if(p.options.stacking||p.options.centerInCategory){var q=!0;if(p.isDirty){var r=!0;break}}}if(r)for(a=e.length;a--;)p=e[a],p.options.stacking&&(p.isDirty=!0);e.forEach(function(a){a.isDirty&&("point"===a.options.legendType?("function"===typeof a.updateTotals&&a.updateTotals(),h=!0):f&&(f.labelFormatter||f.labelFormat)&&(h=!0));a.isDirtyData&&
Q(a,"updatedData")});h&&d&&d.options.enabled&&(d.render(),this.isDirtyLegend=!1);q&&this.getStacks();b.forEach(function(a){a.updateNames();a.setScale()});this.getMargins();b.forEach(function(a){a.isDirty&&(m=!0)});b.forEach(function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,n.push(function(){Q(a,"afterSetExtremes",N(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(m||q)&&a.redraw()});m&&this.drawChartBox();Q(this,"predraw");e.forEach(function(a){(m||a.isDirty)&&a.visible&&a.redraw();
a.isDirtyData=!1});g&&g.reset(!0);u.draw();Q(this,"redraw");Q(this,"render");l&&this.temporaryDisplay(!0);n.forEach(function(a){a.call()})};f.prototype.get=function(a){function b(b){return b.id===a||b.options&&b.options.id===a}var c=this.series,e;var g=R(this.axes,b)||R(this.series,b);for(e=0;!g&&e<c.length;e++)g=R(c[e].points||[],b);return g};f.prototype.getAxes=function(){var a=this,b=this.options,e=b.xAxis=Y(b.xAxis||{});b=b.yAxis=Y(b.yAxis||{});Q(this,"getAxes");e.forEach(function(a,b){a.index=
b;a.isX=!0});b.forEach(function(a,b){a.index=b});e.concat(b).forEach(function(b){new d(a,b)});Q(this,"afterGetAxes")};f.prototype.getSelectedPoints=function(){var a=[];this.series.forEach(function(b){a=a.concat(b.getPointsCollection().filter(function(a){return I(a.selectedStaging,a.selected)}))});return a};f.prototype.getSelectedSeries=function(){return this.series.filter(function(a){return a.selected})};f.prototype.setTitle=function(a,b,e){this.applyDescription("title",a);this.applyDescription("subtitle",
b);this.applyDescription("caption",void 0);this.layOutTitles(e)};f.prototype.applyDescription=function(a,b){var e=this,c="title"===a?{color:D.neutralColor80,fontSize:this.options.isStock?"16px":"18px"}:{color:D.neutralColor60};c=this.options[a]=ba(!this.styledMode&&{style:c},this.options[a],b);var g=this[a];g&&b&&(this[a]=g=g.destroy());c&&!g&&(g=this.renderer.text(c.text,0,0,c.useHTML).attr({align:c.align,"class":"highcharts-"+a,zIndex:c.zIndex||4}).add(),g.update=function(b){e[{title:"setTitle",
subtitle:"setSubtitle",caption:"setCaption"}[a]](b)},this.styledMode||g.css(c.style),this[a]=g)};f.prototype.layOutTitles=function(a){var b=[0,0,0],c=this.renderer,e=this.spacingBox;["title","subtitle","caption"].forEach(function(a){var g=this[a],d=this.options[a],f=d.verticalAlign||"top";a="title"===a?-3:"top"===f?b[0]+2:0;if(g){if(!this.styledMode)var h=d.style.fontSize;h=c.fontMetrics(h,g).b;g.css({width:(d.width||e.width+(d.widthAdjust||0))+"px"});var m=Math.round(g.getBBox(d.useHTML).height);
g.align(N({y:"bottom"===f?h:a+h,height:m},d),!1,"spacingBox");d.floating||("top"===f?b[0]=Math.ceil(b[0]+m):"bottom"===f&&(b[2]=Math.ceil(b[2]+m)))}},this);b[0]&&"top"===(this.options.title.verticalAlign||"top")&&(b[0]+=this.options.title.margin);b[2]&&"bottom"===this.options.caption.verticalAlign&&(b[2]+=this.options.caption.margin);var g=!this.titleOffset||this.titleOffset.join(",")!==b.join(",");this.titleOffset=b;Q(this,"afterLayOutTitles");!this.isDirtyBox&&g&&(this.isDirtyBox=this.isDirtyLegend=
g,this.hasRendered&&I(a,!0)&&this.isDirtyBox&&this.redraw())};f.prototype.getChartSize=function(){var a=this.options.chart,b=a.width;a=a.height;var c=this.renderTo;w(b)||(this.containerWidth=T(c,"width"));w(a)||(this.containerHeight=T(c,"height"));this.chartWidth=Math.max(0,b||this.containerWidth||600);this.chartHeight=Math.max(0,U(a,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))};f.prototype.temporaryDisplay=function(a){var c=this.renderTo;if(a)for(;c&&c.style;)c.hcOrigStyle&&
(b(c,c.hcOrigStyle),delete c.hcOrigStyle),c.hcOrigDetached&&(n.body.removeChild(c),c.hcOrigDetached=!1),c=c.parentNode;else for(;c&&c.style;){n.body.contains(c)||c.parentNode||(c.hcOrigDetached=!0,n.body.appendChild(c));if("none"===T(c,"display",!1)||c.hcOricDetached)c.hcOrigStyle={display:c.style.display,height:c.style.height,overflow:c.style.overflow},a={display:"block",overflow:"hidden"},c!==this.renderTo&&(a.height=0),b(c,a),c.offsetWidth||c.style.setProperty("display","block","important");c=
c.parentNode;if(c===n.body)break}};f.prototype.setClassName=function(a){this.container.className="highcharts-container "+(a||"")};f.prototype.getContainer=function(){var g=this.options,d=g.chart;var f=this.renderTo;var h=ha(),m,u;f||(this.renderTo=f=d.renderTo);S(f)&&(this.renderTo=f=n.getElementById(f));f||F(13,!0,this);var l=X(e(f,"data-highcharts-chart"));p(l)&&q[l]&&q[l].hasRendered&&q[l].destroy();e(f,"data-highcharts-chart",this.index);f.innerHTML="";d.skipClone||f.offsetWidth||this.temporaryDisplay();
this.getChartSize();l=this.chartWidth;var r=this.chartHeight;b(f,{overflow:"hidden"});this.styledMode||(m=N({position:"relative",overflow:"hidden",width:l+"px",height:r+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)",userSelect:"none"},d.style));this.container=f=a("div",{id:h},m,f);this._cursor=f.style.cursor;this.renderer=new (k[d.renderer]||k.Renderer)(f,l,r,null,d.forExport,g.exporting&&g.exporting.allowHTML,this.styledMode);c(void 0,this);this.setClassName(d.className);
if(this.styledMode)for(u in g.defs)this.renderer.definition(g.defs[u]);else this.renderer.setStyle(d.style);this.renderer.chartIndex=this.index;Q(this,"afterGetContainer")};f.prototype.getMargins=function(a){var b=this.spacing,c=this.margin,e=this.titleOffset;this.resetMargins();e[0]&&!w(c[0])&&(this.plotTop=Math.max(this.plotTop,e[0]+b[0]));e[2]&&!w(c[2])&&(this.marginBottom=Math.max(this.marginBottom,e[2]+b[2]));this.legend&&this.legend.display&&this.legend.adjustMargins(c,b);Q(this,"getMargins");
a||this.getAxisMargins()};f.prototype.getAxisMargins=function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.colorAxis,e=a.margin,g=function(a){a.forEach(function(a){a.visible&&a.getOffset()})};a.hasCartesianSeries?g(a.axes):c&&c.length&&g(c);fa.forEach(function(c,g){w(e[g])||(a[c]+=b[g])});a.setChartSize()};f.prototype.reflow=function(a){var b=this,c=b.options.chart,e=b.renderTo,g=w(c.width)&&w(c.height),d=c.width||T(e,"width");c=c.height||T(e,"height");e=a?a.target:A;delete b.pointer.chartPosition;if(!g&&
!b.isPrinting&&d&&c&&(e===A||e===n)){if(d!==b.containerWidth||c!==b.containerHeight)l.clearTimeout(b.reflowTimeout),b.reflowTimeout=da(function(){b.container&&b.setSize(void 0,void 0,!1)},a?100:0);b.containerWidth=d;b.containerHeight=c}};f.prototype.setReflow=function(a){var b=this;!1===a||this.unbindReflow?!1===a&&this.unbindReflow&&(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=r(A,"resize",function(a){b.options&&b.reflow(a)}),r(this,"destroy",this.unbindReflow))};f.prototype.setSize=
function(a,e,d){var f=this,h=f.renderer;f.isResizing+=1;c(d,f);d=h.globalAnimation;f.oldChartHeight=f.chartHeight;f.oldChartWidth=f.chartWidth;"undefined"!==typeof a&&(f.options.chart.width=a);"undefined"!==typeof e&&(f.options.chart.height=e);f.getChartSize();f.styledMode||(d?g:b)(f.container,{width:f.chartWidth+"px",height:f.chartHeight+"px"},d);f.setChartSize(!0);h.setSize(f.chartWidth,f.chartHeight,d);f.axes.forEach(function(a){a.isDirty=!0;a.setScale()});f.isDirtyLegend=!0;f.isDirtyBox=!0;f.layOutTitles();
f.getMargins();f.redraw(d);f.oldChartHeight=null;Q(f,"resize");da(function(){f&&Q(f,"endResize",null,function(){--f.isResizing})},y(d).duration)};f.prototype.setChartSize=function(a){var b=this.inverted,c=this.renderer,e=this.chartWidth,g=this.chartHeight,d=this.options.chart,f=this.spacing,h=this.clipOffset,m,u,l,n;this.plotLeft=m=Math.round(this.plotLeft);this.plotTop=u=Math.round(this.plotTop);this.plotWidth=l=Math.max(0,Math.round(e-m-this.marginRight));this.plotHeight=n=Math.max(0,Math.round(g-
u-this.marginBottom));this.plotSizeX=b?n:l;this.plotSizeY=b?l:n;this.plotBorderWidth=d.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:f[3],y:f[0],width:e-f[3]-f[1],height:g-f[0]-f[2]};this.plotBox=c.plotBox={x:m,y:u,width:l,height:n};e=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(e,h[3])/2);c=Math.ceil(Math.max(e,h[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(e,h[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(e,h[2])/2-c))};a||this.axes.forEach(function(a){a.setAxisSize();
a.setAxisTranslation()});Q(this,"afterSetChartSize",{skipAxes:a})};f.prototype.resetMargins=function(){Q(this,"resetMargins");var a=this,b=a.options.chart;["margin","spacing"].forEach(function(c){var e=b[c],g=K(e)?e:[e,e,e,e];["Top","Right","Bottom","Left"].forEach(function(e,d){a[c][d]=I(b[c+e],g[d])})});fa.forEach(function(b,c){a[b]=I(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]};f.prototype.drawChartBox=function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,
e=this.chartHeight,g=this.chartBackground,d=this.plotBackground,f=this.plotBorder,h=this.styledMode,m=this.plotBGImage,u=a.backgroundColor,l=a.plotBackgroundColor,n=a.plotBackgroundImage,p,q=this.plotLeft,r=this.plotTop,k=this.plotWidth,I=this.plotHeight,w=this.plotBox,y=this.clipRect,t=this.clipBox,v="animate";g||(this.chartBackground=g=b.rect().addClass("highcharts-background").add(),v="attr");if(h)var z=p=g.strokeWidth();else{z=a.borderWidth||0;p=z+(a.shadow?8:0);u={fill:u||"none"};if(z||g["stroke-width"])u.stroke=
a.borderColor,u["stroke-width"]=z;g.attr(u).shadow(a.shadow)}g[v]({x:p/2,y:p/2,width:c-p-z%2,height:e-p-z%2,r:a.borderRadius});v="animate";d||(v="attr",this.plotBackground=d=b.rect().addClass("highcharts-plot-background").add());d[v](w);h||(d.attr({fill:l||"none"}).shadow(a.plotShadow),n&&(m?(n!==m.attr("href")&&m.attr("href",n),m.animate(w)):this.plotBGImage=b.image(n,q,r,k,I).add()));y?y.animate({width:t.width,height:t.height}):this.clipRect=b.clipRect(t);v="animate";f||(v="attr",this.plotBorder=
f=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());h||f.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});f[v](f.crisp({x:q,y:r,width:k,height:I},-f.strokeWidth()));this.isDirtyBox=!1;Q(this,"afterDrawChartBox")};f.prototype.propFromSeries=function(){var a=this,b=a.options.chart,c,e=a.options.series,g,d;["inverted","angular","polar"].forEach(function(f){c=m[b.type||b.defaultSeriesType];d=b[f]||c&&c.prototype[f];for(g=e&&e.length;!d&&g--;)(c=m[e[g].type])&&
c.prototype[f]&&(d=!0);a[f]=d})};f.prototype.linkSeries=function(){var a=this,b=a.series;b.forEach(function(a){a.linkedSeries.length=0});b.forEach(function(b){var c=b.options.linkedTo;S(c)&&(c=":previous"===c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,c.enabledDataSorting&&b.setDataSortingOptions(),b.visible=I(b.options.visible,c.options.visible,b.visible))});Q(this,"afterLinkSeries")};f.prototype.renderSeries=function(){this.series.forEach(function(a){a.translate();
a.render()})};f.prototype.renderLabels=function(){var a=this,b=a.options.labels;b.items&&b.items.forEach(function(c){var e=N(b.style,c.style),g=X(e.left)+a.plotLeft,d=X(e.top)+a.plotTop+12;delete e.left;delete e.top;a.renderer.text(c.html,g,d).attr({zIndex:2}).css(e).add()})};f.prototype.render=function(){var a=this.axes,b=this.colorAxis,c=this.renderer,e=this.options,g=0,d=function(a){a.forEach(function(a){a.visible&&a.render()})};this.setTitle();this.legend=new x(this,e.legend);this.getStacks&&
this.getStacks();this.getMargins(!0);this.setChartSize();e=this.plotWidth;a.some(function(a){if(a.horiz&&a.visible&&a.options.labels.enabled&&a.series.length)return g=21,!0});var f=this.plotHeight=Math.max(this.plotHeight-g,0);a.forEach(function(a){a.setScale()});this.getAxisMargins();var h=1.1<e/this.plotWidth;var m=1.05<f/this.plotHeight;if(h||m)a.forEach(function(a){(a.horiz&&h||!a.horiz&&m)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries?d(a):b&&b.length&&
d(b);this.seriesGroup||(this.seriesGroup=c.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0};f.prototype.addCredits=function(a){var b=this,c=ba(!0,this.options.credits,a);c.enabled&&!this.credits&&(this.credits=this.renderer.text(c.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){c.href&&(A.location.href=c.href)}).attr({align:c.position.align,zIndex:8}),
b.styledMode||this.credits.css(c.style),this.credits.add().align(c.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})};f.prototype.destroy=function(){var a=this,b=a.axes,c=a.series,e=a.container,g,d=e&&e.parentNode;Q(a,"destroy");a.renderer.forExport?O(q,a):q[a.index]=void 0;k.chartCount--;a.renderTo.removeAttribute("data-highcharts-chart");ea(a);for(g=b.length;g--;)b[g]=b[g].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(g=c.length;g--;)c[g]=
c[g].destroy();"title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(b){var c=a[b];c&&c.destroy&&(a[b]=c.destroy())});e&&(e.innerHTML="",ea(e),d&&J(e));aa(a,function(b,c){delete a[c]})};f.prototype.firstRender=function(){var a=this,b=a.options;if(!a.isReadyToRender||a.isReadyToRender()){a.getContainer();a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();
(v(b.series)?b.series:[]).forEach(function(b){a.initSeries(b)});a.linkSeries();a.setSeriesData();Q(a,"beforeRender");H&&(a.pointer=k.hasTouch||!A.PointerEvent&&!A.MSPointerEvent?new H(a,b):new B(a,b));a.render();a.pointer.getChartPosition();if(!a.renderer.imgCount&&!a.hasLoaded)a.onload();a.temporaryDisplay(!0)}};f.prototype.onload=function(){this.callbacks.concat([this.callback]).forEach(function(a){a&&"undefined"!==typeof this.index&&a.apply(this,[this])},this);Q(this,"load");Q(this,"render");w(this.index)&&
this.setReflow(this.options.chart.reflow);this.hasLoaded=!0};f.prototype.addSeries=function(a,b,c){var e,g=this;a&&(b=I(b,!0),Q(g,"addSeries",{options:a},function(){e=g.initSeries(a);g.isDirtyLegend=!0;g.linkSeries();e.enabledDataSorting&&e.setData(a.data,!1);Q(g,"afterAddSeries",{series:e});b&&g.redraw(c)}));return e};f.prototype.addAxis=function(a,b,c,e){return this.createAxis(b?"xAxis":"yAxis",{axis:a,redraw:c,animation:e})};f.prototype.addColorAxis=function(a,b,c){return this.createAxis("colorAxis",
{axis:a,redraw:b,animation:c})};f.prototype.createAxis=function(a,b){var c=this.options,e="colorAxis"===a,g=b.redraw,f=b.animation;b=ba(b.axis,{index:this[a].length,isX:"xAxis"===a});var h=e?new k.ColorAxis(this,b):new d(this,b);c[a]=Y(c[a]||{});c[a].push(b);e&&(this.isDirtyLegend=!0,this.axes.forEach(function(a){a.series=[]}),this.series.forEach(function(a){a.bindAxes();a.isDirtyData=!0}));I(g,!0)&&this.redraw(f);return h};f.prototype.showLoading=function(c){var e=this,d=e.options,f=e.loadingDiv,
h=e.loadingSpan,m=d.loading,u=function(){f&&b(f,{left:e.plotLeft+"px",top:e.plotTop+"px",width:e.plotWidth+"px",height:e.plotHeight+"px"})};f||(e.loadingDiv=f=a("div",{className:"highcharts-loading highcharts-loading-hidden"},null,e.container));h||(e.loadingSpan=h=a("span",{className:"highcharts-loading-inner"},null,f),r(e,"redraw",u));f.className="highcharts-loading";E.setElementHTML(h,I(c,d.lang.loading,""));e.styledMode||(b(f,N(m.style,{zIndex:10})),b(h,m.labelStyle),e.loadingShown||(b(f,{opacity:0,
display:""}),g(f,{opacity:m.style.opacity||.5},{duration:m.showDuration||0})));e.loadingShown=!0;u()};f.prototype.hideLoading=function(){var a=this.options,c=this.loadingDiv;c&&(c.className="highcharts-loading highcharts-loading-hidden",this.styledMode||g(c,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){b(c,{display:"none"})}}));this.loadingShown=!1};f.prototype.update=function(a,b,c,e){var g=this,d={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"},
f,m,u,l=a.isResponsiveOptions,n=[];Q(g,"update",{options:a});l||g.setResponsive(!1,!0);a=h(a,g.options);g.userOptions=ba(g.userOptions,a);if(f=a.chart){ba(!0,g.options.chart,f);"className"in f&&g.setClassName(f.className);"reflow"in f&&g.setReflow(f.reflow);if("inverted"in f||"polar"in f||"type"in f){g.propFromSeries();var q=!0}"alignTicks"in f&&(q=!0);aa(f,function(a,b){-1!==g.propsRequireUpdateSeries.indexOf("chart."+b)&&(m=!0);-1!==g.propsRequireDirtyBox.indexOf(b)&&(g.isDirtyBox=!0);-1!==g.propsRequireReflow.indexOf(b)&&
(l?g.isDirtyBox=!0:u=!0)});!g.styledMode&&"style"in f&&g.renderer.setStyle(f.style)}!g.styledMode&&a.colors&&(this.options.colors=a.colors);a.time&&(this.time===z&&(this.time=new C(a.time)),ba(!0,g.options.time,a.time));aa(a,function(b,c){if(g[c]&&"function"===typeof g[c].update)g[c].update(b,!1);else if("function"===typeof g[d[c]])g[d[c]](b);else"color"!==c&&-1===g.collectionsWithUpdate.indexOf(c)&&ba(!0,g.options[c],a[c]);"chart"!==c&&-1!==g.propsRequireUpdateSeries.indexOf(c)&&(m=!0)});this.collectionsWithUpdate.forEach(function(b){if(a[b]){if("series"===
b){var e=[];g[b].forEach(function(a,b){a.options.isInternal||e.push(I(a.options.index,b))})}Y(a[b]).forEach(function(a,d){var f=w(a.id),h;f&&(h=g.get(a.id));!h&&g[b]&&(h=g[b][e?e[d]:d])&&f&&w(h.options.id)&&(h=void 0);h&&h.coll===b&&(h.update(a,!1),c&&(h.touched=!0));!h&&c&&g.collectionsWithInit[b]&&(g.collectionsWithInit[b][0].apply(g,[a].concat(g.collectionsWithInit[b][1]||[]).concat([!1])).touched=!0)});c&&g[b].forEach(function(a){a.touched||a.options.isInternal?delete a.touched:n.push(a)})}});
n.forEach(function(a){a.chart&&a.remove(!1)});q&&g.axes.forEach(function(a){a.update({},!1)});m&&g.getSeriesOrderByLinks().forEach(function(a){a.chart&&a.update({},!1)},this);q=f&&f.width;f=f&&f.height;S(f)&&(f=U(f,q||g.chartWidth));u||p(q)&&q!==g.chartWidth||p(f)&&f!==g.chartHeight?g.setSize(q,f,e):I(b,!0)&&g.redraw(e);Q(g,"afterUpdate",{options:a,redraw:b,animation:e})};f.prototype.setSubtitle=function(a,b){this.applyDescription("subtitle",a);this.layOutTitles(b)};f.prototype.setCaption=function(a,
b){this.applyDescription("caption",a);this.layOutTitles(b)};f.prototype.showResetZoom=function(){function a(){b.zoomOut()}var b=this,c=M.lang,e=b.options.chart.resetZoomButton,g=e.theme,d=g.states,f="chart"===e.relativeTo||"spaceBox"===e.relativeTo?null:this.scrollablePlotBox||"plotBox";Q(this,"beforeShowResetZoom",null,function(){b.resetZoomButton=b.renderer.button(c.resetZoom,null,null,a,g,d&&d.hover).attr({align:e.position.align,title:c.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(e.position,
!1,f)});Q(this,"afterShowResetZoom")};f.prototype.zoomOut=function(){Q(this,"selection",{resetSelection:!0},this.zoom)};f.prototype.zoom=function(a){var b=this,c,e=b.pointer,g=!1,d=b.inverted?e.mouseDownX:e.mouseDownY;!a||a.resetSelection?(b.axes.forEach(function(a){c=a.zoom()}),e.initiated=!1):a.xAxis.concat(a.yAxis).forEach(function(a){var f=a.axis,h=b.inverted?f.left:f.top,m=b.inverted?h+f.width:h+f.height,u=f.isXAxis,l=!1;if(!u&&d>=h&&d<=m||u||!w(d))l=!0;e[u?"zoomX":"zoomY"]&&l&&(c=f.zoom(a.min,
a.max),f.displayBtn&&(g=!0))});var f=b.resetZoomButton;g&&!f?b.showResetZoom():!g&&K(f)&&(b.resetZoomButton=f.destroy());c&&b.redraw(I(b.options.chart.animation,a&&a.animation,100>b.pointCount))};f.prototype.pan=function(a,c){var e=this,g=e.hoverPoints,d=e.options.chart,f=e.options.mapNavigation&&e.options.mapNavigation.enabled,h;c="object"===typeof c?c:{enabled:c,type:"x"};d&&d.panning&&(d.panning=c);var m=c.type;Q(this,"pan",{originalEvent:a},function(){g&&g.forEach(function(a){a.setState()});var c=
[1];"xy"===m?c=[1,0]:"y"===m&&(c=[0]);c.forEach(function(b){var c=e[b?"xAxis":"yAxis"][0],g=c.horiz,d=a[g?"chartX":"chartY"];g=g?"mouseDownX":"mouseDownY";var u=e[g],l=(c.pointRange||0)/2,n=c.reversed&&!e.inverted||!c.reversed&&e.inverted?-1:1,q=c.getExtremes(),r=c.toValue(u-d,!0)+l*n;n=c.toValue(u+c.len-d,!0)-l*n;var k=n<r;u=k?n:r;r=k?r:n;n=c.hasVerticalPanning();var w=c.panningState;!n||b||w&&!w.isDirty||c.series.forEach(function(a){var b=a.getProcessedData(!0);b=a.getExtremes(b.yData,!0);w||(w=
{startMin:Number.MAX_VALUE,startMax:-Number.MAX_VALUE});p(b.dataMin)&&p(b.dataMax)&&(w.startMin=Math.min(I(a.options.threshold,Infinity),b.dataMin,w.startMin),w.startMax=Math.max(I(a.options.threshold,-Infinity),b.dataMax,w.startMax))});b=Math.min(I(null===w||void 0===w?void 0:w.startMin,q.dataMin),l?q.min:c.toValue(c.toPixels(q.min)-c.minPixelPadding));l=Math.max(I(null===w||void 0===w?void 0:w.startMax,q.dataMax),l?q.max:c.toValue(c.toPixels(q.max)+c.minPixelPadding));c.panningState=w;c.isOrdinal||
(n=b-u,0<n&&(r+=n,u=b),n=r-l,0<n&&(r=l,u-=n),c.series.length&&u!==q.min&&r!==q.max&&u>=b&&r<=l&&(c.setExtremes(u,r,!1,!1,{trigger:"pan"}),e.resetZoomButton||f||u===b||r===l||!m.match("y")||(e.showResetZoom(),c.displayBtn=!1),h=!0),e[g]=d)});h&&e.redraw(!1);b(e.container,{cursor:"move"})})};return f}();N(ca.prototype,{callbacks:[],collectionsWithInit:{xAxis:[ca.prototype.addAxis,[!0]],yAxis:[ca.prototype.addAxis,[!1]],series:[ca.prototype.addSeries]},collectionsWithUpdate:["xAxis","yAxis","zAxis",
"series"],propsRequireDirtyBox:"backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireReflow:"margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")});k.chart=function(a,b,c){return new ca(a,
b,c)};k.Chart=ca;"";return ca});P(k,"Mixins/LegendSymbol.js",[k["Core/Globals.js"],k["Core/Utilities.js"]],function(f,d){var k=d.merge,x=d.pick;return f.LegendSymbolMixin={drawRectangle:function(d,f){var k=d.symbolHeight,H=d.options.squareSymbol;f.legendSymbol=this.chart.renderer.rect(H?(d.symbolWidth-k)/2:0,d.baseline-k+1,H?k:d.symbolWidth,k,x(d.options.symbolRadius,k/2)).addClass("highcharts-point").attr({zIndex:3}).add(f.legendGroup)},drawLineMarker:function(d){var f=this.options,D=f.marker,H=
d.symbolWidth,t=d.symbolHeight,C=t/2,l=this.chart.renderer,E=this.legendGroup;d=d.baseline-Math.round(.3*d.fontMetrics.b);var g={};this.chart.styledMode||(g={"stroke-width":f.lineWidth||0},f.dashStyle&&(g.dashstyle=f.dashStyle));this.legendLine=l.path([["M",0,d],["L",H,d]]).addClass("highcharts-graph").attr(g).add(E);D&&!1!==D.enabled&&H&&(f=Math.min(x(D.radius,C),C),0===this.symbol.indexOf("url")&&(D=k(D,{width:t,height:t}),f=0),this.legendSymbol=D=l.symbol(this.symbol,H/2-f,d-f,2*f,2*f,D).addClass("highcharts-point").add(E),
D.isMarker=!0)}}});P(k,"Core/Series/Series.js",[k["Core/Animation/AnimationUtilities.js"],k["Core/Globals.js"],k["Mixins/LegendSymbol.js"],k["Core/Options.js"],k["Core/Color/Palette.js"],k["Core/Series/Point.js"],k["Core/Series/SeriesRegistry.js"],k["Core/Renderer/SVG/SVGElement.js"],k["Core/Utilities.js"]],function(f,d,k,x,B,G,D,H,t){var C=f.animObject,l=f.setAnimation,E=d.hasTouch,g=d.svg,y=d.win,c=x.defaultOptions,q=D.seriesTypes,n=t.addEvent,A=t.arrayMax,M=t.arrayMin,z=t.clamp,m=t.cleanRecursively,
r=t.correctFloat,e=t.defined,h=t.erase,a=t.error,b=t.extend,w=t.find,J=t.fireEvent,O=t.getNestedProperty,F=t.isArray,N=t.isFunction,R=t.isNumber,Q=t.isString,T=t.merge,v=t.objectEach,L=t.pick,p=t.removeEvent,K=t.splat,S=t.syncTimeout;f=function(){function d(){this.zones=this.yAxis=this.xAxis=this.userOptions=this.tooltipOptions=this.processedYData=this.processedXData=this.points=this.options=this.linkedSeries=this.index=this.eventsToUnbind=this.eventOptions=this.data=this.chart=this._i=void 0}d.prototype.init=
function(a,c){J(this,"init",{options:c});var e=this,g=a.series,d;this.eventOptions=this.eventOptions||{};this.eventsToUnbind=[];e.chart=a;e.options=c=e.setOptions(c);e.linkedSeries=[];e.bindAxes();b(e,{name:c.name,state:"",visible:!1!==c.visible,selected:!0===c.selected});var f=c.events;v(f,function(a,b){N(a)&&e.eventOptions[b]!==a&&(N(e.eventOptions[b])&&p(e,b,e.eventOptions[b]),e.eventOptions[b]=a,n(e,b,a))});if(f&&f.click||c.point&&c.point.events&&c.point.events.click||c.allowPointSelect)a.runTrackerClick=
!0;e.getColor();e.getSymbol();e.parallelArrays.forEach(function(a){e[a+"Data"]||(e[a+"Data"]=[])});e.isCartesian&&(a.hasCartesianSeries=!0);g.length&&(d=g[g.length-1]);e._i=L(d&&d._i,-1)+1;e.opacity=e.options.opacity;a.orderSeries(this.insert(g));c.dataSorting&&c.dataSorting.enabled?e.setDataSortingOptions():e.points||e.data||e.setData(c.data,!1);J(this,"afterInit")};d.prototype.is=function(a){return q[a]&&this instanceof q[a]};d.prototype.insert=function(a){var b=this.options.index,c;if(R(b)){for(c=
a.length;c--;)if(b>=L(a[c].options.index,a[c]._i)){a.splice(c+1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return L(c,a.length-1)};d.prototype.bindAxes=function(){var b=this,c=b.options,e=b.chart,g;J(this,"bindAxes",null,function(){(b.axisTypes||[]).forEach(function(d){e[d].forEach(function(a){g=a.options;if(c[d]===g.index||"undefined"!==typeof c[d]&&c[d]===g.id||"undefined"===typeof c[d]&&0===g.index)b.insert(a.series),b[d]=a,a.isDirty=!0});b[d]||b.optionalAxis===d||a(18,!0,e)})});
J(this,"afterBindAxes")};d.prototype.updateParallelArrays=function(a,b){var c=a.series,e=arguments,g=R(b)?function(e){var g="y"===e&&c.toYData?c.toYData(a):a[e];c[e+"Data"][b]=g}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(e,2))};c.parallelArrays.forEach(g)};d.prototype.hasData=function(){return this.visible&&"undefined"!==typeof this.dataMax&&"undefined"!==typeof this.dataMin||this.visible&&this.yData&&0<this.yData.length};d.prototype.autoIncrement=function(){var a=
this.options,b=this.xIncrement,c,e=a.pointIntervalUnit,g=this.chart.time;b=L(b,a.pointStart,0);this.pointInterval=c=L(this.pointInterval,a.pointInterval,1);e&&(a=new g.Date(b),"day"===e?g.set("Date",a,g.get("Date",a)+c):"month"===e?g.set("Month",a,g.get("Month",a)+c):"year"===e&&g.set("FullYear",a,g.get("FullYear",a)+c),c=a.getTime()-b);this.xIncrement=b+c;return b};d.prototype.setDataSortingOptions=function(){var a=this.options;b(this,{requireSorting:!1,sorted:!1,enabledDataSorting:!0,allowDG:!1});
e(a.pointRange)||(a.pointRange=1)};d.prototype.setOptions=function(a){var b=this.chart,g=b.options,d=g.plotOptions,f=b.userOptions||{};a=T(a);b=b.styledMode;var h={plotOptions:d,userOptions:a};J(this,"setOptions",h);var m=h.plotOptions[this.type],l=f.plotOptions||{};this.userOptions=h.userOptions;f=T(m,d.series,f.plotOptions&&f.plotOptions[this.type],a);this.tooltipOptions=T(c.tooltip,c.plotOptions.series&&c.plotOptions.series.tooltip,c.plotOptions[this.type].tooltip,g.tooltip.userOptions,d.series&&
d.series.tooltip,d[this.type].tooltip,a.tooltip);this.stickyTracking=L(a.stickyTracking,l[this.type]&&l[this.type].stickyTracking,l.series&&l.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:f.stickyTracking);null===m.marker&&delete f.marker;this.zoneAxis=f.zoneAxis;g=this.zones=(f.zones||[]).slice();!f.negativeColor&&!f.negativeFillColor||f.zones||(d={value:f[this.zoneAxis+"Threshold"]||f.threshold||0,className:"highcharts-negative"},b||(d.color=f.negativeColor,d.fillColor=
f.negativeFillColor),g.push(d));g.length&&e(g[g.length-1].value)&&g.push(b?{}:{color:this.color,fillColor:this.fillColor});J(this,"afterSetOptions",{options:f});return f};d.prototype.getName=function(){return L(this.options.name,"Series "+(this.index+1))};d.prototype.getCyclic=function(a,b,c){var g=this.chart,d=this.userOptions,f=a+"Index",h=a+"Counter",m=c?c.length:L(g.options.chart[a+"Count"],g[a+"Count"]);if(!b){var l=L(d[f],d["_"+f]);e(l)||(g.series.length||(g[h]=0),d["_"+f]=l=g[h]%m,g[h]+=1);
c&&(b=c[l])}"undefined"!==typeof l&&(this[f]=l);this[a]=b};d.prototype.getColor=function(){this.chart.styledMode?this.getCyclic("color"):this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||c.plotOptions[this.type].color,this.chart.options.colors)};d.prototype.getPointsCollection=function(){return(this.hasGroupedData?this.points:this.data)||[]};d.prototype.getSymbol=function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)};d.prototype.findPointIndex=
function(a,b){var c=a.id,e=a.x,g=this.points,d,f=this.options.dataSorting;if(c)var h=this.chart.get(c);else if(this.linkedParent||this.enabledDataSorting){var m=f&&f.matchByName?"name":"index";h=w(g,function(b){return!b.touched&&b[m]===a[m]});if(!h)return}if(h){var l=h&&h.index;"undefined"!==typeof l&&(d=!0)}"undefined"===typeof l&&R(e)&&(l=this.xData.indexOf(e,b));-1!==l&&"undefined"!==typeof l&&this.cropped&&(l=l>=this.cropStart?l-this.cropStart:l);!d&&g[l]&&g[l].touched&&(l=void 0);return l};d.prototype.updateData=
function(a,b){var c=this.options,g=c.dataSorting,d=this.points,f=[],h,m,l,n=this.requireSorting,u=a.length===d.length,p=!0;this.xIncrement=null;a.forEach(function(a,b){var m=e(a)&&this.pointClass.prototype.optionsToObject.call({series:this},a)||{};var p=m.x;if(m.id||R(p)){if(p=this.findPointIndex(m,l),-1===p||"undefined"===typeof p?f.push(a):d[p]&&a!==c.data[p]?(d[p].update(a,!1,null,!1),d[p].touched=!0,n&&(l=p+1)):d[p]&&(d[p].touched=!0),!u||b!==p||g&&g.enabled||this.hasDerivedData)h=!0}else f.push(a)},
this);if(h)for(a=d.length;a--;)(m=d[a])&&!m.touched&&m.remove&&m.remove(!1,b);else!u||g&&g.enabled?p=!1:(a.forEach(function(a,b){d[b].update&&a!==d[b].y&&d[b].update(a,!1,null,!1)}),f.length=0);d.forEach(function(a){a&&(a.touched=!1)});if(!p)return!1;f.forEach(function(a){this.addPoint(a,!1,null,null,!1)},this);null===this.xIncrement&&this.xData&&this.xData.length&&(this.xIncrement=A(this.xData),this.autoIncrement());return!0};d.prototype.setData=function(b,c,e,g){var d=this,f=d.points,h=f&&f.length||
0,m,l=d.options,n=d.chart,u=l.dataSorting,p=null,q=d.xAxis;p=l.turboThreshold;var r=this.xData,k=this.yData,w=(m=d.pointArrayMap)&&m.length,y=l.keys,t=0,I=1,v;b=b||[];m=b.length;c=L(c,!0);u&&u.enabled&&(b=this.sortData(b));!1!==g&&m&&h&&!d.cropped&&!d.hasGroupedData&&d.visible&&!d.isSeriesBoosting&&(v=this.updateData(b,e));if(!v){d.xIncrement=null;d.colorCounter=0;this.parallelArrays.forEach(function(a){d[a+"Data"].length=0});if(p&&m>p)if(p=d.getFirstValidPoint(b),R(p))for(e=0;e<m;e++)r[e]=this.autoIncrement(),
k[e]=b[e];else if(F(p))if(w)for(e=0;e<m;e++)g=b[e],r[e]=g[0],k[e]=g.slice(1,w+1);else for(y&&(t=y.indexOf("x"),I=y.indexOf("y"),t=0<=t?t:0,I=0<=I?I:1),e=0;e<m;e++)g=b[e],r[e]=g[t],k[e]=g[I];else a(12,!1,n);else for(e=0;e<m;e++)"undefined"!==typeof b[e]&&(g={series:d},d.pointClass.prototype.applyOptions.apply(g,[b[e]]),d.updateParallelArrays(g,e));k&&Q(k[0])&&a(14,!0,n);d.data=[];d.options.data=d.userOptions.data=b;for(e=h;e--;)f[e]&&f[e].destroy&&f[e].destroy();q&&(q.minRange=q.userMinRange);d.isDirty=
n.isDirtyBox=!0;d.isDirtyData=!!f;e=!1}"point"===l.legendType&&(this.processData(),this.generatePoints());c&&n.redraw(e)};d.prototype.sortData=function(a){var b=this,c=b.options.dataSorting.sortKey||"y",g=function(a,b){return e(b)&&a.pointClass.prototype.optionsToObject.call({series:a},b)||{}};a.forEach(function(c,e){a[e]=g(b,c);a[e].index=e},this);a.concat().sort(function(a,b){a=O(c,a);b=O(c,b);return b<a?-1:b>a?1:0}).forEach(function(a,b){a.x=b},this);b.linkedSeries&&b.linkedSeries.forEach(function(b){var c=
b.options,e=c.data;c.dataSorting&&c.dataSorting.enabled||!e||(e.forEach(function(c,d){e[d]=g(b,c);a[d]&&(e[d].x=a[d].x,e[d].index=d)}),b.setData(e,!1))});return a};d.prototype.getProcessedData=function(b){var c=this.xData,e=this.yData,g=c.length;var d=0;var f=this.xAxis,h=this.options;var m=h.cropThreshold;var l=b||this.getExtremesFromAll||h.getExtremesFromAll,n=this.isCartesian;b=f&&f.val2lin;h=!(!f||!f.logarithmic);var p=this.requireSorting;if(f){f=f.getExtremes();var u=f.min;var q=f.max}if(n&&
this.sorted&&!l&&(!m||g>m||this.forceCrop))if(c[g-1]<u||c[0]>q)c=[],e=[];else if(this.yData&&(c[0]<u||c[g-1]>q)){d=this.cropData(this.xData,this.yData,u,q);c=d.xData;e=d.yData;d=d.start;var r=!0}for(m=c.length||1;--m;)if(g=h?b(c[m])-b(c[m-1]):c[m]-c[m-1],0<g&&("undefined"===typeof k||g<k))var k=g;else 0>g&&p&&(a(15,!1,this.chart),p=!1);return{xData:c,yData:e,cropped:r,cropStart:d,closestPointRange:k}};d.prototype.processData=function(a){var b=this.xAxis;if(this.isCartesian&&!this.isDirty&&!b.isDirty&&
!this.yAxis.isDirty&&!a)return!1;a=this.getProcessedData();this.cropped=a.cropped;this.cropStart=a.cropStart;this.processedXData=a.xData;this.processedYData=a.yData;this.closestPointRange=this.basePointRange=a.closestPointRange};d.prototype.cropData=function(a,b,c,e,g){var d=a.length,f=0,h=d,m;g=L(g,this.cropShoulder);for(m=0;m<d;m++)if(a[m]>=c){f=Math.max(0,m-g);break}for(c=m;c<d;c++)if(a[c]>e){h=c+g;break}return{xData:a.slice(f,h),yData:b.slice(f,h),start:f,end:h}};d.prototype.generatePoints=function(){var a=
this.options,c=a.data,e=this.data,g,d=this.processedXData,f=this.processedYData,h=this.pointClass,m=d.length,l=this.cropStart||0,n=this.hasGroupedData;a=a.keys;var p=[],q;e||n||(e=[],e.length=c.length,e=this.data=e);a&&n&&(this.options.keys=!1);for(q=0;q<m;q++){var r=l+q;if(n){var k=(new h).init(this,[d[q]].concat(K(f[q])));k.dataGroup=this.groupMap[q];k.dataGroup.options&&(k.options=k.dataGroup.options,b(k,k.dataGroup.options),delete k.dataLabels)}else(k=e[r])||"undefined"===typeof c[r]||(e[r]=k=
(new h).init(this,c[r],d[q]));k&&(k.index=r,p[q]=k)}this.options.keys=a;if(e&&(m!==(g=e.length)||n))for(q=0;q<g;q++)q!==l||n||(q+=m),e[q]&&(e[q].destroyElements(),e[q].plotX=void 0);this.data=e;this.points=p;J(this,"afterGeneratePoints")};d.prototype.getXExtremes=function(a){return{min:M(a),max:A(a)}};d.prototype.getExtremes=function(a,b){var c=this.xAxis,e=this.yAxis,g=this.processedXData||this.xData,d=[],f=0,h=0;var m=0;var l=this.requireSorting?this.cropShoulder:0,n=e?e.positiveValuesOnly:!1,p;
a=a||this.stackedYData||this.processedYData||[];e=a.length;c&&(m=c.getExtremes(),h=m.min,m=m.max);for(p=0;p<e;p++){var u=g[p];var q=a[p];var r=(R(q)||F(q))&&(q.length||0<q||!n);u=b||this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||!c||(g[p+l]||u)>=h&&(g[p-l]||u)<=m;if(r&&u)if(r=q.length)for(;r--;)R(q[r])&&(d[f++]=q[r]);else d[f++]=q}a={dataMin:M(d),dataMax:A(d)};J(this,"afterGetExtremes",{dataExtremes:a});return a};d.prototype.applyExtremes=function(){var a=this.getExtremes();
this.dataMin=a.dataMin;this.dataMax=a.dataMax;return a};d.prototype.getFirstValidPoint=function(a){for(var b=null,c=a.length,e=0;null===b&&e<c;)b=a[e],e++;return b};d.prototype.translate=function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,c=this.xAxis,g=c.categories,d=this.enabledDataSorting,f=this.yAxis,h=this.points,m=h.length,l=!!this.modifyValue,n,p=this.pointPlacementToXValue(),q=!!p,k=a.threshold,w=a.startFromThreshold?k:0,y,t=this.zoneAxis||
"y",v=Number.MAX_VALUE;for(n=0;n<m;n++){var A=h[n],C=A.x,E=A.y,x=A.low,M=b&&f.stacking&&f.stacking.stacks[(this.negStacks&&E<(w?0:k)?"-":"")+this.stackKey];if(f.positiveValuesOnly&&!f.validatePositiveValue(E)||c.positiveValuesOnly&&!c.validatePositiveValue(C))A.isNull=!0;A.plotX=y=r(z(c.translate(C,0,0,0,1,p,"flags"===this.type),-1E5,1E5));if(b&&this.visible&&M&&M[C]){var N=this.getStackIndicator(N,C,this.index);if(!A.isNull){var H=M[C];var Q=H.points[N.key]}}F(Q)&&(x=Q[0],E=Q[1],x===w&&N.key===M[C].base&&
(x=L(R(k)&&k,f.min)),f.positiveValuesOnly&&0>=x&&(x=null),A.total=A.stackTotal=H.total,A.percentage=H.total&&A.y/H.total*100,A.stackY=E,this.irregularWidths||H.setOffset(this.pointXOffset||0,this.barW||0));A.yBottom=e(x)?z(f.translate(x,0,1,0,1),-1E5,1E5):null;l&&(E=this.modifyValue(E,A));A.plotY=void 0;R(E)&&(E=f.translate(E,!1,!0,!1,!0),"undefined"!==typeof E&&(A.plotY=z(E,-1E5,1E5)));A.isInside=this.isPointInside(A);A.clientX=q?r(c.translate(C,0,0,0,1,p)):y;A.negative=A[t]<(a[t+"Threshold"]||k||
0);A.category=g&&"undefined"!==typeof g[A.x]?g[A.x]:A.x;if(!A.isNull&&!1!==A.visible){"undefined"!==typeof D&&(v=Math.min(v,Math.abs(y-D)));var D=y}A.zone=this.zones.length&&A.getZone();!A.graphic&&this.group&&d&&(A.isNew=!0)}this.closestPointRangePx=v;J(this,"afterTranslate")};d.prototype.getValidPoints=function(a,b,c){var e=this.chart;return(a||this.points||[]).filter(function(a){return b&&!e.isInsidePlot(a.plotX,a.plotY,e.inverted)?!1:!1!==a.visible&&(c||!a.isNull)})};d.prototype.getClipBox=function(a,
b){var c=this.options,e=this.chart,g=e.inverted,d=this.xAxis,f=d&&this.yAxis,h=e.options.chart.scrollablePlotArea||{};a&&!1===c.clip&&f?a=g?{y:-e.chartWidth+f.len+f.pos,height:e.chartWidth,width:e.chartHeight,x:-e.chartHeight+d.len+d.pos}:{y:-f.pos,height:e.chartHeight,width:e.chartWidth,x:-d.pos}:(a=this.clipBox||e.clipBox,b&&(a.width=e.plotSizeX,a.x=(e.scrollablePixelsX||0)*(h.scrollPositionX||0)));return b?{width:a.width,x:a.x}:a};d.prototype.setClip=function(a){var b=this.chart,c=this.options,
e=b.renderer,g=b.inverted,d=this.clipBox,f=this.getClipBox(a),h=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,a&&a.defer,f.height,c.xAxis,c.yAxis].join(),m=b[h],l=b[h+"m"];a&&(f.width=0,g&&(f.x=b.plotHeight+(!1!==c.clip?0:b.plotTop)));m?b.hasLoaded||m.attr(f):(a&&(b[h+"m"]=l=e.clipRect(g?b.plotSizeX+99:-99,g?-b.plotLeft:-b.plotTop,99,g?b.chartWidth:b.chartHeight)),b[h]=m=e.clipRect(f),m.count={length:0});a&&!m.count[this.index]&&(m.count[this.index]=!0,m.count.length+=1);if(!1!==c.clip||
a)this.group.clip(a||d?m:b.clipRect),this.markerGroup.clip(l),this.sharedClipKey=h;a||(m.count[this.index]&&(delete m.count[this.index],--m.count.length),0===m.count.length&&h&&b[h]&&(d||(b[h]=b[h].destroy()),b[h+"m"]&&(b[h+"m"]=b[h+"m"].destroy())))};d.prototype.animate=function(a){var b=this.chart,c=C(this.options.animation);if(a)this.setClip(c);else{var e=this.sharedClipKey;a=b[e];var g=this.getClipBox(c,!0);a&&a.animate(g,c);b[e+"m"]&&b[e+"m"].animate({width:g.width+99,x:g.x-(b.inverted?0:99)},
c)}};d.prototype.afterAnimate=function(){this.setClip();J(this,"afterAnimate");this.finishedAnimating=!0};d.prototype.drawPoints=function(){var a=this.points,b=this.chart,c,e,g=this.options.marker,d=this[this.specialGroup]||this.markerGroup,f=this.xAxis,h=L(g.enabled,!f||f.isRadial?!0:null,this.closestPointRangePx>=g.enabledThreshold*g.radius);if(!1!==g.enabled||this._hasPointMarkers)for(c=0;c<a.length;c++){var m=a[c];var l=(e=m.graphic)?"animate":"attr";var n=m.marker||{};var p=!!m.marker;if((h&&
"undefined"===typeof n.enabled||n.enabled)&&!m.isNull&&!1!==m.visible){var q=L(n.symbol,this.symbol);var r=this.markerAttribs(m,m.selected&&"select");this.enabledDataSorting&&(m.startXPos=f.reversed?-r.width:f.width);var k=!1!==m.isInside;e?e[k?"show":"hide"](k).animate(r):k&&(0<r.width||m.hasImage)&&(m.graphic=e=b.renderer.symbol(q,r.x,r.y,r.width,r.height,p?n:g).add(d),this.enabledDataSorting&&b.hasRendered&&(e.attr({x:m.startXPos}),l="animate"));e&&"animate"===l&&e[k?"show":"hide"](k).animate(r);
if(e&&!b.styledMode)e[l](this.pointAttribs(m,m.selected&&"select"));e&&e.addClass(m.getClassName(),!0)}else e&&(m.graphic=e.destroy())}};d.prototype.markerAttribs=function(a,b){var c=this.options,e=c.marker,g=a.marker||{},d=g.symbol||e.symbol,f=L(g.radius,e.radius);b&&(e=e.states[b],b=g.states&&g.states[b],f=L(b&&b.radius,e&&e.radius,f+(e&&e.radiusPlus||0)));a.hasImage=d&&0===d.indexOf("url");a.hasImage&&(f=0);a={x:c.crisp?Math.floor(a.plotX)-f:a.plotX-f,y:a.plotY-f};f&&(a.width=a.height=2*f);return a};
d.prototype.pointAttribs=function(a,b){var c=this.options.marker,e=a&&a.options,g=e&&e.marker||{},d=this.color,f=e&&e.color,h=a&&a.color;e=L(g.lineWidth,c.lineWidth);var m=a&&a.zone&&a.zone.color;a=1;d=f||m||h||d;f=g.fillColor||c.fillColor||d;d=g.lineColor||c.lineColor||d;b=b||"normal";c=c.states[b];b=g.states&&g.states[b]||{};e=L(b.lineWidth,c.lineWidth,e+L(b.lineWidthPlus,c.lineWidthPlus,0));f=b.fillColor||c.fillColor||f;d=b.lineColor||c.lineColor||d;a=L(b.opacity,c.opacity,a);return{stroke:d,"stroke-width":e,
fill:f,opacity:a}};d.prototype.destroy=function(a){var b=this,c=b.chart,e=/AppleWebKit\/533/.test(y.navigator.userAgent),g,d,f=b.data||[],m,l;J(b,"destroy");this.removeEvents(a);(b.axisTypes||[]).forEach(function(a){(l=b[a])&&l.series&&(h(l.series,b),l.isDirty=l.forceRedraw=!0)});b.legendItem&&b.chart.legend.destroyItem(b);for(d=f.length;d--;)(m=f[d])&&m.destroy&&m.destroy();b.points=null;t.clearTimeout(b.animationTimeout);v(b,function(a,b){a instanceof H&&!a.survive&&(g=e&&"group"===b?"hide":"destroy",
a[g]())});c.hoverSeries===b&&(c.hoverSeries=null);h(c.series,b);c.orderSeries();v(b,function(c,e){a&&"hcEvents"===e||delete b[e]})};d.prototype.applyZones=function(){var a=this,b=this.chart,c=b.renderer,e=this.zones,g,d,f=this.clips||[],h,m=this.graph,l=this.area,n=Math.max(b.chartWidth,b.chartHeight),p=this[(this.zoneAxis||"y")+"Axis"],q=b.inverted,r,k,w,y=!1,t,v;if(e.length&&(m||l)&&p&&"undefined"!==typeof p.min){var A=p.reversed;var F=p.horiz;m&&!this.showLine&&m.hide();l&&l.hide();var E=p.getExtremes();
e.forEach(function(e,u){g=A?F?b.plotWidth:0:F?0:p.toPixels(E.min)||0;g=z(L(d,g),0,n);d=z(Math.round(p.toPixels(L(e.value,E.max),!0)||0),0,n);y&&(g=d=p.toPixels(E.max));r=Math.abs(g-d);k=Math.min(g,d);w=Math.max(g,d);p.isXAxis?(h={x:q?w:k,y:0,width:r,height:n},F||(h.x=b.plotHeight-h.x)):(h={x:0,y:q?w:k,width:n,height:r},F&&(h.y=b.plotWidth-h.y));q&&c.isVML&&(h=p.isXAxis?{x:0,y:A?k:w,height:h.width,width:b.chartWidth}:{x:h.y-b.plotLeft-b.spacingBox.x,y:0,width:h.height,height:b.chartHeight});f[u]?f[u].animate(h):
f[u]=c.clipRect(h);t=a["zone-area-"+u];v=a["zone-graph-"+u];m&&v&&v.clip(f[u]);l&&t&&t.clip(f[u]);y=e.value>E.max;a.resetZones&&0===d&&(d=void 0)});this.clips=f}else a.visible&&(m&&m.show(!0),l&&l.show(!0))};d.prototype.invertGroups=function(a){function b(){["group","markerGroup"].forEach(function(b){c[b]&&(e.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(c.isRadialSeries?!1:a))})}var c=this,e=c.chart;c.xAxis&&(c.eventsToUnbind.push(n(e,
"resize",b)),b(),c.invertGroups=b)};d.prototype.plotGroup=function(a,b,c,g,d){var f=this[a],h=!f;c={visibility:c,zIndex:g||.1};"undefined"===typeof this.opacity||this.chart.styledMode||"inactive"===this.state||(c.opacity=this.opacity);h&&(this[a]=f=this.chart.renderer.g().add(d));f.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(e(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(f.hasClass("highcharts-tracker")?
" highcharts-tracker":""),!0);f.attr(c)[h?"attr":"animate"](this.getPlotBox());return f};d.prototype.getPlotBox=function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}};d.prototype.removeEvents=function(a){a||p(this);this.eventsToUnbind.length&&(this.eventsToUnbind.forEach(function(a){a()}),this.eventsToUnbind.length=0)};d.prototype.render=function(){var a=this,b=a.chart,c=a.options,
e=C(c.animation),g=!a.finishedAnimating&&b.renderer.isSVG&&e.duration,d=a.visible?"inherit":"hidden",f=c.zIndex,h=a.hasRendered,m=b.seriesGroup,l=b.inverted;J(this,"render");var n=a.plotGroup("group","series",d,f,m);a.markerGroup=a.plotGroup("markerGroup","markers",d,f,m);g&&a.animate&&a.animate(!0);n.inverted=L(a.invertible,a.isCartesian)?l:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.visible&&a.drawPoints();a.drawDataLabels&&a.drawDataLabels();a.redrawPoints&&a.redrawPoints();a.drawTracker&&
!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(l);!1===c.clip||a.sharedClipKey||h||n.clip(b.clipRect);g&&a.animate&&a.animate();h||(g&&e.defer&&(g+=e.defer),a.animationTimeout=S(function(){a.afterAnimate()},g||0));a.isDirty=!1;a.hasRendered=!0;J(a,"afterRender")};d.prototype.redraw=function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,e=this.xAxis,g=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:L(e&&e.left,
a.plotLeft),translateY:L(g&&g.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree};d.prototype.searchPoint=function(a,b){var c=this.xAxis,e=this.yAxis,g=this.chart.inverted;return this.searchKDTree({clientX:g?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:g?e.len-a.chartX+e.pos:a.chartY-e.pos},b,a)};d.prototype.buildKDTree=function(a){function b(a,e,g){var d;if(d=a&&a.length){var f=c.kdAxisArray[e%g];a.sort(function(a,b){return a[f]-b[f]});d=Math.floor(d/2);return{point:a[d],left:b(a.slice(0,
d),e+1,g),right:b(a.slice(d+1),e+1,g)}}}this.buildingKdTree=!0;var c=this,e=-1<c.options.findNearestPointBy.indexOf("y")?2:1;delete c.kdTree;S(function(){c.kdTree=b(c.getValidPoints(null,!c.directTouch),e,e);c.buildingKdTree=!1},c.options.kdNow||a&&"touchstart"===a.type?0:1)};d.prototype.searchKDTree=function(a,b,c){function g(a,b,c,l){var n=b.point,p=d.kdAxisArray[c%l],q=n;var r=e(a[f])&&e(n[f])?Math.pow(a[f]-n[f],2):null;var k=e(a[h])&&e(n[h])?Math.pow(a[h]-n[h],2):null;k=(r||0)+(k||0);n.dist=e(k)?
Math.sqrt(k):Number.MAX_VALUE;n.distX=e(r)?Math.sqrt(r):Number.MAX_VALUE;p=a[p]-n[p];k=0>p?"left":"right";r=0>p?"right":"left";b[k]&&(k=g(a,b[k],c+1,l),q=k[m]<q[m]?k:n);b[r]&&Math.sqrt(p*p)<q[m]&&(a=g(a,b[r],c+1,l),q=a[m]<q[m]?a:q);return q}var d=this,f=this.kdAxisArray[0],h=this.kdAxisArray[1],m=b?"distX":"dist";b=-1<d.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree(c);if(this.kdTree)return g(a,this.kdTree,b,b)};d.prototype.pointPlacementToXValue=function(){var a=
this.options,b=a.pointRange,c=this.xAxis;a=a.pointPlacement;"between"===a&&(a=c.reversed?-.5:.5);return R(a)?a*(b||c.pointRange):0};d.prototype.isPointInside=function(a){return"undefined"!==typeof a.plotY&&"undefined"!==typeof a.plotX&&0<=a.plotY&&a.plotY<=this.yAxis.len&&0<=a.plotX&&a.plotX<=this.xAxis.len};d.prototype.drawTracker=function(){var a=this,b=a.options,c=b.trackByArea,e=[].concat(c?a.areaPath:a.graphPath),d=a.chart,f=d.pointer,h=d.renderer,m=d.options.tooltip.snap,l=a.tracker,n=function(b){if(d.hoverSeries!==
a)a.onMouseOver()},p="rgba(192,192,192,"+(g?.0001:.002)+")";l?l.attr({d:e}):a.graph&&(a.tracker=h.path(e).attr({visibility:a.visible?"visible":"hidden",zIndex:2}).addClass(c?"highcharts-tracker-area":"highcharts-tracker-line").add(a.group),d.styledMode||a.tracker.attr({"stroke-linecap":"round","stroke-linejoin":"round",stroke:p,fill:c?p:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*m)}),[a.tracker,a.markerGroup].forEach(function(a){a.addClass("highcharts-tracker").on("mouseover",n).on("mouseout",
function(a){f.onTrackerMouseOut(a)});b.cursor&&!d.styledMode&&a.css({cursor:b.cursor});if(E)a.on("touchstart",n)}));J(this,"afterDrawTracker")};d.prototype.addPoint=function(a,b,c,e,g){var d=this.options,f=this.data,h=this.chart,m=this.xAxis;m=m&&m.hasNames&&m.names;var l=d.data,n=this.xData,p;b=L(b,!0);var q={series:this};this.pointClass.prototype.applyOptions.apply(q,[a]);var r=q.x;var k=n.length;if(this.requireSorting&&r<n[k-1])for(p=!0;k&&n[k-1]>r;)k--;this.updateParallelArrays(q,"splice",k,0,
0);this.updateParallelArrays(q,k);m&&q.name&&(m[r]=q.name);l.splice(k,0,a);p&&(this.data.splice(k,0,null),this.processData());"point"===d.legendType&&this.generatePoints();c&&(f[0]&&f[0].remove?f[0].remove(!1):(f.shift(),this.updateParallelArrays(q,"shift"),l.shift()));!1!==g&&J(this,"addPoint",{point:q});this.isDirtyData=this.isDirty=!0;b&&h.redraw(e)};d.prototype.removePoint=function(a,b,c){var e=this,g=e.data,d=g[a],f=e.points,h=e.chart,m=function(){f&&f.length===g.length&&f.splice(a,1);g.splice(a,
1);e.options.data.splice(a,1);e.updateParallelArrays(d||{series:e},"splice",a,1);d&&d.destroy();e.isDirty=!0;e.isDirtyData=!0;b&&h.redraw()};l(c,h);b=L(b,!0);d?d.firePointEvent("remove",null,m):m()};d.prototype.remove=function(a,b,c,e){function g(){d.destroy(e);f.isDirtyLegend=f.isDirtyBox=!0;f.linkSeries();L(a,!0)&&f.redraw(b)}var d=this,f=d.chart;!1!==c?J(d,"remove",null,g):g()};d.prototype.update=function(c,e){c=m(c,this.userOptions);J(this,"update",{options:c});var g=this,d=g.chart,f=g.userOptions,
h=g.initialType||g.type,l=d.options.plotOptions,n=c.type||f.type||d.options.chart.type,p=!(this.hasDerivedData||n&&n!==this.type||"undefined"!==typeof c.pointStart||"undefined"!==typeof c.pointInterval||g.hasOptionChanged("dataGrouping")||g.hasOptionChanged("pointStart")||g.hasOptionChanged("pointInterval")||g.hasOptionChanged("pointIntervalUnit")||g.hasOptionChanged("keys")),r=q[h].prototype,k,w=["eventOptions","navigatorSeries","baseSeries"],u=g.finishedAnimating&&{animation:!1},y={};p&&(w.push("data",
"isDirtyData","points","processedXData","processedYData","xIncrement","cropped","_hasPointMarkers","_hasPointLabels","nodes","layout","mapMap","mapData","minY","maxY","minX","maxX"),!1!==c.visible&&w.push("area","graph"),g.parallelArrays.forEach(function(a){w.push(a+"Data")}),c.data&&(c.dataSorting&&b(g.options.dataSorting,c.dataSorting),this.setData(c.data,!1)));c=T(f,u,{index:"undefined"===typeof f.index?g.index:f.index,pointStart:L(l&&l.series&&l.series.pointStart,f.pointStart,g.xData[0])},!p&&
{data:g.options.data},c);p&&c.data&&(c.data=g.options.data);w=["group","markerGroup","dataLabelsGroup","transformGroup"].concat(w);w.forEach(function(a){w[a]=g[a];delete g[a]});if(q[n||h]){if(f=n!==g.type,g.remove(!1,!1,!1,!0),f)if(Object.setPrototypeOf)Object.setPrototypeOf(g,q[n||h].prototype);else{f=Object.hasOwnProperty.call(g,"hcEvents")&&g.hcEvents;for(k in r)g[k]=void 0;b(g,q[n||h].prototype);f?g.hcEvents=f:delete g.hcEvents}}else a(17,!0,d,{missingModuleFor:n||h});w.forEach(function(a){g[a]=
w[a]});g.init(d,c);if(p&&this.points){var t=g.options;!1===t.visible?(y.graphic=1,y.dataLabel=1):g._hasPointLabels||(c=t.marker,n=t.dataLabels,c&&(!1===c.enabled||"symbol"in c)&&(y.graphic=1),n&&!1===n.enabled&&(y.dataLabel=1));this.points.forEach(function(a){a&&a.series&&(a.resolveColor(),Object.keys(y).length&&a.destroyElements(y),!1===t.showInLegend&&a.legendItem&&d.legend.destroyItem(a))},this)}g.initialType=h;d.linkSeries();J(this,"afterUpdate");L(e,!0)&&d.redraw(p?void 0:!1)};d.prototype.setName=
function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0};d.prototype.hasOptionChanged=function(a){var b=this.options[a],c=this.chart.options.plotOptions,e=this.userOptions[a];return e?b!==e:b!==L(c&&c[this.type]&&c[this.type][a],c&&c.series&&c.series[a],b)};d.prototype.onMouseOver=function(){var a=this.chart,b=a.hoverSeries;a.pointer.setHoverChartIndex();if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&J(this,"mouseOver");this.setState("hover");a.hoverSeries=
this};d.prototype.onMouseOut=function(){var a=this.options,b=this.chart,c=b.tooltip,e=b.hoverPoint;b.hoverSeries=null;if(e)e.onMouseOut();this&&a.events.mouseOut&&J(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();b.series.forEach(function(a){a.setState("",!0)})};d.prototype.setState=function(a,b){var c=this,e=c.options,g=c.graph,d=e.inactiveOtherPoints,f=e.states,h=e.lineWidth,m=e.opacity,l=L(f[a||"normal"]&&f[a||"normal"].animation,c.chart.options.chart.animation);
e=0;a=a||"";if(c.state!==a&&([c.group,c.markerGroup,c.dataLabelsGroup].forEach(function(b){b&&(c.state&&b.removeClass("highcharts-series-"+c.state),a&&b.addClass("highcharts-series-"+a))}),c.state=a,!c.chart.styledMode)){if(f[a]&&!1===f[a].enabled)return;a&&(h=f[a].lineWidth||h+(f[a].lineWidthPlus||0),m=L(f[a].opacity,m));if(g&&!g.dashstyle)for(f={"stroke-width":h},g.animate(f,l);c["zone-graph-"+e];)c["zone-graph-"+e].animate(f,l),e+=1;d||[c.group,c.markerGroup,c.dataLabelsGroup,c.labelBySeries].forEach(function(a){a&&
a.animate({opacity:m},l)})}b&&d&&c.points&&c.setAllPointsToState(a||void 0)};d.prototype.setAllPointsToState=function(a){this.points.forEach(function(b){b.setState&&b.setState(a)})};d.prototype.setVisible=function(a,b){var c=this,e=c.chart,g=c.legendItem,d=e.options.chart.ignoreHiddenSeries,f=c.visible;var h=(c.visible=a=c.options.visible=c.userOptions.visible="undefined"===typeof a?!f:a)?"show":"hide";["group","dataLabelsGroup","markerGroup","tracker","tt"].forEach(function(a){if(c[a])c[a][h]()});
if(e.hoverSeries===c||(e.hoverPoint&&e.hoverPoint.series)===c)c.onMouseOut();g&&e.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&e.series.forEach(function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});c.linkedSeries.forEach(function(b){b.setVisible(a,!1)});d&&(e.isDirtyBox=!0);J(c,h);!1!==b&&e.redraw()};d.prototype.show=function(){this.setVisible(!0)};d.prototype.hide=function(){this.setVisible(!1)};d.prototype.select=function(a){this.selected=a=this.options.selected="undefined"===
typeof a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);J(this,a?"select":"unselect")};d.defaultOptions={lineWidth:2,allowPointSelect:!1,crisp:!0,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{enabledThreshold:2,lineColor:B.backgroundColor,lineWidth:0,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:B.neutralColor20,lineColor:B.neutralColor100,lineWidth:2}}},point:{events:{}},dataLabels:{animation:{},
align:"center",defer:!0,formatter:function(){var a=this.series.chart.numberFormatter;return"number"!==typeof this.y?"":a(this.y,-1)},padding:5,style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0},cropThreshold:300,opacity:1,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}},inactive:{animation:{duration:50},opacity:.2}},
stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"};return d}();b(f.prototype,{axisTypes:["xAxis","yAxis"],coll:"series",colorCounter:0,cropShoulder:1,directTouch:!1,drawLegendSymbol:k.drawLineMarker,isCartesian:!0,kdAxisArray:["clientX","plotY"],parallelArrays:["x","y"],pointClass:G,requireSorting:!0,sorted:!0});D.series=f;"";"";return f});P(k,"Extensions/ScrollablePlotArea.js",[k["Core/Animation/AnimationUtilities.js"],k["Core/Axis/Axis.js"],k["Core/Chart/Chart.js"],k["Core/Series/Series.js"],
k["Core/Globals.js"],k["Core/Utilities.js"]],function(f,d,k,x,B,G){var D=f.stop,H=G.addEvent,t=G.createElement,C=G.merge,l=G.pick;"";H(k,"afterSetChartSize",function(d){var g=this.options.chart.scrollablePlotArea,f=g&&g.minWidth;g=g&&g.minHeight;if(!this.renderer.forExport){if(f){if(this.scrollablePixelsX=f=Math.max(0,f-this.chartWidth)){this.scrollablePlotBox=C(this.plotBox);this.plotWidth+=f;this.inverted?(this.clipBox.height+=f,this.plotBox.height+=f):(this.clipBox.width+=f,this.plotBox.width+=
f);var c={1:{name:"right",value:f}}}}else g&&(this.scrollablePixelsY=f=Math.max(0,g-this.chartHeight))&&(this.scrollablePlotBox=C(this.plotBox),this.plotHeight+=f,this.inverted?(this.clipBox.width+=f,this.plotBox.width+=f):(this.clipBox.height+=f,this.plotBox.height+=f),c={2:{name:"bottom",value:f}});c&&!d.skipAxes&&this.axes.forEach(function(g){c[g.side]?g.getPlotLinePath=function(){var d=c[g.side].name,f=this[d];this[d]=f-c[g.side].value;var l=B.Axis.prototype.getPlotLinePath.apply(this,arguments);
this[d]=f;return l}:(g.setAxisSize(),g.setAxisTranslation())})}});H(k,"render",function(){this.scrollablePixelsX||this.scrollablePixelsY?(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});k.prototype.setUpScrolling=function(){var d=this,g={WebkitOverflowScrolling:"touch",overflowX:"hidden",overflowY:"hidden"};this.scrollablePixelsX&&(g.overflowX="auto");this.scrollablePixelsY&&(g.overflowY="auto");this.scrollingParent=t("div",{className:"highcharts-scrolling-parent"},
{position:"relative"},this.renderTo);this.scrollingContainer=t("div",{className:"highcharts-scrolling"},g,this.scrollingParent);H(this.scrollingContainer,"scroll",function(){d.pointer&&delete d.pointer.chartPosition});this.innerContainer=t("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling=null};k.prototype.moveFixedElements=function(){var d=this.container,g=this.fixedRenderer,f=".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),
c;this.scrollablePixelsX&&!this.inverted?c=".highcharts-yaxis":this.scrollablePixelsX&&this.inverted?c=".highcharts-xaxis":this.scrollablePixelsY&&!this.inverted?c=".highcharts-xaxis":this.scrollablePixelsY&&this.inverted&&(c=".highcharts-yaxis");c&&f.push(c+":not(.highcharts-radial-axis)",c+"-labels:not(.highcharts-radial-axis-labels)");f.forEach(function(c){[].forEach.call(d.querySelectorAll(c),function(c){(c.namespaceURI===g.SVG_NS?g.box:g.box.parentNode).appendChild(c);c.style.pointerEvents="auto"})})};
k.prototype.applyFixed=function(){var f=this,g,k,c,q=!this.fixedDiv,n=this.options.chart,A=n.scrollablePlotArea;q?(this.fixedDiv=t("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:((null===(g=n.style)||void 0===g?void 0:g.zIndex)||0)+2,top:0},null,!0),null===(k=this.scrollingContainer)||void 0===k?void 0:k.parentNode.insertBefore(this.fixedDiv,this.scrollingContainer),this.renderTo.style.overflow="visible",this.fixedRenderer=g=new B.Renderer(this.fixedDiv,
this.chartWidth,this.chartHeight,null===(c=this.options.chart)||void 0===c?void 0:c.style),this.scrollableMask=g.path().attr({fill:this.options.chart.backgroundColor||"#fff","fill-opacity":l(A.opacity,.85),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),H(this,"afterShowResetZoom",this.moveFixedElements),H(this,"afterLayOutTitles",this.moveFixedElements),H(d,"afterInit",function(){f.scrollableDirty=!0}),H(x,"show",function(){f.scrollableDirty=!0})):this.fixedRenderer.setSize(this.chartWidth,
this.chartHeight);if(this.scrollableDirty||q)this.scrollableDirty=!1,this.moveFixedElements();c=this.chartWidth+(this.scrollablePixelsX||0);g=this.chartHeight+(this.scrollablePixelsY||0);D(this.container);this.container.style.width=c+"px";this.container.style.height=g+"px";this.renderer.boxWrapper.attr({width:c,height:g,viewBox:[0,0,c,g].join(" ")});this.chartBackground.attr({width:c,height:g});this.scrollingContainer.style.height=this.chartHeight+"px";q&&(A.scrollPositionX&&(this.scrollingContainer.scrollLeft=
this.scrollablePixelsX*A.scrollPositionX),A.scrollPositionY&&(this.scrollingContainer.scrollTop=this.scrollablePixelsY*A.scrollPositionY));g=this.axisOffset;q=this.plotTop-g[0]-1;A=this.plotLeft-g[3]-1;c=this.plotTop+this.plotHeight+g[2]+1;g=this.plotLeft+this.plotWidth+g[1]+1;k=this.plotLeft+this.plotWidth-(this.scrollablePixelsX||0);n=this.plotTop+this.plotHeight-(this.scrollablePixelsY||0);q=this.scrollablePixelsX?[["M",0,q],["L",this.plotLeft-1,q],["L",this.plotLeft-1,c],["L",0,c],["Z"],["M",
k,q],["L",this.chartWidth,q],["L",this.chartWidth,c],["L",k,c],["Z"]]:this.scrollablePixelsY?[["M",A,0],["L",A,this.plotTop-1],["L",g,this.plotTop-1],["L",g,0],["Z"],["M",A,n],["L",A,this.chartHeight],["L",g,this.chartHeight],["L",g,n],["Z"]]:[["M",0,0]];"adjustHeight"!==this.redrawTrigger&&this.scrollableMask.attr({d:q})}});P(k,"Core/Axis/StackingAxis.js",[k["Core/Animation/AnimationUtilities.js"],k["Core/Utilities.js"]],function(f,d){var k=f.getDeferredAnimation,x=d.addEvent,B=d.destroyObjectProperties,
G=d.fireEvent,D=d.objectEach,H=d.pick,t=function(){function d(d){this.oldStacks={};this.stacks={};this.stacksTouched=0;this.axis=d}d.prototype.buildStacks=function(){var d=this.axis,f=d.series,g=H(d.options.reversedStacks,!0),k=f.length,c;if(!d.isXAxis){this.usePercentage=!1;for(c=k;c--;){var q=f[g?c:k-c-1];q.setStackedPoints();q.setGroupedPoints()}for(c=0;c<k;c++)f[c].modifyStacks();G(d,"afterBuildStacks")}};d.prototype.cleanStacks=function(){if(!this.axis.isXAxis){if(this.oldStacks)var d=this.stacks=
this.oldStacks;D(d,function(d){D(d,function(g){g.cumulative=g.total})})}};d.prototype.resetStacks=function(){var d=this,f=d.stacks;d.axis.isXAxis||D(f,function(g){D(g,function(f,c){f.touched<d.stacksTouched?(f.destroy(),delete g[c]):(f.total=null,f.cumulative=null)})})};d.prototype.renderStackTotals=function(){var d=this.axis,f=d.chart,g=f.renderer,t=this.stacks;d=k(f,d.options.stackLabels.animation);var c=this.stackTotalGroup=this.stackTotalGroup||g.g("stack-labels").attr({visibility:"visible",zIndex:6,
opacity:0}).add();c.translate(f.plotLeft,f.plotTop);D(t,function(g){D(g,function(g){g.render(c)})});c.animate({opacity:1},d)};return d}();return function(){function d(){}d.compose=function(f){x(f,"init",d.onInit);x(f,"destroy",d.onDestroy)};d.onDestroy=function(){var d=this.stacking;if(d){var f=d.stacks;D(f,function(g,d){B(g);f[d]=null});d&&d.stackTotalGroup&&d.stackTotalGroup.destroy()}};d.onInit=function(){this.stacking||(this.stacking=new t(this))};return d}()});P(k,"Extensions/Stacking.js",[k["Core/Axis/Axis.js"],
k["Core/Chart/Chart.js"],k["Core/Globals.js"],k["Core/Series/Series.js"],k["Core/Axis/StackingAxis.js"],k["Core/Utilities.js"]],function(f,d,k,x,B,G){var D=G.correctFloat,H=G.defined,t=G.destroyObjectProperties,C=G.format,l=G.isArray,E=G.isNumber,g=G.pick;"";var y=function(){function c(c,g,d,f,l){var m=c.chart.inverted;this.axis=c;this.isNegative=d;this.options=g=g||{};this.x=f;this.total=null;this.points={};this.hasValidPoints=!1;this.stack=l;this.rightCliff=this.leftCliff=0;this.alignOptions={align:g.align||
(m?d?"left":"right":"center"),verticalAlign:g.verticalAlign||(m?"middle":d?"bottom":"top"),y:g.y,x:g.x};this.textAlign=g.textAlign||(m?d?"right":"left":"center")}c.prototype.destroy=function(){t(this,this.axis)};c.prototype.render=function(c){var d=this.axis.chart,f=this.options,l=f.format;l=l?C(l,this,d):f.formatter.call(this);this.label?this.label.attr({text:l,visibility:"hidden"}):(this.label=d.renderer.label(l,null,null,f.shape,null,null,f.useHTML,!1,"stack-labels"),l={r:f.borderRadius||0,text:l,
rotation:f.rotation,padding:g(f.padding,5),visibility:"hidden"},d.styledMode||(l.fill=f.backgroundColor,l.stroke=f.borderColor,l["stroke-width"]=f.borderWidth,this.label.css(f.style)),this.label.attr(l),this.label.added||this.label.add(c));this.label.labelrank=d.plotSizeY};c.prototype.setOffset=function(c,d,f,l,k){var m=this.axis,n=m.chart;l=m.translate(m.stacking.usePercentage?100:l?l:this.total,0,0,0,1);f=m.translate(f?f:0);f=H(l)&&Math.abs(l-f);c=g(k,n.xAxis[0].translate(this.x))+c;m=H(l)&&this.getStackBox(n,
this,c,l,d,f,m);d=this.label;f=this.isNegative;c="justify"===g(this.options.overflow,"justify");var e=this.textAlign;d&&m&&(k=d.getBBox(),l=d.padding,e="left"===e?n.inverted?-l:l:"right"===e?k.width:n.inverted&&"center"===e?k.width/2:n.inverted?f?k.width+l:-l:k.width/2,f=n.inverted?k.height/2:f?-l:k.height,this.alignOptions.x=g(this.options.x,0),this.alignOptions.y=g(this.options.y,0),m.x-=e,m.y-=f,d.align(this.alignOptions,null,m),n.isInsidePlot(d.alignAttr.x+e-this.alignOptions.x,d.alignAttr.y+
f-this.alignOptions.y)?d.show():(d.alignAttr.y=-9999,c=!1),c&&x.prototype.justifyDataLabel.call(this.axis,d,this.alignOptions,d.alignAttr,k,m),d.attr({x:d.alignAttr.x,y:d.alignAttr.y}),g(!c&&this.options.crop,!0)&&((n=E(d.x)&&E(d.y)&&n.isInsidePlot(d.x-l+d.width,d.y)&&n.isInsidePlot(d.x+l,d.y))||d.hide()))};c.prototype.getStackBox=function(c,g,d,f,l,m,k){var e=g.axis.reversed,h=c.inverted,a=k.height+k.pos-(h?c.plotLeft:c.plotTop);g=g.isNegative&&!e||!g.isNegative&&e;return{x:h?g?f-k.right:f-m+k.pos-
c.plotLeft:d+c.xAxis[0].transB-c.plotLeft,y:h?k.height-d-l:g?a-f-m:a-f,width:h?m:l,height:h?l:m}};return c}();d.prototype.getStacks=function(){var c=this,d=c.inverted;c.yAxis.forEach(function(c){c.stacking&&c.stacking.stacks&&c.hasVisibleSeries&&(c.stacking.oldStacks=c.stacking.stacks)});c.series.forEach(function(f){var l=f.xAxis&&f.xAxis.options||{};!f.options.stacking||!0!==f.visible&&!1!==c.options.chart.ignoreHiddenSeries||(f.stackKey=[f.type,g(f.options.stack,""),d?l.top:l.left,d?l.height:l.width].join())})};
B.compose(f);x.prototype.setGroupedPoints=function(){this.options.centerInCategory&&(this.is("column")||this.is("columnrange"))&&!this.options.stacking&&1<this.chart.series.length&&x.prototype.setStackedPoints.call(this,"group")};x.prototype.setStackedPoints=function(c){var d=c||this.options.stacking;if(d&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var f=this.processedXData,k=this.processedYData,t=[],z=k.length,m=this.options,r=m.threshold,e=g(m.startFromThreshold&&r,0);
m=m.stack;c=c?this.type+","+d:this.stackKey;var h="-"+c,a=this.negStacks,b=this.yAxis,w=b.stacking.stacks,C=b.stacking.oldStacks,E,F;b.stacking.stacksTouched+=1;for(F=0;F<z;F++){var x=f[F];var R=k[F];var Q=this.getStackIndicator(Q,x,this.index);var B=Q.key;var v=(E=a&&R<(e?0:r))?h:c;w[v]||(w[v]={});w[v][x]||(C[v]&&C[v][x]?(w[v][x]=C[v][x],w[v][x].total=null):w[v][x]=new y(b,b.options.stackLabels,E,x,m));v=w[v][x];null!==R?(v.points[B]=v.points[this.index]=[g(v.cumulative,e)],H(v.cumulative)||(v.base=
B),v.touched=b.stacking.stacksTouched,0<Q.index&&!1===this.singleStacks&&(v.points[B][0]=v.points[this.index+","+x+",0"][0])):v.points[B]=v.points[this.index]=null;"percent"===d?(E=E?c:h,a&&w[E]&&w[E][x]?(E=w[E][x],v.total=E.total=Math.max(E.total,v.total)+Math.abs(R)||0):v.total=D(v.total+(Math.abs(R)||0))):"group"===d?(l(R)&&(R=R[0]),null!==R&&(v.total=(v.total||0)+1)):v.total=D(v.total+(R||0));v.cumulative="group"===d?(v.total||1)-1:g(v.cumulative,e)+(R||0);null!==R&&(v.points[B].push(v.cumulative),
t[F]=v.cumulative,v.hasValidPoints=!0)}"percent"===d&&(b.stacking.usePercentage=!0);"group"!==d&&(this.stackedYData=t);b.stacking.oldStacks={}}};x.prototype.modifyStacks=function(){var c=this,g=c.stackKey,d=c.yAxis.stacking.stacks,f=c.processedXData,l,k=c.options.stacking;c[k+"Stacker"]&&[g,"-"+g].forEach(function(g){for(var m=f.length,e,h;m--;)if(e=f[m],l=c.getStackIndicator(l,e,c.index,g),h=(e=d[g]&&d[g][e])&&e.points[l.key])c[k+"Stacker"](h,e,m)})};x.prototype.percentStacker=function(c,g,d){g=
g.total?100/g.total:0;c[0]=D(c[0]*g);c[1]=D(c[1]*g);this.stackedYData[d]=c[1]};x.prototype.getStackIndicator=function(c,g,d,f){!H(c)||c.x!==g||f&&c.key!==f?c={x:g,index:0,key:f}:c.index++;c.key=[d,g,c.index].join();return c};k.StackItem=y;return k.StackItem});P(k,"Series/Line/LineSeries.js",[k["Core/Color/Palette.js"],k["Core/Series/Series.js"],k["Core/Series/SeriesRegistry.js"],k["Core/Utilities.js"]],function(f,d,k,x){var B=this&&this.__extends||function(){var d=function(f,k){d=Object.setPrototypeOf||
{__proto__:[]}instanceof Array&&function(d,f){d.__proto__=f}||function(d,f){for(var g in f)f.hasOwnProperty(g)&&(d[g]=f[g])};return d(f,k)};return function(f,k){function l(){this.constructor=f}d(f,k);f.prototype=null===k?Object.create(k):(l.prototype=k.prototype,new l)}}(),G=x.defined,D=x.merge;x=function(k){function t(){var d=null!==k&&k.apply(this,arguments)||this;d.data=void 0;d.options=void 0;d.points=void 0;return d}B(t,k);t.prototype.drawGraph=function(){var d=this,l=this.options,k=(this.gappedPath||
this.getGraphPath).call(this),g=this.chart.styledMode,t=[["graph","highcharts-graph"]];g||t[0].push(l.lineColor||this.color||f.neutralColor20,l.dashStyle);t=d.getZonesGraphs(t);t.forEach(function(c,f){var n=c[0],q=d[n],t=q?"animate":"attr";q?(q.endX=d.preventGraphAnimation?null:k.xMap,q.animate({d:k})):k.length&&(d[n]=q=d.chart.renderer.path(k).addClass(c[1]).attr({zIndex:1}).add(d.group));q&&!g&&(n={stroke:c[2],"stroke-width":l.lineWidth,fill:d.fillGraph&&d.color||"none"},c[3]?n.dashstyle=c[3]:"square"!==
l.linecap&&(n["stroke-linecap"]=n["stroke-linejoin"]="round"),q[t](n).shadow(2>f&&l.shadow));q&&(q.startX=k.xMap,q.isArea=k.isArea)})};t.prototype.getGraphPath=function(d,f,k){var g=this,l=g.options,c=l.step,q,n=[],t=[],E;d=d||g.points;(q=d.reversed)&&d.reverse();(c={right:1,center:2}[c]||c&&3)&&q&&(c=4-c);d=this.getValidPoints(d,!1,!(l.connectNulls&&!f&&!k));d.forEach(function(q,m){var r=q.plotX,e=q.plotY,h=d[m-1];(q.leftCliff||h&&h.rightCliff)&&!k&&(E=!0);q.isNull&&!G(f)&&0<m?E=!l.connectNulls:
q.isNull&&!f?E=!0:(0===m||E?m=[["M",q.plotX,q.plotY]]:g.getPointSpline?m=[g.getPointSpline(d,q,m)]:c?(m=1===c?[["L",h.plotX,e]]:2===c?[["L",(h.plotX+r)/2,h.plotY],["L",(h.plotX+r)/2,e]]:[["L",r,h.plotY]],m.push(["L",r,e])):m=[["L",r,e]],t.push(q.x),c&&(t.push(q.x),2===c&&t.push(q.x)),n.push.apply(n,m),E=!1)});n.xMap=t;return g.graphPath=n};t.prototype.getZonesGraphs=function(d){this.zones.forEach(function(f,k){k=["zone-graph-"+k,"highcharts-graph highcharts-zone-graph-"+k+" "+(f.className||"")];this.chart.styledMode||
k.push(f.color||this.color,f.dashStyle||this.options.dashStyle);d.push(k)},this);return d};t.defaultOptions=D(d.defaultOptions,{});return t}(d);k.registerSeriesType("line",x);"";return x});P(k,"Series/Area/AreaSeries.js",[k["Core/Color/Color.js"],k["Mixins/LegendSymbol.js"],k["Core/Series/SeriesRegistry.js"],k["Core/Utilities.js"]],function(f,d,k,x){var B=this&&this.__extends||function(){var d=function(f,g){d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,c){g.__proto__=c}||function(g,
c){for(var d in c)c.hasOwnProperty(d)&&(g[d]=c[d])};return d(f,g)};return function(f,g){function l(){this.constructor=f}d(f,g);f.prototype=null===g?Object.create(g):(l.prototype=g.prototype,new l)}}(),G=f.parse,D=k.seriesTypes.line;f=x.extend;var H=x.merge,t=x.objectEach,C=x.pick;x=function(d){function f(){var g=null!==d&&d.apply(this,arguments)||this;g.data=void 0;g.options=void 0;g.points=void 0;return g}B(f,d);f.prototype.drawGraph=function(){this.areaPath=[];d.prototype.drawGraph.apply(this);
var g=this,f=this.areaPath,c=this.options,l=[["area","highcharts-area",this.color,c.fillColor]];this.zones.forEach(function(d,f){l.push(["zone-area-"+f,"highcharts-area highcharts-zone-area-"+f+" "+d.className,d.color||g.color,d.fillColor||c.fillColor])});l.forEach(function(d){var l=d[0],n=g[l],k=n?"animate":"attr",m={};n?(n.endX=g.preventGraphAnimation?null:f.xMap,n.animate({d:f})):(m.zIndex=0,n=g[l]=g.chart.renderer.path(f).addClass(d[1]).add(g.group),n.isArea=!0);g.chart.styledMode||(m.fill=C(d[3],
G(d[2]).setOpacity(C(c.fillOpacity,.75)).get()));n[k](m);n.startX=f.xMap;n.shiftUnit=c.step?2:1})};f.prototype.getGraphPath=function(g){var d=D.prototype.getGraphPath,c=this.options,f=c.stacking,l=this.yAxis,k,t=[],z=[],m=this.index,r=l.stacking.stacks[this.stackKey],e=c.threshold,h=Math.round(l.getThreshold(c.threshold));c=C(c.connectNulls,"percent"===f);var a=function(a,b,c){var d=g[a];a=f&&r[d.x].points[m];var k=d[c+"Null"]||0;c=d[c+"Cliff"]||0;d=!0;if(c||k){var n=(k?a[0]:a[1])+c;var q=a[0]+c;
d=!!k}else!f&&g[b]&&g[b].isNull&&(n=q=e);"undefined"!==typeof n&&(z.push({plotX:w,plotY:null===n?h:l.getThreshold(n),isNull:d,isCliff:!0}),t.push({plotX:w,plotY:null===q?h:l.getThreshold(q),doCurve:!1}))};g=g||this.points;f&&(g=this.getStackPoints(g));for(k=0;k<g.length;k++){f||(g[k].leftCliff=g[k].rightCliff=g[k].leftNull=g[k].rightNull=void 0);var b=g[k].isNull;var w=C(g[k].rectPlotX,g[k].plotX);var E=f?C(g[k].yBottom,h):h;if(!b||c)c||a(k,k-1,"left"),b&&!f&&c||(z.push(g[k]),t.push({x:k,plotX:w,
plotY:E})),c||a(k,k+1,"right")}k=d.call(this,z,!0,!0);t.reversed=!0;b=d.call(this,t,!0,!0);(E=b[0])&&"M"===E[0]&&(b[0]=["L",E[1],E[2]]);b=k.concat(b);d=d.call(this,z,!1,c);b.xMap=k.xMap;this.areaPath=b;return d};f.prototype.getStackPoints=function(d){var g=[],c=[],f=this.xAxis,l=this.yAxis,k=l.stacking.stacks[this.stackKey],E={},z=this.index,m=l.series,r=m.length,e=C(l.options.reversedStacks,!0)?1:-1,h;d=d||this.points;if(this.options.stacking){for(h=0;h<d.length;h++)d[h].leftNull=d[h].rightNull=
void 0,E[d[h].x]=d[h];t(k,function(a,e){null!==a.total&&c.push(e)});c.sort(function(a,c){return a-c});var a=m.map(function(a){return a.visible});c.forEach(function(b,d){var m=0,n,q;if(E[b]&&!E[b].isNull)g.push(E[b]),[-1,1].forEach(function(g){var f=1===g?"rightNull":"leftNull",m=0,l=k[c[d+g]];if(l)for(h=z;0<=h&&h<r;)n=l.points[h],n||(h===z?E[b][f]=!0:a[h]&&(q=k[b].points[h])&&(m-=q[1]-q[0])),h+=e;E[b][1===g?"rightCliff":"leftCliff"]=m});else{for(h=z;0<=h&&h<r;){if(n=k[b].points[h]){m=n[1];break}h+=
e}m=l.translate(m,0,1,0,1);g.push({isNull:!0,plotX:f.translate(b,0,0,0,1),x:b,plotY:m,yBottom:m})}})}return g};f.defaultOptions=H(D.defaultOptions,{threshold:0});return f}(D);f(x.prototype,{singleStacks:!1,drawLegendSymbol:d.drawRectangle});k.registerSeriesType("area",x);"";return x});P(k,"Series/Spline/SplineSeries.js",[k["Core/Series/SeriesRegistry.js"],k["Core/Utilities.js"]],function(f,d){var k=this&&this.__extends||function(){var d=function(f,k){d=Object.setPrototypeOf||{__proto__:[]}instanceof
Array&&function(d,f){d.__proto__=f}||function(d,f){for(var l in f)f.hasOwnProperty(l)&&(d[l]=f[l])};return d(f,k)};return function(f,k){function t(){this.constructor=f}d(f,k);f.prototype=null===k?Object.create(k):(t.prototype=k.prototype,new t)}}(),x=f.seriesTypes.line,B=d.merge,G=d.pick;d=function(d){function f(){var f=null!==d&&d.apply(this,arguments)||this;f.data=void 0;f.options=void 0;f.points=void 0;return f}k(f,d);f.prototype.getPointSpline=function(d,f,l){var k=f.plotX||0,g=f.plotY||0,t=d[l-
1];l=d[l+1];if(t&&!t.isNull&&!1!==t.doCurve&&!f.isCliff&&l&&!l.isNull&&!1!==l.doCurve&&!f.isCliff){d=t.plotY||0;var c=l.plotX||0;l=l.plotY||0;var q=0;var n=(1.5*k+(t.plotX||0))/2.5;var x=(1.5*g+d)/2.5;c=(1.5*k+c)/2.5;var C=(1.5*g+l)/2.5;c!==n&&(q=(C-x)*(c-k)/(c-n)+g-C);x+=q;C+=q;x>d&&x>g?(x=Math.max(d,g),C=2*g-x):x<d&&x<g&&(x=Math.min(d,g),C=2*g-x);C>l&&C>g?(C=Math.max(l,g),x=2*g-C):C<l&&C<g&&(C=Math.min(l,g),x=2*g-C);f.rightContX=c;f.rightContY=C}f=["C",G(t.rightContX,t.plotX,0),G(t.rightContY,t.plotY,
0),G(n,k,0),G(x,g,0),k,g];t.rightContX=t.rightContY=void 0;return f};f.defaultOptions=B(x.defaultOptions);return f}(x);f.registerSeriesType("spline",d);"";return d});P(k,"Series/AreaSpline/AreaSplineSeries.js",[k["Series/Area/AreaSeries.js"],k["Series/Spline/SplineSeries.js"],k["Mixins/LegendSymbol.js"],k["Core/Series/SeriesRegistry.js"],k["Core/Utilities.js"]],function(f,d,k,x,B){var G=this&&this.__extends||function(){var d=function(f,k){d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,
f){d.__proto__=f}||function(d,f){for(var c in f)f.hasOwnProperty(c)&&(d[c]=f[c])};return d(f,k)};return function(f,k){function g(){this.constructor=f}d(f,k);f.prototype=null===k?Object.create(k):(g.prototype=k.prototype,new g)}}(),D=f.prototype,H=B.extend,t=B.merge;B=function(k){function l(){var d=null!==k&&k.apply(this,arguments)||this;d.data=void 0;d.points=void 0;d.options=void 0;return d}G(l,k);l.defaultOptions=t(d.defaultOptions,f.defaultOptions);return l}(d);H(B.prototype,{getGraphPath:D.getGraphPath,
getStackPoints:D.getStackPoints,drawGraph:D.drawGraph,drawLegendSymbol:k.drawRectangle});x.registerSeriesType("areaspline",B);"";return B});P(k,"Series/Column/ColumnSeries.js",[k["Core/Animation/AnimationUtilities.js"],k["Core/Color/Color.js"],k["Core/Globals.js"],k["Mixins/LegendSymbol.js"],k["Core/Color/Palette.js"],k["Core/Series/Series.js"],k["Core/Series/SeriesRegistry.js"],k["Core/Utilities.js"]],function(f,d,k,x,B,G,D,H){var t=this&&this.__extends||function(){var c=function(e,a){c=Object.setPrototypeOf||
{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return c(e,a)};return function(e,a){function b(){this.constructor=e}c(e,a);e.prototype=null===a?Object.create(a):(b.prototype=a.prototype,new b)}}(),C=f.animObject,l=d.parse,E=k.hasTouch;f=k.noop;var g=H.clamp,y=H.css,c=H.defined,q=H.extend,n=H.fireEvent,A=H.isArray,M=H.isNumber,z=H.merge,m=H.pick,r=H.objectEach;H=function(e){function d(){var a=null!==e&&e.apply(this,arguments)||
this;a.borderWidth=void 0;a.data=void 0;a.group=void 0;a.options=void 0;a.points=void 0;return a}t(d,e);d.prototype.animate=function(a){var b=this,c=this.yAxis,e=b.options,d=this.chart.inverted,f={},h=d?"translateX":"translateY";if(a)f.scaleY=.001,a=g(c.toPixels(e.threshold),c.pos,c.pos+c.len),d?f.translateX=a-c.len:f.translateY=a,b.clipBox&&b.setClip(),b.group.attr(f);else{var m=b.group.attr(h);b.group.animate({scaleY:1},q(C(b.options.animation),{step:function(a,e){b.group&&(f[h]=m+e.pos*(c.pos-
m),b.group.attr(f))}}))}};d.prototype.init=function(a,b){e.prototype.init.apply(this,arguments);var c=this;a=c.chart;a.hasRendered&&a.series.forEach(function(a){a.type===c.type&&(a.isDirty=!0)})};d.prototype.getColumnMetrics=function(){var a=this,b=a.options,c=a.xAxis,e=a.yAxis,d=c.options.reversedStacks;d=c.reversed&&!d||!c.reversed&&d;var g,f={},h=0;!1===b.grouping?h=1:a.chart.series.forEach(function(b){var c=b.yAxis,d=b.options;if(b.type===a.type&&(b.visible||!a.chart.options.chart.ignoreHiddenSeries)&&
e.len===c.len&&e.pos===c.pos){if(d.stacking&&"group"!==d.stacking){g=b.stackKey;"undefined"===typeof f[g]&&(f[g]=h++);var m=f[g]}else!1!==d.grouping&&(m=h++);b.columnIndex=m}});var l=Math.min(Math.abs(c.transA)*(c.ordinal&&c.ordinal.slope||b.pointRange||c.closestPointRange||c.tickInterval||1),c.len),k=l*b.groupPadding,n=(l-2*k)/(h||1);b=Math.min(b.maxPointWidth||c.len,m(b.pointWidth,n*(1-2*b.pointPadding)));a.columnMetrics={width:b,offset:(n-b)/2+(k+((a.columnIndex||0)+(d?1:0))*n-l/2)*(d?-1:1),paddedWidth:n,
columnCount:h};return a.columnMetrics};d.prototype.crispCol=function(a,b,c,e){var d=this.chart,g=this.borderWidth,f=-(g%2?.5:0);g=g%2?.5:1;d.inverted&&d.renderer.isVML&&(g+=1);this.options.crisp&&(c=Math.round(a+c)+f,a=Math.round(a)+f,c-=a);e=Math.round(b+e)+g;f=.5>=Math.abs(b)&&.5<e;b=Math.round(b)+g;e-=b;f&&e&&(--b,e+=1);return{x:a,y:b,width:c,height:e}};d.prototype.adjustForMissingColumns=function(a,b,c,e){var d=this,g=this.options.stacking;if(!c.isNull&&1<e.columnCount){var f=0,h=0;r(this.yAxis.stacking&&
this.yAxis.stacking.stacks,function(a){if("number"===typeof c.x&&(a=a[c.x.toString()])){var b=a.points[d.index],e=a.total;g?(b&&(f=h),a.hasValidPoints&&h++):A(b)&&(f=b[1],h=e||0)}});a=(c.plotX||0)+((h-1)*e.paddedWidth+b)/2-b-f*e.paddedWidth}return a};d.prototype.translate=function(){var a=this,b=a.chart,e=a.options,d=a.dense=2>a.closestPointRange*a.xAxis.transA;d=a.borderWidth=m(e.borderWidth,d?0:1);var f=a.xAxis,h=a.yAxis,l=e.threshold,k=a.translatedThreshold=h.getThreshold(l),n=m(e.minPointLength,
5),q=a.getColumnMetrics(),r=q.width,t=a.barW=Math.max(r,1+2*d),p=a.pointXOffset=q.offset,y=a.dataMin,z=a.dataMax;b.inverted&&(k-=.5);e.pointPadding&&(t=Math.ceil(t));G.prototype.translate.apply(a);a.points.forEach(function(d){var w=m(d.yBottom,k),v=999+Math.abs(w),F=r,x=d.plotX||0;v=g(d.plotY,-v,h.len+v);var E=x+p,C=t,A=Math.min(v,w),B=Math.max(v,w)-A;if(n&&Math.abs(B)<n){B=n;var H=!h.reversed&&!d.negative||h.reversed&&d.negative;M(l)&&M(z)&&d.y===l&&z<=l&&(h.min||0)<l&&(y!==z||(h.max||0)<=l)&&(H=
!H);A=Math.abs(A-k)>n?w-n:k-(H?n:0)}c(d.options.pointWidth)&&(F=C=Math.ceil(d.options.pointWidth),E-=Math.round((F-r)/2));e.centerInCategory&&(E=a.adjustForMissingColumns(E,F,d,q));d.barX=E;d.pointWidth=F;d.tooltipPos=b.inverted?[g(h.len+h.pos-b.plotLeft-v,h.pos-b.plotLeft,h.len+h.pos-b.plotLeft),f.len+f.pos-b.plotTop-(x||0)-p-C/2,B]:[f.left-b.plotLeft+E+C/2,g(v+h.pos-b.plotTop,h.pos-b.plotTop,h.len+h.pos-b.plotTop),B];d.shapeType=a.pointClass.prototype.shapeType||"rect";d.shapeArgs=a.crispCol.apply(a,
d.isNull?[E,k,C,0]:[E,A,C,B])})};d.prototype.drawGraph=function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")};d.prototype.pointAttribs=function(a,b){var c=this.options,e=this.pointAttrToOptions||{};var d=e.stroke||"borderColor";var g=e["stroke-width"]||"borderWidth",f=a&&a.color||this.color,h=a&&a[d]||c[d]||this.color||f,k=a&&a[g]||c[g]||this[g]||0;e=a&&a.options.dashStyle||c.dashStyle;var n=m(a&&a.opacity,c.opacity,1);if(a&&this.zones.length){var q=a.getZone();f=a.options.color||
q&&(q.color||a.nonZonedColor)||this.color;q&&(h=q.borderColor||h,e=q.dashStyle||e,k=q.borderWidth||k)}b&&a&&(a=z(c.states[b],a.options.states&&a.options.states[b]||{}),b=a.brightness,f=a.color||"undefined"!==typeof b&&l(f).brighten(a.brightness).get()||f,h=a[d]||h,k=a[g]||k,e=a.dashStyle||e,n=m(a.opacity,n));d={fill:f,stroke:h,"stroke-width":k,opacity:n};e&&(d.dashstyle=e);return d};d.prototype.drawPoints=function(){var a=this,b=this.chart,c=a.options,e=b.renderer,d=c.animationLimit||250,g;a.points.forEach(function(f){var h=
f.graphic,m=!!h,l=h&&b.pointCount<d?"animate":"attr";if(M(f.plotY)&&null!==f.y){g=f.shapeArgs;h&&f.hasNewShapeType()&&(h=h.destroy());a.enabledDataSorting&&(f.startXPos=a.xAxis.reversed?-(g?g.width:0):a.xAxis.width);h||(f.graphic=h=e[f.shapeType](g).add(f.group||a.group))&&a.enabledDataSorting&&b.hasRendered&&b.pointCount<d&&(h.attr({x:f.startXPos}),m=!0,l="animate");if(h&&m)h[l](z(g));if(c.borderRadius)h[l]({r:c.borderRadius});b.styledMode||h[l](a.pointAttribs(f,f.selected&&"select")).shadow(!1!==
f.allowShadow&&c.shadow,null,c.stacking&&!c.borderRadius);h&&(h.addClass(f.getClassName(),!0),h.attr({visibility:f.visible?"inherit":"hidden"}))}else h&&(f.graphic=h.destroy())})};d.prototype.drawTracker=function(){var a=this,b=a.chart,c=b.pointer,e=function(a){var b=c.getPointFromEvent(a);"undefined"!==typeof b&&(c.isDirectTouch=!0,b.onMouseOver(a))},d;a.points.forEach(function(a){d=A(a.dataLabels)?a.dataLabels:a.dataLabel?[a.dataLabel]:[];a.graphic&&(a.graphic.element.point=a);d.forEach(function(b){b.div?
b.div.point=a:b.element.point=a})});a._hasTracking||(a.trackerGroups.forEach(function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",e).on("mouseout",function(a){c.onTrackerMouseOut(a)});if(E)a[d].on("touchstart",e);!b.styledMode&&a.options.cursor&&a[d].css(y).css({cursor:a.options.cursor})}}),a._hasTracking=!0);n(this,"afterDrawTracker")};d.prototype.remove=function(){var a=this,b=a.chart;b.hasRendered&&b.series.forEach(function(b){b.type===a.type&&(b.isDirty=!0)});G.prototype.remove.apply(a,
arguments)};d.defaultOptions=z(G.defaultOptions,{borderRadius:0,centerInCategory:!1,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:B.neutralColor20,borderColor:B.neutralColor100}},dataLabels:{align:void 0,verticalAlign:void 0,y:void 0},startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:B.backgroundColor});return d}(G);q(H.prototype,{cropShoulder:0,directTouch:!0,drawLegendSymbol:x.drawRectangle,
getSymbol:f,negStacks:!0,trackerGroups:["group","dataLabelsGroup"]});D.registerSeriesType("column",H);"";"";return H});P(k,"Series/Bar/BarSeries.js",[k["Series/Column/ColumnSeries.js"],k["Core/Series/SeriesRegistry.js"],k["Core/Utilities.js"]],function(f,d,k){var x=this&&this.__extends||function(){var d=function(f,k){d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,f){d.__proto__=f}||function(d,f){for(var l in f)f.hasOwnProperty(l)&&(d[l]=f[l])};return d(f,k)};return function(f,
k){function t(){this.constructor=f}d(f,k);f.prototype=null===k?Object.create(k):(t.prototype=k.prototype,new t)}}(),B=k.extend,G=k.merge;k=function(d){function k(){var f=null!==d&&d.apply(this,arguments)||this;f.data=void 0;f.options=void 0;f.points=void 0;return f}x(k,d);k.defaultOptions=G(f.defaultOptions,{});return k}(f);B(k.prototype,{inverted:!0});d.registerSeriesType("bar",k);"";return k});P(k,"Series/Scatter/ScatterSeries.js",[k["Series/Column/ColumnSeries.js"],k["Series/Line/LineSeries.js"],
k["Core/Series/SeriesRegistry.js"],k["Core/Utilities.js"]],function(f,d,k,x){var B=this&&this.__extends||function(){var d=function(f,l){d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,g){d.__proto__=g}||function(d,g){for(var f in g)g.hasOwnProperty(f)&&(d[f]=g[f])};return d(f,l)};return function(f,l){function k(){this.constructor=f}d(f,l);f.prototype=null===l?Object.create(l):(k.prototype=l.prototype,new k)}}(),G=x.addEvent,D=x.extend,H=x.merge;x=function(f){function k(){var d=
null!==f&&f.apply(this,arguments)||this;d.data=void 0;d.options=void 0;d.points=void 0;return d}B(k,f);k.prototype.applyJitter=function(){var d=this,f=this.options.jitter,g=this.points.length;f&&this.points.forEach(function(l,c){["x","y"].forEach(function(k,n){var q="plot"+k.toUpperCase();if(f[k]&&!l.isNull){var t=d[k+"Axis"];var z=f[k]*t.transA;if(t&&!t.isLog){var m=Math.max(0,l[q]-z);t=Math.min(t.len,l[q]+z);n=1E4*Math.sin(c+n*g);l[q]=m+(t-m)*(n-Math.floor(n));"x"===k&&(l.clientX=l.plotX)}}})})};
k.prototype.drawGraph=function(){(this.options.lineWidth||0===this.options.lineWidth&&this.graph&&this.graph.strokeWidth())&&f.prototype.drawGraph.call(this)};k.defaultOptions=H(d.defaultOptions,{lineWidth:0,findNearestPointBy:"xy",jitter:{x:0,y:0},marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}});return k}(d);D(x.prototype,{drawTracker:f.prototype.drawTracker,
sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1});G(x,"afterTranslate",function(){this.applyJitter()});k.registerSeriesType("scatter",x);"";return x});P(k,"Mixins/CenteredSeries.js",[k["Core/Globals.js"],k["Core/Series/Series.js"],k["Core/Utilities.js"]],function(f,d,k){var x=k.isNumber,B=k.pick,G=k.relativeLength,D=f.deg2rad;return f.CenteredSeriesMixin={getCenter:function(){var f=this.options,k=this.chart,x=2*(f.slicedOffset||
0),l=k.plotWidth-2*x,E=k.plotHeight-2*x,g=f.center,y=Math.min(l,E),c=f.size,q=f.innerSize||0;"string"===typeof c&&(c=parseFloat(c));"string"===typeof q&&(q=parseFloat(q));f=[B(g[0],"50%"),B(g[1],"50%"),B(c&&0>c?void 0:f.size,"100%"),B(q&&0>q?void 0:f.innerSize||0,"0%")];!k.angular||this instanceof d||(f[3]=0);for(g=0;4>g;++g)c=f[g],k=2>g||2===g&&/%$/.test(c),f[g]=G(c,[l,E,y,f[2]][g])+(k?x:0);f[3]>f[2]&&(f[3]=f[2]);return f},getStartAndEndRadians:function(d,f){d=x(d)?d:0;f=x(f)&&f>d&&360>f-d?f:d+360;
return{start:D*(d+-90),end:D*(f+-90)}}}});P(k,"Series/Pie/PiePoint.js",[k["Core/Animation/AnimationUtilities.js"],k["Core/Series/Point.js"],k["Core/Utilities.js"]],function(f,d,k){var x=this&&this.__extends||function(){var d=function(f,g){d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,c){d.__proto__=c}||function(d,c){for(var g in c)c.hasOwnProperty(g)&&(d[g]=c[g])};return d(f,g)};return function(f,g){function l(){this.constructor=f}d(f,g);f.prototype=null===g?Object.create(g):
(l.prototype=g.prototype,new l)}}(),B=f.setAnimation,G=k.addEvent,D=k.defined;f=k.extend;var H=k.isNumber,t=k.pick,C=k.relativeLength;k=function(f){function l(){var d=null!==f&&f.apply(this,arguments)||this;d.labelDistance=void 0;d.options=void 0;d.series=void 0;return d}x(l,f);l.prototype.getConnectorPath=function(){var d=this.labelPosition,f=this.series.options.dataLabels,c=f.connectorShape,l=this.connectorShapes;l[c]&&(c=l[c]);return c.call(this,{x:d.final.x,y:d.final.y,alignment:d.alignment},
d.connectorPosition,f)};l.prototype.getTranslate=function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}};l.prototype.haloPath=function(d){var f=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(f.x,f.y,f.r+d,f.r+d,{innerR:f.r-1,start:f.start,end:f.end})};l.prototype.init=function(){d.prototype.init.apply(this,arguments);var f=this;f.name=t(f.name,"Slice");var l=function(c){f.slice("select"===c.type)};G(f,"select",l);G(f,"unselect",
l);return f};l.prototype.isValid=function(){return H(this.y)&&0<=this.y};l.prototype.setVisible=function(d,f){var c=this,g=c.series,l=g.chart,k=g.options.ignoreHiddenPoint;f=t(f,k);d!==c.visible&&(c.visible=c.options.visible=d="undefined"===typeof d?!c.visible:d,g.options.data[g.data.indexOf(c)]=c.options,["graphic","dataLabel","connector","shadowGroup"].forEach(function(f){if(c[f])c[f][d?"show":"hide"](d)}),c.legendItem&&l.legend.colorizeItem(c,d),d||"hover"!==c.state||c.setState(""),k&&(g.isDirty=
!0),f&&l.redraw())};l.prototype.slice=function(d,f,c){var g=this.series;B(c,g.chart);t(f,!0);this.sliced=this.options.sliced=D(d)?d:!this.sliced;g.options.data[g.data.indexOf(this)]=this.options;this.graphic&&this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())};return l}(d);f(k.prototype,{connectorShapes:{fixedOffset:function(d,f,g){var l=f.breakAt;f=f.touchingSliceAt;return[["M",d.x,d.y],g.softConnector?["C",d.x+("left"===d.alignment?-5:5),d.y,
2*l.x-f.x,2*l.y-f.y,l.x,l.y]:["L",l.x,l.y],["L",f.x,f.y]]},straight:function(d,f){f=f.touchingSliceAt;return[["M",d.x,d.y],["L",f.x,f.y]]},crookedLine:function(d,f,g){f=f.touchingSliceAt;var l=this.series,c=l.center[0],k=l.chart.plotWidth,n=l.chart.plotLeft;l=d.alignment;var t=this.shapeArgs.r;g=C(g.crookDistance,1);k="left"===l?c+t+(k+n-c-t)*(1-g):n+(c-t)*g;g=["L",k,d.y];c=!0;if("left"===l?k>d.x||k<f.x:k<d.x||k>f.x)c=!1;d=[["M",d.x,d.y]];c&&d.push(g);d.push(["L",f.x,f.y]);return d}}});return k});
P(k,"Series/Pie/PieSeries.js",[k["Mixins/CenteredSeries.js"],k["Series/Column/ColumnSeries.js"],k["Core/Globals.js"],k["Mixins/LegendSymbol.js"],k["Core/Color/Palette.js"],k["Series/Pie/PiePoint.js"],k["Core/Series/Series.js"],k["Core/Series/SeriesRegistry.js"],k["Core/Renderer/SVG/SVGRenderer.js"],k["Core/Utilities.js"]],function(f,d,k,x,B,G,D,H,t,C){var l=this&&this.__extends||function(){var c=function(d,f){c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,e){c.__proto__=e}||function(c,
e){for(var d in e)e.hasOwnProperty(d)&&(c[d]=e[d])};return c(d,f)};return function(d,f){function g(){this.constructor=d}c(d,f);d.prototype=null===f?Object.create(f):(g.prototype=f.prototype,new g)}}(),E=f.getStartAndEndRadians;k=k.noop;var g=C.clamp,y=C.extend,c=C.fireEvent,q=C.merge,n=C.pick,A=C.relativeLength;C=function(d){function f(){var c=null!==d&&d.apply(this,arguments)||this;c.center=void 0;c.data=void 0;c.maxLabelDistance=void 0;c.options=void 0;c.points=void 0;return c}l(f,d);f.prototype.animate=
function(c){var d=this,e=d.points,f=d.startAngleRad;c||e.forEach(function(a){var b=a.graphic,c=a.shapeArgs;b&&c&&(b.attr({r:n(a.startR,d.center&&d.center[3]/2),start:f,end:f}),b.animate({r:c.r,start:c.start,end:c.end},d.options.animation))})};f.prototype.drawEmpty=function(){var c=this.startAngleRad,d=this.endAngleRad,e=this.options;if(0===this.total&&this.center){var f=this.center[0];var a=this.center[1];this.graph||(this.graph=this.chart.renderer.arc(f,a,this.center[1]/2,0,c,d).addClass("highcharts-empty-series").add(this.group));
this.graph.attr({d:t.prototype.symbols.arc(f,a,this.center[2]/2,0,{start:c,end:d,innerR:this.center[3]/2})});this.chart.styledMode||this.graph.attr({"stroke-width":e.borderWidth,fill:e.fillColor||"none",stroke:e.color||B.neutralColor20})}else this.graph&&(this.graph=this.graph.destroy())};f.prototype.drawPoints=function(){var c=this.chart.renderer;this.points.forEach(function(d){d.graphic&&d.hasNewShapeType()&&(d.graphic=d.graphic.destroy());d.graphic||(d.graphic=c[d.shapeType](d.shapeArgs).add(d.series.group),
d.delayedRendering=!0)})};f.prototype.generatePoints=function(){d.prototype.generatePoints.call(this);this.updateTotals()};f.prototype.getX=function(c,d,e){var f=this.center,a=this.radii?this.radii[e.index]||0:f[2]/2;c=Math.asin(g((c-f[1])/(a+e.labelDistance),-1,1));return f[0]+(d?-1:1)*Math.cos(c)*(a+e.labelDistance)+(0<e.labelDistance?(d?-1:1)*this.options.dataLabels.padding:0)};f.prototype.hasData=function(){return!!this.processedXData.length};f.prototype.redrawPoints=function(){var c=this,d=c.chart,
e=d.renderer,f,a,b,g,l=c.options.shadow;this.drawEmpty();!l||c.shadowGroup||d.styledMode||(c.shadowGroup=e.g("shadow").attr({zIndex:-1}).add(c.group));c.points.forEach(function(h){var m={};a=h.graphic;if(!h.isNull&&a){g=h.shapeArgs;f=h.getTranslate();if(!d.styledMode){var k=h.shadowGroup;l&&!k&&(k=h.shadowGroup=e.g("shadow").add(c.shadowGroup));k&&k.attr(f);b=c.pointAttribs(h,h.selected&&"select")}h.delayedRendering?(a.setRadialReference(c.center).attr(g).attr(f),d.styledMode||a.attr(b).attr({"stroke-linejoin":"round"}).shadow(l,
k),h.delayedRendering=!1):(a.setRadialReference(c.center),d.styledMode||q(!0,m,b),q(!0,m,g,f),a.animate(m));a.attr({visibility:h.visible?"inherit":"hidden"});a.addClass(h.getClassName(),!0)}else a&&(h.graphic=a.destroy())})};f.prototype.sortByAngle=function(c,d){c.sort(function(c,f){return"undefined"!==typeof c.angle&&(f.angle-c.angle)*d})};f.prototype.translate=function(d){this.generatePoints();var f=0,e=this.options,g=e.slicedOffset,a=g+(e.borderWidth||0),b=E(e.startAngle,e.endAngle),m=this.startAngleRad=
b.start;b=(this.endAngleRad=b.end)-m;var l=this.points,k=e.dataLabels.distance;e=e.ignoreHiddenPoint;var q,t=l.length;d||(this.center=d=this.getCenter());for(q=0;q<t;q++){var z=l[q];var x=m+f*b;!z.isValid()||e&&!z.visible||(f+=z.percentage/100);var y=m+f*b;z.shapeType="arc";z.shapeArgs={x:d[0],y:d[1],r:d[2]/2,innerR:d[3]/2,start:Math.round(1E3*x)/1E3,end:Math.round(1E3*y)/1E3};z.labelDistance=n(z.options.dataLabels&&z.options.dataLabels.distance,k);z.labelDistance=A(z.labelDistance,z.shapeArgs.r);
this.maxLabelDistance=Math.max(this.maxLabelDistance||0,z.labelDistance);y=(y+x)/2;y>1.5*Math.PI?y-=2*Math.PI:y<-Math.PI/2&&(y+=2*Math.PI);z.slicedTranslation={translateX:Math.round(Math.cos(y)*g),translateY:Math.round(Math.sin(y)*g)};var v=Math.cos(y)*d[2]/2;var C=Math.sin(y)*d[2]/2;z.tooltipPos=[d[0]+.7*v,d[1]+.7*C];z.half=y<-Math.PI/2||y>Math.PI/2?1:0;z.angle=y;x=Math.min(a,z.labelDistance/5);z.labelPosition={natural:{x:d[0]+v+Math.cos(y)*z.labelDistance,y:d[1]+C+Math.sin(y)*z.labelDistance},"final":{},
alignment:0>z.labelDistance?"center":z.half?"right":"left",connectorPosition:{breakAt:{x:d[0]+v+Math.cos(y)*x,y:d[1]+C+Math.sin(y)*x},touchingSliceAt:{x:d[0]+v,y:d[1]+C}}}}c(this,"afterTranslate")};f.prototype.updateTotals=function(){var c,d=0,e=this.points,f=e.length,a=this.options.ignoreHiddenPoint;for(c=0;c<f;c++){var b=e[c];!b.isValid()||a&&!b.visible||(d+=b.y)}this.total=d;for(c=0;c<f;c++)b=e[c],b.percentage=0<d&&(b.visible||!a)?b.y/d*100:0,b.total=d};f.defaultOptions=q(D.defaultOptions,{center:[null,
null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,connectorPadding:5,connectorShape:"fixedOffset",crookDistance:"70%",distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},softConnector:!0,x:0},fillColor:void 0,ignoreHiddenPoint:!0,inactiveOtherPoints:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:B.backgroundColor,borderWidth:1,lineWidth:void 0,states:{hover:{brightness:.1}}});
return f}(D);y(C.prototype,{axisTypes:[],directTouch:!0,drawGraph:null,drawLegendSymbol:x.drawRectangle,drawTracker:d.prototype.drawTracker,getCenter:f.getCenter,getSymbol:k,isCartesian:!1,noSharedTooltip:!0,pointAttribs:d.prototype.pointAttribs,pointClass:G,requireSorting:!1,searchPoint:k,trackerGroups:["group","dataLabelsGroup"]});H.registerSeriesType("pie",C);"";return C});P(k,"Core/Series/DataLabels.js",[k["Core/Animation/AnimationUtilities.js"],k["Core/Globals.js"],k["Core/Color/Palette.js"],
k["Core/Series/Series.js"],k["Core/Series/SeriesRegistry.js"],k["Core/Utilities.js"]],function(f,d,k,x,B,G){var D=f.getDeferredAnimation;f=d.noop;B=B.seriesTypes;var H=G.arrayMax,t=G.clamp,C=G.defined,l=G.extend,E=G.fireEvent,g=G.format,y=G.isArray,c=G.merge,q=G.objectEach,n=G.pick,A=G.relativeLength,M=G.splat,z=G.stableSort;"";d.distribute=function(c,f,e){function g(a,b){return a.target-b.target}var a,b=!0,m=c,l=[];var k=0;var q=m.reducedLen||f;for(a=c.length;a--;)k+=c[a].size;if(k>q){z(c,function(a,
b){return(b.rank||0)-(a.rank||0)});for(k=a=0;k<=q;)k+=c[a].size,a++;l=c.splice(a-1,c.length)}z(c,g);for(c=c.map(function(a){return{size:a.size,targets:[a.target],align:n(a.align,.5)}});b;){for(a=c.length;a--;)b=c[a],k=(Math.min.apply(0,b.targets)+Math.max.apply(0,b.targets))/2,b.pos=t(k-b.size*b.align,0,f-b.size);a=c.length;for(b=!1;a--;)0<a&&c[a-1].pos+c[a-1].size>c[a].pos&&(c[a-1].size+=c[a].size,c[a-1].targets=c[a-1].targets.concat(c[a].targets),c[a-1].align=.5,c[a-1].pos+c[a-1].size>f&&(c[a-1].pos=
f-c[a-1].size),c.splice(a,1),b=!0)}m.push.apply(m,l);a=0;c.some(function(b){var c=0;if(b.targets.some(function(){m[a].pos=b.pos+c;if("undefined"!==typeof e&&Math.abs(m[a].pos-m[a].target)>e)return m.slice(0,a+1).forEach(function(a){delete a.pos}),m.reducedLen=(m.reducedLen||f)-.1*f,m.reducedLen>.1*f&&d.distribute(m,f,e),!0;c+=m[a].size;a++}))return!0});z(m,g)};x.prototype.drawDataLabels=function(){function d(a,b){var c=b.filter;return c?(b=c.operator,a=a[c.property],c=c.value,">"===b&&a>c||"<"===
b&&a<c||">="===b&&a>=c||"<="===b&&a<=c||"=="===b&&a==c||"==="===b&&a===c?!0:!1):!0}function f(a,b){var d=[],e;if(y(a)&&!y(b))d=a.map(function(a){return c(a,b)});else if(y(b)&&!y(a))d=b.map(function(b){return c(a,b)});else if(y(a)||y(b))for(e=Math.max(a.length,b.length);e--;)d[e]=c(a[e],b[e]);else d=c(a,b);return d}var e=this,h=e.chart,a=e.options,b=a.dataLabels,l=e.points,t,z=e.hasRendered||0,x=b.animation;x=b.defer?D(h,x,e):{defer:0,duration:0};var A=h.renderer;b=f(f(h.options.plotOptions&&h.options.plotOptions.series&&
h.options.plotOptions.series.dataLabels,h.options.plotOptions&&h.options.plotOptions[e.type]&&h.options.plotOptions[e.type].dataLabels),b);E(this,"drawDataLabels");if(y(b)||b.enabled||e._hasPointLabels){var B=e.plotGroup("dataLabelsGroup","data-labels",z?"inherit":"hidden",b.zIndex||6);B.attr({opacity:+z});!z&&(z=e.dataLabelsGroup)&&(e.visible&&B.show(!0),z[a.animation?"animate":"attr"]({opacity:1},x));l.forEach(function(c){t=M(f(b,c.dlOptions||c.options&&c.options.dataLabels));t.forEach(function(b,
f){var m=b.enabled&&(!c.isNull||c.dataLabelOnNull)&&d(c,b),l=c.dataLabels?c.dataLabels[f]:c.dataLabel,r=c.connectors?c.connectors[f]:c.connector,t=n(b.distance,c.labelDistance),w=!l;if(m){var u=c.getLabelConfig();var v=n(b[c.formatPrefix+"Format"],b.format);u=C(v)?g(v,u,h):(b[c.formatPrefix+"Formatter"]||b.formatter).call(u,b);v=b.style;var z=b.rotation;h.styledMode||(v.color=n(b.color,v.color,e.color,k.neutralColor100),"contrast"===v.color?(c.contrastColor=A.getContrast(c.color||e.color),v.color=
!C(t)&&b.inside||0>t||a.stacking?c.contrastColor:k.neutralColor100):delete c.contrastColor,a.cursor&&(v.cursor=a.cursor));var x={r:b.borderRadius||0,rotation:z,padding:b.padding,zIndex:1};h.styledMode||(x.fill=b.backgroundColor,x.stroke=b.borderColor,x["stroke-width"]=b.borderWidth);q(x,function(a,b){"undefined"===typeof a&&delete x[b]})}!l||m&&C(u)?m&&C(u)&&(l?x.text=u:(c.dataLabels=c.dataLabels||[],l=c.dataLabels[f]=z?A.text(u,0,-9999,b.useHTML).addClass("highcharts-data-label"):A.label(u,0,-9999,
b.shape,null,null,b.useHTML,null,"data-label"),f||(c.dataLabel=l),l.addClass(" highcharts-data-label-color-"+c.colorIndex+" "+(b.className||"")+(b.useHTML?" highcharts-tracker":""))),l.options=b,l.attr(x),h.styledMode||l.css(v).shadow(b.shadow),l.added||l.add(B),b.textPath&&!b.useHTML&&(l.setTextPath(c.getDataLabelPath&&c.getDataLabelPath(l)||c.graphic,b.textPath),c.dataLabelPath&&!b.textPath.enabled&&(c.dataLabelPath=c.dataLabelPath.destroy())),e.alignDataLabel(c,l,b,null,w)):(c.dataLabel=c.dataLabel&&
c.dataLabel.destroy(),c.dataLabels&&(1===c.dataLabels.length?delete c.dataLabels:delete c.dataLabels[f]),f||delete c.dataLabel,r&&(c.connector=c.connector.destroy(),c.connectors&&(1===c.connectors.length?delete c.connectors:delete c.connectors[f])))})})}E(this,"afterDrawDataLabels")};x.prototype.alignDataLabel=function(c,d,e,f,a){var b=this,g=this.chart,h=this.isCartesian&&g.inverted,m=this.enabledDataSorting,k=n(c.dlBox&&c.dlBox.centerX,c.plotX,-9999),q=n(c.plotY,-9999),r=d.getBBox(),t=e.rotation,
z=e.align,v=g.isInsidePlot(k,Math.round(q),h),x="justify"===n(e.overflow,m?"none":"justify"),p=this.visible&&!1!==c.visible&&(c.series.forceDL||m&&!x||v||e.inside&&f&&g.isInsidePlot(k,h?f.x+1:f.y+f.height-1,h));var y=function(e){m&&b.xAxis&&!x&&b.setDataLabelStartPos(c,d,a,v,e)};if(p){var C=g.renderer.fontMetrics(g.styledMode?void 0:e.style.fontSize,d).b;f=l({x:h?this.yAxis.len-q:k,y:Math.round(h?this.xAxis.len-k:q),width:0,height:0},f);l(e,{width:r.width,height:r.height});t?(x=!1,k=g.renderer.rotCorr(C,
t),k={x:f.x+(e.x||0)+f.width/2+k.x,y:f.y+(e.y||0)+{top:0,middle:.5,bottom:1}[e.verticalAlign]*f.height},y(k),d[a?"attr":"animate"](k).attr({align:z}),y=(t+720)%360,y=180<y&&360>y,"left"===z?k.y-=y?r.height:0:"center"===z?(k.x-=r.width/2,k.y-=r.height/2):"right"===z&&(k.x-=r.width,k.y-=y?0:r.height),d.placed=!0,d.alignAttr=k):(y(f),d.align(e,null,f),k=d.alignAttr);x&&0<=f.height?this.justifyDataLabel(d,e,k,r,f,a):n(e.crop,!0)&&(p=g.isInsidePlot(k.x,k.y)&&g.isInsidePlot(k.x+r.width,k.y+r.height));if(e.shape&&
!t)d[a?"attr":"animate"]({anchorX:h?g.plotWidth-c.plotY:c.plotX,anchorY:h?g.plotHeight-c.plotX:c.plotY})}a&&m&&(d.placed=!1);p||m&&!x||(d.hide(!0),d.placed=!1)};x.prototype.setDataLabelStartPos=function(c,d,e,f,a){var b=this.chart,g=b.inverted,h=this.xAxis,k=h.reversed,l=g?d.height/2:d.width/2;c=(c=c.pointWidth)?c/2:0;h=g?a.x:k?-l-c:h.width-l+c;a=g?k?this.yAxis.height-l+c:-l-c:a.y;d.startXPos=h;d.startYPos=a;f?"hidden"===d.visibility&&(d.show(),d.attr({opacity:0}).animate({opacity:1})):d.attr({opacity:1}).animate({opacity:0},
void 0,d.hide);b.hasRendered&&(e&&d.attr({x:d.startXPos,y:d.startYPos}),d.placed=!0)};x.prototype.justifyDataLabel=function(c,d,e,f,a,b){var g=this.chart,h=d.align,k=d.verticalAlign,l=c.box?0:c.padding||0,m=d.x;m=void 0===m?0:m;var n=d.y;var q=void 0===n?0:n;n=e.x+l;if(0>n){"right"===h&&0<=m?(d.align="left",d.inside=!0):m-=n;var r=!0}n=e.x+f.width-l;n>g.plotWidth&&("left"===h&&0>=m?(d.align="right",d.inside=!0):m+=g.plotWidth-n,r=!0);n=e.y+l;0>n&&("bottom"===k&&0<=q?(d.verticalAlign="top",d.inside=
!0):q-=n,r=!0);n=e.y+f.height-l;n>g.plotHeight&&("top"===k&&0>=q?(d.verticalAlign="bottom",d.inside=!0):q+=g.plotHeight-n,r=!0);r&&(d.x=m,d.y=q,c.placed=!b,c.align(d,void 0,a));return r};B.pie&&(B.pie.prototype.dataLabelPositioners={radialDistributionY:function(c){return c.top+c.distributeBox.pos},radialDistributionX:function(c,d,e,f){return c.getX(e<d.top+2||e>d.bottom-2?f:e,d.half,d)},justify:function(c,d,e){return e[0]+(c.half?-1:1)*(d+c.labelDistance)},alignToPlotEdges:function(c,d,e,f){c=c.getBBox().width;
return d?c+f:e-c-f},alignToConnectors:function(c,d,e,f){var a=0,b;c.forEach(function(c){b=c.dataLabel.getBBox().width;b>a&&(a=b)});return d?a+f:e-a-f}},B.pie.prototype.drawDataLabels=function(){var f=this,g=f.data,e,h=f.chart,a=f.options.dataLabels||{},b=a.connectorPadding,l,q=h.plotWidth,t=h.plotHeight,z=h.plotLeft,y=Math.round(h.chartWidth/3),A,B=f.center,E=B[2]/2,v=B[1],D,p,G,M,P=[[],[]],u,S,I,X,U=[0,0,0,0],W=f.dataLabelPositioners,Y;f.visible&&(a.enabled||f._hasPointLabels)&&(g.forEach(function(a){a.dataLabel&&
a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),x.prototype.drawDataLabels.apply(f),g.forEach(function(b){b.dataLabel&&(b.visible?(P[b.half].push(b),b.dataLabel._pos=null,!C(a.style.width)&&!C(b.options.dataLabels&&b.options.dataLabels.style&&b.options.dataLabels.style.width)&&b.dataLabel.getBBox().width>y&&(b.dataLabel.css({width:Math.round(.7*y)+"px"}),b.dataLabel.shortened=!0)):(b.dataLabel=b.dataLabel.destroy(),
b.dataLabels&&1===b.dataLabels.length&&delete b.dataLabels))}),P.forEach(function(c,g){var k=c.length,l=[],m;if(k){f.sortByAngle(c,g-.5);if(0<f.maxLabelDistance){var r=Math.max(0,v-E-f.maxLabelDistance);var w=Math.min(v+E+f.maxLabelDistance,h.plotHeight);c.forEach(function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,v-E-a.labelDistance),a.bottom=Math.min(v+E+a.labelDistance,h.plotHeight),m=a.dataLabel.getBBox().height||21,a.distributeBox={target:a.labelPosition.natural.y-a.top+m/2,size:m,
rank:a.y},l.push(a.distributeBox))});r=w+m-r;d.distribute(l,r,r/5)}for(X=0;X<k;X++){e=c[X];G=e.labelPosition;D=e.dataLabel;I=!1===e.visible?"hidden":"inherit";S=r=G.natural.y;l&&C(e.distributeBox)&&("undefined"===typeof e.distributeBox.pos?I="hidden":(M=e.distributeBox.size,S=W.radialDistributionY(e)));delete e.positionIndex;if(a.justify)u=W.justify(e,E,B);else switch(a.alignTo){case "connectors":u=W.alignToConnectors(c,g,q,z);break;case "plotEdges":u=W.alignToPlotEdges(D,g,q,z);break;default:u=W.radialDistributionX(f,
e,S,r)}D._attr={visibility:I,align:G.alignment};Y=e.options.dataLabels||{};D._pos={x:u+n(Y.x,a.x)+({left:b,right:-b}[G.alignment]||0),y:S+n(Y.y,a.y)-10};G.final.x=u;G.final.y=S;n(a.crop,!0)&&(p=D.getBBox().width,r=null,u-p<b&&1===g?(r=Math.round(p-u+b),U[3]=Math.max(r,U[3])):u+p>q-b&&0===g&&(r=Math.round(u+p-q+b),U[1]=Math.max(r,U[1])),0>S-M/2?U[0]=Math.max(Math.round(-S+M/2),U[0]):S+M/2>t&&(U[2]=Math.max(Math.round(S+M/2-t),U[2])),D.sideOverflow=r)}}}),0===H(U)||this.verifyDataLabelOverflow(U))&&
(this.placeDataLabels(),this.points.forEach(function(b){Y=c(a,b.options.dataLabels);if(l=n(Y.connectorWidth,1)){var d;A=b.connector;if((D=b.dataLabel)&&D._pos&&b.visible&&0<b.labelDistance){I=D._attr.visibility;if(d=!A)b.connector=A=h.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+b.colorIndex+(b.className?" "+b.className:"")).add(f.dataLabelsGroup),h.styledMode||A.attr({"stroke-width":l,stroke:Y.connectorColor||b.color||k.neutralColor60});A[d?"attr":"animate"]({d:b.getConnectorPath()});
A.attr("visibility",I)}else A&&(b.connector=A.destroy())}}))},B.pie.prototype.placeDataLabels=function(){this.points.forEach(function(c){var d=c.dataLabel,e;d&&c.visible&&((e=d._pos)?(d.sideOverflow&&(d._attr.width=Math.max(d.getBBox().width-d.sideOverflow,0),d.css({width:d._attr.width+"px",textOverflow:(this.options.dataLabels.style||{}).textOverflow||"ellipsis"}),d.shortened=!0),d.attr(d._attr),d[d.moved?"animate":"attr"](e),d.moved=!0):d&&d.attr({y:-9999}));delete c.distributeBox},this)},B.pie.prototype.alignDataLabel=
f,B.pie.prototype.verifyDataLabelOverflow=function(c){var d=this.center,e=this.options,f=e.center,a=e.minSize||80,b=null!==e.size;if(!b){if(null!==f[0])var g=Math.max(d[2]-Math.max(c[1],c[3]),a);else g=Math.max(d[2]-c[1]-c[3],a),d[0]+=(c[3]-c[1])/2;null!==f[1]?g=t(g,a,d[2]-Math.max(c[0],c[2])):(g=t(g,a,d[2]-c[0]-c[2]),d[1]+=(c[0]-c[2])/2);g<d[2]?(d[2]=g,d[3]=Math.min(A(e.innerSize||0,g),g),this.translate(d),this.drawDataLabels&&this.drawDataLabels()):b=!0}return b});B.column&&(B.column.prototype.alignDataLabel=
function(d,f,e,g,a){var b=this.chart.inverted,h=d.series,k=d.dlBox||d.shapeArgs,l=n(d.below,d.plotY>n(this.translatedThreshold,h.yAxis.len)),m=n(e.inside,!!this.options.stacking);k&&(g=c(k),0>g.y&&(g.height+=g.y,g.y=0),k=g.y+g.height-h.yAxis.len,0<k&&k<g.height&&(g.height-=k),b&&(g={x:h.yAxis.len-g.y-g.height,y:h.xAxis.len-g.x-g.width,width:g.height,height:g.width}),m||(b?(g.x+=l?0:g.width,g.width=0):(g.y+=l?g.height:0,g.height=0)));e.align=n(e.align,!b||m?"center":l?"right":"left");e.verticalAlign=
n(e.verticalAlign,b||m?"middle":l?"top":"bottom");x.prototype.alignDataLabel.call(this,d,f,e,g,a);e.inside&&d.contrastColor&&f.css({color:d.contrastColor})})});P(k,"Extensions/OverlappingDataLabels.js",[k["Core/Chart/Chart.js"],k["Core/Utilities.js"]],function(f,d){var k=d.addEvent,x=d.fireEvent,B=d.isArray,G=d.isNumber,D=d.objectEach,H=d.pick;k(f,"render",function(){var d=[];(this.labelCollectors||[]).forEach(function(f){d=d.concat(f())});(this.yAxis||[]).forEach(function(f){f.stacking&&f.options.stackLabels&&
!f.options.stackLabels.allowOverlap&&D(f.stacking.stacks,function(f){D(f,function(f){d.push(f.label)})})});(this.series||[]).forEach(function(f){var k=f.options.dataLabels;f.visible&&(!1!==k.enabled||f._hasPointLabels)&&(k=function(f){return f.forEach(function(f){f.visible&&(B(f.dataLabels)?f.dataLabels:f.dataLabel?[f.dataLabel]:[]).forEach(function(g){var c=g.options;g.labelrank=H(c.labelrank,f.labelrank,f.shapeArgs&&f.shapeArgs.height);c.allowOverlap||d.push(g)})})},k(f.nodes||[]),k(f.points))});
this.hideOverlappingLabels(d)});f.prototype.hideOverlappingLabels=function(d){var f=this,k=d.length,t=f.renderer,g,y,c,q=!1;var n=function(c){var d,f=c.box?0:c.padding||0,e=d=0,g;if(c&&(!c.alignAttr||c.placed)){var a=c.alignAttr||{x:c.attr("x"),y:c.attr("y")};var b=c.parentGroup;c.width||(d=c.getBBox(),c.width=d.width,c.height=d.height,d=t.fontMetrics(null,c.element).h);var k=c.width-2*f;(g={left:"0",center:"0.5",right:"1"}[c.alignValue])?e=+g*k:G(c.x)&&Math.round(c.x)!==c.translateX&&(e=c.x-c.translateX);
return{x:a.x+(b.translateX||0)+f-(e||0),y:a.y+(b.translateY||0)+f-d,width:c.width-2*f,height:c.height-2*f}}};for(y=0;y<k;y++)if(g=d[y])g.oldOpacity=g.opacity,g.newOpacity=1,g.absoluteBox=n(g);d.sort(function(c,d){return(d.labelrank||0)-(c.labelrank||0)});for(y=0;y<k;y++){var A=(n=d[y])&&n.absoluteBox;for(g=y+1;g<k;++g){var B=(c=d[g])&&c.absoluteBox;!A||!B||n===c||0===n.newOpacity||0===c.newOpacity||B.x>=A.x+A.width||B.x+B.width<=A.x||B.y>=A.y+A.height||B.y+B.height<=A.y||((n.labelrank<c.labelrank?
n:c).newOpacity=0)}}d.forEach(function(c){if(c){var d=c.newOpacity;c.oldOpacity!==d&&(c.alignAttr&&c.placed?(c[d?"removeClass":"addClass"]("highcharts-data-label-hidden"),q=!0,c.alignAttr.opacity=d,c[c.isOld?"animate":"attr"](c.alignAttr,null,function(){f.styledMode||c.css({pointerEvents:d?"auto":"none"});c.visibility=d?"inherit":"hidden"}),x(f,"afterHideOverlappingLabel")):c.attr({opacity:d}));c.isOld=!0}});q&&x(f,"afterHideAllOverlappingLabels")}});P(k,"Core/Responsive.js",[k["Core/Chart/Chart.js"],
k["Core/Utilities.js"]],function(f,d){var k=d.find,x=d.isArray,B=d.isObject,G=d.merge,D=d.objectEach,H=d.pick,t=d.splat,C=d.uniqueKey;f.prototype.setResponsive=function(d,f){var g=this.options.responsive,l=[],c=this.currentResponsive;!f&&g&&g.rules&&g.rules.forEach(function(c){"undefined"===typeof c._id&&(c._id=C());this.matchResponsiveRule(c,l)},this);f=G.apply(0,l.map(function(c){return k(g.rules,function(d){return d._id===c}).chartOptions}));f.isResponsiveOptions=!0;l=l.toString()||void 0;l!==
(c&&c.ruleIds)&&(c&&this.update(c.undoOptions,d,!0),l?(c=this.currentOptions(f),c.isResponsiveOptions=!0,this.currentResponsive={ruleIds:l,mergedOptions:f,undoOptions:c},this.update(f,d,!0)):this.currentResponsive=void 0)};f.prototype.matchResponsiveRule=function(d,f){var g=d.condition;(g.callback||function(){return this.chartWidth<=H(g.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=H(g.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=H(g.minWidth,0)&&this.chartHeight>=H(g.minHeight,0)}).call(this)&&
f.push(d._id)};f.prototype.currentOptions=function(d){function f(c,d,k,l){var n;D(c,function(c,m){if(!l&&-1<g.collectionsWithUpdate.indexOf(m)&&d[m])for(c=t(c),k[m]=[],n=0;n<Math.max(c.length,d[m].length);n++)d[m][n]&&(void 0===c[n]?k[m][n]=d[m][n]:(k[m][n]={},f(c[n],d[m][n],k[m][n],l+1)));else B(c)?(k[m]=x(c)?[]:{},f(c,d[m]||{},k[m],l+1)):k[m]="undefined"===typeof d[m]?null:d[m]})}var g=this,k={};f(d,this.options,k,0);return k}});P(k,"masters/highcharts.src.js",[k["Core/Globals.js"],k["Core/Utilities.js"],
k["Core/Renderer/HTML/AST.js"],k["Core/Series/Series.js"]],function(f,d,k,x){f.addEvent=d.addEvent;f.arrayMax=d.arrayMax;f.arrayMin=d.arrayMin;f.attr=d.attr;f.clearTimeout=d.clearTimeout;f.correctFloat=d.correctFloat;f.createElement=d.createElement;f.css=d.css;f.defined=d.defined;f.destroyObjectProperties=d.destroyObjectProperties;f.discardElement=d.discardElement;f.erase=d.erase;f.error=d.error;f.extend=d.extend;f.extendClass=d.extendClass;f.find=d.find;f.fireEvent=d.fireEvent;f.format=d.format;
f.getMagnitude=d.getMagnitude;f.getStyle=d.getStyle;f.inArray=d.inArray;f.isArray=d.isArray;f.isClass=d.isClass;f.isDOMElement=d.isDOMElement;f.isFunction=d.isFunction;f.isNumber=d.isNumber;f.isObject=d.isObject;f.isString=d.isString;f.keys=d.keys;f.merge=d.merge;f.normalizeTickInterval=d.normalizeTickInterval;f.numberFormat=d.numberFormat;f.objectEach=d.objectEach;f.offset=d.offset;f.pad=d.pad;f.pick=d.pick;f.pInt=d.pInt;f.relativeLength=d.relativeLength;f.removeEvent=d.removeEvent;f.splat=d.splat;
f.stableSort=d.stableSort;f.syncTimeout=d.syncTimeout;f.timeUnits=d.timeUnits;f.uniqueKey=d.uniqueKey;f.useSerialIds=d.useSerialIds;f.wrap=d.wrap;f.AST=k;f.Series=x;return f});k["masters/highcharts.src.js"]._modules=k;return k["masters/highcharts.src.js"]});
//# sourceMappingURL=highcharts.js.map

/***/ }),

/***/ "AxlJ":
/*!******************************************************!*\
  !*** ./node_modules/highcharts/modules/exporting.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v9.0.1 (2021-02-15)

 Exporting module

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(c){ true&&module.exports?(c["default"]=c,module.exports=c): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ "6n/F")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(p){c(p);c.Highcharts=p;return c}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})(function(c){function p(c,k,h,n){c.hasOwnProperty(k)||(c[k]=n.apply(null,h))}c=c?c._modules:{};p(c,"Extensions/FullScreen.js",[c["Core/Chart/Chart.js"],c["Core/Globals.js"],c["Core/Renderer/HTML/AST.js"],c["Core/Utilities.js"]],
function(c,k,h,n){var l=n.addEvent;n=function(){function c(e){this.chart=e;this.isOpen=!1;e=e.renderTo;this.browserProps||("function"===typeof e.requestFullscreen?this.browserProps={fullscreenChange:"fullscreenchange",requestFullscreen:"requestFullscreen",exitFullscreen:"exitFullscreen"}:e.mozRequestFullScreen?this.browserProps={fullscreenChange:"mozfullscreenchange",requestFullscreen:"mozRequestFullScreen",exitFullscreen:"mozCancelFullScreen"}:e.webkitRequestFullScreen?this.browserProps={fullscreenChange:"webkitfullscreenchange",
requestFullscreen:"webkitRequestFullScreen",exitFullscreen:"webkitExitFullscreen"}:e.msRequestFullscreen&&(this.browserProps={fullscreenChange:"MSFullscreenChange",requestFullscreen:"msRequestFullscreen",exitFullscreen:"msExitFullscreen"}))}c.prototype.close=function(){var e=this.chart,c=e.options.chart;if(this.isOpen&&this.browserProps&&e.container.ownerDocument instanceof Document)e.container.ownerDocument[this.browserProps.exitFullscreen]();this.unbindFullscreenEvent&&this.unbindFullscreenEvent();
e.setSize(this.origWidth,this.origHeight,!1);this.origHeight=this.origWidth=void 0;c&&(c.width=this.origWidthOption,c.height=this.origHeightOption);this.origHeightOption=this.origWidthOption=void 0;this.isOpen=!1;this.setButtonText()};c.prototype.open=function(){var e=this,c=e.chart,h=c.options.chart;h&&(e.origWidthOption=h.width,e.origHeightOption=h.height);e.origWidth=c.chartWidth;e.origHeight=c.chartHeight;if(e.browserProps){e.unbindFullscreenEvent=l(c.container.ownerDocument,e.browserProps.fullscreenChange,
function(){e.isOpen?(e.isOpen=!1,e.close()):(c.setSize(null,null,!1),e.isOpen=!0,e.setButtonText())});if(h=c.renderTo[e.browserProps.requestFullscreen]())h["catch"](function(){alert("Full screen is not supported inside a frame.")});l(c,"destroy",e.unbindFullscreenEvent)}};c.prototype.setButtonText=function(){var e,c=this.chart,n=c.exportDivElements,k=c.options.exporting,l=null===(e=null===k||void 0===k?void 0:k.buttons)||void 0===e?void 0:e.contextButton.menuItems;e=c.options.lang;(null===k||void 0===
k?0:k.menuItemDefinitions)&&(null===e||void 0===e?0:e.exitFullscreen)&&e.viewFullscreen&&l&&n&&n.length&&h.setElementHTML(n[l.indexOf("viewFullscreen")],this.isOpen?e.exitFullscreen:k.menuItemDefinitions.viewFullscreen.text||e.viewFullscreen)};c.prototype.toggle=function(){this.isOpen?this.close():this.open()};return c}();k.Fullscreen=n;l(c,"beforeRender",function(){this.fullscreen=new k.Fullscreen(this)});return k.Fullscreen});p(c,"Mixins/Navigation.js",[],function(){return{initUpdate:function(c){c.navigation||
(c.navigation={updates:[],update:function(c,h){this.updates.forEach(function(k){k.update.call(k.context,c,h)})}})},addUpdate:function(c,k){k.navigation||this.initUpdate(k);k.navigation.updates.push({update:c,context:k})}}});p(c,"Extensions/Exporting.js",[c["Core/Chart/Chart.js"],c["Mixins/Navigation.js"],c["Core/Globals.js"],c["Core/Options.js"],c["Core/Color/Palette.js"],c["Core/Renderer/SVG/SVGRenderer.js"],c["Core/Utilities.js"]],function(c,k,h,n,l,p,e){var z=h.doc,G=h.isTouchDevice,B=h.win;n=
n.defaultOptions;var x=e.addEvent,u=e.css,y=e.createElement,E=e.discardElement,A=e.extend,H=e.find,D=e.fireEvent,I=e.isObject,v=e.merge,F=e.objectEach,q=e.pick,J=e.removeEvent,K=e.uniqueKey;A(n.lang,{viewFullscreen:"View in full screen",exitFullscreen:"Exit from full screen",printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"});n.navigation||
(n.navigation={});v(!0,n.navigation,{buttonOptions:{theme:{},symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24}});v(!0,n.navigation,{menuStyle:{border:"1px solid "+l.neutralColor40,background:l.backgroundColor,padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",color:l.neutralColor80,background:"none",fontSize:G?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:l.highlightColor80,color:l.backgroundColor},
buttonOptions:{symbolFill:l.neutralColor60,symbolStroke:l.neutralColor60,symbolStrokeWidth:3,theme:{padding:5}}});n.exporting={type:"image/png",url:"https://export.highcharts.com/",printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",titleKey:"contextButtonTitle",menuItems:"viewFullscreen printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")}},menuItemDefinitions:{viewFullscreen:{textKey:"viewFullscreen",
onclick:function(){this.fullscreen.toggle()}},printChart:{textKey:"printChart",onclick:function(){this.print()}},separator:{separator:!0},downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChart()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}}};
h.post=function(a,b,f){var d=y("form",v({method:"post",action:a,enctype:"multipart/form-data"},f),{display:"none"},z.body);F(b,function(a,b){y("input",{type:"hidden",name:b,value:a},null,d)});d.submit();E(d)};h.isSafari&&h.win.matchMedia("print").addListener(function(a){h.printingChart&&(a.matches?h.printingChart.beforePrint():h.printingChart.afterPrint())});A(c.prototype,{sanitizeSVG:function(a,b){var f=a.indexOf("</svg>")+6,d=a.substr(f);a=a.substr(0,f);b&&b.exporting&&b.exporting.allowHTML&&d&&
(d='<foreignObject x="0" y="0" width="'+b.chart.width+'" height="'+b.chart.height+'"><body xmlns="http://www.w3.org/1999/xhtml">'+d.replace(/(<(?:img|br).*?(?=>))>/g,"$1 />")+"</body></foreignObject>",a=a.replace("</svg>",d+"</svg>"));a=a.replace(/zIndex="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(.*?)("|&quot;);?\)/g,"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+:)href=/g,
" xlink:href=").replace(/\n/," ").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g,"\u00a0").replace(/&shy;/g,"\u00ad");this.ieSanitizeSVG&&(a=this.ieSanitizeSVG(a));return a},getChartHTML:function(){this.styledMode&&this.inlineStyles();return this.container.innerHTML},getSVG:function(a){var b,f=v(this.options,a);f.plotOptions=v(this.userOptions.plotOptions,a&&a.plotOptions);f.time=v(this.userOptions.time,a&&a.time);var d=y("div",
null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},z.body);var e=this.renderTo.style.width;var r=this.renderTo.style.height;e=f.exporting.sourceWidth||f.chart.width||/px$/.test(e)&&parseInt(e,10)||(f.isGantt?800:600);r=f.exporting.sourceHeight||f.chart.height||/px$/.test(r)&&parseInt(r,10)||400;A(f.chart,{animation:!1,renderTo:d,forExport:!0,renderer:"SVGRenderer",width:e,height:r});f.exporting.enabled=!1;delete f.data;f.series=[];this.series.forEach(function(a){b=
v(a.userOptions,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:a.visible});b.isInternal||f.series.push(b)});this.axes.forEach(function(a){a.userOptions.internalKey||(a.userOptions.internalKey=K())});var h=new c(f,this.callback);a&&["xAxis","yAxis","series"].forEach(function(b){var d={};a[b]&&(d[b]=a[b],h.update(d))});this.axes.forEach(function(a){var b=H(h.axes,function(b){return b.options.internalKey===a.userOptions.internalKey}),d=a.getExtremes(),f=d.userMin;d=d.userMax;b&&("undefined"!==
typeof f&&f!==b.min||"undefined"!==typeof d&&d!==b.max)&&b.setExtremes(f,d,!0,!1)});e=h.getChartHTML();D(this,"getSVG",{chartCopy:h});e=this.sanitizeSVG(e,f);f=null;h.destroy();E(d);return e},getSVGForExport:function(a,b){var f=this.options.exporting;return this.getSVG(v({chart:{borderRadius:0}},f.chartOptions,b,{exporting:{sourceWidth:a&&a.sourceWidth||f.sourceWidth,sourceHeight:a&&a.sourceHeight||f.sourceHeight}}))},getFilename:function(){var a=this.userOptions.title&&this.userOptions.title.text,
b=this.options.exporting.filename;if(b)return b.replace(/\//g,"-");"string"===typeof a&&(b=a.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/[\s_]+/g,"-").replace(/[^a-z0-9\-]/g,"").replace(/^[\-]+/g,"").replace(/[\-]+/g,"-").substr(0,24).replace(/[\-]+$/g,""));if(!b||5>b.length)b="chart";return b},exportChart:function(a,b){b=this.getSVGForExport(a,b);a=v(this.options.exporting,a);h.post(a.url,{filename:a.filename?a.filename.replace(/\//g,"-"):this.getFilename(),type:a.type,width:a.width||0,
scale:a.scale,svg:b},a.formAttributes)},moveContainers:function(a){(this.fixedDiv?[this.fixedDiv,this.scrollingContainer]:[this.container]).forEach(function(b){a.appendChild(b)})},beforePrint:function(){var a=z.body,b=this.options.exporting.printMaxWidth,f={childNodes:a.childNodes,origDisplay:[],resetParams:void 0};this.isPrinting=!0;this.pointer.reset(null,0);D(this,"beforePrint");b&&this.chartWidth>b&&(f.resetParams=[this.options.chart.width,void 0,!1],this.setSize(b,void 0,!1));[].forEach.call(f.childNodes,
function(a,b){1===a.nodeType&&(f.origDisplay[b]=a.style.display,a.style.display="none")});this.moveContainers(a);this.printReverseInfo=f},afterPrint:function(){if(this.printReverseInfo){var a=this.printReverseInfo.childNodes,b=this.printReverseInfo.origDisplay,f=this.printReverseInfo.resetParams;this.moveContainers(this.renderTo);[].forEach.call(a,function(a,f){1===a.nodeType&&(a.style.display=b[f]||"")});this.isPrinting=!1;f&&this.setSize.apply(this,f);delete this.printReverseInfo;delete h.printingChart;
D(this,"afterPrint")}},print:function(){var a=this;a.isPrinting||(h.printingChart=a,h.isSafari||a.beforePrint(),setTimeout(function(){B.focus();B.print();h.isSafari||setTimeout(function(){a.afterPrint()},1E3)},1))},contextMenu:function(a,b,f,d,c,h,k){var g=this,r=g.options.navigation,n=g.chartWidth,C=g.chartHeight,t="cache-"+a,m=g[t],w=Math.max(c,h);if(!m){g.exportContextMenu=g[t]=m=y("div",{className:a},{position:"absolute",zIndex:1E3,padding:w+"px",pointerEvents:"auto"},g.fixedDiv||g.container);
var l=y("ul",{className:"highcharts-menu"},{listStyle:"none",margin:0,padding:0},m);g.styledMode||u(l,A({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},r.menuStyle));m.hideMenu=function(){u(m,{display:"none"});k&&k.setState(0);g.openMenu=!1;u(g.renderTo,{overflow:"hidden"});e.clearTimeout(m.hideTimer);D(g,"exportMenuHidden")};g.exportEvents.push(x(m,"mouseleave",function(){m.hideTimer=B.setTimeout(m.hideMenu,500)}),x(m,"mouseenter",function(){e.clearTimeout(m.hideTimer)}),
x(z,"mouseup",function(b){g.pointer.inClass(b.target,a)||m.hideMenu()}),x(m,"click",function(){g.openMenu&&m.hideMenu()}));b.forEach(function(a){"string"===typeof a&&(a=g.options.exporting.menuItemDefinitions[a]);if(I(a,!0)){if(a.separator)var b=y("hr",null,null,l);else"viewData"===a.textKey&&g.isDataTableVisible&&(a.textKey="hideData"),b=y("li",{className:"highcharts-menu-item",onclick:function(b){b&&b.stopPropagation();m.hideMenu();a.onclick&&a.onclick.apply(g,arguments)}},null,l),b.appendChild(z.createTextNode(a.text||
g.options.lang[a.textKey])),g.styledMode||(b.onmouseover=function(){u(this,r.menuItemHoverStyle)},b.onmouseout=function(){u(this,r.menuItemStyle)},u(b,A({cursor:"pointer"},r.menuItemStyle)));g.exportDivElements.push(b)}});g.exportDivElements.push(l,m);g.exportMenuWidth=m.offsetWidth;g.exportMenuHeight=m.offsetHeight}b={display:"block"};f+g.exportMenuWidth>n?b.right=n-f-c-w+"px":b.left=f-w+"px";d+h+g.exportMenuHeight>C&&"top"!==k.alignOptions.verticalAlign?b.bottom=C-d-w+"px":b.top=d+h-w+"px";u(m,
b);u(g.renderTo,{overflow:""});g.openMenu=!0;D(g,"exportMenuShown")},addButton:function(a){var b=this,f=b.renderer,d=v(b.options.navigation.buttonOptions,a),c=d.onclick,e=d.menuItems,h=d.symbolSize||12;b.btnCount||(b.btnCount=0);b.exportDivElements||(b.exportDivElements=[],b.exportSVGElements=[]);if(!1!==d.enabled){var g=d.theme,k=g.states,n=k&&k.hover;k=k&&k.select;var C;b.styledMode||(g.fill=q(g.fill,l.backgroundColor),g.stroke=q(g.stroke,"none"));delete g.states;c?C=function(a){a&&a.stopPropagation();
c.call(b,a)}:e&&(C=function(a){a&&a.stopPropagation();b.contextMenu(t.menuClassName,e,t.translateX,t.translateY,t.width,t.height,t);t.setState(2)});d.text&&d.symbol?g.paddingLeft=q(g.paddingLeft,30):d.text||A(g,{width:d.width,height:d.height,padding:0});b.styledMode||(g["stroke-linecap"]="round",g.fill=q(g.fill,l.backgroundColor),g.stroke=q(g.stroke,"none"));var t=f.button(d.text,0,0,C,g,n,k).addClass(a.className).attr({title:q(b.options.lang[d._titleKey||d.titleKey],"")});t.menuClassName=a.menuClassName||
"highcharts-menu-"+b.btnCount++;if(d.symbol){var m=f.symbol(d.symbol,d.symbolX-h/2,d.symbolY-h/2,h,h,{width:h,height:h}).addClass("highcharts-button-symbol").attr({zIndex:1}).add(t);b.styledMode||m.attr({stroke:d.symbolStroke,fill:d.symbolFill,"stroke-width":d.symbolStrokeWidth||1})}t.add(b.exportingGroup).align(A(d,{width:t.width,x:q(d.x,b.buttonOffset)}),!0,"spacingBox");b.buttonOffset+=(t.width+d.buttonSpacing)*("right"===d.align?-1:1);b.exportSVGElements.push(t,m)}},destroyExport:function(a){var b=
a?a.target:this;a=b.exportSVGElements;var f=b.exportDivElements,d=b.exportEvents,c;a&&(a.forEach(function(a,d){a&&(a.onclick=a.ontouchstart=null,c="cache-"+a.menuClassName,b[c]&&delete b[c],b.exportSVGElements[d]=a.destroy())}),a.length=0);b.exportingGroup&&(b.exportingGroup.destroy(),delete b.exportingGroup);f&&(f.forEach(function(a,d){e.clearTimeout(a.hideTimer);J(a,"mouseleave");b.exportDivElements[d]=a.onmouseout=a.onmouseover=a.ontouchstart=a.onclick=null;E(a)}),f.length=0);d&&(d.forEach(function(a){a()}),
d.length=0)}});p.prototype.inlineToAttributes="fill stroke strokeLinecap strokeLinejoin strokeWidth textAnchor x y".split(" ");p.prototype.inlineBlacklist=[/-/,/^(clipPath|cssText|d|height|width)$/,/^font$/,/[lL]ogical(Width|Height)$/,/perspective/,/TapHighlightColor/,/^transition/,/^length$/];p.prototype.unstyledElements=["clipPath","defs","desc"];c.prototype.inlineStyles=function(){function a(a){return a.replace(/([A-Z])/g,function(a,b){return"-"+b.toLowerCase()})}function b(c){function f(b,f){w=
u=!1;if(k){for(q=k.length;q--&&!u;)u=k[q].test(f);w=!u}"transform"===f&&"none"===b&&(w=!0);for(q=e.length;q--&&!w;)w=e[q].test(f)||"function"===typeof b;w||z[f]===b&&"svg"!==c.nodeName||g[c.nodeName][f]===b||(d&&-1===d.indexOf(f)?m+=a(f)+":"+b+";":b&&c.setAttribute(a(f),b))}var m="",w,u,q;if(1===c.nodeType&&-1===n.indexOf(c.nodeName)){var r=B.getComputedStyle(c,null);var z="svg"===c.nodeName?{}:B.getComputedStyle(c.parentNode,null);if(!g[c.nodeName]){l=p.getElementsByTagName("svg")[0];var x=p.createElementNS(c.namespaceURI,
c.nodeName);l.appendChild(x);g[c.nodeName]=v(B.getComputedStyle(x,null));"text"===c.nodeName&&delete g.text.fill;l.removeChild(x)}if(h.isFirefox||h.isMS)for(var y in r)f(r[y],y);else F(r,f);m&&(r=c.getAttribute("style"),c.setAttribute("style",(r?r+";":"")+m));"svg"===c.nodeName&&c.setAttribute("stroke-width","1px");"text"!==c.nodeName&&[].forEach.call(c.children||c.childNodes,b)}}var c=this.renderer,d=c.inlineToAttributes,e=c.inlineBlacklist,k=c.inlineWhitelist,n=c.unstyledElements,g={},l;c=z.createElement("iframe");
u(c,{width:"1px",height:"1px",visibility:"hidden"});z.body.appendChild(c);var p=c.contentWindow.document;p.open();p.write('<svg xmlns="http://www.w3.org/2000/svg"></svg>');p.close();b(this.container.querySelector("svg"));l.parentNode.removeChild(l);c.parentNode.removeChild(c)};h.Renderer.prototype.symbols.menu=function(a,b,c,d){return[["M",a,b+2.5],["L",a+c,b+2.5],["M",a,b+d/2+.5],["L",a+c,b+d/2+.5],["M",a,b+d-1.5],["L",a+c,b+d-1.5]]};h.Renderer.prototype.symbols.menuball=function(a,b,c,d){a=[];d=
d/3-2;return a=a.concat(this.circle(c-d,b,d,d),this.circle(c-d,b+d+4,d,d),this.circle(c-d,b+2*(d+4),d,d))};c.prototype.renderExporting=function(){var a=this,b=a.options.exporting,c=b.buttons,d=a.isDirtyExporting||!a.exportSVGElements;a.buttonOffset=0;a.isDirtyExporting&&a.destroyExport();d&&!1!==b.enabled&&(a.exportEvents=[],a.exportingGroup=a.exportingGroup||a.renderer.g("exporting-group").attr({zIndex:3}).add(),F(c,function(b){a.addButton(b)}),a.isDirtyExporting=!1)};x(c,"init",function(){var a=
this;a.exporting={update:function(b,c){a.isDirtyExporting=!0;v(!0,a.options.exporting,b);q(c,!0)&&a.redraw()}};k.addUpdate(function(b,c){a.isDirtyExporting=!0;v(!0,a.options.navigation,b);q(c,!0)&&a.redraw()},a)});c.prototype.callbacks.push(function(a){a.renderExporting();x(a,"redraw",a.renderExporting);x(a,"destroy",a.destroyExport)})});p(c,"masters/modules/exporting.src.js",[],function(){})});
//# sourceMappingURL=exporting.js.map

/***/ }),

/***/ "GA6K":
/*!*******************************************************!*\
  !*** ./src/app/main/aparelhos/aparelhos.component.ts ***!
  \*******************************************************/
/*! exports provided: AparelhosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AparelhosComponent", function() { return AparelhosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../main.service */ "zmBI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "f44v");




















function AparelhosComponent_mat_list_item_20_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AparelhosComponent_mat_list_item_20_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const com_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.delete(com_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AparelhosComponent_mat_list_item_20_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const com_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.edit(com_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const com_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](com_r6.name);
} }
function AparelhosComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (+", ctx_r1.aparelhoForm.value.comodos_list.length - 1, " ", (ctx_r1.aparelhoForm.value.comodos_list == null ? null : ctx_r1.aparelhoForm.value.comodos_list.length) === 2 ? "Outro" : "Outros", ") ");
} }
function AparelhosComponent_mat_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const com_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", com_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](com_r10.name);
} }
function AparelhosComponent_ng_container_50_mat_list_item_4_mat_chip_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r14.name);
} }
function AparelhosComponent_ng_container_50_mat_list_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-chip-list", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AparelhosComponent_ng_container_50_mat_list_item_4_mat_chip_8_Template, 2, 1, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AparelhosComponent_ng_container_50_mat_list_item_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const apar_r12 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.delete_apar(apar_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AparelhosComponent_ng_container_50_mat_list_item_4_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const apar_r12 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.edit_apar(apar_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const apar_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](apar_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Assinatura: ", apar_r12.assinatura === null ? "N\u00E3o possui" : apar_r12.assinatura, " - Movel: ", apar_r12.movel === true ? "Sim" : "N\u00E3o", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", apar_r12.comodo);
} }
function AparelhosComponent_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Aparelhos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AparelhosComponent_ng_container_50_mat_list_item_4_Template, 15, 4, "mat-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.aparelhos);
} }
function AparelhosComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Vazio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AparelhosComponent {
    constructor(mainService, snackBar, fb) {
        this.mainService = mainService;
        this.snackBar = snackBar;
        this.fb = fb;
        this.comName = '';
        this.id_user = '';
        this.com_Id = '';
        this.comodos = [];
        this.comEdit = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.unsubscribe2$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.aparelhoForm = this.fb.group({
            _id: [null],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            movel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            comodo: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            assinatura: [0],
            id_user: localStorage.getItem('id_user'),
        });
        this.aparelhos = [];
        this.comodos_list = [];
    }
    ngOnInit() {
        this.mainService.getComodos()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe((coms) => this.comodos = coms);
        this.mainService.getAparelhos()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe2$))
            .subscribe((apars) => this.aparelhos = apars);
        this.mainService.getComodos()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe2$))
            .subscribe((coms) => this.comodos_list = coms);
    }
    save() {
        if (this.comEdit) {
            const id_user = localStorage.getItem('id_user');
            this.mainService.updateComodo({ name: this.comName, _id: this.com_Id, id_user: id_user })
                .subscribe((com) => {
                this.notify('Atualizado!');
            }, (err) => {
                this.notify('Erro ao atualizar');
                console.log(err);
            });
        }
        else {
            this.mainService.addComodos({ name: this.comName, id_user: localStorage.getItem('id_user') })
                .subscribe((com) => {
                console.log(com);
                this.clearFields();
                this.notify('Inserido!');
            }, (err) => {
                console.log(localStorage.getItem('id_user'));
                this.notify('Não foi possivel inserir');
            });
        }
        this.clearFields();
    }
    clearFields() {
        this.comName = '';
        this.comEdit = false;
        this.com_Id = '';
    }
    cancel() {
        this.clearFields();
    }
    edit(com) {
        this.comName = com.name;
        this.comEdit = true;
        this.com_Id = com._id;
    }
    delete(com) {
        this.mainService.delComodos(com)
            .subscribe(() => this.notify('Removido'), (err) => this.notify(err.error.msg));
    }
    notify(msg) {
        this.snackBar.open(msg, "OK", { duration: 3000 });
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe2$.next();
    }
    save_apar() {
        let data = this.aparelhoForm.value;
        console.log(data);
        if (data._id != null) {
            this.mainService.updateAparelhos(data)
                .subscribe(() => this.notify("Atualizado!"));
        }
        else {
            this.mainService.addAparelhos(data)
                .subscribe(() => this.notify("Inserido!"));
        }
        this.resetForm();
    }
    delete_apar(a) {
        this.mainService.deleteAparelhos(a)
            .subscribe(() => this.notify("Apagado!"), (err) => console.log(err));
    }
    edit_apar(a) {
        this.aparelhoForm.setValue(a);
    }
    resetForm() {
        this.aparelhoForm.reset();
    }
}
AparelhosComponent.ɵfac = function AparelhosComponent_Factory(t) { return new (t || AparelhosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AparelhosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AparelhosComponent, selectors: [["app-aparelhos"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])], decls: 53, vars: 8, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between stretch"], ["fxFlex", "55"], ["fxFlex", ""], ["fxLayout", "column", "fxLayoutAlign", "space-between"], ["matInput", "", 3, "ngModel", "ngModelChange", "keyup.enter"], ["fxLayout", "row", "fxLayoutAlign", "end end"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-subheader", ""], [4, "ngFor", "ngForOf"], ["fxFlex", "40"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 3, "formGroup", "ngSubmit"], ["type", "hidden", "formControlName", "_id"], ["type", "hidden", "formControlName", "assinatura"], ["matInput", "", "placeholder", "Nome do aparelho", "formControlName", "name"], ["placeholder", "Este aparelho pode est\u00E1 em mais de um c\u00F4modo?", "formControlName", "movel"], ["value", "true"], ["value", "false"], ["appearance", "fill"], ["formControlName", "comodo", "multiple", ""], ["class", "additional-selection", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", "fxFlex", "10", "type", "submit"], ["mat-button", "", "color", "warn", "fxFlex", "10", "type", "reset"], [4, "ngIf", "ngIfElse"], ["empty", ""], ["mat-list-icon", ""], ["mat-line", ""], ["mat-icon-button", "", "color", "accent", 3, "click"], ["mat-icon-button", "", "color", "primary", 3, "click"], [1, "additional-selection"], [3, "value"]], template: function AparelhosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "C\u00F4modos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AparelhosComponent_Template_input_ngModelChange_9_listener($event) { return ctx.comName = $event; })("keyup.enter", function AparelhosComponent_Template_input_keyup_enter_9_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nome do C\u00F4modo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AparelhosComponent_Template_button_click_13_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AparelhosComponent_Template_button_click_15_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "C\u00F4modos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AparelhosComponent_mat_list_item_20_Template, 11, 1, "mat-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Aparelhos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AparelhosComponent_Template_form_ngSubmit_26_listener() { return ctx.save_apar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "N\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "C\u00F4modos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-select-trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AparelhosComponent_span_43_Template, 2, 2, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AparelhosComponent_mat_option_44_Template, 2, 2, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AparelhosComponent_ng_container_50_Template, 5, 1, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AparelhosComponent_ng_template_51_Template, 3, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comodos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.aparelhoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.aparelhoForm.value.comodos_list ? ctx.aparelhoForm.value.comodos_list[0] : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.aparelhoForm.value.comodos_list == null ? null : ctx.aparelhoForm.value.comodos_list.length) > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comodos_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.aparelhos.length > 0)("ngIfElse", _r4);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListSubheaderCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatLine"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChip"]], styles: [".additional-selection[_ngcontent-%COMP%] {\r\n    opacity: 0.75;\r\n    font-size: 0.75em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwYXJlbGhvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJhcGFyZWxob3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRpdGlvbmFsLXNlbGVjdGlvbiB7XHJcbiAgICBvcGFjaXR5OiAwLjc1O1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AparelhosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aparelhos',
                templateUrl: './aparelhos.component.html',
                styleUrls: ['./aparelhos.component.css'],
                providers: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]]
            }]
    }], function () { return [{ type: _main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "GF+f":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/accordion.js ***!
  \*********************************************************/
/*! exports provided: CdkAccordion, CdkAccordionItem, CdkAccordionModule, ɵangular_material_src_cdk_accordion_accordion_a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordion", function() { return CdkAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordionItem", function() { return CdkAccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordionModule", function() { return CdkAccordionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_accordion_accordion_a", function() { return CDK_ACCORDION; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Used to generate unique ID for each accordion. */


let nextId = 0;
/**
 * Injection token that can be used to reference instances of `CdkAccordion`. It serves
 * as alternative token to the actual `CdkAccordion` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkAccordion');
/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */
class CdkAccordion {
    constructor() {
        /** Emits when the state of the accordion changes */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /** Stream that emits true/false when openAll/closeAll is triggered. */
        this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /** A readonly id value to use for unique selection coordination. */
        this.id = `cdk-accordion-${nextId++}`;
        this._multi = false;
    }
    /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
    get multi() { return this._multi; }
    set multi(multi) { this._multi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(multi); }
    /** Opens all enabled accordion items in an accordion where multi is enabled. */
    openAll() {
        this._openCloseAll(true);
    }
    /** Closes all enabled accordion items in an accordion where multi is enabled. */
    closeAll() {
        this._openCloseAll(false);
    }
    ngOnChanges(changes) {
        this._stateChanges.next(changes);
    }
    ngOnDestroy() {
        this._stateChanges.complete();
    }
    _openCloseAll(expanded) {
        if (this.multi) {
            this._openCloseAllActions.next(expanded);
        }
    }
}
CdkAccordion.ɵfac = function CdkAccordion_Factory(t) { return new (t || CdkAccordion)(); };
CdkAccordion.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkAccordion, selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]], inputs: { multi: "multi" }, exportAs: ["cdkAccordion"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: CDK_ACCORDION, useExisting: CdkAccordion }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
CdkAccordion.propDecorators = {
    multi: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordion, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'cdk-accordion, [cdkAccordion]',
                exportAs: 'cdkAccordion',
                providers: [{ provide: CDK_ACCORDION, useExisting: CdkAccordion }]
            }]
    }], function () { return []; }, { multi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Used to generate unique ID for each accordion item. */
let nextId$1 = 0;
const ɵ0 = undefined;
/**
 * An basic directive expected to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */
class CdkAccordionItem {
    constructor(accordion, _changeDetectorRef, _expansionDispatcher) {
        this.accordion = accordion;
        this._changeDetectorRef = _changeDetectorRef;
        this._expansionDispatcher = _expansionDispatcher;
        /** Subscription to openAll/closeAll events. */
        this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        /** Event emitted every time the AccordionItem is closed. */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Event emitted every time the AccordionItem is opened. */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Event emitted when the AccordionItem is destroyed. */
        this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits whenever the expanded state of the accordion changes.
         * Primarily used to facilitate two-way binding.
         * @docs-private
         */
        this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** The unique AccordionItem id. */
        this.id = `cdk-accordion-child-${nextId$1++}`;
        this._expanded = false;
        this._disabled = false;
        /** Unregister function for _expansionDispatcher. */
        this._removeUniqueSelectionListener = () => { };
        this._removeUniqueSelectionListener =
            _expansionDispatcher.listen((id, accordionId) => {
                if (this.accordion && !this.accordion.multi &&
                    this.accordion.id === accordionId && this.id !== id) {
                    this.expanded = false;
                }
            });
        // When an accordion item is hosted in an accordion, subscribe to open/close events.
        if (this.accordion) {
            this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
        }
    }
    /** Whether the AccordionItem is expanded. */
    get expanded() { return this._expanded; }
    set expanded(expanded) {
        expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(expanded);
        // Only emit events and update the internal value if the value changes.
        if (this._expanded !== expanded) {
            this._expanded = expanded;
            this.expandedChange.emit(expanded);
            if (expanded) {
                this.opened.emit();
                /**
                 * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
                 * the name value is the id of the accordion.
                 */
                const accordionId = this.accordion ? this.accordion.id : this.id;
                this._expansionDispatcher.notify(this.id, accordionId);
            }
            else {
                this.closed.emit();
            }
            // Ensures that the animation will run when the value is set outside of an `@Input`.
            // This includes cases like the open, close and toggle methods.
            this._changeDetectorRef.markForCheck();
        }
    }
    /** Whether the AccordionItem is disabled. */
    get disabled() { return this._disabled; }
    set disabled(disabled) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(disabled); }
    /** Emits an event for the accordion item being destroyed. */
    ngOnDestroy() {
        this.opened.complete();
        this.closed.complete();
        this.destroyed.emit();
        this.destroyed.complete();
        this._removeUniqueSelectionListener();
        this._openCloseAllSubscription.unsubscribe();
    }
    /** Toggles the expanded state of the accordion item. */
    toggle() {
        if (!this.disabled) {
            this.expanded = !this.expanded;
        }
    }
    /** Sets the expanded state of the accordion item to false. */
    close() {
        if (!this.disabled) {
            this.expanded = false;
        }
    }
    /** Sets the expanded state of the accordion item to true. */
    open() {
        if (!this.disabled) {
            this.expanded = true;
        }
    }
    _subscribeToOpenCloseAllActions() {
        return this.accordion._openCloseAllActions.subscribe(expanded => {
            // Only change expanded state if item is enabled
            if (!this.disabled) {
                this.expanded = expanded;
            }
        });
    }
}
CdkAccordionItem.ɵfac = function CdkAccordionItem_Factory(t) { return new (t || CdkAccordionItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"])); };
CdkAccordionItem.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkAccordionItem, selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]], inputs: { expanded: "expanded", disabled: "disabled" }, outputs: { closed: "closed", opened: "opened", destroyed: "destroyed", expandedChange: "expandedChange" }, exportAs: ["cdkAccordionItem"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
            // registering to the same accordion.
            { provide: CDK_ACCORDION, useValue: ɵ0 },
        ])] });
CdkAccordionItem.ctorParameters = () => [
    { type: CdkAccordion, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_ACCORDION,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"] }
];
CdkAccordionItem.propDecorators = {
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    destroyed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    expandedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'cdk-accordion-item, [cdkAccordionItem]',
                exportAs: 'cdkAccordionItem',
                providers: [
                    // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
                    // registering to the same accordion.
                    { provide: CDK_ACCORDION, useValue: ɵ0 },
                ]
            }]
    }], function () { return [{ type: CdkAccordion, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_ACCORDION]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"] }]; }, { closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], destroyed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], expandedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class CdkAccordionModule {
}
CdkAccordionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CdkAccordionModule });
CdkAccordionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CdkAccordionModule_Factory(t) { return new (t || CdkAccordionModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CdkAccordionModule, { declarations: [CdkAccordion, CdkAccordionItem], exports: [CdkAccordion, CdkAccordionItem] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [CdkAccordion, CdkAccordionItem],
                declarations: [CdkAccordion, CdkAccordionItem]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ "GXRp":
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/table.js ***!
  \*****************************************************/
/*! exports provided: DataSource, BaseCdkCell, BaseRowDef, CDK_ROW_TEMPLATE, CDK_TABLE, CDK_TABLE_TEMPLATE, CdkCell, CdkCellDef, CdkCellOutlet, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkFooterRow, CdkFooterRowDef, CdkHeaderCell, CdkHeaderCellDef, CdkHeaderRow, CdkHeaderRowDef, CdkNoDataRow, CdkRow, CdkRowDef, CdkTable, CdkTableModule, CdkTextColumn, DataRowOutlet, FooterRowOutlet, HeaderRowOutlet, NoDataRowOutlet, STICKY_DIRECTIONS, STICKY_POSITIONING_LISTENER, StickyStyler, TEXT_COLUMN_OPTIONS, _COALESCED_STYLE_SCHEDULER, _CoalescedStyleScheduler, _Schedule, mixinHasStickyInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCdkCell", function() { return BaseCdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRowDef", function() { return BaseRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_ROW_TEMPLATE", function() { return CDK_ROW_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE", function() { return CDK_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE_TEMPLATE", function() { return CDK_TABLE_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCell", function() { return CdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellDef", function() { return CdkCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellOutlet", function() { return CdkCellOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkColumnDef", function() { return CdkColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCell", function() { return CdkFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCellDef", function() { return CdkFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRow", function() { return CdkFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRowDef", function() { return CdkFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCell", function() { return CdkHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCellDef", function() { return CdkHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRow", function() { return CdkHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDef", function() { return CdkHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkNoDataRow", function() { return CdkNoDataRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRow", function() { return CdkRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRowDef", function() { return CdkRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTable", function() { return CdkTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTableModule", function() { return CdkTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTextColumn", function() { return CdkTextColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRowOutlet", function() { return DataRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterRowOutlet", function() { return FooterRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderRowOutlet", function() { return HeaderRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoDataRowOutlet", function() { return NoDataRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STICKY_DIRECTIONS", function() { return STICKY_DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STICKY_POSITIONING_LISTENER", function() { return STICKY_POSITIONING_LISTENER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyStyler", function() { return StickyStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_COLUMN_OPTIONS", function() { return TEXT_COLUMN_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_COALESCED_STYLE_SCHEDULER", function() { return _COALESCED_STYLE_SCHEDULER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CoalescedStyleScheduler", function() { return _CoalescedStyleScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Schedule", function() { return _Schedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinHasStickyInput", function() { return mixinHasStickyInput; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








const _c0 = [[["caption"]], [["colgroup"], ["col"]]];
const _c1 = ["caption", "colgroup, col"];
function CdkTextColumn_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
} }
function CdkTextColumn_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r1.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
} }








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Mixin to provide a directive with a function that checks if the sticky input has been
 * changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * @docs-private
 */
function mixinHasStickyInput(base) {
    return class extends base {
        constructor(...args) {
            super(...args);
            this._sticky = false;
            /** Whether the sticky input has changed since it was last checked. */
            this._hasStickyChanged = false;
        }
        /** Whether sticky positioning should be applied. */
        get sticky() { return this._sticky; }
        set sticky(v) {
            const prevValue = this._sticky;
            this._sticky = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            this._hasStickyChanged = prevValue !== this._sticky;
        }
        /** Whether the sticky value has changed since this was last called. */
        hasStickyChanged() {
            const hasStickyChanged = this._hasStickyChanged;
            this._hasStickyChanged = false;
            return hasStickyChanged;
        }
        /** Resets the dirty check for cases where the sticky state has been used without checking. */
        resetStickyChanged() {
            this._hasStickyChanged = false;
        }
    };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used to provide a table to some of the sub-components without causing a circular dependency.
 * @docs-private
 */
const CDK_TABLE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_TABLE');
/** Injection token that can be used to specify the text column options. */
const TEXT_COLUMN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('text-column-options');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
class CdkCellDef {
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkCellDef.ɵfac = function CdkCellDef_Factory(t) { return new (t || CdkCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
CdkCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCellDef, selectors: [["", "cdkCellDef", ""]] });
CdkCellDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkCellDef]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
class CdkHeaderCellDef {
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) { return new (t || CdkHeaderCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
CdkHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderCellDef, selectors: [["", "cdkHeaderCellDef", ""]] });
CdkHeaderCellDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkHeaderCellDef]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
class CdkFooterCellDef {
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) { return new (t || CdkFooterCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
CdkFooterCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterCellDef, selectors: [["", "cdkFooterCellDef", ""]] });
CdkFooterCellDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkFooterCellDef]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();
// Boilerplate for applying mixins to CdkColumnDef.
/** @docs-private */
class CdkColumnDefBase {
}
const _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
class CdkColumnDef extends _CdkColumnDefBase {
    constructor(_table) {
        super();
        this._table = _table;
        this._stickyEnd = false;
    }
    /** Unique name for this column. */
    get name() { return this._name; }
    set name(name) { this._setNameInput(name); }
    /**
     * Whether this column should be sticky positioned on the end of the row. Should make sure
     * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
     * has been changed.
     */
    get stickyEnd() {
        return this._stickyEnd;
    }
    set stickyEnd(v) {
        const prevValue = this._stickyEnd;
        this._stickyEnd = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
        this._hasStickyChanged = prevValue !== this._stickyEnd;
    }
    /**
     * Overridable method that sets the css classes that will be added to every cell in this
     * column.
     * In the future, columnCssClassName will change from type string[] to string and this
     * will set a single string value.
     * @docs-private
     */
    _updateColumnCssClassName() {
        this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */
    _setNameInput(value) {
        // If the directive is set without a name (updated programatically), then this setter will
        // trigger with an empty string and should not overwrite the programatically set value.
        if (value) {
            this._name = value;
            this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/ig, '-');
            this._updateColumnCssClassName();
        }
    }
}
CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) { return new (t || CdkColumnDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
CdkColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkColumnDef, selectors: [["", "cdkColumnDef", ""]], contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkCellDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderCellDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterCellDef, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.footerCell = _t.first);
    } }, inputs: { sticky: "sticky", name: ["cdkColumnDef", "name"], stickyEnd: "stickyEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
CdkColumnDef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
CdkColumnDef.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkColumnDef',] }],
    stickyEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['stickyEnd',] }],
    cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkCellDef,] }],
    headerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkHeaderCellDef,] }],
    footerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkFooterCellDef,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkColumnDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkColumnDef]',
                inputs: ['sticky'],
                providers: [{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [CDK_TABLE]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['cdkColumnDef']
        }], stickyEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['stickyEnd']
        }], cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkCellDef]
        }], headerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkHeaderCellDef]
        }], footerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkFooterCellDef]
        }] }); })();
/** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */
class BaseCdkCell {
    constructor(columnDef, elementRef) {
        // If IE 11 is dropped before we switch to setting a single class name, change to multi param
        // with destructuring.
        const classList = elementRef.nativeElement.classList;
        for (const className of columnDef._columnCssClassName) {
            classList.add(className);
        }
    }
}
/** Header cell template container that adds the right classes and role. */
class CdkHeaderCell extends BaseCdkCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) { return new (t || CdkHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
CdkHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderCell, selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
CdkHeaderCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'cdk-header-cell, th[cdk-header-cell]',
                host: {
                    'class': 'cdk-header-cell',
                    'role': 'columnheader'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/** Footer cell template container that adds the right classes and role. */
class CdkFooterCell extends BaseCdkCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) { return new (t || CdkFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
CdkFooterCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterCell, selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-footer-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
CdkFooterCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'cdk-footer-cell, td[cdk-footer-cell]',
                host: {
                    'class': 'cdk-footer-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/** Cell template container that adds the right classes and role. */
class CdkCell extends BaseCdkCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkCell.ɵfac = function CdkCell_Factory(t) { return new (t || CdkCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
CdkCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCell, selectors: [["cdk-cell"], ["td", "cdk-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
CdkCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'cdk-cell, td[cdk-cell]',
                host: {
                    'class': 'cdk-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @docs-private
 */
class _Schedule {
    constructor() {
        this.tasks = [];
        this.endTasks = [];
    }
}
/** Injection token used to provide a coalesced style scheduler. */
const _COALESCED_STYLE_SCHEDULER = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('_COALESCED_STYLE_SCHEDULER');
/**
 * Allows grouping up CSSDom mutations after the current execution context.
 * This can significantly improve performance when separate consecutive functions are
 * reading from the CSSDom and then mutating it.
 *
 * @docs-private
 */
class _CoalescedStyleScheduler {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        this._currentSchedule = null;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    /**
     * Schedules the specified task to run at the end of the current VM turn.
     */
    schedule(task) {
        this._createScheduleIfNeeded();
        this._currentSchedule.tasks.push(task);
    }
    /**
     * Schedules the specified task to run after other scheduled tasks at the end of the current
     * VM turn.
     */
    scheduleEnd(task) {
        this._createScheduleIfNeeded();
        this._currentSchedule.endTasks.push(task);
    }
    /** Prevent any further tasks from running. */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    _createScheduleIfNeeded() {
        if (this._currentSchedule) {
            return;
        }
        this._currentSchedule = new _Schedule();
        this._getScheduleObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(() => {
            while (this._currentSchedule.tasks.length || this._currentSchedule.endTasks.length) {
                const schedule = this._currentSchedule;
                // Capture new tasks scheduled by the current set of tasks.
                this._currentSchedule = new _Schedule();
                for (const task of schedule.tasks) {
                    task();
                }
                for (const task of schedule.endTasks) {
                    task();
                }
            }
            this._currentSchedule = null;
        });
    }
    _getScheduleObservable() {
        // Use onStable when in the context of an ongoing change detection cycle so that we
        // do not accidentally trigger additional cycles.
        return this._ngZone.isStable ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(Promise.resolve(undefined)) :
            this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1));
    }
}
_CoalescedStyleScheduler.ɵfac = function _CoalescedStyleScheduler_Factory(t) { return new (t || _CoalescedStyleScheduler)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
_CoalescedStyleScheduler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: _CoalescedStyleScheduler, factory: _CoalescedStyleScheduler.ɵfac });
_CoalescedStyleScheduler.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_CoalescedStyleScheduler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 */
const CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 */
class BaseRowDef {
    constructor(
    /** @docs-private */ template, _differs) {
        this.template = template;
        this._differs = _differs;
    }
    ngOnChanges(changes) {
        // Create a new columns differ if one does not yet exist. Initialize it based on initial value
        // of the columns property or an empty array if none is provided.
        if (!this._columnsDiffer) {
            const columns = (changes['columns'] && changes['columns'].currentValue) || [];
            this._columnsDiffer = this._differs.find(columns).create();
            this._columnsDiffer.diff(columns);
        }
    }
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     */
    getColumnsDiff() {
        return this._columnsDiffer.diff(this.columns);
    }
    /** Gets this row def's relevant cell template from the provided column def. */
    extractCellTemplate(column) {
        if (this instanceof CdkHeaderRowDef) {
            return column.headerCell.template;
        }
        if (this instanceof CdkFooterRowDef) {
            return column.footerCell.template;
        }
        else {
            return column.cell.template;
        }
    }
}
BaseRowDef.ɵfac = function BaseRowDef_Factory(t) { return new (t || BaseRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"])); };
BaseRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: BaseRowDef, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
BaseRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BaseRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }]; }, null); })();
// Boilerplate for applying mixins to CdkHeaderRowDef.
/** @docs-private */
class CdkHeaderRowDefBase extends BaseRowDef {
}
const _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
class CdkHeaderRowDef extends _CdkHeaderRowDefBase {
    constructor(template, _differs, _table) {
        super(template, _differs);
        this._table = _table;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) { return new (t || CdkHeaderRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
CdkHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderRowDef, selectors: [["", "cdkHeaderRowDef", ""]], inputs: { columns: ["cdkHeaderRowDef", "columns"], sticky: ["cdkHeaderRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
CdkHeaderRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkHeaderRowDef]',
                inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [CDK_TABLE]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, null); })();
// Boilerplate for applying mixins to CdkFooterRowDef.
/** @docs-private */
class CdkFooterRowDefBase extends BaseRowDef {
}
const _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
/**
 * Footer row definition for the CDK table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
class CdkFooterRowDef extends _CdkFooterRowDefBase {
    constructor(template, _differs, _table) {
        super(template, _differs);
        this._table = _table;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) { return new (t || CdkFooterRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
CdkFooterRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterRowDef, selectors: [["", "cdkFooterRowDef", ""]], inputs: { columns: ["cdkFooterRowDef", "columns"], sticky: ["cdkFooterRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
CdkFooterRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkFooterRowDef]',
                inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [CDK_TABLE]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, null); })();
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
class CdkRowDef extends BaseRowDef {
    // TODO(andrewseguin): Add an input for providing a switch function to determine
    //   if this template should be used.
    constructor(template, _differs, _table) {
        super(template, _differs);
        this._table = _table;
    }
}
CdkRowDef.ɵfac = function CdkRowDef_Factory(t) { return new (t || CdkRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
CdkRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkRowDef, selectors: [["", "cdkRowDef", ""]], inputs: { columns: ["cdkRowDefColumns", "columns"], when: ["cdkRowDefWhen", "when"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
CdkRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkRowDef]',
                inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [CDK_TABLE]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, null); })();
/**
 * Outlet for rendering cells inside of a row or header row.
 * @docs-private
 */
class CdkCellOutlet {
    constructor(_viewContainer) {
        this._viewContainer = _viewContainer;
        CdkCellOutlet.mostRecentCellOutlet = this;
    }
    ngOnDestroy() {
        // If this was the last outlet being rendered in the view, remove the reference
        // from the static property after it has been destroyed to avoid leaking memory.
        if (CdkCellOutlet.mostRecentCellOutlet === this) {
            CdkCellOutlet.mostRecentCellOutlet = null;
        }
    }
}
CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) { return new (t || CdkCellOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"])); };
CdkCellOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCellOutlet, selectors: [["", "cdkCellOutlet", ""]] });
/**
 * Static property containing the latest constructed instance of this class.
 * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
 * createEmbeddedView. After one of these components are created, this property will provide
 * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
 * construct the cells with the provided context.
 */
CdkCellOutlet.mostRecentCellOutlet = null;
CdkCellOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCellOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkCellOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }]; }, null); })();
/** Header template container that contains the cell outlet. Adds the right class and role. */
class CdkHeaderRow {
}
CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) { return new (t || CdkHeaderRow)(); };
CdkHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkHeaderRow, selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]], hostAttrs: ["role", "row", 1, "cdk-header-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkHeaderRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-header-row, tr[cdk-header-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-header-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
            }]
    }], null, null); })();
/** Footer template container that contains the cell outlet. Adds the right class and role. */
class CdkFooterRow {
}
CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) { return new (t || CdkFooterRow)(); };
CdkFooterRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkFooterRow, selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]], hostAttrs: ["role", "row", 1, "cdk-footer-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkFooterRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-footer-row, tr[cdk-footer-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-footer-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
            }]
    }], null, null); })();
/** Data row template container that contains the cell outlet. Adds the right class and role. */
class CdkRow {
}
CdkRow.ɵfac = function CdkRow_Factory(t) { return new (t || CdkRow)(); };
CdkRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkRow, selectors: [["cdk-row"], ["tr", "cdk-row", ""]], hostAttrs: ["role", "row", 1, "cdk-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-row, tr[cdk-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
            }]
    }], null, null); })();
/** Row that can be used to display a message when no data is shown in the table. */
class CdkNoDataRow {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
CdkNoDataRow.ɵfac = function CdkNoDataRow_Factory(t) { return new (t || CdkNoDataRow)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
CdkNoDataRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkNoDataRow, selectors: [["ng-template", "cdkNoDataRow", ""]] });
CdkNoDataRow.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkNoDataRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'ng-template[cdkNoDataRow]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * List of all possible directions that can be used for sticky positioning.
 * @docs-private
 */
const STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
/**
 * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
 * @docs-private
 */
class StickyStyler {
    /**
     * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
     *     that uses the native `<table>` element.
     * @param _stickCellCss The CSS class that will be applied to every row/cell that has
     *     sticky positioning applied.
     * @param direction The directionality context of the table (ltr/rtl); affects column positioning
     *     by reversing left/right positions.
     * @param _isBrowser Whether the table is currently being rendered on the server or the client.
     * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
     *     using inline styles. If false, it is assumed that position: sticky is included in
     *     the component stylesheet for _stickCellCss.
     * @param _positionListener A listener that is notified of changes to sticky rows/columns
     *     and their dimensions.
     */
    constructor(_isNativeHtmlTable, _stickCellCss, direction, 
    /**
     * @deprecated `_coalescedStyleScheduler` parameter to become required.
     * @breaking-change 11.0.0
     */
    _coalescedStyleScheduler, _isBrowser = true, _needsPositionStickyOnElement = true, _positionListener) {
        this._isNativeHtmlTable = _isNativeHtmlTable;
        this._stickCellCss = _stickCellCss;
        this.direction = direction;
        this._coalescedStyleScheduler = _coalescedStyleScheduler;
        this._isBrowser = _isBrowser;
        this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
        this._positionListener = _positionListener;
        this._cachedCellWidths = [];
        this._borderCellCss = {
            'top': `${_stickCellCss}-border-elem-top`,
            'bottom': `${_stickCellCss}-border-elem-bottom`,
            'left': `${_stickCellCss}-border-elem-left`,
            'right': `${_stickCellCss}-border-elem-right`,
        };
    }
    /**
     * Clears the sticky positioning styles from the row and its cells by resetting the `position`
     * style, setting the zIndex to 0, and unsetting each provided sticky direction.
     * @param rows The list of rows that should be cleared from sticking in the provided directions
     * @param stickyDirections The directions that should no longer be set as sticky on the rows.
     */
    clearStickyPositioning(rows, stickyDirections) {
        const elementsToClear = [];
        for (const row of rows) {
            // If the row isn't an element (e.g. if it's an `ng-container`),
            // it won't have inline styles or `children` so we skip it.
            if (row.nodeType !== row.ELEMENT_NODE) {
                continue;
            }
            elementsToClear.push(row);
            for (let i = 0; i < row.children.length; i++) {
                elementsToClear.push(row.children[i]);
            }
        }
        // Coalesce with sticky row/column updates (and potentially other changes like column resize).
        this._scheduleStyleChanges(() => {
            for (const element of elementsToClear) {
                this._removeStickyStyle(element, stickyDirections);
            }
        });
    }
    /**
     * Applies sticky left and right positions to the cells of each row according to the sticky
     * states of the rendered column definitions.
     * @param rows The rows that should have its set of cells stuck according to the sticky states.
     * @param stickyStartStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the start of the row.
     * @param stickyEndStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the end of the row.
     * @param recalculateCellWidths Whether the sticky styler should recalculate the width of each
     *     column cell. If `false` cached widths will be used instead.
     */
    updateStickyColumns(rows, stickyStartStates, stickyEndStates, recalculateCellWidths = true) {
        if (!rows.length || !this._isBrowser || !(stickyStartStates.some(state => state) ||
            stickyEndStates.some(state => state))) {
            if (this._positionListener) {
                this._positionListener.stickyColumnsUpdated({ sizes: [] });
                this._positionListener.stickyEndColumnsUpdated({ sizes: [] });
            }
            return;
        }
        const firstRow = rows[0];
        const numCells = firstRow.children.length;
        const cellWidths = this._getCellWidths(firstRow, recalculateCellWidths);
        const startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
        const endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
        const lastStickyStart = stickyStartStates.lastIndexOf(true);
        const firstStickyEnd = stickyEndStates.indexOf(true);
        // Coalesce with sticky row updates (and potentially other changes like column resize).
        this._scheduleStyleChanges(() => {
            const isRtl = this.direction === 'rtl';
            const start = isRtl ? 'right' : 'left';
            const end = isRtl ? 'left' : 'right';
            for (const row of rows) {
                for (let i = 0; i < numCells; i++) {
                    const cell = row.children[i];
                    if (stickyStartStates[i]) {
                        this._addStickyStyle(cell, start, startPositions[i], i === lastStickyStart);
                    }
                    if (stickyEndStates[i]) {
                        this._addStickyStyle(cell, end, endPositions[i], i === firstStickyEnd);
                    }
                }
            }
            if (this._positionListener) {
                this._positionListener.stickyColumnsUpdated({
                    sizes: lastStickyStart === -1 ?
                        [] :
                        cellWidths
                            .slice(0, lastStickyStart + 1)
                            .map((width, index) => stickyStartStates[index] ? width : null)
                });
                this._positionListener.stickyEndColumnsUpdated({
                    sizes: firstStickyEnd === -1 ?
                        [] :
                        cellWidths
                            .slice(firstStickyEnd)
                            .map((width, index) => stickyEndStates[index + firstStickyEnd] ? width : null)
                            .reverse()
                });
            }
        });
    }
    /**
     * Applies sticky positioning to the row's cells if using the native table layout, and to the
     * row itself otherwise.
     * @param rowsToStick The list of rows that should be stuck according to their corresponding
     *     sticky state and to the provided top or bottom position.
     * @param stickyStates A list of boolean states where each state represents whether the row
     *     should be stuck in the particular top or bottom position.
     * @param position The position direction in which the row should be stuck if that row should be
     *     sticky.
     *
     */
    stickRows(rowsToStick, stickyStates, position) {
        // Since we can't measure the rows on the server, we can't stick the rows properly.
        if (!this._isBrowser) {
            return;
        }
        // If positioning the rows to the bottom, reverse their order when evaluating the sticky
        // position such that the last row stuck will be "bottom: 0px" and so on. Note that the
        // sticky states need to be reversed as well.
        const rows = position === 'bottom' ? rowsToStick.slice().reverse() : rowsToStick;
        const states = position === 'bottom' ? stickyStates.slice().reverse() : stickyStates;
        // Measure row heights all at once before adding sticky styles to reduce layout thrashing.
        const stickyOffsets = [];
        const stickyCellHeights = [];
        const elementsToStick = [];
        for (let rowIndex = 0, stickyOffset = 0; rowIndex < rows.length; rowIndex++) {
            stickyOffsets[rowIndex] = stickyOffset;
            if (!states[rowIndex]) {
                continue;
            }
            const row = rows[rowIndex];
            elementsToStick[rowIndex] = this._isNativeHtmlTable ?
                Array.from(row.children) : [row];
            const height = row.getBoundingClientRect().height;
            stickyOffset += height;
            stickyCellHeights[rowIndex] = height;
        }
        const borderedRowIndex = states.lastIndexOf(true);
        // Coalesce with other sticky row updates (top/bottom), sticky columns updates
        // (and potentially other changes like column resize).
        this._scheduleStyleChanges(() => {
            var _a, _b;
            for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
                if (!states[rowIndex]) {
                    continue;
                }
                const offset = stickyOffsets[rowIndex];
                const isBorderedRowIndex = rowIndex === borderedRowIndex;
                for (const element of elementsToStick[rowIndex]) {
                    this._addStickyStyle(element, position, offset, isBorderedRowIndex);
                }
            }
            if (position === 'top') {
                (_a = this._positionListener) === null || _a === void 0 ? void 0 : _a.stickyHeaderRowsUpdated({ sizes: stickyCellHeights, elements: elementsToStick });
            }
            else {
                (_b = this._positionListener) === null || _b === void 0 ? void 0 : _b.stickyFooterRowsUpdated({ sizes: stickyCellHeights, elements: elementsToStick });
            }
        });
    }
    /**
     * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
     * footer rows is to apply sticky styling to the tfoot container. This should only be done if
     * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
     * the tfoot element.
     */
    updateStickyFooterContainer(tableElement, stickyStates) {
        if (!this._isNativeHtmlTable) {
            return;
        }
        const tfoot = tableElement.querySelector('tfoot');
        // Coalesce with other sticky updates (and potentially other changes like column resize).
        this._scheduleStyleChanges(() => {
            if (stickyStates.some(state => !state)) {
                this._removeStickyStyle(tfoot, ['bottom']);
            }
            else {
                this._addStickyStyle(tfoot, 'bottom', 0, false);
            }
        });
    }
    /**
     * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
     * the zIndex, removing each of the provided sticky directions, and removing the
     * sticky position if there are no more directions.
     */
    _removeStickyStyle(element, stickyDirections) {
        for (const dir of stickyDirections) {
            element.style[dir] = '';
            element.classList.remove(this._borderCellCss[dir]);
        }
        // If the element no longer has any more sticky directions, remove sticky positioning and
        // the sticky CSS class.
        // Short-circuit checking element.style[dir] for stickyDirections as they
        // were already removed above.
        const hasDirection = STICKY_DIRECTIONS.some(dir => stickyDirections.indexOf(dir) === -1 && element.style[dir]);
        if (hasDirection) {
            element.style.zIndex = this._getCalculatedZIndex(element);
        }
        else {
            // When not hasDirection, _getCalculatedZIndex will always return ''.
            element.style.zIndex = '';
            if (this._needsPositionStickyOnElement) {
                element.style.position = '';
            }
            element.classList.remove(this._stickCellCss);
        }
    }
    /**
     * Adds the sticky styling to the element by adding the sticky style class, changing position
     * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
     * direction and value.
     */
    _addStickyStyle(element, dir, dirValue, isBorderElement) {
        element.classList.add(this._stickCellCss);
        if (isBorderElement) {
            element.classList.add(this._borderCellCss[dir]);
        }
        element.style[dir] = `${dirValue}px`;
        element.style.zIndex = this._getCalculatedZIndex(element);
        if (this._needsPositionStickyOnElement) {
            element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
        }
    }
    /**
     * Calculate what the z-index should be for the element, depending on what directions (top,
     * bottom, left, right) have been set. It should be true that elements with a top direction
     * should have the highest index since these are elements like a table header. If any of those
     * elements are also sticky in another direction, then they should appear above other elements
     * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
     * (e.g. footer rows) should then be next in the ordering such that they are below the header
     * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
     * should minimally increment so that they are above non-sticky elements but below top and bottom
     * elements.
     */
    _getCalculatedZIndex(element) {
        const zIndexIncrements = {
            top: 100,
            bottom: 10,
            left: 1,
            right: 1,
        };
        let zIndex = 0;
        // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
        // loses the array generic type in the `for of`. But we *also* have to use `Array` because
        // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
        for (const dir of STICKY_DIRECTIONS) {
            if (element.style[dir]) {
                zIndex += zIndexIncrements[dir];
            }
        }
        return zIndex ? `${zIndex}` : '';
    }
    /** Gets the widths for each cell in the provided row. */
    _getCellWidths(row, recalculateCellWidths = true) {
        if (!recalculateCellWidths && this._cachedCellWidths.length) {
            return this._cachedCellWidths;
        }
        const cellWidths = [];
        const firstRowCells = row.children;
        for (let i = 0; i < firstRowCells.length; i++) {
            let cell = firstRowCells[i];
            cellWidths.push(cell.getBoundingClientRect().width);
        }
        this._cachedCellWidths = cellWidths;
        return cellWidths;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     */
    _getStickyStartColumnPositions(widths, stickyStates) {
        const positions = [];
        let nextPosition = 0;
        for (let i = 0; i < widths.length; i++) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     */
    _getStickyEndColumnPositions(widths, stickyStates) {
        const positions = [];
        let nextPosition = 0;
        for (let i = widths.length; i > 0; i--) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    }
    /**
     * Schedules styles to be applied when the style scheduler deems appropriate.
     * @breaking-change 11.0.0 This method can be removed in favor of calling
     * `CoalescedStyleScheduler.schedule` directly once the scheduler is a required parameter.
     */
    _scheduleStyleChanges(changes) {
        if (this._coalescedStyleScheduler) {
            this._coalescedStyleScheduler.schedule(changes);
        }
        else {
            changes();
        }
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an error to be thrown when attempting to find an unexisting column.
 * @param id Id whose lookup failed.
 * @docs-private
 */
function getTableUnknownColumnError(id) {
    return Error(`Could not find column with id "${id}".`);
}
/**
 * Returns an error to be thrown when two column definitions have the same name.
 * @docs-private
 */
function getTableDuplicateColumnNameError(name) {
    return Error(`Duplicate column definition name provided: "${name}".`);
}
/**
 * Returns an error to be thrown when there are multiple rows that are missing a when function.
 * @docs-private
 */
function getTableMultipleDefaultRowDefsError() {
    return Error(`There can only be one default row without a when predicate function.`);
}
/**
 * Returns an error to be thrown when there are no matching row defs for a particular set of data.
 * @docs-private
 */
function getTableMissingMatchingRowDefError(data) {
    return Error(`Could not find a matching row definition for the` +
        `provided row data: ${JSON.stringify(data)}`);
}
/**
 * Returns an error to be thrown when there is no row definitions present in the content.
 * @docs-private
 */
function getTableMissingRowDefsError() {
    return Error('Missing definitions for header, footer, and row; ' +
        'cannot determine which columns should be rendered.');
}
/**
 * Returns an error to be thrown when the data source does not match the compatible types.
 * @docs-private
 */
function getTableUnknownDataSourceError() {
    return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
/**
 * Returns an error to be thrown when the text column cannot find a parent table to inject.
 * @docs-private
 */
function getTableTextColumnMissingParentTableError() {
    return Error(`Text column could not find a parent table for registration.`);
}
/**
 * Returns an error to be thrown when a table text column doesn't have a name.
 * @docs-private
 */
function getTableTextColumnMissingNameError() {
    return Error(`Table text column must have a name.`);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** The injection token used to specify the StickyPositioningListener. */
const STICKY_POSITIONING_LISTENER = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_SPL');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * @docs-private
 */
class DataRowOutlet {
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) { return new (t || DataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
DataRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: DataRowOutlet, selectors: [["", "rowOutlet", ""]] });
DataRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DataRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[rowOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * @docs-private
 */
class HeaderRowOutlet {
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) { return new (t || HeaderRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
HeaderRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: HeaderRowOutlet, selectors: [["", "headerRowOutlet", ""]] });
HeaderRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HeaderRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[headerRowOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the footer.
 * @docs-private
 */
class FooterRowOutlet {
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) { return new (t || FooterRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
FooterRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: FooterRowOutlet, selectors: [["", "footerRowOutlet", ""]] });
FooterRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FooterRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[footerRowOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/**
 * Provides a handle for the table to grab the view
 * container's ng-container to insert the no data row.
 * @docs-private
 */
class NoDataRowOutlet {
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
NoDataRowOutlet.ɵfac = function NoDataRowOutlet_Factory(t) { return new (t || NoDataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
NoDataRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NoDataRowOutlet, selectors: [["", "noDataRowOutlet", ""]] });
NoDataRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NoDataRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[noDataRowOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/**
 * The table template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * @docs-private
 */
const CDK_TABLE_TEMPLATE = 
// Note that according to MDN, the `caption` element has to be projected as the **first**
// element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
`
  <ng-content select="caption"></ng-content>
  <ng-content select="colgroup, col"></ng-content>
  <ng-container headerRowOutlet></ng-container>
  <ng-container rowOutlet></ng-container>
  <ng-container noDataRowOutlet></ng-container>
  <ng-container footerRowOutlet></ng-container>
`;
/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * @docs-private
 */
class RowViewRef extends _angular_core__WEBPACK_IMPORTED_MODULE_3__["EmbeddedViewRef"] {
}
/**
 * A data table that can render a header row, data rows, and a footer row.
 * Uses the dataSource input to determine the data to be rendered. The data can be provided either
 * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
 * connect function that will return an Observable stream that emits the data array to render.
 */
class CdkTable {
    constructor(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform, 
    /**
     * @deprecated `_coalescedStyleScheduler`, `_viewRepeater` and `_viewportRuler`
     *    parameters to become required.
     * @breaking-change 11.0.0
     */
    _viewRepeater, _coalescedStyleScheduler, _stickyPositioningListener, 
    // Optional for backwards compatibility. The viewport ruler is provided in root. Therefore,
    // this property will never be null.
    // tslint:disable-next-line: lightweight-tokens
    _viewportRuler) {
        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._dir = _dir;
        this._platform = _platform;
        this._viewRepeater = _viewRepeater;
        this._coalescedStyleScheduler = _coalescedStyleScheduler;
        this._stickyPositioningListener = _stickyPositioningListener;
        this._viewportRuler = _viewportRuler;
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Map of all the user's defined columns (header, data, and footer cell template) identified by
         * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
         * any custom column definitions added to `_customColumnDefs`.
         */
        this._columnDefsByName = new Map();
        /**
         * Column definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * column definitions as *its* content child.
         */
        this._customColumnDefs = new Set();
        /**
         * Data row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in data rows as *its* content child.
         */
        this._customRowDefs = new Set();
        /**
         * Header row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in header rows as *its* content child.
         */
        this._customHeaderRowDefs = new Set();
        /**
         * Footer row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
         * built-in footer row as *its* content child.
         */
        this._customFooterRowDefs = new Set();
        /**
         * Whether the header row definition has been changed. Triggers an update to the header row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._headerRowDefChanged = true;
        /**
         * Whether the footer row definition has been changed. Triggers an update to the footer row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._footerRowDefChanged = true;
        /**
         * Whether the sticky column styles need to be updated. Set to `true` when the visible columns
         * change.
         */
        this._stickyColumnStylesNeedReset = true;
        /**
         * Whether the sticky styler should recalculate cell widths when applying sticky styles. If
         * `false`, cached values will be used instead. This is only applicable to tables with
         * {@link fixedLayout} enabled. For other tables, cell widths will always be recalculated.
         */
        this._forceRecalculateCellWidths = true;
        /**
         * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
         * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
         * the cached `RenderRow` objects when possible, the row identity is preserved when the data
         * and row template matches, which allows the `IterableDiffer` to check rows by reference
         * and understand which rows are added/moved/removed.
         *
         * Implemented as a map of maps where the first key is the `data: T` object and the second is the
         * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
         * contains an array of created pairs. The array is necessary to handle cases where the data
         * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
         * stored.
         */
        this._cachedRenderRowsMap = new Map();
        /**
         * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
         * table subclasses.
         */
        this.stickyCssClass = 'cdk-table-sticky';
        /**
         * Whether to manually add positon: sticky to all sticky cell elements. Not needed if
         * the position is set in a selector associated with the value of stickyCssClass. May be
         * overridden by table subclasses
         */
        this.needsPositionStickyOnElement = true;
        /** Whether the no data row is currently showing anything. */
        this._isShowingNoDataRow = false;
        this._multiTemplateDataRows = false;
        this._fixedLayout = false;
        // TODO(andrewseguin): Remove max value as the end index
        //   and instead calculate the view on init and scroll.
        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         *
         * @docs-private
         */
        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]({ start: 0, end: Number.MAX_VALUE });
        if (!role) {
            this._elementRef.nativeElement.setAttribute('role', 'grid');
        }
        this._document = _document;
        this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
    }
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
     * relative to the function to know if a row should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     */
    get trackBy() {
        return this._trackByFn;
    }
    set trackBy(fn) {
        if ((typeof ngDevMode === 'undefined' || ngDevMode) && fn != null && typeof fn !== 'function') {
            console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
        }
        this._trackByFn = fn;
    }
    /**
     * The table's source of data, which can be provided in three ways (in order of complexity):
     *   - Simple data array (each object represents one table row)
     *   - Stream that emits a data array each time the array changes
     *   - `DataSource` object that implements the connect/disconnect interface.
     *
     * If a data array is provided, the table must be notified when the array's objects are
     * added, removed, or moved. This can be done by calling the `renderRows()` function which will
     * render the diff since the last table render. If the data array reference is changed, the table
     * will automatically trigger an update to the rows.
     *
     * When providing an Observable stream, the table will trigger an update automatically when the
     * stream emits a new array of data.
     *
     * Finally, when providing a `DataSource` object, the table will use the Observable stream
     * provided by the connect function and trigger updates when that stream emits new data array
     * values. During the table's ngOnDestroy or when the data source is removed from the table, the
     * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
     * subscriptions registered during the connect process).
     */
    get dataSource() {
        return this._dataSource;
    }
    set dataSource(dataSource) {
        if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
        }
    }
    /**
     * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
     * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
     * dataobject will render the first row that evaluates its when predicate to true, in the order
     * defined in the table, or otherwise the default row which does not have a when predicate.
     */
    get multiTemplateDataRows() {
        return this._multiTemplateDataRows;
    }
    set multiTemplateDataRows(v) {
        this._multiTemplateDataRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
        // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
        // this setter will be invoked before the row outlet has been defined hence the null check.
        if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
            this._forceRenderDataRows();
            this.updateStickyColumnStyles();
        }
    }
    /**
     * Whether to use a fixed table layout. Enabling this option will enforce consistent column widths
     * and optimize rendering sticky styles for native tables. No-op for flex tables.
     */
    get fixedLayout() {
        return this._fixedLayout;
    }
    set fixedLayout(v) {
        this._fixedLayout = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
        // Toggling `fixedLayout` may change column widths. Sticky column styles should be recalculated.
        this._forceRecalculateCellWidths = true;
        this._stickyColumnStylesNeedReset = true;
    }
    ngOnInit() {
        this._setupStickyStyler();
        if (this._isNativeHtmlTable) {
            this._applyNativeTableSections();
        }
        // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
        // the user has provided a custom trackBy, return the result of that function as evaluated
        // with the values of the `RenderRow`'s data and index.
        this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
            return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
        });
        // Table cell dimensions may change after resizing the window. Signal the sticky styler to
        // refresh its cache of cell widths the next time sticky styles are updated.
        // @breaking-change 11.0.0 Remove null check for _viewportRuler once it's a required parameter.
        if (this._viewportRuler) {
            this._viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._onDestroy)).subscribe(() => {
                this._forceRecalculateCellWidths = true;
            });
        }
    }
    ngAfterContentChecked() {
        // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
        this._cacheRowDefs();
        this._cacheColumnDefs();
        // Make sure that the user has at least added header, footer, or data row def.
        if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableMissingRowDefsError();
        }
        // Render updates if the list of columns have been changed for the header, row, or footer defs.
        const columnsChanged = this._renderUpdatedColumns();
        const rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged;
        // Ensure sticky column styles are reset if set to `true` elsewhere.
        this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
        this._forceRecalculateCellWidths = rowDefsChanged;
        // If the header row definition has been changed, trigger a render to the header row.
        if (this._headerRowDefChanged) {
            this._forceRenderHeaderRows();
            this._headerRowDefChanged = false;
        }
        // If the footer row definition has been changed, trigger a render to the footer row.
        if (this._footerRowDefChanged) {
            this._forceRenderFooterRows();
            this._footerRowDefChanged = false;
        }
        // If there is a data source and row definitions, connect to the data source unless a
        // connection has already been made.
        if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
            this._observeRenderChanges();
        }
        else if (this._stickyColumnStylesNeedReset) {
            // In the above case, _observeRenderChanges will result in updateStickyColumnStyles being
            // called when it row data arrives. Otherwise, we need to call it proactively.
            this.updateStickyColumnStyles();
        }
        this._checkStickyStates();
    }
    ngOnDestroy() {
        this._rowOutlet.viewContainer.clear();
        this._noDataRowOutlet.viewContainer.clear();
        this._headerRowOutlet.viewContainer.clear();
        this._footerRowOutlet.viewContainer.clear();
        this._cachedRenderRowsMap.clear();
        this._onDestroy.next();
        this._onDestroy.complete();
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
    }
    /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     */
    renderRows() {
        this._renderRows = this._getAllRenderRows();
        const changes = this._dataDiffer.diff(this._renderRows);
        if (!changes) {
            this._updateNoDataRow();
            return;
        }
        const viewContainer = this._rowOutlet.viewContainer;
        // @breaking-change 11.0.0 Remove null check for `_viewRepeater` and the
        // `else` clause once `_viewRepeater` is turned into a required parameter.
        if (this._viewRepeater) {
            this._viewRepeater.applyChanges(changes, viewContainer, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record.item, currentIndex), (record) => record.item.data, (change) => {
                if (change.operation === 1 /* INSERTED */ && change.context) {
                    this._renderCellTemplateForItem(change.record.item.rowDef, change.context);
                }
            });
        }
        else {
            changes.forEachOperation((record, prevIndex, currentIndex) => {
                if (record.previousIndex == null) {
                    const renderRow = record.item;
                    const rowDef = renderRow.rowDef;
                    const context = { $implicit: renderRow.data };
                    this._renderRow(this._rowOutlet, rowDef, currentIndex, context);
                }
                else if (currentIndex == null) {
                    viewContainer.remove(prevIndex);
                }
                else {
                    const view = viewContainer.get(prevIndex);
                    viewContainer.move(view, currentIndex);
                }
            });
        }
        // Update the meta context of a row's context data (index, count, first, last, ...)
        this._updateRowIndexContext();
        // Update rows that did not get added/removed/moved but may have had their identity changed,
        // e.g. if trackBy matched data on some property but the actual data reference changed.
        changes.forEachIdentityChange((record) => {
            const rowView = viewContainer.get(record.currentIndex);
            rowView.context.$implicit = record.item.data;
        });
        this._updateNoDataRow();
        this.updateStickyColumnStyles();
    }
    /** Adds a column definition that was not included as part of the content children. */
    addColumnDef(columnDef) {
        this._customColumnDefs.add(columnDef);
    }
    /** Removes a column definition that was not included as part of the content children. */
    removeColumnDef(columnDef) {
        this._customColumnDefs.delete(columnDef);
    }
    /** Adds a row definition that was not included as part of the content children. */
    addRowDef(rowDef) {
        this._customRowDefs.add(rowDef);
    }
    /** Removes a row definition that was not included as part of the content children. */
    removeRowDef(rowDef) {
        this._customRowDefs.delete(rowDef);
    }
    /** Adds a header row definition that was not included as part of the content children. */
    addHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.add(headerRowDef);
        this._headerRowDefChanged = true;
    }
    /** Removes a header row definition that was not included as part of the content children. */
    removeHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.delete(headerRowDef);
        this._headerRowDefChanged = true;
    }
    /** Adds a footer row definition that was not included as part of the content children. */
    addFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.add(footerRowDef);
        this._footerRowDefChanged = true;
    }
    /** Removes a footer row definition that was not included as part of the content children. */
    removeFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.delete(footerRowDef);
        this._footerRowDefChanged = true;
    }
    /** Sets a no data row definition that was not included as a part of the content children. */
    setNoDataRow(noDataRow) {
        this._customNoDataRow = noDataRow;
    }
    /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    updateStickyHeaderRowStyles() {
        const headerRows = this._getRenderedRows(this._headerRowOutlet);
        const tableElement = this._elementRef.nativeElement;
        // Hide the thead element if there are no header rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        const thead = tableElement.querySelector('thead');
        if (thead) {
            thead.style.display = headerRows.length ? '' : 'none';
        }
        const stickyStates = this._headerRowDefs.map(def => def.sticky);
        this._stickyStyler.clearStickyPositioning(headerRows, ['top']);
        this._stickyStyler.stickRows(headerRows, stickyStates, 'top');
        // Reset the dirty state of the sticky input change since it has been used.
        this._headerRowDefs.forEach(def => def.resetStickyChanged());
    }
    /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    updateStickyFooterRowStyles() {
        const footerRows = this._getRenderedRows(this._footerRowOutlet);
        const tableElement = this._elementRef.nativeElement;
        // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        const tfoot = tableElement.querySelector('tfoot');
        if (tfoot) {
            tfoot.style.display = footerRows.length ? '' : 'none';
        }
        const stickyStates = this._footerRowDefs.map(def => def.sticky);
        this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);
        this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');
        this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
        // Reset the dirty state of the sticky input change since it has been used.
        this._footerRowDefs.forEach(def => def.resetStickyChanged());
    }
    /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     */
    updateStickyColumnStyles() {
        const headerRows = this._getRenderedRows(this._headerRowOutlet);
        const dataRows = this._getRenderedRows(this._rowOutlet);
        const footerRows = this._getRenderedRows(this._footerRowOutlet);
        // For tables not using a fixed layout, the column widths may change when new rows are rendered.
        // In a table using a fixed layout, row content won't affect column width, so sticky styles
        // don't need to be cleared unless either the sticky column config changes or one of the row
        // defs change.
        if ((this._isNativeHtmlTable && !this._fixedLayout)
            || this._stickyColumnStylesNeedReset) {
            // Clear the left and right positioning from all columns in the table across all rows since
            // sticky columns span across all table sections (header, data, footer)
            this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ['left', 'right']);
            this._stickyColumnStylesNeedReset = false;
        }
        // Update the sticky styles for each header row depending on the def's sticky state
        headerRows.forEach((headerRow, i) => {
            this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
        });
        // Update the sticky styles for each data row depending on its def's sticky state
        this._rowDefs.forEach(rowDef => {
            // Collect all the rows rendered with this row definition.
            const rows = [];
            for (let i = 0; i < dataRows.length; i++) {
                if (this._renderRows[i].rowDef === rowDef) {
                    rows.push(dataRows[i]);
                }
            }
            this._addStickyColumnStyles(rows, rowDef);
        });
        // Update the sticky styles for each footer row depending on the def's sticky state
        footerRows.forEach((footerRow, i) => {
            this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
        });
        // Reset the dirty state of the sticky input change since it has been used.
        Array.from(this._columnDefsByName.values()).forEach(def => def.resetStickyChanged());
    }
    /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     */
    _getAllRenderRows() {
        const renderRows = [];
        // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
        // new cache while unused ones can be picked up by garbage collection.
        const prevCachedRenderRows = this._cachedRenderRowsMap;
        this._cachedRenderRowsMap = new Map();
        // For each data object, get the list of rows that should be rendered, represented by the
        // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.
        for (let i = 0; i < this._data.length; i++) {
            let data = this._data[i];
            const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
            if (!this._cachedRenderRowsMap.has(data)) {
                this._cachedRenderRowsMap.set(data, new WeakMap());
            }
            for (let j = 0; j < renderRowsForData.length; j++) {
                let renderRow = renderRowsForData[j];
                const cache = this._cachedRenderRowsMap.get(renderRow.data);
                if (cache.has(renderRow.rowDef)) {
                    cache.get(renderRow.rowDef).push(renderRow);
                }
                else {
                    cache.set(renderRow.rowDef, [renderRow]);
                }
                renderRows.push(renderRow);
            }
        }
        return renderRows;
    }
    /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     */
    _getRenderRowsForData(data, dataIndex, cache) {
        const rowDefs = this._getRowDefs(data, dataIndex);
        return rowDefs.map(rowDef => {
            const cachedRenderRows = (cache && cache.has(rowDef)) ? cache.get(rowDef) : [];
            if (cachedRenderRows.length) {
                const dataRow = cachedRenderRows.shift();
                dataRow.dataIndex = dataIndex;
                return dataRow;
            }
            else {
                return { data, rowDef, dataIndex };
            }
        });
    }
    /** Update the map containing the content's column definitions. */
    _cacheColumnDefs() {
        this._columnDefsByName.clear();
        const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
        columnDefs.forEach(columnDef => {
            if (this._columnDefsByName.has(columnDef.name) &&
                (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableDuplicateColumnNameError(columnDef.name);
            }
            this._columnDefsByName.set(columnDef.name, columnDef);
        });
    }
    /** Update the list of all available row definitions that can be used. */
    _cacheRowDefs() {
        this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
        this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
        this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
        // After all row definitions are determined, find the row definition to be considered default.
        const defaultRowDefs = this._rowDefs.filter(def => !def.when);
        if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableMultipleDefaultRowDefsError();
        }
        this._defaultRowDef = defaultRowDefs[0];
    }
    /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     */
    _renderUpdatedColumns() {
        const columnsDiffReducer = (acc, def) => acc || !!def.getColumnsDiff();
        // Force re-render data rows if the list of column definitions have changed.
        const dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);
        if (dataColumnsChanged) {
            this._forceRenderDataRows();
        }
        // Force re-render header/footer rows if the list of column definitions have changed.
        const headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);
        if (headerColumnsChanged) {
            this._forceRenderHeaderRows();
        }
        const footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);
        if (footerColumnsChanged) {
            this._forceRenderFooterRows();
        }
        return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
    }
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     */
    _switchDataSource(dataSource) {
        this._data = [];
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
        // Stop listening for data from the previous data source.
        if (this._renderChangeSubscription) {
            this._renderChangeSubscription.unsubscribe();
            this._renderChangeSubscription = null;
        }
        if (!dataSource) {
            if (this._dataDiffer) {
                this._dataDiffer.diff([]);
            }
            this._rowOutlet.viewContainer.clear();
        }
        this._dataSource = dataSource;
    }
    /** Set up a subscription for the data provided by the data source. */
    _observeRenderChanges() {
        // If no data source has been set, there is nothing to observe for changes.
        if (!this.dataSource) {
            return;
        }
        let dataStream;
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            dataStream = this.dataSource.connect(this);
        }
        else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["isObservable"])(this.dataSource)) {
            dataStream = this.dataSource;
        }
        else if (Array.isArray(this.dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(this.dataSource);
        }
        if (dataStream === undefined && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableUnknownDataSourceError();
        }
        this._renderChangeSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._onDestroy))
            .subscribe(data => {
            this._data = data || [];
            this.renderRows();
        });
    }
    /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     */
    _forceRenderHeaderRows() {
        // Clear the header row outlet if any content exists.
        if (this._headerRowOutlet.viewContainer.length > 0) {
            this._headerRowOutlet.viewContainer.clear();
        }
        this._headerRowDefs.forEach((def, i) => this._renderRow(this._headerRowOutlet, def, i));
        this.updateStickyHeaderRowStyles();
    }
    /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     */
    _forceRenderFooterRows() {
        // Clear the footer row outlet if any content exists.
        if (this._footerRowOutlet.viewContainer.length > 0) {
            this._footerRowOutlet.viewContainer.clear();
        }
        this._footerRowDefs.forEach((def, i) => this._renderRow(this._footerRowOutlet, def, i));
        this.updateStickyFooterRowStyles();
    }
    /** Adds the sticky column styles for the rows according to the columns' stick states. */
    _addStickyColumnStyles(rows, rowDef) {
        const columnDefs = Array.from(rowDef.columns || []).map(columnName => {
            const columnDef = this._columnDefsByName.get(columnName);
            if (!columnDef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableUnknownColumnError(columnName);
            }
            return columnDef;
        });
        const stickyStartStates = columnDefs.map(columnDef => columnDef.sticky);
        const stickyEndStates = columnDefs.map(columnDef => columnDef.stickyEnd);
        this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this._fixedLayout || this._forceRecalculateCellWidths);
    }
    /** Gets the list of rows that have been rendered in the row outlet. */
    _getRenderedRows(rowOutlet) {
        const renderedRows = [];
        for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
            const viewRef = rowOutlet.viewContainer.get(i);
            renderedRows.push(viewRef.rootNodes[0]);
        }
        return renderedRows;
    }
    /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     */
    _getRowDefs(data, dataIndex) {
        if (this._rowDefs.length == 1) {
            return [this._rowDefs[0]];
        }
        let rowDefs = [];
        if (this.multiTemplateDataRows) {
            rowDefs = this._rowDefs.filter(def => !def.when || def.when(dataIndex, data));
        }
        else {
            let rowDef = this._rowDefs.find(def => def.when && def.when(dataIndex, data)) || this._defaultRowDef;
            if (rowDef) {
                rowDefs.push(rowDef);
            }
        }
        if (!rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableMissingMatchingRowDefError(data);
        }
        return rowDefs;
    }
    _getEmbeddedViewArgs(renderRow, index) {
        const rowDef = renderRow.rowDef;
        const context = { $implicit: renderRow.data };
        return {
            templateRef: rowDef.template,
            context,
            index,
        };
    }
    /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     */
    _renderRow(outlet, rowDef, index, context = {}) {
        // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
        const view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
        this._renderCellTemplateForItem(rowDef, context);
        return view;
    }
    _renderCellTemplateForItem(rowDef, context) {
        for (let cellTemplate of this._getCellTemplates(rowDef)) {
            if (CdkCellOutlet.mostRecentCellOutlet) {
                CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
            }
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     */
    _updateRowIndexContext() {
        const viewContainer = this._rowOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            const viewRef = viewContainer.get(renderIndex);
            const context = viewRef.context;
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            if (this.multiTemplateDataRows) {
                context.dataIndex = this._renderRows[renderIndex].dataIndex;
                context.renderIndex = renderIndex;
            }
            else {
                context.index = this._renderRows[renderIndex].dataIndex;
            }
        }
    }
    /** Gets the column definitions for the provided row def. */
    _getCellTemplates(rowDef) {
        if (!rowDef || !rowDef.columns) {
            return [];
        }
        return Array.from(rowDef.columns, columnId => {
            const column = this._columnDefsByName.get(columnId);
            if (!column && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableUnknownColumnError(columnId);
            }
            return rowDef.extractCellTemplate(column);
        });
    }
    /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */
    _applyNativeTableSections() {
        const documentFragment = this._document.createDocumentFragment();
        const sections = [
            { tag: 'thead', outlets: [this._headerRowOutlet] },
            { tag: 'tbody', outlets: [this._rowOutlet, this._noDataRowOutlet] },
            { tag: 'tfoot', outlets: [this._footerRowOutlet] },
        ];
        for (const section of sections) {
            const element = this._document.createElement(section.tag);
            element.setAttribute('role', 'rowgroup');
            for (const outlet of section.outlets) {
                element.appendChild(outlet.elementRef.nativeElement);
            }
            documentFragment.appendChild(element);
        }
        // Use a DocumentFragment so we don't hit the DOM on each iteration.
        this._elementRef.nativeElement.appendChild(documentFragment);
    }
    /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     */
    _forceRenderDataRows() {
        this._dataDiffer.diff([]);
        this._rowOutlet.viewContainer.clear();
        this.renderRows();
    }
    /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     */
    _checkStickyStates() {
        const stickyCheckReducer = (acc, d) => {
            return acc || d.hasStickyChanged();
        };
        // Note that the check needs to occur for every definition since it notifies the definition
        // that it can reset its dirty state. Using another operator like `some` may short-circuit
        // remaining definitions and leave them in an unchecked state.
        if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyHeaderRowStyles();
        }
        if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyFooterRowStyles();
        }
        if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
            this._stickyColumnStylesNeedReset = true;
            this.updateStickyColumnStyles();
        }
    }
    /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     */
    _setupStickyStyler() {
        const direction = this._dir ? this._dir.value : 'ltr';
        this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement, this._stickyPositioningListener);
        (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._onDestroy))
            .subscribe(value => {
            this._stickyStyler.direction = value;
            this.updateStickyColumnStyles();
        });
    }
    /** Filters definitions that belong to this table from a QueryList. */
    _getOwnDefs(items) {
        return items.filter(item => !item._table || item._table === this);
    }
    /** Creates or removes the no data row, depending on whether any data is being shown. */
    _updateNoDataRow() {
        const noDataRow = this._customNoDataRow || this._noDataRow;
        if (noDataRow) {
            const shouldShow = this._rowOutlet.viewContainer.length === 0;
            if (shouldShow !== this._isShowingNoDataRow) {
                const container = this._noDataRowOutlet.viewContainer;
                shouldShow ? container.createEmbeddedView(noDataRow.templateRef) : container.clear();
                this._isShowingNoDataRow = shouldShow;
            }
        }
    }
}
CdkTable.ɵfac = function CdkTable_Factory(t) { return new (t || CdkTable)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_COALESCED_STYLE_SCHEDULER, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](STICKY_POSITIONING_LISTENER, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"], 8)); };
CdkTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkTable, selectors: [["cdk-table"], ["table", "cdk-table", ""]], contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkNoDataRow, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkColumnDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkRowDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderRowDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterRowDef, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._noDataRow = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentColumnDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentRowDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentHeaderRowDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentFooterRowDefs = _t);
    } }, viewQuery: function CdkTable_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](DataRowOutlet, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](HeaderRowOutlet, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](FooterRowOutlet, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](NoDataRowOutlet, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._rowOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headerRowOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._footerRowOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._noDataRowOutlet = _t.first);
    } }, hostAttrs: [1, "cdk-table"], hostVars: 2, hostBindings: function CdkTable_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("cdk-table-fixed-layout", ctx.fixedLayout);
    } }, inputs: { trackBy: "trackBy", dataSource: "dataSource", multiTemplateDataRows: "multiTemplateDataRows", fixedLayout: "fixedLayout" }, exportAs: ["cdkTable"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            { provide: CDK_TABLE, useExisting: CdkTable },
            { provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"], useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_DisposeViewRepeaterStrategy"] },
            { provide: _COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler },
            // Prevent nested tables from seeing this table's StickyPositioningListener.
            { provide: STICKY_POSITIONING_LISTENER, useValue: null },
        ])], ngContentSelectors: _c1, decls: 6, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]], template: function CdkTable_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](5, 3);
    } }, directives: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet], styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"], encapsulation: 2 });
CdkTable.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"], args: ['role',] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"],] }] },
    { type: _CoalescedStyleScheduler, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_COALESCED_STYLE_SCHEDULER,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [STICKY_POSITIONING_LISTENER,] }] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
CdkTable.propDecorators = {
    trackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    multiTemplateDataRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    fixedLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    _rowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [DataRowOutlet, { static: true },] }],
    _headerRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [HeaderRowOutlet, { static: true },] }],
    _footerRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [FooterRowOutlet, { static: true },] }],
    _noDataRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [NoDataRowOutlet, { static: true },] }],
    _contentColumnDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkColumnDef, { descendants: true },] }],
    _contentRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkRowDef, { descendants: true },] }],
    _contentHeaderRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkHeaderRowDef, {
                    descendants: true
                },] }],
    _contentFooterRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkFooterRowDef, {
                    descendants: true
                },] }],
    _noDataRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkNoDataRow,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-table, table[cdk-table]',
                exportAs: 'cdkTable',
                template: CDK_TABLE_TEMPLATE,
                host: {
                    'class': 'cdk-table',
                    '[class.cdk-table-fixed-layout]': 'fixedLayout'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
                // The view for `MatTable` consists entirely of templates declared in other views. As they are
                // declared elsewhere, they are checked when their declaration points are checked.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                providers: [
                    { provide: CDK_TABLE, useExisting: CdkTable },
                    { provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"], useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_DisposeViewRepeaterStrategy"] },
                    { provide: _COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler },
                    // Prevent nested tables from seeing this table's StickyPositioningListener.
                    { provide: STICKY_POSITIONING_LISTENER, useValue: null },
                ],
                styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
                args: ['role']
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
            }] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"]]
            }] }, { type: _CoalescedStyleScheduler, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_COALESCED_STYLE_SCHEDULER]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [STICKY_POSITIONING_LISTENER]
            }] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { trackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], multiTemplateDataRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], fixedLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], _rowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [DataRowOutlet, { static: true }]
        }], _headerRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [HeaderRowOutlet, { static: true }]
        }], _footerRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [FooterRowOutlet, { static: true }]
        }], _noDataRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [NoDataRowOutlet, { static: true }]
        }], _contentColumnDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkColumnDef, { descendants: true }]
        }], _contentRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkRowDef, { descendants: true }]
        }], _contentHeaderRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkHeaderRowDef, {
                    descendants: true
                }]
        }], _contentFooterRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkFooterRowDef, {
                    descendants: true
                }]
        }], _noDataRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkNoDataRow]
        }] }); })();
/** Utility function that gets a merged list of the entries in an array and values of a Set. */
function mergeArrayAndSet(array, set) {
    return array.concat(Array.from(set));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */
class CdkTextColumn {
    constructor(
    // `CdkTextColumn` is always requiring a table, but we just assert it manually
    // for better error reporting.
    // tslint:disable-next-line: lightweight-tokens
    _table, _options) {
        this._table = _table;
        this._options = _options;
        /** Alignment of the cell values. */
        this.justify = 'start';
        this._options = _options || {};
    }
    /** Column name that should be used to reference this column. */
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
        // With Ivy, inputs can be initialized before static query results are
        // available. In that case, we defer the synchronization until "ngOnInit" fires.
        this._syncColumnDefName();
    }
    ngOnInit() {
        this._syncColumnDefName();
        if (this.headerText === undefined) {
            this.headerText = this._createDefaultHeaderText();
        }
        if (!this.dataAccessor) {
            this.dataAccessor =
                this._options.defaultDataAccessor || ((data, name) => data[name]);
        }
        if (this._table) {
            // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
            // since the columnDef will not pick up its content by the time the table finishes checking
            // its content and initializing the rows.
            this.columnDef.cell = this.cell;
            this.columnDef.headerCell = this.headerCell;
            this._table.addColumnDef(this.columnDef);
        }
        else if (typeof ngDevMode === 'undefined' || ngDevMode) {
            throw getTableTextColumnMissingParentTableError();
        }
    }
    ngOnDestroy() {
        if (this._table) {
            this._table.removeColumnDef(this.columnDef);
        }
    }
    /**
     * Creates a default header text. Use the options' header text transformation function if one
     * has been provided. Otherwise simply capitalize the column name.
     */
    _createDefaultHeaderText() {
        const name = this.name;
        if (!name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableTextColumnMissingNameError();
        }
        if (this._options && this._options.defaultHeaderTextTransform) {
            return this._options.defaultHeaderTextTransform(name);
        }
        return name[0].toUpperCase() + name.slice(1);
    }
    /** Synchronizes the column definition name with the text column name. */
    _syncColumnDefName() {
        if (this.columnDef) {
            this.columnDef.name = this.name;
        }
    }
}
CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) { return new (t || CdkTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTable, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](TEXT_COLUMN_OPTIONS, 8)); };
CdkTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkTextColumn, selectors: [["cdk-text-column"]], viewQuery: function CdkTextColumn_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkColumnDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkCellDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkHeaderCellDef, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.columnDef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
    } }, inputs: { justify: "justify", name: "name", headerText: "headerText", dataAccessor: "dataAccessor" }, decls: 3, vars: 0, consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]], template: function CdkTextColumn_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    } }, directives: [CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderCell, CdkCell], encapsulation: 2 });
CdkTextColumn.ctorParameters = () => [
    { type: CdkTable, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [TEXT_COLUMN_OPTIONS,] }] }
];
CdkTextColumn.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    headerText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dataAccessor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    justify: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    columnDef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [CdkColumnDef, { static: true },] }],
    cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [CdkCellDef, { static: true },] }],
    headerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [CdkHeaderCellDef, { static: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTextColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-text-column',
                template: `
    <ng-container cdkColumnDef>
      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td cdk-cell *cdkCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                // Change detection is intentionally not set to OnPush. This component's template will be provided
                // to the table to be inserted into its view. This is problematic when change detection runs since
                // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                // mean's the template in the table's view will not have the updated value (and in fact will cause
                // an ExpressionChangedAfterItHasBeenCheckedError).
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default
            }]
    }], function () { return [{ type: CdkTable, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [TEXT_COLUMN_OPTIONS]
            }] }]; }, { justify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], headerText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], dataAccessor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], columnDef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkColumnDef, { static: true }]
        }], cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkCellDef, { static: true }]
        }], headerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkHeaderCellDef, { static: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const EXPORTED_DECLARATIONS = [
    CdkTable,
    CdkRowDef,
    CdkCellDef,
    CdkCellOutlet,
    CdkHeaderCellDef,
    CdkFooterCellDef,
    CdkColumnDef,
    CdkCell,
    CdkRow,
    CdkHeaderCell,
    CdkFooterCell,
    CdkHeaderRow,
    CdkHeaderRowDef,
    CdkFooterRow,
    CdkFooterRowDef,
    DataRowOutlet,
    HeaderRowOutlet,
    FooterRowOutlet,
    CdkTextColumn,
    CdkNoDataRow,
    NoDataRowOutlet,
];
class CdkTableModule {
}
CdkTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CdkTableModule });
CdkTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function CdkTableModule_Factory(t) { return new (t || CdkTableModule)(); }, imports: [[_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CdkTableModule, { declarations: function () { return [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet]; }, imports: function () { return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]; }, exports: function () { return [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                exports: EXPORTED_DECLARATIONS,
                declarations: EXPORTED_DECLARATIONS,
                imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=table.js.map

/***/ }),

/***/ "JUyF":
/*!************************************************************************!*\
  !*** ./node_modules/highcharts-angular/fesm2015/highcharts-angular.js ***!
  \************************************************************************/
/*! exports provided: HighchartsChartComponent, HighchartsChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighchartsChartComponent", function() { return HighchartsChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighchartsChartModule", function() { return HighchartsChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);




class HighchartsChartComponent {
    constructor(el, _zone // #75
    ) {
        this.el = el;
        this._zone = _zone;
        this.updateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.chartInstance = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // #26
    }
    ngOnChanges(changes) {
        const update = changes.update && changes.update.currentValue;
        if (changes.options || update) {
            this.wrappedUpdateOrCreateChart();
            if (update) {
                this.updateChange.emit(false); // clear the flag after update
            }
        }
    }
    wrappedUpdateOrCreateChart() {
        if (this.runOutsideAngular) {
            this._zone.runOutsideAngular(() => {
                this.updateOrCreateChart();
            });
        }
        else {
            this.updateOrCreateChart();
        }
    }
    updateOrCreateChart() {
        if (this.chart && this.chart.update) {
            this.chart.update(this.options, true, this.oneToOne || false);
        }
        else {
            this.chart = this.Highcharts[this.constructorType || 'chart'](this.el.nativeElement, this.options, this.callbackFunction || null);
            // emit chart instance on init
            this.chartInstance.emit(this.chart);
        }
    }
    ngOnDestroy() {
        if (this.chart) { // #56
            this.chart.destroy();
            this.chart = null;
        }
    }
}
HighchartsChartComponent.ɵfac = function HighchartsChartComponent_Factory(t) { return new (t || HighchartsChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
HighchartsChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HighchartsChartComponent, selectors: [["highcharts-chart"]], inputs: { Highcharts: "Highcharts", constructorType: "constructorType", callbackFunction: "callbackFunction", oneToOne: "oneToOne", runOutsideAngular: "runOutsideAngular", options: "options", update: "update" }, outputs: { updateChange: "updateChange", chartInstance: "chartInstance" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 0, vars: 0, template: function HighchartsChartComponent_Template(rf, ctx) { }, encapsulation: 2 });
HighchartsChartComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
HighchartsChartComponent.propDecorators = {
    Highcharts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    constructorType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    callbackFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    oneToOne: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    runOutsideAngular: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    updateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    chartInstance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighchartsChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'highcharts-chart',
                template: ''
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { updateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], chartInstance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], Highcharts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], constructorType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], callbackFunction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], oneToOne: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], runOutsideAngular: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class HighchartsChartModule {
}
HighchartsChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HighchartsChartModule });
HighchartsChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HighchartsChartModule_Factory(t) { return new (t || HighchartsChartModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HighchartsChartModule, { declarations: [HighchartsChartComponent], exports: [HighchartsChartComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighchartsChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [HighchartsChartComponent],
                exports: [HighchartsChartComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of highcharts-angular
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=highcharts-angular.js.map

/***/ }),

/***/ "OaSA":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/table.js ***!
  \**********************************************************/
/*! exports provided: MatCell, MatCellDef, MatColumnDef, MatFooterCell, MatFooterCellDef, MatFooterRow, MatFooterRowDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatNoDataRow, MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule, MatTextColumn, _MatTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCell", function() { return MatCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCellDef", function() { return MatCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatColumnDef", function() { return MatColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterCell", function() { return MatFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterCellDef", function() { return MatFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterRow", function() { return MatFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterRowDef", function() { return MatFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCell", function() { return MatHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCellDef", function() { return MatHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRow", function() { return MatHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRowDef", function() { return MatHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNoDataRow", function() { return MatNoDataRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRow", function() { return MatRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRowDef", function() { return MatRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTable", function() { return MatTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableDataSource", function() { return MatTableDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableModule", function() { return MatTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTextColumn", function() { return MatTextColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTableDataSource", function() { return _MatTableDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "GXRp");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Wrapper for the CdkTable with Material design styles.
 */



const _c0 = [[["caption"]], [["colgroup"], ["col"]]];
const _c1 = ["caption", "colgroup, col"];
function MatTextColumn_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
} }
function MatTextColumn_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r1.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
} }
class MatTable extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"] {
    constructor() {
        super(...arguments);
        /** Overrides the sticky CSS class set by the `CdkTable`. */
        this.stickyCssClass = 'mat-table-sticky';
        /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */
        this.needsPositionStickyOnElement = false;
    }
}
MatTable.ɵfac = function MatTable_Factory(t) { return ɵMatTable_BaseFactory(t || MatTable); };
MatTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatTable, selectors: [["mat-table"], ["table", "mat-table", ""]], hostAttrs: [1, "mat-table"], hostVars: 2, hostBindings: function MatTable_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-table-fixed-layout", ctx.fixedLayout);
    } }, exportAs: ["matTable"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
            //  is only included in the build if used.
            { provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"], useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_DisposeViewRepeaterStrategy"] },
            { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"], useExisting: MatTable },
            { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE"], useExisting: MatTable },
            { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["_COALESCED_STYLE_SCHEDULER"], useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["_CoalescedStyleScheduler"] },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 6, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]], template: function MatTable_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 3);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["HeaderRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["NoDataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["FooterRowOutlet"]], styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky !important;position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}\n"], encapsulation: 2 });
const ɵMatTable_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTable);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-table, table[mat-table]',
                exportAs: 'matTable',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE_TEMPLATE"],
                host: {
                    'class': 'mat-table',
                    '[class.mat-table-fixed-layout]': 'fixedLayout'
                },
                providers: [
                    // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
                    //  is only included in the build if used.
                    { provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"], useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_DisposeViewRepeaterStrategy"] },
                    { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"], useExisting: MatTable },
                    { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE"], useExisting: MatTable },
                    { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["_COALESCED_STYLE_SCHEDULER"], useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["_CoalescedStyleScheduler"] },
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky !important;position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}\n"]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Cell definition for the mat-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
class MatCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"] {
}
MatCellDef.ɵfac = function MatCellDef_Factory(t) { return ɵMatCellDef_BaseFactory(t || MatCellDef); };
MatCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCellDef, selectors: [["", "matCellDef", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"], useExisting: MatCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatCellDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCellDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matCellDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"], useExisting: MatCellDef }]
            }]
    }], null, null); })();
/**
 * Header cell definition for the mat-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
class MatHeaderCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"] {
}
MatHeaderCellDef.ɵfac = function MatHeaderCellDef_Factory(t) { return ɵMatHeaderCellDef_BaseFactory(t || MatHeaderCellDef); };
MatHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHeaderCellDef, selectors: [["", "matHeaderCellDef", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"], useExisting: MatHeaderCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatHeaderCellDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCellDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matHeaderCellDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"], useExisting: MatHeaderCellDef }]
            }]
    }], null, null); })();
/**
 * Footer cell definition for the mat-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
class MatFooterCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"] {
}
MatFooterCellDef.ɵfac = function MatFooterCellDef_Factory(t) { return ɵMatFooterCellDef_BaseFactory(t || MatFooterCellDef); };
MatFooterCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatFooterCellDef, selectors: [["", "matFooterCellDef", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"], useExisting: MatFooterCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatFooterCellDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCellDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matFooterCellDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"], useExisting: MatFooterCellDef }]
            }]
    }], null, null); })();
/**
 * Column definition for the mat-table.
 * Defines a set of cells available for a table column.
 */
class MatColumnDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] {
    /** Unique name for this column. */
    get name() { return this._name; }
    set name(name) { this._setNameInput(name); }
    /**
     * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
     * In the future, this will only add "mat-column-" and columnCssClassName
     * will change from type string[] to string.
     * @docs-private
     */
    _updateColumnCssClassName() {
        super._updateColumnCssClassName();
        this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
    }
}
MatColumnDef.ɵfac = function MatColumnDef_Factory(t) { return ɵMatColumnDef_BaseFactory(t || MatColumnDef); };
MatColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatColumnDef, selectors: [["", "matColumnDef", ""]], inputs: { sticky: "sticky", name: ["matColumnDef", "name"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"], useExisting: MatColumnDef },
            { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
MatColumnDef.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matColumnDef',] }]
};
const ɵMatColumnDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatColumnDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatColumnDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matColumnDef]',
                inputs: ['sticky'],
                providers: [
                    { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"], useExisting: MatColumnDef },
                    { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
                ]
            }]
    }], null, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matColumnDef']
        }] }); })();
/** Header cell template container that adds the right classes and role. */
class MatHeaderCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCell"] {
}
MatHeaderCell.ɵfac = function MatHeaderCell_Factory(t) { return ɵMatHeaderCell_BaseFactory(t || MatHeaderCell); };
MatHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHeaderCell, selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "mat-header-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatHeaderCell_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCell);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-header-cell, th[mat-header-cell]',
                host: {
                    'class': 'mat-header-cell',
                    'role': 'columnheader'
                }
            }]
    }], null, null); })();
/** Footer cell template container that adds the right classes and role. */
class MatFooterCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCell"] {
}
MatFooterCell.ɵfac = function MatFooterCell_Factory(t) { return ɵMatFooterCell_BaseFactory(t || MatFooterCell); };
MatFooterCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatFooterCell, selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatFooterCell_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCell);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-footer-cell, td[mat-footer-cell]',
                host: {
                    'class': 'mat-footer-cell',
                    'role': 'gridcell'
                }
            }]
    }], null, null); })();
/** Cell template container that adds the right classes and role. */
class MatCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCell"] {
}
MatCell.ɵfac = function MatCell_Factory(t) { return ɵMatCell_BaseFactory(t || MatCell); };
MatCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCell, selectors: [["mat-cell"], ["td", "mat-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatCell_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCell);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-cell, td[mat-cell]',
                host: {
                    'class': 'mat-cell',
                    'role': 'gridcell'
                }
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Header row definition for the mat-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
class MatHeaderRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"] {
}
MatHeaderRowDef.ɵfac = function MatHeaderRowDef_Factory(t) { return ɵMatHeaderRowDef_BaseFactory(t || MatHeaderRowDef); };
MatHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHeaderRowDef, selectors: [["", "matHeaderRowDef", ""]], inputs: { columns: ["matHeaderRowDef", "columns"], sticky: ["matHeaderRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"], useExisting: MatHeaderRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatHeaderRowDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRowDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matHeaderRowDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"], useExisting: MatHeaderRowDef }],
                inputs: ['columns: matHeaderRowDef', 'sticky: matHeaderRowDefSticky']
            }]
    }], null, null); })();
/**
 * Footer row definition for the mat-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
class MatFooterRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"] {
}
MatFooterRowDef.ɵfac = function MatFooterRowDef_Factory(t) { return ɵMatFooterRowDef_BaseFactory(t || MatFooterRowDef); };
MatFooterRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatFooterRowDef, selectors: [["", "matFooterRowDef", ""]], inputs: { columns: ["matFooterRowDef", "columns"], sticky: ["matFooterRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"], useExisting: MatFooterRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatFooterRowDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRowDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matFooterRowDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"], useExisting: MatFooterRowDef }],
                inputs: ['columns: matFooterRowDef', 'sticky: matFooterRowDefSticky']
            }]
    }], null, null); })();
/**
 * Data row definition for the mat-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
class MatRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"] {
}
MatRowDef.ɵfac = function MatRowDef_Factory(t) { return ɵMatRowDef_BaseFactory(t || MatRowDef); };
MatRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatRowDef, selectors: [["", "matRowDef", ""]], inputs: { columns: ["matRowDefColumns", "columns"], when: ["matRowDefWhen", "when"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"], useExisting: MatRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatRowDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRowDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matRowDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"], useExisting: MatRowDef }],
                inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen']
            }]
    }], null, null); })();
/** Header template container that contains the cell outlet. Adds the right class and role. */
class MatHeaderRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"] {
}
MatHeaderRow.ɵfac = function MatHeaderRow_Factory(t) { return ɵMatHeaderRow_BaseFactory(t || MatHeaderRow); };
MatHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatHeaderRow, selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]], hostAttrs: ["role", "row", 1, "mat-header-row"], exportAs: ["matHeaderRow"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"], useExisting: MatHeaderRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatHeaderRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], encapsulation: 2 });
const ɵMatHeaderRow_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRow);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-header-row, tr[mat-header-row]',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
                host: {
                    'class': 'mat-header-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                exportAs: 'matHeaderRow',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"], useExisting: MatHeaderRow }]
            }]
    }], null, null); })();
/** Footer template container that contains the cell outlet. Adds the right class and role. */
class MatFooterRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"] {
}
MatFooterRow.ɵfac = function MatFooterRow_Factory(t) { return ɵMatFooterRow_BaseFactory(t || MatFooterRow); };
MatFooterRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatFooterRow, selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]], hostAttrs: ["role", "row", 1, "mat-footer-row"], exportAs: ["matFooterRow"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"], useExisting: MatFooterRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatFooterRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], encapsulation: 2 });
const ɵMatFooterRow_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRow);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-footer-row, tr[mat-footer-row]',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
                host: {
                    'class': 'mat-footer-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                exportAs: 'matFooterRow',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"], useExisting: MatFooterRow }]
            }]
    }], null, null); })();
/** Data row template container that contains the cell outlet. Adds the right class and role. */
class MatRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"] {
}
MatRow.ɵfac = function MatRow_Factory(t) { return ɵMatRow_BaseFactory(t || MatRow); };
MatRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatRow, selectors: [["mat-row"], ["tr", "mat-row", ""]], hostAttrs: ["role", "row", 1, "mat-row"], exportAs: ["matRow"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"], useExisting: MatRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], encapsulation: 2 });
const ɵMatRow_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRow);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-row, tr[mat-row]',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
                host: {
                    'class': 'mat-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                exportAs: 'matRow',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"], useExisting: MatRow }]
            }]
    }], null, null); })();
/** Row that can be used to display a message when no data is shown in the table. */
class MatNoDataRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"] {
}
MatNoDataRow.ɵfac = function MatNoDataRow_Factory(t) { return ɵMatNoDataRow_BaseFactory(t || MatNoDataRow); };
MatNoDataRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatNoDataRow, selectors: [["ng-template", "matNoDataRow", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"], useExisting: MatNoDataRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatNoDataRow_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatNoDataRow);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatNoDataRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'ng-template[matNoDataRow]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"], useExisting: MatNoDataRow }]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */
class MatTextColumn extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTextColumn"] {
}
MatTextColumn.ɵfac = function MatTextColumn_Factory(t) { return ɵMatTextColumn_BaseFactory(t || MatTextColumn); };
MatTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatTextColumn, selectors: [["mat-text-column"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 0, consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]], template: function MatTextColumn_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTextColumn_th_1_Template, 2, 3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } }, directives: [MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderCell, MatCell], encapsulation: 2 });
const ɵMatTextColumn_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTextColumn);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTextColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-text-column',
                template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                // Change detection is intentionally not set to OnPush. This component's template will be provided
                // to the table to be inserted into its view. This is problematic when change detection runs since
                // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                // mean's the template in the table's view will not have the updated value (and in fact will cause
                // an ExpressionChangedAfterItHasBeenCheckedError).
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const EXPORTED_DECLARATIONS = [
    // Table
    MatTable,
    // Template defs
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatFooterCellDef,
    MatFooterRowDef,
    // Cell directives
    MatHeaderCell,
    MatCell,
    MatFooterCell,
    // Row directives
    MatHeaderRow,
    MatRow,
    MatFooterRow,
    MatNoDataRow,
    MatTextColumn,
];
class MatTableModule {
}
MatTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatTableModule });
MatTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatTableModule_Factory(t) { return new (t || MatTableModule)(); }, imports: [[
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatTableModule, { declarations: function () { return [MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn]; }, imports: function () { return [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]; }, exports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                ],
                exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], EXPORTED_DECLARATIONS],
                declarations: EXPORTED_DECLARATIONS
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
 * flaky browser support and the value not being defined in Closure's typings.
 */
const MAX_SAFE_INTEGER = 9007199254740991;
/** Shared base class with MDC-based implementation. */
class _MatTableDataSource extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataSource"] {
    constructor(initialData = []) {
        super();
        /** Stream emitting render data to the table (depends on ordered data changes). */
        this._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        /** Stream that emits when a new filter string is set on the data source. */
        this._filter = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        /** Used to react to internal changes of the paginator that are made by the data source itself. */
        this._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Subscription to the changes that should trigger an update to the table's rendered rows, such
         * as filtering, sorting, pagination, or base data changes.
         */
        this._renderChangesSubscription = null;
        /**
         * Data accessor function that is used for accessing data properties for sorting through
         * the default sortData function.
         * This default function assumes that the sort header IDs (which defaults to the column name)
         * matches the data's properties (e.g. column Xyz represents data['Xyz']).
         * May be set to a custom function for different behavior.
         * @param data Data object that is being accessed.
         * @param sortHeaderId The name of the column that represents the data.
         */
        this.sortingDataAccessor = (data, sortHeaderId) => {
            const value = data[sortHeaderId];
            if (Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["_isNumberValue"])(value)) {
                const numberValue = Number(value);
                // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
                // leave them as strings. For more info: https://goo.gl/y5vbSg
                return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
            }
            return value;
        };
        /**
         * Gets a sorted copy of the data array based on the state of the MatSort. Called
         * after changes are made to the filtered data or when sort changes are emitted from MatSort.
         * By default, the function retrieves the active sort and its direction and compares data
         * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
         * of data ordering.
         * @param data The array of data that should be sorted.
         * @param sort The connected MatSort that holds the current sort state.
         */
        this.sortData = (data, sort) => {
            const active = sort.active;
            const direction = sort.direction;
            if (!active || direction == '') {
                return data;
            }
            return data.sort((a, b) => {
                let valueA = this.sortingDataAccessor(a, active);
                let valueB = this.sortingDataAccessor(b, active);
                // If there are data in the column that can be converted to a number,
                // it must be ensured that the rest of the data
                // is of the same type so as not to order incorrectly.
                const valueAType = typeof valueA;
                const valueBType = typeof valueB;
                if (valueAType !== valueBType) {
                    if (valueAType === 'number') {
                        valueA += '';
                    }
                    if (valueBType === 'number') {
                        valueB += '';
                    }
                }
                // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
                // one value exists while the other doesn't. In this case, existing value should come last.
                // This avoids inconsistent results when comparing values to undefined/null.
                // If neither value exists, return 0 (equal).
                let comparatorResult = 0;
                if (valueA != null && valueB != null) {
                    // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
                    if (valueA > valueB) {
                        comparatorResult = 1;
                    }
                    else if (valueA < valueB) {
                        comparatorResult = -1;
                    }
                }
                else if (valueA != null) {
                    comparatorResult = 1;
                }
                else if (valueB != null) {
                    comparatorResult = -1;
                }
                return comparatorResult * (direction == 'asc' ? 1 : -1);
            });
        };
        /**
         * Checks if a data object matches the data source's filter string. By default, each data object
         * is converted to a string of its properties and returns true if the filter has
         * at least one occurrence in that string. By default, the filter string has its whitespace
         * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
         * filter matching.
         * @param data Data object used to check against the filter.
         * @param filter Filter string that has been set on the data source.
         * @returns Whether the filter matches against the data
         */
        this.filterPredicate = (data, filter) => {
            // Transform the data into a lowercase string of all property values.
            const dataStr = Object.keys(data).reduce((currentTerm, key) => {
                // Use an obscure Unicode character to delimit the words in the concatenated string.
                // This avoids matches where the values of two columns combined will match the user's query
                // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
                // that has a very low chance of being typed in by somebody in a text field. This one in
                // particular is "White up-pointing triangle with dot" from
                // https://en.wikipedia.org/wiki/List_of_Unicode_characters
                return currentTerm + data[key] + '◬';
            }, '').toLowerCase();
            // Transform the filter by converting it to lowercase and removing whitespace.
            const transformedFilter = filter.trim().toLowerCase();
            return dataStr.indexOf(transformedFilter) != -1;
        };
        this._data = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](initialData);
        this._updateChangeSubscription();
    }
    /** Array of data that should be rendered by the table, where each object represents one row. */
    get data() { return this._data.value; }
    set data(data) { this._data.next(data); }
    /**
     * Filter term that should be used to filter out objects from the data array. To override how
     * data objects match to this filter string, provide a custom function for filterPredicate.
     */
    get filter() { return this._filter.value; }
    set filter(filter) { this._filter.next(filter); }
    /**
     * Instance of the MatSort directive used by the table to control its sorting. Sort changes
     * emitted by the MatSort will trigger an update to the table's rendered data.
     */
    get sort() { return this._sort; }
    set sort(sort) {
        this._sort = sort;
        this._updateChangeSubscription();
    }
    /**
     * Instance of the MatPaginator component used by the table to control what page of the data is
     * displayed. Page changes emitted by the MatPaginator will trigger an update to the
     * table's rendered data.
     *
     * Note that the data source uses the paginator's properties to calculate which page of data
     * should be displayed. If the paginator receives its properties as template inputs,
     * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
     * initialized before assigning it to this data source.
     */
    get paginator() { return this._paginator; }
    set paginator(paginator) {
        this._paginator = paginator;
        this._updateChangeSubscription();
    }
    /**
     * Subscribe to changes that should trigger an update to the table's rendered rows. When the
     * changes occur, process the current state of the filter, sort, and pagination along with
     * the provided base data and send it to the table for rendering.
     */
    _updateChangeSubscription() {
        var _a;
        // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
        // The events should emit whenever the component emits a change or initializes, or if no
        // component is provided, a stream with just a null event should be provided.
        // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
        // pipeline can progress to the next step. Note that the value from these streams are not used,
        // they purely act as a signal to progress in the pipeline.
        const sortChange = this._sort ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._sort.sortChange, this._sort.initialized) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        const pageChange = this._paginator ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._paginator.page, this._internalPageChanges, this._paginator.initialized) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        const dataStream = this._data;
        // Watch for base data or filter changes to provide a filtered set of data.
        const filteredData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([dataStream, this._filter])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([data]) => this._filterData(data)));
        // Watch for filtered data or sort changes to provide an ordered set of data.
        const orderedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([filteredData, sortChange])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([data]) => this._orderData(data)));
        // Watch for ordered data or page changes to provide a paged set of data.
        const paginatedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([orderedData, pageChange])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([data]) => this._pageData(data)));
        // Watched for paged data changes and send the result to the table to render.
        (_a = this._renderChangesSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this._renderChangesSubscription = paginatedData.subscribe(data => this._renderData.next(data));
    }
    /**
     * Returns a filtered data array where each filter object contains the filter string within
     * the result of the filterTermAccessor function. If no filter is set, returns the data array
     * as provided.
     */
    _filterData(data) {
        // If there is a filter string, filter out data that does not contain it.
        // Each data object is converted to a string using the function defined by filterTermAccessor.
        // May be overridden for customization.
        this.filteredData = (this.filter == null || this.filter === '') ? data :
            data.filter(obj => this.filterPredicate(obj, this.filter));
        if (this.paginator) {
            this._updatePaginator(this.filteredData.length);
        }
        return this.filteredData;
    }
    /**
     * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
     * data array as provided. Uses the default data accessor for data lookup, unless a
     * sortDataAccessor function is defined.
     */
    _orderData(data) {
        // If there is no active sort or direction, return the data without trying to sort.
        if (!this.sort) {
            return data;
        }
        return this.sortData(data.slice(), this.sort);
    }
    /**
     * Returns a paged slice of the provided data array according to the provided MatPaginator's page
     * index and length. If there is no paginator provided, returns the data array as provided.
     */
    _pageData(data) {
        if (!this.paginator) {
            return data;
        }
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.slice(startIndex, startIndex + this.paginator.pageSize);
    }
    /**
     * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
     * index does not exceed the paginator's last page. Values are changed in a resolved promise to
     * guard against making property changes within a round of change detection.
     */
    _updatePaginator(filteredDataLength) {
        Promise.resolve().then(() => {
            const paginator = this.paginator;
            if (!paginator) {
                return;
            }
            paginator.length = filteredDataLength;
            // If the page index is set beyond the page, reduce it to the last page.
            if (paginator.pageIndex > 0) {
                const lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
                const newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);
                if (newPageIndex !== paginator.pageIndex) {
                    paginator.pageIndex = newPageIndex;
                    // Since the paginator only emits after user-generated changes,
                    // we need our own stream so we know to should re-render the data.
                    this._internalPageChanges.next();
                }
            }
        });
    }
    /**
     * Used by the MatTable. Called when it connects to the data source.
     * @docs-private
     */
    connect() {
        if (!this._renderChangesSubscription) {
            this._updateChangeSubscription();
        }
        return this._renderData;
    }
    /**
     * Used by the MatTable. Called when it disconnects from the data source.
     * @docs-private
     */
    disconnect() {
        var _a;
        (_a = this._renderChangesSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this._renderChangesSubscription = null;
    }
}
/**
 * Data source that accepts a client-side data array and includes native support of filtering,
 * sorting (using MatSort), and pagination (using MatPaginator).
 *
 * Allows for sort customization by overriding sortingDataAccessor, which defines how data
 * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
 * which defines how row data is converted to a string for filter matching.
 *
 * **Note:** This class is meant to be a simple data source to help you get started. As such
 * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
 * interactions. If your app needs to support more advanced use cases, consider implementing your
 * own `DataSource`.
 */
class MatTableDataSource extends _MatTableDataSource {
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=table.js.map

/***/ }),

/***/ "SqCe":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/list.js ***!
  \*********************************************************/
/*! exports provided: MAT_LIST, MAT_NAV_LIST, MAT_SELECTION_LIST_VALUE_ACCESSOR, MatList, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListItem, MatListModule, MatListOption, MatListSubheaderCssMatStyler, MatNavList, MatSelectionList, MatSelectionListChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_LIST", function() { return MAT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_NAV_LIST", function() { return MAT_NAV_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECTION_LIST_VALUE_ACCESSOR", function() { return MAT_SELECTION_LIST_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatList", function() { return MatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatListAvatarCssMatStyler", function() { return MatListAvatarCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatListIconCssMatStyler", function() { return MatListIconCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatListItem", function() { return MatListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatListModule", function() { return MatListModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatListOption", function() { return MatListOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatListSubheaderCssMatStyler", function() { return MatListSubheaderCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNavList", function() { return MatNavList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectionList", function() { return MatSelectionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectionListChange", function() { return MatSelectionListChange; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatList.
/** @docs-private */





const _c0 = ["*"];
const _c1 = ".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n";
const _c2 = [[["", "mat-list-avatar", ""], ["", "mat-list-icon", ""], ["", "matListAvatar", ""], ["", "matListIcon", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
const _c3 = ["[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]", "[mat-line], [matLine]", "*"];
const _c4 = ["text"];
function MatListOption_mat_pseudo_checkbox_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-pseudo-checkbox", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
} }
const _c5 = ["*", [["", "mat-list-avatar", ""], ["", "mat-list-icon", ""], ["", "matListAvatar", ""], ["", "matListIcon", ""]]];
const _c6 = ["*", "[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]"];
class MatListBase {
}
const _MatListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatListBase));
// Boilerplate for applying mixins to MatListItem.
/** @docs-private */
class MatListItemBase {
}
const _MatListItemMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatListItemBase);
/**
 * Injection token that can be used to inject instances of `MatList`. It serves as
 * alternative token to the actual `MatList` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatList');
/**
 * Injection token that can be used to inject instances of `MatNavList`. It serves as
 * alternative token to the actual `MatNavList` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_NAV_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatNavList');
class MatNavList extends _MatListMixinBase {
    constructor() {
        super(...arguments);
        /** Emits when the state of the list changes. */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnChanges() {
        this._stateChanges.next();
    }
    ngOnDestroy() {
        this._stateChanges.complete();
    }
}
MatNavList.ɵfac = function MatNavList_Factory(t) { return ɵMatNavList_BaseFactory(t || MatNavList); };
MatNavList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatNavList, selectors: [["mat-nav-list"]], hostAttrs: ["role", "navigation", 1, "mat-nav-list", "mat-list-base"], inputs: { disableRipple: "disableRipple", disabled: "disabled" }, exportAs: ["matNavList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: MAT_NAV_LIST, useExisting: MatNavList }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatNavList_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, styles: [_c1], encapsulation: 2, changeDetection: 0 });
const ɵMatNavList_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatNavList);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatNavList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mat-nav-list',
                exportAs: 'matNavList',
                host: {
                    'role': 'navigation',
                    'class': 'mat-nav-list mat-list-base'
                },
                template: "<ng-content></ng-content>\n\n",
                inputs: ['disableRipple', 'disabled'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [{ provide: MAT_NAV_LIST, useExisting: MatNavList }],
                styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n"]
            }]
    }], null, null); })();
class MatList extends _MatListMixinBase {
    constructor(_elementRef) {
        super();
        this._elementRef = _elementRef;
        /** Emits when the state of the list changes. */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        if (this._getListType() === 'action-list') {
            _elementRef.nativeElement.classList.add('mat-action-list');
        }
    }
    _getListType() {
        const nodeName = this._elementRef.nativeElement.nodeName.toLowerCase();
        if (nodeName === 'mat-list') {
            return 'list';
        }
        if (nodeName === 'mat-action-list') {
            return 'action-list';
        }
        return null;
    }
    ngOnChanges() {
        this._stateChanges.next();
    }
    ngOnDestroy() {
        this._stateChanges.complete();
    }
}
MatList.ɵfac = function MatList_Factory(t) { return new (t || MatList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
MatList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatList, selectors: [["mat-list"], ["mat-action-list"]], hostAttrs: [1, "mat-list", "mat-list-base"], inputs: { disableRipple: "disableRipple", disabled: "disabled" }, exportAs: ["matList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: MAT_LIST, useExisting: MatList }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatList_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, styles: [_c1], encapsulation: 2, changeDetection: 0 });
MatList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mat-list, mat-action-list',
                exportAs: 'matList',
                template: "<ng-content></ng-content>\n\n",
                host: {
                    'class': 'mat-list mat-list-base'
                },
                inputs: ['disableRipple', 'disabled'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [{ provide: MAT_LIST, useExisting: MatList }],
                styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, null); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatListAvatarCssMatStyler {
}
MatListAvatarCssMatStyler.ɵfac = function MatListAvatarCssMatStyler_Factory(t) { return new (t || MatListAvatarCssMatStyler)(); };
MatListAvatarCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatListAvatarCssMatStyler, selectors: [["", "mat-list-avatar", ""], ["", "matListAvatar", ""]], hostAttrs: [1, "mat-list-avatar"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListAvatarCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[mat-list-avatar], [matListAvatar]',
                host: { 'class': 'mat-list-avatar' }
            }]
    }], null, null); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatListIconCssMatStyler {
}
MatListIconCssMatStyler.ɵfac = function MatListIconCssMatStyler_Factory(t) { return new (t || MatListIconCssMatStyler)(); };
MatListIconCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatListIconCssMatStyler, selectors: [["", "mat-list-icon", ""], ["", "matListIcon", ""]], hostAttrs: [1, "mat-list-icon"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListIconCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[mat-list-icon], [matListIcon]',
                host: { 'class': 'mat-list-icon' }
            }]
    }], null, null); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatListSubheaderCssMatStyler {
}
MatListSubheaderCssMatStyler.ɵfac = function MatListSubheaderCssMatStyler_Factory(t) { return new (t || MatListSubheaderCssMatStyler)(); };
MatListSubheaderCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatListSubheaderCssMatStyler, selectors: [["", "mat-subheader", ""], ["", "matSubheader", ""]], hostAttrs: [1, "mat-subheader"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListSubheaderCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[mat-subheader], [matSubheader]',
                host: { 'class': 'mat-subheader' }
            }]
    }], null, null); })();
/** An item within a Material Design list. */
class MatListItem extends _MatListItemMixinBase {
    constructor(_element, _changeDetectorRef, navList, list) {
        super();
        this._element = _element;
        this._isInteractiveList = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._disabled = false;
        this._isInteractiveList = !!(navList || (list && list._getListType() === 'action-list'));
        this._list = navList || list;
        // If no type attribute is specified for <button>, set it to "button".
        // If a type attribute is already specified, do nothing.
        const element = this._getHostElement();
        if (element.nodeName.toLowerCase() === 'button' && !element.hasAttribute('type')) {
            element.setAttribute('type', 'button');
        }
        if (this._list) {
            // React to changes in the state of the parent list since
            // some of the item's properties depend on it (e.g. `disableRipple`).
            this._list._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(() => {
                _changeDetectorRef.markForCheck();
            });
        }
    }
    /** Whether the option is disabled. */
    get disabled() { return this._disabled || !!(this._list && this._list.disabled); }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    ngAfterContentInit() {
        Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["setLines"])(this._lines, this._element);
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** Whether this list item should show a ripple effect when clicked. */
    _isRippleDisabled() {
        return !this._isInteractiveList || this.disableRipple ||
            !!(this._list && this._list.disableRipple);
    }
    /** Retrieves the DOM element of the component host. */
    _getHostElement() {
        return this._element.nativeElement;
    }
}
MatListItem.ɵfac = function MatListItem_Factory(t) { return new (t || MatListItem)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_NAV_LIST, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_LIST, 8)); };
MatListItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatListItem, selectors: [["mat-list-item"], ["a", "mat-list-item", ""], ["button", "mat-list-item", ""]], contentQueries: function MatListItem_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListAvatarCssMatStyler, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListIconCssMatStyler, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._avatar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._icon = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._lines = _t);
    } }, hostAttrs: [1, "mat-list-item", "mat-focus-indicator"], hostVars: 6, hostBindings: function MatListItem_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-list-item-disabled", ctx.disabled)("mat-list-item-avatar", ctx._avatar || ctx._icon)("mat-list-item-with-avatar", ctx._avatar || ctx._icon);
    } }, inputs: { disableRipple: "disableRipple", disabled: "disabled" }, exportAs: ["matListItem"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c3, decls: 6, vars: 2, consts: [[1, "mat-list-item-content"], ["mat-ripple", "", 1, "mat-list-item-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-list-text"]], template: function MatListItem_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx._isRippleDisabled());
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"]], encapsulation: 2, changeDetection: 0 });
MatListItem.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: MatNavList, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_NAV_LIST,] }] },
    { type: MatList, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_LIST,] }] }
];
MatListItem.propDecorators = {
    _lines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], { descendants: true },] }],
    _avatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MatListAvatarCssMatStyler,] }],
    _icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MatListIconCssMatStyler,] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mat-list-item, a[mat-list-item], button[mat-list-item]',
                exportAs: 'matListItem',
                host: {
                    'class': 'mat-list-item mat-focus-indicator',
                    '[class.mat-list-item-disabled]': 'disabled',
                    // @breaking-change 8.0.0 Remove `mat-list-item-avatar` in favor of `mat-list-item-with-avatar`.
                    '[class.mat-list-item-avatar]': '_avatar || _icon',
                    '[class.mat-list-item-with-avatar]': '_avatar || _icon'
                },
                inputs: ['disableRipple'],
                template: "<div class=\"mat-list-item-content\">\n  <div class=\"mat-list-item-ripple\" mat-ripple\n       [matRippleTrigger]=\"_getHostElement()\"\n       [matRippleDisabled]=\"_isRippleDisabled()\">\n  </div>\n\n  <ng-content select=\"[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]\">\n  </ng-content>\n\n  <div class=\"mat-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n\n  <ng-content></ng-content>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: MatNavList, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [MAT_NAV_LIST]
            }] }, { type: MatList, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [MAT_LIST]
            }] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], _lines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], { descendants: true }]
        }], _avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatListAvatarCssMatStyler]
        }], _icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatListIconCssMatStyler]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatSelectionListBase {
}
const _MatSelectionListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatSelectionListBase);
class MatListOptionBase {
}
const _MatListOptionMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatListOptionBase);
/** @docs-private */
const MAT_SELECTION_LIST_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MatSelectionList),
    multi: true
};
/** Change event that is being fired whenever the selected state of an option changes. */
class MatSelectionListChange {
    constructor(
    /** Reference to the selection list that emitted the event. */
    source, 
    /**
     * Reference to the option that has been changed.
     * @deprecated Use `options` instead, because some events may change more than one option.
     * @breaking-change 12.0.0
     */
    option, 
    /** Reference to the options that have been changed. */
    options) {
        this.source = source;
        this.option = option;
        this.options = options;
    }
}
/**
 * Component for list-options of selection-list. Each list-option can automatically
 * generate a checkbox and can put current item into the selectionModel of selection-list
 * if the current item is selected.
 */
class MatListOption extends _MatListOptionMixinBase {
    constructor(_element, _changeDetector, 
    /** @docs-private */
    selectionList) {
        super();
        this._element = _element;
        this._changeDetector = _changeDetector;
        this.selectionList = selectionList;
        this._selected = false;
        this._disabled = false;
        this._hasFocus = false;
        /** Whether the label should appear before or after the checkbox. Defaults to 'after' */
        this.checkboxPosition = 'after';
        /**
         * This is set to true after the first OnChanges cycle so we don't clear the value of `selected`
         * in the first cycle.
         */
        this._inputsInitialized = false;
    }
    /** Theme color of the list option. This sets the color of the checkbox. */
    get color() { return this._color || this.selectionList.color; }
    set color(newValue) { this._color = newValue; }
    /** Value of the option */
    get value() { return this._value; }
    set value(newValue) {
        if (this.selected &&
            !this.selectionList.compareWith(newValue, this.value) &&
            this._inputsInitialized) {
            this.selected = false;
        }
        this._value = newValue;
    }
    /** Whether the option is disabled. */
    get disabled() { return this._disabled || (this.selectionList && this.selectionList.disabled); }
    set disabled(value) {
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this._changeDetector.markForCheck();
        }
    }
    /** Whether the option is selected. */
    get selected() { return this.selectionList.selectedOptions.isSelected(this); }
    set selected(value) {
        const isSelected = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        if (isSelected !== this._selected) {
            this._setSelected(isSelected);
            this.selectionList._reportValueChange();
        }
    }
    ngOnInit() {
        const list = this.selectionList;
        if (list._value && list._value.some(value => list.compareWith(value, this._value))) {
            this._setSelected(true);
        }
        const wasSelected = this._selected;
        // List options that are selected at initialization can't be reported properly to the form
        // control. This is because it takes some time until the selection-list knows about all
        // available options. Also it can happen that the ControlValueAccessor has an initial value
        // that should be used instead. Deferring the value change report to the next tick ensures
        // that the form control value is not being overwritten.
        Promise.resolve().then(() => {
            if (this._selected || wasSelected) {
                this.selected = true;
                this._changeDetector.markForCheck();
            }
        });
        this._inputsInitialized = true;
    }
    ngAfterContentInit() {
        Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["setLines"])(this._lines, this._element);
    }
    ngOnDestroy() {
        if (this.selected) {
            // We have to delay this until the next tick in order
            // to avoid changed after checked errors.
            Promise.resolve().then(() => {
                this.selected = false;
            });
        }
        const hadFocus = this._hasFocus;
        const newActiveItem = this.selectionList._removeOptionFromList(this);
        // Only move focus if this option was focused at the time it was destroyed.
        if (hadFocus && newActiveItem) {
            newActiveItem.focus();
        }
    }
    /** Toggles the selection state of the option. */
    toggle() {
        this.selected = !this.selected;
    }
    /** Allows for programmatic focusing of the option. */
    focus() {
        this._element.nativeElement.focus();
    }
    /**
     * Returns the list item's text label. Implemented as a part of the FocusKeyManager.
     * @docs-private
     */
    getLabel() {
        return this._text ? (this._text.nativeElement.textContent || '') : '';
    }
    /** Whether this list item should show a ripple effect when clicked. */
    _isRippleDisabled() {
        return this.disabled || this.disableRipple || this.selectionList.disableRipple;
    }
    _handleClick() {
        if (!this.disabled && (this.selectionList.multiple || !this.selected)) {
            this.toggle();
            // Emit a change event if the selected state of the option changed through user interaction.
            this.selectionList._emitChangeEvent([this]);
        }
    }
    _handleFocus() {
        this.selectionList._setFocusedOption(this);
        this._hasFocus = true;
    }
    _handleBlur() {
        this.selectionList._onTouched();
        this._hasFocus = false;
    }
    /** Retrieves the DOM element of the component host. */
    _getHostElement() {
        return this._element.nativeElement;
    }
    /** Sets the selected state of the option. Returns whether the value has changed. */
    _setSelected(selected) {
        if (selected === this._selected) {
            return false;
        }
        this._selected = selected;
        if (selected) {
            this.selectionList.selectedOptions.select(this);
        }
        else {
            this.selectionList.selectedOptions.deselect(this);
        }
        this._changeDetector.markForCheck();
        return true;
    }
    /**
     * Notifies Angular that the option needs to be checked in the next change detection run. Mainly
     * used to trigger an update of the list option if the disabled state of the selection list
     * changed.
     */
    _markForCheck() {
        this._changeDetector.markForCheck();
    }
}
MatListOption.ɵfac = function MatListOption_Factory(t) { return new (t || MatListOption)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MatSelectionList))); };
MatListOption.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatListOption, selectors: [["mat-list-option"]], contentQueries: function MatListOption_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListAvatarCssMatStyler, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListIconCssMatStyler, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._avatar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._icon = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._lines = _t);
    } }, viewQuery: function MatListOption_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._text = _t.first);
    } }, hostAttrs: ["role", "option", 1, "mat-list-item", "mat-list-option", "mat-focus-indicator"], hostVars: 15, hostBindings: function MatListOption_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatListOption_focus_HostBindingHandler() { return ctx._handleFocus(); })("blur", function MatListOption_blur_HostBindingHandler() { return ctx._handleBlur(); })("click", function MatListOption_click_HostBindingHandler() { return ctx._handleClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", ctx.selected)("aria-disabled", ctx.disabled)("tabindex", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-list-item-disabled", ctx.disabled)("mat-list-item-with-avatar", ctx._avatar || ctx._icon)("mat-primary", ctx.color === "primary")("mat-accent", ctx.color !== "primary" && ctx.color !== "warn")("mat-warn", ctx.color === "warn")("mat-list-single-selected-option", ctx.selected && !ctx.selectionList.multiple);
    } }, inputs: { disableRipple: "disableRipple", checkboxPosition: "checkboxPosition", color: "color", value: "value", selected: "selected", disabled: "disabled" }, exportAs: ["matListOption"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c6, decls: 7, vars: 5, consts: [[1, "mat-list-item-content"], ["mat-ripple", "", 1, "mat-list-item-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [3, "state", "disabled", 4, "ngIf"], [1, "mat-list-text"], ["text", ""], [3, "state", "disabled"]], template: function MatListOption_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatListOption_mat_pseudo_checkbox_2_Template, 1, 2, "mat-pseudo-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-list-item-content-reverse", ctx.checkboxPosition == "after");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx._isRippleDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectionList.multiple);
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckbox"]], encapsulation: 2, changeDetection: 0 });
MatListOption.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: MatSelectionList, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MatSelectionList),] }] }
];
MatListOption.propDecorators = {
    _avatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MatListAvatarCssMatStyler,] }],
    _icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MatListIconCssMatStyler,] }],
    _lines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], { descendants: true },] }],
    _text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['text',] }],
    checkboxPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListOption, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mat-list-option',
                exportAs: 'matListOption',
                inputs: ['disableRipple'],
                host: {
                    'role': 'option',
                    'class': 'mat-list-item mat-list-option mat-focus-indicator',
                    '(focus)': '_handleFocus()',
                    '(blur)': '_handleBlur()',
                    '(click)': '_handleClick()',
                    '[class.mat-list-item-disabled]': 'disabled',
                    '[class.mat-list-item-with-avatar]': '_avatar || _icon',
                    // Manually set the "primary" or "warn" class if the color has been explicitly
                    // set to "primary" or "warn". The pseudo checkbox picks up these classes for
                    // its theme.
                    '[class.mat-primary]': 'color === "primary"',
                    // Even though accent is the default, we need to set this class anyway, because the  list might
                    // be placed inside a parent that has one of the other colors with a higher specificity.
                    '[class.mat-accent]': 'color !== "primary" && color !== "warn"',
                    '[class.mat-warn]': 'color === "warn"',
                    '[class.mat-list-single-selected-option]': 'selected && !selectionList.multiple',
                    '[attr.aria-selected]': 'selected',
                    '[attr.aria-disabled]': 'disabled',
                    '[attr.tabindex]': '-1'
                },
                template: "<div class=\"mat-list-item-content\"\n  [class.mat-list-item-content-reverse]=\"checkboxPosition == 'after'\">\n\n  <div mat-ripple\n    class=\"mat-list-item-ripple\"\n    [matRippleTrigger]=\"_getHostElement()\"\n    [matRippleDisabled]=\"_isRippleDisabled()\"></div>\n\n  <mat-pseudo-checkbox\n    *ngIf=\"selectionList.multiple\"\n    [state]=\"selected ? 'checked' : 'unchecked'\"\n    [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n  <div class=\"mat-list-text\" #text><ng-content></ng-content></div>\n\n  <ng-content select=\"[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]\">\n  </ng-content>\n\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: MatSelectionList, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MatSelectionList)]
            }] }]; }, { checkboxPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], _avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatListAvatarCssMatStyler]
        }], _icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatListIconCssMatStyler]
        }], _lines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], { descendants: true }]
        }], _text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['text']
        }] }); })();
/**
 * Material Design list component where each item is a selectable option. Behaves as a listbox.
 */
class MatSelectionList extends _MatSelectionListMixinBase {
    constructor(_element, 
    // @breaking-change 11.0.0 Remove `tabIndex` parameter.
    tabIndex, _changeDetector, 
    // @breaking-change 11.0.0 `_focusMonitor` parameter to become required.
    _focusMonitor) {
        super();
        this._element = _element;
        this._changeDetector = _changeDetector;
        this._focusMonitor = _focusMonitor;
        this._multiple = true;
        this._contentInitialized = false;
        /** Emits a change event whenever the selected state of an option changes. */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Tabindex of the selection list.
         * @breaking-change 11.0.0 Remove `tabIndex` input.
         */
        this.tabIndex = 0;
        /** Theme color of the selection list. This sets the checkbox color for all list options. */
        this.color = 'accent';
        /**
         * Function used for comparing an option against the selected value when determining which
         * options should appear as selected. The first argument is the value of an options. The second
         * one is a value from the selected value. A boolean must be returned.
         */
        this.compareWith = (a1, a2) => a1 === a2;
        this._disabled = false;
        /** The currently selected options. */
        this.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](this._multiple);
        /** The tabindex of the selection list. */
        this._tabIndex = -1;
        /** View to model callback that should be called whenever the selected options change. */
        this._onChange = (_) => { };
        /** Emits when the list has been destroyed. */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /** View to model callback that should be called if the list or its options lost focus. */
        this._onTouched = () => { };
    }
    /** Whether the selection list is disabled. */
    get disabled() { return this._disabled; }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        // The `MatSelectionList` and `MatListOption` are using the `OnPush` change detection
        // strategy. Therefore the options will not check for any changes if the `MatSelectionList`
        // changed its state. Since we know that a change to `disabled` property of the list affects
        // the state of the options, we manually mark each option for check.
        this._markOptionsForCheck();
    }
    /** Whether selection is limited to one or multiple items (default multiple). */
    get multiple() { return this._multiple; }
    set multiple(value) {
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        if (newValue !== this._multiple) {
            if (this._contentInitialized && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw new Error('Cannot change `multiple` mode of mat-selection-list after initialization.');
            }
            this._multiple = newValue;
            this.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](this._multiple, this.selectedOptions.selected);
        }
    }
    ngAfterContentInit() {
        var _a;
        this._contentInitialized = true;
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusKeyManager"](this.options)
            .withWrap()
            .withTypeAhead()
            .withHomeAndEnd()
            // Allow disabled items to be focusable. For accessibility reasons, there must be a way for
            // screenreader users, that allows reading the different options of the list.
            .skipPredicate(() => false)
            .withAllowedModifierKeys(['shiftKey']);
        if (this._value) {
            this._setOptionsFromValues(this._value);
        }
        // If the user attempts to tab out of the selection list, allow focus to escape.
        this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(() => {
            this._allowFocusEscape();
        });
        // When the number of options change, update the tabindex of the selection list.
        this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(() => {
            this._updateTabIndex();
        });
        // Sync external changes to the model back to the options.
        this.selectedOptions.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(event => {
            if (event.added) {
                for (let item of event.added) {
                    item.selected = true;
                }
            }
            if (event.removed) {
                for (let item of event.removed) {
                    item.selected = false;
                }
            }
        });
        // @breaking-change 11.0.0 Remove null assertion once _focusMonitor is required.
        (_a = this._focusMonitor) === null || _a === void 0 ? void 0 : _a.monitor(this._element).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(origin => {
            if (origin === 'keyboard' || origin === 'program') {
                const activeIndex = this._keyManager.activeItemIndex;
                if (!activeIndex || activeIndex === -1) {
                    // If there is no active index, set focus to the first option.
                    this._keyManager.setFirstItemActive();
                }
                else {
                    // Otherwise, set focus to the active option.
                    this._keyManager.setActiveItem(activeIndex);
                }
            }
        });
    }
    ngOnChanges(changes) {
        const disableRippleChanges = changes['disableRipple'];
        const colorChanges = changes['color'];
        if ((disableRippleChanges && !disableRippleChanges.firstChange) ||
            (colorChanges && !colorChanges.firstChange)) {
            this._markOptionsForCheck();
        }
    }
    ngOnDestroy() {
        var _a;
        // @breaking-change 11.0.0 Remove null assertion once _focusMonitor is required.
        (_a = this._focusMonitor) === null || _a === void 0 ? void 0 : _a.stopMonitoring(this._element);
        this._destroyed.next();
        this._destroyed.complete();
        this._isDestroyed = true;
    }
    /** Focuses the selection list. */
    focus(options) {
        this._element.nativeElement.focus(options);
    }
    /** Selects all of the options. */
    selectAll() {
        this._setAllOptionsSelected(true);
    }
    /** Deselects all of the options. */
    deselectAll() {
        this._setAllOptionsSelected(false);
    }
    /** Sets the focused option of the selection-list. */
    _setFocusedOption(option) {
        this._keyManager.updateActiveItem(option);
    }
    /**
     * Removes an option from the selection list and updates the active item.
     * @returns Currently-active item.
     */
    _removeOptionFromList(option) {
        const optionIndex = this._getOptionIndex(option);
        if (optionIndex > -1 && this._keyManager.activeItemIndex === optionIndex) {
            // Check whether the option is the last item
            if (optionIndex > 0) {
                this._keyManager.updateActiveItem(optionIndex - 1);
            }
            else if (optionIndex === 0 && this.options.length > 1) {
                this._keyManager.updateActiveItem(Math.min(optionIndex + 1, this.options.length - 1));
            }
        }
        return this._keyManager.activeItem;
    }
    /** Passes relevant key presses to our key manager. */
    _keydown(event) {
        const keyCode = event.keyCode;
        const manager = this._keyManager;
        const previousFocusIndex = manager.activeItemIndex;
        const hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event);
        switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["SPACE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"]:
                if (!hasModifier && !manager.isTyping()) {
                    this._toggleFocusedOption();
                    // Always prevent space from scrolling the page since the list has focus
                    event.preventDefault();
                }
                break;
            default:
                // The "A" key gets special treatment, because it's used for the "select all" functionality.
                if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["A"] && this.multiple && Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event, 'ctrlKey') &&
                    !manager.isTyping()) {
                    const shouldSelect = this.options.some(option => !option.disabled && !option.selected);
                    this._setAllOptionsSelected(shouldSelect, true, true);
                    event.preventDefault();
                }
                else {
                    manager.onKeydown(event);
                }
        }
        if (this.multiple && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["DOWN_ARROW"]) && event.shiftKey &&
            manager.activeItemIndex !== previousFocusIndex) {
            this._toggleFocusedOption();
        }
    }
    /** Reports a value change to the ControlValueAccessor */
    _reportValueChange() {
        // Stop reporting value changes after the list has been destroyed. This avoids
        // cases where the list might wrongly reset its value once it is removed, but
        // the form control is still live.
        if (this.options && !this._isDestroyed) {
            const value = this._getSelectedOptionValues();
            this._onChange(value);
            this._value = value;
        }
    }
    /** Emits a change event if the selected state of an option changed. */
    _emitChangeEvent(options) {
        this.selectionChange.emit(new MatSelectionListChange(this, options[0], options));
    }
    /** Implemented as part of ControlValueAccessor. */
    writeValue(values) {
        this._value = values;
        if (this.options) {
            this._setOptionsFromValues(values || []);
        }
    }
    /** Implemented as a part of ControlValueAccessor. */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /** Implemented as part of ControlValueAccessor. */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /** Implemented as part of ControlValueAccessor. */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /** Sets the selected options based on the specified values. */
    _setOptionsFromValues(values) {
        this.options.forEach(option => option._setSelected(false));
        values.forEach(value => {
            const correspondingOption = this.options.find(option => {
                // Skip options that are already in the model. This allows us to handle cases
                // where the same primitive value is selected multiple times.
                return option.selected ? false : this.compareWith(option.value, value);
            });
            if (correspondingOption) {
                correspondingOption._setSelected(true);
            }
        });
    }
    /** Returns the values of the selected options. */
    _getSelectedOptionValues() {
        return this.options.filter(option => option.selected).map(option => option.value);
    }
    /** Toggles the state of the currently focused option if enabled. */
    _toggleFocusedOption() {
        let focusedIndex = this._keyManager.activeItemIndex;
        if (focusedIndex != null && this._isValidIndex(focusedIndex)) {
            let focusedOption = this.options.toArray()[focusedIndex];
            if (focusedOption && !focusedOption.disabled && (this._multiple || !focusedOption.selected)) {
                focusedOption.toggle();
                // Emit a change event because the focused option changed its state through user
                // interaction.
                this._emitChangeEvent([focusedOption]);
            }
        }
    }
    /**
     * Sets the selected state on all of the options
     * and emits an event if anything changed.
     */
    _setAllOptionsSelected(isSelected, skipDisabled, isUserInput) {
        // Keep track of whether anything changed, because we only want to
        // emit the changed event when something actually changed.
        const changedOptions = [];
        this.options.forEach(option => {
            if ((!skipDisabled || !option.disabled) && option._setSelected(isSelected)) {
                changedOptions.push(option);
            }
        });
        if (changedOptions.length) {
            this._reportValueChange();
            if (isUserInput) {
                this._emitChangeEvent(changedOptions);
            }
        }
    }
    /**
     * Utility to ensure all indexes are valid.
     * @param index The index to be checked.
     * @returns True if the index is valid for our list of options.
     */
    _isValidIndex(index) {
        return index >= 0 && index < this.options.length;
    }
    /** Returns the index of the specified list option. */
    _getOptionIndex(option) {
        return this.options.toArray().indexOf(option);
    }
    /** Marks all the options to be checked in the next change detection run. */
    _markOptionsForCheck() {
        if (this.options) {
            this.options.forEach(option => option._markForCheck());
        }
    }
    /**
     * Removes the tabindex from the selection list and resets it back afterwards, allowing the user
     * to tab out of it. This prevents the list from capturing focus and redirecting it back within
     * the list, creating a focus trap if it user tries to tab away.
     */
    _allowFocusEscape() {
        this._tabIndex = -1;
        setTimeout(() => {
            this._tabIndex = 0;
            this._changeDetector.markForCheck();
        });
    }
    /** Updates the tabindex based upon if the selection list is empty. */
    _updateTabIndex() {
        this._tabIndex = (this.options.length === 0) ? -1 : 0;
    }
}
MatSelectionList.ɵfac = function MatSelectionList_Factory(t) { return new (t || MatSelectionList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"])); };
MatSelectionList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatSelectionList, selectors: [["mat-selection-list"]], contentQueries: function MatSelectionList_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListOption, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.options = _t);
    } }, hostAttrs: ["role", "listbox", 1, "mat-selection-list", "mat-list-base"], hostVars: 3, hostBindings: function MatSelectionList_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MatSelectionList_keydown_HostBindingHandler($event) { return ctx._keydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-multiselectable", ctx.multiple)("aria-disabled", ctx.disabled.toString())("tabindex", ctx._tabIndex);
    } }, inputs: { disableRipple: "disableRipple", tabIndex: "tabIndex", color: "color", compareWith: "compareWith", disabled: "disabled", multiple: "multiple" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["matSelectionList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SELECTION_LIST_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatSelectionList_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, styles: [_c1], encapsulation: 2, changeDetection: 0 });
MatSelectionList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['tabindex',] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] }
];
MatSelectionList.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [MatListOption, { descendants: true },] }],
    selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSelectionList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mat-selection-list',
                exportAs: 'matSelectionList',
                inputs: ['disableRipple'],
                host: {
                    'role': 'listbox',
                    'class': 'mat-selection-list mat-list-base',
                    '(keydown)': '_keydown($event)',
                    '[attr.aria-multiselectable]': 'multiple',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.tabindex]': '_tabIndex'
                },
                template: '<ng-content></ng-content>',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                providers: [MAT_SELECTION_LIST_VALUE_ACCESSOR],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['tabindex']
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] }]; }, { selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [MatListOption, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatListModule {
}
MatListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatListModule });
MatListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MatListModule_Factory(t) { return new (t || MatListModule)(); }, imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatListModule, { declarations: function () { return [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListSubheaderCssMatStyler, MatSelectionList, MatListOption]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]; }, exports: function () { return [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], MatListIconCssMatStyler, MatListSubheaderCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], MatSelectionList, MatListOption, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                exports: [
                    MatList,
                    MatNavList,
                    MatListItem,
                    MatListAvatarCssMatStyler,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                    MatListIconCssMatStyler,
                    MatListSubheaderCssMatStyler,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"],
                    MatSelectionList,
                    MatListOption,
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]
                ],
                declarations: [
                    MatList,
                    MatNavList,
                    MatListItem,
                    MatListAvatarCssMatStyler,
                    MatListIconCssMatStyler,
                    MatListSubheaderCssMatStyler,
                    MatSelectionList,
                    MatListOption
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=list.js.map

/***/ }),

/***/ "VTJx":
/*!*******************************************************!*\
  !*** ./src/app/main/tutorials/tutorials.component.ts ***!
  \*******************************************************/
/*! exports provided: TutorialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialsComponent", function() { return TutorialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");




class TutorialsComponent {
    constructor() {
        this.panelOpenState = false;
    }
    ngOnInit() {
    }
}
TutorialsComponent.ɵfac = function TutorialsComponent_Factory(t) { return new (t || TutorialsComponent)(); };
TutorialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TutorialsComponent, selectors: [["app-tutorials"]], decls: 86, vars: 0, consts: [["fxLayout", "row", "fxLayoutGap", "20px"], ["fxFlex", "80"], [3, "opened", "closed"], ["src", "../assets/print-dashboard-comodos.png", "alt", ""], ["src", "../assets/print-dashboard-pizzas.png", "alt", ""], ["src", "../assets/cadastro e comodos.png", "alt", ""]], template: function TutorialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function TutorialsComponent_Template_mat_expansion_panel_opened_6_listener() { return ctx.panelOpenState = true; })("closed", function TutorialsComponent_Template_mat_expansion_panel_closed_6_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Informa\u00E7\u00F5es do Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ao efetuar o login, a tela abaixo ser\u00E1 apresentada mostrando os dados hist\u00F3ricos de cada C\u00F4modo (Sensor) nos ultimos 7 dias:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Ser\u00E1 mostrado tamb\u00E9m mais dois grafico dos ultimo 3 dias, o primeiro card a direita mostra o aparelho que mais gastou com o consumo em kWh e o segundo card a esquerda mostra o aparelho que est\u00E1 a mais tempo ligado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Al\u00E9m disso nesta pagina h\u00E1 tamb\u00E9m dois graficos em pizza, um que mostra os aparelhso que mais consomem energia em kWh em porcentagem e outro mostra os aparelhos que ficam mais tempo ligados:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function TutorialsComponent_Template_mat_expansion_panel_opened_24_listener() { return ctx.panelOpenState = true; })("closed", function TutorialsComponent_Template_mat_expansion_panel_closed_24_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Como cadastrar meus c\u00F4modos e aparelhos? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Na barra de funcionalides acima, o usuario deve clicar na op\u00E7\u00E3o 'Cadastros', o usuario deve visualizar uma pagina semelhante a esta:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " A aba 'C\u00F4modos' deve ser preenchida com o nome de preferencia do usuario, por\u00E9m, deve ser levado em considera\u00E7\u00E3o que o n\u00FAmero de c\u00F4modos deve ser equivalente a quantidade de sensores disponiveis para o usuario, portanto se o usuario possui mais de um comodo alimentado por um disjuntor, este deve ser cadastrado como 1, conforme exemplo acima. Para editar o nome de um C\u00F4modo, basta clicar no icone do l\u00E1pis ao lado do nome, e para apagar, realizar o mesmo procedimento clicando na lixeira.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Vale ressaltar que para excluir um c\u00F4modo, \u00E9 importante que ele n\u00E3o esteja vinculado a nenhum aparelho antes cadastrado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Para cadastrar um aparelho, o usuario na aba 'Aparelhos' deve designar um nome para o aparelho, informar se \u00E9 um aparelho m\u00F3vel, ou seja, se pode estar em mais de um c\u00F4modo da casa, e selecionar o c\u00F4modo que aquele aparelho est\u00E1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Caso a op\u00E7\u00E3o m\u00F3vel esteja marcada como sim, a op\u00E7\u00E3o de c\u00F4modo deve ser preenchida apenas para evitar problemas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Para alterar a descri\u00E7\u00E3o de um aparelho, clicar no icone do l\u00E1pis ao lado do nome do aparelho e realizar as altera\u00E7\u00F5es. Para excluir, basta clicar no icone da lixeira. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function TutorialsComponent_Template_mat_expansion_panel_opened_47_listener() { return ctx.panelOpenState = true; })("closed", function TutorialsComponent_Template_mat_expansion_panel_closed_47_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Coletando assinatura do aparelho ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "1 - Acessar o ip xx.xx.xx.xx.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " 2 - Conectar seu aparelho no coletor de assinatura.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " 3 - Aguardar 10 segundos at\u00E9 que a coleta termine.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " 4 - Escolher na p\u00E1gina o c\u00F4modo e o aparelho correspondente ao que foi coletado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " 5 - Apertar em enviar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function TutorialsComponent_Template_mat_expansion_panel_opened_65_listener() { return ctx.panelOpenState = true; })("closed", function TutorialsComponent_Template_mat_expansion_panel_closed_65_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Obter informa\u00E7\u00F5es mais detalhada sobre meu consumo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Clicar no icone de detalhes na aba do topo para visualizar as informa\u00E7\u00F5es em tempo real e de aparelhos especificos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function TutorialsComponent_Template_mat_expansion_panel_opened_75_listener() { return ctx.panelOpenState = true; })("closed", function TutorialsComponent_Template_mat_expansion_panel_closed_75_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Notifica\u00E7\u00F5es sobre o uso dos aparelhos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "O icone de Avisos no topo levara para uma pagina que exibir\u00E1 uma tabela com notifica\u00E7\u00F5es do sistema sobre consumo e perda de energia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"]], styles: ["div[_ngcontent-%COMP%] {\r\n    margin-left: 5%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 900px;\r\n    height: 400px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yaWFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6InR1dG9yaWFscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TutorialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tutorials',
                templateUrl: './tutorials.component.html',
                styleUrls: ['./tutorials.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XpXM":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-routing.module */ "3hl/");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./people/people.component */ "bRY+");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "1URv");
/* harmony import */ var _comodo_comodo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comodo/comodo.component */ "Zi9g");
/* harmony import */ var _aparelhos_aparelhos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aparelhos/aparelhos.component */ "GA6K");
/* harmony import */ var _dash_dash_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dash/dash.component */ "62kS");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alerts/alerts.component */ "0LYO");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./details/details.component */ "gOqG");
/* harmony import */ var _tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tutorials/tutorials.component */ "VTJx");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! highcharts-angular */ "JUyF");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");


























class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_22__["HighchartsChartModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_people_people_component__WEBPACK_IMPORTED_MODULE_3__["PeopleComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"], _comodo_comodo_component__WEBPACK_IMPORTED_MODULE_5__["ComodoComponent"], _aparelhos_aparelhos_component__WEBPACK_IMPORTED_MODULE_6__["AparelhosComponent"], _dash_dash_component__WEBPACK_IMPORTED_MODULE_7__["DashComponent"], _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_8__["AlertsComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"], _tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_10__["TutorialsComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
        highcharts_angular__WEBPACK_IMPORTED_MODULE_22__["HighchartsChartModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_people_people_component__WEBPACK_IMPORTED_MODULE_3__["PeopleComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"], _comodo_comodo_component__WEBPACK_IMPORTED_MODULE_5__["ComodoComponent"], _aparelhos_aparelhos_component__WEBPACK_IMPORTED_MODULE_6__["AparelhosComponent"], _dash_dash_component__WEBPACK_IMPORTED_MODULE_7__["DashComponent"], _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_8__["AlertsComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"], _tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_10__["TutorialsComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
                    highcharts_angular__WEBPACK_IMPORTED_MODULE_22__["HighchartsChartModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Zi9g":
/*!*************************************************!*\
  !*** ./src/app/main/comodo/comodo.component.ts ***!
  \*************************************************/
/*! exports provided: ComodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComodoComponent", function() { return ComodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ComodoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ComodoComponent.ɵfac = function ComodoComponent_Factory(t) { return new (t || ComodoComponent)(); };
ComodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComodoComponent, selectors: [["app-comodo"]], decls: 2, vars: 0, template: function ComodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "comodo works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21vZG8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComodoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comodo',
                templateUrl: './comodo.component.html',
                styleUrls: ['./comodo.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bRY+":
/*!*************************************************!*\
  !*** ./src/app/main/people/people.component.ts ***!
  \*************************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "zmBI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PeopleComponent_div_2_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", p_r5.name, " | ", p_r5.email, "");
} }
function PeopleComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PeopleComponent_div_2_li_2_Template, 2, 2, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r0.people$));
} }
function PeopleComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No person found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PeopleComponent {
    constructor(mainService) {
        this.mainService = mainService;
    }
    ngOnInit() {
        this.people$ = this.mainService.getPeople();
    }
}
PeopleComponent.ɵfac = function PeopleComponent_Factory(t) { return new (t || PeopleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"])); };
PeopleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PeopleComponent, selectors: [["app-people"]], decls: 6, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["noperson", ""], [4, "ngFor", "ngForOf"]], template: function PeopleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "People");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PeopleComponent_div_2_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PeopleComponent_ng_template_4_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.people$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW9wbGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeopleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-people',
                templateUrl: './people.component.html',
                styleUrls: ['./people.component.css']
            }]
    }], function () { return [{ type: _main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }]; }, null); })();


/***/ }),

/***/ "f44v":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/chips.js ***!
  \**********************************************************/
/*! exports provided: MAT_CHIPS_DEFAULT_OPTIONS, MAT_CHIP_AVATAR, MAT_CHIP_REMOVE, MAT_CHIP_TRAILING_ICON, MatChip, MatChipAvatar, MatChipInput, MatChipList, MatChipListChange, MatChipRemove, MatChipSelectionChange, MatChipTrailingIcon, MatChipsModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS", function() { return MAT_CHIPS_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIP_AVATAR", function() { return MAT_CHIP_AVATAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIP_REMOVE", function() { return MAT_CHIP_REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIP_TRAILING_ICON", function() { return MAT_CHIP_TRAILING_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChip", function() { return MatChip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipAvatar", function() { return MatChipAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipInput", function() { return MatChipInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipList", function() { return MatChipList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipListChange", function() { return MatChipListChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipRemove", function() { return MatChipRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipSelectionChange", function() { return MatChipSelectionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipTrailingIcon", function() { return MatChipTrailingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipsModule", function() { return MatChipsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Event object emitted by MatChip when selected or deselected. */






const _c0 = ["*"];
class MatChipSelectionChange {
    constructor(
    /** Reference to the chip that emitted the event. */
    source, 
    /** Whether the chip that emitted the event is selected. */
    selected, 
    /** Whether the selection change was a result of a user interaction. */
    isUserInput = false) {
        this.source = source;
        this.selected = selected;
        this.isUserInput = isUserInput;
    }
}
/**
 * Injection token that can be used to reference instances of `MatChipRemove`. It serves as
 * alternative token to the actual `MatChipRemove` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_CHIP_REMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatChipRemove');
/**
 * Injection token that can be used to reference instances of `MatChipAvatar`. It serves as
 * alternative token to the actual `MatChipAvatar` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_CHIP_AVATAR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatChipAvatar');
/**
 * Injection token that can be used to reference instances of `MatChipTrailingIcon`. It serves as
 * alternative token to the actual `MatChipTrailingIcon` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_CHIP_TRAILING_ICON = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatChipTrailingIcon');
// Boilerplate for applying mixins to MatChip.
/** @docs-private */
class MatChipBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatChipMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatChipBase), 'primary'), -1);
/**
 * Dummy directive to add CSS class to chip avatar.
 * @docs-private
 */
class MatChipAvatar {
}
MatChipAvatar.ɵfac = function MatChipAvatar_Factory(t) { return new (t || MatChipAvatar)(); };
MatChipAvatar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatChipAvatar, selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]], hostAttrs: [1, "mat-chip-avatar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: MAT_CHIP_AVATAR, useExisting: MatChipAvatar }])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipAvatar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'mat-chip-avatar, [matChipAvatar]',
                host: { 'class': 'mat-chip-avatar' },
                providers: [{ provide: MAT_CHIP_AVATAR, useExisting: MatChipAvatar }]
            }]
    }], null, null); })();
/**
 * Dummy directive to add CSS class to chip trailing icon.
 * @docs-private
 */
class MatChipTrailingIcon {
}
MatChipTrailingIcon.ɵfac = function MatChipTrailingIcon_Factory(t) { return new (t || MatChipTrailingIcon)(); };
MatChipTrailingIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatChipTrailingIcon, selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]], hostAttrs: [1, "mat-chip-trailing-icon"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: MAT_CHIP_TRAILING_ICON, useExisting: MatChipTrailingIcon }])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipTrailingIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
                host: { 'class': 'mat-chip-trailing-icon' },
                providers: [{ provide: MAT_CHIP_TRAILING_ICON, useExisting: MatChipTrailingIcon }]
            }]
    }], null, null); })();
/**
 * Material design styled Chip component. Used inside the MatChipList component.
 */
class MatChip extends _MatChipMixinBase {
    constructor(_elementRef, _ngZone, platform, globalRippleOptions, _changeDetectorRef, _document, animationMode, tabIndex) {
        super(_elementRef);
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._changeDetectorRef = _changeDetectorRef;
        /** Whether the chip has focus. */
        this._hasFocus = false;
        /** Whether the chip list is selectable */
        this.chipListSelectable = true;
        /** Whether the chip list is in multi-selection mode. */
        this._chipListMultiple = false;
        /** Whether the chip list as a whole is disabled. */
        this._chipListDisabled = false;
        this._selected = false;
        this._selectable = true;
        this._disabled = false;
        this._removable = true;
        /** Emits when the chip is focused. */
        this._onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /** Emits when the chip is blured. */
        this._onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /** Emitted when the chip is selected or deselected. */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emitted when the chip is destroyed. */
        this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emitted when a chip is to be removed. */
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._addHostClassName();
        // Dynamically create the ripple target, append it within the chip, and use it as the
        // chip's ripple target. Adding the class '.mat-chip-ripple' ensures that it will have
        // the proper styles.
        this._chipRippleTarget = _document.createElement('div');
        this._chipRippleTarget.classList.add('mat-chip-ripple');
        this._elementRef.nativeElement.appendChild(this._chipRippleTarget);
        this._chipRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["RippleRenderer"](this, _ngZone, this._chipRippleTarget, platform);
        this._chipRipple.setupTriggerEvents(_elementRef);
        this.rippleConfig = globalRippleOptions || {};
        this._animationsDisabled = animationMode === 'NoopAnimations';
        this.tabIndex = tabIndex != null ? (parseInt(tabIndex) || -1) : -1;
    }
    /**
     * Whether ripples are disabled on interaction
     * @docs-private
     */
    get rippleDisabled() {
        return this.disabled || this.disableRipple || this._animationsDisabled ||
            !!this.rippleConfig.disabled;
    }
    /** Whether the chip is selected. */
    get selected() { return this._selected; }
    set selected(value) {
        const coercedValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        if (coercedValue !== this._selected) {
            this._selected = coercedValue;
            this._dispatchSelectionChange();
        }
    }
    /** The value of the chip. Defaults to the content inside `<mat-chip>` tags. */
    get value() {
        return this._value !== undefined
            ? this._value
            : this._elementRef.nativeElement.textContent;
    }
    set value(value) { this._value = value; }
    /**
     * Whether or not the chip is selectable. When a chip is not selectable,
     * changes to its selected state are always ignored. By default a chip is
     * selectable, and it becomes non-selectable if its parent chip list is
     * not selectable.
     */
    get selectable() { return this._selectable && this.chipListSelectable; }
    set selectable(value) {
        this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    /** Whether the chip is disabled. */
    get disabled() { return this._chipListDisabled || this._disabled; }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    /**
     * Determines whether or not the chip displays the remove styling and emits (removed) events.
     */
    get removable() { return this._removable; }
    set removable(value) {
        this._removable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    /** The ARIA selected applied to the chip. */
    get ariaSelected() {
        // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
        // it adds noise to NVDA users where "not selected" will be read out for each chip.
        return this.selectable && (this._chipListMultiple || this.selected) ?
            this.selected.toString() : null;
    }
    _addHostClassName() {
        const basicChipAttrName = 'mat-basic-chip';
        const element = this._elementRef.nativeElement;
        if (element.hasAttribute(basicChipAttrName) ||
            element.tagName.toLowerCase() === basicChipAttrName) {
            element.classList.add(basicChipAttrName);
            return;
        }
        else {
            element.classList.add('mat-standard-chip');
        }
    }
    ngOnDestroy() {
        this.destroyed.emit({ chip: this });
        this._chipRipple._removeTriggerEvents();
    }
    /** Selects the chip. */
    select() {
        if (!this._selected) {
            this._selected = true;
            this._dispatchSelectionChange();
            this._changeDetectorRef.markForCheck();
        }
    }
    /** Deselects the chip. */
    deselect() {
        if (this._selected) {
            this._selected = false;
            this._dispatchSelectionChange();
            this._changeDetectorRef.markForCheck();
        }
    }
    /** Select this chip and emit selected event */
    selectViaInteraction() {
        if (!this._selected) {
            this._selected = true;
            this._dispatchSelectionChange(true);
            this._changeDetectorRef.markForCheck();
        }
    }
    /** Toggles the current selected state of this chip. */
    toggleSelected(isUserInput = false) {
        this._selected = !this.selected;
        this._dispatchSelectionChange(isUserInput);
        this._changeDetectorRef.markForCheck();
        return this.selected;
    }
    /** Allows for programmatic focusing of the chip. */
    focus() {
        if (!this._hasFocus) {
            this._elementRef.nativeElement.focus();
            this._onFocus.next({ chip: this });
        }
        this._hasFocus = true;
    }
    /**
     * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
     * BACKSPACE keys are pressed.
     *
     * Informs any listeners of the removal request. Does not remove the chip from the DOM.
     */
    remove() {
        if (this.removable) {
            this.removed.emit({ chip: this });
        }
    }
    /** Handles click events on the chip. */
    _handleClick(event) {
        if (this.disabled) {
            event.preventDefault();
        }
        else {
            event.stopPropagation();
        }
    }
    /** Handle custom key presses. */
    _handleKeydown(event) {
        if (this.disabled) {
            return;
        }
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["DELETE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"]:
                // If we are removable, remove the focused chip
                this.remove();
                // Always prevent so page navigation does not occur
                event.preventDefault();
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["SPACE"]:
                // If we are selectable, toggle the focused chip
                if (this.selectable) {
                    this.toggleSelected(true);
                }
                // Always prevent space from scrolling the page since the list has focus
                event.preventDefault();
                break;
        }
    }
    _blur() {
        // When animations are enabled, Angular may end up removing the chip from the DOM a little
        // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
        // that moves focus not the next item. To work around the issue, we defer marking the chip
        // as not focused until the next time the zone stabilizes.
        this._ngZone.onStable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
            .subscribe(() => {
            this._ngZone.run(() => {
                this._hasFocus = false;
                this._onBlur.next({ chip: this });
            });
        });
    }
    _dispatchSelectionChange(isUserInput = false) {
        this.selectionChange.emit({
            source: this,
            isUserInput,
            selected: this._selected
        });
    }
}
MatChip.ɵfac = function MatChip_Factory(t) { return new (t || MatChip)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex')); };
MatChip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatChip, selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]], contentQueries: function MatChip_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_AVATAR, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_TRAILING_ICON, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_REMOVE, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.avatar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.trailingIcon = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.removeIcon = _t.first);
    } }, hostAttrs: ["role", "option", 1, "mat-chip", "mat-focus-indicator"], hostVars: 14, hostBindings: function MatChip_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatChip_click_HostBindingHandler($event) { return ctx._handleClick($event); })("keydown", function MatChip_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); })("focus", function MatChip_focus_HostBindingHandler() { return ctx.focus(); })("blur", function MatChip_blur_HostBindingHandler() { return ctx._blur(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx.tabIndex)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString())("aria-selected", ctx.ariaSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-chip-selected", ctx.selected)("mat-chip-with-avatar", ctx.avatar)("mat-chip-with-trailing-icon", ctx.trailingIcon || ctx.removeIcon)("mat-chip-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationsDisabled);
    } }, inputs: { color: "color", disableRipple: "disableRipple", tabIndex: "tabIndex", selected: "selected", value: "value", selectable: "selectable", disabled: "disabled", removable: "removable" }, outputs: { selectionChange: "selectionChange", destroyed: "destroyed", removed: "removed" }, exportAs: ["matChip"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
MatChip.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['tabindex',] }] }
];
MatChip.propDecorators = {
    avatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MAT_CHIP_AVATAR,] }],
    trailingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MAT_CHIP_TRAILING_ICON,] }],
    removeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MAT_CHIP_REMOVE,] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    removable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    destroyed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    removed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChip, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: `mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]`,
                inputs: ['color', 'disableRipple', 'tabIndex'],
                exportAs: 'matChip',
                host: {
                    'class': 'mat-chip mat-focus-indicator',
                    '[attr.tabindex]': 'disabled ? null : tabIndex',
                    'role': 'option',
                    '[class.mat-chip-selected]': 'selected',
                    '[class.mat-chip-with-avatar]': 'avatar',
                    '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
                    '[class.mat-chip-disabled]': 'disabled',
                    '[class._mat-animation-noopable]': '_animationsDisabled',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-selected]': 'ariaSelected',
                    '(click)': '_handleClick($event)',
                    '(keydown)': '_handleKeydown($event)',
                    '(focus)': 'focus()',
                    '(blur)': '_blur()'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['tabindex']
            }] }]; }, { selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], destroyed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], removed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MAT_CHIP_AVATAR]
        }], trailingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MAT_CHIP_TRAILING_ICON]
        }], removeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MAT_CHIP_REMOVE]
        }] }); })();
/**
 * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
 * available at https://material.io/icons/#ic_cancel.
 *
 * Example:
 *
 *     `<mat-chip>
 *       <mat-icon matChipRemove>cancel</mat-icon>
 *     </mat-chip>`
 *
 * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
 * styles to properly center the icon within the chip.
 */
class MatChipRemove {
    constructor(_parentChip, elementRef) {
        this._parentChip = _parentChip;
        if (elementRef.nativeElement.nodeName === 'BUTTON') {
            elementRef.nativeElement.setAttribute('type', 'button');
        }
    }
    /** Calls the parent chip's public `remove()` method if applicable. */
    _handleClick(event) {
        const parentChip = this._parentChip;
        if (parentChip.removable && !parentChip.disabled) {
            parentChip.remove();
        }
        // We need to stop event propagation because otherwise the event will bubble up to the
        // form field and cause the `onContainerClick` method to be invoked. This method would then
        // reset the focused chip that has been focused after chip removal. Usually the parent
        // the parent click listener of the `MatChip` would prevent propagation, but it can happen
        // that the chip is being removed before the event bubbles up.
        event.stopPropagation();
    }
}
MatChipRemove.ɵfac = function MatChipRemove_Factory(t) { return new (t || MatChipRemove)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatChip), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
MatChipRemove.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatChipRemove, selectors: [["", "matChipRemove", ""]], hostAttrs: [1, "mat-chip-remove", "mat-chip-trailing-icon"], hostBindings: function MatChipRemove_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatChipRemove_click_HostBindingHandler($event) { return ctx._handleClick($event); });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: MAT_CHIP_REMOVE, useExisting: MatChipRemove }])] });
MatChipRemove.ctorParameters = () => [
    { type: MatChip },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipRemove, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[matChipRemove]',
                host: {
                    'class': 'mat-chip-remove mat-chip-trailing-icon',
                    '(click)': '_handleClick($event)'
                },
                providers: [{ provide: MAT_CHIP_REMOVE, useExisting: MatChipRemove }]
            }]
    }], function () { return [{ type: MatChip }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for the chips module. */
const MAT_CHIPS_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-chips-default-options');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatChipList.
/** @docs-private */
class MatChipListBase {
    constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, 
    /** @docs-private */
    ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
}
const _MatChipListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinErrorState"])(MatChipListBase);
// Increasing integer for generating unique ids for chip-list components.
let nextUniqueId = 0;
/** Change event object that is emitted when the chip list value has changed. */
class MatChipListChange {
    constructor(
    /** Chip list that emitted the event. */
    source, 
    /** Value of the chip list when the event was emitted. */
    value) {
        this.source = source;
        this.value = value;
    }
}
/**
 * A material design chips component (named ChipList for its similarity to the List component).
 */
class MatChipList extends _MatChipListMixinBase {
    constructor(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, 
    /** @docs-private */
    ngControl) {
        super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this.ngControl = ngControl;
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        this.controlType = 'mat-chip-list';
        /**
         * When a chip is destroyed, we store the index of the destroyed chip until the chips
         * query list notifies about the update. This is necessary because we cannot determine an
         * appropriate chip that should receive focus until the array of chips updated completely.
         */
        this._lastDestroyedChipIndex = null;
        /** Subject that emits when the component has been destroyed. */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /** Uid of the chip list */
        this._uid = `mat-chip-list-${nextUniqueId++}`;
        /** Tab index for the chip list. */
        this._tabIndex = 0;
        /**
         * User defined tab index.
         * When it is not null, use user defined tab index. Otherwise use _tabIndex
         */
        this._userTabIndex = null;
        /** Function when touched */
        this._onTouched = () => { };
        /** Function when changed */
        this._onChange = () => { };
        this._multiple = false;
        this._compareWith = (o1, o2) => o1 === o2;
        this._required = false;
        this._disabled = false;
        /** Orientation of the chip list. */
        this.ariaOrientation = 'horizontal';
        this._selectable = true;
        /** Event emitted when the selected chip list value has been changed by the user. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the chip-list changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * @docs-private
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    /** The array of selected chips inside chip list. */
    get selected() {
        return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
    }
    /** The ARIA role applied to the chip list. */
    get role() { return this.empty ? null : 'listbox'; }
    /** Whether the user should be allowed to select multiple chips. */
    get multiple() { return this._multiple; }
    set multiple(value) {
        this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        this._syncChipsState();
    }
    /**
     * A function to compare the option values with the selected values. The first argument
     * is a value from an option. The second is a value from the selection. A boolean
     * should be returned.
     */
    get compareWith() { return this._compareWith; }
    set compareWith(fn) {
        this._compareWith = fn;
        if (this._selectionModel) {
            // A different comparator means the selection could change.
            this._initializeSelection();
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get value() { return this._value; }
    set value(value) {
        this.writeValue(value);
        this._value = value;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get id() {
        return this._chipInput ? this._chipInput.id : this._uid;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get required() { return this._required; }
    set required(value) {
        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        this.stateChanges.next();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get placeholder() {
        return this._chipInput ? this._chipInput.placeholder : this._placeholder;
    }
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    /** Whether any chips or the matChipInput inside of this chip-list has focus. */
    get focused() {
        return (this._chipInput && this._chipInput.focused) || this._hasFocusedChip();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get empty() {
        return (!this._chipInput || this._chipInput.empty) && (!this.chips || this.chips.length === 0);
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get shouldLabelFloat() { return !this.empty || this.focused; }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get disabled() { return this.ngControl ? !!this.ngControl.disabled : this._disabled; }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        this._syncChipsState();
    }
    /**
     * Whether or not this chip list is selectable. When a chip list is not selectable,
     * the selected states for all the chips inside the chip list are always ignored.
     */
    get selectable() { return this._selectable; }
    set selectable(value) {
        this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        if (this.chips) {
            this.chips.forEach(chip => chip.chipListSelectable = this._selectable);
        }
    }
    set tabIndex(value) {
        this._userTabIndex = value;
        this._tabIndex = value;
    }
    /** Combined stream of all of the child chips' selection change events. */
    get chipSelectionChanges() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(...this.chips.map(chip => chip.selectionChange));
    }
    /** Combined stream of all of the child chips' focus change events. */
    get chipFocusChanges() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(...this.chips.map(chip => chip._onFocus));
    }
    /** Combined stream of all of the child chips' blur change events. */
    get chipBlurChanges() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(...this.chips.map(chip => chip._onBlur));
    }
    /** Combined stream of all of the child chips' remove change events. */
    get chipRemoveChanges() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(...this.chips.map(chip => chip.destroyed));
    }
    ngAfterContentInit() {
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusKeyManager"](this.chips)
            .withWrap()
            .withVerticalOrientation()
            .withHomeAndEnd()
            .withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed))
                .subscribe(dir => this._keyManager.withHorizontalOrientation(dir));
        }
        this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(() => {
            this._allowFocusEscape();
        });
        // When the list changes, re-subscribe
        this.chips.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(() => {
            if (this.disabled) {
                // Since this happens after the content has been
                // checked, we need to defer it to the next tick.
                Promise.resolve().then(() => {
                    this._syncChipsState();
                });
            }
            this._resetChips();
            // Reset chips selected/deselected status
            this._initializeSelection();
            // Check to see if we need to update our tab index
            this._updateTabIndex();
            // Check to see if we have a destroyed chip and need to refocus
            this._updateFocusForDestroyedChips();
            this.stateChanges.next();
        });
    }
    ngOnInit() {
        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["SelectionModel"](this.multiple, undefined, false);
        this.stateChanges.next();
    }
    ngDoCheck() {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
            if (this.ngControl.disabled !== this._disabled) {
                this.disabled = !!this.ngControl.disabled;
            }
        }
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
        this.stateChanges.complete();
        this._dropSubscriptions();
    }
    /** Associates an HTML input element with this chip list. */
    registerInput(inputElement) {
        this._chipInput = inputElement;
        // We use this attribute to match the chip list to its input in test harnesses.
        // Set the attribute directly here to avoid "changed after checked" errors.
        this._elementRef.nativeElement.setAttribute('data-mat-chip-input', inputElement.id);
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    setDescribedByIds(ids) { this._ariaDescribedby = ids.join(' '); }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
        if (this.chips) {
            this._setSelectionByValue(value, false);
        }
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
        this._onChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.stateChanges.next();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    onContainerClick(event) {
        if (!this._originatesFromChip(event)) {
            this.focus();
        }
    }
    /**
     * Focuses the first non-disabled chip in this chip list, or the associated input when there
     * are no eligible chips.
     */
    focus(options) {
        if (this.disabled) {
            return;
        }
        // TODO: ARIA says this should focus the first `selected` chip if any are selected.
        // Focus on first element if there's no chipInput inside chip-list
        if (this._chipInput && this._chipInput.focused) {
            // do nothing
        }
        else if (this.chips.length > 0) {
            this._keyManager.setFirstItemActive();
            this.stateChanges.next();
        }
        else {
            this._focusInput(options);
            this.stateChanges.next();
        }
    }
    /** Attempt to focus an input if we have one. */
    _focusInput(options) {
        if (this._chipInput) {
            this._chipInput.focus(options);
        }
    }
    /**
     * Pass events to the keyboard manager. Available here for tests.
     */
    _keydown(event) {
        const target = event.target;
        // If they are on an empty input and hit backspace, focus the last chip
        if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"] && this._isInputEmpty(target)) {
            this._keyManager.setLastItemActive();
            event.preventDefault();
        }
        else if (target && target.classList.contains('mat-chip')) {
            this._keyManager.onKeydown(event);
            this.stateChanges.next();
        }
    }
    /**
     * Check the tab index as you should not be allowed to focus an empty list.
     */
    _updateTabIndex() {
        // If we have 0 chips, we should not allow keyboard focus
        this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
    }
    /**
     * If the amount of chips changed, we need to update the
     * key manager state and focus the next closest chip.
     */
    _updateFocusForDestroyedChips() {
        // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
        if (this._lastDestroyedChipIndex != null) {
            if (this.chips.length) {
                const newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);
                this._keyManager.setActiveItem(newChipIndex);
            }
            else {
                this.focus();
            }
        }
        this._lastDestroyedChipIndex = null;
    }
    /**
     * Utility to ensure all indexes are valid.
     *
     * @param index The index to be checked.
     * @returns True if the index is valid for our list of chips.
     */
    _isValidIndex(index) {
        return index >= 0 && index < this.chips.length;
    }
    _isInputEmpty(element) {
        if (element && element.nodeName.toLowerCase() === 'input') {
            let input = element;
            return !input.value;
        }
        return false;
    }
    _setSelectionByValue(value, isUserInput = true) {
        this._clearSelection();
        this.chips.forEach(chip => chip.deselect());
        if (Array.isArray(value)) {
            value.forEach(currentValue => this._selectValue(currentValue, isUserInput));
            this._sortValues();
        }
        else {
            const correspondingChip = this._selectValue(value, isUserInput);
            // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what chip the user interacted with last.
            if (correspondingChip) {
                if (isUserInput) {
                    this._keyManager.setActiveItem(correspondingChip);
                }
            }
        }
    }
    /**
     * Finds and selects the chip based on its value.
     * @returns Chip that has the corresponding value.
     */
    _selectValue(value, isUserInput = true) {
        const correspondingChip = this.chips.find(chip => {
            return chip.value != null && this._compareWith(chip.value, value);
        });
        if (correspondingChip) {
            isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
            this._selectionModel.select(correspondingChip);
        }
        return correspondingChip;
    }
    _initializeSelection() {
        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then(() => {
            if (this.ngControl || this._value) {
                this._setSelectionByValue(this.ngControl ? this.ngControl.value : this._value, false);
                this.stateChanges.next();
            }
        });
    }
    /**
     * Deselects every chip in the list.
     * @param skip Chip that should not be deselected.
     */
    _clearSelection(skip) {
        this._selectionModel.clear();
        this.chips.forEach(chip => {
            if (chip !== skip) {
                chip.deselect();
            }
        });
        this.stateChanges.next();
    }
    /**
     * Sorts the model values, ensuring that they keep the same
     * order that they have in the panel.
     */
    _sortValues() {
        if (this._multiple) {
            this._selectionModel.clear();
            this.chips.forEach(chip => {
                if (chip.selected) {
                    this._selectionModel.select(chip);
                }
            });
            this.stateChanges.next();
        }
    }
    /** Emits change event to set the model value. */
    _propagateChanges(fallbackValue) {
        let valueToEmit = null;
        if (Array.isArray(this.selected)) {
            valueToEmit = this.selected.map(chip => chip.value);
        }
        else {
            valueToEmit = this.selected ? this.selected.value : fallbackValue;
        }
        this._value = valueToEmit;
        this.change.emit(new MatChipListChange(this, valueToEmit));
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this._changeDetectorRef.markForCheck();
    }
    /** When blurred, mark the field as touched when focus moved outside the chip list. */
    _blur() {
        if (!this._hasFocusedChip()) {
            this._keyManager.setActiveItem(-1);
        }
        if (!this.disabled) {
            if (this._chipInput) {
                // If there's a chip input, we should check whether the focus moved to chip input.
                // If the focus is not moved to chip input, mark the field as touched. If the focus moved
                // to chip input, do nothing.
                // Timeout is needed to wait for the focus() event trigger on chip input.
                setTimeout(() => {
                    if (!this.focused) {
                        this._markAsTouched();
                    }
                });
            }
            else {
                // If there's no chip input, then mark the field as touched.
                this._markAsTouched();
            }
        }
    }
    /** Mark the field as touched */
    _markAsTouched() {
        this._onTouched();
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    }
    /**
     * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the list from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     */
    _allowFocusEscape() {
        if (this._tabIndex !== -1) {
            this._tabIndex = -1;
            setTimeout(() => {
                this._tabIndex = this._userTabIndex || 0;
                this._changeDetectorRef.markForCheck();
            });
        }
    }
    _resetChips() {
        this._dropSubscriptions();
        this._listenToChipsFocus();
        this._listenToChipsSelection();
        this._listenToChipsRemoved();
    }
    _dropSubscriptions() {
        if (this._chipFocusSubscription) {
            this._chipFocusSubscription.unsubscribe();
            this._chipFocusSubscription = null;
        }
        if (this._chipBlurSubscription) {
            this._chipBlurSubscription.unsubscribe();
            this._chipBlurSubscription = null;
        }
        if (this._chipSelectionSubscription) {
            this._chipSelectionSubscription.unsubscribe();
            this._chipSelectionSubscription = null;
        }
        if (this._chipRemoveSubscription) {
            this._chipRemoveSubscription.unsubscribe();
            this._chipRemoveSubscription = null;
        }
    }
    /** Listens to user-generated selection events on each chip. */
    _listenToChipsSelection() {
        this._chipSelectionSubscription = this.chipSelectionChanges.subscribe(event => {
            event.source.selected
                ? this._selectionModel.select(event.source)
                : this._selectionModel.deselect(event.source);
            // For single selection chip list, make sure the deselected value is unselected.
            if (!this.multiple) {
                this.chips.forEach(chip => {
                    if (!this._selectionModel.isSelected(chip) && chip.selected) {
                        chip.deselect();
                    }
                });
            }
            if (event.isUserInput) {
                this._propagateChanges();
            }
        });
    }
    /** Listens to user-generated selection events on each chip. */
    _listenToChipsFocus() {
        this._chipFocusSubscription = this.chipFocusChanges.subscribe(event => {
            let chipIndex = this.chips.toArray().indexOf(event.chip);
            if (this._isValidIndex(chipIndex)) {
                this._keyManager.updateActiveItem(chipIndex);
            }
            this.stateChanges.next();
        });
        this._chipBlurSubscription = this.chipBlurChanges.subscribe(() => {
            this._blur();
            this.stateChanges.next();
        });
    }
    _listenToChipsRemoved() {
        this._chipRemoveSubscription = this.chipRemoveChanges.subscribe(event => {
            const chip = event.chip;
            const chipIndex = this.chips.toArray().indexOf(event.chip);
            // In case the chip that will be removed is currently focused, we temporarily store
            // the index in order to be able to determine an appropriate sibling chip that will
            // receive focus.
            if (this._isValidIndex(chipIndex) && chip._hasFocus) {
                this._lastDestroyedChipIndex = chipIndex;
            }
        });
    }
    /** Checks whether an event comes from inside a chip element. */
    _originatesFromChip(event) {
        let currentElement = event.target;
        while (currentElement && currentElement !== this._elementRef.nativeElement) {
            if (currentElement.classList.contains('mat-chip')) {
                return true;
            }
            currentElement = currentElement.parentElement;
        }
        return false;
    }
    /** Checks whether any of the chips is focused. */
    _hasFocusedChip() {
        return this.chips && this.chips.some(chip => chip._hasFocus);
    }
    /** Syncs the list's state with the individual chips. */
    _syncChipsState() {
        if (this.chips) {
            this.chips.forEach(chip => {
                chip._chipListDisabled = this._disabled;
                chip._chipListMultiple = this.multiple;
            });
        }
    }
}
MatChipList.ɵfac = function MatChipList_Factory(t) { return new (t || MatChipList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], 10)); };
MatChipList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatChipList, selectors: [["mat-chip-list"]], contentQueries: function MatChipList_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatChip, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chips = _t);
    } }, hostAttrs: [1, "mat-chip-list"], hostVars: 15, hostBindings: function MatChipList_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatChipList_focus_HostBindingHandler() { return ctx.focus(); })("blur", function MatChipList_blur_HostBindingHandler() { return ctx._blur(); })("keydown", function MatChipList_keydown_HostBindingHandler($event) { return ctx._keydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx._uid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx._tabIndex)("aria-describedby", ctx._ariaDescribedby || null)("aria-required", ctx.role ? ctx.required : null)("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-multiselectable", ctx.multiple)("role", ctx.role)("aria-orientation", ctx.ariaOrientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-chip-list-disabled", ctx.disabled)("mat-chip-list-invalid", ctx.errorState)("mat-chip-list-required", ctx.required);
    } }, inputs: { ariaOrientation: ["aria-orientation", "ariaOrientation"], multiple: "multiple", compareWith: "compareWith", value: "value", required: "required", placeholder: "placeholder", disabled: "disabled", selectable: "selectable", tabIndex: "tabIndex", errorStateMatcher: "errorStateMatcher" }, outputs: { change: "change", valueChange: "valueChange" }, exportAs: ["matChipList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"], useExisting: MatChipList }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "mat-chip-list-wrapper"]], template: function MatChipList_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"], encapsulation: 2, changeDetection: 0 });
MatChipList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] }
];
MatChipList.propDecorators = {
    errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ariaOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-orientation',] }],
    selectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    chips: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [MatChip, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mat-chip-list',
                template: `<div class="mat-chip-list-wrapper"><ng-content></ng-content></div>`,
                exportAs: 'matChipList',
                host: {
                    '[attr.tabindex]': 'disabled ? null : _tabIndex',
                    '[attr.aria-describedby]': '_ariaDescribedby || null',
                    '[attr.aria-required]': 'role ? required : null',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-invalid]': 'errorState',
                    '[attr.aria-multiselectable]': 'multiple',
                    '[attr.role]': 'role',
                    '[class.mat-chip-list-disabled]': 'disabled',
                    '[class.mat-chip-list-invalid]': 'errorState',
                    '[class.mat-chip-list-required]': 'required',
                    '[attr.aria-orientation]': 'ariaOrientation',
                    'class': 'mat-chip-list',
                    '(focus)': 'focus()',
                    '(blur)': '_blur()',
                    '(keydown)': '_keydown($event)',
                    '[id]': '_uid'
                },
                providers: [{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"], useExisting: MatChipList }],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }] }]; }, { ariaOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-orientation']
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], chips: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [MatChip, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids.
let nextUniqueId$1 = 0;
/**
 * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
 * May be placed inside or outside of an `<mat-chip-list>`.
 */
class MatChipInput {
    constructor(_elementRef, _defaultOptions) {
        this._elementRef = _elementRef;
        this._defaultOptions = _defaultOptions;
        /** Whether the control is focused. */
        this.focused = false;
        this._addOnBlur = false;
        /**
         * The list of key codes that will trigger a chipEnd event.
         *
         * Defaults to `[ENTER]`.
         */
        this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
        /** Emitted when a chip is to be added. */
        this.chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** The input's placeholder text. */
        this.placeholder = '';
        /** Unique id for the input. */
        this.id = `mat-chip-list-input-${nextUniqueId$1++}`;
        this._disabled = false;
        this._inputElement = this._elementRef.nativeElement;
    }
    /** Register input for chip list */
    set chipList(value) {
        if (value) {
            this._chipList = value;
            this._chipList.registerInput(this);
        }
    }
    /**
     * Whether or not the chipEnd event will be emitted when the input is blurred.
     */
    get addOnBlur() { return this._addOnBlur; }
    set addOnBlur(value) { this._addOnBlur = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); }
    /** Whether the input is disabled. */
    get disabled() { return this._disabled || (this._chipList && this._chipList.disabled); }
    set disabled(value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); }
    /** Whether the input is empty. */
    get empty() { return !this._inputElement.value; }
    ngOnChanges() {
        this._chipList.stateChanges.next();
    }
    /** Utility method to make host definition/tests more clear. */
    _keydown(event) {
        // Allow the user's focus to escape when they're tabbing forward. Note that we don't
        // want to do this when going backwards, because focus should go back to the first chip.
        if (event && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["TAB"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event, 'shiftKey')) {
            this._chipList._allowFocusEscape();
        }
        this._emitChipEnd(event);
    }
    /** Checks to see if the blur should emit the (chipEnd) event. */
    _blur() {
        if (this.addOnBlur) {
            this._emitChipEnd();
        }
        this.focused = false;
        // Blur the chip list if it is not focused
        if (!this._chipList.focused) {
            this._chipList._blur();
        }
        this._chipList.stateChanges.next();
    }
    _focus() {
        this.focused = true;
        this._chipList.stateChanges.next();
    }
    /** Checks to see if the (chipEnd) event needs to be emitted. */
    _emitChipEnd(event) {
        if (!this._inputElement.value && !!event) {
            this._chipList._keydown(event);
        }
        if (!event || this._isSeparatorKey(event)) {
            this.chipEnd.emit({ input: this._inputElement, value: this._inputElement.value });
            if (event) {
                event.preventDefault();
            }
        }
    }
    _onInput() {
        // Let chip list know whenever the value changes.
        this._chipList.stateChanges.next();
    }
    /** Focuses the input. */
    focus(options) {
        this._inputElement.focus(options);
    }
    /** Checks whether a keycode is one of the configured separators. */
    _isSeparatorKey(event) {
        return !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event) && new Set(this.separatorKeyCodes).has(event.keyCode);
    }
}
MatChipInput.ɵfac = function MatChipInput_Factory(t) { return new (t || MatChipInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_CHIPS_DEFAULT_OPTIONS)); };
MatChipInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatChipInput, selectors: [["input", "matChipInputFor", ""]], hostAttrs: [1, "mat-chip-input", "mat-input-element"], hostVars: 5, hostBindings: function MatChipInput_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MatChipInput_keydown_HostBindingHandler($event) { return ctx._keydown($event); })("blur", function MatChipInput_blur_HostBindingHandler() { return ctx._blur(); })("focus", function MatChipInput_focus_HostBindingHandler() { return ctx._focus(); })("input", function MatChipInput_input_HostBindingHandler() { return ctx._onInput(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.disabled || null)("placeholder", ctx.placeholder || null)("aria-invalid", ctx._chipList && ctx._chipList.ngControl ? ctx._chipList.ngControl.invalid : null)("aria-required", ctx._chipList && ctx._chipList.required || null);
    } }, inputs: { separatorKeyCodes: ["matChipInputSeparatorKeyCodes", "separatorKeyCodes"], placeholder: "placeholder", id: "id", chipList: ["matChipInputFor", "chipList"], addOnBlur: ["matChipInputAddOnBlur", "addOnBlur"], disabled: "disabled" }, outputs: { chipEnd: "matChipInputTokenEnd" }, exportAs: ["matChipInput", "matChipInputFor"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
MatChipInput.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_CHIPS_DEFAULT_OPTIONS,] }] }
];
MatChipInput.propDecorators = {
    chipList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matChipInputFor',] }],
    addOnBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matChipInputAddOnBlur',] }],
    separatorKeyCodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matChipInputSeparatorKeyCodes',] }],
    chipEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['matChipInputTokenEnd',] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'input[matChipInputFor]',
                exportAs: 'matChipInput, matChipInputFor',
                host: {
                    'class': 'mat-chip-input mat-input-element',
                    '(keydown)': '_keydown($event)',
                    '(blur)': '_blur()',
                    '(focus)': '_focus()',
                    '(input)': '_onInput()',
                    '[id]': 'id',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.placeholder]': 'placeholder || null',
                    '[attr.aria-invalid]': '_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null',
                    '[attr.aria-required]': '_chipList && _chipList.required || null'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [MAT_CHIPS_DEFAULT_OPTIONS]
            }] }]; }, { separatorKeyCodes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputSeparatorKeyCodes']
        }], chipEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['matChipInputTokenEnd']
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], chipList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputFor']
        }], addOnBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputAddOnBlur']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const CHIP_DECLARATIONS = [
    MatChipList,
    MatChip,
    MatChipInput,
    MatChipRemove,
    MatChipAvatar,
    MatChipTrailingIcon,
];
const ɵ0 = {
    separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"]]
};
class MatChipsModule {
}
MatChipsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatChipsModule });
MatChipsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MatChipsModule_Factory(t) { return new (t || MatChipsModule)(); }, providers: [
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"],
        {
            provide: MAT_CHIPS_DEFAULT_OPTIONS,
            useValue: ɵ0
        }
    ], imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatChipsModule, { declarations: function () { return [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; }, exports: function () { return [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
                exports: CHIP_DECLARATIONS,
                declarations: CHIP_DECLARATIONS,
                providers: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"],
                    {
                        provide: MAT_CHIPS_DEFAULT_OPTIONS,
                        useValue: ɵ0
                    }
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=chips.js.map

/***/ }),

/***/ "gOqG":
/*!***************************************************!*\
  !*** ./src/app/main/details/details.component.ts ***!
  \***************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts-angular */ "JUyF");







class DetailsComponent {
    constructor() {
        this.label1 = 'Cozinha/Lavanderia';
        this.label2 = 'Quarto/Sala';
        this.apar1 = 'Liquidificador';
        this.apar2 = 'Air Fryer';
        this.apar3 = 'Geladeira';
        this.apar4 = 'Aspirador de pó';
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.charts1 = {};
        this.charts2 = {};
    }
    ngOnInit() {
        this.charts2 = {
            chart: {
                type: 'area'
            },
            title: {
                text: null
            },
            subtitle: {
                text: null
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            xAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            yAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            series: [{
                    data: [70, 10, 56, 50,]
                }]
        };
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 53, vars: 18, consts: [["fxLayout", "row", "fx", "", "fxLayoutAlign", "space center", "fxLayoutGap", "20px", 1, "stats-cards"], ["fxFlex", "25"], [1, "text"], ["color", "primary"], [2, "width", "90%", "height", "100px", "display", "block", 3, "Highcharts", "options"], ["fxLayout", "row", "fx", "", "fxLayoutAlign", "space-between center", "fxLayoutGap", "20px", 1, "stats-cards"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "highcharts-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "highcharts-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "highcharts-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "highcharts-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "highcharts-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "highcharts-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.charts2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.charts2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.apar1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.charts2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.apar1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.charts2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.apar3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.charts2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.apar4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.charts2);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], highcharts_angular__WEBPACK_IMPORTED_MODULE_5__["HighchartsChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details',
                templateUrl: './details.component.html',
                styleUrls: ['./details.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "o4Yh":
/*!**************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/expansion.js ***!
  \**************************************************************/
/*! exports provided: EXPANSION_PANEL_ANIMATION_TIMING, MAT_ACCORDION, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelContent, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle, matExpansionAnimations, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPANSION_PANEL_ANIMATION_TIMING", function() { return EXPANSION_PANEL_ANIMATION_TIMING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ACCORDION", function() { return MAT_ACCORDION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS", function() { return MAT_EXPANSION_PANEL_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAccordion", function() { return MatAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionModule", function() { return MatExpansionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanel", function() { return MatExpansionPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelActionRow", function() { return MatExpansionPanelActionRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelContent", function() { return MatExpansionPanelContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelDescription", function() { return MatExpansionPanelDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelHeader", function() { return MatExpansionPanelHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelTitle", function() { return MatExpansionPanelTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matExpansionAnimations", function() { return matExpansionAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/accordion */ "GF+f");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");














/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
 * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
 */






const _c0 = ["body"];
function MatExpansionPanel_ng_template_5_Template(rf, ctx) { }
const _c1 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
const _c2 = ["mat-expansion-panel-header", "*", "mat-action-row"];
function MatExpansionPanelHeader_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@indicatorRotate", ctx_r0._getExpandedState());
} }
const _c3 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
const _c4 = ["mat-panel-title", "mat-panel-description", "*"];
const MAT_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_ACCORDION');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Time and timing curve for expansion panel animations. */
// Note: Keep this in sync with the Sass variable for the panel header animation.
const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/**
 * Animations used by the Material expansion panel.
 *
 * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
 * causes the animation state of moved components to become `void` upon exit, and not update again
 * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
 * of the panel is `expanded` or `collapsed` but the animation state is `void`.
 *
 * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
 * are defined to have the same styles. Since angular animates from the current styles to the
 * destination state's style definition, in situations where we are moving from `void`'s styles to
 * `collapsed` this acts a noop since no style values change.
 *
 * In the case where angular's animation state is out of sync with the expansion panel's state, the
 * expansion panel being `expanded` and angular animations being `void`, the animation from the
 * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
 * occur as expected.
 *
 * Angular Bug: https://github.com/angular/angular/issues/18847
 *
 * @docs-private
 */
const matExpansionAnimations = {
    /** Animation that rotates the indicator arrow. */
    indicatorRotate: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('indicatorRotate', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ transform: 'rotate(0deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ transform: 'rotate(180deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING)),
    ]),
    /** Animation that expands and collapses the panel content. */
    bodyExpansion: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('bodyExpansion', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ height: '0px', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ height: '*', visibility: 'visible' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING)),
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Expansion panel content that will be rendered lazily
 * after the panel is opened for the first time.
 */
class MatExpansionPanelContent {
    constructor(_template) {
        this._template = _template;
    }
}
MatExpansionPanelContent.ɵfac = function MatExpansionPanelContent_Factory(t) { return new (t || MatExpansionPanelContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
MatExpansionPanelContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatExpansionPanelContent, selectors: [["ng-template", "matExpansionPanelContent", ""]] });
MatExpansionPanelContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'ng-template[matExpansionPanelContent]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Counter for generating unique element ids. */
let uniqueId = 0;
/**
 * Injection token that can be used to configure the defalt
 * options for the expansion panel component.
 */
const MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
const ɵ0 = undefined;
/**
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the MatAccordion directive attached.
 */
class MatExpansionPanel extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionItem"] {
    constructor(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
        super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
        this._viewContainerRef = _viewContainerRef;
        this._animationMode = _animationMode;
        this._hideToggle = false;
        /** An event emitted after the body's expansion animation happens. */
        this.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /** An event emitted after the body's collapse animation happens. */
        this.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /** Stream that emits for changes in `@Input` properties. */
        this._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        /** ID for the associated header element. Used for a11y labelling. */
        this._headerId = `mat-expansion-panel-header-${uniqueId++}`;
        /** Stream of body animation done events. */
        this._bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.accordion = accordion;
        this._document = _document;
        // We need a Subject with distinctUntilChanged, because the `done` event
        // fires twice on some browsers. See https://github.com/angular/angular/issues/24084
        this._bodyAnimationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])((x, y) => {
            return x.fromState === y.fromState && x.toState === y.toState;
        })).subscribe(event => {
            if (event.fromState !== 'void') {
                if (event.toState === 'expanded') {
                    this.afterExpand.emit();
                }
                else if (event.toState === 'collapsed') {
                    this.afterCollapse.emit();
                }
            }
        });
        if (defaultOptions) {
            this.hideToggle = defaultOptions.hideToggle;
        }
    }
    /** Whether the toggle indicator should be hidden. */
    get hideToggle() {
        return this._hideToggle || (this.accordion && this.accordion.hideToggle);
    }
    set hideToggle(value) {
        this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
    }
    /** The position of the expansion indicator. */
    get togglePosition() {
        return this._togglePosition || (this.accordion && this.accordion.togglePosition);
    }
    set togglePosition(value) {
        this._togglePosition = value;
    }
    /** Determines whether the expansion panel should have spacing between it and its siblings. */
    _hasSpacing() {
        if (this.accordion) {
            return this.expanded && this.accordion.displayMode === 'default';
        }
        return false;
    }
    /** Gets the expanded state string. */
    _getExpandedState() {
        return this.expanded ? 'expanded' : 'collapsed';
    }
    /** Toggles the expanded state of the expansion panel. */
    toggle() {
        this.expanded = !this.expanded;
    }
    /** Sets the expanded state of the expansion panel to false. */
    close() {
        this.expanded = false;
    }
    /** Sets the expanded state of the expansion panel to true. */
    open() {
        this.expanded = true;
    }
    ngAfterContentInit() {
        if (this._lazyContent) {
            // Render the content as soon as the panel becomes open.
            this.opened.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(() => this.expanded && !this._portal), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(() => {
                this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](this._lazyContent._template, this._viewContainerRef);
            });
        }
    }
    ngOnChanges(changes) {
        this._inputChanges.next(changes);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._bodyAnimationDone.complete();
        this._inputChanges.complete();
    }
    /** Checks whether the expansion panel's content contains the currently-focused element. */
    _containsFocus() {
        if (this._body) {
            const focusedElement = this._document.activeElement;
            const bodyElement = this._body.nativeElement;
            return focusedElement === bodyElement || bodyElement.contains(focusedElement);
        }
        return false;
    }
}
MatExpansionPanel.ɵfac = function MatExpansionPanel_Factory(t) { return new (t || MatExpansionPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["UniqueSelectionDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8)); };
MatExpansionPanel.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MatExpansionPanel, selectors: [["mat-expansion-panel"]], contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelContent, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
    } }, viewQuery: function MatExpansionPanel_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._body = _t.first);
    } }, hostAttrs: [1, "mat-expansion-panel"], hostVars: 6, hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-expanded", ctx.expanded)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-expansion-panel-spacing", ctx._hasSpacing());
    } }, inputs: { disabled: "disabled", expanded: "expanded", hideToggle: "hideToggle", togglePosition: "togglePosition" }, outputs: { opened: "opened", closed: "closed", expandedChange: "expandedChange", afterExpand: "afterExpand", afterCollapse: "afterCollapse" }, exportAs: ["matExpansionPanel"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            // Provide MatAccordion as undefined to prevent nested expansion panels from registering
            // to the same accordion.
            { provide: MAT_ACCORDION, useValue: ɵ0 },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 7, vars: 4, consts: [["role", "region", 1, "mat-expansion-panel-content", 3, "id"], ["body", ""], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]], template: function MatExpansionPanel_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@bodyExpansion.done", function MatExpansionPanel_Template_div_animation_bodyExpansion_done_1_listener($event) { return ctx._bodyAnimationDone.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MatExpansionPanel_ng_template_5_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](6, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@bodyExpansion", ctx._getExpandedState())("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-labelledby", ctx._headerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkPortalOutlet", ctx._portal);
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]], styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"], encapsulation: 2, data: { animation: [matExpansionAnimations.bodyExpansion] }, changeDetection: 0 });
MatExpansionPanel.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_ACCORDION,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["UniqueSelectionDispatcher"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
MatExpansionPanel.propDecorators = {
    hideToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    togglePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    afterExpand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    afterCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    _lazyContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [MatExpansionPanelContent,] }],
    _body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['body',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'mat-expansion-panel',
                exportAs: 'matExpansionPanel',
                template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content>\n<div class=\"mat-expansion-panel-content\"\n     role=\"region\"\n     [@bodyExpansion]=\"_getExpandedState()\"\n     (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\n     [attr.aria-labelledby]=\"_headerId\"\n     [id]=\"id\"\n     #body>\n  <div class=\"mat-expansion-panel-body\">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n  </div>\n  <ng-content select=\"mat-action-row\"></ng-content>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                inputs: ['disabled', 'expanded'],
                outputs: ['opened', 'closed', 'expandedChange'],
                animations: [matExpansionAnimations.bodyExpansion],
                providers: [
                    // Provide MatAccordion as undefined to prevent nested expansion panels from registering
                    // to the same accordion.
                    { provide: MAT_ACCORDION, useValue: ɵ0 },
                ],
                host: {
                    'class': 'mat-expansion-panel',
                    '[class.mat-expanded]': 'expanded',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                    '[class.mat-expansion-panel-spacing]': '_hasSpacing()'
                },
                styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_ACCORDION]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["UniqueSelectionDispatcher"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { afterExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], afterCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], hideToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], togglePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], _lazyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [MatExpansionPanelContent]
        }], _body: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['body']
        }] }); })();
/**
 * Actions of a `<mat-expansion-panel>`.
 */
class MatExpansionPanelActionRow {
}
MatExpansionPanelActionRow.ɵfac = function MatExpansionPanelActionRow_Factory(t) { return new (t || MatExpansionPanelActionRow)(); };
MatExpansionPanelActionRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatExpansionPanelActionRow, selectors: [["mat-action-row"]], hostAttrs: [1, "mat-action-row"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelActionRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'mat-action-row',
                host: {
                    class: 'mat-action-row'
                }
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Header element of a `<mat-expansion-panel>`.
 */
class MatExpansionPanelHeader {
    constructor(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions, _animationMode) {
        this.panel = panel;
        this._element = _element;
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this._animationMode = _animationMode;
        this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;
        const accordionHideToggleChange = panel.accordion ?
            panel.accordion._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(changes => !!(changes['hideToggle'] || changes['togglePosition']))) :
            rxjs__WEBPACK_IMPORTED_MODULE_10__["EMPTY"];
        // Since the toggle state depends on an @Input on the panel, we
        // need to subscribe and trigger change detection manually.
        this._parentChangeSubscription =
            Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(changes => {
                return !!(changes['hideToggle'] ||
                    changes['disabled'] ||
                    changes['togglePosition']);
            })))
                .subscribe(() => this._changeDetectorRef.markForCheck());
        // Avoids focus being lost if the panel contained the focused element and was closed.
        panel.closed
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(() => panel._containsFocus()))
            .subscribe(() => _focusMonitor.focusVia(_element, 'program'));
        if (defaultOptions) {
            this.expandedHeight = defaultOptions.expandedHeight;
            this.collapsedHeight = defaultOptions.collapsedHeight;
        }
    }
    /**
     * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
     * @docs-private
     */
    get disabled() {
        return this.panel.disabled;
    }
    /** Toggles the expanded state of the panel. */
    _toggle() {
        if (!this.disabled) {
            this.panel.toggle();
        }
    }
    /** Gets whether the panel is expanded. */
    _isExpanded() {
        return this.panel.expanded;
    }
    /** Gets the expanded state string of the panel. */
    _getExpandedState() {
        return this.panel._getExpandedState();
    }
    /** Gets the panel id. */
    _getPanelId() {
        return this.panel.id;
    }
    /** Gets the toggle position for the header. */
    _getTogglePosition() {
        return this.panel.togglePosition;
    }
    /** Gets whether the expand indicator should be shown. */
    _showToggle() {
        return !this.panel.hideToggle && !this.panel.disabled;
    }
    /**
     * Gets the current height of the header. Null if no custom height has been
     * specified, and if the default height from the stylesheet should be used.
     */
    _getHeaderHeight() {
        const isExpanded = this._isExpanded();
        if (isExpanded && this.expandedHeight) {
            return this.expandedHeight;
        }
        else if (!isExpanded && this.collapsedHeight) {
            return this.collapsedHeight;
        }
        return null;
    }
    /** Handle keydown event calling to toggle() if appropriate. */
    _keydown(event) {
        switch (event.keyCode) {
            // Toggle for space and enter keys.
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["SPACE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"]:
                if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event)) {
                    event.preventDefault();
                    this._toggle();
                }
                break;
            default:
                if (this.panel.accordion) {
                    this.panel.accordion._handleHeaderKeydown(event);
                }
                return;
        }
    }
    /**
     * Focuses the panel header. Implemented as a part of `FocusableOption`.
     * @param origin Origin of the action that triggered the focus.
     * @docs-private
     */
    focus(origin, options) {
        if (origin) {
            this._focusMonitor.focusVia(this._element, origin, options);
        }
        else {
            this._element.nativeElement.focus(options);
        }
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this._element).subscribe(origin => {
            if (origin && this.panel.accordion) {
                this.panel.accordion._handleHeaderFocus(this);
            }
        });
    }
    ngOnDestroy() {
        this._parentChangeSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._element);
    }
}
MatExpansionPanelHeader.ɵfac = function MatExpansionPanelHeader_Factory(t) { return new (t || MatExpansionPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatExpansionPanel, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], 8)); };
MatExpansionPanelHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MatExpansionPanelHeader, selectors: [["mat-expansion-panel-header"]], hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"], hostVars: 15, hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatExpansionPanelHeader_click_HostBindingHandler() { return ctx._toggle(); })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) { return ctx._keydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx.panel._headerId)("tabindex", ctx.disabled ? -1 : 0)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", ctx._getHeaderHeight());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { expandedHeight: "expandedHeight", collapsedHeight: "collapsedHeight" }, ngContentSelectors: _c4, decls: 5, vars: 1, consts: [[1, "mat-content"], ["class", "mat-expansion-indicator", 4, "ngIf"], [1, "mat-expansion-indicator"]], template: function MatExpansionPanelHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MatExpansionPanelHeader_span_4_Template, 1, 1, "span", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._showToggle());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:\"\"}\n"], encapsulation: 2, data: { animation: [
            matExpansionAnimations.indicatorRotate,
        ] }, changeDetection: 0 });
MatExpansionPanelHeader.ctorParameters = () => [
    { type: MatExpansionPanel, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"],] }] }
];
MatExpansionPanelHeader.propDecorators = {
    expandedHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    collapsedHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'mat-expansion-panel-header',
                template: "<span class=\"mat-content\">\n  <ng-content select=\"mat-panel-title\"></ng-content>\n  <ng-content select=\"mat-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\"\n      class=\"mat-expansion-indicator\"></span>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                animations: [
                    matExpansionAnimations.indicatorRotate,
                ],
                host: {
                    'class': 'mat-expansion-panel-header mat-focus-indicator',
                    'role': 'button',
                    '[attr.id]': 'panel._headerId',
                    '[attr.tabindex]': 'disabled ? -1 : 0',
                    '[attr.aria-controls]': '_getPanelId()',
                    '[attr.aria-expanded]': '_isExpanded()',
                    '[attr.aria-disabled]': 'panel.disabled',
                    '[class.mat-expanded]': '_isExpanded()',
                    '[class.mat-expansion-toggle-indicator-after]': `_getTogglePosition() === 'after'`,
                    '[class.mat-expansion-toggle-indicator-before]': `_getTogglePosition() === 'before'`,
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                    '[style.height]': '_getHeaderHeight()',
                    '(click)': '_toggle()',
                    '(keydown)': '_keydown($event)'
                },
                styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:\"\"}\n"]
            }]
    }], function () { return [{ type: MatExpansionPanel, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { expandedHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], collapsedHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
/**
 * Description element of a `<mat-expansion-panel-header>`.
 */
class MatExpansionPanelDescription {
}
MatExpansionPanelDescription.ɵfac = function MatExpansionPanelDescription_Factory(t) { return new (t || MatExpansionPanelDescription)(); };
MatExpansionPanelDescription.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatExpansionPanelDescription, selectors: [["mat-panel-description"]], hostAttrs: [1, "mat-expansion-panel-header-description"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelDescription, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'mat-panel-description',
                host: {
                    class: 'mat-expansion-panel-header-description'
                }
            }]
    }], null, null); })();
/**
 * Title element of a `<mat-expansion-panel-header>`.
 */
class MatExpansionPanelTitle {
}
MatExpansionPanelTitle.ɵfac = function MatExpansionPanelTitle_Factory(t) { return new (t || MatExpansionPanelTitle)(); };
MatExpansionPanelTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatExpansionPanelTitle, selectors: [["mat-panel-title"]], hostAttrs: [1, "mat-expansion-panel-header-title"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'mat-panel-title',
                host: {
                    class: 'mat-expansion-panel-header-title'
                }
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Directive for a Material Design Accordion.
 */
class MatAccordion extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordion"] {
    constructor() {
        super(...arguments);
        /** Headers belonging to this accordion. */
        this._ownHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
        this._hideToggle = false;
        /**
         * Display mode used for all expansion panels in the accordion. Currently two display
         * modes exist:
         *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
         *     panel at a different elevation from the rest of the accordion.
         *  flat - no spacing is placed around expanded panels, showing all panels at the same
         *     elevation.
         */
        this.displayMode = 'default';
        /** The position of the expansion indicator. */
        this.togglePosition = 'after';
    }
    /** Whether the expansion indicator should be hidden. */
    get hideToggle() { return this._hideToggle; }
    set hideToggle(show) { this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(show); }
    ngAfterContentInit() {
        this._headers.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._headers))
            .subscribe((headers) => {
            this._ownHeaders.reset(headers.filter(header => header.panel.accordion === this));
            this._ownHeaders.notifyOnChanges();
        });
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusKeyManager"](this._ownHeaders).withWrap().withHomeAndEnd();
    }
    /** Handles keyboard events coming in from the panel headers. */
    _handleHeaderKeydown(event) {
        this._keyManager.onKeydown(event);
    }
    _handleHeaderFocus(header) {
        this._keyManager.updateActiveItem(header);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._ownHeaders.destroy();
    }
}
MatAccordion.ɵfac = function MatAccordion_Factory(t) { return ɵMatAccordion_BaseFactory(t || MatAccordion); };
MatAccordion.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatAccordion, selectors: [["mat-accordion"]], contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelHeader, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headers = _t);
    } }, hostAttrs: [1, "mat-accordion"], hostVars: 2, hostBindings: function MatAccordion_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-accordion-multi", ctx.multi);
    } }, inputs: { multi: "multi", displayMode: "displayMode", togglePosition: "togglePosition", hideToggle: "hideToggle" }, exportAs: ["matAccordion"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
                provide: MAT_ACCORDION,
                useExisting: MatAccordion
            }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
MatAccordion.propDecorators = {
    _headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [MatExpansionPanelHeader, { descendants: true },] }],
    hideToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    displayMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    togglePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
const ɵMatAccordion_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatAccordion);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatAccordion, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'mat-accordion',
                exportAs: 'matAccordion',
                inputs: ['multi'],
                providers: [{
                        provide: MAT_ACCORDION,
                        useExisting: MatAccordion
                    }],
                host: {
                    class: 'mat-accordion',
                    // Class binding which is only used by the test harness as there is no other
                    // way for the harness to detect if multiple panel support is enabled.
                    '[class.mat-accordion-multi]': 'this.multi'
                }
            }]
    }], null, { displayMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], togglePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], hideToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], _headers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatExpansionPanelHeader, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatExpansionModule {
}
MatExpansionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MatExpansionModule });
MatExpansionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function MatExpansionModule_Factory(t) { return new (t || MatExpansionModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatExpansionModule, { declarations: function () { return [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]]; }, exports: function () { return [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]],
                exports: [
                    MatAccordion,
                    MatExpansionPanel,
                    MatExpansionPanelActionRow,
                    MatExpansionPanelHeader,
                    MatExpansionPanelTitle,
                    MatExpansionPanelDescription,
                    MatExpansionPanelContent,
                ],
                declarations: [
                    MatAccordion,
                    MatExpansionPanel,
                    MatExpansionPanelActionRow,
                    MatExpansionPanelHeader,
                    MatExpansionPanelTitle,
                    MatExpansionPanelDescription,
                    MatExpansionPanelContent,
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=expansion.js.map

/***/ }),

/***/ "pMoy":
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/checkbox.js ***!
  \*************************************************************/
/*! exports provided: MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, MAT_CHECKBOX_DEFAULT_OPTIONS, MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY, MAT_CHECKBOX_REQUIRED_VALIDATOR, MatCheckbox, MatCheckboxChange, MatCheckboxModule, MatCheckboxRequiredValidator, _MatCheckboxRequiredValidatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR", function() { return MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_DEFAULT_OPTIONS", function() { return MAT_CHECKBOX_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY", function() { return MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_REQUIRED_VALIDATOR", function() { return MAT_CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckbox", function() { return MatCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxChange", function() { return MatCheckboxChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxModule", function() { return MatCheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxRequiredValidator", function() { return MatCheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatCheckboxRequiredValidatorModule", function() { return _MatCheckboxRequiredValidatorModule; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/observers */ "GU7r");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for `mat-checkbox`. */





const _c0 = ["input"];
const _c1 = function () { return { enterDuration: 150 }; };
const _c2 = ["*"];
const MAT_CHECKBOX_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-checkbox-default-options', {
    providedIn: 'root',
    factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
    return {
        color: 'accent',
        clickAction: 'check-indeterminate',
    };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids for checkbox components.
let nextUniqueId = 0;
// Default checkbox configuration.
const defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
/**
 * Provider Expression that allows mat-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
const MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(() => MatCheckbox),
    multi: true
};
/** Change event object emitted by MatCheckbox. */
class MatCheckboxChange {
}
// Boilerplate for applying mixins to MatCheckbox.
/** @docs-private */
class MatCheckboxBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatCheckboxMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisabled"])(MatCheckboxBase))));
/**
 * A material design checkbox component. Supports all of the functionality of an HTML5 checkbox,
 * and exposes a similar API. A MatCheckbox can be either checked, unchecked, indeterminate, or
 * disabled. Note that all additional accessibility attributes are taken care of by the component,
 * so there is no need to provide them yourself. However, if you want to omit a label and still
 * have the checkbox be accessible, you may supply an [aria-label] input.
 * See: https://material.io/design/components/selection-controls.html
 */
class MatCheckbox extends _MatCheckboxMixinBase {
    constructor(elementRef, _changeDetectorRef, _focusMonitor, _ngZone, tabIndex, _animationMode, _options) {
        super(elementRef);
        this._changeDetectorRef = _changeDetectorRef;
        this._focusMonitor = _focusMonitor;
        this._ngZone = _ngZone;
        this._animationMode = _animationMode;
        this._options = _options;
        /**
         * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
         * take precedence so this may be omitted.
         */
        this.ariaLabel = '';
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */
        this.ariaLabelledby = null;
        this._uniqueId = `mat-checkbox-${++nextUniqueId}`;
        /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */
        this.id = this._uniqueId;
        /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
        this.labelPosition = 'after';
        /** Name value will be applied to the input element if present */
        this.name = null;
        /** Event emitted when the checkbox's `checked` value changes. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /** Event emitted when the checkbox's `indeterminate` value changes. */
        this.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
         * @docs-private
         */
        this._onTouched = () => { };
        this._currentAnimationClass = '';
        this._currentCheckState = 0 /* Init */;
        this._controlValueAccessorChangeFn = () => { };
        this._checked = false;
        this._disabled = false;
        this._indeterminate = false;
        this._options = this._options || defaults;
        this.color = this.defaultColor = this._options.color || defaults.color;
        this.tabIndex = parseInt(tabIndex) || 0;
    }
    /** Returns the unique id for the visual hidden input. */
    get inputId() { return `${this.id || this._uniqueId}-input`; }
    /** Whether the checkbox is required. */
    get required() { return this._required; }
    set required(value) { this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state change
                // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                // telling the form control it has been touched until the next tick.
                Promise.resolve().then(() => {
                    this._onTouched();
                    this._changeDetectorRef.markForCheck();
                });
            }
        });
        this._syncIndeterminate(this._indeterminate);
    }
    // TODO: Delete next major revision.
    ngAfterViewChecked() { }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /**
     * Whether the checkbox is checked.
     */
    get checked() { return this._checked; }
    set checked(value) {
        if (value != this.checked) {
            this._checked = value;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Whether the checkbox is disabled. This fully overrides the implementation provided by
     * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
     */
    get disabled() { return this._disabled; }
    set disabled(value) {
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        if (newValue !== this.disabled) {
            this._disabled = newValue;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
     * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
     * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
     * set to false.
     */
    get indeterminate() { return this._indeterminate; }
    set indeterminate(value) {
        const changed = value != this._indeterminate;
        this._indeterminate = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        if (changed) {
            if (this._indeterminate) {
                this._transitionCheckState(3 /* Indeterminate */);
            }
            else {
                this._transitionCheckState(this.checked ? 1 /* Checked */ : 2 /* Unchecked */);
            }
            this.indeterminateChange.emit(this._indeterminate);
        }
        this._syncIndeterminate(this._indeterminate);
    }
    _isRippleDisabled() {
        return this.disableRipple || this.disabled;
    }
    /** Method being called whenever the label text changes. */
    _onLabelTextChange() {
        // Since the event of the `cdkObserveContent` directive runs outside of the zone, the checkbox
        // component will be only marked for check, but no actual change detection runs automatically.
        // Instead of going back into the zone in order to trigger a change detection which causes
        // *all* components to be checked (if explicitly marked or not using OnPush), we only trigger
        // an explicit change detection for the checkbox view and its children.
        this._changeDetectorRef.detectChanges();
    }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
        this.checked = !!value;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    _getAriaChecked() {
        if (this.checked) {
            return 'true';
        }
        return this.indeterminate ? 'mixed' : 'false';
    }
    _transitionCheckState(newState) {
        let oldState = this._currentCheckState;
        let element = this._elementRef.nativeElement;
        if (oldState === newState) {
            return;
        }
        if (this._currentAnimationClass.length > 0) {
            element.classList.remove(this._currentAnimationClass);
        }
        this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
        this._currentCheckState = newState;
        if (this._currentAnimationClass.length > 0) {
            element.classList.add(this._currentAnimationClass);
            // Remove the animation class to avoid animation when the checkbox is moved between containers
            const animationClass = this._currentAnimationClass;
            this._ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                    element.classList.remove(animationClass);
                }, 1000);
            });
        }
    }
    _emitChangeEvent() {
        const event = new MatCheckboxChange();
        event.source = this;
        event.checked = this.checked;
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(event);
    }
    /** Toggles the `checked` state of the checkbox. */
    toggle() {
        this.checked = !this.checked;
    }
    /**
     * Event handler for checkbox input element.
     * Toggles checked state if element is not disabled.
     * Do not toggle on (change) event since IE doesn't fire change event when
     *   indeterminate checkbox is clicked.
     * @param event
     */
    _onInputClick(event) {
        var _a;
        const clickAction = (_a = this._options) === null || _a === void 0 ? void 0 : _a.clickAction;
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `checkbox` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
        // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click
        if (!this.disabled && clickAction !== 'noop') {
            // When user manually click on the checkbox, `indeterminate` is set to false.
            if (this.indeterminate && clickAction !== 'check') {
                Promise.resolve().then(() => {
                    this._indeterminate = false;
                    this.indeterminateChange.emit(this._indeterminate);
                });
            }
            this.toggle();
            this._transitionCheckState(this._checked ? 1 /* Checked */ : 2 /* Unchecked */);
            // Emit our custom change event if the native input emitted one.
            // It is important to only emit it, if the native input triggered one, because
            // we don't want to trigger a change event, when the `checked` variable changes for example.
            this._emitChangeEvent();
        }
        else if (!this.disabled && clickAction === 'noop') {
            // Reset native input when clicked with noop. The native checkbox becomes checked after
            // click, reset it to be align with `checked` value of `mat-checkbox`.
            this._inputElement.nativeElement.checked = this.checked;
            this._inputElement.nativeElement.indeterminate = this.indeterminate;
        }
    }
    /** Focuses the checkbox. */
    focus(origin, options) {
        if (origin) {
            this._focusMonitor.focusVia(this._inputElement, origin, options);
        }
        else {
            this._inputElement.nativeElement.focus(options);
        }
    }
    _onInteractionEvent(event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
    }
    _getAnimationClassForCheckStateTransition(oldState, newState) {
        // Don't transition if animations are disabled.
        if (this._animationMode === 'NoopAnimations') {
            return '';
        }
        let animSuffix = '';
        switch (oldState) {
            case 0 /* Init */:
                // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
                // [checked] bound to it.
                if (newState === 1 /* Checked */) {
                    animSuffix = 'unchecked-checked';
                }
                else if (newState == 3 /* Indeterminate */) {
                    animSuffix = 'unchecked-indeterminate';
                }
                else {
                    return '';
                }
                break;
            case 2 /* Unchecked */:
                animSuffix = newState === 1 /* Checked */ ?
                    'unchecked-checked' : 'unchecked-indeterminate';
                break;
            case 1 /* Checked */:
                animSuffix = newState === 2 /* Unchecked */ ?
                    'checked-unchecked' : 'checked-indeterminate';
                break;
            case 3 /* Indeterminate */:
                animSuffix = newState === 1 /* Checked */ ?
                    'indeterminate-checked' : 'indeterminate-unchecked';
                break;
        }
        return `mat-checkbox-anim-${animSuffix}`;
    }
    /**
     * Syncs the indeterminate value with the checkbox DOM node.
     *
     * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
     * property is supported on an element boils down to `if (propName in element)`. Domino's
     * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
     * server-side rendering.
     */
    _syncIndeterminate(value) {
        const nativeCheckbox = this._inputElement;
        if (nativeCheckbox) {
            nativeCheckbox.nativeElement.indeterminate = value;
        }
    }
}
MatCheckbox.ɵfac = function MatCheckbox_Factory(t) { return new (t || MatCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_CHECKBOX_DEFAULT_OPTIONS, 8)); };
MatCheckbox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MatCheckbox, selectors: [["mat-checkbox"]], viewQuery: function MatCheckbox_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
    } }, hostAttrs: [1, "mat-checkbox"], hostVars: 12, hostBindings: function MatCheckbox_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-checkbox-indeterminate", ctx.indeterminate)("mat-checkbox-checked", ctx.checked)("mat-checkbox-disabled", ctx.disabled)("mat-checkbox-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], id: "id", labelPosition: "labelPosition", name: "name", required: "required", checked: "checked", disabled: "disabled", indeterminate: "indeterminate", ariaDescribedby: ["aria-describedby", "ariaDescribedby"], value: "value" }, outputs: { change: "change", indeterminateChange: "indeterminateChange" }, exportAs: ["matCheckbox"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c2, decls: 17, vars: 20, consts: [[1, "mat-checkbox-layout"], ["label", ""], [1, "mat-checkbox-inner-container"], ["type", "checkbox", 1, "mat-checkbox-input", "cdk-visually-hidden", 3, "id", "required", "checked", "disabled", "tabIndex", "change", "click"], ["input", ""], ["matRipple", "", 1, "mat-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleRadius", "matRippleCentered", "matRippleAnimation"], [1, "mat-ripple-element", "mat-checkbox-persistent-ripple"], [1, "mat-checkbox-frame"], [1, "mat-checkbox-background"], ["version", "1.1", "focusable", "false", "viewBox", "0 0 24 24", 0, "xml", "space", "preserve", 1, "mat-checkbox-checkmark"], ["fill", "none", "stroke", "white", "d", "M4.1,12.7 9,17.6 20.3,6.3", 1, "mat-checkbox-checkmark-path"], [1, "mat-checkbox-mixedmark"], [1, "mat-checkbox-label", 3, "cdkObserveContent"], ["checkboxLabel", ""], [2, "display", "none"]], template: function MatCheckbox_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function MatCheckbox_Template_input_change_3_listener($event) { return ctx._onInteractionEvent($event); })("click", function MatCheckbox_Template_input_click_3_listener($event) { return ctx._onInputClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkObserveContent", function MatCheckbox_Template_span_cdkObserveContent_12_listener() { return ctx._onLabelTextChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx.inputId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-checkbox-inner-container-no-side-margin", !_r2.textContent || !_r2.textContent.trim());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("value", ctx.value)("name", ctx.name)("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-checked", ctx._getAriaChecked())("aria-describedby", ctx.ariaDescribedby);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleRadius", 20)("matRippleCentered", true)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c1));
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["CdkObserveContent"]], styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"], encapsulation: 2, changeDetection: 0 });
MatCheckbox.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"], args: ['tabindex',] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_CHECKBOX_DEFAULT_OPTIONS,] }] }
];
MatCheckbox.propDecorators = {
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-labelledby',] }],
    ariaDescribedby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-describedby',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    indeterminateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    _inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['input',] }],
    ripple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"],] }],
    checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    indeterminate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatCheckbox, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'mat-checkbox',
                template: "<label [attr.for]=\"inputId\" class=\"mat-checkbox-layout\" #label>\n  <span class=\"mat-checkbox-inner-container\"\n       [class.mat-checkbox-inner-container-no-side-margin]=\"!checkboxLabel.textContent || !checkboxLabel.textContent.trim()\">\n    <input #input\n           class=\"mat-checkbox-input cdk-visually-hidden\" type=\"checkbox\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [checked]=\"checked\"\n           [attr.value]=\"value\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [tabIndex]=\"tabIndex\"\n           [attr.aria-label]=\"ariaLabel || null\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-checked]=\"_getAriaChecked()\"\n           [attr.aria-describedby]=\"ariaDescribedby\"\n           (change)=\"_onInteractionEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n    <span matRipple class=\"mat-checkbox-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleRadius]=\"20\"\n         [matRippleCentered]=\"true\"\n         [matRippleAnimation]=\"{enterDuration: 150}\">\n      <span class=\"mat-ripple-element mat-checkbox-persistent-ripple\"></span>\n    </span>\n    <span class=\"mat-checkbox-frame\"></span>\n    <span class=\"mat-checkbox-background\">\n      <svg version=\"1.1\"\n           focusable=\"false\"\n           class=\"mat-checkbox-checkmark\"\n           viewBox=\"0 0 24 24\"\n           xml:space=\"preserve\">\n        <path class=\"mat-checkbox-checkmark-path\"\n              fill=\"none\"\n              stroke=\"white\"\n              d=\"M4.1,12.7 9,17.6 20.3,6.3\"/>\n      </svg>\n      <!-- Element for rendering the indeterminate state checkbox. -->\n      <span class=\"mat-checkbox-mixedmark\"></span>\n    </span>\n  </span>\n  <span class=\"mat-checkbox-label\" #checkboxLabel (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
                exportAs: 'matCheckbox',
                host: {
                    'class': 'mat-checkbox',
                    '[id]': 'id',
                    '[attr.tabindex]': 'null',
                    '[class.mat-checkbox-indeterminate]': 'indeterminate',
                    '[class.mat-checkbox-checked]': 'checked',
                    '[class.mat-checkbox-disabled]': 'disabled',
                    '[class.mat-checkbox-label-before]': 'labelPosition == "before"',
                    '[class._mat-animation-noopable]': `_animationMode === 'NoopAnimations'`
                },
                providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR],
                inputs: ['disableRipple', 'color', 'tabIndex'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
                args: ['tabindex']
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [MAT_CHECKBOX_DEFAULT_OPTIONS]
            }] }]; }, { ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-labelledby']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], indeterminateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], indeterminate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], ariaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-describedby']
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], _inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['input']
        }], ripple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"]]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAT_CHECKBOX_REQUIRED_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(() => MatCheckboxRequiredValidator),
    multi: true
};
/**
 * Validator for Material checkbox's required attribute in template-driven checkbox.
 * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
 * work with `mat-checkbox`.
 */
class MatCheckboxRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxRequiredValidator"] {
}
MatCheckboxRequiredValidator.ɵfac = function MatCheckboxRequiredValidator_Factory(t) { return ɵMatCheckboxRequiredValidator_BaseFactory(t || MatCheckboxRequiredValidator); };
MatCheckboxRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatCheckboxRequiredValidator, selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAT_CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });
const ɵMatCheckboxRequiredValidator_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatCheckboxRequiredValidator);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatCheckboxRequiredValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: `mat-checkbox[required][formControlName],
             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]`,
                providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** This module is used by both original and MDC-based checkbox implementations. */
class _MatCheckboxRequiredValidatorModule {
}
_MatCheckboxRequiredValidatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: _MatCheckboxRequiredValidatorModule });
_MatCheckboxRequiredValidatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function _MatCheckboxRequiredValidatorModule_Factory(t) { return new (t || _MatCheckboxRequiredValidatorModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_MatCheckboxRequiredValidatorModule, { declarations: [MatCheckboxRequiredValidator], exports: [MatCheckboxRequiredValidator] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatCheckboxRequiredValidatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                exports: [MatCheckboxRequiredValidator],
                declarations: [MatCheckboxRequiredValidator]
            }]
    }], null, null); })();
class MatCheckboxModule {
}
MatCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MatCheckboxModule });
MatCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function MatCheckboxModule_Factory(t) { return new (t || MatCheckboxModule)(); }, imports: [[
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"],
            _MatCheckboxRequiredValidatorModule
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _MatCheckboxRequiredValidatorModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatCheckboxModule, { declarations: function () { return [MatCheckbox]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"], _MatCheckboxRequiredValidatorModule]; }, exports: function () { return [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _MatCheckboxRequiredValidatorModule]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatCheckboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"],
                    _MatCheckboxRequiredValidatorModule
                ],
                exports: [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _MatCheckboxRequiredValidatorModule],
                declarations: [MatCheckbox]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=checkbox.js.map

/***/ }),

/***/ "zmBI":
/*!**************************************!*\
  !*** ./src/app/main/main.service.ts ***!
  \**************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class MainService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:3000/api';
        this.comodoSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.aparelhosSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.loaded = false;
        this.loaded2 = false;
    }
    /*getAparelhos(): Observable<Aparelhos[]>{
      if(!this.loaded2) {
        let id_user = localStorage.getItem('id_user');
        this.http.get<Aparelhos[]>(`${this.url}/aparelhos/${id_user}`)
          .subscribe(this.aparelhosSubject$);
        this.loaded2 = true
      }
      return this.aparelhosSubject$.asObservable();
    }*/
    getAparelhos() {
        if (!this.loaded2) {
            let id_user = localStorage.getItem('id_user');
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.http.get(`${this.url}/aparelhos/${id_user}`), this.getComodos())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(([aparelhos, comodos]) => console.log(aparelhos, comodos)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(([aparelhos, comodos]) => aparelhos != null && comodos != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([aparelhos, comodos]) => {
                for (let p of aparelhos) {
                    let ids = p.comodo;
                    p.comodo = ids.map((id) => comodos.find(com => com._id == id));
                }
                return aparelhos;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((aparelhos) => console.log(aparelhos)))
                .subscribe(this.aparelhosSubject$);
            this.loaded2 = true;
        }
        return this.aparelhosSubject$.asObservable();
    }
    addAparelhos(apar) {
        let comodos = apar.comodo.map(d => d._id);
        console.log(apar);
        return this.http.post(`${this.url}/aparelhos`, Object.assign(Object.assign({}, apar), { comodos }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((p) => {
            this.aparelhosSubject$.getValue()
                .push(Object.assign(Object.assign({}, apar), { _id: p._id }));
        }));
    }
    deleteAparelhos(apar) {
        return this.http.delete(`${this.url}/aparelhos/${apar._id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            let aparelhos = this.aparelhosSubject$.getValue();
            let i = aparelhos.findIndex(p => p._id === apar._id);
            if (i >= 0) {
                aparelhos.splice(i, 1);
            }
        }));
    }
    updateAparelhos(apar) {
        let comodos = apar.comodo.map(d => d._id);
        return this.http.patch(`${this.url}/${apar._id}`, Object.assign(Object.assign({}, apar), { comodos }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            let aparelhos = this.aparelhosSubject$.getValue();
            let i = aparelhos.findIndex(p => p._id === apar._id);
            if (i >= 0) {
                aparelhos[i] = apar;
            }
        }));
    }
    //Requisições para comodos
    getComodos() {
        if (!this.loaded) {
            let id_user = localStorage.getItem('id_user');
            this.http.get(`${this.url}/comodos/${id_user}`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((coms) => console.log(coms)))
                .subscribe(this.comodoSubject$);
            this.loaded = true;
        }
        return this.comodoSubject$.asObservable();
    }
    addComodos(d) {
        return this.http.post(`${this.url}/comodos`, d)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((com) => this.comodoSubject$.getValue().push(com)));
    }
    delComodos(com) {
        return this.http.delete(`${this.url}/comodos/${com._id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            let comodos = this.comodoSubject$.getValue();
            let i = comodos.findIndex(d => d._id === com._id);
            if (i >= 0) {
                comodos.splice(i, 1);
            }
        }));
    }
    updateComodo(com) {
        return this.http.patch(`${this.url}/comodos/${com._id}`, com)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((d) => {
            let comodos = this.comodoSubject$.getValue();
            let i = comodos.findIndex(d => d._id === com._id);
            if (i >= 0) {
                comodos[i].name = d.name;
            }
        }));
    }
    getPeople() {
        return this.http.get(`${this.url}/people`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(p => console.log(p)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((e) => {
            console.log(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
        }));
    }
    getProducts() {
        return this.http.get(`${this.url}/products`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(p => console.log(p)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((e) => {
            console.log(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
        }));
    }
}
MainService.ɵfac = function MainService_Factory(t) { return new (t || MainService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MainService, factory: MainService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map