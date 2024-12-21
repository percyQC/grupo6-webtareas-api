import express,{Application} from 'express';
import morgan from 'morgan';
import equipoRouter from './src/routes/equipo.route';
import { AppDataSource} from './src/config/db.config';


const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/equipo',equipoRouter);
app.use(morgan('dev'));

export const startServer = async ()=>{
    try {
        await AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos',error);
    }
}

export default app;