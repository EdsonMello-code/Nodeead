"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Class_1 = __importDefault(require("../models/Class"));
exports.default = {
    async store(request, response) {
        const { title, description, image } = request.body;
        const { id } = request.params;
        if (!id) {
            return response.json('The block should have params id.');
        }
        if (!title || !description || !image) {
            return response.json('Some field not informated.');
        }
        const repository = typeorm_1.getRepository(Class_1.default);
        const className = repository.create({
            title,
            description,
            image,
            course_id: Number.parseInt(id),
        });
        try {
            const result = await repository.save(className);
            return response.json(result);
        }
        catch (error) {
            return response.json(error);
        }
    },
    async index(request, response) {
        const repository = typeorm_1.getRepository(Class_1.default);
        const { course_id } = request.params;
        try {
            const classes = await repository.find({ where: { course_id } });
            return response.json(classes);
        }
        catch (error) {
            return response.json(error);
        }
    },
    async show(request, response) {
        const { id } = request.params;
        const repository = typeorm_1.getRepository(Class_1.default);
        try {
            const course = await repository.findByIds([Number.parseInt(id)]);
            return response.json(course);
        }
        catch (error) {
            return response.json({ error });
        }
    }
};
