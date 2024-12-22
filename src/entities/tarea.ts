import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoTarea } from "./tipo-tarea";
import { Equipo } from "./equipo";
import { Usuario } from "./usuario";

@Entity('tareas')
export class Tarea{
    @PrimaryGeneratedColumn({name:'id_tarea'})
    idUsuario: number;
    
    @Column({name:'nombre'})
    nombre: string;

    @Column({name:'descripcion'})
    descripcion: string;

    @ManyToOne(()=>TipoTarea,(tipotarea)=>tipotarea.tareas)
    @JoinColumn({name: 'id_tipo_tarea'})
    tipotarea: TipoTarea;

    @Column({name:'fecha_creacion'})
    fechaCreacion: Date;

    @Column({name:'fecha_limite'})
    fechaLimite: Date;    

    @Column({name:'fecha_terminacion'})
    fechaTerminacion: Date;

    @Column({name:'comentario'})
    comentario: string;

    @Column({name:'prioridad'})
    prioridad: string;

    @Column({name:'estado'})
    estado: string;

    @ManyToOne(()=>Usuario,(usuario)=>usuario.tareas)
    @JoinColumn({name: 'id_usuario_creador'})
    usuario: Usuario; 

    @ManyToOne(()=>Equipo,(equipo)=>equipo.tareas)
    @JoinColumn({name: 'id_equipo'})
    equipo: Equipo;
    
    @Column({name:'mensaje_notificacion'})
    mensajeNotificacion: string;

    @Column({name:'estado_notificacion'})
    estadoNotificacion: string;

    @Column({name:'fecha_envio_notificacion'})
    fechaEnvioNotificacion: Date;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;
    
    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;

}