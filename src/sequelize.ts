import { Options } from "sequelize";

export const sequelizeConnectionOptions: Options = {
  dialect: "mysql",
  database: process.env.DATABASE_NAME ?? "cli",
  username: process.env.DATABASE_USERNAME ?? "root",
  password: process.env.DATABASE_PASSWORD ?? "root",
  host: process.env.DATABASE_HOST ?? "localhost",
};
