import express from "express";
import path from "path";
const app = express();
const port = 8080; // default portnumber

// configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// default homepage route handler
app.get("/", (req, res) => {
    // render the index template
    res.render("index");
});

// start Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
