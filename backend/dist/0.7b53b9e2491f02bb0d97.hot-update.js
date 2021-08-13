exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 17:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TodoController = void 0;
const common_1 = __webpack_require__(7);
const createTodo_dto_1 = __webpack_require__(18);
const todo_service_1 = __webpack_require__(14);
let TodoController = class TodoController {
    constructor(todoServices) {
        this.todoServices = todoServices;
    }
    async createTodo(createTodoDto) {
        return await this.todoServices.createTodo(createTodoDto);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof createTodo_dto_1.CreateTodoDto !== "undefined" && createTodo_dto_1.CreateTodoDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "createTodo", null);
TodoController = __decorate([
    common_1.Controller('todo'),
    __metadata("design:paramtypes", [typeof (_b = typeof todo_service_1.TodoService !== "undefined" && todo_service_1.TodoService) === "function" ? _b : Object])
], TodoController);
exports.TodoController = TodoController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("628e76a55ccd5b4f9ad1")
/******/ })();
/******/ 
/******/ }
;