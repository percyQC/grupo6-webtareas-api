import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tarea } from "./tarea";
import { Asignacion } from "./asignacion";
import { usuarioEquipo } from "./usuario-equipo";

@Entity('equipos')
export class Equipo{
    @PrimaryGeneratedColumn({name: 'id_equipo'})
    idEquipo: Number;

    @Column({name: 'nombre'})
    nombre: string;

    @Column({name: 'descripcion'})
    descripcion: string;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;

    @OneToMany(()=>Tarea,(tarea)=>tarea.equipo)
    tareas: Tarea[];
    
    @OneToMany(()=>usuarioEquipo,(usuarioequipo)=>usuarioequipo)
    usuarioequipo: usuarioEquipo[];

}