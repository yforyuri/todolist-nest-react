exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 16:
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Todo = void 0;
const swagger_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(17);
const typeorm_1 = __webpack_require__(15);
let Todo = class Todo {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Todo.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty({
        example: 'Eat',
        description: '투두리스트의 제목'
    }),
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], Todo.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty({
        example: 'get energy',
        description: '투두리스트의 실횅'
    }),
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], Todo.prototype, "desc", void 0);
__decorate([
    typeorm_1.Column('boolean', { default: false }),
    __metadata("design:type", typeof (_a = typeof Boolean !== "undefined" && Boolean) === "function" ? _a : Object)
], Todo.prototype, "isDone", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Todo.prototype, "createDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Todo.prototype, "updateDate", void 0);
Todo = __decorate([
    typeorm_1.Entity()
], Todo);
exports.Todo = Todo;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("461f1aad8e415cd0c404")
/******/ })();
/******/ 
/******/ }
;