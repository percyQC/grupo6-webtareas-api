import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tarea } from "./tarea";

@Entity('tipo_tareas')
export class TipoTarea{
    @PrimaryGeneratedColumn({name: 'id_tipo_tarea'})
    idTipoTarea: Number;

    @Column({name: 'nombre'})
    nombre: string;
    
    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;


    @OneToMany(()=>Tarea,(tarea)=>tarea.tipotarea)
    tareas: Tarea[];

}