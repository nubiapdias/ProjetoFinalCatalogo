import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const connect = new Sequelize(
    process.env.DATABASE_URL,
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }

);