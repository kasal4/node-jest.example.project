import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'
import { movies } from './api/data';

dotenv.config()

const app: Express = express();
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript server + Zkouška')
})

app.get('/api/movies', (req: Request, res: Response) => {
    res.send(movies)
})

app.get('/api/movies/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const movie = movies.find( movie => movie.id === id)
    if(movie) {
        res.status(200).send('You have chosen ' + movie.name + `, this movie is from year ` + movie.year + '.') 
    } else {
        res.status(404).send('This movie does not exist in database')
    }
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})

// zanořit jednotlivý api volání podle předmětu volání a podívat se jak se dělají controllery
