"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Course_1 = __importDefault(require("../models/Course"));
exports.default = {
    async store(request, response) {
        const { title, description, image } = request.body;
        if (!title || !description || !image) {
            return response.json('Some field not informated.');
        }
        const repository = typeorm_1.getRepository(Course_1.default);
        const course = repository.create({
            title,
            description,
            image
        });
        try {
            const result = await repository.save(course);
            return response.json(result);
        }
        catch (error) {
            return response.json(error);
        }
    },
    async index(request, response) {
        const repository = typeorm_1.getRepository(Course_1.default);
        try {
            const course = await repository.find({ relations: ['classes'] });
            return response.json({ course });
        }
        catch (error) {
            return response.json(error);
        }
    }
};
