webpackJsonp([1],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(466);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    return SearchPageModule;
}());
SearchPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
        ]
    })
], SearchPageModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_form_register_form_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_profile_form_edit_profile_form_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_view_profile_view_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_search_profile_search_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__send_message_box_send_message_box_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_message_chat_message_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__online_users_online_users_component__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_3__register_form_register_form_component__["a" /* RegisterFormComponent */],
            __WEBPACK_IMPORTED_MODULE_4__edit_profile_form_edit_profile_form_component__["a" /* EditProfileFormComponent */],
            __WEBPACK_IMPORTED_MODULE_5__profile_view_profile_view_component__["a" /* ProfileViewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__profile_search_profile_search_component__["a" /* ProfileSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_7__send_message_box_send_message_box_component__["a" /* SendMessageBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_8__chat_message_chat_message_component__["a" /* ChatMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__online_users_online_users_component__["a" /* OnlineUsersComponent */],
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_3__register_form_register_form_component__["a" /* RegisterFormComponent */],
            __WEBPACK_IMPORTED_MODULE_4__edit_profile_form_edit_profile_form_component__["a" /* EditProfileFormComponent */],
            __WEBPACK_IMPORTED_MODULE_5__profile_view_profile_view_component__["a" /* ProfileViewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__profile_search_profile_search_component__["a" /* ProfileSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_7__send_message_box_send_message_box_component__["a" /* SendMessageBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_8__chat_message_chat_message_component__["a" /* ChatMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__online_users_online_users_component__["a" /* OnlineUsersComponent */],
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var LoginFormComponent = (function () {
    function LoginFormComponent(auth, navCtrl) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.account = {};
        this.loginStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    LoginFormComponent.prototype.navigateToRegisterPage = function (pageName) {
        this.navCtrl.push(pageName);
    };
    LoginFormComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loginResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.signInWithEmailAndPassword(this.account)];
                    case 1:
                        loginResponse = _a.sent();
                        this.loginStatus.emit(loginResponse);
                        return [2 /*return*/];
                }
            });
        });
    };
    return LoginFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], LoginFormComponent.prototype, "loginStatus", void 0);
LoginFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-login-form',template:/*ion-inline-start:"/home/lucas/yupy/src/components/login-form/login-form.component.html"*/'<form #loginForm="ngForm" novalidate>\n<ion-card>\n  <ion-card-content>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input [(ngModel)]="account.email" type="email" name="email" #email="ngModel" required pattern="[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"></ion-input>\n    </ion-item>\n    <div padding *ngIf="email.invalid && email.dirty">\n      <span class="global__input-error">Email inválido</span>\n    </div>\n    <ion-item>\n      <ion-label floating>Senha</ion-label>\n      <ion-input [(ngModel)]="account.password" type="password" name="password" #password="ngModel" required pattern="(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$"></ion-input>\n    </ion-item>\n    <div padding *ngIf="password.invalid && password.dirty">\n      <span class="global__input-error">Senha inválida, deve ter pelo menos 6 caracteres e uma letra maiúscula</span>\n    </div>\n  </ion-card-content>\n  <ion-row class="login-form__buttons">\n    <div>\n      <button ion-button (click)="navigateToRegisterPage(\'RegisterPage\')" color="secondary">Registre-se</button>\n      <button ion-button (click)="login()" [disabled]="loginForm.invalid">Login</button>\n      <!--<button ion-button (click)="navigateToPage(\'TabsPage\')">Login</button>-->\n    </div>\n  </ion-row>\n</ion-card>\n</form>\n'/*ion-inline-end:"/home/lucas/yupy/src/components/login-form/login-form.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], LoginFormComponent);

//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var RegisterFormComponent = (function () {
    function RegisterFormComponent(auth) {
        this.auth = auth;
        this.account = {};
        this.registerStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    RegisterFormComponent.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.auth.createUserWithEmailAndPassword(this.account)];
                    case 1:
                        result = _a.sent();
                        this.registerStatus.emit(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.registerStatus.emit(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return RegisterFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], RegisterFormComponent.prototype, "registerStatus", void 0);
RegisterFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-register-form',template:/*ion-inline-start:"/home/lucas/yupy/src/components/register-form/register-form.component.html"*/'<form #regForm="ngForm" novalidate>\n<ion-card>\n  <ion-card-content>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input [(ngModel)]="account.email" type="email" name="email" #email="ngModel" required pattern="[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"></ion-input>\n    </ion-item>\n    <div padding *ngIf="email.invalid && email.dirty">\n      <span class="global__input-error">Email inválido</span>\n    </div>\n    <ion-item>\n      <ion-label floating>Senha</ion-label>\n      <ion-input [(ngModel)]="account.password" type="password" name="password" #password="ngModel" required pattern="(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$"></ion-input>\n    </ion-item>\n    <div padding *ngIf="password.invalid && password.dirty">\n      <span class="global__input-error">Senha inválida, deve ter pelo menos 6 caracteres e uma letra maiúscula</span>\n    </div>\n    <!--<ion-item>\n      <ion-label floating>Repita a Senha</ion-label>\n      <ion-input type="password" name="password2" #password="ngModel" required pattern="(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$"></ion-input>\n    </ion-item>\n    <div padding *ngIf="password2 != password">\n      <span class="global__input-error">Senhas diferentes</span>\n    </div>-->\n    <!--TENHO QUE ATUALIZAR O PROFILE AO SE REGISTRAR-->\n  </ion-card-content>\n  <ion-row class="register-form__button">\n    <button ion-button (click)="register()" [disabled]="regForm.invalid">Registre-se</button>\n  </ion-row>\n</ion-card>\n</form>\n'/*ion-inline-end:"/home/lucas/yupy/src/components/register-form/register-form.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__["a" /* AuthService */]])
], RegisterFormComponent);

//# sourceMappingURL=register-form.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var EditProfileFormComponent = (function () {
    function EditProfileFormComponent(auth, data) {
        var _this = this;
        this.auth = auth;
        this.data = data;
        this.saveProfileResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.authenticatedUser = user;
        });
    }
    EditProfileFormComponent.prototype.saveProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authenticatedUser) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.data.saveProfile(this.authenticatedUser, this.profile)];
                    case 1:
                        result = _a.sent();
                        this.saveProfileResult.emit(result);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    EditProfileFormComponent.prototype.ngOnInit = function () {
        if (!this.profile) {
            this.profile = {};
        }
    };
    EditProfileFormComponent.prototype.ngOnDestroy = function () {
        this.authenticatedUser$.unsubscribe();
    };
    return EditProfileFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], EditProfileFormComponent.prototype, "saveProfileResult", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], EditProfileFormComponent.prototype, "profile", void 0);
EditProfileFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-edit-profile-form',template:/*ion-inline-start:"/home/lucas/yupy/src/components/edit-profile-form/edit-profile-form.component.html"*/'<ion-card>\n  <ion-card-content>\n    <ion-item>\n      <ion-label floating>Escolha sua foto</ion-label>\n      <ion-input [(ngModel)]="profile.avatar" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input [(ngModel)]="profile.name" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input [(ngModel)]="profile.email" type="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Serviço</ion-label>\n      <ion-input [(ngModel)]="profile.service" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Descrição do serviço</ion-label>\n      <ion-input [(ngModel)]="profile.description" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Preço Médio</ion-label>\n      <ion-input  [(ngModel)]="profile.preco" type="number"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Horário</ion-label>\n      <ion-input  [(ngModel)]="profile.horario" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Local</ion-label>\n      <ion-input [(ngModel)]="profile.local" type="text"></ion-input>\n    </ion-item>\n  </ion-card-content>\n</ion-card>\n\n<button ion-button (click)="saveProfile()">Salvar</button>\n'/*ion-inline-end:"/home/lucas/yupy/src/components/edit-profile-form/edit-profile-form.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__providers_data_data_service__["a" /* DataService */]])
], EditProfileFormComponent);

//# sourceMappingURL=edit-profile-form.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(154);
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
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ProfileViewComponent = (function () {
    function ProfileViewComponent(navCtrl, loading, data, auth, nav) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.data = data;
        this.auth = auth;
        this.nav = nav;
        this.authUser = false;
        this.existingProfile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.authenticatedUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.loader = this.loading.create({
            content: "Carregando o perfil..."
        });
    }
    ProfileViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader.present();
        this.userProfile = this.nav.get('profile');
        //Mudar para pegar navParams, o profile a ser mostrado será escolhido pela pagina anterior
        if (!this.userProfile) {
            this.authUser = true;
            this.data.getAuthenticatedUserProfile().subscribe(function (profile) {
                _this.userProfile = profile;
                _this.existingProfile.emit(_this.userProfile);
                _this.authenticatedUser.emit(_this.authUser);
            });
        }
        this.loader.dismiss();
    };
    ProfileViewComponent.prototype.openChat = function (profile) {
        this.navCtrl.push('MessagePage', { profile: profile });
    };
    return ProfileViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], ProfileViewComponent.prototype, "authenticatedUser", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], ProfileViewComponent.prototype, "existingProfile", void 0);
ProfileViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-profile-view',template:/*ion-inline-start:"/home/lucas/yupy/src/components/profile-view/profile-view.component.html"*/'<!-- Generated template for the ProfileViewComponent component -->\n<!--<div class="profile-view__image-container">\n  <img class="profile-view__image" src="assets/img/profile-placeholder.png" alt="">\n</div>-->\n\n<div *ngIf="userProfile">\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label floating>Nome</ion-label>\n        <ion-input [value]="userProfile.name" [readonly]=""></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input [value]="userProfile.email" [readonly]=""></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Serviço</ion-label>\n        <ion-input [value]="userProfile.service" [readonly]=""></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Preço</ion-label>\n        <ion-input [value]="userProfile.preco" [readonly]=""></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Horário</ion-label>\n        <ion-input [value]="userProfile.horario" [readonly]=""></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Local</ion-label>\n        <ion-input [value]="userProfile.local" [readonly]=""></ion-input>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</div>\n<button ion-button *ngIf="!authUser" (click)="openChat(userProfile)" icon="chatbubble">Chat</button>\n'/*ion-inline-end:"/home/lucas/yupy/src/components/profile-view/profile-view.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
], ProfileViewComponent);

//# sourceMappingURL=profile-view.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data_service__ = __webpack_require__(298);
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
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ProfileSearchComponent = (function () {
    function ProfileSearchComponent(data) {
        this.data = data;
        this.selectedProfile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ProfileSearchComponent.prototype.selectProfile = function (profile) {
        this.selectedProfile.emit(profile);
    };
    ProfileSearchComponent.prototype.searchUser = function (query) {
        var _this = this;
        var trimmedQuery = query.trim();
        //AQUI DEVO MELHORAR O ALGORITMO DE BUSCA
        if (trimmedQuery === query) {
            this.data.searchUser(query).subscribe(function (profiles) {
                console.log(profiles);
                _this.profileList = profiles;
            });
        }
    };
    return ProfileSearchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], ProfileSearchComponent.prototype, "selectedProfile", void 0);
ProfileSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-profile-search',template:/*ion-inline-start:"/home/lucas/yupy/src/components/profile-search/profile-search.component.html"*/'<!-- Theme Search bars Field + header -->\n<ion-grid no-padding>\n  <ion-row>\n    <ion-col col-12>\n      <div background-size class="container-hearder-image">\n        <div class="search-bar-bcg">\n          <h2 search-bar-title>O que você precisa?</h2>\n          <ion-searchbar [(ngModel)]="query" (ionChange)="searchUser(query)"></ion-searchbar>\n        </div>\n      </div>\n    </ion-col>\n    <!-- List -->\n        <ion-grid no-padding>\n          <ion-row *ngIf="profileList?.length > 0">\n            <ion-col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 *ngFor="let profile of profileList">\n              <ion-card card-bcg text-left class="card" (click)="selectProfile(profile)"><!--(click)="onEvent(\'onItemClick\', item.title, $event)">-->\n                <div left class="card-img">\n                  <img src="{{profile.avatar}}"/>\n                </div>\n                <!--Card-content-->\n                <ion-card-content>\n                  <ion-card-title no-padding>\n                    <h2 card-title>{{profile.name}}</h2>\n                  </ion-card-title>\n                  <h3 card-subtitle>{{profile.service}}</h3>\n                  <h3 card-subtitle>{{profile.email}}</h3>\n                  <p card-body-text>{{profile.description}}</p>\n                  <!---Social share-->\n                  <div right class="social">\n                    <ion-icon>\n                      <i icon-small class="icon-thumb-up"></i>\n                    </ion-icon>\n                    <ion-icon>\n                      <i icon-small class="icon-heart"></i>\n                    </ion-icon>\n                    <ion-icon>\n                      <i icon-small class="icon-share-variant"></i>\n                    </ion-icon>\n                  </div>\n\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      <!-- Fab Button\n      <ion-fab #fab bottom right>\n        <button button-ion-fab ion-fab (click)="onEvent(\'onFab\', data, $event)">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-fab>-->\n'/*ion-inline-end:"/home/lucas/yupy/src/components/profile-search/profile-search.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_data_service__["a" /* DataService */]])
], ProfileSearchComponent);

//# sourceMappingURL=profile-search.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendMessageBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the SendMessageBoxComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var SendMessageBoxComponent = (function () {
    function SendMessageBoxComponent() {
        this.sendMessage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    SendMessageBoxComponent.prototype.send = function () {
        this.sendMessage.emit(this.content);
        this.content = "";
    };
    return SendMessageBoxComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], SendMessageBoxComponent.prototype, "sendMessage", void 0);
SendMessageBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-send-message-box',template:/*ion-inline-start:"/home/lucas/yupy/src/components/send-message-box/send-message-box.component.html"*/'<ion-grid>\n  <ion-row>\n    <ion-col col-9>\n      <ion-textarea [(ngModel)]="content" placeholder="Insira a mensagem..."></ion-textarea>\n    </ion-col>\n    <ion-col col-3>\n      <button clear ion-button (click)="send()">Enviar</button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/home/lucas/yupy/src/components/send-message-box/send-message-box.component.html"*/
    }),
    __metadata("design:paramtypes", [])
], SendMessageBoxComponent);

//# sourceMappingURL=send-message-box.component.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the ChatMessageComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ChatMessageComponent = (function () {
    function ChatMessageComponent() {
    }
    return ChatMessageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ChatMessageComponent.prototype, "chatMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], ChatMessageComponent.prototype, "userId", void 0);
ChatMessageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-chat-message',template:/*ion-inline-start:"/home/lucas/yupy/src/components/chat-message/chat-message.component.html"*/'<ion-item no-lines class="chat-message__message-right" *ngIf="chatMessage.userToId === userId; else from">\n  <ion-avatar item-right>\n      <img src="{{chatMessage?.userFromProfile?.avatar}}" alt="">\n  </ion-avatar>\n  <h2>{{chatMessage?.userFromProfile?.name}}</h2>\n  <p>{{chatMessage.content}}</p>\n</ion-item>\n\n<ng-template #from>\n  <ion-item no-lines>\n    <ion-avatar item-left>\n       <img src="{{chatMessage?.userFromProfile?.avatar}}" alt="">\n    </ion-avatar>\n    <h2>{{chatMessage?.userFromProfile?.name}}</h2>\n    <p>{{chatMessage.content}}</p>\n  </ion-item>\n</ng-template>\n'/*ion-inline-end:"/home/lucas/yupy/src/components/chat-message/chat-message.component.html"*/
    }),
    __metadata("design:paramtypes", [])
], ChatMessageComponent);

//# sourceMappingURL=chat-message.component.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlineUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data_service__ = __webpack_require__(298);
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
 * Generated class for the OnlineUsersComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var OnlineUsersComponent = (function () {
    function OnlineUsersComponent(navCtrl, data) {
        this.navCtrl = navCtrl;
        this.data = data;
    }
    OnlineUsersComponent.prototype.ngOnInit = function () {
        this.setUserOnline();
        this.getOnlineUsers();
    };
    OnlineUsersComponent.prototype.setUserOnline = function () {
        var _this = this;
        this.data.getAuthenticatedUserProfile().subscribe(function (profile) {
            //Coloca o usuário online no firebase
            _this.data.setUserOnline(profile);
        });
    };
    OnlineUsersComponent.prototype.getOnlineUsers = function () {
        this.userList = this.data.getOnlineUsers();
    };
    OnlineUsersComponent.prototype.openChat = function (profile) {
        this.navCtrl.push('MessagePage', { profile: profile });
    };
    return OnlineUsersComponent;
}());
OnlineUsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-online-users',template:/*ion-inline-start:"/home/lucas/yupy/src/components/online-users/online-users.component.html"*/'<ion-list>\n  <ion-item-divider>Usuários Online</ion-item-divider>\n  <ion-item *ngFor="let user of userList | async" (click)="openChat(user)">\n    <ion-avatar item-left>\n      <img src="{{user.avatar}}">\n    </ion-avatar>\n      <h2>{{user.name}}</h2>\n      <h2>{{user.service}}</h2>\n\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"/home/lucas/yupy/src/components/online-users/online-users.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data_service__["a" /* DataService */]])
], OnlineUsersComponent);

//# sourceMappingURL=online-users.component.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(64);
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
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(auth, navCtrl, navParams) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchPage.prototype.openProfile = function (profile) {
        this.navCtrl.push('ProfilePage', { profile: profile });
    };
    SearchPage.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getAuthenticatedUser().subscribe(function (auth) {
            !auth ? _this.authenticate = false : _this.authenticate = true;
        });
    };
    SearchPage.prototype.navigateToPage = function (pageName) {
        this.navCtrl.push(pageName);
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/home/lucas/yupy/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n\n  <!--<ion-navbar>\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n\n</ion-header>-->\n\n\n<ion-content>\n\n<app-profile-search (selectedProfile)="openProfile($event)"></app-profile-search>\n\n<!--<button ion-button *ngIf="!authenticate" (click)="navigateToPage(\'LoginPage\')">Login</button>-->\n<ion-fab #fab bottom right *ngIf="!authenticate">\n  <button button-ion-fab ion-fab (click)="navigateToPage(\'LoginPage\')">\n    <ion-icon name="key"></ion-icon>\n  </button>\n</ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/lucas/yupy/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=1.js.map