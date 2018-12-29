import express from "express";
const app = express();
const port = 8080; // default portnumber

// default homepage route handler
app.get("/", (req: any, res: any) => {
    res.send("Hello World!");
});

// start Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
