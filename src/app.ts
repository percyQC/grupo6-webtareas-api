import express,{Application} from 'express';
import morgan from 'morgan';
import equipoRouter from './routes/equipo.route';
import rolRouter from './routes/rol.route';
import { AppDataSource} from './config/db.config';
import usuarioRouter from './routes/usuario.route';
import tareaRouter from './routes/tarea.route';
import asignacionRouter from './routes/asignacion.route';

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/equipo',equipoRouter);
app.use('/api/v1/rol',rolRouter);
app.use('/api/v1/usuario',usuarioRouter);
app.use('/api/v1/tarea',tareaRouter);
app.use('/api/v1/asignacion',asignacionRouter);


export const startServer = async ()=>{
    try {
        await AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos',error);
    }
}

export default app;