import { MigrationInterface, QueryRunner } from "typeorm";

export class user1619204891679 implements MigrationInterface {
  name = 'user1619204891679'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE users (
        id varchar(36) NOT NULL,
        isActive tinyint NOT NULL DEFAULT 1,
        createdAt timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
        updatedAt timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
        email varchar(255) NOT NULL,
        name varchar(255) NOT NULL,
        password varchar(255) NOT NULL,
        role enum ('admin', 'user', 'api') NOT NULL DEFAULT 'user',
        UNIQUE INDEX IDX_97672ac88f789774dd47f7c8be (email),
        PRIMARY KEY (id)
      ) ENGINE=InnoDB`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`");
    await queryRunner.query("DROP TABLE `users`");
  }

}
