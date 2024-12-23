import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tarea } from "./tarea";
import { Equipo } from "./equipo";

@Entity('asignaciones')
export class Asignacion {
    @PrimaryGeneratedColumn({name: 'id_asignacion'})
    idAsignacion: number;

    @ManyToOne(()=>Tarea,(tarea)=>tarea.asignaciones)
    @JoinColumn({name: 'id_tarea'})
    tarea: Tarea; 

    @ManyToOne(()=>Equipo,(equipo)=>equipo.asignaciones)
    @JoinColumn({name: 'id_equipo'})
    equipo: Equipo;
    
    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;
}