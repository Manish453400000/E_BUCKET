import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session'
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(session({secret: "cats"}))
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
)
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

//routes
app.get("/", (req, res) => {
  res.status(200).send("Hello")
})


export {app}