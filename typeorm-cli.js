"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
const typeorm_1 = require("typeorm");
const _1731712390430_firstmigrations_1 = require("./src/migrations/1731712390430-firstmigrations");
const config = {
    type: "postgres",
    host: `localhost`,
    port: `5432`,
    username: `postgres`,
    password: `123`,
    database: `facts`,
    entities: [__dirname + "/src/**/*.entity{.ts,.js}"],
    migrations: [_1731712390430_firstmigrations_1.Firstmigrations1731712390430],
    autoLoadEntities: true,
    synchronize: false,
};
exports.connectionSource = new typeorm_1.DataSource(config);
//# sourceMappingURL=typeorm-cli.js.map