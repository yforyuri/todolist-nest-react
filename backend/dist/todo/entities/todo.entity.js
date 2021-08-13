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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const common_entity_1 = require("../../common/common.entity");
const typeorm_1 = require("typeorm");
let Todo = class Todo extends common_entity_1.Common {
};
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
    __metadata("design:type", Boolean)
], Todo.prototype, "isComplete", void 0);
Todo = __decorate([
    typeorm_1.Entity()
], Todo);
exports.Todo = Todo;
//# sourceMappingURL=todo.entity.js.map