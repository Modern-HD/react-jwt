import express, { NextFunction, Request, Response } from 'express';
import boardRouter from "./router/board_router";
import memberRouter from "./router/memer_router";
import auth_router from "./router/auth_router";
import cookieParser from "cookie-parser";

const app = express();
const port: number = 8077;

app.use(express.json());
app.use(cookieParser());
app.use(boardRouter);
app.use(memberRouter);
app.use(auth_router);

app.get("/hello", (req: Request, res: Response) => {
    res.send("hello world!");
})

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send('Sorry cant find that!');
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.listen(port, () => { 
})