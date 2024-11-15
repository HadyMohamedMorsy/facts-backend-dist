"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
const _1731712390430_firstmigrations_1 = require("./src/migrations/1731712390430-firstmigrations");
(0, dotenv_1.config)({ path: ".env" });
const config = {
    type: "postgres",
    host: `${process.env.DATABASE_HOST}`,
    port: `${process.env.DATABASE_PORT}`,
    username: `${process.env.DATABASE_USER}`,
    password: `${process.env.DATABASE_PASSWORD}`,
    database: `${process.env.DATABASE_NAME}`,
    entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: [_1731712390430_firstmigrations_1.Firstmigrations1731712390430],
    autoLoadEntities: true,
    synchronize: false,
};
exports.connectionSource = new typeorm_1.DataSource(config);
//# sourceMappingURL=typeorm-cli.js.map