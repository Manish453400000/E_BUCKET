"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
exports.app = app;
function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(403);
}
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
app.use(express_1.default.json({ limit: "16kb" }));
app.use(express_1.default.urlencoded({ extended: true, limit: "16kb" }));
app.use(express_1.default.static("public"));
app.use((0, cookie_parser_1.default)());
//routes
// app.use("/api/v1", userRouter);
app.get("/", (req, res) => {
    res.status(200).send("<a href='/auth/google'>Click here </a>");
});
require("./config/auth");
const passport_1 = __importDefault(require("passport"));
app.get('/auth/google', passport_1.default.authenticate('google', { scope: ['email', 'profile'] }));
app.get('/protected', isLoggedIn, (req, res) => {
    res.send('!Hello');
});
app.get('/failure', (req, res) => {
    res.send('!failed');
});
app.get('/data', (req, res) => {
    passport_1.default.authenticate('google', {
        successRedirect: '/protected',
        failureRedirect: '/failure'
    });
});
