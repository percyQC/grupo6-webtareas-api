import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Rol } from "./rol";
import { Tarea } from "./tarea";
import { Asignacion } from "./asignacion";
import { Subtarea } from "./subtarea";

@Entity('usuarios')
export class Usuario{
    @PrimaryGeneratedColumn({name:'id_usuario'})
    idUsuario: number;
    
    @Column({name:'nombre'})
    nombre: string;

    @Column({name:'apellido_paterno'})
    ApellidoPaterno: string;

    @Column({name:'apellido_materno'})
    ApellidoMaterno: string;

    @Column({name:'correo'})
    correo: string;

    @Column({name:'clave'})
    clave: string;

    @ManyToOne(()=>Rol,(rol)=>rol.usuarios)
    @JoinColumn({name: 'id_rol'})
    rol: Rol;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;
    
    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;

    @OneToMany(()=>Tarea,(tarea)=>tarea.usuario)
    tareas: Tarea[];

    @OneToMany(()=>Asignacion,(asignacion)=>asignacion.usuario)
    asignaciones: Asignacion[];

    @OneToMany(()=>Subtarea,(subtarea)=>subtarea.usuario)
    subtareas: Subtarea[];
    

}