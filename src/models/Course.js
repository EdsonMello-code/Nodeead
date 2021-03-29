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
let Course = class Course {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Course.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Course.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Course.prototype, "image", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Course.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(() => Class_1.default, className => className.course, {
        cascade: ['insert', 'update']
    }),
    typeorm_1.JoinColumn({ name: 'course_id' }),
    __metadata("design:type", Array)
], Course.prototype, "classes", void 0);
Course = __decorate([
    typeorm_1.Entity('courses')
], Course);
exports.default = Course;
