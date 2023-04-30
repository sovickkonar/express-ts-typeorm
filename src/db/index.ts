import "reflect-metadata";
import { DataSource } from 'typeorm';

import { UserEntity } from './user.entity';

export const data_source = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "typeorm-blogs",
    synchronize: true,
    logging: false,
    entities: [UserEntity],
    subscribers: [],
    migrations: [],
});