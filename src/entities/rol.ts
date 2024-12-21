import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles')
export class Rol{
    @PrimaryGeneratedColumn({name: 'id_rol'})
    idRol: Number;

    @Column({name: 'nombre'})
    nombre: string;
    
    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;

}