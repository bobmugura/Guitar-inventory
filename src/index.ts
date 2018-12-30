import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as sessionAuth from "./middleware/sessionAuth";
import * as routes from "./routes";

// initialize configuration
dotenv.config();

// default portnumber
const port = process.env.SERVER_PORT;

const app = express();

// configure Express to parse incoming JSON data
app.use(express.json());

// configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// configure Express to serve static files in the public folder
app.use(express.static(path.join(__dirname, "public")));

// configure session auth
sessionAuth.register(app);

// configure routes
routes.register(app);

// start Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
