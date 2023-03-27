import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "./.env") });

const enviroment = ["PORT"];

enviroment.forEach(name => {
  if (!process.env[name]) {
    throw new Error(`${name}: ${process.env[name]}`);
  }
});

const config = {
  PORT: process.env.PORT
};

export default config;
