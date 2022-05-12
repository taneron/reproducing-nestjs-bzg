/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/emitter/src/app.module.ts":
/*!****************************************!*\
  !*** ./apps/emitter/src/app.module.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const emitter_module_1 = __webpack_require__(/*! ./emitter/emitter.module */ "./apps/emitter/src/emitter/emitter.module.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [emitter_module_1.EmitterModule],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/emitter/src/emitter/emitter.controller.ts":
/*!********************************************************!*\
  !*** ./apps/emitter/src/emitter/emitter.controller.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmitterController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const emitter_service_1 = __webpack_require__(/*! ./emitter.service */ "./apps/emitter/src/emitter/emitter.service.ts");
let EmitterController = class EmitterController {
    constructor(emitterService) {
        this.emitterService = emitterService;
        setInterval(() => {
            this.emitterService.emit();
        }, 5000);
    }
};
EmitterController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof emitter_service_1.EmitterService !== "undefined" && emitter_service_1.EmitterService) === "function" ? _a : Object])
], EmitterController);
exports.EmitterController = EmitterController;


/***/ }),

/***/ "./apps/emitter/src/emitter/emitter.module.ts":
/*!****************************************************!*\
  !*** ./apps/emitter/src/emitter/emitter.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmitterModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const emitter_service_1 = __webpack_require__(/*! ./emitter.service */ "./apps/emitter/src/emitter/emitter.service.ts");
const emitter_controller_1 = __webpack_require__(/*! ./emitter.controller */ "./apps/emitter/src/emitter/emitter.controller.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let EmitterModule = class EmitterModule {
};
EmitterModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'EMITTER',
                    transport: microservices_1.Transport.REDIS,
                    options: {
                        url: 'redis://localhost:6379',
                    },
                },
            ]),
        ],
        controllers: [emitter_controller_1.EmitterController],
        providers: [emitter_service_1.EmitterService],
    })
], EmitterModule);
exports.EmitterModule = EmitterModule;


/***/ }),

/***/ "./apps/emitter/src/emitter/emitter.service.ts":
/*!*****************************************************!*\
  !*** ./apps/emitter/src/emitter/emitter.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmitterService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let EmitterService = class EmitterService {
    constructor(client) {
        this.client = client;
    }
    emit() {
        this.client.emit('X', { data: 'Hello World' });
    }
};
EmitterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('EMITTER')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], EmitterService);
exports.EmitterService = EmitterService;


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************************!*\
  !*** ./apps/emitter/src/main.ts ***!
  \**********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/emitter/src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.REDIS,
    });
    app.listen();
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9lbWl0dGVyLy4vYXBwcy9lbWl0dGVyL3NyYy9lbWl0dGVyL2VtaXR0ZXIuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9lbWl0dGVyLy4vYXBwcy9lbWl0dGVyL3NyYy9lbWl0dGVyL2VtaXR0ZXIubW9kdWxlLnRzIiwid2VicGFjazovL2VtaXR0ZXIvLi9hcHBzL2VtaXR0ZXIvc3JjL2VtaXR0ZXIvZW1pdHRlci5zZXJ2aWNlLnRzIiwid2VicGFjazovL2VtaXR0ZXIvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvbW1vblwiIiwid2VicGFjazovL2VtaXR0ZXIvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvcmVcIiIsIndlYnBhY2s6Ly9lbWl0dGVyL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9taWNyb3NlcnZpY2VzXCIiLCJ3ZWJwYWNrOi8vZW1pdHRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbWl0dGVyLy4vYXBwcy9lbWl0dGVyL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENsaWVudHNNb2R1bGUsIFRyYW5zcG9ydCB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBFbWl0dGVyTW9kdWxlIH0gZnJvbSAnLi9lbWl0dGVyL2VtaXR0ZXIubW9kdWxlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtFbWl0dGVyTW9kdWxlXSxcbiAgY29udHJvbGxlcnM6IFtdLFxuICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBFbWl0dGVyU2VydmljZSB9IGZyb20gJy4vZW1pdHRlci5zZXJ2aWNlJztcblxuQENvbnRyb2xsZXIoKVxuZXhwb3J0IGNsYXNzIEVtaXR0ZXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbWl0dGVyU2VydmljZTogRW1pdHRlclNlcnZpY2UpIHtcbiAgICAvLyAgaW50ZXJ2YWxsXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0dGVyU2VydmljZS5lbWl0KCk7XG4gICAgfSwgNTAwMCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9lbWl0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRW1pdHRlckNvbnRyb2xsZXIgfSBmcm9tICcuL2VtaXR0ZXIuY29udHJvbGxlcic7XG5pbXBvcnQgeyBDbGllbnRzTW9kdWxlLCBUcmFuc3BvcnQgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENsaWVudHNNb2R1bGUucmVnaXN0ZXIoW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnRU1JVFRFUicsXG4gICAgICAgIHRyYW5zcG9ydDogVHJhbnNwb3J0LlJFRElTLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgdXJsOiAncmVkaXM6Ly9sb2NhbGhvc3Q6NjM3OScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0pLFxuICBdLFxuICBjb250cm9sbGVyczogW0VtaXR0ZXJDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbRW1pdHRlclNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBFbWl0dGVyTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDbGllbnRQcm94eSB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbWl0dGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ0VNSVRURVInKSBwcml2YXRlIHJlYWRvbmx5IGNsaWVudDogQ2xpZW50UHJveHkpIHt9XG5cbiAgZW1pdCgpIHtcbiAgICB0aGlzLmNsaWVudC5lbWl0KCdYJywgeyBkYXRhOiAnSGVsbG8gV29ybGQnIH0pO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvbW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9taWNyb3NlcnZpY2VzXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBOZXN0RmFjdG9yeSB9IGZyb20gJ0BuZXN0anMvY29yZSc7XG5pbXBvcnQgeyBNaWNyb3NlcnZpY2VPcHRpb25zLCBUcmFuc3BvcnQgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcblxuYXN5bmMgZnVuY3Rpb24gYm9vdHN0cmFwKCkge1xuICBjb25zdCBhcHAgPSBhd2FpdCBOZXN0RmFjdG9yeS5jcmVhdGVNaWNyb3NlcnZpY2U8TWljcm9zZXJ2aWNlT3B0aW9ucz4oXG4gICAgQXBwTW9kdWxlLFxuICAgIHtcbiAgICAgIHRyYW5zcG9ydDogVHJhbnNwb3J0LlJFRElTLFxuICAgIH0sXG4gICk7XG4gIGFwcC5saXN0ZW4oKTtcbn1cbmJvb3RzdHJhcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9