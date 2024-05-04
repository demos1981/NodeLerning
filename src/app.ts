import dotenv from "dotenv";
dotenv.config();

import "reflect-metadata";
import express, { Express } from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";
import hpp from "hpp";
import bodyParser from "body-parser";
import cors from "cors";
import { AppDataSource } from "./data-source";
import routesAuth from "./routes/auth";
import routesUser from "./routes/user";
import routesProduct from "./routes/product";
import morgan from "morgan";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const loggerMiddleware = morgan("dev");
const app: Express = express();

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(compression());
app.use(helmet());
app.use(hpp());
app.use(loggerMiddleware);

app.use("/api/auth", routesAuth);
app.use("/api/users", routesUser);
app.use("/api/products", routesProduct);

app.get("/", (req, res) => {
  res.send("Hello, server is listen ");
});

const options = {
  swaggerDefinition: {
    info: {
      title: "REST API",
      version: "1.0.0",
      description: "Example docs",
    },
  },
  apis: ["swagger.yaml"],
};

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const PORT: number = parseInt(process.env.PORT || "3000", 10);

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log("Error:", error));
