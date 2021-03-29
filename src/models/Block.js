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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Class_1 = __importDefault(require("./Class"));
let Block = class Block {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Block.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Block.prototype, "video", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Block.prototype, "image", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Block.prototype, "text", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Block.prototype, "class_id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Class_1.default, className => className.block),
    typeorm_1.JoinColumn({ name: 'class_id', referencedColumnName: 'id' }),
    __metadata("design:type", Class_1.default)
], Block.prototype, "classes", void 0);
Block = __decorate([
    typeorm_1.Entity('blocks')
], Block);
exports.default = Block;
