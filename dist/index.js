"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const data_1 = require("./api/data");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Express + TypeScript server + Zkouška');
});
app.get('/api/movies', (req, res) => {
    res.send(data_1.movies);
});
app.get('/api/movies/:id', (req, res) => {
    const id = Number(req.params.id);
    const movie = data_1.movies.find(movie => movie.id === id);
    if (movie) {
        res.status(200).send('You have chosen ' + movie.name + `, this movie is from year ` + movie.year + '.');
    }
    else {
        res.status(404).send('This movie does not exist in database');
    }
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
// zanořit jednotlivý api volání podle předmětu volání a podívat se jak se dělají controllery
