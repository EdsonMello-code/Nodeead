"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBlock1616784399433 = void 0;
const typeorm_1 = require("typeorm");
class createBlock1616784399433 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'blocks',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'video',
                    type: 'varchar'
                },
                {
                    name: 'image',
                    type: 'varchar'
                },
                {
                    name: 'text',
                    type: 'varchar'
                },
                {
                    name: 'class_id',
                    type: 'int'
                }
            ],
            foreignKeys: [
                {
                    name: 'block',
                    columnNames: ['class_id'],
                    referencedTableName: 'classes',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('blocks');
    }
}
exports.createBlock1616784399433 = createBlock1616784399433;
