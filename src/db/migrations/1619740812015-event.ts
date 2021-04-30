import { MigrationInterface, QueryRunner } from "typeorm";

export class event1619740812015 implements MigrationInterface {
    name = 'event1619740812015'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `event` (`id` varchar(36) NOT NULL, `isActive` tinyint NOT NULL DEFAULT 1, `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `requesterId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")
        await queryRunner.query("ALTER TABLE `event` ADD CONSTRAINT `FK_451c447093a4530bcbc89f1b754` FOREIGN KEY (`requesterId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `event` DROP FOREIGN KEY `FK_451c447093a4530bcbc89f1b754`")
        await queryRunner.query("DROP TABLE `event`")
    }

}
