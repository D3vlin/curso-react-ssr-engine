import express, {Express, Request, Response} from 'express'
import { config } from './config'
import { template } from './render/template'

const app: Express = express()

app.get('*', (req: Request, res: Response) => {
    res.send(template(`From ${req.url}`))
})

app.listen(config.PORT, () => {
    console.log(`Listening in http://localhost:${config.PORT}`);
    
})