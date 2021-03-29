"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Block_1 = __importDefault(require("../models/Block"));
exports.default = {
    async store(request, response) {
        const { video, image, text } = request.body;
        const { id } = request.params;
        if (!id) {
            return response.json({ message: 'The block should have params id.' });
        }
        if (!video || !image || !text) {
            return response.json({ message: 'The body need have video, image and text.' });
        }
        const repository = typeorm_1.getRepository(Block_1.default);
        const block = repository.create({
            video,
            image,
            text,
            class_id: Number.parseInt(id)
        });
        try {
            const result = await repository.save(block);
            return response.json(result);
        }
        catch (error) {
            return response.json(error);
        }
    },
    async index(request, response) {
        const { class_id } = request.params;
        const repository = typeorm_1.getRepository(Block_1.default);
        try {
            const blocks = await repository.find({ where: { class_id } });
            if (!blocks) {
                return response.status(404).json({ message: 'No more block' });
            }
            return response.json(blocks);
        }
        catch (error) {
            return response.json(error);
        }
    },
    async show(request, response) {
        const { block_id } = request.params;
        const repository = typeorm_1.getRepository(Block_1.default);
        try {
            const blocks = await repository.find({ where: { id: block_id } });
            return response.json(blocks);
        }
        catch (error) {
            return response.json(error);
        }
    },
    async controllsBlock(request, response) {
        const { block_id, class_id } = request.params;
        const repository = typeorm_1.getRepository(Block_1.default);
        try {
            const blocks = await repository.find({ where: { class_id, id: block_id } });
            return response.json(blocks);
        }
        catch (error) {
            return response.json(error);
        }
    }
};
