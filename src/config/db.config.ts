import { DataSource } from "typeorm";
import { db_database, db_host, db_password, db_port, db_type, db_username } from "../shared/constants";
import { Equipo } from "../entities/equipo";
import { Rol } from "../entities/rol";
import { Usuario } from "../entities/usuario";
import { Tarea } from "../entities/tarea";
import { Asignacion } from "../entities/asignacion";
import { Subtarea } from "../entities/subtarea";
import { usuarioEquipo } from "../entities/usuario-equipo";
import { TipoTarea } from "../entities/tipo-tarea";


export const AppDataSource = new DataSource({
    type: db_type as "postgres" | "mysql" | "mssql" | "sqlite" | "oracle",
    host: db_host,
    port: Number(db_port||'0'),
    username: db_username,
    password: db_password,
    database: db_database,
    entities: [Equipo,Rol,Usuario,Tarea,TipoTarea,Asignacion,Subtarea,usuarioEquipo,TipoTarea],
});