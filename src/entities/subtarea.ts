import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario';
import { Tarea } from './tarea';

@Entity('subtareas') 
export class Subtarea {
    @PrimaryGeneratedColumn({name:'id_subtarea'})
    idSubtarea: number;

    @Column({name:'nombre'})
    nombre: string;

    @Column({name:'descripcion'})
    descripcion: string;

    @Column({name:'fecha_creacion'})
    fechaCreacion: Date;

    @Column({name:'fecha_limite'})
    fechaLimite: Date;    

    @Column({name:'fecha_terminacion'})
    fechaTerminacion: Date;

    @Column({name:'estado'})
    estado: string;

    @ManyToOne(()=>Tarea,(tarea)=>tarea.subtareas)
    @JoinColumn({name: 'id_tarea'})
    tareas: Tarea; 

    @ManyToOne(()=>Usuario,(usuario)=>usuario.tareas)
    @JoinColumn({name: 'id_usuario_asignado'})
    usuarios: Usuario; 

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;
    
    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;
}