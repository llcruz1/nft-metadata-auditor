import express, { Express } from "express";
import routes from "./routes";
import { corsMiddleware } from "./middleware/cors";

const app: Express = express();
const port = 5000;

app.use(corsMiddleware);
app.use(routes);

app.listen(port, () => {
  console.log(`Server started at https://localhost:${port}`);
});
