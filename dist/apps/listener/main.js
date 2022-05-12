/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/listener/src/listener.controller.ts":
/*!**************************************************!*\
  !*** ./apps/listener/src/listener.controller.ts ***!
  \**************************************************/
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
exports.ListenerController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const listener_service_1 = __webpack_require__(/*! ./listener.service */ "./apps/listener/src/listener.service.ts");
let ListenerController = class ListenerController {
    constructor(listenerService) {
        this.listenerService = listenerService;
    }
    async onEvent(data) {
        console.log('received event: ', data);
    }
};
__decorate([
    (0, microservices_1.EventPattern)('X'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ListenerController.prototype, "onEvent", null);
ListenerController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof listener_service_1.ListenerService !== "undefined" && listener_service_1.ListenerService) === "function" ? _a : Object])
], ListenerController);
exports.ListenerController = ListenerController;


/***/ }),

/***/ "./apps/listener/src/listener.module.ts":
/*!**********************************************!*\
  !*** ./apps/listener/src/listener.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListenerModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const listener_controller_1 = __webpack_require__(/*! ./listener.controller */ "./apps/listener/src/listener.controller.ts");
const listener_service_1 = __webpack_require__(/*! ./listener.service */ "./apps/listener/src/listener.service.ts");
let ListenerModule = class ListenerModule {
};
ListenerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'LISTENER',
                    transport: microservices_1.Transport.REDIS,
                    options: {
                        url: 'redis://localhost:6379',
                    },
                },
            ]),
        ],
        controllers: [listener_controller_1.ListenerController],
        providers: [listener_service_1.ListenerService],
    })
], ListenerModule);
exports.ListenerModule = ListenerModule;


/***/ }),

/***/ "./apps/listener/src/listener.service.ts":
/*!***********************************************!*\
  !*** ./apps/listener/src/listener.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListenerService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ListenerService = class ListenerService {
    getHello() {
        return 'Hello World!';
    }
};
ListenerService = __decorate([
    (0, common_1.Injectable)()
], ListenerService);
exports.ListenerService = ListenerService;


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
/*!***********************************!*\
  !*** ./apps/listener/src/main.ts ***!
  \***********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const listener_module_1 = __webpack_require__(/*! ./listener.module */ "./apps/listener/src/listener.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(listener_module_1.ListenerModule, {
        transport: microservices_1.Transport.REDIS,
    });
    app.listen();
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcy9saXN0ZW5lci9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQTRDO0FBQzVDLGtHQUFxRDtBQUNyRCxvSEFBcUQ7QUFHckQsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFDN0IsWUFBNkIsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUcsQ0FBQztJQUdqRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQVM7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0Y7QUFIQztJQURDLGdDQUFZLEVBQUMsR0FBRyxDQUFDOzs7O2lEQUdqQjtBQU5VLGtCQUFrQjtJQUQ5Qix1QkFBVSxHQUFFO3lEQUVtQyxrQ0FBZSxvQkFBZixrQ0FBZTtHQURsRCxrQkFBa0IsQ0FPOUI7QUFQWSxnREFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTC9CLDZFQUF3QztBQUN4QyxrR0FBaUU7QUFDakUsNkhBQTJEO0FBQzNELG9IQUFxRDtBQWlCckQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztDQUFHO0FBQWpCLGNBQWM7SUFmMUIsbUJBQU0sRUFBQztRQUNOLE9BQU8sRUFBRTtZQUNQLDZCQUFhLENBQUMsUUFBUSxDQUFDO2dCQUNyQjtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsU0FBUyxFQUFFLHlCQUFTLENBQUMsS0FBSztvQkFDMUIsT0FBTyxFQUFFO3dCQUNQLEdBQUcsRUFBRSx3QkFBd0I7cUJBQzlCO2lCQUNGO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsV0FBVyxFQUFFLENBQUMsd0NBQWtCLENBQUM7UUFDakMsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztLQUM3QixDQUFDO0dBQ1csY0FBYyxDQUFHO0FBQWpCLHdDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCM0IsNkVBQTRDO0FBRzVDLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFDMUIsUUFBUTtRQUNOLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7Q0FDRjtBQUpZLGVBQWU7SUFEM0IsdUJBQVUsR0FBRTtHQUNBLGVBQWUsQ0FJM0I7QUFKWSwwQ0FBZTs7Ozs7Ozs7Ozs7QUNINUI7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUN0QkEsdUVBQTJDO0FBQzNDLGtHQUF1RTtBQUN2RSxpSEFBbUQ7QUFFbkQsS0FBSyxVQUFVLFNBQVM7SUFDdEIsTUFBTSxHQUFHLEdBQUcsTUFBTSxrQkFBVyxDQUFDLGtCQUFrQixDQUM5QyxnQ0FBYyxFQUNkO1FBQ0UsU0FBUyxFQUFFLHlCQUFTLENBQUMsS0FBSztLQUMzQixDQUNGLENBQUM7SUFDRixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDZixDQUFDO0FBQ0QsU0FBUyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbWl0dGVyLy4vYXBwcy9saXN0ZW5lci9zcmMvbGlzdGVuZXIuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9lbWl0dGVyLy4vYXBwcy9saXN0ZW5lci9zcmMvbGlzdGVuZXIubW9kdWxlLnRzIiwid2VicGFjazovL2VtaXR0ZXIvLi9hcHBzL2xpc3RlbmVyL3NyYy9saXN0ZW5lci5zZXJ2aWNlLnRzIiwid2VicGFjazovL2VtaXR0ZXIvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvbW1vblwiIiwid2VicGFjazovL2VtaXR0ZXIvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvcmVcIiIsIndlYnBhY2s6Ly9lbWl0dGVyL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9taWNyb3NlcnZpY2VzXCIiLCJ3ZWJwYWNrOi8vZW1pdHRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbWl0dGVyLy4vYXBwcy9saXN0ZW5lci9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgRXZlbnRQYXR0ZXJuIH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IExpc3RlbmVyU2VydmljZSB9IGZyb20gJy4vbGlzdGVuZXIuc2VydmljZSc7XG5cbkBDb250cm9sbGVyKClcbmV4cG9ydCBjbGFzcyBMaXN0ZW5lckNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVyU2VydmljZTogTGlzdGVuZXJTZXJ2aWNlKSB7fVxuXG4gIEBFdmVudFBhdHRlcm4oJ1gnKVxuICBhc3luYyBvbkV2ZW50KGRhdGE6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWNlaXZlZCBldmVudDogJywgZGF0YSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENsaWVudHNNb2R1bGUsIFRyYW5zcG9ydCB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBMaXN0ZW5lckNvbnRyb2xsZXIgfSBmcm9tICcuL2xpc3RlbmVyLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgTGlzdGVuZXJTZXJ2aWNlIH0gZnJvbSAnLi9saXN0ZW5lci5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDbGllbnRzTW9kdWxlLnJlZ2lzdGVyKFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0xJU1RFTkVSJyxcbiAgICAgICAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuUkVESVMsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICB1cmw6ICdyZWRpczovL2xvY2FsaG9zdDo2Mzc5JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSksXG4gIF0sXG4gIGNvbnRyb2xsZXJzOiBbTGlzdGVuZXJDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbTGlzdGVuZXJTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdGVuZXJNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0ZW5lclNlcnZpY2Uge1xuICBnZXRIZWxsbygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnSGVsbG8gV29ybGQhJztcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb21tb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvbWljcm9zZXJ2aWNlc1wiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgTmVzdEZhY3RvcnkgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xuaW1wb3J0IHsgTWljcm9zZXJ2aWNlT3B0aW9ucywgVHJhbnNwb3J0IH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IExpc3RlbmVyTW9kdWxlIH0gZnJvbSAnLi9saXN0ZW5lci5tb2R1bGUnO1xuXG5hc3luYyBmdW5jdGlvbiBib290c3RyYXAoKSB7XG4gIGNvbnN0IGFwcCA9IGF3YWl0IE5lc3RGYWN0b3J5LmNyZWF0ZU1pY3Jvc2VydmljZTxNaWNyb3NlcnZpY2VPcHRpb25zPihcbiAgICBMaXN0ZW5lck1vZHVsZSxcbiAgICB7XG4gICAgICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5SRURJUyxcbiAgICB9LFxuICApO1xuICBhcHAubGlzdGVuKCk7XG59XG5ib290c3RyYXAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==