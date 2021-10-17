import express from "express"
import config from "./config"
import libroRoutes from './routes/libro.routes'

const app = express()

//SETTINGS
app.set('port', config.port)

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(libroRoutes)

export default app