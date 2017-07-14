webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!!\n  </h1>\n</div>\n<router-outlet>\n\n</router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__("../../../../../src/app/service/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Lesson15 --- Lab';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_driven_component__ = __webpack_require__("../../../../../src/app/data-driven.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_post_component__ = __webpack_require__("../../../../../src/app/user-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// use ReactiveFormsModule Only when using Data Driven Forms





// Import our Routes file

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__data_driven_component__["a" /* DataDrivenComponent */],
            __WEBPACK_IMPORTED_MODULE_6__user_post_component__["a" /* PostComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* MyRoutes */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_post_component__ = __webpack_require__("../../../../../src/app/user-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_driven_component__ = __webpack_require__("../../../../../src/app/data-driven.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyRoutes; });
/**
 * Created by Samuel on 13/7/2017.
 */



var MY_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__data_driven_component__["a" /* DataDrivenComponent */] },
    { path: 'result', component: __WEBPACK_IMPORTED_MODULE_1__user_post_component__["a" /* PostComponent */] },
    // ** for all routes that we don't recognize,
    // Routes served from top to bottom so this should always come last!
    { path: '**', redirectTo: '/' }
];
var MyRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(MY_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/data-driven.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n  <div formGroupName=\"userData\">\n    <div class=\"form-group has-danger\">\n      <label for=\"name\">Name:</label><br/>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"name\"\n             formControlName=\"name\">\n\n      <div *ngIf=\"!myForm.controls['userData'].controls['name'].valid\">\n        Name Required\n      </div>\n    </div>\n    <div class=\"form-group has-danger\" >\n      <label for=\"email\">Email:</label><br/>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"email\"\n             email\n             formControlName=\"email\">\n      <!--<div *ngIf=\"myForm.controls['userData'].controls['email'].required\">-->\n        <!--Email Required-->\n      <!--</div>-->\n      <div *ngIf=\"!myForm.controls['userData'].controls['email'].valid\">\n        Invalid Email\n      </div>\n    </div>\n\n  <div class=\"form-group has-danger\">\n    <label for=\"post\">Post:</label><br/>\n    <textarea rows=\"4\" cols=\"50\"\n           class=\"form-control\"\n           id=\"post\"\n           formControlName=\"post\">\n    </textarea>\n    <!--<div *ngIf=\"myForm.controls['userData'].controls['post'].required\">-->\n      <!--Post Required-->\n    <!--</div>-->\n    <div *ngIf=\"!myForm.controls['userData'].controls['post'].valid\">\n      Minimum Length is 10\n    </div>\n  </div>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Submit</button>\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"onGetData()\">Get Data</button>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/data-driven.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_MyHttpService__ = __webpack_require__("../../../../../src/app/service/MyHttpService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_data_service__ = __webpack_require__("../../../../../src/app/service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataDrivenComponent; });
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
 * Created by Samuel on 13/7/2017.
 */





var DataDrivenComponent = (function () {
    function DataDrivenComponent(formBuilder, httpService, router, dataHelper) {
        this.formBuilder = formBuilder;
        this.httpService = httpService;
        this.router = router;
        this.dataHelper = dataHelper;
        this.user = {
            id: '',
            name: 'Samuel',
            email: 'samuel.caiceo@gmail.com',
            post: 'post summary'
        };
        this.myForm = formBuilder.group({
            'userData': formBuilder.group({
                'name': [this.user.name, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* Validators */].required]],
                'email': [this.user.email, [
                        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* Validators */].required
                        //Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                    ]],
                'post': [this.user.post, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* Validators */].required, this.lengthValidator]]
            })
        });
        this.myForm.statusChanges.subscribe(function (data) { return console.log(data); });
    }
    DataDrivenComponent.prototype.lengthValidator = function (control) {
        if (control.value.length <= 10) {
            return { example: true };
        }
        return null;
    };
    DataDrivenComponent.prototype.onSubmit = function () {
        //console.log(this.myForm);
        //console.log(this.myForm.value);
        console.log(this.myForm.controls['userData'].value);
        // do navigation
        this.dataHelper.setData(JSON.stringify(this.myForm.controls['userData'].value));
        this.router.navigate(['/result']);
    };
    DataDrivenComponent.prototype.onGetData = function () {
        var _this = this;
        this.httpService.getUserInfo().subscribe(function (response) {
            //console.log(response);
            var jsonStr = response.json();
            //console.log(jsonStr);
            // you patchValue for outer FormGroup, it will fail
            //this.myForm.patchValue({'name': jsonStr.name});
            //this.myForm.patchValue({'email': jsonStr.email});
            // Note: you should udpate value for inner FormGroup
            _this.myForm.controls['userData'].patchValue({ 'name': jsonStr.name });
            _this.myForm.controls['userData'].patchValue({ 'email': jsonStr.email });
            _this.httpService.getPostsInfoById(jsonStr.id).subscribe(function (data) {
                var jsons = data.json();
                _this.myForm.controls['userData'].patchValue({ 'post': jsons[1].body });
            }, function (err) { }, function () { });
        }, function (error) { return console.error(error); }, function () { return console.log('operations completed!'); });
    };
    return DataDrivenComponent;
}());
DataDrivenComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'data-driven',
        template: __webpack_require__("../../../../../src/app/data-driven.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_MyHttpService__["a" /* MyHttpService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_MyHttpService__["a" /* MyHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_MyHttpService__["a" /* MyHttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__service_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_data_service__["a" /* DataService */]) === "function" && _d || Object])
], DataDrivenComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=data-driven.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/MyHttpService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyHttpService; });
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
 * Created by Samuel on 13/7/2017.
 */


var MyHttpService = (function () {
    function MyHttpService(http) {
        this.http = http;
    }
    MyHttpService.prototype.getUserInfo = function () {
        return this.http.get("http://jsonplaceholder.typicode.com/users/1");
    };
    MyHttpService.prototype.getPostsInfoById = function (id) {
        return this.http.get("http://jsonplaceholder.typicode.com/posts?userId=" + id);
    };
    return MyHttpService;
}());
MyHttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MyHttpService);

var _a;
//# sourceMappingURL=MyHttpService.js.map

/***/ }),

/***/ "../../../../../src/app/service/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.setData = function (data) {
        this.post = data;
    };
    DataService.prototype.getInfo = function () {
        return this.post;
    };
    return DataService;
}());

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/user-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_data_service__ = __webpack_require__("../../../../../src/app/service/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
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
 * Created by Samuel on 13/7/2017.
 */



var PostComponent = (function () {
    // private sub : Subscription;
    function PostComponent(router, dataHelper) {
        this.router = router;
        this.dataHelper = dataHelper;
    }
    PostComponent.prototype.ngOnInit = function () {
        // this.sub = this.router.data.subscribe(v => {
        //   console.log(v);
        //   this.post = v;
        // });
        this.post = this.dataHelper.getInfo();
    };
    PostComponent.prototype.ngOnDestroy = function () {
        // this.sub.unsubscribe();
    };
    PostComponent.prototype.onNavigate = function () {
        // Imperative Routing
        this.router.navigate(['/']);
    };
    return PostComponent;
}());
PostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'user-post',
        template: "\n    <h3>Post Submit Success</h3>\n    <br/>\n    You Post Info as follows: <br/>\n    {{post}}\n    <br/>\n    <button (click)=\"onNavigate()\">Go Back</button>\n  ",
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_data_service__["a" /* DataService */]) === "function" && _b || Object])
], PostComponent);

var _a, _b;
//# sourceMappingURL=user-post.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map