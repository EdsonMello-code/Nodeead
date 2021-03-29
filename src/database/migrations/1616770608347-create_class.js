"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClass1616764814366 = void 0;
const typeorm_1 = require("typeorm");
class createClass1616764814366 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'classes',
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
                    type: 'varchar'
                },
                {
                    name: 'image',
                    type: 'varchar'
                },
                {
                    name: 'description',
                    type: 'varchar'
                },
                {
                    name: 'course_id',
                    type: 'int'
                },
            ],
            foreignKeys: [
                {
                    name: 'Course',
                    columnNames: ['course_id'],
                    referencedTableName: 'courses',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('classes');
    }
}
exports.createClass1616764814366 = createClass1616764814366;
