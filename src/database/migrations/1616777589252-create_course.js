"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse1616764288457 = void 0;
const typeorm_1 = require("typeorm");
class createCourse1616764288457 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'courses',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'image',
                    type: 'varchar'
                },
                {
                    name: 'description',
                    type: 'varchar'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('courses');
    }
}
exports.createCourse1616764288457 = createCourse1616764288457;
