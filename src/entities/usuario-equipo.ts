import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario";
import { Equipo } from "./equipo";

@Entity('usuario_equipo')
export class usuarioEquipo{
    @PrimaryGeneratedColumn({name:'id_usuario_equipo'})
    idUsuarioEquipo: number;

    @ManyToOne(()=>Usuario,(usuario)=>usuario.usuarioequipo)
    @JoinColumn({name: 'id_usuario'})
    usuario: Usuario; 
    
    @ManyToOne(()=>Equipo,(equipo)=>equipo.usuarioequipo)
    @JoinColumn({name: 'id_equipo'})
    equipo: Equipo;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;
        
    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;

}