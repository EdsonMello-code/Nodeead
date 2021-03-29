"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BlockController_1 = __importDefault(require("./controllers/BlockController"));
const ClassController_1 = __importDefault(require("./controllers/ClassController"));
const CourseController_1 = __importDefault(require("./controllers/CourseController"));
const routes = express_1.Router();
routes.post('/courses', CourseController_1.default.store);
routes.get('/courses', CourseController_1.default.index);
routes.get('/courses/class/:course_id', ClassController_1.default.index);
routes.post('/courses/:id/class', ClassController_1.default.store);
routes.post('/courses/class/:id/block', BlockController_1.default.store);
routes.get('/courses/class/:class_id/block', BlockController_1.default.index);
routes.get('/courses/class/:class_id/block/:block_id', BlockController_1.default.controllsBlock);
routes.get('/courses/class/block/:block_id/content', BlockController_1.default.show);
exports.default = routes;
