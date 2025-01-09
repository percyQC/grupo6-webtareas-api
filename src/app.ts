import express,{Application} from 'express';
import morgan from 'morgan';
import { AppDataSource} from './config/db.config';
import equipoRouter from './routes/equipo.route';
import rolRouter from './routes/rol.route';
import usuarioRouter from './routes/usuario.route';
import tareaRouter from './routes/tarea.route';
import asignacionRouter from './routes/asignacion.route';
import subtareaRouter from './routes/subtarea.router';
import usuarioEquipoRouter from './routes/usuario-equipo.route';

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/equipo',equipoRouter);
app.use('/api/v1/rol',rolRouter);
app.use('/api/v1/usuario',usuarioRouter);
app.use('/api/v1/tarea',tareaRouter);
app.use('/api/v1/asignacion',asignacionRouter);
app.use('/api/v1/subtarea',subtareaRouter);
app.use('/api/v1/usuarioEquipo',usuarioEquipoRouter);


export const startServer = async ()=>{
    try {
        await AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos',error);
    }
}

export default app;