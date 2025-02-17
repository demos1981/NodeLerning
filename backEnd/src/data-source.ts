import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/users.entity";
import { RefreshToken } from "./entities/refresh-tokens.entity";
import { Product } from "./entities/product.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: [User, RefreshToken, Product],
});

// export const AppDataSource = new DataSource({
//   type: "postgres",
//   url:
//     process.env.DATABASE_URL ||
//     "postgres://neondb_owner:npg_5ys8WEDgqiOL@ep-aged-cloud-a2ax2cul-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require",
//   synchronize: true,
//   logging: false,
//   entities: [User, RefreshToken, Product],
// });

//("postgres://neondb_owner:npg_5ys8WEDgqiOL@ep-aged-cloud-a2ax2cul-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require");
